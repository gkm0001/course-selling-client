import { AcademicCapIcon } from "@heroicons/react/16/solid";

const Bottom = (): JSX.Element => {
    return (
      <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-brand">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="mr-4 md:flex mb-4">
              <a
                className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10 py-0"
                href="/"
              >
                <div className="relative h-8 w-8 md:h-6 md:w-6  flex items-center justify-center rounded-md text-sm antialiased">
                  <div className="absolute h-10 w-full   -top-10 inset-x-0 rounded-full "></div>
                  <div className="text-sm  relative z-20 bg-transparent">
                  <AcademicCapIcon className="h-6 w-6 text-black  " />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-black dark:text-white font-sans">Edu Hub</h1>
                </div>
              </a>
            </div>
            <div>
              A product by{" "}
              <a
                target="__blank"
                className="dark:text-sky-500 text-neutral-600 font-medium"
                href="https://aceternity.com"
              >
                Govind
              </a>
            </div>
         
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0 ">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/pricing">
                Courses
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/components">
              Became Tutor
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/templates">
                Blog
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/categories">
               Career
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/blog">
                
              </a>
              {/* <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/tools/box-shadows">
                Box Shadows
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/showcase">
                Showcase
              </a> */}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <a
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://twitter.com/aceternitylabs"
              >
                Twitter
              </a>
              <a
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://discord.gg/ftZbQvCdN7"
              >
                Discord
              </a>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <a
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://pro.aceternity.com"
              >
                About us
              </a>
              <a
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://aceternity.com"
              >
                Help and Support
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Bottom;
  