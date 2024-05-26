import { BadgeStatusFlagProps } from './interfaces';
import { getColorBagde } from './utils/getColorBadge';

function BadgeStatusFlag(props:BadgeStatusFlagProps) {
  const { flag, status, grayscale } = props;
  const colorBage = getColorBagde(status);
  const classGrayScale = grayscale ? 'grayscale' : '';
  return (
    <div className="flex overflow-hidden relative">
      <span className={`relative items-center rounded-full pl-7 bg-${colorBage}-100 px-2 py-1 text-xs font-medium text-${colorBage}-600  ring-inset ring-gray-500/10`}>
        {status}
      </span>
      <img
        className={`${classGrayScale} absolute h-6 w-6 rounded-full`}
        src={flag}
        alt=""
      />
    </div>
  );
}
export default BadgeStatusFlag;
