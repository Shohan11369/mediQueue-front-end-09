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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-14 px-4">
      <div className="max-w-5xl mx-auto">

        {/* MAIN CARD */}
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_30px_100px_rgba(0,0,0,0.08)] rounded-[2.5rem] p-10 md:p-14 space-y-12">

          {/* HEADER */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600">
              <BookPlus className="w-8 h-8" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Create New <span className="text-blue-600">Course</span>
            </h1>

            <p className="text-slate-500 font-medium">
              Add tutor & course details in a clean modern form
            </p>
          </div>

          {/* FORM */}
          <form action={handleAddCourse} className="space-y-10">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Input className="h-12" name="tutorName" placeholder="Tutor Name" required />
              <Input className="h-12" name="availableDays" placeholder="Available Days (Mon, Thu)" required />
              <Input className="h-12" name="availableTimeSlot" placeholder="Time Slot (3:00 PM - 5:00 PM)" required />
              <Input className="h-12" name="hourlyFee" type="number" placeholder="Hourly Fee" required />
              <Input className="h-12" name="totalSlot" type="number" placeholder="Total Slot" required />
              <Input className="h-12" name="institution" placeholder="Institution" required />
              <Input className="h-12" name="experience" placeholder="Experience (5 Years)" required />
              <Input className="h-12" name="location" placeholder="Location" required />
              <Input className="h-12" name="teachingMode" placeholder="Online / Offline" required />
              <Input className="h-12" name="thumbnail" placeholder="Image URL" required />

              {/* CATEGORY */}
              <div>
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

              <Input className="h-12" name="duration" placeholder="Duration (e.g. 12h 30m)" required />

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="flat"
                className="flex-1 h-12 rounded-xl font-semibold"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                color="primary"
                className="flex-1 h-12 rounded-xl font-bold shadow-lg shadow-blue-600/20"
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