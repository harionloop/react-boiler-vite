import { Button, Tooltip } from 'antd';
import cn from 'classnames';
import React from 'react';
import styles from './styles/IconButton.module.less';
type TIconButton = {
  onClick?: VoidFunction;
  icon: React.ReactNode;
  tooltip?: string;
  color?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<TIconButton> = (props) => {
  const { onClick, icon, tooltip, color, style, className, ...rest } = props;
  const iconBtn = (
    <Button
      {...rest}
      style={{ color: color, ...style }}
      className={cn(styles.iconButton, 'flex justify-center items-center', className)}
      shape='circle'
      type='text'
      onClick={onClick}
      icon={icon}
    />
  );
  return tooltip ? (
    <Tooltip showArrow title={tooltip} mouseEnterDelay={0.2}>
      {iconBtn}
    </Tooltip>
  ) : (
    iconBtn
  );
};

export default IconButton;
