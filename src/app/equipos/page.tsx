"use client";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Equipos() {
  const itemClasses = {
    title: "font-semibold text-lg md:text-xl xl:text-2xl",
    subtitle: "text-xs md:text-sm xl:text-base",
  };
  return (
    <div>
      <CustomNavbar />
      <section className="min-h-screen py-16 px-3 md:px-12 2xl:px-96 pt-32 md:pt-40 background3 flex flex-col md:items-center gap-10 md:gap-20">
        <h2 className="font-bold text-3xl md:text-5xl xl:text-5xl text-center ">
          Tenemos el equipo perfecto para vos!
        </h2>
        <Accordion
          variant="shadow"
          className="text-inherit"
          itemClasses={itemClasses}
        >
          <AccordionItem
            key="1"
            title="Fotocopiadoras"
            subtitle="La mejor opción para empresas chicas y medianas"
            aria-label="Fotocopiadoras"
          >
            <ul>
              <li>HOLAAAAAAAA</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            title="Impresoras"
            subtitle="Diseñadas para el hogar"
            aria-label="Impresoras"
          >
            <ul>
              <li>HOLAAAAAAAA</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            title="Formato Ancho"
            subtitle="Ideales para imprimir planos"
            aria-label="Formato Ancho"
          >
            <ul>
              <li>HOLAAAAAAAA</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="4"
            title="Alta Produccíon"
            subtitle="Perfectas para imprentas"
            aria-label="Alta Produccíon"
          >
            <ul>
              <li>HOLAAAAAAAA</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </AccordionItem>
        </Accordion>
      </section>
      <Footer />
    </div>
  );
}
