import { BannerProps } from "@/types/Hero/BannerProps";
import { Text } from "@primer/react";
import Link from "next/link";
import "./SunsetBannerLegacy.css";

interface SunsetBannerLegacyProps {
  banner: BannerProps;
}

const SunsetBannerLegacy: React.FC<SunsetBannerLegacyProps> = ({ banner }) => {
  return (
    <Text
      as="p"
      className="sunset-banner sunset-text-color"
      sx={{
        marginBlock: "1em",
      }}
    >
      {banner.title.text}
      {banner.link && (
        <Link className="sunset-text-color" href={banner.link.url}>
          {" "}
          {banner.link.title}
        </Link>
      )}
    </Text>
  );
};

export default SunsetBannerLegacy;
