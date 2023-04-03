import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
	primary: '#fafafa',
	secondary: '#e4e5f1', 
	accent: '#9394a5'
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