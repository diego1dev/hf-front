import BadgeStatusFlag from 'components/BadgeStatusFlag';
import { useTranslation } from 'react-i18next';
import CircularProgressBar from 'components/CircularProgressBar';
import { CardConsumptionProps } from '../interfaces';

const getConsumptionGB = (consumption:number) => `${consumption / (1024 * 1024)}`;

function Active(props:CardConsumptionProps) {
  const { data } = props;
  const { t } = useTranslation(['home']);

  const {
    flag, status, country, plan, comsuption,
  } = data;
  const { totalConsumption = 0 } = comsuption || {};
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
        <div className="grid grid-cols-1 justify-center relative">
          <CircularProgressBar label="/12GB" value={getConsumptionGB(totalConsumption)} />
        </div>
      </div>
      <button
        type="button"
        className="mt-10 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-sm border-2 hover:bg-gray-100  "
      >
        {t('viewDetails')}
      </button>
      <button
        type="button"
        className="mt-2 block w-full rounded-md bg-green-400 px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>

        {t('addMoreData')}
      </button>
    </div>
  );
}
export default Active;
