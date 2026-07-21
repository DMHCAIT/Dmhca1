import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, BookOpen, Award, Users } from 'lucide-react';

export function StudentDashboard({ onLogout }) {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student data from localStorage or API
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('email');
      const userId = localStorage.getItem('userId');
      const fullName = localStorage.getItem('full_name');
      const interests = localStorage.getItem('interests');
      const signupData = sessionStorage.getItem('signupData');

      let data = { email, userId, full_name: fullName };
      if (interests) {
        try {
          data.interests = JSON.parse(interests);
        } catch (e) {
          // Interests might be stored differently
        }
      }
      if (signupData) {
        try {
          const parsed = JSON.parse(signupData);
          data = { ...data, ...parsed };
        } catch (e) {
          console.error('Failed to parse signup data:', e);
        }
      }
      setStudentData(data);
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
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
    onLogout?.();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <p className="text-gray-600 text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Welcome Back! 👋</h1>
            <p className="text-gray-600 mt-2 text-lg">
              {studentData?.full_name ? `Hi, ${studentData.full_name}` : 'Student Dashboard'}
            </p>
          </div>
          <Button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-6 py-2"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">
                {studentData?.full_name?.charAt(0).toUpperCase() || 'S'}
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {studentData?.full_name || 'Student'}
              </h2>
              <p className="text-gray-600 text-lg mt-1">{studentData?.email}</p>
            </div>
          </div>

          {/* User Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="text-sm text-gray-700 font-semibold">User ID</p>
              <p className="text-lg font-bold text-blue-700 mt-2 font-mono">
                {studentData?.userId?.substring(0, 12)}...
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-600">
              <p className="text-sm text-gray-700 font-semibold">Account Status</p>
              <p className="text-lg font-bold text-green-600 mt-2">✓ Verified</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-600">
              <p className="text-sm text-gray-700 font-semibold">Member Since</p>
              <p className="text-lg font-bold text-purple-700 mt-2">Today</p>
            </div>
          </div>
        </div>

        {/* Interests Card */}
        {studentData?.interests && studentData.interests.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-600" />
              Your Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {studentData.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full font-semibold border border-blue-200 hover:shadow-md transition"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-7 w-7 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Explore Courses</h3>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Browse our comprehensive range of medical courses and start your learning journey with DMHCA.
          </p>
          <Button
            onClick={() => (window.location.href = '/top-medical-courses')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg shadow-md transition-transform transform hover:-translate-y-0.5"
            aria-label="Browse all courses"
          >
            Browse All Courses
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <Award className="h-8 w-8 mb-3 opacity-90" />
            <p className="text-4xl font-bold">0</p>
            <p className="text-blue-100 mt-2 font-semibold">Courses Enrolled</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-8 text-white">
            <BookOpen className="h-8 w-8 mb-3 opacity-90" />
            <p className="text-4xl font-bold">0%</p>
            <p className="text-green-100 mt-2 font-semibold">Learning Progress</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <Award className="h-8 w-8 mb-3 opacity-90" />
            <p className="text-4xl font-bold">0</p>
            <p className="text-purple-100 mt-2 font-semibold">Certificates Earned</p>
          </div>
        </div>
      </div>
    </div>
  );
}
