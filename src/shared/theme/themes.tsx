const white = "#FAFAFA";
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
	bodyBackgroundColor: string
}

export const purple: ITheme = {
	headerBackground: headerBackgroundLight,
	navBarLink: iPurple,
	navBarLinkHovered: lPurple,
	navLinkText: white,
	bodyBackgroundColor: white
};

export const dark: ITheme = {
	headerBackground: headerBackgroundLight,
	navBarLink: iBlack,
	navBarLinkHovered: lBlack,
	navLinkText: white,
	bodyBackgroundColor: ''
};