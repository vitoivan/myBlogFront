import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled(Link)`

	background: #fff;
	display: block;
	padding: 1rem 2rem 2rem;
	margin-top: 2rem;
	border-radius: 15px;
	box-shadow: 5px 5px 8px -7px #000;
	cursor: pointer;
	transition: all .2s;
	opacity: 1;
	color: #444;
	width: 70%;

	:hover {
		transform: scale(0.99);
		opacity: .8;
		transition: all .2s;
	}

	.tags {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.tag {
		background-color: #f9f9f9;
		padding: .2rem 1rem;
		margin: 0 .2rem;
		border-radius: 100px;
		margin-top: 1rem;
	}

	h2 {
		font-size: 1.3rem;
		color: #222;
	}

`;