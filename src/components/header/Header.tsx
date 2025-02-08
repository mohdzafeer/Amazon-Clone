"use client";
import Image from "next/image";
import Link from "next/link";
import { BiCaretDown } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../images/Logo.png";
import grabit from "../../images/grabit.png";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { addUser } from "@/store/nextSlice";

// import cartIcon from '../../images/cartIcon.png';

export default function Header() {
  const { data: session } = useSession();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: any) => state.next
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // const dispatch = useDispatch();
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <div className="bg-amazon_blue h-[80px] flex  items-center justify-around lg:gap-8 sm:h-[60px] lg:h-[80px]   md:w-full shadow-2xl sm:w-full xs:w-full ">
      {/* Logo */}
      <Link href="/" className="flex items-center cursor-pointer duration-300">
        {/* <Image
          className="lg:h-14 lg:min-w-[160px]  md:h-8 md:w-20 ml-5 mt-3 sm:h-6 sm:w-16 sm:mr-2 xs:w-14"
          src={grabit}
          alt="logo"
        /> */}
        {/* <Image src={grabit} alt="grabit" className="h-24 w-24"></Image> */}
        <span className="font-bold text-blue-400 ml-5 text-4xl">GrabIT</span>
      </Link>
      {/* Address mark */}
      {/* <div className=" text-white items-center gap-1 cursor-pointer hidden lg:inline-flex">
        <SlLocationPin />
        <div className="text-sm ">
          <p>Deliver to</p>
          <p className="font-bold uppercase">USA</p>
        </div>
      </div> */}
      {/* SearchBar*/}
      <div className="lg:w-[1230px] md:w-[350px] sm:w-[150px] relative lg:inline-flex md:inline-flex sm:inline-flex items-center hidden ">
        {/* <input
          className="w-full px-2 py-1 rounded outline-none border-[3px] border-transparent focus-visible:border-amazon_yellow sm:h-[30px] lg:h-[40px] mr-2 font-semibold"
          placeholder="Search"
        /> */}
        <input
          className="w-full px-2 py-1 rounded outline-none border-[3px] border-transparent focus-visible:border-blue-400 sm:h-[30px] lg:h-[40px] mr-2 font-semibold"
          placeholder="Search"
        />
        {/* <span className="text-black absolute bg-amazon_yellow w-12 h-full flex justify-center items-center text-2xl rounded-tr rounded-br right-0 cursor-pointer active:bg-yellow-500 sm:mr-2">
          <HiOutlineSearch />
        </span> */}
        <span className="text-black absolute bg-blue-400 w-12 h-full flex justify-center items-center text-2xl rounded-tr rounded-br right-0 cursor-pointer active:bg-yellow-500 sm:mr-2">
          <HiOutlineSearch />
        </span>
      </div>
      {/* signin */}
      {userInfo ? (
        <div
        
          className="flex items-center px-2 cursor-pointer h-[70%] gap-1"
        >
          <Image unoptimized src={userInfo.image}  width={40} height={40} alt="user image" className=" rounded-full object-cover"></Image>
          <div className="text-xs text-gray-100 flex flex-col justify-between">
            <p className="text-white font-bold hidden lg:inline-flex">{userInfo.name}</p>
            <p className="hidden lg:inline-flex">{userInfo.email}</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="text-white font-semibold cursor-pointer flex flex-col justify-center md:text-sm sm:text-xs sm:font-normal hover:text-blue-400 duration-500 xs:ml-5 xs:text-sm"
        >
          <p>Hello, Sign In</p>
          <p className="flex items-center">
            Account & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
      )}
      {/* favorite */}
      <Link href={'/favorite'} className="text-white font-medium cursor-pointer hidden lg:inline-flex flex-col md:inline-flex md:text-sm hover:text-blue-400 duration-500">
        <p>Marked</p>
        <p className="font-bold">
          & Favorite
          {favoriteData.length > 0 && (
            <span className="ml-2 text-xs text-blue-400 font-medium">
              {favoriteData.length}
            </span>
          )}
        </p>
      </Link>
      {/* cart */}
      <Link
        href="/cart"
        className="text-white flex items-center gap-1 font-semibold cursor-pointer relative mr-2 hover:text-blue-400 duration-500"
      >
        <p className="text-white text-4xl">
          <CiShoppingCart />
        </p>
        <p className="sm:hidden lg:inline-flex">Cart</p>
        <span className="absolute text-blue-400 top-2.5 left-[16px] text-xs">
          {productData ? productData.length : 0}
        </span>
      </Link>
    </div>
  );
}



// "eslint-import-resolver-node": "^0.3.6",
//     "eslint-import-resolver-typescript": "^3.5.2",
//     "eslint-plugin-import": "^2.28.1",
//     "eslint-plugin-jsx-a11y": "^6.7.1",
//     "eslint-plugin-react": "^7.33.2",
//     "eslint-plugin-react-hooks": "^4.5.0 || 5.0.0-canary-7118f5dd7-20230705",