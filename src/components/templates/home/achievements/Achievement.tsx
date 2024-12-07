import AchievementCard from '@/components/elements/achievement-card/AchievementCard'
import cn from 'clsx'
import { HTMLAttributes } from 'react'
import styles from './Achievement.module.scss'
import { ACHIEVEMENTS_DATA } from './achievements.data'

export default function Achievement({
	className,
	id = 'achievements',
	...rest
}: HTMLAttributes<HTMLSelectElement>) {
	return (
		<section {...rest} id={id} className={cn(styles.section, className)}>
			<div className='container'>
				<p className={styles.title}>Достижения</p>
				<h1 className={styles.heading}>Мои достижения</h1>
				<div className={styles.achievements}>
				{ACHIEVEMENTS_DATA.map(achievement => (
					<AchievementCard
						key={`achievement-card-${achievement.title}`}
						achievement={achievement}
					/>
				))}
				</div>
			</div>
		</section>
	)
}
