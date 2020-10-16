import React from 'react';
import Typing from 'react-typing-animation';
import { MessageContainer, ChatContainer } from './styles';

type Messages = {
  data: {
    type: string;
    value: string;
  }[];
  onFinishedTyping: (params: boolean) => void;
};

const Messages: React.FC<Messages> = ({ data, onFinishedTyping }) => {
  return (
    <ChatContainer>
      <Typing
        onFinishedTyping={() => {
          onFinishedTyping(true);
          setTimeout(() => {
            const input = document.querySelector(
              '.input-focus'
            ) as HTMLInputElement;
            input.focus();
          }, 300);
        }}
        onAfterType={() => {
          document.getElementById('chatContainer').scrollTo({
            top: document.getElementById('chatContainer').scrollHeight,
            behavior: 'smooth',
          });
        }}
        hideCursor
        speed={0}
        className='chat-container'
      >
        {data.map(({ value }) => (
          <MessageContainer key={value}>
            <img src='logo.png' alt='back' />
            <span>{value.replace(/\^\d+/gm, '').replace(/<erase>/gm, '')}</span>
            <Typing.Delay ms={1000} />
          </MessageContainer>
        ))}
      </Typing>
    </ChatContainer>
  );
};

export default React.memo(Messages);
