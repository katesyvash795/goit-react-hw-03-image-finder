import styled from 'styled-components';

export const LoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;

  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const ButtonLabel = styled.span``;
