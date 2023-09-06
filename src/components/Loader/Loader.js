import { Audio } from 'react-loader-spinner';
import { LoaderContainer, LoaderInner } from './Loader.style';

const CustomLoader = () => {
  return (
    <LoaderContainer>
      <LoaderInner>
        <Audio
          height={80}
          width={80}
          radius={9}
          color="green"
          ariaLabel="loading"
        />
      </LoaderInner>
    </LoaderContainer>
  );
};

export default CustomLoader;
