import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'
import { SITE_NAME } from '@/constants/seo.constants'

const robotoFont = Roboto({
	subsets: ['latin'],
	weight: '400',
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Сайт-портфолио студента колледжа ЕКТС Шайдуллина Артём Ришатовича, ПР-41',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${robotoFont.className}`}>{children}</body>
		</html>
	)
}
