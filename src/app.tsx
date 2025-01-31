import { useState } from "react";
import { BreedSelector } from "./components/breed-selector";
import { Button } from "./components/ui/button";
import { ImageWithFrames } from "./components/ui/image-with-frames";
import { Pictures } from "./components/constants";

export function App() {
  const [selectedDog, setSelectedDog] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("empty");

  function handleClick() {
    setImageUrl(Pictures(selectedDog));
  }

  return (
    <div className="flex h-screen items-center justify-center bg-teal-950">
      <div>
        <ImageWithFrames imageUrl={imageUrl} />
      </div>
      <div className="flex flex-col">
        <Button className="" onClick={handleClick}>
          Show Picture
        </Button>
        <BreedSelector
          selectedDog={selectedDog}
          setSelectedDog={setSelectedDog}
        />
      </div>
    </div>
  );
}
