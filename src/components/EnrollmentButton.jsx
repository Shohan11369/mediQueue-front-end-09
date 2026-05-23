"use client";

import { Button } from "@heroui/react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EnrollmentButton({ course }) {
    const { data: session } = useSession();
    const router = useRouter();

    const handleEnroll = async () => {
        const { data: jwtData } = await authClient.token();
        const token = jwtData?.token;
        
        if (!token) {
            toast.error("Authentication failed. Please login again.");
            return;
        }

        const updatedData = {
            userId: session?.user?.id,
            studentName: session?.user?.name,
            studentEmail: session?.user?.email,
            courseTitle: course?.title,
            thumbnail: course?.thumbnail
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${course?._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            });

            if (!res.ok) {
                toast.error("Enrollment failed. Try again.");
                return;
            }

            const data = await res.json();
            
            // UI আপডেট নিশ্চিত করার জন্য নিচের দুটি কমান্ড খুব জরুরি
            router.refresh(); 
            toast.success("Successfully enrolled!");
            router.push("/dashboard");

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Button
            color="primary"
            size="lg"
            className="w-full font-bold shadow-lg mt-4"
            onPress={handleEnroll}
        >
            Enroll Now
        </Button>
    );
}