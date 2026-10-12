export function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        className="hero-artwork-lines"
        focusable="false"
      >
        <g stroke="#f7cbd7" strokeOpacity=".18" strokeWidth=".8">
          {Array.from({ length: 9 }, (_, index) => (
            <path
              key={index}
              d={`M-120 ${310 + index * 22} C180 ${80 + index * 16} 310 ${580 + index * 12} 720 ${470 + index * 17} S1260 ${130 + index * 20} 1720 ${270 + index * 22}`}
            />
          ))}
        </g>
        <g stroke="#ffffff" strokeOpacity=".08" strokeWidth=".8">
          {Array.from({ length: 5 }, (_, index) => (
            <path
              key={index}
              d={`M-100 ${170 + index * 24} C380 ${420 + index * 22} 1030 ${-180 + index * 32} 1730 ${80 + index * 30}`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
