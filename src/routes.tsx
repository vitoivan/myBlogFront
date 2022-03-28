import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Post } from './pages/Post/home'
import { About } from './pages/aboutMe/about'

export const RoutesComponent = () => {
	
	return (
		<Routes>
			<Route path="/posts/:id" element={<Post />} />
			{/* <Route path="/about-me" element={<About />} /> */}
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

