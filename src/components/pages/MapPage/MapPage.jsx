import React, { useEffect, useState } from 'react';

import './style.css';
// import axios from 'axios';
// import { API_URL } from '../../../constants';

const MapPage = () => {
	const [user, setUser] = useState();

	// useEffect(() => {
	// 	const getBenners = async () => {
	// 		const responseData = await axios
	// 			.get(`${API_URL}/banner`, { withCredentials: true })
	// 			.then((response) => setBannerData(response.data));
	// 	};
	// 	getBenners();
	// }, []);
	return (
		<>
			<main className="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.8530989305837!2d23.80630177609273!3d53.703063447973896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e078b912507a5d%3A0xe846b0450ddf8858!2z0JPRgNC-0LTQvdC10L3RgdC60LjQuSDQs9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LrQvtC70LvQtdC00LYg0YLQtdGF0L3QuNC60LgsINGC0LXRhdC90L7Qu9C-0LPQuNC5INC4INC00LjQt9Cw0LnQvdCw!5e0!3m2!1sru!2sby!4v1681932459605!5m2!1sru!2sby"
					width="100%"
					height="750"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</main>
		</>
	);
};

export default MapPage;
