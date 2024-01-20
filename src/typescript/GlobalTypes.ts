import templateOne from "../assets/templateOne.png";
import templateTwo from "../assets/templateTwo.png";

export interface TemplateCardInterface {
  id: string;
  imageUrl: string;
}

export const templateCardsImagesHome: TemplateCardInterface[] = [
  { id: "templateOne", imageUrl: templateOne },
  { id: "templateTwo", imageUrl: templateTwo },
];
