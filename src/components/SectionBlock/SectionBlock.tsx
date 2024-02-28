import Image, { StaticImageData } from "next/image";

type SectionBlockProps = {
  title: string;
  snippet: string;
  image: StaticImageData;
  children: string;
};

const SectionBlock = ({
  title,
  snippet,
  image,
  children,
}: SectionBlockProps) => {
  return (
    <div className="card m-auto lg:m-0">
      <div className="card bg-base-100 min-h-[525px] max-w-[500px]">
        <figure className="scale-75 overflow-visible -m-32 drop-shadow-lg">
          <Image src={image} alt="alt text here" className="rounded-t-md" />
        </figure>
        <div className="card-body p-4 mt-6">
          <h2 className="card-title">{title}</h2>
          <p>{snippet}</p>
          {children}
          <div className="card-actions justify-start pt-2">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
