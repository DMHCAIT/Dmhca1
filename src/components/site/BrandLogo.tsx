export function BrandLogo() {
  return (
    <span className="brand-logo inline-flex shrink-0 items-center">
      <img
        src="/dmhca-brand-logo.webp"
        alt=""
        width={720}
        height={126}
        className="block h-auto w-36 sm:w-40 forced-colors:hidden"
      />
      <span className="sr-only text-xl font-black forced-colors:not-sr-only">DMHCA</span>
    </span>
  );
}
