import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Hr, LocationText, MailText, MoreButton, NameText, ResultContainer, TopRow } from './styled';

const Result = (props) => {
	const { forPage, data } = props;
	return (
		<ResultContainer>
			<TopRow forPage={forPage}>
				<LocationText>{data[4] + ' - ' + data[5]}</LocationText>
				<MailText>{data[2]}</MailText>
			</TopRow>
			<NameText>{data[0] + ' - ' + data[3].split('/')[2]}</NameText>
			<Hr />
		</ResultContainer>
	);
};

const SearchResult = (props) => {
	const { forPage, data, searchText } = props;
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/result/' + searchText);
	};
	return (
		<>
			{data && data.length > 0 && (
				<Container forPage={forPage}>
					{data.map((result, index) => (
						<Result forPage={forPage} data={result} key={index} />
					))}
					{!forPage && data && data.length > 2 && <MoreButton onClick={handleClick}>Show More</MoreButton>}
				</Container>
			)}
		</>
	);
};

export default SearchResult;
