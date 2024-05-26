import BadgeStatusFlag from 'components/BadgeStatusFlag';
import CalendarDaysRem from 'components/CalendarDaysRem';
import { useTranslation } from 'react-i18next';
import { CardConsumptionProps } from '../interfaces';

function Pending(props:CardConsumptionProps) {
  const { data } = props;
  const { t } = useTranslation(['home']);
  const {
    flag, status, country, dateEnd, dateStart, plan,
  } = data;
  return (
    <div className="p-6 sm:p-6 lg:flex-auto grid grid-cols-1 w-[100%] sm:w-[25vw]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <BadgeStatusFlag flag={flag} status={status} />
          <h3 className="text-xl font-bold tracking-tight text-gray-900 mt-3 text-left">{country}</h3>
          <p className="mt-3 text-base leading-7 text-gray-600 text-left">
            {plan}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <CalendarDaysRem dateEnd={dateEnd} dateStart={dateStart} />
        </div>
      </div>
      <button
        type="button"
        className="mt-10 block w-full rounded-md bg-red-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        {t('detailsAndInstallBtn')}
      </button>
    </div>
  );
}
export default Pending;
