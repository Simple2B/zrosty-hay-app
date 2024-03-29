import React, { FunctionComponent, SVGAttributes, useState } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { t } from 'i18next';
import { styleSheet } from './PlantCareTipBlock.style';

type PlantCareTipBlockProps = {
	title: string;
	subTitle?: string;
	SvgIcon: FunctionComponent<SVGAttributes<SVGElement>>;
	text?: string;
};

export const PlantCareTipBlock = ({ title, subTitle, SvgIcon, text }: PlantCareTipBlockProps) => {
	const [showFullText, setShowFullText] = useState(false);
	const { styles, theme } = useStyles(styleSheet);

	const handleShowMore = () => {
		setShowFullText(!showFullText);
	};

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.row}>
				<SvgIcon width={theme.size.xl} height={theme.size.xl} />
				{subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
			</View>
			{text && (
				<>
					<Text style={styles.description} ellipsizeMode='tail' numberOfLines={showFullText ? undefined : 1}>
						{text}
					</Text>

					<Text style={styles.showMore} onPress={handleShowMore}>
						{showFullText ? t('showLess') : t('showMore')}
					</Text>
				</>
			)}
		</View>
	);
};
