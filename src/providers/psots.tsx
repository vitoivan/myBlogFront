import React, {createContext, useContext} from "react";

export interface Posts {
	title: string;
	_id: string;
	created_at: string;
	updated_at: string;
	post: string;
}

interface Context {
	posts: Posts[]
	setPosts: React.Dispatch<Posts[]>
}
const postsCTX = createContext({} as Context)

type Props = {
	children: React.ReactNode
}

export const PostsProvider = ({ children }: Props) => {
	
	const [posts, setPosts] = React.useState<Posts[]>([] as Posts[])
	
	return (
		<postsCTX.Provider value={{ posts, setPosts}}>
			{children}
		</postsCTX.Provider>
	)
}

export const usePosts = () => useContext(postsCTX)