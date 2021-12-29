import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 152px;
	box-sizing: border-box;
`;

export const Wrapper = styled.div`
	width: 50vw;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const LogoSection = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-right: 148px;
	gap: 10px;
`;
export const Logo = styled.img`
	text-decoration: none;
	outline: none;
	width: 278px;
	height: 115px;
	border-top-right-radius: 19px;
	border-bottom-left-radius: 19px;
`;
export const LogoText = styled.p`
	margin: 0;
	padding: 0;
	font-size: 14px;
	font-weight: 700;
	margin-left: 213px;
`;

export const SearchSection = styled.div`
	margin-top: 26px;
	width: 863px;
`;

export const ResultSection = styled.div`
	width: 709px;
	margin-right: 148px;
`;
