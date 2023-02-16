import styled from 'styled-components'


const NestedRow = styled.li`
    width: 100%;
    height: 60px;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${({theme}) => theme.secondary};
        background-color: ${({theme}) => theme.alt};
        cursor: pointer;
      }
`

const NestedSidebarIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`

const NestedSidebarTitle = styled.div`
    flex: 70%;
`
export default function NestedSidebarRows({title, icon, link}){

	return(
		<NestedRow>
			<NestedSidebarIcon>{icon}</NestedSidebarIcon>
			<NestedSidebarTitle>{title}</NestedSidebarTitle>
		</NestedRow>
	)
}