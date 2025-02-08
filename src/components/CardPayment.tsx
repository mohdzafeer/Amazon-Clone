import { loadStripe } from "@stripe/stripe-js";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import session from "redux-persist/lib/storage/session";

const CardPayment = () => {
  const { productData, userInfo } = useSelector((state: any) => state.next);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: any) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);

  // Stripe Payment
  const stripPromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();

  const handleCheckOut = async () => {
    const stripe = await stripPromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: productData,
        email: session?.user?.email,
      }),
    });
    const checkoutSession = await response.json();

    // Redirect user/customer to Stripe checkout
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result?.error) {
      alert(result?.error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 md:w-fit sm:w-fit text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for{" "}
          <span className="text-blue-400 font-semibold">FREE</span>{" "}
          shipping by choosing this option at checkout .See deatils...
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total :{" "}
        <span className="font-bold text-xl">${Math.round(totalAmount)}</span>
      </p>
      {userInfo ? (
        <div>
          <button
            onClick={handleCheckOut}
            className="w-full h-10 text-sm font-bold bg-blue-400 bg-opacity-100 text-black rounded-lg cursor-pointer hover:bg-blue-500 active:bg-blue-600 shadow hover:shadow-xl duration-300"
          >
            Proceed to Buy
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed ">
            Proceed to Buy
          </button>
          <p className="text-sm mt-3 text-red-500 font-semibold lg:text-lg md:text-lg sm:text-sm">
            Please{" "}
            <span
              onClick={() => signIn()}
              className="text-sm mt-3 text-red-500 font-semibold cursor-pointer hover:underline duration-200 lg:text-lg md:text-lg sm:text-sm"
            >
              Login
            </span>{" "}
            to continue
          </p>
        </div>
      )}
    </div>
  );
};

export default CardPayment;
