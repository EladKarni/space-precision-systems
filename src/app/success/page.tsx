import Link from "next/link";

const success = () => {
  return (
    <main className="container h-full flex flex-col justify-center mx-auto text-center">
      <h1 className="text-4xl mx-auto">Message sent successfully!</h1>
      <Link href="/" className="btn btn-primary w-40 my-4 mx-auto">
        Back to Home
      </Link>
    </main>
  );
};

export default success;
