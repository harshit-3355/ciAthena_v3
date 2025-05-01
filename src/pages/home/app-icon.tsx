import marketing from '#/assets/app-icons/marketing.svg';
import payer from '#/assets/app-icons/payer.svg';
import performance from '#/assets/app-icons/performance.svg';

interface AppIconProps {
  type: string;
}

const iconMap: {
  [key in AppIconProps['type']]: string;
} = {
  'Market Access Opportunity': marketing,
  'Payer/Access Landscape': payer,
  'Performance Monitoring': performance,
};

export default function AppIcon({ type }: AppIconProps) {
  return <img src={iconMap[type] ?? marketing} alt={type} />;
}
