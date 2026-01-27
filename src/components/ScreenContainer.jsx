// Screen container component with transition
export default function ScreenContainer({
  children,
  isVisible,
  className = "",
}) {
  if (!isVisible) return null;

  return (
    <div className={`screen-transition fade-in py-12 ${className}`}>
      {children}
    </div>
  );
}
