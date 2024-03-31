import React from "react";

const About = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="flex flex-col justify-between">
          <h3 className="text-7xl text-slate-100 font-semibold py-4">About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolore perferendis, ea corrupti consequatur molestias quia et
            sapiente voluptatum voluptatibus vel cupiditate fugiat, distinctio
            esse!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolore perferendis, ea corrupti consequatur molestias quia et
            sapiente voluptatum voluptatibus vel cupiditate fugiat, distinctio
            esse! Natus illo in omnis obcaecati! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati dolore perferendis, ea
            corrupti consequatur molestias quia et sapiente voluptatum
            voluptatibus vel cupiditate fugiat, distinctio esse! Natus illo in
            omnis obcaecati!
          </p>
          <button className="btn btn-primary w-40 my-4">Contact Us</button>
        </div>
        <div className="pr-0 md:pr-8">
          <img
            src="https://picsum.photos/2750/2000"
            alt="placeholder"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
