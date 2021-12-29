import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 46px;
	outline: none;
	border: 1px solid black;
	border-radius: 8px;
	box-sizing: border-box;
	font-weight: bold;
	font-size: 1rem;
	line-height: 21px;
	text-align: center;
	&:hover {
		background-color: rgba(100, 100, 100, 0.08);
	}
	&:focus {
		background-color: #fff;
	}
`;

export const SearchButton = styled.button`
	border: none;
	outline: none;
	min-width: 138px;
	height: 46px;
	border-radius: 8px;
	background-color: #204080;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 700;
	color: white;
	&:hover {
		background-color: #4f75c2;
	}
`;
