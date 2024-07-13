import { Navbar } from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins" }}>
      <Navbar />
      <div className="bg-white flex flex-row justify-around md:mt-24 lg:mt-8">
        <figure className="hidden xl:block xl:w-[700px] xl:h-[700px]">
          <Image
            className="object-cover"
            src="/images/side.png"
            alt="Signup"
            width={700}
            height={700}
          />
        </figure>
        <div className="flex flex-col gap-5 text-black">
          <h1 className="text-4xl text-black">Create an account</h1>
          <h3 className="text-xl text-black font-light">
            Enter your details below
          </h3>
          <div className="relative z-0">
            <input
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_standard"
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="email"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_standard"
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email ID
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="password"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none peer"
              placeholder=" "
            />
            <label
              for="floating_standard"
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
          </div>
          <button className="w-full text-white bg-[#DB4444] py-5 hover:border hover:border-[#DB4444] hover:bg-white hover:text-[#DB4444]">
            Create Account
          </button>
          <div className="divider">OR</div>
          <button className="w-full bg-white py-5 border border-black hover:bg-[#030712] text-black hover:text-white">
            <span className="text-center flex flex-row justify-center gap-2">
              <Image src={"/Icon-Google.svg"} width={24} height={24} />
              Sign up with Google
            </span>
          </button>
          <p className="text-black text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-[#DB4444]">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
