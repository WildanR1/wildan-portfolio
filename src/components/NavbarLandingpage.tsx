"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarProps,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React from "react";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { Button } from "@nextui-org/react";

type themeTypes = string | null;

const NavbarLandingpage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  let getThemeFromStorage: themeTypes = null;
  if (typeof window !== "undefined") {
    // Hanya menggunakan localStorage saat di sisi klien
    getThemeFromStorage = localStorage.getItem("theme") || null;
  }
  const [theme, setTheme] = React.useState<themeTypes>(getThemeFromStorage);
  React.useEffect(() => {
    if (theme === null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme(() => {
          localStorage.setItem("theme", "dark");
          return "dark";
        });
      } else {
        setTheme(() => {
          localStorage.setItem("theme", "light");
          return "light";
        });
      }
    }
  });
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleDarkMode = (e: any) => {
    if (e.target.checked) {
      setTheme(() => {
        localStorage.setItem("theme", "dark");
        return "dark";
      });
    } else {
      setTheme(() => {
        localStorage.setItem("theme", "light");
        return "light";
      });
    }
  };
  return (
    // <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
    //   <NavbarContent>
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //       className="flex sm:hidden"
    //     />
    //     <NavbarBrand>
    //       <div className="text-primary-foreground dark:text-primary-foreground text-2xl font-bold italic">
    //         Wildan <span className="text-primary">R</span>
    //       </div>
    //     </NavbarBrand>
    //   </NavbarContent>
    //   <NavbarContent className="hidden sm:flex" justify="end">
    //     <NavbarItem>
    //       <Link color="primary" href="/#about">
    //         About
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="primary" href="/#portfolio">
    //         Portfolio
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="primary" href="/#certificate">
    //         Certificate
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="primary" href="/#contact">
    //         Contact
    //       </Link>
    //     </NavbarItem>
    //     {/* <NavbarItem>
    //       <input
    //         type="checkbox"
    //         id="theme"
    //         className="hidden"
    //         onChange={handleDarkMode}
    //         title="theme"
    //         checked={theme === "dark"}
    //       />
    //       <label htmlFor="theme">
    //         <Button as={Link} isIconOnly color="primary" variant="light">
    //           {theme === "dark" ? (
    //             <motion.span
    //               key={"bulan"}
    //               initial={{ opacity: 0, rotate: -45 }}
    //               animate={{ opacity: 1, rotate: 0 }}
    //               exit={{ opacity: 0, rotate: 0 }}
    //               transition={{ duration: 0.5 }}
    //             >
    //               <RiMoonClearFill size={20} />
    //             </motion.span>
    //           ) : (
    //             <motion.span
    //               key={"matahari"}
    //               initial={{ opacity: 0, rotate: -45 }}
    //               animate={{ opacity: 1, rotate: 0 }}
    //               exit={{ opacity: 0, rotate: 0 }}
    //               transition={{ duration: 0.5 }}
    //             >
    //               <RiSunFill size={20} />
    //             </motion.span>
    //           )}
    //         </Button>
    //       </label>
    //     </NavbarItem> */}
    //   </NavbarContent>
    //   <NavbarMenu>
    //     <NavbarMenuItem>
    //       <Link color={"foreground"} className="w-full" href="#">
    //         About
    //       </Link>
    //       <Link color={"foreground"} className="w-full" href="#" size="lg">
    //         Portfolio
    //       </Link>
    //       <Link color={"foreground"} className="w-full" href="#" size="lg">
    //         Certificate
    //       </Link>
    //       <Link color={"foreground"} className="w-full" href="#" size="lg">
    //         Contact
    //       </Link>
    //     </NavbarMenuItem>
    //   </NavbarMenu>
    // </Navbar>
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Wildan R</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Certificate
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color={"primary"} className="w-full" href="#" size="lg">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color={"primary"} className="w-full" href="#" size="lg">
            Portfolio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color={"primary"} className="w-full" href="#" size="lg">
            Certificate
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color={"primary"} className="w-full" href="#" size="lg">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarLandingpage;
