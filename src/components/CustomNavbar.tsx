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
  const [button1, setButton1] = useState("#contratá");
  const [button2, setButton2] = useState("#insumos");
  const [button3, setButton3] = useState("#soporte");
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      setLogo("#main");
      setButton1("#contratá");
      setButton2("#insumos");
      setButton3("#soporte");
    } else {
      setLogo("https://tecnicarivero.netlify.app/");
      setButton1("https://tecnicarivero.netlify.app/#contratá");
      setButton2("https://tecnicarivero.netlify.app/#insumos");
      setButton3("https://tecnicarivero.netlify.app/#soporte");
    }
  }, [path]);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
      className="fixed h-20 px-3 lg:px-12"
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
          href={button2}
          className="font-bold text-lg hidden md:flex bg-transparent px-0"
          radius="md"
        >
          Insumos
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          as={Link}
          href={"#soporte"}
          className="font-bold text-lg hidden md:flex bg-transparent px-0"
          radius="md"
        >
          Servicio Tec.
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          as={Link}
          href={"/equipos"}
          className="font-bold text-lg hidden md:flex bg-transparent px-0 mr-2"
          radius="md"
        >
          Equipos
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          className="font-bold bg-[rgb(179,58,45)] hidden md:flex text-white"
          as={Link}
          href={button1}
          radius="md"
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
            href={button1}
            onClick={handleClick}
            radius="md"
          >
            CONTRATÁ
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            size="md"
            className="font-semibold bg-transparent mt-4"
            as={Link}
            href={"/equipos"}
            onClick={handleClick}
            radius="md"
          >
            Equipos
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            size="md"
            className="font-semibold bg-transparent "
            as={Link}
            href={button3}
            onClick={handleClick}
            radius="md"
          >
            Servicio Tec.
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            size="md"
            className="font-semibold bg-transparent "
            as={Link}
            href={button2}
            onClick={handleClick}
            radius="md"
          >
            Insumos
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
