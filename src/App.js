import './App.css';
import React, {  lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


import Header from './components/common/Header';
import Footer from './components/common/Footer';
import axios from 'axios';
import { API_URL } from './constants';


const SignInPage = lazy(() => import('./components/pages/SignIn'));
const SignUpPage = lazy(() => import('./components/pages/Signup'));
const MainPage = lazy(() => import('./components/pages/MainPage'));
const MapPage = lazy(() => import('./components/pages/MapPage'));
const ServicePage = lazy(() => import('./components/pages/ServicePage'));
// const ClothesPage = lazy(() => import('./components/pages/ClothesPage'));
// const OnePage = lazy(() => import('./components/pages/OnePage'));
const ProfilePage = lazy(() => import('./components/pages/ProfilePage'));
const AdminPage = lazy(() => import('./components/pages/AdminPage'));
// const CartPage = lazy(() => import('./components/pages/CartPage'));
// const ContactPage = lazy(() => import('./components/pages/ContactPage'));






function App() {
	const [user, setUser] = useState();

	console.log('user: ', user);

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	
	return (
		<BrowserRouter>
			<Header user={user} />
			<Suspense fallback={'load'}>
				<Routes>
					<Route path="/signin" element={<SignInPage user={user} setUser={setUser} />} />
					<Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />} />
					<Route path="/" element={<MainPage />} />
					<Route path="/map" element={<MapPage />} />
					<Route path="/services" element={<ServicePage user={user} />} />
					{/* <Route path="/catalog" element={<ClothesPage />} />
					<Route path="/thing/:id" element={<OnePage user={user}/>} /> */}
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/admin" element={<AdminPage />} />
					{/* <Route path="/cart" element={<CartPage />} /> */}
					{/*
					<Route path="/contact" element={<ContactPage />} /> */}
				</Routes>
				{/* <Navigate  to="/main" /> */}
			</Suspense>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
