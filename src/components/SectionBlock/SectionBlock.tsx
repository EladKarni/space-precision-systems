import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type SectionBlockProps = {
  title: string;
  snippet: string;
  image: StaticImageData;
  animStagger: string;
  children: string;
};

const SectionBlock = ({
  title,
  snippet,
  image,
  animStagger,
  children,
}: SectionBlockProps) => {
  return (
    <div className="card m-auto lg:m-0">
      <div className="card bg-secondary/10 min-h-[475px] lg:min-h-[485px] max-w-[450px] backdrop-blur-sm">
        <figure
          className={clsx("overflow-visible -m-18 max-h-[175px]", animStagger)}
        >
          <Image
            src={image}
            alt={title}
            className="scale-[.65] md:scale-75 -mt-8"
          />
        </figure>
        <div className="card-body p-4 mt-6">
          <h2 className="card-title">{title}</h2>
          <p>{snippet}</p>
          {children}
          <div className="card-actions justify-start pt-2">
            <a href="/coming-soon" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
