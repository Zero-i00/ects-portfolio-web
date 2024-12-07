import ContactButton from '@/components/elements/contact-button/ContactButton'
import Link from 'next/link'
import styles from './Header.module.scss'
import { HEADER_NAV_ROUTES } from './routes'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					{HEADER_NAV_ROUTES.map((route, index) => (
						<Link
							key={`header-route-${route.title}-${index}`}
							href={route.link}
						>
							{route.title}
						</Link>
					))}
				</nav>
				<ContactButton />
			</div>
		</header>
	)
}
