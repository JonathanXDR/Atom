import { OcticonProps } from '@primer/react';

export interface PageProps {
  href: string;
  text: string;
  topBarRight: {
    icon: OcticonProps['icon'] | string;
    href: string;
    text: string;
    className: string;
  };
}
