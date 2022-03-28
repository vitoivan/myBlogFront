import styled from 'styled-components'

type Style = {
	width: string;
	height: string;
}
export const Container = styled.div<Style>`

	background: #fff;
	width: ${props => props.width};
	height:${props => props.height};
	user-select: none;
	border-radius: 100px;
	box-shadow: 5px 5px 8px -7px #000;
	position: relative;
	cursor: pointer;

	ul {
		position: absolute;
		width: 100%;
		top: calc(100% + .5rem);
		box-shadow: 5px 4px 10px -7px black;
		z-index: 100;
	}

	ul li {
		width: 100%;
		padding: .5rem;
		background-color: #fff;
		text-align: center;
		text-transform: capitalize;
		font-size: 1rem;
		cursor: pointer;

		:hover {
			filter: brightness(.9);
		}
	}
	.txt {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: capitalize;
	}

	svg {
		position: absolute;
		right: .5rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.4rem;
	}
`
