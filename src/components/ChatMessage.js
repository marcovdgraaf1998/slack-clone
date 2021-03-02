import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt="profile" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{moment(new Date(timestamp.toDate())).format('llll')}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    min-width: 36px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
        border-radius: 2px;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;

    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97, 96, 97);
        font-size: 13px;
    }
`

const Text = styled.span`
    
`