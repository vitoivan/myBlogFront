import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export const Menu = () => {

	const menuData = [
		{ title: 'posts', to: '/' },
		// { title: 'about me', to: '/about-me' },
	]
	
	return (
		<Container>
			{
				menuData.map(item => {
					return (
						<li key={item.title}>
							<Link to={item.to}>
								{item.title}	
							</Link>
						</li>
					)	
				})
			}
		</Container>
	)
}

