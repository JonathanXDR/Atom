import { Text } from '@primer/react';
import Link from 'next/link';
import './SunsetBannerLegacy.module.css';

const SunsetBannerLegacy: React.FC = () => {
  return (
    <Text
      as="p"
      className="sunset-banner sunset-text-color"
      sx={{
        marginBlock: '1em',
      }}
    >
      Atom and all repositories under Atom will be archived on December 15, 2022
      <Link
        className="sunset-text-color"
        href="https://github.blog/2022-06-08-sunsetting-atom/"
      >
        {' '}
        Learn more in our official statement
      </Link>
    </Text>
  );
};

export default SunsetBannerLegacy;
