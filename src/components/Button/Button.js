import { LoadMoreButtonWrapper, Button, ButtonLabel } from './Button.style';

const LoadMoreButton = ({ onClick, show }) => {
  return (
    <LoadMoreButtonWrapper>
      <Button type="button" onClick={onClick} show={show ? 'true' : 'false'}>
        <ButtonLabel>Load More</ButtonLabel>
      </Button>
    </LoadMoreButtonWrapper>
  );
};

export default LoadMoreButton;
