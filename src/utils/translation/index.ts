import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const directTranslate = (key: string): string => {
  return i18next.t(key);
};

export const useTextTranslation = () => {
  const { t: i18nT } = useTranslation();

  const t = (key: string): string => {
    try {
      return i18nT(key);
    } catch (error) {
      return directTranslate(key);
    }
  };

  return { translate: t, directTranslate };
};
