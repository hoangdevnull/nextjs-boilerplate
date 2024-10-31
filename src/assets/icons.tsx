import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

import Github from './svg/github.svg';
import Google from './svg/google.svg';
import Microsoft from './svg/microsoft.svg';

const IconList = {
  Google,
  Microsoft,
  Github,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
