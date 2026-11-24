export function BirdBadge({ className = "h-12 w-12", id = "logo" }: { className?: string; id?: string }) {
  return (
    <svg
      className={`inline-block shrink-0 ${className}`}
      viewBox="0 0 240 240"
      role="img"
      aria-label="Mockingbird Hill Neighborhood Association logo"
    >
      <defs>
        <path id={`${id}-topLogoArc`} d="M 48 120 A 72 72 0 0 1 192 120" />
        <path id={`${id}-bottomLogoArc`} d="M 192 120 A 72 72 0 0 1 48 120" />
      </defs>
      <circle cx="120" cy="120" r="114" fill="white" />
      <circle cx="120" cy="120" r="108" fill="none" stroke="black" strokeWidth="11" />
      <circle cx="120" cy="120" r="94" fill="none" stroke="black" strokeWidth="3" />
      <circle cx="120" cy="120" r="61" fill="none" stroke="black" strokeWidth="5" />
      <circle cx="120" cy="120" r="53" fill="black" />
      <text fill="black" fontFamily="Arial, Helvetica, sans-serif" fontSize="12.5" fontWeight="700" letterSpacing="4.2">
        <textPath href={`#${id}-topLogoArc`} startOffset="50%" textAnchor="middle">
          MOCKINGBIRD HILL
        </textPath>
      </text>
      <text fill="black" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2.15">
        <textPath href={`#${id}-bottomLogoArc`} startOffset="50%" textAnchor="middle">
          NEIGHBORHOOD ASSOCIATION
        </textPath>
      </text>
      <text
        x="120"
        y="134"
        fill="white"
        fontFamily="Arial Narrow, Arial, Helvetica, sans-serif"
        fontSize="40"
        fontWeight="800"
        letterSpacing="-3"
        textAnchor="middle"
      >
        MHNA
      </text>
    </svg>
  );
}
