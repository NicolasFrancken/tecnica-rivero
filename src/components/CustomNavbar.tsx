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
import { useState } from "react";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContrataClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="fixed h-20 p-0 md:px-6"
    >
      <NavbarBrand as={Link} href={"#main"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={70}
          className="w-[150px] md:w-[200px]"
        />
      </NavbarBrand>
      <NavbarItem>
        <Link
          isBlock
          color="foreground"
          className="font-bold text-lg hidden md:flex bg-transparent"
          as={Button}
        >
          Equipos
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          className="font-bold bg-[rgb(179,58,45)] hidden md:flex text-white"
          as={Link}
          href="#contratá"
        >
          CONTRATÁ
        </Button>
      </NavbarItem>
      <NavbarMenuToggle className="md:hidden text-black" />
      <NavbarMenu className="flex flex-col items-center justify-center">
        <NavbarMenuItem>
          <Button
            size="lg"
            className="font-bold bg-[rgb(179,58,45)] text-white"
            as={Link}
            href={"#contratá"}
            onClick={handleContrataClick}
          >
            CONTRATÁ
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isBlock
            color="foreground"
            className="font-bold text-lg bg-transparent"
            as={Button}
          >
            Equipos
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
