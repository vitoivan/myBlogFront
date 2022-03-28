import styled from 'styled-components'

export const Container = styled.div`

	background-color: #f9f9f9;
	min-height: 100vh;
	margin: 0 auto;

	.container {
		padding: 2rem;
	}

	textarea {
		font-size: 18px;
		padding: 1rem;
		margin-right: 2rem;
	}

	.container {
		display: flex;
		font-size: 18px;

		.markdown-body {
		margin: 0 auto;
			a {
				color: #2d2dff;
				text-decoration: none;
				:hover {
					text-decoration: underline;
				}
			}
		}
				    
	}

	.center {
		text-align: center;
		align-self: center;
	}
`
