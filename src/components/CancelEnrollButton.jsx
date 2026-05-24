"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";


const CancelEnrollButton = ({ enrollmentId }) => {
    const router = useRouter();

    const handleCancel = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${enrollmentId}`, {
                method: "DELETE", 
            });

            if (res.ok) {
                router.refresh(); 
            } else {
                alert("Failed to cancel.");
            }
        } catch (error) {
            console.error("Error canceling enrollment:", error);
        }
    };

    return (
        <AlertDialog>
            <Button className="dark:bg-slate-900 text-black dark:text-white" color="danger" variant="light" size="sm">
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
                            <p className="text-slate-600 dark:text-white">
                                Are you sure you want to cancel this enrollment? This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button className="dark:bg-slate-900 text-black dark:text-white"  slot="close" variant="tertiary">
                                Keep Enrollment
                            </Button>
                          
                            <Button 
                                slot="close" 
                                color="danger" 
                                className="font-bold"
                                onClick={handleCancel} 
                            >
                                Yes, Detele
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelEnrollButton;