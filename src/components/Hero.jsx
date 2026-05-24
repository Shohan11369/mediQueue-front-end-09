"use client";
import { Button } from "@heroui/react";
import { ArrowRight, Star, Play } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slidesData = [
  
  {
    title: "Learn Anytime, Anywhere",
    desc: "Access our vast library of courses on any device.",
    mainImg:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    smallImg:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
  },
  {
    title: "Get Certified",
    desc: "Boost your career with industry-recognized certificates.",
    mainImg:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
    smallImg:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800",
  },
  {
    title: "Master New Skills",
    desc: "Unlock your potential with over 1,000+ high-quality courses.",
    mainImg:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
    smallImg:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  }
];

const Hero = () => {
  return (
    <section className="relative dark:bg-slate-900 text-black dark:text-white overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32 bg-slate-50">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 text-blue-600 font-bold text-sm">
                    <Star className="w-4 h-4 fill-blue-600" />
                    <span>Trusted by 10,000+ Students Worldwide</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900  dark:text-white leading-[1.1]">
                    {slide.title.split(" ").slice(0, 3).join(" ")}{" "}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                      Expert-Led
                    </span>{" "}
                    Courses
                  </h1>
                  <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      color="primary"
                      size="lg"
                      className="h-14 px-10 text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30"
                    >
                      Explore Courses <ArrowRight className="ml-2" />
                    </Button>
                    <Button
                      variant="bordered"
                      size="lg"
                      className="h-14 px-8 text-lg font-bold rounded-full"
                    >
                      <Play className="mr-2 fill-slate-900" /> Watch Demo
                    </Button>
                  </div>
                </div>
                <div className="relative group lg:ml-10">
                  {/* main image */}
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src={slide.mainImg}
                      alt="Main Learning"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* small image*/}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl shadow-2xl border-4 border-white overflow-hidden">
                    <Image
                      src={slide.smallImg}
                      alt="Secondary Learning"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
