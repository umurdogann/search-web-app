import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, SearchInput, SearchButton } from './styled';
const SearchBar = (props) => {
	const { callback, searchKey } = props;
	const [text, setText] = useState(searchKey ? searchKey : '');
	const navigate = useNavigate();
	const handleOnChange = (e) => {
		callback && callback(e.target.value);
		setText(e.target.value);
	};
	const handleClick = () => {
		navigate('/result/' + text);
	};
	return (
		<Container>
			<SearchInput placeholder='Search Something...' type='text' value={text} onChange={handleOnChange} />
			<SearchButton onClick={handleClick}>Search</SearchButton>
		</Container>
	);
};

export default SearchBar;
