import styled from 'styled-components'


export const Container = styled.ul`
	list-style: none;
	display: flex;	
	list-style: none;
	li {
		margin-left: 1rem;		
		font-size: 1.2rem;
	}
	a {
		text-decoration: none;
		color: #444;
		:hover {
			text-decoration: underline;
		}
	}
`
