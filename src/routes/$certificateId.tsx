import { createFileRoute } from '@tanstack/react-router';
import { supabaseClient } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Navigate } from '@tanstack/react-router';

// This route handles direct certificate ID access at root level
// Supports both:
// - https://dmhca.in/[certificateId]
// - https://verify.dmhca.in/[certificateId] (via subdomain routing)

export const Route = createFileRoute('/$certificateId')({
  component: RootCertificateHandler,
});

function RootCertificateHandler() {
  const { certificateId } = Route.useParams();
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCertificate = async () => {
      try {
        const { data } = await supabaseClient
          .from('certificates')
          .select('id')
          .eq('certificate_id', certificateId)
          .single();

        if (data) {
          // Certificate exists, redirect to verification page
          setRedirectUrl(`/verification/${certificateId}`);
        } else {
          // Certificate not found
          setRedirectUrl(`/verification?notfound=${certificateId}`);
        }
      } catch (error) {
        // Error checking, still try to navigate
        setRedirectUrl(`/verify/${certificateId}`);
      } finally {
        setLoading(false);
      }
    };

    checkCertificate();
  }, [certificateId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Verifying certificate...</p>
        </div>
      </div>
    );
  }

  if (redirectUrl) {
    return <Navigate to={redirectUrl} replace />;
  }

  return null;
}
