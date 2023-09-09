import { OcticonProps } from '@primer/react';

export interface TagProps {
  icon?: OcticonProps['icon'] | string;
  link: {
    title: string;
    url: string;
  };
}
