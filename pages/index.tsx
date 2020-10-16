import React, { useEffect, useState, useCallback } from 'react';
import { Grommet, Card, CardHeader, CardBody, CardFooter } from 'grommet';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import dynamic from 'next/dynamic';
import { theme } from '../styles/theme';
import { suitabilityConversation, finishSuitability } from '../services/API';
import ChatInputs from '../components/ChatInputs';
import { InputContainer } from '../styles/App';
import MetaTags from '../components/MetaTags';

const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
});

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [buttonLabel, setButtonLabel] = useState(null);
  const answers = useSelector((state) => state.answers.userAnswers);

  const [fetchSuitability, { data, isLoading }] = useMutation(
    suitabilityConversation
  );
  const [
    fetchFinishSuitability,
    { data: finishData, isLoading: finishLoading },
  ] = useMutation(finishSuitability);

  useEffect(() => {
    fetchSuitability();

    return () => fetchSuitability();
  }, [fetchSuitability]);

  useEffect(() => {
    if (data && data.data.id === 'final') {
      fetchFinishSuitability({
        answers: { ...answers },
      });
      setShowInput(false);
      setShowFinal(true);
    }
  }, [answers, data, fetchFinishSuitability]);

  const handleChange = (event, title) => {
    setInputValue(event.target.value);
    if (title) setButtonLabel(title);
  };

  const onSubmit = useCallback(() => {
    const {
      data: { id },
    } = data;

    const payload = {};
    payload[id] = inputValue;

    dispatch({
      type: 'UPDATE_ANSWER',
      payload: { answer: { ...payload }, id },
    });

    fetchSuitability({
      context: 'suitability',
      id,
      answers: { ...answers, [id]: inputValue },
    });

    setShowInput(false);
    window.scrollTo({
      top: document.getElementById('chatContainer').scrollHeight,
      behavior: 'smooth',
    });

    data.data.messages.push({ answer: buttonLabel || inputValue });

    dispatch({
      type: 'UPDATE_CHAT',
      payload: { messages: data.data.messages },
    });
  }, [answers, buttonLabel, data, dispatch, fetchSuitability, inputValue]);

  return (
    <React.Fragment>
      <MetaTags />
      <Grommet theme={theme} style={{ position: 'relative', height: '100%' }}>
        <Header />
        <Chat data={data} setShowInput={setShowInput} isLoading={isLoading} />
        {data && (
          <InputContainer show={showInput}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ChatInputs
                data={data}
                register={register}
                handleChange={handleChange}
              />
            </form>
          </InputContainer>
        )}

        {!finishLoading && showFinal && (
          <Card
            onClick={() => setShowFinal(false)}
            height='large'
            width='large'
            style={{
              position: 'absolute',
              left: 0,
              top: 50,
              right: 0,
              margin: '0 auto',
              zIndex: 1,
            }}
            background='url(warrenB.jpg)'
          >
            <CardBody pad='medium' color='white'>
              <span style={{ color: 'white', fontSize: 32 }}>
                Seu perfil de investidor é{' '}
                <h1>
                  {finishData?.data.user.investmentProfile.riskToleranceProfile}
                </h1>
              </span>
            </CardBody>
            <CardFooter>
              <img
                src='logo.png'
                alt='logo'
                style={{ width: 24, height: 24, margin: 24 }}
              />
            </CardFooter>
          </Card>
        )}
      </Grommet>
    </React.Fragment>
  );
};

export default Home;
