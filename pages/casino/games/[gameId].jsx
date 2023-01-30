import React from 'react';
import styled from "styled-components";

const Page = styled.div`
  margin-bottom: 40px;
  height: 91.7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const GameCard = styled.div`
`

const GameVideo = styled.div`
`

const GameControls = styled.div`
`

const GameTitleBet = styled.div`
`

const RecommendedGames = styled.div`
`


export default function GamePage() {
  return (
    <Page>
      <p>Game: Chicken</p>
    </Page>
  )
}
