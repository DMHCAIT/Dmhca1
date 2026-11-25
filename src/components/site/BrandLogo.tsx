export function BrandLogo() {
  return (
    <span className="brand-logo inline-flex shrink-0 items-center">
      <img
        src="/dmhca-brand-logo-320.webp"
        srcSet="/dmhca-brand-logo-320.webp 320w, /dmhca-brand-logo-480.webp 480w"
        sizes="(min-width: 640px) 160px, 144px"
        alt=""
        width={720}
        height={126}
        className="block h-auto w-36 sm:w-40 forced-colors:hidden"
      />
      <span className="sr-only text-xl font-black forced-colors:not-sr-only">DMHCA</span>
    </span>
  );
}
