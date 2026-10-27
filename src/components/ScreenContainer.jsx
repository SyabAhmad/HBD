// Lightweight screen wrapper
export default function ScreenContainer({
  children,
  isVisible,
  className = "",
}) {
  if (!isVisible) return null;

  return (
    <div className={`page ${className}`}>{children}</div>
  );
}
