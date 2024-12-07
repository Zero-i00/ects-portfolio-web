import { HTMLAttributes, PropsWithChildren } from 'react'
import Header from './header/Header'

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {}

export default function Layout({
	children,
	...rest
}: PropsWithChildren<ILayoutProps>) {
	return (
		<div {...rest}>
			<Header />
			<main>{children}</main>
		</div>
	)
}
