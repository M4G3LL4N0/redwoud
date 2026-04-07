import Link from "next/link"

export default function Nav() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-semibold">
            ForeverLuvd
          </Link>
          
          <nav className="hidden items-center gap-8 md:flex">
            <Link 
              href="/memory" 
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Memory Archive
            </Link>
            <Link 
              href="/voice" 
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Voice
            </Link>
            <Link 
              href="/family" 
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Family
            </Link>
            <Link 
              href="/legacy" 
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Legacy
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/onboarding"
            className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Create Memorial
          </Link>
        </div>
      </div>
    </header>
  )
}
