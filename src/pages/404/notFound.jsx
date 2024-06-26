import "../../styles/css/styles.css";

const notFound = () => {
  return (
    <>
      <section
        id="notFound"
        className="flex items-center p-16 bg-black text-greenTaco"
      >
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-white font">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <a
              rel="noopener noreferrer"
              href="/taco-loco"
              className="px-8 py-3 font-bold font-Helvetica md:text-[19px] uppercase bg-orangeTaco text-white"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default notFound;
