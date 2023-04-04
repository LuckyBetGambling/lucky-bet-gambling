import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
	primary: '#fafafa',
	secondary: '#d2d3db', 
	accent: '#484b6a'
}

export const darkTheme = {
	primary: '#b1bad3',
	secondary: '#1a2c38',
	accent: '#fafafa'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.accent};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`