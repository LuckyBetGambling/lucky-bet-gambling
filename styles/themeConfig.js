import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
	primary: '#FFF',
	secondary: '#007A0E', 
	accent: '#FFBF00'
}

export const darkTheme = {
	primary: '#FFBF00',
	secondary: '#333333', 
	accent: '#E6020D'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.accent};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`