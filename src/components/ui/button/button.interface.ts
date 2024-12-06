import { ButtonHTMLAttributes } from 'react'

type TypeButtonVariant = 'primary' | 'secondary'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:TypeButtonVariant
}
