"use client";

import { NextUIProvider } from "@nextui-org/react";
import { BiDownArrowAlt } from "react-icons/bi";
import { Button, Card, CardHeader, CardBody } from "@nextui-org/react";
import Link from "next/link";
import CustomNavbar from "@/components/CustomNavbar";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Home() {
  const itemClasses = {
    base: "p-0",
    title: "font-bold text-2xl",
    titleWrapper: "pb-1",
  };
  return (
    <NextUIProvider>
      <div className="background2">
        <CustomNavbar />
        <main
          className=" min-h-[calc(100vh-80px)] py-16 mt-[80px]  px-3 md:px-12 flex flex-col background1 items-center md:items-start"
          id="main"
        >
          <h1 className="font-bold text-3xl md:text-5xl xl:text-7xl text-center md:text-start text-black">
            SERVICIO DE ALQUILER <br />
            DE <span className="text-[rgb(179,58,45)]">FOTOCOPIADORAS</span>
          </h1>
          <h3 className="font-bold  text-xl md:text-2xl xl:text-4xl mt-2 text-center md:text-start text-black">
            REPARACIONES Y <br className="md:hidden" /> VENTA DE INSUMOS
          </h3>

          <Button
            as={Link}
            href="#contratá"
            className="bg-[rgb(179,58,45)] text-background font-semibold text-sm md:text-xl mt-4"
          >
            Alquilá hoy <BiDownArrowAlt className="h-8 w-6 ml-2" />
          </Button>
        </main>
        <section
          className="min-h-screen py-16 px-3 md:px-12 2xl:px-72 pt-[calc(4rem+91px)] background2 flex flex-col justify-center items-center gap-6"
          id="contratá"
        >
          <Card className="flex flex-col">
            <CardHeader className="p-3 pb-3 md:pb-3 md:p-6 text-xl md:text-2xl xl:text-4xl font-bold flex justify-center items-center">
              Contratá nuestros servicios
            </CardHeader>
            <CardBody className="flex flex-col justify-center items-center p-3 pt-0 md:p-6 md:pt-0">
              <p className="font-semibold text-base md:text-xl xl:text-2xl text-center">
                Para comenzar a trabajar con nosotros escribinos un mail a
                <a
                  className="text-[rgb(179,58,45)] transition-colors hover:text-[rgb(179,58,45)]/50"
                  href="mailto:tecnicarivero@hotmail.com"
                >
                  {" "}
                  tecnicarivero@hotmail.com
                </a>{" "}
                o acercarte a nuestro local ubicado en la calle
                <span className="text-[rgb(179,58,45)]"> Gallardo 202.</span>
              </p>
            </CardBody>
          </Card>
          <Accordion
            className="px-0 text-black gap-3 "
            variant="splitted"
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="¿Qué incluye?"
              title="¿Qué incluye?"
              className="font-bold"
            >
              <ul className="font-semibold text-base md:text-xl xl:text-xl list-disc ml-6">
                <li>Asesoramiento en la selección del equipo</li>
                <li>Todos los insumos incluidos</li>
                <li>Servicio técnico personalizado</li>
              </ul>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="¿Cómo funciona?"
              title="¿Cómo funciona?"
            >
              {" "}
              <p className="font-semibold text-base md:text-xl xl:text-xl mb-3">
                Nuestro <span className="text-[rgb(179,58,45)]">sistema</span>{" "}
                evita a su negocio un costo de inversión inicial. Lo{" "}
                <span className="text-[rgb(179,58,45)]">libera</span> de
                posibles
                <span className="text-[rgb(179,58,45)]">
                  {" "}
                  inconvenientes
                </span>, <span className="text-[rgb(179,58,45)]">
                  costos
                </span>{" "}
                operativos y servicio por{" "}
                <span className="text-[rgb(179,58,45)]">mantenimiento</span>. De
                acuerdo a la capacidad de su comercio se planifica un costo
                adecuado a la necesidad.
              </p>
              <p className="font-semibold text-base md:text-xl xl:text-xl">
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
      </div>
    </NextUIProvider>
  );
}
