"use client";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function Equipos() {
  const [imageName, setImageName] = useState(
    "/images/fotocopiadoras/M320F.webp"
  );
  const itemClasses = {
    base: "w-full sm:w-[500px]",
    content: "w-full sm:w-[500px]",
    title: "font-semibold text-lg md:text-xl xl:text-2xl",
    subtitle: "text-xs md:text-sm xl:text-base",
  };
  return (
    <div>
      <CustomNavbar />
      <section className="min-h-screen px-3 py-16 pt-32 md:pt-32 background3 flex flex-col items-center gap-5">
        <div className="bg-background w-full sm:w-[532px] p-2 md:p-4 rounded-medium">
          <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl text-center ">
            Tenemos el equipo perfecto <br className="md:hidden" /> para vos!
          </h2>
        </div>
        <Accordion
          variant="shadow"
          className="text-inherit w-full sm:w-fit"
          itemClasses={itemClasses}
        >
          <AccordionItem
            key="1"
            title="Fotocopiadoras"
            subtitle="La mejor opción para tu oficina"
            aria-label="Fotocopiadoras"
          >
            <div className="flex w-full">
              <div className="flex flex-col min-w-fit sm:ml-5">
                <h4 className="font-bold md:text-xl">B&N</h4>
                <ul className="list-disc ml-5 font-semibold">
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/M320F.webp");
                      }}
                    >
                      M 320F
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/SP3710.webp");
                      }}
                    >
                      SP 3710
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/IM450F.webp");
                      }}
                    >
                      IM 430F
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/MP305.webp");
                      }}
                    >
                      MP305 + SPF
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/MP301.webp");
                      }}
                    >
                      MP301
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/IM2500.webp");
                      }}
                    >
                      IM 2500
                    </Link>
                  </li>
                </ul>
                <h4 className="font-bold md:text-xl mt-4">Color</h4>
                <ul className="list-disc ml-5 font-semibold">
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/IMC300F.webp");
                      }}
                    >
                      IM C300F
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/IMC2010.webp");
                      }}
                    >
                      IM C2010
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg "
                      onClick={() => {
                        setImageName("/images/fotocopiadoras/MC251FW.webp");
                      }}
                    >
                      M C251FW
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-end items-center ml-8 sm:mr-14">
                <Image
                  src={imageName}
                  alt="Fotocopiadora"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            title="Impresoras"
            subtitle="Diseñadas para el hogar"
            aria-label="Impresoras"
          >
            <div className="flex w-full">
              <div className="flex flex-col min-w-fit sm:ml-5 ">
                <ul className="list-disc ml-5 font-semibold ">
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/impresoras/P311.webp");
                      }}
                    >
                      P 311
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/impresoras/P502.webp");
                      }}
                    >
                      P 502
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/impresoras/PC311W.webp");
                      }}
                    >
                      P C311W
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-end items-center ml-8 sm:mr-14">
                <Image
                  src={imageName}
                  alt="Fotocopiadora"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            title="Formato Ancho"
            subtitle="Ideales para imprimir planos"
            aria-label="Formato Ancho"
          >
            <div className="flex w-full">
              <div className="flex flex-col min-w-fit sm:ml-5">
                <ul className="list-disc ml-5 font-semibold">
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                    >
                      MP W6700
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-end items-center ml-8 sm:mr-14">
                <Image
                  src={"/images/ancho/W6700SP.webp"}
                  alt="Fotocopiadora"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
            key="4"
            title="Alta Produccíon"
            subtitle="Perfectas para imprentas"
            aria-label="Alta Produccíon"
          >
            <div className="flex w-full">
              <div className="flex flex-col min-w-fit sm:ml-5">
                <ul className="list-disc ml-5 font-semibold text-sm md:text-lg">
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/alta_prod/MP6002SP.webp");
                      }}
                    >
                      MP 6002
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/alta_prod/MP7503.webp");
                      }}
                    >
                      MP 7503
                    </Link>
                  </li>
                  <li>
                    <Link
                      color="foreground"
                      isBlock
                      as={Button}
                      className="bg-transparent h-fit font-semibold text-sm md:text-lg"
                      onClick={() => {
                        setImageName("/images/alta_prod/IM7000.webp");
                      }}
                    >
                      IM 7000
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-end items-center ml-8 sm:mr-14">
                <Image
                  src={imageName}
                  alt="Fotocopiadora"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </AccordionItem>
        </Accordion>
        <div className="bg-background w-full px-4 py-2 rounded-medium text-center md:text-start sm:w-[532px]">
          <p className="font-semibold text-xs md:text-lg">
            Contamos con +100 modelos más! Si buscas un equipo en específico,{" "}
            <a
              href="mailto:tecnicarivero@gmail.com"
              className="underline font-bold"
            >
              constultá acá.
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
