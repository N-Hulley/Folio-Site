import { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    }
  ],
  sidebarNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    }
  ],
}