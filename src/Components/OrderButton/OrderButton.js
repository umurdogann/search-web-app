import React, { useEffect, useRef, useState } from 'react';
import { Container, IconWrapper, Option, PopupContainer, Text } from './styled';
import OrderIcon from '../../Images/OrderIcon.svg';

const Popup = (props) => {
	const ref = useRef();
	const options = ['Name ascending', 'Name descending', 'Year ascending', 'Year descending'];
	const [selected, setSelected] = useState('Name ascending');
	const { callback, orderCallback } = props;
	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => document.removeEventListener('click', handleOutsideClick);
	});

	const handleOutsideClick = (e) => {
		if (ref && ref.current) {
			if (!ref.current.contains(e.target)) {
				callback();
			}
		}
	};

	const handleOptionClick = (option) => {
		if (option !== selected) setSelected(option);
		orderCallback(option);
	};

	return (
		<PopupContainer ref={ref}>
			{options.map((option, index) => {
				return (
					<Option key={index} onClick={() => handleOptionClick(option)} selected={option === selected}>
						{option}
					</Option>
				);
			})}
		</PopupContainer>
	);
};

const OrderButton = (props) => {
	const { orderCallback } = props;
	const [showPopup, setShowPopup] = useState(false);

	return (
		<Container onClick={() => setShowPopup(true)}>
			<IconWrapper src={OrderIcon} />
			<Text>Order By</Text>
			{showPopup && (
				<Popup
					orderCallback={orderCallback}
					callback={() => {
						setShowPopup(false);
					}}
				/>
			)}
		</Container>
	);
};

export default OrderButton;
