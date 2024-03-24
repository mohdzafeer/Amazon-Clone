import React from "react";
import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";
import {
    addToCart,
  decreaseQuantity,
  deletFavProduct,
  deletProduct,
  increaseQuantity,
} from "@/store/nextSlice";
import { IoMdCart, IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { IoCart } from "react-icons/io5";
import { ProductProps } from "../../types";

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

const FavProduct = ({ item }: cartProductsProps) => {
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
          <div className="flex-col">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600 hidden md:inline-flex lg:inline-flex">{item.description}</p>
          <p className="text-sm text-gray-950 my-3">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              ${item.price}
            </span>
          </p>
          </div>
          <div className="flex items-center gap-6 sm:gap-3 sm:flex-col sm:items-start">
            {/* <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 sm:px-2 sm:py-1 sm:w-16 rounded-full w-28 shadow-lg shadow-gray-300">
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
            </div> */}

            <div
              onClick={() => dispatch(deletFavProduct(item._id))}
              className="flex items-center gap-2 bg-amazon_yellow rounded-full font-semibold text-sm px-3 py-2 cursor-pointer shadow-lg shadow-gray-300 hover:bg-yellow-500 duration-300 mt-2 active:bg-yellow-600"
            >
              <IoMdClose />
              <p>Remove</p>
            </div>

            <div
              onClick={() =>
                dispatch(
                  addToCart({
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
              className="flex items-center gap-2 bg-amazon_yellow rounded-full font-semibold text-sm px-3 py-2 cursor-pointer shadow-lg shadow-gray-300 hover:bg-yellow-500 duration-300 mt-2 active:bg-yellow-600"
            >
              Add to Cart <IoMdCart className="text-2xl" />
              
              
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
  

export default FavProduct;
