import { PictureService } from "@/service/picture-service";
import { useEffect, useState } from "react";

type Props = {
  imageUrl: string | undefined;
};

export function ImageWithFrames({ imageUrl }: Props) {
  const [trueImageUrl, setTrueImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageUrl) {
      PictureService(imageUrl)
        .then((url) => {
          setTrueImageUrl(url);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
          setTrueImageUrl(null); // Handle error case
        });
    } else {
      setTrueImageUrl(null); // Handle undefined case
    }
  }, [imageUrl]);

  return <img src={trueImageUrl || ""} alt="Dog" />;
}
