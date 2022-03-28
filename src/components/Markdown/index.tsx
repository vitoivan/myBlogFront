import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from "rehype-raw";

type Props = {
	markdown: string;
}
export const Markdown = ({ markdown }: Props) => {
  return (
	<ReactMarkdown
	children={markdown}
	rehypePlugins={[rehypeRaw]}
	components={{
	code({node, inline, className, children, ...props}) {
		const match = /language-(\w+)/.exec(className || '')
		return !inline && match ? (
		<SyntaxHighlighter
			children={String(children).replace(/\n$/, '')}
			style={atomDark}
			language={match[1]}
			PreTag="div"
			{...props}
		/>
		) : (
		<code className={className} {...props}>
			{children}
		</code>
		)
	}
	}}
	/>
  )
}

