import Navbar from "../Components/Navbar";
import { projects } from "../data/project";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Project() {
  return (
    <div className="relative bg-primary-black flex justify-center items-center md:mr-5 p-5 rounded-xl border border-opacity-10 border-white md:w-1/2   max-md:my-6 max-md:mx-1">
      <Navbar />
      <div className="flex-col justify-center align-middle">
        <section className="flex md:justify-start align-middle mb-6  max-md:justify-center ">
          <h1 className="text-center font-bold text-lg border-b-4 border-primary-golden border-opacity-80 pb-1 px-4">
            Project
          </h1>
        </section>
        <main>
          <section className="grid grid-cols-2 max-md:grid-cols-1 ">
            {projects.map((data) => (
              <div
                key={data.name}
                className="bg-primary-black p-5 rounded-xl border border-opacity-10 border-white m-4  shadow shadow-shadow-golden  "
              >
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center"
                >
                  <img
                    src={data.image}
                    alt=""
                    className="hover:opacity-60 rounded-md"
                  />
                </a>
                <div className="flex-col justify-center items-center pt-4">
                  <div className="flex justify-center">
                    <h1 className="mr-5">{data.name}</h1>
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary-golden"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <p className="opacity-70 mt-2">{data.description}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
