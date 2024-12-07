
interface IRoute {
	title: string,
	link: string
}

export const HEADER_NAV_ROUTES: IRoute[] = [
	{
		title: 'О себе',
		link: '#about'
	},
	{
		title: 'Достижения',
		link: '#achievements'
	},
	{
		title: 'Портфолио',
		link: '#portfolio'
	},
	{
		title: 'Я гражданин',
		link: '#i-citizen'
	}
]