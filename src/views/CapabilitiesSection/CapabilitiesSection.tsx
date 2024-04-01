import SectionBlock from "@/components/SectionBlock/SectionBlock";
import Gimble from "../../../public/gimble.webp";
import Valve from "../../../public/valve.webp";
import Mechanisms from "../../../public/mechanisms.webp";

const ConfigSection = () => {
  return (
    <section id="approach">
      <div className="text-center mb-28">
        <h2 className="section-title text-slate-100 font-semibold my-8">
          Mission
        </h2>
        <div className="m-auto flex flex-col gap-4 text-left">
          <p>
            Space Precision delivers the perfect space mechanism solution no
            matter the mass, volume, functional, or environmental constraints of
            an application. We deploy decades of expertise delivering custom
            mechanisms in accelerated timeframes, focusing on system-level
            efficiencies and design precision.
          </p>
          <p>
            Our systems are designed to meet the specific needs of a spacecraft.
            Our approach is to space-qualify core building blocks – drivetrains,
            seals, and joints – and form them into custom precision systems (ex:
            robotic arms, multi-DOF gimbals, pressure control valves). The
            technical focus is always system efficiency, accuracy, and lifespan.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-28 md:gap-16 lg:flex-row justify-around 2xl:justify-between">
        <SectionBlock
          title="Precision Gimbals"
          snippet="High accuracy, high resolution pointing mechanisms for antennas, solar
          panels, and optics."
          animStagger="animate-hovering-panel-100"
          image={Gimble}
        >
          Designed for survivability. Optional built-in avionics and HDRMs.
        </SectionBlock>
        <SectionBlock
          title="Leak-Resistant Valves"
          snippet="Dynamic flow and pressure control valves with fault-detection as a function. Uses
          patent-pending triple+ non-leak seal technology."
          animStagger="animate-hovering-panel-300"
          image={Valve}
        >
          Customizable to volume, mass, and pressure requirements.
        </SectionBlock>
        <SectionBlock
          title="Space Mechanisms"
          snippet="Control moment gyros, rover platforms, robotic joints, compact telescoping arms for a
          variety of motion, control, and deployment applications."
          animStagger="animate-hovering-panel-100"
          image={Mechanisms}
        >
          Designed to meet the needs of your spacecraft.
        </SectionBlock>
      </div>
    </section>
  );
};

export default ConfigSection;
