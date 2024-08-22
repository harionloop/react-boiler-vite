import { Divider } from 'antd';
import cn from 'classnames';
import theme from '../../theme/theme';
import Flex from '../General/Flex';
import style from './styles/ThemeTemplate.module.less';

const chars = '0123456789 | ABCDEFGHTIJKLMNOPQRSTUVWXYZ | abcdefghijklmnopqrstuvwxyz';

const ThemeTemplate = () => {
  return (
    <div className={cn(style.container)}>
      <div>
        <h3>Colors</h3>
        <Flex flexWrap='wrap' gap='20px'>
          {Object.entries(theme.color).map(([key, value], i) => (
            <div key={i} className={cn(style.colorWrapper, 'hover-shadow')}>
              <div className={cn(style.color)} style={{ background: value }}>
                <div style={{ color: theme.color.text_primary }}>text-primary</div>
                <div style={{ color: theme.color.text_secondary }}>text-secondary</div>
                <div style={{ color: theme.color.text_accent }}>text-accent</div>
                <div style={{ color: theme.color.text_disabled }}>text-disabled</div>
              </div>
              <div style={{ padding: '10px' }}>
                {key} : {value}
              </div>
            </div>
          ))}
        </Flex>
      </div>
      <Divider />
      <div>
        <h3>Fonts</h3>
        <Flex gap='10px' style={{ margin: '10px', padding: '10px', backgroundColor: theme.color.background_secondary }}>
          <div>
            <h1>h1 {chars}</h1>
            <h2>h2 {chars}</h2>
            <h3>h3 {chars}</h3>
            <h4>h4 {chars}</h4>
            <h5>h5 {chars}</h5>
            <h6>h6 {chars}</h6>
            <p>p {chars}</p>
            <div>
              Size
              <ul>
                {Object.entries(theme.font).map(([key, value], i) => (
                  <li key={i} style={{ fontSize: value }}>
                    {key}:{value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Flex flexDirection='column' justifyContent='space-between'>
            <Flex style={{ fontWeight: '100', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>100 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '200', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>200 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '300', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>300 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '400', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>400 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '500', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>500 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '600', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>600 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '700', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>700 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '800', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>800 {chars}</>
            </Flex>
            <Flex style={{ fontWeight: '900', borderBottom: `1px solid ${theme.color.background_primary_accent}` }}>
              <>900 {chars}</>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default ThemeTemplate;
