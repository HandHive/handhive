import Link from "next/link";
import React, { useState } from "react";
import Header from '@/components/Header';
import Footer from "@/components/Footer";








const signin = () => (
   
 

<div className=" h-full max-w-md mx-auto ">
  <Header />
  <div className="bg-white shadow-lg rounded-lg  h-full mx-auto ">
    <div className="bg-white rounded-lg flex items-end justify-center h-full">
      <div className="bg-white px-2 py-5 h-full rounded-[8px]">

        <h1 className="text-xl text-[#457B9D] font-bold mx-28">Sign in</h1>

        <p className="text-base text-[#666666] ">Hey, User
          <br />
          Let’s get you right back on track!
        </p>
        <div className="mb-2 mt-2">
          <label className="block text-[#000405] text-sm font-[600] mb-2">
            Email
          </label>
          <input
            className="h-[40px] border-[1px] border-[#172934] rounded-[8px] w-full py-2 px-3 text-[#80888C] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
            placeholder="enter in your email address"
            type="email"
          />
        </div>
        <div className="mb-2 mt-2">
          <label className="block text-[#000405] text-sm font-[600] mb-2">
            Password
          </label>
          <input
            className="h-[40px] border-[1px] border-[#172934] rounded-[8px] w-full py-2 px-3 text-[#80888C] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
            placeholder="enter in your password"
            type="password"
          />
        </div>
        <div className="mt-2">
          <p className="text-[#E63946] text-base">Forgot password?</p>
        </div>
        <div className="mt-4">
          <button className="bg-[#457B9D] w-full text-white h-[44px] rounded-[12px]">
            Sign in
          </button>
        </div>
        <div className="mt-4">
          <button type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-white hover:bg-[#457B9D] focus:ring-[#457B9D] focus:ring-offset-red-200 text-[#001219] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="mt-2 mb-2">
          <Link href='/signup'> <p className="text-[#001219] text-base">No account?<span className="text-[#E63946]"> Create one</span></p></Link>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
);

export default signin;
