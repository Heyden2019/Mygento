import { GetStaticProps } from 'next';
import { Form } from '../src/components/Form';
import {
  PrivacyPolicyType,
  readPrivacyPolicy,
} from '../src/server/readPrivacyPolicy';

interface MainProps {
  privacyPolicy: PrivacyPolicyType;
}

const Main: React.FC<MainProps> = ({ privacyPolicy }) => {
  return (
    <>
      <h1>Анкета соискателя</h1>
      <Form privacyPolicy={privacyPolicy} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const privacyPolicy = readPrivacyPolicy();

  return {
    props: {
      privacyPolicy,
    },
    revalidate: 60 * 60 * 24, // a day, in seconds
  };
};

export default Main;
