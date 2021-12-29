import React from 'react';
import { Container, SearchInput, SearchButton } from './styled';
const SearchBar = () => {
	return (
		<Container>
			<SearchInput placeholder='Search Something...' type='text' />
			<SearchButton>Search</SearchButton>
		</Container>
	);
};

export default SearchBar;
