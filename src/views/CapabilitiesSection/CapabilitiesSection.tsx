import SectionBlock from "@/components/SectionBlock/SectionBlock";
import Gimble from "../../../public/gimble.png";
import Valve from "../../../public/valve.png";

const ConfigSection = () => {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="text-4xl text-secondary font-semibold mb-2">
          Product Capabilities
        </h2>
        <p className="max-w-[40vw] m-auto">
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim.
        </p>
      </div>
      <div className="flex flex-col gap-28 md:gap-16 lg:flex-row justify-around 2xl:justify-between">
        <SectionBlock
          title="Mechanical Parts"
          snippet="Somethin short and sweet to get people engaged with the content"
          image={Gimble}
        >
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim.
        </SectionBlock>
        <SectionBlock
          title="Mechanical Parts"
          snippet="Somethin short and sweet to get people engaged with the content"
          image={Valve}
        >
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus
          lectus.
        </SectionBlock>
      </div>
    </section>
  );
};

export default ConfigSection;
