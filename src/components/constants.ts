export const LISTE_HUNDERASSEN_API = `https://dog.ceo/api/breeds/list/all`; //no need to replace anything (I think)

export function Pictures(breed: string | null) {
    return `https://dog.ceo/api/breed/${breed}/images/random`; //replace breed with the type of dog
}
