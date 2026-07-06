import { Link } from "@tanstack/react-router";
import { Clock, BookOpen, ArrowUpRight, Star } from "lucide-react";
import { type Course, formatINR, getCategory } from "@/data/courses";

// Mapping of DMHCA course titles to IBM Practitioner course names for form pre-selection
const courseNameMapping: Record<string, string> = {
  "Fellowship in Echocardiography": "Echocardiography",
  "Certificate Course in Hypertension": "Hypertension Management",
  "Fellowship in Interventional Cardiology": "Interventional Cardiology",
  "Fellowship in Clinical Cardiology": "Clinical Cardiology",
  // Add more mappings as needed
};

function getIBMCourseName(dmhcaTitle: string): string {
  // Check exact match first
  if (courseNameMapping[dmhcaTitle]) {
    return courseNameMapping[dmhcaTitle];
  }
  
  // Fallback: extract specialty from title
  // e.g., "Fellowship in X" -> "X", "Certificate Course in Y" -> "Y"
  const match = dmhcaTitle.match(/(?:Fellowship|PG Diploma|Certificate Course) in\s+(.+)/i);
  if (match) {
    return match[1];
  }
  
  return dmhcaTitle; // Return original if no pattern matches
}

export function CourseCard({ course }: { course: Course }) {
  const cat = getCategory(course.categories[0]);
  const programType = course.program || course.meta?.skill_level || (course.title.toLowerCase().includes("fellowship") ? "Fellowship" : course.title.toLowerCase().includes("pg diploma") ? "PG Diploma" : "Certificate");
  return (
    <Link
      to="/courses/$slug"
      params={{ slug: course.slug }}
      className="group block bg-card border border-border rounded-md overflow-hidden hover:border-navy-deep/40 hover:shadow-[0_24px_50px_-30px_rgba(15,27,61,0.45)] transition"
    >
      <div className="aspect-[5/3] relative overflow-hidden bg-navy-deep">
        <img
          src={course.image}
          alt={`${course.title} - ${cat?.name || "Medical"} Course`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] px-2 py-1 bg-primary-foreground/15 text-primary-foreground rounded-sm">
          <span className="w-1 h-1 rounded-full bg-gold" /> {programType}
        </div>
        {course.rating && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] px-2 py-1 bg-primary-foreground/95 text-navy-deep rounded-sm">
            <Star className="w-3 h-3 fill-gold text-gold" /> {course.rating} <span className="text-muted-foreground">({course.reviewCount})</span>
          </div>
        )}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold/90 mb-1">{cat?.name}</div>
          <div className="font-display text-primary-foreground text-lg leading-tight line-clamp-2">{course.title}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground justify-between">
          <div className="flex items-center gap-3">
            {course.lessons != null && <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> {course.lessons} lessons</span>}
            {course.weeks != null && <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {Math.round(course.weeks / 4.33)} months</span>}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-200 text-slate-700 rounded font-semibold text-[11px]">{programType} - {course.level}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-navy-deep group-hover:text-gold transition whitespace-nowrap">
            View <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
