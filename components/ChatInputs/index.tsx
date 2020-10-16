import React from 'react';
import {
  Container,
  StyledInput,
  StyledButton,
  StyledCurrencyInput,
} from './styles';

type ChatInputs = {
  data: {
    data: {
      inputs: [];
      id: string;
      buttons: [];
    };
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    title?: string
  ) => void;
  register: unknown;
};

const ChatInputs: React.FC<ChatInputs> = ({ register, data, handleChange }) => {
  const {
    data: { inputs, buttons, id },
  } = data;

  return (
    <Container>
      {inputs.map(({ mask, type }) =>
        mask === 'name' || id !== 'question_income' ? (
          <StyledInput
            key={type}
            className='input-focus'
            type={type}
            name={mask}
            ref={register}
            required
            onChange={handleChange}
            placeholder='Digite aqui...'
          />
        ) : (
          <StyledCurrencyInput
            key={type}
            className='input-focus'
            type={type}
            name={mask}
            ref={register}
            placeholder='R$ 0,00'
            onChange={handleChange}
            required
          />
        )
      )}

      {inputs.length > 0 && (
        <StyledButton type='submit' label='OK' className='btn-ok' />
      )}

      {buttons.map(({ label: { title }, value }) => (
        <StyledButton
          key={value}
          label={title}
          onClick={(e) => handleChange(e, title)}
          value={value}
          type='submit'
          color='primary'
        />
      ))}
    </Container>
  );
};

export default ChatInputs;
