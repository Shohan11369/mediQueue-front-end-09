"use client";

import {
  Button,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopover,
  ListBox,
  ListBoxItem,
} from "@heroui/react";

import { BookPlus } from "lucide-react";
import { addCourse } from "@/lib/courses/actions";
import { redirect } from "next/navigation";

const CATEGORIES = [
  "Economics",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "ICT",
  "Accounting",
  "Finance",
  "Marketing",
  "Statistics",
  "Business Studies",
  "Computer Science",
  "Programming",
  "Data Science",
];

const handleAddCourse = async (formData) => {
  const data = await addCourse(formData);
  if (data?.insertedId) {
    redirect("/courses");
  }
};

export default function AddCourse() {
  return (

    
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-14 px-4 text-black dark:text-white">
      <div className="max-w-5xl mx-auto ">
        {/* MAIN CARD */}
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200  dark:bg-slate-900 text-black dark:text-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] rounded-[2.5rem] p-10 md:p-14 space-y-12">
          {/* HEADER */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600">
              <BookPlus className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Add New <span className="text-blue-600">Tutor</span>
            </h1>
            <p className="text-slate-500 dark:text-white font-medium">
              Add tutor & course details in a clean modern form
            </p>
          </div>

          {/* FORM */}
          <form action={handleAddCourse} className="space-y-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {/* Form Fields Mapping */}
              {[
                {
                  label: "Tutor Name",
                  name: "tutorName",
                  placeholder: "Tutor Name",
                },
                {
                  label: "Available Days",
                  name: "availableDays",
                  placeholder: "Mon, Thu",
                },
                {
                  label: "Time Slot",
                  name: "availableTimeSlot",
                  placeholder: "3:00 PM - 5:00 PM",
                },
                {
                  label: "Hourly Fee",
                  name: "hourlyFee",
                  type: "number",
                  placeholder: "Hourly Fee",
                },
                {
                  label: "Total Slot",
                  name: "totalSlot",
                  type: "number",
                  placeholder: "Total Slot",
                },
                {
                  label: "Institution",
                  name: "institution",
                  placeholder: "Institution",
                },
                {
                  label: "Experience",
                  name: "experience",
                  placeholder: "5 Years",
                },
                {
                  label: "Location",
                  name: "location",
                  placeholder: "Location",
                },
                {
                  label: "Teaching Mode",
                  name: "teachingMode",
                  placeholder: "Online / Offline",
                },
                { label: "Image URL", name: "image", placeholder: "Image URL" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-sm lg:text-xl font-semibold text-slate-700 dark:text-white">
                    {field.label}
                  </label>
                  <Input
                    className="h-12 w-full dark:bg-white dark:text-black"
                    name={field.name}
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}

              {/* CATEGORY */}
              <div className="flex flex-col gap-2">
                <label className="text-sm lg:text-xl font-semibold text-slate-700 dark:text-white">
                  Category
                </label>
                <Select name="category" required>
                  <SelectTrigger className="h-12 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectPopover className="rounded-xl border border-slate-200 shadow-xl bg-white">
                    <ListBox>
                      {CATEGORIES.map((cat) => (
                        <ListBoxItem
                          key={cat}
                          id={cat}
                          className="px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                        >
                          {cat}
                        </ListBoxItem>
                      ))}
                    </ListBox>
                  </SelectPopover>
                </Select>
              </div>

              {/* DURATION */}
              <div className="flex flex-col gap-2">
                <label className="text-sm lg:text-xl font-semibold text-slate-700 dark:text-white">
                  Duration
                </label>
                <Input
                  className="h-12 w-full dark:bg-white dark:text-black"
                  name="duration"
                  placeholder="e.g. 12h 30m"
                  required
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-6">
              <Button
                onClick={() => window.history.back()}
                variant="solid"
                color="danger"
                className="flex-1 h-12 rounded-xl  shadow-red-600/20 bg-red-400 text-xl text-white font-bold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary"
                className="flex-1 h-12 rounded-xl font-bold shadow-lg shadow-blue-600/20 text-xl"
              >
                Publish Course
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}
