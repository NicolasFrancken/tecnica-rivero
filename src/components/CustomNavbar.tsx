import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  NavbarMenu,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logo, setLogo] = useState("#main");
  const [button, setButton] = useState("#contratá");
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      setLogo("#main");
      setButton("#contratá");
    } else {
      setLogo("http://localhost:3000");
      setButton("http://localhost:3000/#contratá");
    }
  }, [path]);

  const handleContrataClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
      className="fixed h-20 px-3 md:px-12"
      classNames={{
        wrapper: "px-0",
      }}
    >
      <NavbarBrand as={Link} href={logo}>
        <Image
          src={"/images/logo.webp"}
          alt="logo"
          width={200}
          height={70}
          className="w-[150px] md:w-[200px]"
          priority
        />
      </NavbarBrand>
      <NavbarItem>
        <Button
          size="lg"
          as={Link}
          href={"/equipos"}
          className="font-bold text-lg hidden md:flex bg-transparent"
        >
          Equipos
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          className="font-bold bg-[rgb(179,58,45)] hidden md:flex text-white"
          as={Link}
          href={button}
        >
          CONTRATÁ
        </Button>
      </NavbarItem>
      <NavbarMenuToggle className="md:hidden" />
      <NavbarMenu className="flex flex-col items-center justify-center">
        <NavbarMenuItem>
          <Button
            size="md"
            className="font-semibold bg-[rgb(179,58,45)] text-white"
            as={Link}
            href={button}
            onClick={handleContrataClick}
          >
            CONTRATÁ
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            size="md"
            className="font-semibold bg-transparent "
            as={Link}
            href={"/equipos"}
            onClick={handleContrataClick}
          >
            Equipos
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
