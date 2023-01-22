import React from "react";
import styled from "styled-components";
import Link from 'next/link'

const Button = styled.div`
    display: flex;
    height: 100%;
    width: 60px;
    background-color: yellow;
    justify-content: center;
    align-items: center;
`

/**
 * Side Scrolling container for games
 * @param {array} items - array of game objects
 * @param {string} title - title of this section of games
 * @returns 
 */
const LinkButton = ({ title, path }) => {

    return (
        <Link href={path} passHref>
            <Button >{title}</Button>
        </Link>
    );

};

export default LinkButton;