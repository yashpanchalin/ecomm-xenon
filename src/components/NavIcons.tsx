"use client";
import React, { useState } from "react";
import { GlassWater, Globe, HeartCrack } from "lucide-react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const router = useRouter();

  const handleProfile = () => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }
    setIsUserProfileOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center gap-2 xl:gap-4 relative">
        <div className="flex gap-1 text-gray-500 tracking-tighter">
          ENG
          <Globe />
        </div>
        <div>
          <Button className="tracking-tighter flex gap-3 bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
            Wishlist
            <Heart />
          </Button>
        </div>
        <div className="relative cursor-pointer">
          <Button
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="tracking-tighter flex gap-3 bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer"
          >
            Cart
            <ShoppingCart />
          </Button>
          <div className="absolute flex items-center justify-center rounded-full -top-4 -right-1 w-6 h-6 bg-red-500 text-white text-sm">
            1
          </div>
        </div>
        {isCartOpen && <CartModal />}
        {/* <div>
          <Button
            onClick={handleProfile}
            className="rounded-full flex gap-3 bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer"
          >
            <User />
          </Button>
        </div>
        {isUserProfileOpen && (
          <div className="tracking-tighter p-4 rounded-md absolute top-12 left-80 text-sm z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-1">
            <Link href="">Profile</Link>
            <Link href="">Your Orders</Link>
            <Link href="">Logout</Link>
          </div>
        )}
        <div>
          <Button className="tracking-tighter flex bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
            Login
          </Button>
        </div>
        <div>
          <Button className="tracking-tighter flex bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
            Signup
          </Button>
        </div> */}
        <div>
          {isUserLoggedIn ? (
            <div>
              <Button
                onClick={handleProfile}
                className="rounded-full flex gap-3 bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer"
              >
                <User />
              </Button>
              {isUserProfileOpen && (
                <div className="tracking-tighter p-4 rounded-md absolute top-12 left-80 text-sm z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-1">
                  <Link href="/profile">Profile</Link>
                  <Link href="/orders">Your Orders</Link>
                  <Link href="/logout">Logout</Link>
                </div>
              )}
            </div>
          ) : (
            // Render Login and Signup buttons when not logged in
            <div className="flex gap-4">
              <Button className="tracking-tighter flex bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
                Login
              </Button>
              <Button className="tracking-tighter flex bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
                Signup
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
