import React from 'react'
import { FlowerProvider } from './components/flowers/FlowerProvider'
import { FlowerList } from './components/flowers/FlowerList'
import { NurseryProvider } from './components/nurseries/NurseryProvider'
import { NurseryList } from './components/nurseries/NurseryList'

export const Home = ()=> {
	return(
		<>
		<h2> Thorns and Roses</h2>

		<h3> Flowers </h3>
		<FlowerProvider>
			<FlowerList />
		</FlowerProvider>

		<h3> Nurseries </h3>
		<NurseryProvider>
			<NurseryList />
		</NurseryProvider>

		<h3> Flowers </h3>
		<FlowerProvider>
			<FlowerList />
		</FlowerProvider>



		</>
	)
}