import { createFileRoute } from '@tanstack/react-router';
import { StudentDashboard } from '@/components/StudentDashboard';

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
});

function Dashboard() {
  const handleLogout = () => {
    // Redirect to home after logout
    window.location.href = '/';
  };

  return <StudentDashboard onLogout={handleLogout} />;
}
