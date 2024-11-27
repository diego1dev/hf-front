import { differenceInDays, formatDistanceStrict } from 'date-fns';
import useLocaleDatefns from 'hooks/useLocaleDatefns';
import { CalendarDaysRemProps } from './interfaces';

function CalendarDaysRem(props:CalendarDaysRemProps) {
  const { dateEnd, dateStart } = props;
  const locale = useLocaleDatefns();
  const remainingDays = dateEnd ? Math.max(0, differenceInDays(dateEnd, new Date())) : '';
  const totalDays = dateEnd ? formatDistanceStrict(dateEnd, dateStart, { unit: 'day', locale }) : '';
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center">
        <h6 className="text-l font-bold tracking-tight text-gray-900">{remainingDays}</h6>
        <p className="text-sm leading-7 text-gray-600">
          {`/${totalDays}`}
        </p>
      </div>
      <svg className="md-x-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    </div>
  );
}
export default CalendarDaysRem;
