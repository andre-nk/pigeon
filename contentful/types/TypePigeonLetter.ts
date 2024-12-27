import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePigeonLetterFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    greet: EntryFieldTypes.Symbol;
    subject: EntryFieldTypes.Symbol;
    message?: EntryFieldTypes.RichText;
    gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    video?: EntryFieldTypes.AssetLink;
}

export type TypePigeonLetterSkeleton = EntrySkeletonType<TypePigeonLetterFields, "pigeonLetter">;
export type TypePigeonLetter<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePigeonLetterSkeleton, Modifiers, Locales>;
