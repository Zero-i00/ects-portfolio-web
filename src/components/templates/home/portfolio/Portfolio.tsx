import ContactButton from '@/components/elements/contact-button/ContactButton'
import ProjectCard from '@/components/elements/project-card/ProjectCard'
import { COLORS } from '@/constants/color.constants'
import cn from 'clsx'
import { HTMLAttributes } from 'react'
import { PORTFOLIO_DATA } from './portfolio.data'
import styles from './Portfolio.module.scss'
import { Github } from 'lucide-react'

export default function Portfolio({
	className,
	id = 'portfolio',
	...rest
}: HTMLAttributes<HTMLSelectElement>) {
	return (
		<section {...rest} id={id} className={cn(styles.section, className)}>
			<div className='container'>
				<p className={styles.title}>Портфолио</p>
				<div className={styles.header}>
					<h1 className={styles.heading}>Моё Портфолио</h1>
					<ContactButton
						style={{
							backgroundColor: COLORS.secondary,
							color: COLORS.white,
							borderColor: COLORS.secondary,
							transform: 'none'
						}}
						link='https://github.com/Zero-i00'
			
					>
						<Github className='mr-2' color={COLORS.white} size={20} />
						Мой Github
					</ContactButton>
				</div>
				<div className={styles.projects}>
					{PORTFOLIO_DATA.map(project => (
						<ProjectCard
							key={`project-card-${project.title}`}
							project={project}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
