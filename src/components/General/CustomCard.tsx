import theme from '@/theme/theme';
import { Avatar, Card, Typography } from 'antd';

type CustomCardProps = {
  desc?: string;
  icon?: React.ReactNode;
  title?: string;
  color?: string;
  className?: string;
  metaStyle?: React.CSSProperties;
} & React.ComponentProps<typeof Card>;

const CustomCard = (props: CustomCardProps) => {
  const { desc, icon, title, color, className } = props;
  return (
    <Card className={className || 'card-no-background'}>
      <Card.Meta
        style={{ ...props.metaStyle }}
        avatar={icon && <Avatar size={100} shape='square' src={icon} />}
        title={
          title && (
            <Typography.Text style={{ color: color || theme.color.app_secondary }} type='secondary' strong>
              {title}
            </Typography.Text>
          )
        }
        description={desc && <Typography.Text type='secondary'>{desc}</Typography.Text>}
      />
    </Card>
  );
};

export default CustomCard;
