import { LinearProgress } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

type TProps = {
  timeout: number;
  delay?: number;
  onFinish?: () => void;
};

const Timeout: React.FC<TProps> = ({ timeout, delay = 10, onFinish }) => {
  const [percent, setPercent] = useState(0);
  const timer = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setPercent((p) => p + 10);
    }, timeout / delay);

    return () => {
      timer?.current && clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (percent >= 100) {
      timer?.current && clearInterval(timer.current);
      onFinish?.();
    }
  }, [percent]);

  return <LinearProgress variant='determinate' value={percent} />;
};

export default Timeout;
