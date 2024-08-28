"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";

export default function Add() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 99));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleInputChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={decrement}
            disabled={quantity === 1}
            className="rounded-r-none bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="px-3 py-1.5 text-lg ">{quantity}</span>
          <Button
            variant="outline"
            onClick={increment}
            disabled={quantity === 99}
            className="rounded-l-none bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-1/4" variant="ghost">
          Add to cart
        </Button>
      </div>
    </>
  );
}
