import { getImageDimensions } from "@/helpers/imageHelper";
import { injectTextSegments } from "@/helpers/textHelper";
import { Box, Heading, Link, Text } from "@primer/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiverProps } from "../../../types/RiverProps";
import "./RiverLegacy.css";

interface RiverLegacyProps {
  river: RiverProps;
}

const RiverLegacy: React.FC<RiverLegacyProps> = ({ river }) => {
  const [dimensions, setDimensions] = useState<{
    width?: number;
    height?: number;
  }>({});

  useEffect(() => {
    const fetchDimensions = async () => {
      const dimensions = await getImageDimensions(river.image.url);
      setDimensions(dimensions);
    };

    fetchDimensions();
  }, [river.image.url]);

  const description = injectTextSegments(river.description.paragraphs);

  return (
    <>
      <Box as="section" id={river.id} className={river.class}>
        <Box className="wrapper">
          <Heading as="h3">{river.title.text}</Heading>
          {description[0]}
          {dimensions.width && dimensions.height && (
            <Box className="welcome-bgs">
              <Image
                className="welcome-bg welcome-bg--screenshot"
                width={dimensions.width}
                height={dimensions.height}
                src={river.image.url}
                alt={river.image.alt}
              />
            </Box>
          )}
          {description[1]}
          {river.link && (
            <Text as="p" className="welcome-cta">
              <Link href={river.link?.url} className="welcome-button">
                {river.link?.title}
              </Link>
            </Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default RiverLegacy;
