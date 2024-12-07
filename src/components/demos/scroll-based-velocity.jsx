import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="LuI Digital Services.    "
      default_velocity={5}
      className="font-display text-center text-xl font-bold tracking-[-0.02em] text-blue-600 drop-shadow-sm dark:text-white md:text-3xl md:leading-[5rem]"
    />
  );
}
