import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

import FeaturedCard from "./FeaturedCard";
import { fetchFeaturedCourses } from "@/lib/courses/data";
import Link from "next/link";


const FeaturedCourses = async () => {
    const courses = await fetchFeaturedCourses();


    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 text-black dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Top Rated</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Featured Tutors</h3>
                        <p className="text-slate-500 dark:text-white max-w-xl">
                            Handpicked premium Tutors designed to help you master the most in-demand skills in the industry today.
                        </p>
                    </div>

                    <Link href="/courses">
                     <Button 
                        variant="flat"
                        color="primary"
                        className="rounded-full font-bold group"
                    >
                        View All Tutors <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </Link>
                   
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        courses?.slice(0, 6).map(course => <FeaturedCard key={course?._id} course={course} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;