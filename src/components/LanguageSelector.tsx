import { useTranslation } from '../context/TranslationContext'

export default function LanguageSelector() {
  const { changeLanguage } = useTranslation()

  return (
    <div className="control-buttons">
      <button className="control-button language-button" onClick={() => changeLanguage('en')} aria-label="Switch to English">🇺🇸</button>
      <button className="control-button language-button" onClick={() => changeLanguage('es')} aria-label="Cambiar a Español">🇪🇸</button>
      <button className="control-button language-button" onClick={() => changeLanguage('ht')} aria-label="Chanje an Kreyòl Ayisyen">🇭🇹</button>
      <button className="control-button language-button" onClick={() => changeLanguage('vi')} aria-label="Chuyển sang tiếng Việt">🇻🇳</button>
    </div>
  )
}