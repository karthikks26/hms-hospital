import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  return (
    <div className="my-4 flex flex-col items-center">
      <h1 className="text-3xl text-center">Trusted By</h1>
      <Marquee style={{ width: "800px" }}>
        <div>
          <Image
            src="/t1.png"
            width={300}
            height={300}
            alt="img"
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/t2.jpg"
            width={300}
            height={300}
            alt="img"
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/t3.webp"
            width={300}
            height={300}
            alt="img"
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/t4.webp"
            width={300}
            height={300}
            alt="img"
            objectFit="contain"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedBy;
