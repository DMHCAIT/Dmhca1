import { Link } from "@tanstack/react-router";
import { Clock, BookOpen, Star, Award } from "lucide-react";
import { type Course, formatINR, getCategory } from "@/data/courses";
import { memo } from "react";

// Accept both Course type and dynamic course data from Supabase
type CourseData = Course & {
  lessons?: number | null;
  months?: number | null;
  rating?: number | null;
  reviewCount?: number | null;
  heroDescription?: string;
  [key: string]: any;
};

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

function CourseCardComponent({
  course,
  compact = false,
}: {
  course: CourseData;
  compact?: boolean;
}) {
  const categoryName = Array.isArray(course.categories) ? course.categories[0] : course.category;
  const cat = getCategory(categoryName);
  const programType =
    course.program ||
    course.meta?.skill_level ||
    (course.title.toLowerCase().includes("fellowship")
      ? "Fellowship"
      : course.title.toLowerCase().includes("pg diploma")
        ? "PG Diploma"
        : "Certificate");
  // Normalize program type for badge (Certificate / PG Diploma / Fellowship)
  const programName = (() => {
    const p = (programType || "").toLowerCase();
    if (p.includes("fellowship")) return "Fellowship";
    if (p.includes("pg diploma") || p.includes("pg")) return "PG Diploma";
    if (p.includes("certificate") || p.includes("cert")) return "Certificate";
    return programType;
  })();

  // Map program types to display levels per request:
  // - Fellowship and PG Diploma => "Expert"
  // - Certificate courses => "Intermediate"
  const displayLevel = (() => {
    const p = (programType || "").toLowerCase();
    if (p.includes("fellowship") || p.includes("pg diploma") || p.includes("pg")) return "Expert";
    if (p.includes("certificate") || p.includes("cert")) return "Intermediate";
    // fallback to course.level if present, otherwise show programType
    if (course.level) return course.level.charAt(0).toUpperCase() + course.level.slice(1);
    return programType;
  })();
  return (
    <Link
      to="/courses/$slug"
      params={{ slug: course.slug }}
      className="group relative flex h-full flex-col [container:course-card/inline-size] overflow-hidden rounded-lg bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(15,27,61,0.45)]"
    >
      <div className="aspect-[5/3] relative overflow-hidden bg-navy-deep">
        <img
          src={course.image}
          alt={`${course.title} - ${cat?.name || "Medical"} Course`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
        <div className="absolute inset-x-2.5 top-2.5 z-10 flex items-start justify-between gap-2 sm:inset-x-3 sm:top-3">
          <div className="inline-flex min-w-0 items-center gap-1.5 rounded-full bg-navy-deep/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.16em]">
            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
            <span className="truncate">{programName}</span>
          </div>
          {course.rating != null && (
            <div className="inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-navy-deep shadow-md sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
              <Star className="h-3 w-3 fill-gold text-gold sm:h-3.5 sm:w-3.5" />
              <span>{course.rating}</span>
              {course.reviewCount != null && (
                <span className="font-normal text-slate-500">({course.reviewCount})</span>
              )}
            </div>
          )}
        </div>
        <div className="absolute bottom-2.5 left-2.5 max-w-[calc(100%-1.25rem)] truncate rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#800020] sm:bottom-3 sm:left-3 sm:max-w-[calc(100%-1.5rem)] sm:text-[10px] sm:tracking-[0.2em]">
          {cat?.name}
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-3.5" : "px-3.5 py-3 sm:px-4"}`}>
        <div
          title={course.title}
          className={`mb-1.5 truncate font-display font-bold leading-tight text-slate-950 ${compact ? "text-base" : "text-lg"}`}
        >
          {course.title}
        </div>
        <p className="mb-2.5 mt-0 line-clamp-2 text-sm leading-relaxed text-slate-700">
          {(course as any).heroDescription ||
            course.overview ||
            `Comprehensive ${programName.toLowerCase()} program in ${cat?.name || "Medical Science"} with expert-led training.`}
        </p>
        <div className="course-card-meta mt-auto flex min-h-5 flex-nowrap items-center gap-x-1.5 pt-2 text-[11px] text-muted-foreground sm:flex-wrap sm:gap-x-3 sm:gap-y-2 sm:text-xs">
          {course.lessons != null && (
            <span className="flex flex-shrink-0 items-center gap-1 whitespace-nowrap font-semibold text-slate-800 sm:gap-1.5">
              <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> {course.lessons} lessons
            </span>
          )}
          {course.months != null && (
            <span className="flex flex-shrink-0 items-center gap-1 whitespace-nowrap font-semibold text-slate-800 sm:gap-1.5">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> {course.months} months
            </span>
          )}
          <span className="flex min-w-0 items-center gap-1 whitespace-nowrap font-semibold text-slate-800 sm:gap-1.5">
            <Award className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" />
            <span className="truncate">{displayLevel}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export const CourseCard = memo(CourseCardComponent);
