import { useEffect, useId, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  FileText,
  Globe,
  MapPin,
  Search,
  X,
} from "lucide-react";
import { courses } from "@/data/courses";
import { searchSite } from "@/lib/site-search";

export function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const resultsId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { data, isFetching, isError } = useQuery({
    queryKey: ["header-search-courses"],
    queryFn: async () => {
      const { fetchCoursesFromSupabase } = await import("@/lib/courses-remote");
      const remote = await fetchCoursesFromSupabase();
      if (!remote) throw new Error("Could not refresh search courses");
      return remote;
    },
    enabled: open,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
  const results = searchSite(query, data?.length ? data : courses);

  const closeSearch = (restoreFocus = false) => {
    setOpen(false);
    setQuery("");
    if (restoreFocus) triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const dismissOutside = (event: Event) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
      setQuery("");
      triggerRef.current?.focus();
    };
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("focusin", dismissOutside);
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("focusin", dismissOutside);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      data-search-open={open}
      className="flex shrink-0 items-center sm:relative"
    >
      <button
        ref={triggerRef}
        type="button"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy-deep hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep"
        aria-label="Search website"
        aria-expanded={open}
        aria-controls={`${resultsId}-search`}
        onClick={() => {
          if (open) closeSearch(true);
          else setOpen(true);
        }}
      >
        <Search className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
      </button>
      {open && (
        <div
          id={`${resultsId}-search`}
          aria-label="Website search"
          className="absolute inset-x-3 top-3 z-50 rounded-xl bg-background p-1 sm:relative sm:inset-x-auto sm:top-auto sm:order-first sm:mr-1 sm:w-[190px] sm:p-0 lg:w-[100px] xl:w-[190px]"
        >
          <form
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              resultsRef.current?.querySelector<HTMLAnchorElement>("a")?.click();
            }}
          >
            <label htmlFor={`${resultsId}-input`} className="sr-only">
              Search courses and pages
            </label>
            <div className="flex h-10 items-center gap-2 rounded-xl bg-muted pl-3 pr-1 sm:h-9 sm:pr-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                ref={inputRef}
                id={`${resultsId}-input`}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    resultsRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
                  }
                }}
                aria-controls={resultsId}
                autoComplete="off"
                placeholder="Search..."
                className="min-w-0 flex-1 border-0 bg-transparent py-1 text-base shadow-none outline-none focus:ring-0 focus-visible:ring-0 sm:text-xs"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={() => closeSearch(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary sm:hidden"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
          {(query.trim() || isError) && (
            <div className="absolute inset-x-1 top-full mt-2 overflow-hidden rounded-xl border border-border/40 bg-popover text-popover-foreground shadow-lg sm:left-0 sm:right-auto sm:w-72">
              {isError && (
                <p role="alert" className="px-3 pt-3 text-xs text-destructive">
                  Could not refresh courses. Showing the saved catalogue.
                </p>
              )}
              <p
                role="status"
                className="border-b border-border/50 px-3 py-2.5 text-[11px] font-medium text-muted-foreground"
              >
                {!query.trim()
                  ? "Type to find courses or website pages."
                  : results.length
                    ? `${results.length} result${results.length === 1 ? "" : "s"}`
                    : "No results found. Try another course or page name."}
                {isFetching && " Updating courses..."}
              </p>
              <div
                ref={resultsRef}
                id={resultsId}
                className="header-search-results max-h-[min(19rem,45dvh)] overflow-y-auto overscroll-contain p-1.5"
                onKeyDown={(event) => {
                  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                  const links = Array.from(
                    event.currentTarget.querySelectorAll<HTMLAnchorElement>("a"),
                  );
                  const index = links.findIndex((link) => link === event.target);
                  if (index === -1) return;
                  event.preventDefault();
                  if (event.key === "ArrowUp" && index === 0) {
                    inputRef.current?.focus();
                  } else {
                    links[
                      (index + (event.key === "ArrowDown" ? 1 : -1) + links.length) % links.length
                    ]?.focus();
                  }
                }}
              >
                {results.map((result) => {
                  const Icon =
                    result.kind === "course"
                      ? BookOpen
                      : result.description === "Blog article"
                        ? FileText
                        : result.description === "Event"
                          ? CalendarDays
                          : result.description === "City-wise courses"
                            ? MapPin
                            : Globe;
                  const content = (
                    <>
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-navy-deep">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="line-clamp-2 text-xs font-medium leading-5">
                          {result.title}
                        </span>
                        <span className="mt-0.5 block text-[10px] leading-4 text-muted-foreground">
                          {result.description}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                        aria-hidden="true"
                      />
                    </>
                  );
                  const className =
                    "group flex items-start gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-muted/70 focus-visible:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary";
                  return result.kind === "course" ? (
                    <Link
                      key={`course-${result.slug}`}
                      to="/courses/$slug"
                      params={{ slug: result.slug }}
                      onClick={() => closeSearch()}
                      className={className}
                    >
                      {content}
                    </Link>
                  ) : (
                    <Link
                      key={result.to}
                      to={result.to}
                      onClick={() => closeSearch()}
                      className={className}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
