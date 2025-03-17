import InteractiveHoverButtons from "./HoverButton";
import { WaveUnderline } from "@/components/ui/wave-underline";

export default function AboutMe() {
  return (
    <section className="py-32 px-4 md:px-10 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-6">About Me</h2>
        <p className="mb-8 text-2xl text-center text-balance leading-[48px]">
          👋 Hello! My name is{" "}
          <WaveUnderline
            waveHeight={8}
            waveWidth={20}
            waveColor="#ef4444"
            className="font-semibold"
          >
            Md. Toufiq Gilani Rabbu
          </WaveUnderline>
          , a Full Stack Website Developer with expertise in building dynamic,
          functional, responsive, and user-friendly web solutions tailored to
          meet your unique needs. ✨ My mission? To deliver solutions that go
          beyond expectations—combining innovation, precision, and creativity in
          every project. I focus on writing clean, maintainable code and
          designing interfaces that captivate and engage your audience. Whether
          you&apos;re looking for a business website, e-commerce platform, or
          blog site, I&apos;m here to turn your ideas into high-quality results
          that stand out.
        </p>
        <InteractiveHoverButtons />
      </div>
    </section>
  );
}
