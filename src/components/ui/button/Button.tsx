import { IButtonProps } from './button.interface'

export default function Button({ children, className, ...rest }: IButtonProps) {
	return (
		<button {...rest}>
			{children}
		</button>
	)
}
