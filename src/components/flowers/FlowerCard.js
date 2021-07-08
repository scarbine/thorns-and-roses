import React from 'react'
import './Flower.css'

export const FlowerCard = ({flower})=> {
	return(
		<>
		<section className="flower">
			<h1 className="flower_name">{flower.species}</h1>
			<div className="flower_color">{flower.color}</div>
		</section>

		</>
	)
}