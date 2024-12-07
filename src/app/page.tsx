import Home from '@/components/templates/home/Home'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Портфолио',
	...NO_INDEX_PAGE,
}

export default function HomePage() {
	return <Home />
}
