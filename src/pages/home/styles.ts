import styled from 'styled-components'


export const Container = styled.div`

	background-color: #f9f9f9;
	min-height: 100vh;
	width: 100%;

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
	}

	.container {
		padding: 2rem;
	}

	.filter  {
		display: flex;
		align-items: center;

		.select {
			margin: 0 2rem;
		}

		button {
			padding: .5rem 2rem;
			border: none;
			background: #fff;
			box-shadow: 5px 4px 10px -7px black;
			font-size: 1rem;
			border-radius: 100px;
			cursor: pointer;
			:hover {
				filter: brightness(.9);
			}
			:active {
				transform: scale(.95);
			}
		}
	}
`
