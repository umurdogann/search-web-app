import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage';
import ResultPage from './Pages/Result/ResultPage';
import mockData from './mockData.json';
const App = () => {
	localStorage.setItem('mockData', JSON.stringify(mockData));

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<LandingPage />} />
					<Route exact path='/result/:searchKey' element={<ResultPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
