import React from "react";
import styled from "styled-components";

const Title = styled.h3`
    font-weight: 800;
`;

const Card = styled.div`
    flex: 0 0 auto;
    border: 2px solid red;
    width: 150px;
    height: 175px;
    background: white;
`

const SideScrollingContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 200px;
    margin-bottom: 20px;
    width: 800px;
    -webkit-overflow-scrolling: touch;
    background-color: green;
    margin: 20px;
`;

const Wrapper = styled.div`
    padding: 20px;
    background-color: magenta;
`

/**
 * Side Scrolling container for games
 * @param {array} items - array of game objects
 * @param {string} title - title of this section of games
 * @returns 
 */
const SideScroller = ({ items, title }) => {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <SideScrollingContainer>
                {items.map(
                    (item) => {
                        return <Card key={item.id}>{item.content}</Card>
                    } 
                )}
            </SideScrollingContainer>
        </Wrapper>
    );

};

export default SideScroller;