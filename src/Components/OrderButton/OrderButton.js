import React, { useEffect, useRef, useState } from 'react';
import { Container, IconWrapper, Option, PopupContainer, Text } from './styled';
import OrderIcon from '../../Images/OrderIcon.svg';

const Popup = (props) => {
	const ref = useRef();

	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});

	function handleClick(e) {
		if (ref && ref.current) {
			if (!ref.current.contains(e.target)) {
				props.callback();
			}
		}
	}
	return (
		<PopupContainer ref={ref}>
			<Option selected={true}>Name ascending</Option>
			<Option>Name descending</Option>
			<Option>Year ascending</Option>
			<Option>Name descending</Option>
		</PopupContainer>
	);
};

const OrderButton = () => {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<Container onClick={() => setShowPopup(true)}>
			<IconWrapper src={OrderIcon} />
			<Text>Order By</Text>
			{showPopup && (
				<Popup
					callback={() => {
						setShowPopup(false);
					}}
				/>
			)}
		</Container>
	);
};

export default OrderButton;
