"use client";

import { NextUIProvider } from "@nextui-org/react";
import { BiDownArrowAlt } from "react-icons/bi";
import { Button, Card, CardHeader, CardBody } from "@nextui-org/react";
import Link from "next/link";
import CustomNavbar from "@/components/CustomNavbar";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Footer from "@/components/Footer";
export default function Home() {
  const itemClasses = {
    base: "px-6",
    title: "font-semibold text-lg md:text-xl xl:text-2xl ",
    trigger: "py-3 px-2",
    content: "pt-0 pb-3 px-2",
  };
  return (
    <NextUIProvider>
      <div>
        <CustomNavbar />
        <main
          className=" min-h-[calc(100vh)] py-40   px-3 md:px-12 flex flex-col background1 items-center md:items-start"
          id="main"
        >
          <h1 className="font-bold text-4xl md:text-5xl xl:text-7xl text-center md:text-start">
            SERVICIO DE ALQUILER <br className="hidden md:inline" />
            DE <span className="text-[rgb(179,58,45)]">FOTOCOPIADORAS</span>
          </h1>

          <h3 className="font-bold  text-xl md:text-2xl xl:text-4xl  text-center md:text-start bg-white/80 md:bg-transparent px-3 py-1 md:p-0 rounded-large mt-2">
            REPARACIONES Y <br className="md:hidden" /> VENTA DE INSUMOS
          </h3>

          <Button
            size="lg"
            className="font-semibold bg-[rgb(179,58,45)] hidden md:flex text-white mt-3 text-xl"
            as={Link}
            href="#contratá"
          >
            Alquilá hoy <BiDownArrowAlt className="h-8 w-6 ml-2" />
          </Button>
        </main>

        <section
          className="min-h-screen py-16 px-3 md:px-12 2xl:px-96 pt-[calc(4rem+91px)] background2 flex flex-col md:justify-center md:items-center gap-3 md:gap-6"
          id="contratá"
        >
          <Card className="flex flex-col">
            <CardHeader className="p-3 pb-3 md:pb-3 md:p-6 text-2xl md:text-3xl xl:text-4xl font-bold flex justify-center items-center">
              Contratá nuestros servicios
            </CardHeader>
            <CardBody className="flex flex-col justify-center items-center p-6 pt-0 md:p-6 md:pt-0">
              <p className="font-semibold text-lg md:text-xl xl:text-2xl text-center">
                Para comenzar a trabajar con nosotros escribinos un mail a
                <a
                  className="text-[rgb(179,58,45)] transition-colors hover:text-[rgb(179,58,45)]/50 underline"
                  href="mailto:tecnicarivero@gmail.com"
                >
                  {" "}
                  tecnicarivero@gmail.com
                </a>{" "}
                o acercarte a nuestro local ubicado en la calle
                <span className="text-[rgb(179,58,45)]"> Gallardo 202.</span>
              </p>
            </CardBody>
          </Card>
          <Accordion
            className="p-0  gap-3 "
            variant="splitted"
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="¿Qué incluye?"
              title="¿Qué incluye?"
              className="font-bold"
            >
              <ul className="font-semibold text-sm md:text-base xl:text-xl list-disc ml-6">
                <li>Asesoramiento en la selección del equipo</li>
                <li>Todos los insumos y repuestos incluidos*</li>
                <li>Servicio técnico personalizado</li>
              </ul>
              <p className="text-xs md:text-sm font-semibold text-right">
                * No incluye papel
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="¿Cómo funciona?"
              title="¿Cómo funciona?"
            >
              {" "}
              <p className="font-semibold text-sm md:text-base xl:text-xl ">
                Nuestro <span className="text-[rgb(179,58,45)]">sistema</span>{" "}
                lo <span className="text-[rgb(179,58,45)]">libera</span> de
                posibles
                <span className="text-[rgb(179,58,45)]">
                  {" "}
                  inconvenientes
                </span>, <span className="text-[rgb(179,58,45)]">
                  costos
                </span>{" "}
                operativos y servicio por{" "}
                <span className="text-[rgb(179,58,45)]">mantenimiento</span>.
              </p>
              <p className="font-semibold text-sm md:text-base xl:text-xl">
                Se define el{" "}
                <span className="text-[rgb(179,58,45)]">equipo adecuado</span> a
                la necesidad. Establecemos un abono mensual, que incluye una
                cantidad de copias libres, de acuerdo al equipo elegido. El
                abono incluye además, todos los{" "}
                <span className="text-[rgb(179,58,45)]">insumos</span>,{" "}
                <span className="text-[rgb(179,58,45)]">repuestos</span>{" "}
                necesarios y un completo{" "}
                <span className="text-[rgb(179,58,45)]">servicio técnico</span>{" "}
                para cubrir cualquier situación relacionada al normal uso y
                funcionamiento.
              </p>
            </AccordionItem>
          </Accordion>
        </section>

        <Footer />
      </div>
    </NextUIProvider>
  );
}
