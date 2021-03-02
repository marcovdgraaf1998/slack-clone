import React from 'react'
import styled from 'styled-components';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header({ user, signOut }) {

    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search.. " />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Dropdown>
                    <Wrapper>
                        <Name>{user.name}</Name>
                        <ExpandMoreIcon />
                        <DropdownContent className="dropdown-content">
                            <p onClick={signOut}>Log out</p>
                        </DropdownContent>
                    </Wrapper>
                </Dropdown>
                <UserImage>
                    <img src={user.photo ? user.photo : "https://i.imgur/6VBx3io.png"} alt="user" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display: flex;
    margin: 0 16px;
`  

const SearchContainer = styled.div`
    min-width: 400px;
    margin: 0 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width: 100%;
    border-radius: 6px;
    
    input {
        background-color: transparent;
        border: none;
        padding: 4px 8px;
        color: white;

        :focus {
            outline: none;
        }
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
` 

const Name = styled.div`
    cursor: pointer;
` 

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;

    img {
        width: 100%;
    }
`

const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover .dropdown-content {
        display: block;
    }

    .MuiSvgIcon-root {
        margin-left: 3px;
        margin-right: 10px;
        margin-top: 4px;
        font-size: 20px;
    }
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    background-color: #350d36;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;

    p {
        color: white;
        cursor: pointer;
    }
`