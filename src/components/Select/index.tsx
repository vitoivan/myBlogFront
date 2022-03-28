import React from 'react'
import { Container } from './styles'
import { BiChevronDown } from 'react-icons/bi'


type Option = {
	label: string;
	value: string;
}

type Props = {
	options: Option[] 
	setState: React.Dispatch<string>
	state: string;
	width: string;
	height: string;
}
export const Select = ({ options, setState, state, width, height }: Props) => {
	
	const [openned, setOpenned] = React.useState(false);	

	return (
		<Container
		 onClick={() => setOpenned(!openned)} 
		 className="select" 
		 width={width} 
		 height={height}>  
			<div className="txt">
				{state}
			</div>
			<BiChevronDown />
			<ul>
				{
					openned && options?.map((opt, ind) => {
						return (
							<li key={ind} onClick={() => setState(opt.value)}>
								{opt.label}
							</li>
						)	
					})

				}
			</ul>
		</Container>
	)
}

