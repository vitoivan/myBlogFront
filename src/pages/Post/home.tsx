import React from 'react'
import { Header } from '../../components/header'
import { Container } from './styles'
import { Markdown } from '../../components/Markdown'
import { useParams } from 'react-router-dom'
import { usePosts } from '../../providers/psots'
import { api } from '../../services/api'

export const Post = () => {

	const [markdownvalue, setmark] = React.useState("")	
	const { id } = useParams()
	const { posts, setPosts } = usePosts()

	React.useEffect(() => {
		(async () => {
			if (posts.length === 0) {
				const { data } = await api.get(`/posts`)
				setPosts(data)
			}
			else {
				posts.forEach(post => {
					if (post._id === id) {
						setmark(post.post)
					}
				})
			}
		})()
		// eslint-disable-next-line
	}, [posts])

	return (
		<Container>
			<Header />
			<div className="body">
			<div className="container">
				{/* 
					https://github.com/remarkjs/react-markdown/tree/85feb966f65dcc461a32486ead235c59d4ee25ab#use-custom-components-syntax-highlight
				*/}
				<div className="markdown-body">
					<Markdown markdown={markdownvalue} />
				</div>
			</div>
				</div>	
		</Container>
	)
}

