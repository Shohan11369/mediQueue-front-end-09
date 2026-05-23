import { Chip, Button } from "@heroui/react";
import { Clock, MapPin, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ course }) => {
    const { 
        _id, image, tutorName, subject, hourlyFee, 
        teachingMode, location, availableDays, availableTimeSlot 
    } = course;

    return (
        <div className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(8,112,184,0.15)]">
            {/* image section */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                    src={image || 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'}
                    alt={tutorName}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                    <Chip size="sm" className="bg-white/90 backdrop-blur-md text-blue-600 font-bold border-none shadow-sm uppercase text-[10px]">
                        {teachingMode}
                    </Chip>
                </div>
            </div>

            {/* content */}
            <div className="p-6 flex flex-col grow space-y-4">
                <div>
                    <span className="text-blue-500 font-medium text-xs uppercase tracking-wider">{subject}</span>
                    <h4 className="font-bold text-xl text-slate-900 mt-1 leading-tight group-hover:text-blue-600 transition-colors">
                        {tutorName}
                    </h4>
                </div>
                
                <div className="space-y-2 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-slate-50 rounded-lg text-blue-500">
                            <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-slate-50 rounded-lg text-blue-500">
                            <Clock className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{availableDays} • {availableTimeSlot}</span>
                    </div>
                </div>

                <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-100">
                    <span className="font-black text-blue-600 text-xl">৳{hourlyFee}<span className="text-slate-400 text-sm font-normal">/hr</span></span>
                    
                    <Link href={`/courses/${_id}`}>
                        <Button 
                            size="sm" 
                            variant="flat" 
                            color="primary"
                            className="rounded-full font-bold px-5"
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

export default FeaturedCard;