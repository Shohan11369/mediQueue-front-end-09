"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  // const router = useRouter();
  //   const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = async () => {
    await signOut();
    router.push("/");
  };

  const isLoggedIn = !!session;

  const getNavLinkClass = (path) => {
    const isActive = pathname === path;
    return `font-medium px-4 py-2 rounded-full transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-slate-700 dark:text-black dark:bg-gray-300 hover:text-black hover:bg-slate-300"
    }`;
  };

  return (
    <nav
      className={`sticky top-0 dark:bg-slate-900 text-black dark:text-white w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl text-slate-900 dark:text-white">
              MediQueue
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-2 items-center">
            {/* ALWAYS VISIBLE */}
            <Link href="/" className={getNavLinkClass("/")}>
              Home
            </Link>

            <Link href="/courses" className={getNavLinkClass("/courses")}>
              Tutors
            </Link>

            {/* ONLY AFTER LOGIN */}
            {isLoggedIn && (
              <>
                <Link
                  href="/add-course"
                  className={getNavLinkClass("/add-course")}
                >
                  Add Tutor
                </Link>

                <Link
                  href="/my-courses"
                  className={getNavLinkClass("/my-courses")}
                >
                  My Tutors
                </Link>

                <Link
                  href="/dashboard"
                  className={getNavLinkClass("/dashboard")}
                >
                  My-Bookings
                </Link>
              </>
            )}
          </div>

          {/*DARK MODE TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-black" />
            )}
          </button>

          {/* AUTH SECTION */}
          <div className="hidden md:flex items-center gap-4">
            {!isPending && !isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button
                    color="primary"
                    variant="solid"
                    className="font-bold rounded-full px-8 hover:text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    color="primary"
                    variant="solid"
                    className="font-bold rounded-full px-8 hover:text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100">
                  <Image
                    width={40}
                    height={40}
                    src={
                      session?.user?.image ||
                      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </button>

                {/* DROPDOWN */}
                <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-900 text-black dark:text-white border rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50">
                  <div className="px-4 py-3 border-b">
                    <p className="font-bold text-sm">{session?.user?.name}</p>
                    <p className="text-xs text-slate-500">
                      {session?.user?.email}
                    </p>
                  </div>

                  <Link
                    href="/dashboard"
                    className="px-4 py-2 text-sm hover:bg-slate-50 hover:dark:bg-gray-500 flex items-center gap-3"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                      My-Bookings
                  </Link>

                  <Link
                    href="/dashboard"
                    className="px-4 py-2 text-sm hover:bg-slate-50 hover:dark:bg-gray-500 flex items-center gap-3"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 hover:dark:bg-gray-500 flex items-center gap-3 text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-6 space-y-2 bg-white dark:bg-slate-900 text-black dark:text-white border-t">
          <Link href="/" className="block py-2">
            Home
          </Link>
          <Link href="/courses" className="block py-2">
            Tutors
          </Link>

          {!isLoggedIn ? (
            <div className="flex gap-4 justify-center items-center py-2">
              <Link href="/login">
                <Button
                  color="primary"
                  variant="solid"
                  className="rounded-full px-4 py-2 text-sm text-white  bg-blue-400"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  color="primary"
                  variant="solid"
                  className="rounded-full px-4 py-2 text-sm text-black  bg-green-200"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              <Link href="/add-course" className="block py-2">
                Add Tutor
              </Link>
              <Link href="/my-courses" className="block py-2">
                My Tutors
              </Link>
              <Link href="/dashboard" className="block py-2">
                My-Bookings
              </Link>

              <button
                onClick={handleLogOut}
                className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 text-left"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
