import React from 'react';
import { Container, Left, Logo, OrderByContainer, ResultWrapper, Right} from './styled';
import logo from '../../Images/logo.svg';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResult from '../../Components/SearchResult/SearchResult';
import PageNumbers from '../../Components/PageNumbers/PageNumbers';
import OrderButton from '../../Components/OrderButton/OrderButton';
const ResultPage = () => {
	return (
		<Container>
			<Left>
				<Logo src={logo} />
			</Left>
			<Right>
				<SearchBar />
				<ResultWrapper>
				<OrderByContainer>
					<OrderButton/>
				</OrderByContainer>
				<SearchResult forPage={true} />
				</ResultWrapper>
                <PageNumbers/>				
			</Right>
		</Container>
	);
};

export default ResultPage;
