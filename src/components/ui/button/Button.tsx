import cn from 'clsx'
import { IButtonProps } from './button.interface'
import styles from './Button.module.scss'

export default function Button({
	children,
	variant = 'primary',
	className,
	...rest
}: IButtonProps) {
	return (
		<button {...rest} className={cn(styles.btn, styles[variant], className)}>
			{children}
		</button>
	)
}
