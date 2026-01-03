
// app/components/BlueWash.tsx
export default function BlueWash() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-900/10" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white" />
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl" />
      <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
    </div>
  );
}
