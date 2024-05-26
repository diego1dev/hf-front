import BadgeStatusFlag from 'components/BadgeStatusFlag';
import { format } from 'date-fns';
import { CardConsumptionProps } from '../interfaces';

function Expired(props:CardConsumptionProps) {
  const { data } = props;
  const {
    flag, status, country, dateEnd, dateStart, plan,
  } = data;
  return (
    <div className="p-6 sm:p-6 lg:flex-auto grid grid-cols-1 w-[100%] sm:w-[25vw]">
      <BadgeStatusFlag flag={flag} status={status} grayscale />
      <h3 className="text-xl font-bold tracking-tight text-gray-900 mt-3 text-left">{country}</h3>
      <p className="mt-3 text-l leading-7 text-gray-800 text-left">
        {`${format(dateStart, 'dd-MM-yyyy')} - ${format(dateEnd, 'dd-MM-yyyy')}`}
      </p>
      <p className="mt-3 text-md leading-7 text-gray-400 text-left">
        {plan}
      </p>
    </div>
  );
}
export default Expired;
