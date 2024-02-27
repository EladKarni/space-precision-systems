import Image from "next/image"
import placeholderImage from "../../../public/placeholder.jpg"

type SectionBlockProps = {
    title: string
    snippet: string
    children: string
}

const SectionBlock = ({ title, snippet, children }: SectionBlockProps) => {
    return (
      <div className="card">
        <div className="card min-w-64 max-w-[30rem] bg-base-100 shadow-xl">
          <figure>
            <Image
              src={placeholderImage}
              alt="alt text here"
              className="rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{snippet}</p>
            {children}
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SectionBlock