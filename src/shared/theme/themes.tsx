const black = "#363537";
const lightGrey = "#E2E2E2";
const white = "#FAFAFA";

const headerBackgroundLight = '#fff';

export interface ITheme {
	headerBackground: string;
	navBarLink: string;
	navBarLinkHovered: string;
	navLinkText: string;
}

export const light: ITheme = {
	headerBackground: headerBackgroundLight,
	navBarLink: 'rgb(37, 17, 78)',
	navBarLinkHovered: '#4A387D',
	navLinkText: white
};

export const dark: ITheme = {
	headerBackground: headerBackgroundLight,
	navBarLink: 'rgb(37, 17, 78)',
	navBarLinkHovered: '#4A387D',
	navLinkText: white
};