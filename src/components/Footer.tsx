import { BiMailSend, BiSolidPhone, BiLocationPlus } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white px-3 md:px-12 py-3 md:py-6 flex flex-col gap-1">
      <div className="flex justify-center items-center text-xs md:text-base xl:text-lg font-semibold">
        <p className="flex justify-center items-center hover:cursor-default">
          <BiLocationPlus className="mr-2 md:mr-4 w-5 h-5 md:w-8 md:h-8" />{" "}
          Gallardo 202 (Esquina Gallardo y Villegas)
        </p>
      </div>
      <div className="flex justify-center items-center text-xs md:text-base xl:text-lg font-semibold">
        <p className="flex justify-center items-center">
          <BiSolidPhone className="mr-2 md:mr-4 w-5 h-5 md:w-8 md:h-8" />{" "}
          <a
            href="tel:+542944428229"
            className="transition-colors hover:text-white/50"
          >
            +542944428229
          </a>{" "}
          /{" "}
          <a
            href="tel:+542944434419"
            className="transition-colors hover:text-white/50"
          >
            +542944434419
          </a>
        </p>
      </div>
      <div className="flex justify-center items-center text-xs md:text-base xl:text-lg font-semibold">
        <p className="flex justify-center items-center">
          <BiMailSend className="mr-2 md:mr-4 w-5 h-5 md:w-8 md:h-8" />{" "}
          <a
            href="mailto:tecnicarivero@gmail.com"
            className="transition-colors hover:text-white/50 "
          >
            tecnicarivero@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
