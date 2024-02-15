import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import { styleSheet } from './PlantsHeader.style';
import { SearchInput } from '../inputs/SearchInput/SearchInput';
import { PLANTS_HEADER_COLORS } from '@src/styling/lineargradient-colors';
import { CustomStatusBar } from '../CustomStatusBar/CustomStatusBar';
import { STATUS_BAR_TEXT_COLOR } from '../CustomStatusBar/CustomStatusBar.constants';

type Props = {
	value: string;
	onChangeText: (text: string) => void;
};

export const PlantsHeader = ({ value, onChangeText }: Props) => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	const statusBarHeight = useSafeAreaInsets().top;

	return (
		<LinearGradient colors={PLANTS_HEADER_COLORS} style={styles.wrapper(statusBarHeight)}>
			<CustomStatusBar textColor={STATUS_BAR_TEXT_COLOR.light} />
			<SearchInput
				value={value}
				onChangeText={onChangeText}
				title={t('searchPlantsTitle')}
				placeholder={t('searchPlantsPlaceholder')}
			/>
		</LinearGradient>
	);
};
