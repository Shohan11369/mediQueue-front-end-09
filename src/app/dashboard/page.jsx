import { Button, Chip } from '@heroui/react';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import CancelEnrollButton from '@/components/CancelEnrollButton';
import { redirect } from 'next/navigation'; 

export default async function DashboardPage() {

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user || !token) {
        redirect("/login")
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${session?.user?.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: "no-store"
    })
    const enrollments = await res.json() || [];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Section */}
                <div className="w-full md:w-1/4">
                    <div className="p-6 bg-white border rounded-2xl">
                        
                        <h2 className="text-xl font-bold">{session?.user?.name}</h2>
                        <p className="text-sm text-slate-500">{session?.user?.email}</p>
                    </div>
                </div>

                {/* Enrollments Section */}
                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold mb-6">My Booking Tutors</h1>

                    {enrollments?.length === 0 ? (
                        <NotFound />
                    ) : (
                        <div className="space-y-4">
                            {enrollments?.map((enrollment) => (
                                <div
                                    key={enrollment?._id}
                                    className="flex gap-4 p-6 bg-white border rounded-xl items-center"
                                >
                                    <div className="flex flex-col grow gap-1">
                                        {/* tutors*/}
                                        <h3 className="font-bold text-lg">{enrollment?.courseTitle}</h3>
                                        <p className="text-sm text-slate-600 font-medium">
                                            Subject Name: <span className="text-blue-600">{enrollment?.subject}</span>
                                        </p>
                                        
                                        {/* name */}
                                        <p className="text-sm text-slate-600 font-medium">
                                            Tutor: <span className="text-blue-600">{enrollment?.tutorName}</span>
                                        </p>
                                        
                                        {/* Date */}
                                        <p className="text-xs text-slate-400 mt-2">
                                            Enrolled on: {new Date(enrollment?.enrolledAt).toDateString()}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end gap-3">
                                        <Chip color="success" size="sm">Active</Chip>
                                        <CancelEnrollButton enrollmentId={enrollment?._id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const NotFound = () => {
    return (
        <div className="p-12 text-center bg-slate-50 border rounded-2xl">
            <p className="mb-4 text-4xl">No courses yet</p>
            <Link href="/courses">
                <Button>Browse Courses</Button>
            </Link>
        </div>
    );
}