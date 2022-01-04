import React from 'react';
import FlexBox from 'components/atoms/FlexBox';
import categoriesService from 'mocks/categoriesService';
import CategoryElement from './CategoryElement';

const CategoriesPage = () => {
  const categories = categoriesService.getCategories();

  return (
    <FlexBox direction="column">
      {categories.map((category) => (
        <CategoryElement {...{ category }} key={category.id} />
      ))}
    </FlexBox>
  );
};

export default CategoriesPage;
