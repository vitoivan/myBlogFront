import React from 'react'
import { Container } from './styles'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

export const Header = () => {
	
	return (
		<Container>
			<div className="container">
				<Logo />
				<Menu />
			</div>
		</Container>
	)
}

