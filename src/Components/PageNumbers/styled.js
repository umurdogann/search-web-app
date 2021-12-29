import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 11px;
`;

export const Button = styled.button`
	border: 1px solid ${(props) => (props.selecteD ? '#204080' : '#484848')};
	border-radius: 4px;
	font-size: 14px;
	font-weight: 700;
	background-color: ${(props) => (props.selected ? '#204080' : '#FFF')};
	color: ${(props) => (props.selected ? '#FFF' : '#484848')};
	height: 25px;
	${(props) => !props.selected && 'cursor:pointer'};
	&:hover {
		background-color: ${(props) => (props.selected ? '#204080' : 'rgba(0,0,0,0.065)')};
	}
	&:active {
		${(props) =>
			!props.selected &&
			`
        background-color: #4F75C2;
        color: #fff;
        `}
	}
`;

export const Dots = styled.p`
	margin: 0;
	padding: 0;
	font-size: 24px;
	font-weight: 700;
	cursor: default;
`;
