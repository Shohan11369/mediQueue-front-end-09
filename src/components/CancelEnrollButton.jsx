"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

// enrollmentId প্রপসটি এখানে রিসিভ করুন
const CancelEnrollButton = ({ enrollmentId }) => {
    const router = useRouter();

    const handleCancel = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${enrollmentId}`, {
                method: "DELETE", 
            });

            if (res.ok) {
                router.refresh(); // পেজটি রিফ্রেশ করে লিস্ট আপডেট করবে
            } else {
                alert("Failed to cancel.");
            }
        } catch (error) {
            console.error("Error canceling enrollment:", error);
        }
    };

    return (
        <AlertDialog>
            <Button color="danger" variant="light" size="sm">
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Confirm Cancellation</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-slate-600">
                                Are you sure you want to cancel this enrollment? This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Keep Enrollment
                            </Button>
                            {/* এখানে onClick যোগ করা হলো */}
                            <Button 
                                slot="close" 
                                color="danger" 
                                className="font-bold"
                                onClick={handleCancel} 
                            >
                                Yes, Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelEnrollButton;