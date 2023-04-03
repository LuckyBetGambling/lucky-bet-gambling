import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
	primary: '#EEEEEE',
	secondary: '#6fb8f2', 
	accent: '#333333'
}

export const darkTheme = {
	primary: '#121212',
	secondary: '#1F1B24',
	accent: '#fff'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.accent};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`