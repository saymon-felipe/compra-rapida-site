import { ReactNode } from 'react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
