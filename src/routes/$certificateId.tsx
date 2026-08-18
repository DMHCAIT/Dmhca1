import { createFileRoute } from '@tanstack/react-router';
import { supabaseClient } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Navigate, Link } from '@tanstack/react-router';
import { ArrowLeft, BookOpen } from 'lucide-react';

// Blog posts data - same as in $slug.tsx
const blogPosts: Record<string, any> = {
  'how-to-crack-neet-pg': {
    title: 'How to Crack NEET PG?',
    description: 'Complete guide to preparing for and cracking NEET PG examination with proven strategies.',
    sections: [
      'What is NEET PG?',
      'NEET PG 2025: Exam Pattern & Important Dates',
      'Who Can Apply? (Eligibility)',
      'How to Start Preparation',
      'Best Books & Online Resources',
      'Subject-Wise Preparation Tips',
      'How to Revise Effectively',
      'Mock Tests Strategy',
      'Final Month Strategy',
      'FAQs',
    ],
  },
  'courses-after-mbbs-in-india': {
    title: 'Courses After MBBS In India',
    description: 'Explore all postgraduate and specialization courses available for MBBS graduates in India.',
    sections: [
      'MBBS Degree Overview',
      'MD/MS Postgraduate Programs',
      'Diploma Courses',
      'Super Specialty Programs',
      'Fellowship Programs',
      'Competitive Entrance Exams',
      'Top Medical Colleges',
      'Career Opportunities',
      'Salary Expectations',
      'FAQs',
    ],
  },
  'scope-of-radiology': {
    title: 'Scope of Radiology',
    description: 'Comprehensive guide to radiology career, specializations, courses, and opportunities in India.',
    sections: [
      'What is Radiology?',
      'Types of Radiology',
      'Courses to Become a Radiologist',
      'Career Options',
      'Scope in Government Sector',
      'Scope in Private Sector',
      'Salary of Radiologists',
      'Top Colleges for Radiology',
      'Emerging Trends',
      'FAQs',
    ],
  },
  'scope-of-cardiology': {
    title: 'Scope of Cardiology',
    description: 'Detailed exploration of cardiology as a career, courses, specializations, and opportunities in India.',
    sections: [
      'What is Cardiology?',
      'Types of Cardiology',
      'Courses to Become a Cardiologist',
      'Scope of Cardiology in India',
      'Career Roles',
      'Salary of Cardiologists',
      'Top Colleges for Cardiology',
      'Future Scope',
      'Research Opportunities',
      'FAQs',
    ],
  },
  'scope-of-obstetrics-and-gynecology': {
    title: 'Scope of Obstetrics and Gynecology',
    description: 'Complete guide to OB-GYN specialization, career paths, courses, and opportunities in India.',
    sections: [
      'What is Obstetrics and Gynecology?',
      'Courses to Become an OB-GYN',
      'Scope of OB-GYN in India',
      'Career Options',
      'Salary Expectations',
      'Top Colleges',
      'Super Specializations',
      'Future Scope',
      'Work Opportunities',
      'FAQs',
    ],
  },
  'scope-of-cosmetology': {
    title: 'Scope of Cosmetology',
    description: 'Explore cosmetology as a career, courses, specializations, and opportunities in India.',
    sections: [
      'What is Cosmetology?',
      'Why Cosmetology is Popular',
      'Types of Cosmetology Courses',
      'Career Options',
      'Work Opportunities',
      'Salary in Cosmetology',
      'Top Institutes',
      'Future Scope',
      'How to Succeed',
      'FAQs',
    ],
  },
  'scope-of-paediatrics': {
    title: 'Scope of Paediatrics',
    description: 'Comprehensive guide to pediatrics career, specializations, courses, and opportunities in India.',
    sections: [
      'What is Paediatrics?',
      'Why Paediatrics is Important',
      'Key Areas in Paediatrics',
      'Paediatrics Courses',
      'Top Institutes',
      'Job Roles',
      'Employment Opportunities',
      'Salary of Paediatricians',
      'Future of Paediatrics',
      'FAQs',
    ],
  },
  'scope-of-oncology': {
    title: 'Scope of Oncology',
    description: 'Detailed guide to oncology career, specializations, courses, and opportunities in India.',
    sections: [
      'What is Oncology?',
      'Why Oncology is Important',
      'Types of Oncology',
      'Courses to Become an Oncologist',
      'Top Institutes',
      'Career Opportunities',
      'Salary of Oncologists',
      'Challenges in Field',
      'Future Growth',
      'FAQs',
    ],
  },
  'scope-of-neurology': {
    title: 'Scope of Neurology',
    description: 'Comprehensive guide to neurology career, specializations, courses, and opportunities in India.',
    sections: [
      'What is Neurology?',
      'Who is a Neurologist?',
      'Types of Neurology',
      'How to Become a Neurologist',
      'Top Institutes',
      'Job Opportunities',
      'Salary of Neurologists',
      'Scope in India',
      'Future Trends',
      'FAQs',
    ],
  },
  'scope-of-echocardiography': {
    title: 'Scope of Echocardiography',
    description: 'Complete guide to echocardiography career, specializations, and opportunities in India.',
    sections: [
      'What is Echocardiography?',
      'Types of Echocardiography',
      'Importance in Healthcare',
      'Who Can Specialize',
      'Courses Available',
      'Job Opportunities',
      'Salary Expectations',
      'Top Recruiters',
      'Future of Echo',
      'FAQs',
    ],
  },
  'scope-of-diabetology': {
    title: 'Scope of Diabetology',
    description: 'Explore diabetology as a specialization, courses, career opportunities in India.',
    sections: [
      'What is Diabetology?',
      'Who is a Diabetologist?',
      'Importance in Healthcare',
      'How to Become a Diabetologist',
      'Courses Available',
      'Job Opportunities',
      'Salary Expectations',
      'Top Recruiters',
      'Future Scope',
      'FAQs',
    ],
  },
  'scope-of-endocrinology': {
    title: 'Scope of Endocrinology',
    description: 'Guide to endocrinology career, specializations, and opportunities in India.',
    sections: [
      'What is Endocrinology?',
      'Who is an Endocrinologist?',
      'Importance in Medicine',
      'How to Become an Endocrinologist',
      'Courses Available',
      'Job Opportunities',
      'Salary Expectations',
      'Career Growth',
      'Future Trends',
      'FAQs',
    ],
  },
  'how-to-become-a-radiologist': {
    title: 'How to Become a Radiologist',
    description: 'Step-by-step guide to becoming a radiologist in India with courses and career path.',
    sections: [
      'Educational Requirements',
      'MBBS Course',
      'MD in Radiology',
      'Super Specialization',
      'Entrance Exams',
      'Top Medical Colleges',
      'Training Duration',
      'Career Opportunities',
      'Salary of Radiologists',
      'FAQs',
    ],
  },
  'how-to-become-a-cardiologist': {
    title: 'How to Become a Cardiologist',
    description: 'Complete roadmap to becoming a cardiologist in India with courses and requirements.',
    sections: [
      'Requirements to Become a Cardiologist',
      'MBBS Course',
      'MD in General Medicine',
      'DM in Cardiology',
      'Entrance Exams',
      'Top Medical Colleges',
      'Training Duration',
      'Career Opportunities',
      'Salary of Cardiologists',
      'FAQs',
    ],
  },
  'how-to-become-a-cosmetologist': {
    title: 'How to Become a Cosmetologist',
    description: 'Guide to becoming a cosmetologist in India with courses and career opportunities.',
    sections: [
      'Educational Requirements',
      'MBBS Foundation',
      'MD in Dermatology',
      'Cosmetology Specialization',
      'Courses Available',
      'Entrance Exams',
      'Top Institutes',
      'Training Duration',
      'Career Options',
      'FAQs',
    ],
  },
  'how-to-become-an-oncologist': {
    title: 'How to Become an Oncologist',
    description: 'Complete guide to becoming an oncologist in India with courses and career path.',
    sections: [
      'Requirements',
      'MBBS Foundation',
      'MD/MS Postgraduate',
      'DM/MCh Super Specialty',
      'Specializations in Oncology',
      'Entrance Exams',
      'Top Institutes',
      'Training Duration',
      'Career Opportunities',
      'FAQs',
    ],
  },
  'how-to-become-a-neurologist': {
    title: 'How to Become a Neurologist',
    description: 'Complete roadmap to becoming a neurologist in India with courses and requirements.',
    sections: [
      'Requirements to Become a Neurologist',
      'MBBS Course',
      'MD in General Medicine',
      'DM in Neurology',
      'Entrance Exams',
      'Top Medical Colleges',
      'Specializations',
      'Training Duration',
      'Career Path',
      'FAQs',
    ],
  },
  'how-to-become-a-diabetologist': {
    title: 'How to Become a Diabetologist',
    description: 'Guide to becoming a diabetologist in India with courses and career opportunities.',
    sections: [
      'Educational Requirements',
      'MBBS Foundation',
      'MD in Internal Medicine',
      'Diabetology Specialization',
      'Courses Available',
      'Entrance Exams',
      'Top Institutes',
      'Training Duration',
      'Career Options',
      'FAQs',
    ],
  },
  'how-to-become-an-endocrinologist': {
    title: 'How to Become an Endocrinologist',
    description: 'Step-by-step guide to becoming an endocrinologist with courses and career path.',
    sections: [
      'Requirements',
      'MBBS Course',
      'MD in Internal Medicine',
      'Endocrinology Specialization',
      'Courses Available',
      'Entrance Exams',
      'Top Institutes',
      'Training Duration',
      'Career Path',
      'FAQs',
    ],
  },
  'how-to-become-an-embryologist': {
    title: 'How to Become an Embryologist',
    description: 'Guide to becoming an embryologist with courses and career opportunities in India.',
    sections: [
      'Educational Requirements',
      'Bachelor\'s Degree',
      'Master\'s in Embryology',
      'Specializations',
      'Training Programs',
      'Entrance Exams',
      'Top Institutes',
      'Career Opportunities',
      'Salary and Growth',
      'FAQs',
    ],
  },
  'how-to-become-a-pediatrician': {
    title: 'How to Become a Pediatrician',
    description: 'Step-by-step guide to becoming a pediatrician in India with courses and requirements.',
    sections: [
      'Requirements to Become a Pediatrician',
      'MBBS Course',
      'MD in Pediatrics',
      'Super Specialization Options',
      'Entrance Exams',
      'Top Medical Colleges',
      'Training Duration',
      'Career Opportunities',
      'Salary of Pediatricians',
      'FAQs',
    ],
  },
  'how-to-become-an-obstetrician-gynecologist': {
    title: 'How to Become an Obstetrician-Gynecologist',
    description: 'Complete guide to becoming an OB-GYN in India with courses and career path.',
    sections: [
      'Requirements to Become an OB-GYN',
      'MBBS Course',
      'MD in Obstetrics and Gynecology',
      'Super Specialization Options',
      'Entrance Exams',
      'Top Medical Colleges',
      'Training Duration',
      'Career Opportunities',
      'Salary and Growth',
      'FAQs',
    ],
  },
};

// This route handles direct certificate ID access at root level
// Supports both:
// - https://dmhca.in/[certificateId]
// - https://verify.dmhca.in/[certificateId] (via subdomain routing)
// Also handles blog slugs that are accessed at root level

export const Route = createFileRoute('/$certificateId')({
  component: RootCertificateHandler,
});

function RootCertificateHandler() {
  const { certificateId } = Route.useParams();

  // Check if this is a blog slug
  if (blogPosts[certificateId]) {
    return <BlogPostPage slug={certificateId} />;
  }

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

function BlogPostPage({ slug }: { slug: string }) {
  const blog = blogPosts[slug];

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-deep mb-4">Blog Not Found</h1>
          <Link to="/blog" className="text-gold hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 dark:from-blue-600/10 dark:to-indigo-600/10"></div>
        <div className="container-x relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-navy-deep dark:text-slate-300 hover:text-navy-deep/70 dark:hover:text-slate-100 mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep dark:text-slate-400 gold-rule">Medical Blog</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep dark:text-slate-100 mt-3">{blog.title}</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">{blog.description}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm">
        <div className="container-x max-w-3xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <div className="mb-12 p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-blue-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy-deep dark:text-slate-100 mb-6 not-prose">Table of Contents</h2>
              <ul className="space-y-3 not-prose">
                {blog.sections.map((section: string, idx: number) => (
                  <li key={idx} className="text-slate-700 dark:text-slate-200 flex items-start gap-3 group hover:bg-white/50 dark:hover:bg-slate-700/50 -mx-2 px-2 py-1 rounded transition">
                    <span className="text-navy-deep dark:text-gold font-bold flex-shrink-0 w-6">{idx + 1}.</span>
                    <span className="group-hover:text-navy-deep dark:group-hover:text-slate-100 transition">{section}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10 not-prose">
              {blog.sections.map((section: string, idx: number) => (
                <div key={idx} className="pb-8 border-b border-slate-200 dark:border-slate-700 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-full text-white font-bold text-sm">{idx + 1}</div>
                    <h2 className="text-2xl font-bold text-navy-deep dark:text-slate-100 leading-tight">{section}</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed ml-14 text-lg">
                    This section covers important information about {section.toLowerCase()}. 
                    To get comprehensive details and start your journey in this field, explore our dedicated courses and resources below.
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 p-10 bg-gradient-to-r from-navy-deep/95 to-blue-900/95 dark:from-navy-deep dark:to-slate-800 rounded-2xl border border-gold/20 dark:border-gold/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Advance Your Medical Career?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Explore our specialized courses and programs designed to help you succeed in your chosen medical field.
                  </p>
                  <Link
                    to="/top-medical-courses"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gold hover:bg-gold/90 text-navy-deep font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
