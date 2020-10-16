import React from 'react';
import dynamic from 'next/dynamic';
import Messages from '../Messages';
import { Container, LogoLoading } from './styles';

const ChatHistory = dynamic(() => import('../../components/ChatHistory'), {
  ssr: false,
});

type ChatProps = {
  data: {
    data: {
      messages: {
        type: string;
        value: string;
      }[];
    };
  };
  setShowInput: (params: boolean) => void;
  isLoading: boolean;
};

const Chat: React.FC<ChatProps> = ({ data, setShowInput, isLoading }) => {
  return (
    <Container id='chatContainer'>
      <ChatHistory />
      {isLoading && <LogoLoading src='logo.png' />}

      {data && (
        <Messages data={data.data.messages} onFinishedTyping={setShowInput} />
      )}
    </Container>
  );
};

export default Chat;
