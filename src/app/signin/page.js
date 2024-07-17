"use client";
import { Navbar } from "@/components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "@/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

const page = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      if (!email && !password) {
        return alert("Insufficient data");
      }

      const { data } = await axios.post("http://localhost:4000/api/v1/login",{
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials : true
      })
      setEmail("");
      setPassword("");
      const notify = () => toast("Login Successfull",{type: "success"});
      notify();
      dispatch(setUser(data?.data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(result.user);
      const { data } = await axios.post("http://localhost:4000/api/v1/googlesign",{
        email: result.user.email,
        name: result.user.displayName,
        profileURL : result.user.photoURL
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials : true
      })
      console.log(data);
      dispatch(setUser(data?.data));
      const notify = () => toast("Login Successfull",{type: "success"});
      notify();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins" }}>
      <ToastContainer />
      <Navbar />
      <div className="bg-white flex flex-row justify-around mt-8 md:mt-24 lg:mt-8">
        <figure className="hidden xl:block xl:w-[700px] xl:h-[700px]">
          <Image
            className="object-cover"
            src="/images/side.png"
            alt="Signup"
            width={700}
            height={700}
          />
        </figure>
        <div className="w-[300px] md:w-[80%] lg:w-[70%] xl:w-[400px] flex flex-col gap-5 text-black">
          <h1 className="text-4xl text-black">Login to Trendy</h1>
          <h3 className="text-xl text-black font-light">
            Enter your details below
          </h3>
          <div className="relative z-0">
            <input
              type="email"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              for="floating_standard"
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
          </div>
          <button className="w-full text-white bg-[#DB4444] py-5 hover:border hover:border-[#DB4444] hover:bg-white hover:text-[#DB4444]" onClick={handleLogin}>
            Login
          </button>
          <div className="divider">OR</div>
          <button className="w-full bg-white py-5 border border-black hover:bg-[#030712] text-black hover:text-white" onClick={handleGoogleLogin}>
            <span className="text-center flex flex-row justify-center gap-2">
              <Image src={"/Icon-Google.svg"} width={24} height={24} />
              Log in with Google
            </span>
          </button>
          <p className="text-black text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#DB4444]">
              Create Account
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
