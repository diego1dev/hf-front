import { LANGS_OPTIONS } from 'constant';
import { useTranslation } from 'react-i18next';

export function LanguageSelect() {
  const { i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <select defaultValue={i18n.resolvedLanguage} onChange={onClickLanguageChange}>
      {LANGS_OPTIONS.map((lng) => <option key={`sel-lng-${lng.id}`} value={lng.id} label={lng.label} />)}
    </select>
  );
}
export default LanguageSelect;
