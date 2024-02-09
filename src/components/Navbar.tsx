import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>("");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        // @ts-ignore
        const sectionTop = section.offsetTop - 50; // 50 is the offset
        const sectionHeight = section.clientHeight;
        if (
          window.pageYOffset >= sectionTop &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NextUiNavbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="text-primary-foreground text-2xl font-bold italic">
              Wildan <span className="text-primary">R</span>
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem isActive={activeSection === "about"}>
            <Link
              color={activeSection === "about" ? "primary" : "foreground"}
              href="/#about"
              isBlock={activeSection === "about"}
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeSection === "portfolio"}>
            <Link
              color={activeSection === "portfolio" ? "primary" : "foreground"}
              href="/#portfolio"
              isBlock={activeSection === "portfolio"}
            >
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeSection === "certificate"}>
            <Link
              color={activeSection === "certificate" ? "primary" : "foreground"}
              href="/#certificate"
              isBlock={activeSection === "certificate"}
            >
              Certificate
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeSection === "contact"}>
            <Link
              color={activeSection === "contact" ? "primary" : "foreground"}
              href="/#contact"
              isBlock={activeSection === "contact"}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem isActive={activeSection === "about"}>
            <Link
              color={activeSection === "about" ? "primary" : "foreground"}
              className="w-full"
              href="/#about"
              size="lg"
              isBlock={activeSection === "about"}
            >
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={activeSection === "portfolio"}>
            <Link
              color={activeSection === "portfolio" ? "primary" : "foreground"}
              className="w-full"
              href="/#portfolio"
              size="lg"
              isBlock={activeSection === "portfolio"}
            >
              Portfolio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={activeSection === "certificate"}>
            <Link
              color={activeSection === "certificate" ? "primary" : "foreground"}
              className="w-full"
              href="/#certificate"
              size="lg"
              isBlock={activeSection === "certificate"}
            >
              Certificate
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={activeSection === "contact"}>
            <Link
              color={activeSection === "contact" ? "primary" : "foreground"}
              className="w-full"
              href="/#contact"
              size="lg"
              isBlock={activeSection === "contact"}
            >
              Contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NextUiNavbar>
    </>
  );
};

export default Navbar;
