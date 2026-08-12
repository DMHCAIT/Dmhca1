import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, 
  Star, 
  BookOpen, 
  Clock, 
  Award, 
  GraduationCap, 
  Globe, 
  FileCheck, 
  ChevronDown,
  CheckCircle2,
  Users,
  ThumbsUp,
  Send
} from "lucide-react";
import { type Course } from "@/data/courses";

export function CourseDetailNew({ 
  course, 
  primaryCat, 
  ptype, 
  gstAmount, 
  razorpayAmount,
  totalPrice, 
  formatINR, 
  related 
}: { 
  course: Course; 
  primaryCat: any; 
  ptype: string; 
  gstAmount: number; 
  razorpayAmount: number;
  totalPrice: number; 
  formatINR: (n:number)=>string; 
  related: Course[] 
}) {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    setExpandedModules(prev =>
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Review form state
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    title: "",
    comment: ""
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log("Review submitted:", reviewForm);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
    setReviewForm({ name: "", rating: 5, title: "", comment: "" });
  };

  const courseDetails = course.courseDetails || {};

  return (
    <div>
      {/* Hero Section */}
      <section className="site-hero">
        {/* hero background image and overlay removed per request */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-blue-900/90 to-navy-deep/85" />
        <div className="relative container-x course-detail-wide py-6 lg:py-8">
          <Link 
            to="/course-category/$slug" 
            params={{ slug: primaryCat.slug }} 
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-gold hover:opacity-80"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {primaryCat.name}
          </Link>
          {/* Reviews removed per request */}
          {/* Reviews Section */}
          <div id="reviews">
            <h2 className="font-display text-2xl text-navy-deep mb-6">Student Reviews</h2>
            
            {/* Reviews Summary */}
            {course.reviews && course.reviews.length > 0 && (() => {
              const reviews = course.reviews!;
              const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
              return (
              <div className="mb-8">
                {/* Average Rating */}
                <div className="mb-8 p-6 bg-gradient-to-br from-gold/5 to-blue-900/5 rounded-lg border border-gold/20">
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-navy-deep">
                        {avgRating.toFixed(1)}
                      </div>
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.round(avgRating)
                                ? "fill-gold text-gold"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Based on {reviews.length} reviews
                      </div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const count = reviews.filter((r) => r.rating === rating).length;
                        const percentage = (count / reviews.length) * 100;
                        return (
                          <div key={rating} className="flex items-center gap-3 mb-2">
                            <div className="w-12 text-sm text-muted-foreground">{rating} star</div>
                            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gold transition-all"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <div className="w-8 text-right text-sm text-muted-foreground">{count}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-4 mb-8">
                  {reviews.map((review, idx) => (
                    <div key={idx} className="border border-border rounded-lg p-5 bg-card hover:border-gold/30 transition">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/10 to-blue-900/10 flex items-center justify-center flex-shrink-0 border border-gold/20 overflow-hidden">
                            {review.studentImage ? (
                              <img 
                                src={review.studentImage} 
                                alt={review.studentName} 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <Users className="w-6 h-6 text-gold/40" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-navy-deep">{review.studentName}</h4>
                              {review.verified && (
                                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < review.rating ? "fill-gold text-gold" : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h5 className="font-medium text-navy-deep">{review.title}</h5>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{review.comment}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-navy-deep transition">
                          <ThumbsUp className="w-4 h-4" />
                          Helpful {review.helpful && review.helpful > 0 && `(${review.helpful})`}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              );
            })()}
            
            {!course.reviews || course.reviews.length === 0 && (
              <div className="mb-8 p-6 bg-secondary/30 rounded-lg border border-border">
                <p className="text-muted-foreground">No reviews yet. Be the first to review this course!</p>
              </div>
            )}

            {/* Review Form */}
            <div className="bg-secondary/10 rounded-lg border border-border p-6">
              <h3 className="font-display text-lg text-navy-deep mb-4">Write Your Review</h3>
              
              {submitSuccess && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Thank you! Your review has been submitted successfully.
                </div>
              )}

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-navy-deep mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                    required
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-navy-deep mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating })}
                        className="transition"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            rating <= reviewForm.rating
                              ? "fill-gold text-gold"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Title */}
                <div>
                  <label className="block text-sm font-medium text-navy-deep mb-1">
                    Review Title
                  </label>
                  <input
                    type="text"
                    value={reviewForm.title}
                    onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                    placeholder="Brief title for your review"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background"
                    required
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm font-medium text-navy-deep mb-1">
                    Your Review
                  </label>
                  <textarea
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    placeholder="Share your experience with this course..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 bg-background resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 bg-navy-deep text-primary-foreground text-sm font-medium rounded hover:bg-navy transition"
                >
                  <Send className="w-4 h-4" />
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          {/* FAQs Section */}
          {course.faqs && course.faqs.length > 0 && (
            <div id="faqs">
              <h2 className="font-display text-2xl text-navy-deep mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {course.faqs.map((faq: { q: string; a: string }, idx: number) => (
                  <details 
                    key={idx}
                    className="group border border-border rounded-lg overflow-hidden bg-card hover:border-gold/30 transition"
                    open={idx === 0}
                  >
                    <summary className="cursor-pointer px-4 py-4 flex items-center justify-between font-medium text-navy-deep hover:bg-secondary/20">
                      <span>{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition" />
                    </summary>
                    <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-secondary/5">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-card border border-border rounded-lg overflow-hidden">
            {/* Course Image */}
            <div className="aspect-[5/3] bg-navy-deep relative overflow-hidden">
              <img 
                src={course.image} 
                srcSet={`${course.image} 1x, ${course.image.replace(/(\.\w+)$/, '-2x$1')} 2x`}
                alt={`${course.title} - Sidebar Image`}
                referrerPolicy="no-referrer" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>

            {/* Course Info */}
            <div className="p-6">
              {/* Price Section */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Course Price</div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-semibold text-navy-deep">
                    {formatINR(course.priceINR)}
                  </div>
                  <div className="text-sm text-muted-foreground">+ GST</div>
                </div>
                <div className="text-xs text-muted-foreground pt-2">
                  Total: {formatINR(totalPrice)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 mb-6">
                <Link 
                  to="/contact-us" 
                  className="w-full inline-flex justify-center items-center px-5 py-3 bg-navy-deep text-primary-foreground text-sm font-medium rounded hover:bg-navy transition"
                >
                  Apply Now
                </Link>
                <a 
                  href="tel:+917042011441" 
                  className="w-full inline-flex justify-center items-center px-5 py-3 border border-border text-navy-deep text-sm font-medium rounded hover:border-navy-deep hover:bg-secondary/20 transition"
                >
                  Book Demo Class
                </a>
              </div>

              {/* Course Details */}
              <div className="pt-6 border-t border-border space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <div className="text-xs uppercase tracking-tight sm:tracking-wide text-muted-foreground min-w-0 truncate">Duration</div>
                  <div className="font-medium text-navy-deep ml-auto flex-shrink-0">
                    {course.meta?.Duration || (course.months ? `${course.months} months` : "—")}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <BookOpen className="w-4 h-4 text-gold flex-shrink-0" />
                  <div className="text-xs uppercase tracking-tight sm:tracking-wide text-muted-foreground min-w-0 truncate">Lessons</div>
                  <div className="font-medium text-navy-deep ml-auto flex-shrink-0">{course.lessons ?? "—"}</div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <Globe className="w-4 h-4 text-gold flex-shrink-0" />
                  <div className="text-xs uppercase tracking-tight sm:tracking-wide text-muted-foreground min-w-0 truncate">Language</div>
                  <div className="font-medium text-navy-deep ml-auto flex-shrink-0">
                    {course.meta?.language || "English"}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <GraduationCap className="w-4 h-4 text-gold flex-shrink-0" />
                  <div className="text-xs uppercase tracking-tight sm:tracking-wide text-muted-foreground min-w-0 truncate">Program</div>
                  <div className="font-medium text-navy-deep ml-auto flex-shrink-0">{ptype}</div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <FileCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <div className="text-xs uppercase tracking-tight sm:tracking-wide text-muted-foreground min-w-0 truncate">Certificate</div>
                  <div className="font-medium text-navy-deep ml-auto flex-shrink-0">
                    {course.meta?.certificate === "no" ? "No" : "Yes"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Related Courses */}
      {related && related.length > 0 && (
        <section className="bg-secondary/40 border-t border-border">
          <div className="container-x py-16">
            <div className="text-xs uppercase tracking-[0.25em] text-navy-deep mb-3">Related programs</div>
            <h2 className="font-display text-3xl text-navy-deep mb-8">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/courses/$slug"
                  params={{ slug: r.slug }}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-gold/30 hover:shadow-lg transition"
                >
                  <div className="aspect-[5/3] relative overflow-hidden bg-navy-deep">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-4">
                      <div className="flex justify-between items-start">
                        <span className="text-xs uppercase tracking-[0.15em] px-2 py-1 bg-gold/20 text-gold rounded">
                          {ptype}
                        </span>
                        {r.rating && (
                          <div className="flex items-center gap-1 text-xs px-2 py-1 bg-white/90 text-navy-deep rounded">
                            <Star className="w-3 h-3 fill-gold text-gold" />
                            {r.rating}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-white leading-tight line-clamp-2">
                          {r.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
