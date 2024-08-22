import React, { ReactNode } from 'react';

type TFlex = {
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  /****** Container Props ********/
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit' | 'space-evenly';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit' | 'end' | 'start';
  /****** Child Props ********/
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  flex?: string;
  /****** Common Layout Props ********/
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

const Flex: React.FC<TFlex> = (props) => {
  const {
    children,
    style,
    className,
    flexDirection,
    justifyContent,
    flexWrap,
    alignItems,
    gap,
    columnGap,
    rowGap,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    padding,
    margin,
    width,
    height,
    maxWidth,
    maxHeight,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={className}
      style={{
        display: 'flex',
        justifyContent: justifyContent || 'flex-start',
        flexDirection: flexDirection || 'row',
        flexGrow: flexGrow || 0,
        flexBasis: flexBasis || 'auto',
        flexShrink: flexShrink || 1,
        flexWrap: flexWrap || 'nowrap',
        flex: flex || '0 1 auto',
        gap: gap || '5px',
        rowGap: rowGap || gap || '5px',
        columnGap: columnGap || gap || '5px',
        alignItems: alignItems || 'stretch',
        margin: margin || '0',
        padding: padding || '0',
        width: width || 'auto',
        height: height || 'auto',
        maxWidth: maxWidth || 'none',
        maxHeight: maxHeight || 'none',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
