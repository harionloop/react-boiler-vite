import { InfoIconSvg } from '@/assets/svg';
import { Typography } from 'antd';
import styles from './styles/InfoBox.module.less';

type InfoBoxProps = {
  children: React.ReactNode | string;
};

function InfoBox({ children }: InfoBoxProps) {
  return (
    <div className={styles.container}>
      <div>
        <InfoIconSvg />
      </div>
      <Typography.Text type='secondary'> {children}</Typography.Text>
    </div>
  );
}

export default InfoBox;
