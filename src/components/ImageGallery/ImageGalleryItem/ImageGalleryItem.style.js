import styled from 'styled-components';

export const GalleryItem = styled.li`
  img {
    width: 500px;
    height:400px;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
