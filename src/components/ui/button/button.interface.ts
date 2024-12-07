import { ButtonHTMLAttributes } from 'react'

export type TypeButtonVariant = 'primary' | 'secondary'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:TypeButtonVariant
}
