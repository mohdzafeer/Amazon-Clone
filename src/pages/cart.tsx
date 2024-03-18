import CartProduct from "@/components/CartProduct";
import ResetCart from "@/components/ResetCart";
import CardPayment from "@/components/CardPayment";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { productData } = useSelector((state: any) => state.next);
  return (
    // grid grid-cols-5
    // md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col md:w-[700px]
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-2 grid lg:grid-cols-5 gap-10 py-4  md:pl-3  md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
      {productData.length > 0 ? (
        <>
          <div className="bg-white lg:col-span-4 p-4 rounded-lg  ">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Subtitle</p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              {productData.map((item: any) => (
                <div key={item._id}>
                  <CartProduct item={item} />
                </div>
              ))}
              <ResetCart />
            </div>
          </div>
          <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center ">
            <CardPayment />
          </div>
        </>
      ) : (
        <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Your Cart is Empty</h1>

          <Link
            className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black duration-300 flex justify-center items-center mt-5 hover:font-bold"
            href="/"
          >
            Go to Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
