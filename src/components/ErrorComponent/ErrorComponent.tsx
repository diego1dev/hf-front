import { useTranslation } from 'react-i18next';

function ErrorComponent() {
  const { t } = useTranslation(['common']);

  return (
    <div>{t('errorData')}</div>
  );
}
export default ErrorComponent;
