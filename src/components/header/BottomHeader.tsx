import { removeUser, resetCart, resetFavList } from "@/store/nextSlice";
import { signOut } from "next-auth/react";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

// 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// 

export default function BottomHeader() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: any) => state.next);

  const handleSignout = () => {
    signOut();
    dispatch(removeUser(userInfo));
    dispatch(resetCart());
    dispatch(resetFavList());

  };

  const notifyLogOut=()=>{
    toast('Successfully Logged Out ', {
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
    <div
      className="w-full h-10 bg-amazon_light text-sm text-white px-4
         flex items-center"
    >
      <p className="flex items-center gap-1 h-8 px-2 mr-2 cursor-pointer hover:text-amazon_yellow duration-500">
        <LuMenu className="text-xl " />
        All
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 cursor-pointer hover:text-amazon_yellow duration-500">
        Today Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 cursor-pointer hover:text-amazon_yellow duration-500">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 cursor-pointer hover:text-amazon_yellow duration-500">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 cursor-pointer hover:text-amazon_yellow duration-500">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 cursor-pointer hover:text-amazon_yellow duration-500">
        Sale
      </p>
      {userInfo && (
        <button
          onClick={() => {
            handleSignout();
            notifyLogOut();
          }
          }
          className="flex items-center h-8 px-2 cursor-pointer text-amazon_yellow active:text-yellow-600 justify-center hover:text-red-500 duration-300 hover:font-semibold"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
