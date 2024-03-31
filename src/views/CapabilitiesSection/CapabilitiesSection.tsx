import SectionBlock from "@/components/SectionBlock/SectionBlock";
import Gimble from "../../../public/gimble.png";
import Valve from "../../../public/valve.png";
import Mechanisms from "../../../public/mechanisms.png";

const ConfigSection = () => {
  return (
    <section id="approach">
      <div className="text-center mb-28">
        <h2 className="text-7xl text-slate-100 font-semibold mb-2">Approach</h2>
        <p className="max-w-[40vw] m-auto">
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim.
        </p>
      </div>
      <div className="flex flex-col gap-28 md:gap-16 lg:flex-row justify-around 2xl:justify-between">
        <SectionBlock
          title="Mechanical Parts"
          snippet="Somethin short and sweet to get people engaged with the content"
          animStagger="animate-hovering-panel-100"
          image={Gimble}
        >
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim.
        </SectionBlock>
        <SectionBlock
          title="Mechanical Parts"
          snippet="Somethin short and sweet to get people engaged with the content"
          animStagger="animate-hovering-panel-300"
          image={Valve}
        >
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus
          lectus.
        </SectionBlock>
        <SectionBlock
          title="Mechanical Parts"
          snippet="Somethin short and sweet to get people engaged with the content"
          animStagger="animate-hovering-panel-100"
          image={Mechanisms}
        >
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim.
        </SectionBlock>
      </div>
    </section>
  );
};

export default ConfigSection;
