import SectionBlock from "@/components/SectionBlock/SectionBlock";

const ConfigSection = () => {
  return (
    <section>
      <h2 className="text-center text-4xl text-gray-200 underline underline-offset-6 font-semibold mb-10">
        Product Capabilities
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <SectionBlock
          title="Mechanical Parts"
          snippet="Somethin short and sweet to get people engaged with the content"
        >
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus
          lectus.
        </SectionBlock>
        <SectionBlock
          title="Mechanical Parts"
          snippet="Somethin short and sweet to get people engaged with the content"
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
