import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
`

/** Side Scrolling container for games
* @param {array} items - array of game objects
* @param {string} title - title of this section of games
* @returns 
*/
const Footer = ({ children }) => {

   return (
       <Wrapper>
           {children}
       </Wrapper>
   );

};

export default Footer;