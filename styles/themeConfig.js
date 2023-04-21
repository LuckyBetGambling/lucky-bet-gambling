import { createGlobalStyle } from 'styled-components'
import { Inter_Tight } from '@next/font/google'

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

const font = Inter_Tight({
	subsets: 'latin'
})

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.accent};
    font-family: ${font.style.fontFamily}, sans-serif;
  }
`