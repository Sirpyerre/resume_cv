import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getSectionSEO } from '../utils/sectionSEO';

export const useSectionSEO = (sectionName) => {
  const { language } = useLanguage();
  
  const sectionData = getSectionSEO(sectionName, language);
  
  // Update document title when section or language changes
  useEffect(() => {
    if (sectionData.title) {
      document.title = sectionData.title;
    }
  }, [sectionData.title, language]);

  return sectionData;
};