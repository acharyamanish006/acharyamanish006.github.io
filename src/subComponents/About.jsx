import ComponentNav from "../Components/ComponentNav";
// import Navbar from "../Components/Navbar";
import { skills } from "../data/skills";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="containerTransition relative bg-primary-black flex justify-center items-center md:mr-5 p-5 rounded-xl border border-opacity-10 border-white md:w-1/2 max-md:mx-1">
      <div className="max-md:hidden">
        <ComponentNav />
      </div>
      <div className="flex-col justify-center align-middle">
        <section className="flex md:justify-start align-middle mb-6   max-md:justify-center">
          <h1 className="text-center font-bold text-lg border-b-4 border-primary-golden border-opacity-80 pb-1 px-4">
            About
          </h1>
        </section>
        <main>
          <div>
            <p className="opacity-80 mb-4">
              Passionate software engineer with expertise in JavaScript,
              TypeScript, Node.js, and a wide range of web technologies. I am
              fascinated with compilers and interpreters and enjoy building them
              to deepen my understanding of programming languages. 
              
              <blockquote className="mt-2">
                <i>
              “What I cannot create, I do not understand.” – Richard Feynman
                </i>
              </blockquote>
            </p>
            <p className="opacity-80">
              I'm passionate about creating seamless web experiences and thrive
              on solving complex problems.However, my tech journey isn't limited
              to web development. I also dabble in C++ and thoroughly enjoy
              tackling complex problem-solving challenges on platforms like
              LeetCode in my free time. I'm passionate about creating seamless
              web experiences and love pushing the boundaries of my skills.
            </p>
          </div>
          <div className="mt-5 ">
            <h1 className="font-bold text-xl ml-5 mb-3 border-b-2 border-primary-golden border-opacity-60 w-fit px-3">
              Skills
            </h1>
            <div className="grid grid-cols-2 max-md:grid-cols-1 ">
              {skills.map((data) => (
                <div
                  key={data.category}
                  className="bg-primary-black p-5 rounded-xl border border-opacity-10 border-white m-2 shadow-sm shadow-shadow-golden hover:shadow-primary-golden "
                >
                  {
                    <>
                      <div className="flex justify-between ">
                        <h1 className="font-medium text-lg mb-3 ">
                          {data.category}
                        </h1>
                        <data.icon className="text-primary-golden" />
                      </div>
                      <ul>
                        {data.items.map((item) => (
                          <li
                            key={""}
                            className="font-normal text-sm opacity-80 mb-0.5 "
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  }
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
