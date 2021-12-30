import React, { useEffect, useState } from 'react';
import { Container, Left, Logo, OrderByContainer, ResultWrapper, Right } from './styled';
import logo from '../../Images/logo.svg';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResult from '../../Components/SearchResult/SearchResult';
import PageNumbers from '../../Components/PageNumbers/PageNumbers';
import OrderButton from '../../Components/OrderButton/OrderButton';
import { useParams } from 'react-router-dom';
import { SearchInData, SortData } from '../../Services/SearchService';
const ResultPage = (props) => {
	const { searchKey } = useParams();
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setData(SearchInData(searchKey));
		setPage(1);
	}, [searchKey]);

	const handleOrderTypeChange = (type) => {
		setData(SortData(data, type));
	};

	return (
		<Container>
			<Left>
				<Logo src={logo} />
			</Left>
			<Right>
				<SearchBar notFound={data.length === 0} searchKey={searchKey} />
				{data.length > 0 && (
					<ResultWrapper>
						<OrderByContainer>
							<OrderButton orderCallback={handleOrderTypeChange} />
						</OrderByContainer>
						<SearchResult
							data={data.slice(page === 1 ? 0 : (page - 1) * 6, (page - 1) * 6 + 6)}
							forPage={true}
						/>
					</ResultWrapper>
				)}
				<PageNumbers totalPage={Math.ceil(data.length / 6)} page={page} callback={setPage} />
			</Right>
		</Container>
	);
};

export default ResultPage;
