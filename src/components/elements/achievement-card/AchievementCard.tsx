import { IAchievement } from '@/types/achievement.types'
import React, { HTMLAttributes } from "react"
import styles from './AchievementCard.module.scss'
import cn from 'clsx'
import Image from 'next/image'

interface IAchievementCardProps extends HTMLAttributes<HTMLDivElement> {
	achievement: IAchievement
}

export default function AchievementCard({
	achievement,
	className,
	...rest
}: IAchievementCardProps) {
  return (
	<div {...rest} className={cn(styles.card, className)}>
		<Image width={80} height={80} src={achievement.icon} alt={achievement.title}  />
		<h1 className={styles.title}>{achievement.title}</h1>
		<p className={styles.description}>{achievement.description}</p>
	</div>
  )
}

