import React from "react";
import Image from "next/image";
import { ProductProps } from "../../types";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";

//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
const Products = ({ productData }: any) => {
  const dispatch = useDispatch();

  const notifyCart=()=>{
    toast('Item Added to Cart ', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }
  const notifyFav=()=>{
    toast('Item Added to Favorite List ', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }

  return (
    <div className="w-full px-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => {
          return (
            <div
              key={_id}
              className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
            >
              <div className="w-full h-[400px] relative">
                <Image
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  width={300}
                  height={300}
                  src={image}
                  alt="image load failed"
                />
                <div
                  className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col
                translate-x-20 group-hover:translate-x-0 transition-transform duration-300"
                >
                  <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-blue-400 cursor-pointer duration-300 active:bg-blue-500">
                    <HiShoppingCart
                      onClick={() =>
                        dispatch(
                          addToCart({
                            _id: _id,
                            brand: brand,
                            category: category,
                            description: description,
                            image: image,
                            isNew: isNew,
                            oldPrice: oldPrice,
                            price: price,
                            title: title,
                            quantity: 1,
                          }),
                          notifyCart()
                        )
                      }
                    />
                  </span>
                  <span
                    onClick={() => {
                      dispatch(
                        addToFavorite({
                          _id: _id,
                          brand: brand,
                          category: category,
                          description: description,
                          image: image,
                          isNew: isNew,
                          oldPrice: oldPrice,
                          price: price,
                          title: title,
                          quantity: 1,
                        }),
                        notifyFav()
                      );
                    }}
                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-blue-400 cursor-pointer duration-300 active:bg-blue-500"
                  >
                    <FaHeart />
                  </span>
                </div>
                {isNew && (
                  <p className="absolute top-0 right-0 text-black font-semibold text-sm tracking-wide animate-bounce">
                    {" "}
                    Save ${Math.round(oldPrice - price)}
                  </p>
                )}
              </div>
              <hr />
              <div className="px-4 py-3 flex flex-col gap-1">
                <p className="text-xs text-gray-500 tracking-wide">
                  {category}
                </p>
                <p className="text-xl font-semibold">{title}</p>
                <p className="flex items-center gap-2">
                  <span className="text-sm line-through">${oldPrice}</span>
                  <span className="text-black text-xl font-bold">${price}</span>
                </p>
                <p className="text-gray-500">
                  {description.substring(0, 100)}...
                </p>
                <button
                  onClick={() =>
                    
                    dispatch(
                      addToCart({
                        _id: _id,
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        title: title,
                        quantity: 1,
                      }),
                      notifyCart()
                    )
                  }
                  className="flex justify-center items-center gap-2 text-white font-medium bg-amazon_blue py-2 text-xl rounded-md mt-2  border-amazon_blue border-[2px] scale-100 hover:scale-105 hover:bg-blue-400 hover:text-black duration-200 active:bg-blue-700"
                >
                  Add to Cart <IoMdCart className="text-2xl" />
                </button>
              </div>
            </div>
          );
        }
      )}
      <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      
      />
    </div>
  );
};

export default Products;
