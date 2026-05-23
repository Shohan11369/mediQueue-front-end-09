import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import CancelEnrollButton from "@/components/CancelEnrollButton";
import { redirect } from "next/navigation";

export default async function MyCoursesPage() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user || !token) {
    redirect("/login");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/enrollments/${session?.user?.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const enrollments = (await res.json()) || [];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900">
            My <span className="text-blue-600">Tutors</span>
          </h1>
          <p className="text-slate-500 mt-2">
            This page displays tutors created by the logged-in user
          </p>
        </div>

        {/* EMPTY STATE */}
        {enrollments?.length === 0 ? (
          <NotFound />
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                {/* HEAD */}
                <thead className="bg-slate-100 text-slate-600 text-sm">
                  <tr>
                    <th className="p-4 font-bold">Course</th>
                    <th className="p-4 font-bold">Tutor</th>
                    <th className="p-4 font-bold">Subject</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold text-right">Action</th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {enrollments.map((enrollment) => (
                    <tr
                      key={enrollment?._id}
                      className="border-t hover:bg-slate-50 transition"
                    >
                      {/* COURSE */}
                      <td className="p-4 font-medium text-slate-900">
                        {enrollment?.courseTitle}
                        <div className="text-xs text-slate-400">
                          {new Date(enrollment?.enrolledAt).toDateString()}
                        </div>
                      </td>

                      {/* TUTOR */}
                      <td className="p-4 text-slate-700">
                        {enrollment?.tutorName}
                      </td>

                      {/* SUBJECT */}
                      <td className="p-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-semibold">
                          {enrollment?.subject}
                        </span>
                      </td>

                      {/* STATUS */}
                      <td className="p-4">
                        <Chip color="success" size="sm">
                          Active
                        </Chip>
                      </td>

                      {/* ACTION */}
                      <td className="p-4 text-right">
                        <CancelEnrollButton enrollmentId={enrollment?._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* EMPTY STATE */
const NotFound = () => {
  return (
    <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-16 text-center">
      <div className="text-5xl mb-4">📭</div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">No tutors found</h3>

      <p className="text-slate-500 mb-6">
        You haven’t created any tutor entries yet
      </p>

      <Link href="/courses">
        <Button color="primary" className="font-bold rounded-full px-8">
          Add more Tutor
        </Button>
      </Link>
    </div>
  );
};
