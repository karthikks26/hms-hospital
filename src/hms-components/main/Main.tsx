import Image from "next/image";
const Main = () => {
  return (
    <>
      <main className=" flex justify-center">
        <div className="flex  items-center flex-row-reverse mt-8">
          <Image src="/doctors.webp" alt="img" width={800} height={800} />
          <div>
            <h1 className="text-5xl mr-[200px] font-bold ">
              We Provide best
              <br />{" "}
              <span className=" text-blue-200 mt-5 block">
                Services <span className="text-blue-400">24/7</span>
              </span>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
