import theme from '@/theme/theme';
import { Drawer, Input, Typography } from 'antd';
import { useState } from 'react';
import Highlighter from 'react-highlight-words';
import styles from './styles/HelpMenu.module.less';

type THelpMenuProps = {
  showHelpMenu: boolean;
  toggleHelpMenu: () => void;
};

const { Search } = Input;
const { Title, Text } = Typography;
const highlightStyle = {
  backgroundColor: 'transparent',
  color: theme.color.app_secondary,
  fontWeight: 'bold'
};

const HelpMenu = ({ showHelpMenu, toggleHelpMenu }: THelpMenuProps) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (value: string) => {
    const lowerCase = value.toLowerCase();
    setSearchValue(lowerCase);
  };

  const SEARCH_DATA = searchValue
    ? data?.filter((el) => {
        return Object.values(el).some((val) => String(val).toLowerCase().includes(searchValue));
      }) || []
    : data;

  return (
    <Drawer
      placement='right'
      open={showHelpMenu}
      height={200}
      zIndex={999}
      contentWrapperStyle={{ paddingTop: '60px' }}
      title='Help'
      onClose={toggleHelpMenu}
      maskClosable
    >
      <Search
        placeholder='Input search text'
        onSearch={onSearch}
        onChange={(e: TEvent) => setSearchValue(e.target.value.toLowerCase())}
        autoFocus={true}
      />
      <div>
        {SEARCH_DATA?.map((item: any, index: number) => (
          <div key={index} className={styles.helpWrapper}>
            <Title level={5} style={{ color: theme.color.text_secondary }}>
              <Highlighter
                highlightClassName='YourHighlightClass'
                searchWords={[searchValue]}
                autoEscape={true}
                textToHighlight={item?.name}
                highlightStyle={highlightStyle}
              />
            </Title>

            <Text style={{ color: theme.color.text_secondary }}>
              <Highlighter
                highlightClassName='YourHighlightClass'
                searchWords={[searchValue]}
                autoEscape={true}
                textToHighlight={item?.description}
                highlightStyle={highlightStyle}
              />
            </Text>
          </div>
        ))}
      </div>
    </Drawer>
  );
};
export default HelpMenu;
