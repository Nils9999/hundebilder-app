import { breedSelector } from "@/service/breed-selector-service";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

type props = {
  selectedDog: string | null;
  setSelectedDog: Dispatch<SetStateAction<string | null>>;
};

export function BreedSelector({ selectedDog, setSelectedDog }: props) {
  // Remove local state management for selectedDog
  const { data } = useQuery({
    queryKey: ["dogList"],
    queryFn: breedSelector,
  });

  const handleChange = (e: { target: { value: string | null } }) => {
    setSelectedDog(e.target.value);
    selectedDog;
  };

  function createDogList() {
    const finalDogList: string[] = [];

    if (!data) return;
    const dogList = Object.entries(data);
    for (let i = 0; i < dogList.length; i++) {
      //   console.log(dogList[i]);
      if (dogList[i][1].length == 0) {
        // console.log(dogList[i][0]);
        finalDogList.push(dogList[i][0]);
      } else {
        for (let j = 0; j < dogList[i][1].length; j++) {
          finalDogList.push(`${dogList[i][0]}/${dogList[i][1][j]}`);
        }
      }
    }
    // for (let i = 0; i < finalDogList.length; i++) {
    //   console.log(finalDogList[i]);
    // }
    return finalDogList;
  }

  const finalDogList: string[] | undefined = createDogList();

  return (
    <select onChange={handleChange}>
      {finalDogList?.map((dog, index) => (
        <option key={index} value={dog}>
          {dog}
        </option>
      ))}
    </select>
  );
}
