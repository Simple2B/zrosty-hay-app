import { Image } from 'react-native';

import placeholderImage1 from '@assets/images/plantCardPlaceholder/plant1.jpg';
import placeholderImage2 from '@assets/images/plantCardPlaceholder/plant2.jpg';
import placeholderImage3 from 'assets/images/plantCardPlaceholder/plant3.jpg';

export const DEFAULT_PHOTOS = [placeholderImage1, placeholderImage2, placeholderImage3].map((photo) =>
	Image.resolveAssetSource(photo),
);
