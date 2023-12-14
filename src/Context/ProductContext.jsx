import React from "react";

import productsData from '../Data/products.json';
import birdFoodData from '../Data/Food/birdfood.json';
import catFoodData from '../Data/Food/catfood.json';
import dogFoodData from '../Data/Food/dogfood.json';
import rodentFoodData from '../Data/Food/rodentfood.json';
import rodentCagesData from '../Data/Houses/rodentcages.json';
import birdCagesData from '../Data/Houses/birdcages.json';
import matsData from '../Data/Houses/mats.json';
import leashesData from '../Data/Accessories/leashes.json';
import clothesData from '../Data/Accessories/clothes.json';

const productData=[productsData,catFoodData,dogFoodData,birdFoodData,rodentFoodData,birdCagesData,rodentCagesData,matsData,leashesData,clothesData]
export const ProductContext=React.createContext(productData);