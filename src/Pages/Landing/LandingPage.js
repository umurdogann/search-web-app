import React from 'react';
import { Container, Wrapper, LogoSection, Logo, LogoText, SearchSection, ResultSection } from './styled';
import logo from '../../Images/logo.svg';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResult from '../../Components/SearchResult/SearchResult';
const LandingPage = () => {
	return (
		<Container>
			<Wrapper>
				<LogoSection>
					<Logo src={logo} />
					<LogoText>Search web app</LogoText>
				</LogoSection>
				<SearchSection>
					<SearchBar forPage={false} />
				</SearchSection>
				<ResultSection>
					<SearchResult />
				</ResultSection>
			</Wrapper>
		</Container>
	);
};

export default LandingPage;
