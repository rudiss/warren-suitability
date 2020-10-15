import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { Grommet, Main } from 'grommet';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import dynamic from 'next/dynamic';
import { theme } from '../styles/theme';
import Messages from '../components/Messages';
import { suitabilityConversation } from '../services/API';
import ChatInputs from '../components/ChatInputs';
import { InputContainer } from '../styles/App';

const Header = dynamic(() => import('../components/Header'), { ssr: false });

type requestType = {
  context: string;
  id: string | null;
  answers: unknown;
};

const Home: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const answers = useSelector((state) => state.answers);

  const [fetchSuitability, { data, isLoading }] = useMutation(
    suitabilityConversation
  );

  useEffect(() => {
    fetchSuitability();

    return () => fetchSuitability();
  }, [fetchSuitability]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = useCallback(
    (formData, e) => {
      console.log(formData);
      console.log(e);
      const {
        data: { id },
      } = data;
      console.log('call');
      const payload = {};
      payload[id] = inputValue;

      dispatch({
        type: 'UPDATE_ANSWER',
        payload: { answer: { ...payload }, id },
      });
      fetchSuitability({
        context: 'suitability',
        id,
        answers: payload,
      });
      setShowInput(false);
    },
    [data, dispatch, fetchSuitability, inputValue]
  );
  // console.log('isLoading', isLoading);
  // if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Head>
        <title>Warren Brasil</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Grommet theme={theme} style={{ position: 'relative', height: '100%' }}>
        <Header />
        {data && (
          <Main
            background='white'
            pad='large'
            height='100%'
            style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}
          >
            <Messages
              data={data.data.messages}
              onFinishedTyping={setShowInput}
              responses={data.data.responses}
              questionId={data.data.id}
            />
          </Main>
        )}

        {data && (
          <InputContainer show={showInput}>
            <form onSubmit={handleSubmit(onSubmit)} action=''>
              <ChatInputs
                data={data}
                register={register}
                sub={onSubmit}
                handleChange={handleChange}
              />
            </form>
          </InputContainer>
        )}
      </Grommet>
    </React.Fragment>
  );
};

export default Home;
