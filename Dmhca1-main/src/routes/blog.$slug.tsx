import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Medical Blog — DMHCA" },
      {
        name: "description",
        content: "Explore comprehensive medical guidance, career insights, and educational resources.",
      },
    ],
  }),
  component: BlogPost,
});

const blogPosts: Record<string, any> = {
  "how-to-crack-neet-pg": {
    title: "How to Crack NEET PG?",
    description: "Complete guide to preparing for and cracking NEET PG examination with proven strategies.",
    sections: [
      "What is NEET PG?",
      "NEET PG 2025: Exam Pattern & Important Dates",
      "Who Can Apply? (Eligibility)",
      "How to Start Preparation",
      "Best Books & Online Resources",
      "Subject-Wise Preparation Tips",
      "How to Revise Effectively",
      "Mock Tests Strategy",
      "Final Month Strategy",
      "FAQs",
    ],
  },
  "courses-after-mbbs-in-india": {
    title: "Courses After MBBS In India",
    description: "Explore all postgraduate and specialization courses available for MBBS graduates in India.",
    sections: [
      "MBBS Degree Overview",
      "MD/MS Postgraduate Programs",
      "Diploma Courses",
      "Super Specialty Programs",
      "Fellowship Programs",
      "Competitive Entrance Exams",
      "Top Medical Colleges",
      "Career Opportunities",
      "Salary Expectations",
      "FAQs",
    ],
  },
  "scope-of-radiology": {
    title: "Scope of Radiology",
    description: "Comprehensive guide to radiology career, specializations, courses, and opportunities in India.",
    sections: [
      "What is Radiology?",
      "Types of Radiology",
      "Courses to Become a Radiologist",
      "Career Options",
      "Scope in Government Sector",
      "Scope in Private Sector",
      "Salary of Radiologists",
      "Top Colleges for Radiology",
      "Emerging Trends",
      "FAQs",
    ],
  },
  "scope-of-cardiology": {
    title: "Scope of Cardiology",
    description: "Detailed exploration of cardiology as a career, courses, specializations, and opportunities in India.",
    sections: [
      "What is Cardiology?",
      "Types of Cardiology",
      "Courses to Become a Cardiologist",
      "Scope of Cardiology in India",
      "Career Roles",
      "Salary of Cardiologists",
      "Top Colleges for Cardiology",
      "Future Scope",
      "Research Opportunities",
      "FAQs",
    ],
  },
  "scope-of-obstetrics-and-gynecology": {
    title: "Scope of Obstetrics and Gynecology",
    description: "Complete guide to OB-GYN specialization, career paths, courses, and opportunities in India.",
    sections: [
      "What is Obstetrics and Gynecology?",
      "Courses to Become an OB-GYN",
      "Scope of OB-GYN in India",
      "Career Options",
      "Salary Expectations",
      "Top Colleges",
      "Super Specializations",
      "Future Scope",
      "Work Opportunities",
      "FAQs",
    ],
  },
  "scope-of-cosmetology": {
    title: "Scope of Cosmetology",
    description: "Explore cosmetology as a career, courses, specializations, and opportunities in India.",
    sections: [
      "What is Cosmetology?",
      "Why Cosmetology is Popular",
      "Types of Cosmetology Courses",
      "Career Options",
      "Work Opportunities",
      "Salary in Cosmetology",
      "Top Institutes",
      "Future Scope",
      "How to Succeed",
      "FAQs",
    ],
  },
  "scope-of-paediatrics": {
    title: "Scope of Paediatrics",
    description: "Comprehensive guide to pediatrics career, specializations, courses, and opportunities in India.",
    sections: [
      "What is Paediatrics?",
      "Why Paediatrics is Important",
      "Key Areas in Paediatrics",
      "Paediatrics Courses",
      "Top Institutes",
      "Job Roles",
      "Employment Opportunities",
      "Salary of Paediatricians",
      "Future of Paediatrics",
      "FAQs",
    ],
  },
  "scope-of-oncology": {
    title: "Scope of Oncology",
    description: "Detailed guide to oncology career, specializations, courses, and opportunities in India.",
    sections: [
      "What is Oncology?",
      "Why Oncology is Important",
      "Types of Oncology",
      "Courses to Become an Oncologist",
      "Top Institutes",
      "Career Opportunities",
      "Salary of Oncologists",
      "Challenges in Field",
      "Future Growth",
      "FAQs",
    ],
  },
  "scope-of-neurology": {
    title: "Scope of Neurology",
    description: "Comprehensive guide to neurology career, specializations, courses, and opportunities in India.",
    sections: [
      "What is Neurology?",
      "Who is a Neurologist?",
      "Types of Neurology",
      "How to Become a Neurologist",
      "Top Institutes",
      "Job Opportunities",
      "Salary of Neurologists",
      "Scope in India",
      "Future Trends",
      "FAQs",
    ],
  },
  "scope-of-echocardiography": {
    title: "Scope of Echocardiography",
    description: "Complete guide to echocardiography career, specializations, and opportunities in India.",
    sections: [
      "What is Echocardiography?",
      "Types of Echocardiography",
      "Importance in Healthcare",
      "Who Can Specialize",
      "Courses Available",
      "Job Opportunities",
      "Salary Expectations",
      "Top Recruiters",
      "Future of Echo",
      "FAQs",
    ],
  },
  "scope-of-diabetology": {
    title: "Scope of Diabetology",
    description: "Explore diabetology as a specialization, courses, career opportunities in India.",
    sections: [
      "What is Diabetology?",
      "Importance in Healthcare",
      "Courses Available",
      "Career Paths",
      "Job Opportunities",
      "Salary Expectations",
      "Top Institutes",
      "Research Opportunities",
      "Future Scope",
      "FAQs",
    ],
  },
  "scope-of-endocrinology": {
    title: "Scope of Endocrinology",
    description: "Comprehensive guide to endocrinology specialization, courses, and career opportunities.",
    sections: [
      "What is Endocrinology?",
      "Why Endocrinology Matters",
      "Types of Endocrinology",
      "Courses Available",
      "Career Options",
      "Job Opportunities",
      "Salary Expectations",
      "Top Institutes",
      "Future Growth",
      "FAQs",
    ],
  },
  "how-to-become-a-radiologist": {
    title: "How to Become a Radiologist",
    description: "Step-by-step guide to becoming a radiologist in India with courses and career path.",
    sections: [
      "Requirements to Become a Radiologist",
      "Educational Path",
      "MBBS Foundation",
      "Postgraduate Courses",
      "Entrance Exams",
      "Top Medical Colleges",
      "Training Duration",
      "Specializations Available",
      "Career Opportunities",
      "FAQs",
    ],
  },
  "how-to-become-a-cardiologist": {
    title: "How to Become a Cardiologist",
    description: "Complete roadmap to becoming a cardiologist in India with courses and requirements.",
    sections: [
      "Requirements",
      "MBBS Course",
      "MD in General Medicine",
      "DM in Cardiology",
      "Entrance Exams Required",
      "Top Medical Colleges",
      "Super Specializations",
      "Training Duration",
      "Career Path",
      "FAQs",
    ],
  },
  "how-to-become-a-cosmetologist": {
    title: "How to Become a Cosmetologist",
    description: "Guide to becoming a cosmetologist in India with courses, qualifications, and career options.",
    sections: [
      "Who Should Become a Cosmetologist?",
      "Educational Requirements",
      "Certificate Programs",
      "Diploma Courses",
      "Degree Programs",
      "Top Training Institutes",
      "Skills Required",
      "Starting Your Career",
      "Specializations",
      "FAQs",
    ],
  },
  "how-to-become-an-oncologist": {
    title: "How to Become an Oncologist",
    description: "Step-by-step guide to becoming an oncologist in India with courses and career path.",
    sections: [
      "Requirements",
      "MBBS Foundation",
      "MD/MS Postgraduate",
      "DM/MCh Super Specialty",
      "Specializations in Oncology",
      "Entrance Exams",
      "Top Institutes",
      "Training Duration",
      "Career Opportunities",
      "FAQs",
    ],
  },
  "how-to-become-a-neurologist": {
    title: "How to Become a Neurologist",
    description: "Complete roadmap to becoming a neurologist in India with courses and requirements.",
    sections: [
      "Requirements to Become a Neurologist",
      "MBBS Course",
      "MD in General Medicine",
      "DM in Neurology",
      "Entrance Exams",
      "Top Medical Colleges",
      "Specializations",
      "Training Duration",
      "Career Path",
      "FAQs",
    ],
  },
  "how-to-become-a-diabetologist": {
    title: "How to Become a Diabetologist",
    description: "Guide to becoming a diabetologist in India with courses and career opportunities.",
    sections: [
      "Educational Requirements",
      "MBBS Foundation",
      "MD in Internal Medicine",
      "Diabetology Specialization",
      "Courses Available",
      "Entrance Exams",
      "Top Institutes",
      "Training Duration",
      "Career Options",
      "FAQs",
    ],
  },
  "how-to-become-an-endocrinologist": {
    title: "How to Become an Endocrinologist",
    description: "Step-by-step guide to becoming an endocrinologist with courses and career path.",
    sections: [
      "Requirements",
      "MBBS Course",
      "MD in Internal Medicine",
      "DM in Endocrinology",
      "Entrance Exams",
      "Top Medical Colleges",
      "Super Specializations",
      "Training Duration",
      "Career Opportunities",
      "FAQs",
    ],
  },
  "how-to-become-an-embryologist": {
    title: "How to Become an Embryologist",
    description: "Complete guide to becoming an embryologist in India with courses and specializations.",
    sections: [
      "What is Embryology?",
      "Educational Path",
      "Bachelor's Programs",
      "Postgraduate Courses",
      "Super Specializations",
      "Entrance Exams",
      "Top Institutes",
      "Job Opportunities",
      "Career Growth",
      "FAQs",
    ],
  },
  "how-to-become-a-pediatrician": {
    title: "How to Become a Pediatrician",
    description: "Step-by-step guide to becoming a pediatrician in India with courses and requirements.",
    sections: [
      "Requirements",
      "MBBS Course",
      "MD in Paediatrics",
      "Postgraduate Options",
      "Entrance Exams",
      "Top Medical Colleges",
      "Specializations",
      "Training Duration",
      "Career Path",
      "FAQs",
    ],
  },
  "how-to-become-an-obstetrician-gynecologist": {
    title: "How to Become an Obstetrician-Gynecologist",
    description: "Complete roadmap to becoming an OB-GYN in India with courses and career opportunities.",
    sections: [
      "Requirements",
      "MBBS Foundation",
      "MD/MS in OB-GYN",
      "Postgraduate Options",
      "Entrance Exams",
      "Top Medical Colleges",
      "Super Specializations",
      "Training Duration",
      "Career Opportunities",
      "FAQs",
    ],
  },
};

function BlogPost() {
  const params = Route.useParams();
  const blog = blogPosts[params.slug];

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="container-x">
          <Link
            to="/sitemap/"
            className="inline-flex items-center gap-2 text-sm text-navy-deep hover:text-navy-deep/70 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Medical Blog</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep mt-3">{blog.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{blog.description}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <h2 className="text-2xl font-semibold text-navy-deep mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {blog.sections.map((section: string, idx: number) => (
                  <li key={idx} className="text-slate-700 flex items-start gap-2">
                    <span className="text-gold font-semibold">{idx + 1}.</span>
                    <span>{section}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {blog.sections.map((section: string, idx: number) => (
                <div key={idx}>
                  <h2 className="text-2xl font-semibold text-navy-deep mb-4 mt-8">{idx + 1}. {section}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This section covers important information about {section.toLowerCase()}. 
                    To get comprehensive details and start your journey in this field, explore our dedicated courses and resources below.
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gold/10 rounded-lg border border-gold/30">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-navy-deep mb-2">Ready to Advance Your Medical Career?</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore our specialized courses and programs designed to help you succeed in your chosen medical field.
                  </p>
                  <Link
                    to="/top-medical-courses"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy-deep text-primary-foreground rounded-lg hover:bg-navy-deep/90 transition font-semibold"
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
