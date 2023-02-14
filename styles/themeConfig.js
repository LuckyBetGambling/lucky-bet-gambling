import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
	primary: '#E4F9F5',
	secondary: '#30E3CA',
	alt: '#11999E'
}

export const darkTheme = {
	primary: '#453C67',
	secondary: '#6D67E4',
	alt: '#F2F7A1'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.alt};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`