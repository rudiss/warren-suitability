import React from 'react';
import {
  Container,
  StyledInput,
  StyledButton,
  StyledCurrencyInput,
} from './styles';

const ChatInputs: React.FC = ({ register, data, handleChange, sub }) => {
  const {
    data: { inputs, buttons, id },
  } = data;

  React.useEffect(() => {}, []);

  return (
    <Container>
      {inputs.map(({ mask, type }, i) =>
        mask === 'name' || id !== 'question_income' ? (
          <StyledInput
            key={i}
            id={mask}
            type={type}
            name={mask}
            ref={register}
            onChange={handleChange}
            placeholder='Digite aqui...'
          />
        ) : (
          <StyledCurrencyInput
            key={i}
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
          onClick={(e) => sub('', e)}
          value={value}
          // type='submit'
          color='primary'
        />
      ))}
    </Container>
  );
};

export default ChatInputs;
