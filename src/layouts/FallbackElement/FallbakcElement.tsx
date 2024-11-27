import { useTranslation } from 'react-i18next';

export function FallbackElement() {
  const { t } = useTranslation(['common']);

  return (
    <div className="flex text-center justify-center align-center">
      {t('loading')}
    </div>
  );
}
export default FallbackElement;
