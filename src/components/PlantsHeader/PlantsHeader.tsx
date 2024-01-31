import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import LinearGradient from 'react-native-linear-gradient';

import { styleSheet } from './PlantsHeader.style';
import { SearchInput } from '../inputs/SearchInput/SearchInput';
import { PLANTS_HEADER_COLORS } from '@src/styling/lineargradient-colors';
import { useTranslation } from 'react-i18next';

export const PlantsHeader = () => {
	const { styles } = useStyles(styleSheet);
	const { t } = useTranslation();

	return (
		<LinearGradient colors={PLANTS_HEADER_COLORS} style={styles.wrapper}>
			<SearchInput title={t('searchPlantsTitle')} placeholder={t('searchPlantsPlaceholder')} />
		</LinearGradient>
	);
};