import { DescriptionType } from "./common/Description";
import { TitleType } from "./common/Title";
import { UserType } from "./common/User";

export interface PackageCardProps {
  title: TitleType;
  description: DescriptionType;
  tags: string[];
  user: UserType;
  downloads: number;
  stars: number;
}
