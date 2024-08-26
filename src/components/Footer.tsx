import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search, Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <>
      <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24 tracking-tighter">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
          {/* LEFT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/" className="flex items-center">
              <Image src="/icon.png" alt="" width={32} height={32} />
              <div className="text-2xl tracking-tighter">xenon</div>
            </Link>
            <p>
              1361, 3rd Floor, Grand Arcade, South End Main Road Near Bangalore
              Central Mall, opp. Bata showroom, Jayanagara 9th Block, Jayanagar,
              Bengaluru, Karnataka 560069, India
            </p>
            <span className="font-semibold">info@xenon.com</span>
            <span className="font-semibold">+91 1234567891</span>
            <div className="flex gap-6">
              <Twitter className="hover:text-[#2505D8]" />
              <Instagram className="hover:text-[#2505D8]" />
              <Facebook className="hover:text-[#2505D8]" />
            </div>
          </div>
          {/* CENTER */}
          <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col gap-6">
              <h1 className="font-medium text-lg">Company</h1>
              <div className="flex flex-col gap-6">
                <Link href="">About us</Link>
                <Link href="">Careers</Link>
                <Link href="">Affiliates</Link>
                <Link href="">Blogs</Link>
                <Link href="">Contact us</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="font-medium text-lg">Shop</h1>
              <div className="flex flex-col gap-6">
                <Link href="">New Arrivals</Link>
                <Link href="">Accessories</Link>
                <Link href="">Men</Link>
                <Link href="">Women</Link>
                <Link href="">All Product</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="font-medium text-lg">Help</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Customer Service</Link>
                <Link href="">My Account</Link>
                <Link href="">Fina a store</Link>
                <Link href="">Legal & Privacy</Link>
                <Link href="">Gift Card</Link>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-lg">NEWSLETTER</h1>
            <p>Enter you email address</p>
            <div className="flex">
              <form
                action=""
                className="flex items-center justify-between flex-1"
              >
                <Input
                  type="text"
                  placeholder="Email Address"
                  className="w-3/4 p-4 focus:outline-none focus:ring-0 focus:border-none rounded-r-none outline-none"
                />
                <Button className="w-2/4 cursor-pointer rounded-l-none bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white">
                  Subscribe
                </Button>
              </form>
            </div>
            <span>Secure Payments</span>
            <div className="flex justify-between">
              <Image src="/Skrill_logo.svg" alt="" width={40} height={20} />
              <Image src="/Razorpay_logo.svg" alt="" width={40} height={20} />
              <Image src="/Paypal.svg" alt="" width={40} height={20} />
              <Image src="/Visa_Inc._logo.svg" alt="" width={40} height={20} />
              <Image src="/Mastercard-logo.svg" alt="" width={40} height={20} />
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div>© 2024 xenon shop</div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div>
              <span className="text-gray-500 mr-4">Language</span>
              <span className="font-medium">United States | English</span>
            </div>
            <div className="">
              <span className="text-gray-500 mr-4">Currency</span>
              <span className="font-medium">$USD | ₹INR </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
