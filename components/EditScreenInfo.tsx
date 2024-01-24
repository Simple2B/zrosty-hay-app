import React from 'react';

import { Text } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { View } from './Themed';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function EditScreenInfo({ path }: { path: string }) {
	const { styles } = useStyles(styleSheet);

	return (
		<View>
			<View style={styles.getStartedContainer}>
				<Text style={styles.getStartedText}>Open up the code for this screen:</Text>

				<View
					style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
					darkColor='rgba(255,255,255,0.05)'
					lightColor='rgba(0,0,0,0.05)'
				>
					<MonoText>{path}</MonoText>
				</View>

				<Text style={styles.getStartedText}>
					Change any of the text, save the file, and your app will automatically update.
				</Text>
			</View>

			<View style={styles.helpContainer}>
				<ExternalLink
					style={styles.helpLink}
					href='https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
				>
					<Text style={styles.helpLinkText}>
						Tap here if your app doesn't automatically update after making changes
					</Text>
				</ExternalLink>
			</View>
		</View>
	);
}

//This is just a usage example. In real components this stylesheet code should be kept in a separate ComponentName.styles.ts file.
const styleSheet = createStyleSheet((theme) => ({
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: theme.paddings.xxl,
		backgroundColor: theme.colors.sun,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: 'center',
	},
	helpContainer: {
		marginTop: 15,
		marginHorizontal: 20,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		textAlign: 'center',
	},
}));
