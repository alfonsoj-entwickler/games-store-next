import Image from "next/image";
import Course from "@/types/Course";

const imageStyle: React.CSSProperties = {
  objectFit: "cover",
  objectPosition: "top",
  zIndex: "1",
};

type Props = {
  item: Course;
};

export default function Courses({ item }: Props) {
  return (
    <section className="h-[32rem] my-20">
      <div className="relative h-full">
        <Image
          src={item.attributes.image.data.attributes.url}
          alt={item.attributes.image.data.attributes.name}
          fill
          style={imageStyle}
        />
        <div className="absolute left-0 top-0 h-full w-full z-10 bg-sky-700/[.2]" />
        <div className="flex flex-col justify-center absolute right-0 w-3/6 h-full p-10  z-20">
          <h3 className="mb-4 text-3xl text-center font-semibold">
            {item.attributes.title}
          </h3>
          <p className="text-xl font-medium ">{item.attributes.content.slice(0,250)} ...</p>
        </div>
      </div>
    </section>
  );
}
