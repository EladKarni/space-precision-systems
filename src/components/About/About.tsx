import Image from "next/image";
import Sherwin from "../../../public/sherwin.webp";

const About = () => {
  return (
    <section>
      <div className="flex flex-col-reverse xl:flex-row-reverse gap-4">
        <div className="flex flex-col justify-between xl:text-xl">
          <h3 className="section-title text-slate-100 font-semibold py-4">
            About
          </h3>
          <p>
            Space Precision Systems (“SPS”) is based in Pittsburgh, PA. SPS
            provides customization without the risks, costs, and lead times
            typically associated with new space developments.
          </p>
          <p>
            We meet tight procurement schedules, and highly value quality
            project management and proactive communication with our commercial
            and government customers.
          </p>
          <p>
            The team tests and incorporates state-of-the-art mechanism and
            manufacturing technologies into our designs, and has a history of
            early adoption of now-standard components. We have deep expertise
            with mechanical design and systems engineering across ruggedized,
            regulated industries (space, defense, industrial, and medical).
          </p>
          <button className="btn btn-primary w-40">Contact Us</button>
        </div>
        <div>
          <Image
            src={Sherwin}
            alt="Sherwin (co-founder) holding a gimbal"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
