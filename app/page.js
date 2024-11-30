import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <div className="heropage relative bg-bg9 w-[800px] h-[79vh]">
        <img src="/gadgets.jpg" className="absolute w-[1600px]" />
        <div className="overlay"></div>
        <h1 className="welcomeText text-6xl font-extrabold text-white tracking-normal relative pt-28 text-center">
          Welcome to where vision meets innovation. Bringing your ideal website
          to life, one pixel at a time.
        </h1>
      </div>
      <div className="bg-bg9 w-[800px] text-white pb-32" id="about">
        <p className="text-4xl pt-9 px-5 text-white font-bold">
          Hello, I'm Tijesunimi, the creative force behind Codelight. As a
          passionate frontend developer with 2+ years of experience, I've had
          the privilege of bringing numerous projects to life. From
          conceptualization to deployment, I've worked closely with clients to
          craft stunning websites that exceed their expectations.
        </p>

        <p className="text-4xl pt-4 px-5 text-white font-bold">
          With a keen eye for detail and a passion for innovation, I design and
          develop websites that are not only visually striking but also highly
          interactive, responsive, and functional. Whether you're looking to
          revamp your online presence or establish a new one, I'm here to help
          you achieve your vision.
        </p>

        <p className="text-4xl pt-4 px-5 text-white font-bold pb-20">
          Let's collaborate to create a digital masterpiece that showcases your
          brand's unique story and style. Get in touch, and let's bring your
          website to life
        </p>

        <div className="pb-10" id="skills">
          <h1 className="text-6xl font-bold underline text-center tracking-wider">
            Skills
          </h1>

          <div className="flex flex-col">
            <li className="px-10 text-4xl font-semibold list-disc underline py-5">
              Programming languages
            </li>
            <span className=" text-3xl font-semibold tracking-widest ml-20">
              - HTML
            </span>
            <span className=" py-2 text-3xl font-semibold tracking-wider ml-20">
              - Cascading StyleSheet (CSS)
            </span>
            <span className=" text-3xl font-semibold tracking-wider ml-20">
              - JavaScript
            </span>

            <li className="px-10 text-4xl font-semibold list-disc underline py-5">
              Framework
            </li>
            <span className=" text-3xl font-semibold tracking-widest ml-20">
              - React.js
            </span>
            <span className=" py-2 text-3xl font-semibold tracking-wider ml-20">
              - Next.js
            </span>

            <li className="px-10 text-4xl font-semibold list-disc underline py-5">
              Tools
            </li>
            <span className=" text-3xl font-semibold tracking-widest ml-20">
              - GitHub
            </span>
            <span className=" py-2 text-3xl font-semibold tracking-wider ml-20">
              - Vercel
            </span>
            <span className=" py-2 text-3xl font-semibold tracking-wider ml-20">
              - Tailwind CSS
            </span>

            <li className="px-10 text-4xl font-semibold list-disc underline py-5">
              Database
            </li>
            <span className=" text-3xl font-semibold tracking-widest ml-20">
              - MongoDB
            </span>

            <li className="px-10 text-4xl font-semibold list-disc underline py-5">
              Other skills
            </li>
            <span className=" text-3xl font-semibold tracking-widest ml-20">
              - Problem-solving
            </span>
            <span className=" py-2 text-3xl font-semibold tracking-wider ml-20">
              - Good communication
            </span>
            <span className=" py-2 text-3xl font-semibold tracking-wider ml-20">
              - Collaboration
            </span>
            <span className=" py-2 text-3xl font-semibold tracking-wider ml-20">
              - Responsive designs
            </span>
          </div>
        </div>
        {/* Services  */}
        <div className="mt-20">
          <h1 className="text-5xl text-center">Services</h1>
          <ul className="mx-10 text-4xl my-5">
            <li>
              <b>Website developing:</b> I can help you create a visual
              captivating website with amazing UI that catches users attention.
            </li>

            <li className="mt-2">
              <b>Coach:</b> If you're interested in learning web development,
              subcribe to newsletter and send me a message{" "}
              <a href="#contact" className="underline">
                here
              </a>
              .{" "}
            </li>
            <li className="mt-2">
              <b>Collaboration: </b> I'm open for collaborations on any
              projects.
            </li>
            <li>
              <b>Why choose codelight to handle your projects?</b> - I'm always
              available, fast, and reliable...{" "}
              <a href="#about" className="underline">
                See more...
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="Projects" className="overflow-x-hidden pb-20 w-[800px] bg-bg9i">
        <h1 className="text-5xl text-center underline tracking-wider font-bold mt-10 text-color3">
          Projects
        </h1>
        <p className="text-4xl px-5 py-8 text-color3 font-semibold">
          Here are some projects I've worked on so far
        </p>

        <div className="mx-5 flex gap-9 overflow-x-scroll">
          <div className="w-[700px] ml-5 my-5">
            <Card styles={"rounded-xl"}>
              <div className="w-[700px]">
                <div className="flex gap-4 overflow-x-scroll mx-2 mt-2 rounded-lg">
                  <img src="/emart2.png" />
                  <img src="/emart3.png" />
                  <img src="/emart4.png" />
                  <img src="/emart5.png" />
                  <img src="/emart6.png" />
                  <img src="/emart7.png" />
                  <img src="/emart8.png" />
                  <img src="/emart9.png" />
                </div>

                <div className="mx-5">
                  <h1 className="py-6 text-5xl font-bold text-white">
                    E-MART - E-commerce
                  </h1>
                  <p className="text-4xl font-semibold text-white pb-7">
                    E-mart is a demo website I created to showcase my ability to
                    create an e-commerce website with amazing UI
                  </p>

                  <a href={"https://e-mart-rho.vercel.app"} target="blank">
                    <Button styles={"text-3xl font-extrabold my-7"}>
                      See Project
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="w-[700px] my-5">
            <Card>
              <div className="w-[700px]">
                <div className="flex gap-4 overflow-x-scroll mx-2 mt-2 rounded-lg">
                  <img src="/tasty1.png" />
                  <img src="/tasty2.png" />
                  <img src="/tasty3.png" />
                  <img src="/tasty4.png" />
                  <img src="/tasty5.png" />
                  <img src="/tasty6.png" />
                  <img src="/tasty7.png" />
                  <img src="/tasty8.png" />
                  <img src="/tasty9.png" />
                  <img src="/tasty10.png" />
                </div>
                <div className="mx-5">
                  <h1 className="pt-5 text-5xl font-bold text-white">
                    TASTY-COOK - Recipe finder
                  </h1>
                  <p className="text-4xl font-semibold text-white py-5">
                    Tasty-cook is a demo website I created to showcase my
                    ability to create a recipe finder website with amazing UI
                  </p>

                  <a href={"https://food-recipe-app-kohl.vercel.app/"}>
                    <Button styles={"text-3xl font-extrabold mb-4 mt-3"}>
                      See Project
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="w-[700px] my-5">
            <Card>
              <div className="w-[700px]">
                <div className="flex gap-4 overflow-x-scroll mx-2 mt-2 rounded-lg">
                  <img src="/lau1.png" />
                  <img src="/lau2.png" />
                  <img src="/lau3.png" />
                </div>
                <div className="mx-5">
                  <h1 className="pt-5 text-5xl font-bold text-white">
                    E-commerce Fashion Website
                  </h1>
                  <p className="text-4xl font-semibold text-white py-5">
                    I created this website for a finally year student. Contents
                    are simple and well detailed.
                  </p>

                  <a href={"https://lautect-project.vercel.app/"}>
                    <Button styles={"text-3xl font-extrabold mb-4"}>
                      See Project
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div id="more" className="py-8 px-5 bg-bg9i w-[800px]">
        <p className="text-4xl text-color3 font-semibold">
          I am not limited to what I can create, Just tell me your ideas (vision
          / expectation), I will code it to life.
        </p>

        <Button styles={"text-3xl my-7 w-[300px] font-extrabold text-white"}>
          Donwload CV
        </Button>
      </div>

      {/* contact-section */}
      <div id="contact" className="w-[800px] py-20 bg-bg9i">
        <h1 className="text-center font-bold text-5xl text-color3">
          Send A Message
        </h1>
        <form className="form flex flex-col w-[700px] bg-bg9 rounded-lg mx-12 mt-5">
          <div className="my-5 mx-4 relative">
            <label htmlFor="name" className="text-3xl font-semibold mt-1">
              Name -{" "}
            </label>
            <input
              type="text"
              id="name"
              className="w-[550px] h-10 rounded-lg text-3xl px-2"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-3xl font-semibold mx-4 pb-2"
            >
              Message -
            </label>
            <textarea
              type="text"
              id="message"
              rows={7}
              cols={42}
              className=" rounded-lg mx-5 text-3xl px-2"
            ></textarea>
          </div>
          <Button styles={"text-3xl my-5 w-[200px]"}>Send</Button>
        </form>
      </div>

      {/* reviews */}
      <div className="pb-20 bg-bg9i w-[800px]">
        <Button styles={"text-3xl mx-10"}>See Reviews</Button>
        <div className="reviews"></div>
      </div>
    </section>
  );
}
