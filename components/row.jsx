import React, { useState } from 'react'
import styled from 'styled-components'
import NestedSidebarRows from './NestedRow'
import AbcIcon from '@mui/icons-material/Abc'



export default function SidebarRows({title, icon, link}){

	const [showSublinks, setShowSublinks] = useState(false)

	const handleToggleSublinks = () => {
		setShowSublinks(!showSublinks)
	}
    

	return(
		<div className="nested-row">
			<button className="nested-row-link" onClick={handleToggleSublinks}>
				{title}
			</button>
			{showSublinks && (
				<div className="nested-row-sublinks">

					<NestedSidebarRows title={title} icon={icon} link={link} />
                    
                
					<div>
						<a href="#">Sublink 1</a>
					</div>
                    
				</div>
                
                
			)}
		</div>
  
	)
}