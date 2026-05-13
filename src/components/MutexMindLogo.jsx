const MutexMindLogo = ({ color = "#000000" }) => {
  return (
    <svg width="220" height="50" viewBox="0 0 300 70">
      <rect x="7" y="9" width="52" height="52" rx="8" fill="#0D1220" stroke="#00E5A0" strokeWidth="1.5" />
      <rect x="19" y="28" width="28" height="22" rx="4" fill="#00E5A0" />
      <rect x="24" y="18" width="17" height="16" rx="9" fill="none" stroke="#00E5A0" strokeWidth="3" />
      <circle cx="33" cy="37" r="3.5" fill="#080C14" />
      <rect x="31.5" y="37" width="3" height="6" rx="1.5" fill="#080C14" />

      {/* Four lines */}
      <line x1="7" y1="35" x2="2" y2="35" stroke="#00E5A0" strokeWidth="1.5" />
      <line x1="59" y1="35" x2="64" y2="35" stroke="#00E5A0" strokeWidth="1.5" />
      <line x1="33" y1="9" x2="33" y2="4" stroke="#00E5A0" strokeWidth="1.5" />
      <line x1="33" y1="61" x2="33" y2="66" stroke="#00E5A0" strokeWidth="1.5" />

      {/* Four circles */}
      <circle cx="2" cy="35" r="2.5" fill="#00E5A0" />
      <circle cx="64" cy="35" r="2.5" fill="#00E5A0" />
      <circle cx="33" cy="4" r="2.5" fill="#00E5A0" />
      <circle cx="33" cy="66" r="2.5" fill="#00E5A0" />

      {/* Text */}
      <text x="80" y="46" fontFamily="'DM Sans', sans-serif" fontSize="38" fontWeight="700">
        <tspan fill={color}>Mutex</tspan>
        <tspan fill="#00E5A0" dx="10">Mind</tspan>
      </text>
    </svg>
  );
};

export default MutexMindLogo;