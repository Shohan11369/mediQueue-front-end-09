import { Button, Chip } from "@heroui/react";
import { Clock, MapPin, BookOpen, ChevronRight, GraduationCap, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
    // আপনার ডেটাবেসের ফিল্ড অনুযায়ী ডি-স্ট্রাকচারিং
    const { 
        _id, tutorName, image, subject, availableDays, availableTimeSlot, 
        hourlyFee, totalSlot, sessionStartDate, institution, experience, 
        location, teachingMode, booked 
    } = course;

    return (
        <div className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(8,112,184,0.15)]">
            {/* ইমেজ সেকশন */}
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    alt={tutorName}
                    src={image || "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4 flex gap-2">
                    <Chip size="sm" className="bg-white/90 backdrop-blur-md text-blue-600 font-bold border-none shadow-sm uppercase text-[10px]">
                        {subject}
                    </Chip>
                    {/* {booked && (
                        <Chip size="sm" className="bg-red-500/90 text-white font-bold border-none shadow-sm uppercase text-[10px]">
                            Booked
                        </Chip>
                    )} */}
                </div>
            </div>

            {/* content */}
            <div className="p-6 flex flex-col grow space-y-4">
                <div className="space-y-1">
                    <Link href={`/tutors/${_id}`}>
                        <h3 className="text-lg font-bold leading-snug group-hover:text-blue-600 transition-colors">
                            {tutorName}
                        </h3>
                    </Link>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{institution}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-500 uppercase">
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1.5 rounded-lg">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" /> {location} ({teachingMode})
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1.5 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-blue-500" /> {availableDays}
                    </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{experience} Experience • {totalSlot} Slots Left</span>
                </div>

                
                <div className="pt-4 mt-auto border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xl font-black text-slate-900">
                        ৳{hourlyFee}<span className="text-xs text-slate-400 font-normal">/hr</span>
                    </span>

                    <Link href={`/tutors/${_id}`}>
                        <Button
                            variant="flat"
                            color="primary"
                            className="font-bold rounded-xl px-5"
                            endContent={<ChevronRight className="w-4 h-4" />}
                        >
                            View
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;