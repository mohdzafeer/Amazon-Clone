import React from "react";
import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";
import {
  decreaseQuantity,
  deletProduct,
  increaseQuantity,
} from "@/store/nextSlice";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface cartProductsProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={item.image}
        alt="404"
      />
      <div className="flex items-center px-2 sm:px-1 gap-4 sm:flex-col sm:items-start">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600 hidden md:inline-flex lg:inline-flex">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              ${item.price}
            </span>
          </p>
          <div className="flex items-center gap-6 sm:gap-3 sm:flex-col sm:items-start">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 sm:px-2 sm:py-1 sm:w-16 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 sm:w-3 sm:h-3 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300 active:bg-gray-400"
              >
                <LuPlus />
              </span>
              <span className="font-semibold sm:font-medium">{item.quantity}</span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 sm:w-3 sm:h-3 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300 active:bg-gray-500"
              >
                <LuMinus />
              </span>
            </div>

            <div
              onClick={() => dispatch(deletProduct(item._id))}
              className="flex items-center gap-2 bg-blue-400 rounded-full font-semibold text-sm px-2 py-1 cursor-pointer shadow-lg shadow-gray-300 hover:bg-blue-500 duration-300 mt-2 active:bg-blue-600"
            >
              <IoMdClose />
              <p>Remove</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          ${Math.round(item.price * item.quantity)}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
