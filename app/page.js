import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="heropage relative bg-bg6 w-[800px] h-[79vh]">
        <img src="/gadgets.jpg" className="absolute w-[1600px]" />
        <div className="overlay"></div>
        <h1 className="welcomeText text-6xl font-extrabold text-white tracking-widest relative pt-28 text-center">
          Welcome to where vision meets innovation. Bringing your ideal website
          to life, one pixel at a time.
        </h1>
      </div>
      <div className="bg-bg6i w-[800px] text-white pb-32" id="about">
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

        <div id="Projects mb-20">
          <h1 className="text-5xl text-center underline tracking-wider">
            Projects
          </h1>
          <p className="text-4xl px-5 py-8">
            Here are some projects I've worked on so far
          </p>

          <div className="ml-5 flex gap-10 overflow-x-scroll">
            <div>
              <Card
                styles={
                  "text-color1 px-5 py-5 text-3xl w-[600px] font-semibold rounded-xl"
                }
              >
                <div className="flex gap-6 overflow-x-scroll rounded-md">
                  <img src="/emart2.png" />
                  <img src="/emart3.png" />
                  <img src="/emart4.png" />
                  <img src="/emart5.png" />
                  <img src="/emart6.png" />
                  <img src="/emart7.png" />
                  <img src="/emart8.png" />
                  <img src="/emart9.png" />
                </div>
                <h1 className="py-5 text-5xl">E-MART - E-commerce</h1>
                <p className="text-4xl font-semibold text-color1 py-6">
                  E-mart is a demo website I created to showcase my ability to
                  create an e-commerce website with amazing UI
                </p>

                <a href={"https://e-mart-rho.vercel.app"} target="blank">
                  <Button styles={"mt-7"}>See Project</Button>
                </a>
              </Card>
            </div>

            <div>
              <Card
                styles={
                  "text-color1 px-5 py-5 text-3xl w-[600px] font-semibold rounded-xl"
                }
              >
                <div className="flex gap-6 overflow-x-scroll rounded-md">
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
                <h1 className="pt-5 text-5xl">TASTY-COOK - Recipe finder</h1>
                <p className="text-4xl font-semibold text-color1 pt-5">
                  Tasty-cook is a demo website I created to showcase my ability to
                  create a recipe finder website with amazing UI
                </p>

                <a href={'https://food-recipe.vercel.app'}>
                  <Button styles={"mt-7"}>See Project</Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
