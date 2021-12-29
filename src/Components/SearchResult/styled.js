import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	border: ${(props) => (!props.forPage ? '1px solid black;' : 'none;')};
	border-radius: 4px;
	padding: ${(props) => (props.forPage ? '0;' : '18px 35px 10px 35px')};
	box-sizing: border-box;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
`;

export const ResultContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding: 11px;
	cursor: pointer;
	gap: 10px;
	border-radius: 4px;
	&:hover {
		background-color: #c4c4c4;
	}
`;

export const Hr = styled.div`
	width: 100%;
	border-top: 1px solid black;
`;

export const TopRow = styled.div`
	width: ${(props) => (props.forPage ? '75%' : '100%')};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const LocationText = styled.p`
	padding: 0;
	margin: 0;
	font-weight: 700;
	font-size: 1rem;
	color: #484848;
`;
export const MailText = styled(LocationText)``;
export const NameText = styled(LocationText)`
	font-size: 12px;
	color: #686868;
`;

export const BottomRow = styled.div`
	width: 100%;
`;

export const MoreButton = styled.div`
	font-size: 12px;
	font-weight: 700;
	color: #000;
	cursor: pointer;
`;
