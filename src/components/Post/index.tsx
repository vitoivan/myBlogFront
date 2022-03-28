import React from 'react'
import { Container } from './styles'

type Props = {
	post: {
		title: string;
		post: string;
		created_at: string;
		_id: string;
	}
}
export const Post = ({ post }: Props) => {


	return (
		<Container to={`/posts/${post._id}`}>
			<h2 className="title">{post.title}</h2>
			<p className="date">{post.created_at}</p>
		</Container>
	)
}
