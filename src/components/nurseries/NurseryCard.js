import React from 'react'
import './Nursery.css'

export const NurseryCard = ({nursery})=> {
	return(
		<>
		<section className="nursery">
			<h1 className="nursery_name">{nursery.name}</h1>
			{/* <div className="flower_color">{nursery.color}</div> */}
		</section>

		</>
	)
}