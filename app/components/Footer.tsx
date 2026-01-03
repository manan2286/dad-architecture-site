
export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2 text-sm text-black/70">
          <div className="text-black font-semibold">Khanna Architects</div>
          <div>Delhi, India • 40+ years of practice</div>
          <div className="pt-2 text-xs text-black/50">
            © {new Date().getFullYear()} Khanna Architects. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
