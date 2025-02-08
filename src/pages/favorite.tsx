import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import CardPayment from "@/components/CardPayment";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import FavProduct from "@/components/favProduct";
import { IoCart } from "react-icons/io5";
import ResetList from "@/components/ResetFavList";

const CartPage = () => {
  const { favoriteData } = useSelector((state: any) => state.next);
  const { productData } = useSelector((state: any) => state.next);
  return (
    // grid grid-cols-5
    // md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col md:w-[700px]
    <div className="flex flex-col">
      <div className="w-full mx-auto px-6 sm:px-2 grid lg:grid-cols-5  py-4  md:pl-3  md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
        {favoriteData.length > 0 ? (
          <>
            <div className="bg-white lg:col-span-4 p-4 rounded-lg  ">
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
                <p className="text-2xl font-semibold text-amazon_blue">
                  Favorite List
                </p>
                <p className="text-lg font-semibold text-amazon_blue">
                  Subtitle
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                {favoriteData.map((item: any) => (
                  <div key={item._id}>
                    <FavProduct item={item} />
                  </div>
                ))}
                <ResetList />
              </div>
            </div>
            <div className="bg-transparent h-10 col-span-1 p-4 rounded-lg flex items-center justify-center mb-5 mt-8 ">
              <div>
                <Link
                  href={"/cart"}
                  className="flex  items-center  justify-center rounded-lg active:bg-blue-400 hover:bg-blue-500 bg-gray-200 text-xl px-3 py-2 font-bold gap-2 duration-300 border-black border"
                >
                  Go to Cart <IoCart />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
            <h1 className="text-lg font-medium">Your Favorite List is Empty</h1>

            <Link
              className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-blue-400 hover:text-black duration-300 flex justify-center items-center mt-5 hover:font-bold"
              href="/"
            >
              Go to Shopping
            </Link>
          </div>
        )}
      </div>
      <div className="bg-white h-10 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg lg:text-xl md:text-lg sm:text-sm">
        {productData.length > 0 ? (
          <div>
            <p>
              You have something in your Cart{" "}
              <Link
                className="text-blue-400 hover:text-blue-500  font-semibold hover:underline duration-200 animate-pulse"
                href={"/cart"}
              >
                Checkout now
              </Link>
            </p>
          </div>
        ) : (
          <div>{""}</div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
