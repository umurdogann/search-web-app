import React, { useEffect, useState } from 'react';
import { Button, Container, Dots } from './styled';

const PageNumbers = (props) => {
	const { totalPage, page, callback } = props;
	const [pattern, setPattern] = useState([]);

	useEffect(() => {
		if (totalPage < 7) {
			setPattern(
				Array(totalPage)
					.fill()
					.map((n, i) => i + 1)
			);
		} else if (totalPage - 2 > page && page > 3) {
			setPattern([1, 'dot', page - 1, page, page + 1, 'dot', totalPage]);
		} else if (page < 4 || page > totalPage - 3) {
			setPattern([1, 2, 3, 4, 'dot', totalPage - 2, totalPage - 1, totalPage]);
		}
	}, [page, totalPage]);
	return (
		<>
			{totalPage > 1 && (
				<Container>
					<Button
						style={{ width: '85px' }}
						disabled={page === 1}
						onClick={() => {
							callback(parseInt(page) - 1);
						}}
					>
						Previous
					</Button>
					{pattern.map((item, index) => {
						if (item === 'dot') return <Dots key={index}>...</Dots>;
						return (
							<Button
								key={index}
								selected={page === item}
								onClick={() => {
									callback(parseInt(item));
								}}
							>
								{item}
							</Button>
						);
					})}
					<Button
						style={{ width: '85px' }}
						disabled={page === totalPage}
						onClick={() => {
							callback(parseInt(page) + 1);
						}}
					>
						Next
					</Button>
				</Container>
			)}
		</>
	);
};

export default PageNumbers;
