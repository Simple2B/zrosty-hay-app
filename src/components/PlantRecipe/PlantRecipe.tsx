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

export const PlantRecipe = ({ recipe }: Props) => {
	const { styles } = useStyles(styleSheet);

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
				<Text numberOfLines={3} style={styles.description}>
					{recipe.description}
				</Text>
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
