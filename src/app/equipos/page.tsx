"use client";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Equipos() {
  const itemClasses = {
    base: "w-[500px]",
    content: "w-[500px]",
    title: "font-semibold text-lg md:text-xl xl:text-2xl",
    subtitle: "text-xs md:text-sm xl:text-base",
  };
  return (
    <div>
      <CustomNavbar />
      <section className="min-h-screen py-16 px-3 md:px-12 2xl:px-96 pt-32 md:pt-32 background3 flex flex-col md:items-center gap-5">
        <div className="bg-background w-full py-3 rounded-medium">
          <h2 className="font-bold text-3xl md:text-5xl xl:text-4xl text-center ">
            Tenemos el equipo perfecto para vos!
          </h2>
        </div>
        <Accordion
          variant="shadow"
          className="text-inherit w-[500px]"
          itemClasses={itemClasses}
        >
          <AccordionItem
            key="1"
            title="Fotocopiadoras"
            subtitle="La mejor opción para tu oficina"
            aria-label="Fotocopiadoras"
          >
            <h4 className="font-semibold text-xl">B&N</h4>
            <ul className="list-disc">
              <li>M 320F</li>
              <li>SP 3710</li>
              <li>IM 430F</li>
              <li>MP 305</li>
              <li>MP 301</li>
              <li>IM 2500</li>
            </ul>
            <h4 className="font-semibold text-xl">Color</h4>
            <ul className="list-disc">
              <li>IM C300F</li>
              <li>IM C2010</li>
              <li>M C251FW</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            title="Impresoras"
            subtitle="Diseñadas para el hogar"
            aria-label="Impresoras"
          >
            <ul>
              <li>P 311</li>
              <li>P 502</li>
              <li>P C311W</li>
              <li>SP C840DN</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            title="Formato Ancho"
            subtitle="Ideales para imprimir planos"
            aria-label="Formato Ancho"
          >
            <ul>
              <li>MP W6700</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="4"
            title="Alta Produccíon"
            subtitle="Perfectas para imprentas"
            aria-label="Alta Produccíon"
          >
            <ul>
              <li>MP 6002</li>
              <li>MP 7503</li>
              <li>IM 7000</li>
            </ul>
          </AccordionItem>
        </Accordion>
      <div className="bg-background px-4 py-2 rounded-small">
          <p className="font-semibold text-lg">Contamos con +100 modelos más! Si buscas un equipo en específico, <a href="mailto:tecnicarivero@gmail.com" className="underline font-bold">constultá acá.</a></p>
     
      </div>   </section>
      <Footer />
    </div>
  );
}
