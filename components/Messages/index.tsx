import React from 'react';
import Typing from 'react-typing-animation';
import { useSelector, useDispatch } from 'react-redux';
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
  questionId,
}) => {
  // console.log('data', data);
  const [list, setList] = React.useState([]);
  const [ageQuestion, setAgeQuestion] = React.useState([]);
  const [nextQuestion, setNextQuestion] = React.useState(0);
  const answers = useSelector((state) => state.answers);
  const isMyObjectEmpty = (obj) => {
    if (!Object.keys(obj).length) return true;
    return false;
  };

  React.useEffect(() => {
    if (questionId === 'question_name') setList(data);

    if (questionId === 'question_age') {
      setAgeQuestion(data);
      setNextQuestion(1);
    }
  }, [data, questionId]);

  return (
    <ChatContainer>
      <Typing
        onFinishedTyping={() => onFinishedTyping(true)}
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

      {!isMyObjectEmpty(answers.answers) && responses.length > 0 && (
        <ResponseContainer>
          {responses.map((res) => `${res.replace(/{{\w+.\w+}}/, '').trim()} `)}
          <UserProfile>
            {answers.answers.question_name.charAt(0) || ''}
          </UserProfile>
        </ResponseContainer>
      )}
    </ChatContainer>
  );
};

export default React.memo(Messages);
