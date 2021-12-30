import React, { useState } from 'react';
import { Container, Wrapper, LogoSection, Logo, LogoText, SearchSection, ResultSection } from './styled';
import logo from '../../Images/logo.svg';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResult from '../../Components/SearchResult/SearchResult';
import { SearchInData } from '../../Services/SearchService';

const LandingPage = () => {
	const [filteredData, setFilteredData] = useState(null);
	const [searchText, setSearchText] = useState('');

	const searchBarOnChange = (value) => {
		setSearchText(value);
		if (value) setFilteredData(SearchInData(value));
		else setFilteredData(null);
	};

	return (
		<Container>
			<Wrapper>
				<LogoSection>
					<Logo src={logo} />
					<LogoText>Search web app</LogoText>
				</LogoSection>
				<SearchSection>
					<SearchBar notFound={(!!searchText&&!filteredData.length)} callback={searchBarOnChange} />
				</SearchSection>
				<ResultSection>
					<SearchResult searchText={searchText} data={filteredData ? [...filteredData].slice(0, 3) : null} />
				</ResultSection>
			</Wrapper>
		</Container>
	);
};

export default LandingPage;
