import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import FastImage from 'react-native-fast-image';

import { Recipe } from '@src/api/model';
import defaultRecipe from '@assets/images/default-recipe.jpg';
import { styleSheet } from './PlantRecipe.style';
import { RecipeCategory } from '../RecipeCategory/RecipeCategory';

type Props = {
	recipe: Recipe;
};

const MAX_LENGTH = 80;
const MIN_LENGTH = 60;

export const PlantRecipe = ({ recipe }: Props) => {
	const { styles } = useStyles(styleSheet);

	const nameLength = recipe.name.split(' ').length;
	const maxDescriptionLength = nameLength > 2 ? MIN_LENGTH : MAX_LENGTH;

	return (
		<TouchableOpacity style={styles.wrapper}>
			<FastImage
				style={styles.recipeImage}
				source={{
					uri: recipe.photo?.urlPath || Image.resolveAssetSource(defaultRecipe).uri,

					priority: FastImage.priority.normal,
				}}
				resizeMode={FastImage.resizeMode.cover}
			/>
			<View style={styles.content}>
				<Text style={styles.title}>{recipe.name}</Text>
				<Text style={styles.description}>{recipe.description.slice(0, maxDescriptionLength)}...</Text>
				<View>
					<ScrollView
						contentContainerStyle={styles.categories}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						{recipe.categories.map((category) => (
							<RecipeCategory key={category.uuid} name={category.name} />
						))}
					</ScrollView>
				</View>
			</View>
		</TouchableOpacity>
	);
};
