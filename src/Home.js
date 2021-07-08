import React from 'react'
import { FlowerProvider } from './components/flowers/FlowerProvider'
import { FlowerList } from './components/flowers/FlowerList'

export const Home = ()=> {
	return(
		<>
		<h2> Thorns and Roses</h2>

		<h3> Flowers </h3>
		<FlowerProvider>
			<FlowerList />
		</FlowerProvider>

		</>
	)
}