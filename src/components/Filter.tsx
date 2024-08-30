"use client";
import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const sortBy = [
  {
    value: "Recommended",
    label: "Recommended",
  },
  {
    value: "what's-new",
    label: "What's New",
  },
  {
    value: "popularity",
    label: "Popularity",
  },
  {
    value: "better-discount",
    label: "Better Discount",
  },
  {
    value: "price:high-to-low",
    label: "Price : High to Low",
  },
  {
    value: "price:low-to-high",
    label: "Price : Low to High",
  },
  {
    value: "customer-rating",
    label: "Customer Rating",
  },
];

const filters = [
  {
    value: "men",
    label: "Men",
  },
  {
    value: "women",
    label: "Women",
  },
  {
    value: "boys",
    label: "Boys",
  },
  {
    value: "girl",
    label: "Girl",
  },
];

const categories = [
  {
    value: "watches",
    label: "Watches",
  },
  {
    value: "analog watches",
    label: "Analog Watches",
  },
  {
    value: "watche straps",
    label: "Watche Straps",
  },
  {
    value: "smart watches",
    label: "Smart Watches",
  },
];

const colors = [
  {
    value: "black",
    label: "Black ",
    hex: "#000000",
  },
  {
    value: "red",
    label: "Red ",
    hex: "#f00",
  },
  {
    value: "green",
    label: "Green ",
    hex: "#0f0",
  },
  { value: "blue", label: "Blue", hex: "#00f" },
  { value: "yellow", label: "Yellow", hex: "#ff0" },
  { value: "Purple", label: "Purple", hex: "#800080" },
];

export default function Filter() {
  const [isSortByOpen, setIsSortByOpen] = useState<string>("Recommended");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [sortByValue, setSortByValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [colorValue, setColorValue] = useState("");

  const pathName = usePathname();

  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (value: string, name: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathName}?${params.toString()}`);
  };

  const createDropdown = (
    options: typeof sortBy | typeof filters | typeof categories | typeof colors,
    value: string,
    setValue: (value: string) => void,
    name: string
  ) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[160px] justify-between py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
        {name}:{" "}
        {options.find((item) => item.value === value)?.label ||
          options[0].label}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => {
              setValue(item.value);
              handleFilterChange(item.value, name.toLowerCase());
            }}
          >
            {item.label}
            {value === item.value && <CheckIcon className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        {createDropdown(sortBy, sortByValue, setSortByValue, "Sort by ")}

        {createDropdown(filters, filterValue, setFilterValue, "Filter")}
        {createDropdown(
          categories,
          categoryValue,
          setCategoryValue,
          "Category"
        )}
        {createDropdown(colors, colorValue, setColorValue, "Color")}
      </div>
    </div>
  );
}
