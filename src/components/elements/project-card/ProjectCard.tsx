import { COLORS } from '@/constants/color.constants'
import { IProject } from '@/types/project.types'
import cn from 'clsx'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes } from 'react'
import styles from './ProjectCard.module.scss'

interface IProjectCardProps extends HTMLAttributes<HTMLDivElement> {
	project: IProject
}

export default function ProjectCard({
	project,
	className,
	...rest
}: IProjectCardProps) {
	return (
		<div {...rest} className={cn(styles.card, className)}>
			<Image
				width={200}
				height={200}
				className={styles.image}
				alt={project.title}
				src={project.image}
			/>
			<div className={styles.content}>
				<h1 className={styles.title}>{project.title}</h1>
				<p className={styles.description}>{project.description}</p>
				<Link className={styles.link} href={project.link} target='_blank'>
					Перейти на сайт
					<Link2 color={COLORS.black} size={20} />
				</Link>
			</div>
		</div>
	)
}
