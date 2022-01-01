function ProfileBg({ width, height, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={{ ...style }} viewBox="0 0 200 200">
      <path fill="#AB966F" d="M0 0H200V200H0z" />
      <defs>
        <linearGradient id="a" x1="100" x2="100" y1="33" y2="-3" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient id="b" x1="100" x2="100" y1="135" y2="97" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
      <g fill="#917e58" fillOpacity="0.6">
        <path d="M100 0H200V100H100z" />
        <path d="M0 100H100V200H0z" />
      </g>
      <g fillOpacity="0.5">
        <path fill="url(#a)" d="M100 30L0 0 200 0z" />
        <path fill="url(#b)" d="M100 100L0 130 0 100 200 100 200 130z" />
      </g>
    </svg>
  );
}

export default ProfileBg;
