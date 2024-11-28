import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="mt-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Home",
    link: "https://stripe.com",
  },
  {
    title: "Course",
    link: "https://netflix.com",
  },
  {
    title: "About",
    link: "https://google.com",
  },
];
