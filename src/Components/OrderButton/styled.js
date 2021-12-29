import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: fit-content;
	gap: 4px;
	flex-direction: row;
	align-items: center;
	padding: 4px 12px 4px 4px;
	position: relative;
	cursor: pointer;
`;

export const Text = styled.p`
	margin: 0;
	padding: 0;
	font-weight: 700;
	font-size: 1rem;
`;

export const IconWrapper = styled.img`
	outline: 0;
	text-decoration: none;
	border: none;
	width: 25px;
	height: 24px;
`;

export const PopupContainer = styled.div`
	position: absolute;
	top: 2rem;
	left: 3rem;
	padding: 6px 8px;
	width: 156px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	border: 1px solid #484848;
	background-color: #fff;
	border-radius: 4px;
`;
export const Option = styled.div`
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 700;
	padding: 0 9px;
	${(props) =>
		props.selected &&
		`
    color: #fff;
    background-color:rgba(196, 196, 196, 1);
    `}
	width: 100%;
	height: 23px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		${(props) =>
			!props.selected &&
			`
		background-color: rgba(196, 196, 196, 0.2);
        `}
	}
`;
