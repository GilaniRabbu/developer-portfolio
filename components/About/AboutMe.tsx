import AnimatedWord from "@/components/Motion/AnimatedWord";
import InteractiveHoverButtons from "./HoverButton";
import { WaveUnderline } from "@/components/ui/wave-underline";

export default function AboutMe() {
  return (
    <section className="min-h-screen py-32 px-4 md:px-10 lg:px-16" id="about">
      <AnimatedWord
        text="AboutMe"
        className="text-center mb-12 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
      />
      <div className="text-center">
        <p className="mb-8 text-2xl text-center text-balance leading-[48px]">
          👋 Hello! My name is{" "}
          <span className="tr-name">Md. Toufiq Gilani Rabbu</span>, a Full Stack
          Website Developer with expertise in building dynamic, functional,
          responsive, and user-friendly web solutions tailored to meet your
          unique needs. ✨ I have a background in Management, having completed
          my BBA with a major in Management and currently pursuing my MBA in the
          same field. ✨ My mission? To deliver solutions that go beyond
          expectations combining innovation, precision, and creativity in every
          project. I focus on writing clean, maintainable code and designing
          interfaces that captivate and engage your audience. Whether
          you&apos;re looking for a business website, e-commerce platform, or
          blog site, I&apos;m here to turn your ideas into high-quality results
          that stand out.
        </p>
        <WaveUnderline
          waveHeight={8}
          waveWidth={20}
          waveColor="#ef4444"
          className="font-semibold"
        >
          <InteractiveHoverButtons />
        </WaveUnderline>
      </div>
    </section>
  );
}
