import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, SearchInput, SearchButton } from './styled';
const SearchBar = (props) => {
	const { callback, searchKey, notFound } = props;
	const [text, setText] = useState(searchKey ? searchKey : '');
	const navigate = useNavigate();
	const error = !searchKey ? notFound : notFound && searchKey === text ? true : false;
	const handleOnChange = (e) => {
		callback && callback(e.target.value);
		setText(e.target.value);
	};
	const handleClick = () => {
		text !== '' && navigate('/result/' + text);
	};
	return (
		<Container>
			<SearchInput
				notFound={error}
				placeholder='Search Something...'
				type='text'
				value={text}
				onChange={handleOnChange}
			/>
			<SearchButton disabled={error} onClick={handleClick}>{error?'Not Found!':'Search'}</SearchButton>
		</Container>
	);
};

export default SearchBar;
