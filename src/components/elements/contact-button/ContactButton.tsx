'use client'

import Button from '@/components/ui/button/Button'
import { IButtonProps } from '@/components/ui/button/button.interface'
import { useRouter } from 'next/navigation'

interface IContactButtonProps extends IButtonProps {
	link?: string
}

/**
 * The ContactButton component.
 *
 * @param {IContactButtonProps} props
 *        The props of the component.
 * @param {string} [props.link]
 *        The link that the button will navigate to when clicked.
 *        If not given, the button will navigate to the initial link.
 * @param {keyof typeof Button} [props.variant='secondary']
 *        The variant of the button.
 * @param {(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void} [props.onClick]
 *        The function that will be called when the button is clicked.
 *        If not given, the button will navigate to the link.
 * @param {React.ComponentPropsWithoutRef<'button'>} [props.rest]
 *        Any other props that are available for the button.
 *
 * @returns {React.ReactElement} The ContactButton element.
 */
export default function ContactButton({
	link,
	variant = 'secondary',
	onClick,
	children,
	...rest
}: IContactButtonProps) {
	const { push } = useRouter()
	const initialLink = 'https://t.me/Zero_i00'

	const handleContactButtonClick = () => push(link ?? initialLink)

	return (
		<Button
			{...rest}
			variant={variant}
			onClick={onClick ?? handleContactButtonClick}
		>
			{children ?? 'Связаться'}
		</Button>
	)
}
