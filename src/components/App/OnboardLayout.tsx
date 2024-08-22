import { Backround, ValuenaireLogoWhite } from '@/assets/svg';
import { ReactNode } from 'react';
import Flex from '../General/Flex';
import styles from './styles/OnboardLayout.module.less';

const OnboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex alignItems='center' height='100%' justifyContent='space-between' flexDirection='column'>
          <Flex flex='1' justifyContent='center' alignItems='center' padding='20px'>
            <ValuenaireLogoWhite width='300px' height='200px' />
          </Flex>
          <Flex width='100%' justifyContent='flex-end' className='ani-back' alignItems='end'>
            <Backround height='100%' width='100%' />
          </Flex>
        </Flex>
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default OnboardLayout;
