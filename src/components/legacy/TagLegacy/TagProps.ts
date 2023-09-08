import { OcticonProps } from '@primer/react';

export interface TagProps {
  icon?: OcticonProps['icon'] | string;
  title: string;
  link: string;
}
