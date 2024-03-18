import { removeUser, resetCart } from "@/store/nextSlice";
import { signOut } from "next-auth/react";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

export default function BottomHeader() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: any) => state.next);

  const handleSignout = () => {
    signOut();
    dispatch(removeUser(userInfo));
    dispatch(resetCart());
  };

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
        Today's Deals
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
          onClick={() => handleSignout()}
          className="flex items-center h-8 px-2 cursor-pointer text-amazon_yellow active:text-yellow-600 justify-center"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
