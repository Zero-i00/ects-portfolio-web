import cn from 'clsx'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import ContactButton from '../../../elements/contact-button/ContactButton'
import styles from './About.module.scss'

export default function About({
	className,
	id = 'about',
	...rest
}: HTMLAttributes<HTMLSelectElement>) {
	return (
		<section {...rest} id={id} className={cn(styles.section, className)}>
			<div className='container flex flex-row justify-between items-center py-12 h-screen'>
				<div className={styles.hero}>
					<p className={styles.hello}>Привет! Я Шайдуллин Артём</p>
					<h1 className={styles.title}>
						Разрабатываю <span>сайты и мобильные приложения</span> для вашего
						бизнеса
					</h1>
					<p className={styles.description}>
						Оканчиваю колледж транспортного строительства по специальности
						"Информационные системы и программирование"
					</p>
					<ContactButton
						style={{
							transform: 'none',
						}}
						className='my-12'
						variant='primary'
					/>
				</div>
				<div className={styles.picture}>
					<div className={styles.bg} />
					<Image
						className={styles.i}
						src='/png/i.png'
						width={700}
						height={700}
						alt='hero'
					/>
				</div>
			</div>
		</section>
	)
}
