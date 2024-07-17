"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

export const GetuserData = () => {
    const dispatch = useAppDispatch();
  const getuserData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/getuser",
        {
            headers : {
                "Content-Type": "application/json"
            }
        },
        {
            withCredentials : true
        }
      );
      console.log(data);
      dispatch(setUser(data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getuserData();
  },[])

  return <></>;
};
