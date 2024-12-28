import Image from "next/image";
import { getPigeonLetterBySlug } from "@/contentful/lib";
import MobileGrid from "../_components/MobileGrid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import LetterPageClient from "../_components/LetterPageClient";
import Greetings from "../_components/Greetings";
import GiftBox from "../_components/GiftBox";

export default async function LetterPage({
  params,
}: {
  params: { slug: string };
}) {
  const letter = await getPigeonLetterBySlug(params.slug);

  return (
    <main>
      <div>
        <nav className="flex items-center justify-between px-6 md:px-[10%]">
          <Image
            src={"/images/logo.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className="w-1/3 pt-3 md:w-2/12 lg:w-[7.5vw]"
          />
          <p className="pt-3.5 font-mono text-primary-gray text-opacity-40">
            {letter.sys.id.substring(0, 5).toUpperCase()}
          </p>
        </nav>
        <div className="">
          <Greetings letter={letter} />
          <LetterPageClient letter={letter} />
        </div>
        <MobileGrid />
      </div>
      {letter.fields.message && (
        <div className="m-6 my-32 flex flex-col space-y-6 rounded-2xl border p-6 md:mx-[10%] lg:mx-[20%]">
          <Image
            src={"/images/author.jpg"}
            alt={"logo"}
            width={100}
            height={100}
            className="h-20 w-20 overflow-clip rounded-full"
          />
          <p className="flex flex-col space-y-2 text-xl leading-relaxed">
            {documentToReactComponents(letter.fields.message)}
          </p>
        </div>
      )}
      <GiftBox />
    </main>
  );
}
