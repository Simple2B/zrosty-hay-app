import React from 'react';
import { BaseToast, BaseToastProps, ToastConfig } from 'react-native-toast-message';
import { useStyles } from 'react-native-unistyles';

const { theme } = useStyles();

const toastProps: BaseToastProps = {
	text2NumberOfLines: theme.size.zero,
	style: {
		height: 'auto',
		paddingVertical: theme.size.sm + theme.size.xxs,
		paddingHorizontal: theme.size.zero,
	},
};

export const toastConfig: ToastConfig = {
	success: (props) => (
		<BaseToast
			{...props}
			{...toastProps}
			style={[
				toastProps.style,
				{
					borderLeftColor: theme.colors.card,
				},
			]}
		/>
	),
	error: (props: BaseToastProps) => (
		<BaseToast
			{...props}
			{...toastProps}
			style={[
				toastProps.style,
				{
					borderLeftColor: theme.colors.error,
				},
			]}
		/>
	),
	warning: (props) => (
		<BaseToast
			{...props}
			{...toastProps}
			style={[
				toastProps.style,
				{
					borderLeftColor: theme.colors.warning,
				},
			]}
		/>
	),
};
