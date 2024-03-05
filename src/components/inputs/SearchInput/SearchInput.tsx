import { View, TextInput, Text, Pressable } from "react-native";
import { useStyles } from "react-native-unistyles";

import SearchIcon from "@assets/icons/searchicon.svg";
import ResetSearchIcon from "@assets/icons/resetserch.svg";
import { maxLength } from "@src/constants/inputs";
import { styleSheet } from "./SearchInput.style";
import { useState } from "react";

type Props = {
	title: string;
	placeholder: string;
	value: string;
	onChangeText: (value: string) => void;
};

export const SearchInput = ({
	title,
	placeholder,
	value,
	onChangeText,
}: Props) => {
	const { styles, theme } = useStyles(styleSheet);
	const [isShowTitle, setIsShowTitle] = useState<boolean>(true);

	const onFocus = () => {
		setIsShowTitle(false);
	};
	const onBlue = () => {
		setIsShowTitle(true);
	};

	const onPressReasetSeatch = () => {
		onChangeText("");
	};

	return (
		<View style={styles.wrapper}>
			<View style={styles.innerWrapper}>
				{isShowTitle && <Text style={styles.title}>{title}</Text>}
				<TextInput
					placeholder={placeholder}
					value={value}
					onChangeText={onChangeText}
					maxLength={maxLength}
					placeholderTextColor={theme.colors.borderGrey}
					onFocus={onFocus}
					onBlur={onBlue}
				/>
			</View>
			<View style={styles.serchIcon}>
				{value.length > 0 ? (
					<Pressable onPress={onPressReasetSeatch}>
						<ResetSearchIcon />
					</Pressable>
				) : (
					<SearchIcon />
				)}
			</View>
		</View>
	);
};
