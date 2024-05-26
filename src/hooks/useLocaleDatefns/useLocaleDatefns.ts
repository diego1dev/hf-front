import { es, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

function useLocaleDatefns() {
  const { i18n } = useTranslation();
  return i18n.resolvedLanguage === 'es' ? es : enUS;
}
export default useLocaleDatefns;
