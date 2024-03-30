import Link from "next/link";

const Navbar = () => {
  return (
      <header className="flex justify-between p-4">
        <Link href="/" className="text-xl font-semibold flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
<span>AutoCaptions</span></Link>
        <nav className="flex gap-10 font-semibold text-white/80 ">
          <Link href="/"className="hover:text-white">Home</Link>
          <Link href="/Pricing"className="hover:text-white">Pricing</Link>
          <Link href="/contact"className="hover:text-white">Contact</Link>
        </nav>
      </header>
  )
}

export default Navbar
