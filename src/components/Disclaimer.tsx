import { useTranslation } from '../context/TranslationContext'

export default function Disclaimer() {
  const { t } = useTranslation()

  return (
    <div className="disclaimer">
      <p>
        <em id="disclaimer-text">
          {t("This is an experimental web app made to help patients calculate insulin needs. It takes into account the insulin you need from food and the insulin for a correction dose if above your target blood sugar 😊 !")}
        </em>
      </p>
    </div>
  )
}