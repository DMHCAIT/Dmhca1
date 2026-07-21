import { useState, useEffect } from "react";
import { LogOut, ChevronDown } from "lucide-react";
import { supabaseClient } from "@/lib/supabase";

interface UserProfileProps {
  userEmail: string;
  userName?: string;
}

interface Enrollment {
  id: string;
  course_id: string;
  user_email: string;
  user_name: string;
  enrollment_date: string;
  progress: number;
  status: string;
}

export function UserProfile({ userEmail, userName }: UserProfileProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const { data, error } = await supabaseClient
          .from("course_enrollments")
          .select("*")
          .eq("user_email", userEmail);

        if (error) {
          console.error("Error fetching enrollments:", error);
        } else {
          setEnrollments(data || []);
          setEnrollmentCount(data?.length || 0);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, [userEmail]);

  const handleLogout = async () => {
    try {
      // Clear all authentication data from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        localStorage.removeItem('full_name');
        localStorage.removeItem('interests');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('hasSignedUp');
        sessionStorage.removeItem('signupData');
      }
      
      await supabaseClient.auth.signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
      // Still redirect even if signOut fails
      window.location.href = "/";
    }
  };

  const completedCount = enrollments.filter((e) => e.status === "completed").length;
  const activeCount = enrollments.filter((e) => e.status === "active").length;
  const avgProgress = enrollments.length > 0
    ? Math.round(
        enrollments.reduce((sum, e) => sum + e.progress, 0) / enrollments.length
      )
    : 0;

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition"
        title="User Profile"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
          <span className="text-sm font-bold text-white">
            {(userName || userEmail)?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition ${dropdownOpen ? "rotate-180" : ""}`} />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-border p-4">
          <div className="mb-4 pb-4 border-b border-border flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="text-xl font-bold text-white">
                {(userName || userEmail)?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-navy-deep">{userName || userEmail}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{userEmail}</p>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-4 text-sm text-muted-foreground">
              Loading enrollments...
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-2 bg-background rounded">
                  <div className="text-lg font-bold text-navy-deep">{enrollmentCount}</div>
                  <div className="text-xs text-muted-foreground">Enrolled</div>
                </div>
                <div className="text-center p-2 bg-background rounded">
                  <div className="text-lg font-bold text-green-600">{completedCount}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="text-center p-2 bg-background rounded">
                  <div className="text-lg font-bold text-blue-600">{avgProgress}%</div>
                  <div className="text-xs text-muted-foreground">Avg Progress</div>
                </div>
              </div>

              {enrollmentCount > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-navy-deep mb-2 uppercase tracking-wide">
                    Recent Enrollments
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {enrollments.slice(0, 3).map((enrollment) => (
                      <div
                        key={enrollment.id}
                        className="text-xs p-2 bg-background rounded hover:bg-border transition"
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-foreground">
                            {enrollment.user_name || "Course"}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              enrollment.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : enrollment.status === "active"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {enrollment.status}
                          </span>
                        </div>
                        <div className="mt-1">
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-navy-deep h-1.5 rounded-full"
                              style={{ width: `${enrollment.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {enrollment.progress.toFixed(0)}% progress
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-700 rounded hover:bg-red-100 transition text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                Log out
              </button>
            </>
          )}
        </div>
      )}

      {dropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </div>
  );
}
