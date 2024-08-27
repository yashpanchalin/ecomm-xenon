"use client";
import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const sortBy = [
  {
    value: "recommended",
    label: "Recommended",
  },
  {
    value: "what's new",
    label: "What's New",
  },
  {
    value: "popularity",
    label: "Popularity",
  },
  {
    value: "better discount",
    label: "Better Discount",
  },
  {
    value: "price:high to low",
    label: "Price : High to Low",
  },
  {
    value: "customer rating",
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
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [sortByValue, setSortByValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  return (
    <>
      <div className="mt-12 flex justify-between">
        <div className="flex gap-6 flex-wrap">
          <div>
            <Popover open={isSortByOpen} onOpenChange={setIsSortByOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={isSortByOpen}
                  className="w-[200px] justify-between"
                >
                  {sortByValue
                    ? sortBy.find((sortBy) => sortBy.value === sortByValue)
                        ?.label
                    : `Sort by ${sortBy[0].label}`}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandList>
                    <CommandEmpty>No sortBy found.</CommandEmpty>
                    <CommandGroup>
                      {sortBy.map((sortBy) => (
                        <CommandItem
                          key={sortBy.value}
                          value={sortBy.value}
                          onSelect={(currentValue) => {
                            setSortByValue(
                              currentValue === sortByValue ? "" : currentValue
                            );
                            setIsSortByOpen(false);
                          }}
                        >
                          {sortBy.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              sortByValue === sortBy.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={isFilterOpen}
                  className="w-[100px] justify-between"
                >
                  {filterValue
                    ? filters.find((filters) => filters.value === filterValue)
                        ?.label
                    : "Filter"}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[100px] p-0">
                <Command>
                  <CommandList>
                    <CommandEmpty>No Filter found.</CommandEmpty>
                    <CommandGroup>
                      {filters.map((filters) => (
                        <CommandItem
                          key={filters.value}
                          value={filters.value}
                          onSelect={(currentValue) => {
                            setFilterValue(
                              currentValue === filterValue ? "" : currentValue
                            );
                            setIsFilterOpen(false);
                          }}
                        >
                          {filters.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              filterValue === filters.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Popover open={isCategoryOpen} onOpenChange={setIsCategoryOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={isCategoryOpen}
                  className="w-[130px] justify-between"
                >
                  {categoryValue
                    ? categories.find(
                        (categories) => categories.value === categoryValue
                      )?.label
                    : "Categories"}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[160px] p-0">
                <Command>
                  <CommandList>
                    <CommandEmpty>No Filter found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((categories) => (
                        <CommandItem
                          key={categories.value}
                          value={categories.value}
                          onSelect={(currentValue) => {
                            setCategoryValue(
                              currentValue === categoryValue ? "" : currentValue
                            );
                            setIsFilterOpen(false);
                          }}
                        >
                          {categories.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              categoryValue === categories.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Popover open={isColorOpen} onOpenChange={setIsColorOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={isCategoryOpen}
                  className="w-[130px] justify-between"
                >
                  {colorValue
                    ? colors.find((colors) => colors.value === colorValue)
                        ?.label
                    : "Colors"}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[160px] p-0">
                <Command>
                  <CommandList>
                    <CommandEmpty>No Color found.</CommandEmpty>
                    <CommandGroup>
                      {colors.map((colors) => (
                        <CommandItem
                          key={colors.value}
                          value={colors.value}
                          onSelect={(currentValue) => {
                            setColorValue(
                              currentValue === colorValue ? "" : currentValue
                            );
                            setIsColorOpen(false);
                          }}
                        >
                          <span className="flex items-center justify-between w-full">
                            {colors.label}
                            <span
                              className="inline-block ml-2 h-4 w-4 rounded-full"
                              style={{ backgroundColor: colors.hex }}
                            ></span>
                          </span>
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              colorValue === colors.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}
