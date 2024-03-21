import Image from "next/image"
import Link from "next/link"

import { ThemeSwitcher } from "@/components/theme-switcher"

export const Header = () => {
  return (
    <header className="bg-app-900/90 border-b-app-800 border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image src="/logo.svg" alt="" width={50} height={50} />
          </Link>
          <nav className="flex gap-8">
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>
          </nav>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
