import React, { FunctionComponent, SVGAttributes, useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { t } from 'i18next';
import { styleSheet } from './PlantCareTipBlock.style';
import { sizes } from '@src/styling/sizes';

type PlantCareTipBlockProps = {
	title: string;
	subTitle?: string;
	SvgIcon: FunctionComponent<SVGAttributes<SVGElement>>;
	text?: string;
};

export const PlantCareTipBlock = ({ title, subTitle, SvgIcon, text }: PlantCareTipBlockProps) => {
	const [showFullText, setShowFullText] = useState(false);
	const { styles } = useStyles(styleSheet);

	const handleShowMore = () => {
		setShowFullText(!showFullText);
	};

	return (
		<View style={styles.tipBlock}>
			<Text style={styles.tipTitle}>{title}</Text>
			<View style={styles.tipRow}>
				<SvgIcon width={sizes.xl} height={sizes.xl} />
				{subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
			</View>
			{text && (
				<>
					<Text style={styles.tipDescription} ellipsizeMode='tail' numberOfLines={showFullText ? undefined : 1}>
						{text}
					</Text>

					<Text style={styles.tipShowMore} onPress={handleShowMore}>
						{showFullText ? t('showLess') : t('showMore')}
					</Text>
				</>
			)}
		</View>
	);
};
