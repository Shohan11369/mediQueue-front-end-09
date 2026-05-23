🔧 তোমার fixed version (শুধু relevant অংশ দেখালাম)
"use client";

import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { signIn } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; // ✅ add this

export default function Login() {
  const router = useRouter(); // ✅ add this
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (res.status === 401) {
        toast.error(data.message || "Email or password invalid");
        return;
      }

      if (!res.ok) {
        toast.error("Login failed");
        return;
      }

      toast.success("Login successful!");
      router.push("/"); // ✅ now works
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleSocialLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  // const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50">
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Welcome <span className="text-blue-600">Back</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Continue your learning journey today
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  required
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  startContent={<Mail className="w-5 h-5 text-slate-400" />}
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Password
                </label>

                <div className="relative">
                  <Input
                    id="password"
                    required
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    startContent={<Lock className="w-5 h-5 text-slate-400" />}
                    className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-bold text-blue-600 hover:underline underline-offset-4 transition-all"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                color="primary"
                type="submit"
                className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
              >
                Sign In{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="space-y-4">
              <Button
                variant="bordered"
                className="w-full h-12 font-bold rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors gap-3"
                onClick={handleSocialLogin}
              >
                <Image
                  width={20}
                  height={20}
                  src="https://www.google.com/favicon.ico"
                  className="w-5 h-5"
                  alt="Google"
                />
                Sign in with Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
                  Or with email
                </span>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 font-medium">
                New to CourseHub?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
