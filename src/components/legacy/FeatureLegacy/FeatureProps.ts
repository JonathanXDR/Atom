import { OcticonProps } from '@primer/react';

export interface FeatureProps {
  icon: OcticonProps['icon'] | string;
  title?: string;
  description: {
    text: string;
    link?: {
      title: string;
      url: string;
    };
  };
  link?: {
    title: string;
    url: string;
  };
}
