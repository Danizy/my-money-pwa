import Box from 'components/atoms/Box';
import FlexBox from 'components/atoms/FlexBox';
import React from 'react';
import { Category } from 'types/Category';

interface CategoryElementProps {
  category: Category;
}

const CategoryElement = ({ category }: CategoryElementProps) => {
  return (
    <FlexBox flex={1}>
      <Box padding="25px 10px">{category.name}</Box>
    </FlexBox>
  );
};

export default CategoryElement;
