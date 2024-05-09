"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("__form.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => router.push("/success"))
      .catch((error) => alert(error));
  };

  return (
    <main className="container flex flex-col justify-center mx-auto px-4">
      <h3 className="text-2xl md:text-6xl text-slate-100 font-semibold py-4">
        Contact Us
      </h3>
      <form
        name="contact"
        action="/success"
        className="flex flex-col gap-4"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor="yourname"
        >
          <input
            type="text"
            className="grow"
            placeholder="Name"
            name="name"
            id="yourname"
          />
        </label>
        <p className="hidden">
          <label>
            {"Don’t fill this out if you’re human: "}
            <input name="bot-field" />
          </label>
        </p>
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor="yourorg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Organization"
            name="org"
            id="yourorg"
          />
        </label>
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor="youremail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
            id="youremail"
          />
        </label>
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor="yourphone"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            className="w-4 h-4 opacity-70 -scale-x-100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
          >
            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Phone"
            name="phone"
            id="yourphone"
          />
        </label>
        <textarea
          className="input input-bordered flex items-center gap-2 min-h-48"
          placeholder="Message"
          name="message"
          id="yourmessage"
        />
        <div data-netlify-recaptcha="true"></div>

        <button
          type="submit"
          value="Submit"
          className="btn btn-primary w-40 mb-4"
        >
          Send
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
