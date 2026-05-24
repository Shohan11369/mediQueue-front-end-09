import CourseCard from "@/components/CourseCard";
import CoursesHeader from "@/components/CoursesHeader";
import { fetchCourses } from "@/lib/courses/data";
import { BookOpen, Filter } from "lucide-react";

const CoursesPage = async ({ searchParams }) => {
 
    const sParams = await searchParams;



    const courses = await fetchCourses(sParams?.searchTerm || "");


    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-black dark:text-white">
            {/* Header */}
            <CoursesHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600 dark:text-white" />
                        All Tutors 
                    </h2>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        courses?.map((course) => <CourseCard key={course._id} course={course} />
                        )
                    }
                </div>


            </main>
        </div>
    );
};

export default CoursesPage;