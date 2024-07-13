"use client";
import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { auth } from "@/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [contact, setContact] = useState();
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const notify = () => toast("User resgistered successfully!",{ type: "success" });

  const handleSignup = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/register",
        {
          name,
          email,
          password,
          contact,
          provider: "email/password",
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(data);
      setName("");
      setEmail("");
      setPassword("");
      setContact("");
      notify();
      setError("");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(result.user);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/register",
        {
          name: result.user.displayName,
          email: result.user.email,
          contact: result.user.phoneNumber,
          profileURL: result.user.photoURL,
          provider: "google",
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      notify();
      setError("");
      setUser(data.data);
      if (data.data.contact === null) {
        document.getElementById("contact-modal").showModal();
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const updateContact = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/updatecontact/${user._id}`,
        {
          contact,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setContact("");
      const notify = () => toast("Contact updated successfully!",{ type: "success" });
      notify();
      setError("");
      console.log(data);
      document.getElementById("contact-modal").close();
    } catch (error) {
      console.log(error);
      const notify = () => toast(error.response.data.message,{ type: "error" });
      notify();
      document.getElementById("contact-modal").showModal();
      setError(error.response.data.message);
    }
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins" }}>
    <ToastContainer />
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
        <div className="w-[300px] md:w-[80%] lg:w-[70%] xl:w-[400px] flex flex-col gap-5 text-black">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none peer"
              placeholder=" "
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label
              for="floating_standard"
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Contact
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
          {error && <p className="text-[#DB4444] text-base">{error}</p>}
          <button
            className="w-full text-white bg-[#DB4444] py-5 hover:border hover:border-[#DB4444] hover:bg-white hover:text-[#DB4444]"
            onClick={handleSignup}
          >
            Create Account
          </button>
          <div className="divider">OR</div>
          <button
            className="w-full bg-white py-5 border border-black hover:bg-[#030712] text-black hover:text-white"
            onClick={handleGoogleSignup}
          >
            <span className="text-center flex flex-row justify-center gap-2">
              <Image src={"/Icon-Google.svg"} width={24} height={24} />
              Sign up with Google
            </span>
          </button>
          <p className="text-black text-center">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#DB4444]">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />

      {/* Modal */}

      <dialog id="contact-modal" className="modal bg-white">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Contact No: </h3>
          <div className="relative z-0">
            <input
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none peer"
              placeholder=" "
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label
              for="floating_standard"
              className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Contact
            </label>
          </div>
          {error && <p className="text-[#DB4444] text-base">{error}</p>}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-[#DB4444] text-white" onClick={updateContact}>Save</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default page;
