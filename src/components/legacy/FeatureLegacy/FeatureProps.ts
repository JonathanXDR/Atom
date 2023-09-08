import { OcticonProps } from '@primer/react';

export interface FeatureProps {
  icon: OcticonProps['icon'] | string;
  title?: string;
  description: {
    mainText: string;
    linkText?: string;
    linkUrl?: string;
  };
  externalLink?: {
    text: string;
    url: string;
  };
}
