import styled from 'styled-components';

export const MessageContainer = styled.div`
  color: #2e2d33;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0;
  font-weight: 400;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  white-space: pre-wrap;
  margin: 30px 0 24px 0;

  display: flex;
  align-items: flex-start;
  width: 100%;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const ResponseContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  font-family: 'Source Sans Pro', Helvetica, Arial, Sans-Serif;
  color: #2e2d33;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0;
  font-weight: 400;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  white-space: pre-wrap;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat', Helvetica, Arial, Sans-Serif;
  line-height: 1.75rem;
  letter-spacing: -0.0312rem;
  color: #ffffff;
  width: 32px;
  height: 32px;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  border-radius: 50%;
  text-decoration: none;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);

  background: rgb(46, 45, 51);
  color: rgb(255, 255, 255);

  margin-left: 12px;
`;
