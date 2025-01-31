import { LISTE_HUNDERASSEN_API } from "@/components/constants";
import { DogBreedData } from "@/components/types";
import { useQuery } from "@tanstack/react-query";

export async function breedSelector() {
  const response = await fetch(LISTE_HUNDERASSEN_API);
  const data: DogBreedData = await response.json();
  return data.message;
}

// export const breedSelector = (dogBreed: string) => {
//   useQuery<DogBreedData>({
//     queryKey: ["dogbreed", dogBreed],
//     queryFn: async () => {
//       const response = await fetch(LISTE_HUNDERASSEN_API);
//       const data: DogBreedData = await response.json();
//       return data;
//     },
//   });
// };
