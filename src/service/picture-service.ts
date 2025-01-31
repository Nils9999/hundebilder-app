import { DogPictureData } from "@/components/types";

export async function PictureService(imageUrl: string | undefined) {
    const response = await fetch(`${imageUrl}`);
    const data: DogPictureData = await response.json();
    return data.message;
}