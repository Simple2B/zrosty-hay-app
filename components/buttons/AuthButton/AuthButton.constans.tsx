import Google from '@assets/icons/google.svg';
import Facebook from '@assets/icons/facebook.svg';
import Apple from '@assets/icons/apple.svg';
import { sizes } from '@src/styling/sizes';

export enum AuthBtnType {
  google = 'Google',
  facebook = 'Facebook',
  apple = 'Apple',
}

export const ICONS = {
  [AuthBtnType.google]: <Google width={sizes.xl} height={sizes.xl} />,
  [AuthBtnType.apple]: <Apple width={sizes.xl} height={sizes.xl} />,
  [AuthBtnType.facebook]: <Facebook width={sizes.xl} height={sizes.xl} />,
};
