import { useTranslation } from 'react-i18next';

function EmptyData() {
  const { t } = useTranslation(['common']);
  return (
    <div className="flex text-center justify-center align-center ">{t('emptyData')}</div>
  );
}
export default EmptyData;
