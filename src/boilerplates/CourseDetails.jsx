import { Chip } from "@heroui/react";
import { BookOpen, Clock, BarChart, Users } from "lucide-react";
import Image from "next/image";

export default function CourseDetails({ course }) {
  // যদি ডাটা না থাকে
  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-red-500">Course details not found</h2>
      </div>
    );
  }

  // ডাইনামিক ডাটা লজিক
  const featuredItems = [
    { icon: Clock, label: course.duration || "12h 30m" },
    { icon: BarChart, label: course.level || "Beginner" },
    { icon: BookOpen, label: `${course.totalLessons || 24} Lessons` },
    { icon: Users, label: `${course.enrollmentCount || 0} Students` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Side: Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
            <Image
              src={course.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"}
              alt={course.title || "Course Thumbnail"}
              fill
              className="object-cover transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6">
              <Chip color="primary" variant="solid" className="font-bold shadow-xl">
                Premium
              </Chip>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {course.title || "Course Title"}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {course.description || "Master the core concepts of this subject with our comprehensive guide designed for all skill levels."}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-200">
            {featuredItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200 text-slate-900 font-bold hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-blue-600" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Price Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Course Price
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-blue-600">
                  ${course.hourlyFee || "0"}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-700 font-medium">
                <strong>Instructor:</strong> {course.tutorName || "Industry Expert"}
              </p>
              <div className="w-full h-px bg-slate-100"></div>
              <ul className="space-y-3">
                {["Lifetime Access", "Expert Guidance", "Verified Certificate"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}