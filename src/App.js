import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout.js'
import TitleBar from './components/TitleBar.js';
import { BrowserRouter } from 'react-router-dom';
import ToTop from './components/ToTop';
import TabsNavigation from './components/TabsNavigation';


// THIS IS THE GH-PAGES DEPLOYED VERSION (steps as in package.json)
// 		- last deploy: 10/08/2022 @ ~10pm 
// 1) push to gh
// 2) npm run build
// 3) npm run deploy 

function App() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.pageYOffset >= 300 ? setShowButton(true) : setShowButton(false);
		});
	}, []);

	return (
		<div className="App">
			<Layout>
				<TitleBar pos={'start'} />
				<BrowserRouter>
					<TabsNavigation />
				</BrowserRouter>
				{ showButton ? <ToTop /> : null }
			</Layout>
		</div>
	);
}

export default App;
