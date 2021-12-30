import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

export const Left = styled.div`
	padding: 27px 37px;
	width: fit-content;
	height: fit-content;
`;

export const Logo = styled.img`
	text-decoration: none;
	outline: none;
	width: 149px;
	height: 63px;
	border-top-right-radius: 19px;
	border-bottom-left-radius: 19px;
`;

export const Right = styled.div`
	width: 671px;
	padding-top: 35px;
	display: flex;
	flex-direction: column;
	gap: 70px;
	flex-wrap: wrap;
	align-items: flex-start;
`;

export const OrderByContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const ResultWrapper = styled.div`
	width: 100%;
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
