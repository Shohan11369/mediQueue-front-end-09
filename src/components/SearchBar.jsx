"use client";

import { Search, CalendarDays, X } from "lucide-react"; 
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("searchTerm") || "");
  const [date, setDate] = useState(searchParams.get("date") || "");

  useEffect(() => {
    setSearch(searchParams.get("searchTerm") || "");
    setDate(searchParams.get("date") || "");
  }, [searchParams]);


  const handleClear = () => {
    setSearch("");
    setDate("");
    router.push("/courses"); 
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    
    if (search) params.set("searchTerm", search);
    else params.delete("searchTerm");

    if (date) params.set("date", date);
    else params.delete("date");

    router.push(`/courses?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 bg-white p-2 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
      
      
      <div className="relative flex-1 w-full flex items-center px-4">
        <Search className="w-5 h-5 text-blue-500" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search by subject or tutor..."
          className="w-full h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400 font-medium"
        />
       
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-4 text-slate-300 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="w-px h-8 bg-slate-100  hidden md:block" />

      {/* Date input */}
      <div className="relative w-full md:w-48 flex items-center px-4 ">
        <CalendarDays className="w-5 h-5 text-blue-500 " />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full h-14 px-4 outline-none bg-transparent text-slate-500   font-medium cursor-pointer"
        />
        {date && (
          <button onClick={() => setDate("")} className="absolute right-4 text-slate-300 hover:text-slate-600">
            <X className="w-4 h-4 dark:text-slate-300" />
          </button>
        )}
      </div>

      {/* search button */}
      <button
        onClick={handleSearch}
        className="w-full md:w-auto h-14 px-8 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
      >
        Search
      </button>

      {/* filter remove*/}
      {(search || date) && (
        <button
          onClick={handleClear}
          className="px-4 py-2 text-red-500 hover:text-red-700 font-bold text-sm transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default SearchBar;