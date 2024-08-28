"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";

const colorOptions = [
  { id: "black", name: "Black", hex: "#000000" },
  { id: "silver", name: "Silver", hex: "#C0C0C0" },
  { id: "graphite", name: "Graphite", hex: "#474B4E" },
];
const sizeOptions = ["S", "M", "L", "XL", "XXL"];

export default function CustomisedProduct() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].id);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Choose a color</h3>
        <RadioGroup
          value={selectedColor}
          onValueChange={setSelectedColor}
          className="flex flex-col space-y-2"
        >
          {colorOptions.map((color) => (
            <div key={color.id} className="flex items-center space-x-3">
              <RadioGroupItem
                value={color.id}
                id={color.id}
                className="sr-only"
              />
              <Label
                htmlFor={color.id}
                className={`flex items-center space-x-3 cursor-pointer p-2 rounded-md transition-all ${
                  selectedColor === color.id
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color.id
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm font-medium">{color.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Choose a Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizeOptions.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              onClick={() => setSelectedSize(size)}
              className="w-12 h-12"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quantity</h3>
        {/* <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={decrement}
            disabled={quantity === 1}
            className="rounded-r-none"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            className="w-16 text-center items-center justify-center rounded-none"
            min="1"
            max="99"
          />
          <Button
            variant="outline"
            onClick={increment}
            disabled={quantity === 99}
            className="rounded-l-none"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </>
  );
}
