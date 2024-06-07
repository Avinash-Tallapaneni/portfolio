import SectionTitle from "../shared/SectionTitle";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Email from "../ui/icons/Email";

type DayOfWeek =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export const Footer = ({ theme }: { theme: string }) => {
  const days: DayOfWeek[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const dailyMessages: Record<DayOfWeek, string> = {
    monday:
      "The day I start my week-long battle against procrastination. Let's do this!",
    tuesday:
      "At least it's not Monday, right? Keep going, the weekend is getting closer!",
    wednesday:
      "It's Hump Day! If we can get over this hump, the weekend is in sight!",
    thursday: "Just one more day until Friday! Hang in there!",
    friday: "Time to pretend work isn't real for a couple of days!",
    saturday: "The day I get up early and do absolutely nothing productive!",
    sunday:
      "A day of rest and Netflix marathons. Enjoy before Monday strikes again!",
  };

  const date = new Date();

  const localTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const message = dailyMessages[days[date.getDay()]];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-center flex-grow w-full h-full max-w-6xl gap-4 px-8 py-4 mx-auto mb-10 font-normal xl:px-0 md:py-14 "
    >
      <SectionTitle message="Contact" />
      <div className="flex flex-col items-center justify-center w-full gap-4 mt-4 text-center ">
        <div className="flex flex-col flex-1 w-full gap-4 ">
          <p className=" text-2xl  md:text-4.5xl">
            Let's Talk about Your Project!
          </p>
          <p className=" text-slate-500">
            It's <span className="text-black">{localTime}</span>, Something on
            your mind? Get in touch &amp; let's discuss over a coffee!!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row ">
          <button
            className="relative px-10 py-3 text-sm uppercase transition-all duration-200 border-2 rounded-md w-[15rem] bg-zeus group text-cream border-zeus md:w-auto md:text-base "
            data-cal-link="tallavin/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule a call
            <div className="skew-12 absolute inset-0 flex h-full w-full translate-x-[-110%] transform justify-center group-hover:translate-x-[100%] group-hover:duration-1000">
              <div className="relative w-8 h-full bg-cream/20"></div>
            </div>
          </button>
          <a
            href="mailto:avinashtallapaneni@gmail.com"
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded bg-cream text-zeus border-2 border-zeus active:scale-[.95] w-[15rem] px-10 py-3 text-sm  uppercase md:w-auto md:text-base"
            aria-label="Mail"
          >
            <Email
              className="w-6 h-6 rounded-lg dark:group-hover:bg-firefly group-hover:bg-cream "
              fill={theme === "dark" ? "#38DFBA" : "#151632"}
            />
            <span>Send an mail</span>
            <div className="skew-12 absolute inset-0 flex h-full w-full translate-x-[-110%] transform justify-center group-hover:translate-x-[100%] group-hover:duration-1000">
              <div className="relative w-8 h-full bg-zeus/20"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-20">
        <p className="tracking-wide text-center font-Dancing-Script md:text-2xl">
          {message}
        </p>
        <p className="mt-4 text-sm text-center md:text-lg">
          © 2024 Design &amp; Developed by{" "}
          <span className="text-base font-bold md:text-xl">
            Avinash Tallapaneni
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
