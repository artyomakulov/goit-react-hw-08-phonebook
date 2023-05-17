import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Dna
      visible={true}
      height="300"
      width="300"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
