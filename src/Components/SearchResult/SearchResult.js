import React from 'react';
import { Container, Hr, LocationText, MailText, MoreButton, NameText, ResultContainer, TopRow } from './styled';

const Result = (props) => {
	return (
		<ResultContainer>
			<TopRow forPage={props.forPage}>
				<LocationText>Turkey - Ankara</LocationText>
				<MailText>umurdogann@gmail.com</MailText>
			</TopRow>
			<NameText>Umur Dogan-2016</NameText>
			<Hr />
		</ResultContainer>
	);
};

const SearchResult = (props) => {
	const { forPage } = props;
	return (
		<Container forPage={forPage}>
			<Result forPage={forPage} />
			<Result forPage={forPage} />
			<Result forPage={forPage} />
			{!forPage && <MoreButton>Show More</MoreButton>}
		</Container>
	);
};

export default SearchResult;
