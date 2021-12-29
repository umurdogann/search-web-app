import React from 'react';
import { Button, Container, Dots } from './styled';

const PageNumbers = () => {
	return (
		<Container>
			<Button>Previous</Button>
			<Button>1</Button>
			<Button>2</Button>
			<Button selected={true}>3</Button>
			<Dots>...</Dots>
			<Button>7</Button>
			<Button>8</Button>
			<Button>9</Button>
			<Button>Next</Button>
		</Container>
	);
};

export default PageNumbers;
