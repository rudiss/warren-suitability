import React from 'react';
import {
  Container,
  StyledInput,
  StyledButton,
  StyledCurrencyInput,
} from './styles';

const ChatInputs: React.FC = ({ register, data, handleChange, sub }) => {
  const {
    data: { inputs, buttons },
  } = data;

  React.useEffect(() => {}, []);

  return (
    <Container>
      {inputs.map(({ mask, type }, i) =>
        mask === 'name' ? (
          <StyledInput
            key={i}
            id={mask}
            type={type}
            name={mask}
            ref={register}
            onChange={handleChange}
            placeholder='Digite aqui'
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
        <StyledButton
          type='submit'
          label='OK'
          className='btn-ok'
          onClick={() => sub()}
        />
      )}

      {buttons.map(({ label: { title }, value }) => (
        <StyledButton
          key={value}
          label={title}
          onClick={(e) => handleChange(e)}
          value={value}
          type='submit'
          color='primary'
        />
      ))}
    </Container>
  );
};

export default ChatInputs;
