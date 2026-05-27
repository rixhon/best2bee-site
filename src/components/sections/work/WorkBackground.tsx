export function WorkBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-soft/30 via-surface-cool-2/70 to-surface-cool-2" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,.2),transparent_18%),radial-gradient(circle_at_78%_32%,rgba(59,130,246,.12),transparent_20%),radial-gradient(circle_at_22%_82%,rgba(255,255,255,.42),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/45 to-transparent" />
    </div>
  );
}
