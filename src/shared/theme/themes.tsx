const white = "#fff";
const iPurple = 'rgb(37, 17, 78)';
const lPurple = '#4A387D';
const iBlack = 'rgb(21, 19, 30)';
const lBlack = 'rgb(71, 69, 81)';

const headerBackgroundLight = '#fff';

export interface ITheme {
	headerBackground: string;
	navBarLink: string;
	navBarLinkHovered: string;
	navLinkText: string;
	bodyBackgroundColor: string;
	mobileBackgroundMenu: string;
	mobileTextMenu: string;
}

export const purple: ITheme = {
	headerBackground: headerBackgroundLight,
	navBarLink: iPurple,
	navBarLinkHovered: lPurple,
	navLinkText: white,
	bodyBackgroundColor: white,
	mobileBackgroundMenu: white,
	mobileTextMenu: lPurple
};

export const dark: ITheme = {
	headerBackground: headerBackgroundLight,
	navBarLink: iBlack,
	navBarLinkHovered: lBlack,
	navLinkText: white,
	bodyBackgroundColor: '',
	mobileBackgroundMenu: white,
	mobileTextMenu: lBlack
};