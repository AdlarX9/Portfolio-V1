import Section from '../components/Section'
import Separator from '../components/Separator'

const Home = () => {
	return (
		<div className='main'>
			<Section
				redirection={'simulator'}
				top={'90%'}
				left={'10%'}
				background={'green'}
			>Simulator</Section>

			<Separator />

			<Section
				redirection={'particules'}
				top={'85%'}
				left={'100%'}
				background={'orange'}
			>Particules</Section>

			<Separator />

			<Section
				redirection={'tests'}
				top={'0'}
				left={'0'}
				background={'blue'}
			>Tests</Section>

			<Separator />

			<Section
				redirection={'old'}
				top={'2rem'}
				left={'100%'}
				background={'purple'}
			>Old</Section>

			<Separator />

			<Section
				redirection={'messages'}
				top={'2rem'}
				left={'50%'}
				background={'gray'}
			>Messages</Section>
		</div>
	)
}

export default Home