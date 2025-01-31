"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const selector = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [pic, setPic] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    setPic(selector?.user?.profileURL);
    setUser(selector?.user);
  }, [selector]);

  const logout = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/logout",{},{
        withCredentials : true
      });
      dispatch(setUser(null));
      setPic(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="navbar bg-white text-black border-b border-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-2xl"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            className="btn btn-ghost text-2xl"
            style={{ fontFamily: "Ubuntu" }}
            href={"/"}
          >
            Trendy
          </Link>
        </div>
        <div className="navbar-end">
          <label className="input hidden md:flex items-center gap-2 bg-gray-100 rounded-none">
            <input
              type="text"
              className="grow text-sm"
              placeholder="What are you loooking for?"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <details className="dropdown dropdown-end bg-white">
            <summary className="btn m-1 bg-white outline-none border-none hover:bg-gray-100">
              <div className="avatar">
                <div className="ring-[#030712] w-8 rounded-full ring ring-offset-2">
                  {!pic ? <Image className="p-1" src="/user.png" width={20} height={20} /> : <Image className="rounded-full" src={pic} width={20} height={20} />}
                </div>
              </div>
            </summary>
            {!user ? <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-white">
              <li className="pb-2">
                <Link className="btn bg-[#DB4444] border-none text-white" href={"/signup"}>Create Account</Link>
              </li>
              <li>
                <Link className="btn bg-white border border-[#DB4444] text-[#DB4444]" href={"/signin"}>Login</Link>
              </li>
            </ul> : 
            <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-white">
              <li>
                <Link href={"/updatecontact"}>Update Address</Link>
              </li>
              <li>
                <button className="btn bg-[#DB4444] border-none text-white" onClick={logout}>Logout</button>
              </li>
            </ul>
            }
          </details>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item">
                0
              </span>
            </div>
          </button>
        </div>
      </div>
      <label className="input flex items-center gap-2 bg-gray-100 rounded-none md:hidden">
        <input
          type="text"
          className="grow text-sm"
          placeholder="What are you loooking for?"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="black"
          className="h-5 w-5 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};
