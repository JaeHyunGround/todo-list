import SyncLoader from 'react-spinners/SyncLoader';

import { SpinnerWrapper } from './Spinner.style';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SyncLoader color={'var(--violet-600)'} />
    </SpinnerWrapper>
  );
};

export default Spinner;
