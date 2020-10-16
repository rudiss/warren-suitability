import React from 'react';

import { useSelector } from 'react-redux';
import {
  MessageContainer,
  ChatContainer,
  ResponseContainer,
  UserProfile,
} from '../Messages/styles';

const ChatHistory: React.FC = () => {
  const chatHistory = useSelector((state) => state.chatHistory.messages);
  return (
    <ChatContainer>
      {chatHistory.length > 0 &&
        chatHistory.map((item) =>
          item.map(({ value, answer }) => (
            <React.Fragment key={value + answer}>
              {!answer && (
                <MessageContainer>
                  <img src='logo.png' alt='back' />
                  <span>
                    {value?.replace(/\^\d+/gm, '').replace(/<erase>/gm, '')}
                  </span>
                </MessageContainer>
              )}
              {answer && (
                <ResponseContainer key={answer}>
                  {answer}
                  <UserProfile>
                    {chatHistory[0][2].answer.charAt(0)}
                  </UserProfile>
                </ResponseContainer>
              )}
            </React.Fragment>
          ))
        )}
    </ChatContainer>
  );
};

export default React.memo(ChatHistory);
