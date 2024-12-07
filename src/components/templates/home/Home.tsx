import Layout from '@/components/layout/Layout'
import About from '@/components/templates/home/about/About'
import Achievement from './achievements/Achievement'
import Portfolio from './portfolio/Portfolio'
import Citizen from './citizen/Citizen'

export default function Home() {
	return (
		<Layout>
			<About />
			<Achievement />
			<Portfolio />
			<Citizen />
		</Layout>
	)
}
