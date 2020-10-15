import React from 'react';
import Typing from 'react-typing-animation';

import {
  MessageContainer,
  ChatContainer,
  ResponseContainer,
  UserProfile,
} from './styles';

const Messages: React.FC = ({
  data,
  onFinishedTyping,
  responses,
  questiId,
}) => {
  // console.log('data', data);
  const [list, setList] = React.useState([]);
  const [ageQuestion, setAgeQuestion] = React.useState([]);

  React.useEffect(() => {
    if (questiId === 'question_age') {
      setAgeQuestion(data);
    }
  }, [data]);

  return (
    <ChatContainer>
      <Typing
        onFinishedTyping={() => onFinishedTyping(true)}
        hideCursor
        speed={0}
        className='chat-container'
      >
        {data.map(({ value }, i) => (
          <MessageContainer key={value + i}>
            <Typing.Delay ms={1000} key={Math.random()} />
            <img src='logo.png' alt='back' />
            <span key={Math.random()}>{value}</span>
          </MessageContainer>
        ))}

        {ageQuestion.length > 0 &&
          ageQuestion.map(({ value }, i) => (
            <MessageContainer key={value + i}>
              <Typing.Delay ms={1000} key={Math.random()} />
              <img src='logo.png' alt='back' />
              <span key={Math.random()}>{value}</span>
            </MessageContainer>
          ))}
      </Typing>
      <ResponseContainer>
        {responses.map((res) => `${res.replace(/{{\w+.\w+}}/, '').trim()} `)}
        <UserProfile>R</UserProfile>
      </ResponseContainer>
    </ChatContainer>
  );
};

export default React.memo(Messages);
