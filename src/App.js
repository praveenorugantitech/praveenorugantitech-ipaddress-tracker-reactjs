import React, { useState } from 'react';
import Input from './components/Input';
import Result from './components/Results';
import Maps from './components/Maps';

import './App.scss';

function App() {
	const [data, setData] = useState({
		ip: '8.8.8.8',
		location: 'Mountain View, California, 94035',
		timezone: 'UTC-05:00',
		isp: 'Google LLC',
		latlng: null
	});

	return (
		<div className='App-Container'>
			<Input setData={setData} />
			<Result
				ipAddress={data.ip}
				location={data.location}
				timezone={data.timezone}
				isp={data.isp}
			/>
			<Maps latlng={data.latlng}/>
		</div>
	);
}

export default App;

// 69.89.31.226
// 216.3.128.12