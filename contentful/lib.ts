import { contentfulClient } from "./contentful";
import { TypePigeonLetter } from "./types";

export const getPigeonLetterBySlug = async (slug: string) => {
  const pigeonLetter = await contentfulClient.getEntries({
    content_type: "pigeonLetter",
    "fields.slug": slug,
  });

  return pigeonLetter.items[0] as TypePigeonLetter<
    "WITHOUT_UNRESOLVABLE_LINKS",
    "en-US"
  >;
};
