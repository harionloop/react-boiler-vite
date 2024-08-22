import React from 'react';

interface IFixedWidth {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  maxWidth?: string;
  padding?: string;
  className?: string | null;
  id?: string;
}
const FixedWidth: React.FC<IFixedWidth> = (
  props = {
    style: { width: '100%', height: '100%' },
    maxWidth: 'auto',
    padding: '20px',
    className: null
  }
) => {
  const { style, maxWidth, padding, children, className, id } = props;
  const css: React.CSSProperties = { ...style, maxWidth };
  if (maxWidth === 'auto') {
    delete css.maxWidth;
  } else {
    css.margin = '0 auto';
  }
  css.padding = padding;
  return (
    <div id={id} style={css} className={className || ''}>
      {children}
    </div>
  );
};

export default FixedWidth;
