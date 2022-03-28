import React from 'react'
import { Header } from '../../components/header'
import { Container } from './styles'
import { Post as SinglePost } from '../../components/Post'
import { usePosts } from '../../providers/psots'
import { api } from '../../services/api'

export const Home = () => {

	const {posts, setPosts} = usePosts()

	React.useEffect(() => {

		(async () => {
			const { data } = await api.get(`/posts`)
			console.log(data)
			setPosts(data)
		})()

		// eslint-disable-next-line
	}, [])

	return (
		<Container>
			<Header />
			<div className="container">
				{/* <form className="filter" onSubmit={filter}>
					<span>Filter by</span>
					<Select 
						options={filterByOptions} 
						setState={setFilterBy}
						state={filterBy}
						width={'150px'}
						height={'35px'}
						/>
					<span>with value of</span>
					<Select 
						options={allTags} 
						setState={setCurrentTag}
						state={currentTag}
						width={'200px'}
						height={'35px'}
						/>

					<button type='submit'>Filter</button>
				</form> */}
				<div className="posts">
					{
						posts.map(post => {
							return <SinglePost key={post._id} post={post} />
						})
					}
				</div>
			</div>
		</Container>
	)
}

