import cn from 'clsx'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import styles from './Citizen.module.scss'

export default function Citizen({
	className,
	id = 'i-citizen',
	...rest
}: HTMLAttributes<HTMLSelectElement>) {
	const eventLinks: string[] = [
		'https://optim.tildacdn.pub/tild3361-6362-4966-b931-626562313239/-/resize/560x/-/format/webp/photo.jpg',
		'https://орджоникидзевский.екатеринбург.рф/media/news/news_153984_image_900x_.jpg',
		'https://shatura.ru/files/image/66/09/44/lg!pu1.jpg',
	]

	return (
		<section {...rest} id={id} className={cn(styles.section, className)}>
			<div className='container'>
				<p className={styles.title}>Гражданин</p>
				<h1 className={styles.heading}>Я гражданин</h1>
				<h1 className={styles.description}>
					Во время обучения в колледже я{' '}
					<span>активно участвовал в различных мероприятиях</span>, посещал
					выставки и лекции от крупных компаний:{' '}
					<span className={styles['event-item']}>Свердловская часть МЧС</span>,{' '}
					<span className={styles['event-item']}>Время карьеры</span>,{' '}
					<span className={styles['event-item']}>Код будущего</span>,{' '}
					<span className={styles['event-item']}>
						Областные соревнования по программированию
					</span>
				</h1>
				<div className={styles.events}>
					{eventLinks.map(link => (
						<Image
							key={`citizen-link-${link}`}
							width={500}
							height={400}
							src={link}
							alt={link}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
