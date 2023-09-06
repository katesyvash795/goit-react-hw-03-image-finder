import styled from 'styled-components';

export const SearchbarWrapper = styled.header`
  background-color: #007bff;
  padding: 20px 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
`;

export const ButtonLabel = styled.span`
  display: block;
`;

export const InputPlaceholder = styled(Input).attrs({ as: 'input' })`
  background-color: #f0f0f0;
  color: #333;
  font-style: italic;
`;

export const InputAutofocus = styled(Input).attrs({ as: 'input' })`
  background-color: #fff;
  color: #333;
  font-style: normal;
`;

export const SearchbarTitle = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

export const SearchbarSubtitle = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 5px 0;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
  margin: 5px 0;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
  margin: 5px 0;
`;

export const ErrorMessageRed = styled(ErrorMessage)`
  color: red;
`;

export const LoadingText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 5px 0;
`;
