"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search submitted");
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/search?q=${name}`);
    } else {
      console.error("No search query provided");
    }
  };
  return (
    <>
      <form
        action=""
        className="flex items-center justify-between p-2 flex-1"
        onSubmit={handleSearch}
      >
        <Input
          name="name"
          type="search"
          placeholder="Search among 1000+ products"
          className="focus:outline-none focus:ring-0 focus:border-none rounded-r-none outline-none"
        />
        <Button className="cursor-pointer rounded-l-none bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white">
          <Search />
        </Button>
      </form>
    </>
  );
}
