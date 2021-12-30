import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
					<Route path='*' element={<Navigate from='*' to='/' />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
