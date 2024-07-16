type TranslationKeys = {
  [key: string]: string;
}

type Translations = {
  en: TranslationKeys;
  es: TranslationKeys;
  ht: TranslationKeys;
  vi: TranslationKeys;
}

const translations: Translations = {
  "en": {
    "This is an experimental web app made to help patients calculate insulin needs. It takes into account the insulin you need from food and the insulin for a correction dose if above your target blood sugar 😊 !": "This is an experimental web app made to help patients calculate insulin needs. It takes into account the insulin you need from food and the insulin for a correction dose if above your target blood sugar 😊 !",
    "The Dose Buddy 💉 v2": "The Dose Buddy 💉 v2",
    "An insulin dosage calculator": "An insulin dosage calculator",
    "Carbs eaten (g)": "Carbs eaten (g)",
    "Insulin to carb ratio": "Insulin to carb ratio",
    "Current BG (mg/dL)": "Current BG (mg/dL)",
    "Target BG (mg/dL)": "Target BG (mg/dL)",
    "Correction factor": "Correction factor",
    "Calculate Dose": "Calculate Dose",
    "Important Disclaimer": "Important Disclaimer",
    "This calculator is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before making changes to your insulin regimen.": "This calculator is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before making changes to your insulin regimen.",
    "I Understand": "I Understand",
    "Recommended insulin dose:": "Recommended insulin dose:",
    "Actual calculated value:": "Actual calculated value:",
    "Carb dose:": "Carb dose:",
    "Correction dose:": "Correction dose:",
    "units": "units",
    "Enter grams": "Enter grams",
    "1 unit : __ g": "1 unit : __ g",
    "Enter mg/dL": "Enter mg/dL",
    "1 unit : __ mg/dL": "1 unit : __ mg/dL"
  },
  "es": {
    "This is an experimental web app made to help patients calculate insulin needs. It takes into account the insulin you need from food and the insulin for a correction dose if above your target blood sugar 😊 !": "Esta es una aplicación web experimental diseñada para ayudar a los pacientes a calcular sus necesidades de insulina. Tiene en cuenta la insulina necesaria por los alimentos y la dosis de corrección si tu nivel de azúcar en sangre está por encima del objetivo 😊 !",
    "The Dose Buddy 💉 v2": "El Compañero de Dosis 💉 v2",
    "An insulin dosage calculator": "Calculadora de dosis de insulina",
    "Carbs eaten (g)": "Carbohidratos consumidos (g)",
    "Insulin to carb ratio": "Proporción insulina-carbohidratos",
    "Current BG (mg/dL)": "Glucosa actual (mg/dL)",
    "Target BG (mg/dL)": "Glucosa objetivo (mg/dL)",
    "Correction factor": "Factor de corrección",
    "Calculate Dose": "Calcular Dosis",
    "Important Disclaimer": "Aviso Importante",
    "This calculator is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before making changes to your insulin regimen.": "Esta calculadora es solo para fines educativos y no debe reemplazar el consejo médico profesional. Siempre consulta con tu proveedor de atención médica antes de hacer cambios en tu régimen de insulina.",
    "I Understand": "Entiendo",
    "Recommended insulin dose:": "Dosis de insulina recomendada:",
    "Actual calculated value:": "Valor calculado real:",
    "Carb dose:": "Dosis para carbohidratos:",
    "Correction dose:": "Dosis de corrección:",
    "units": "unidades",
    "Enter grams": "Ingrese gramos",
    "1 unit : __ g": "1 unidad : __ g",
    "Enter mg/dL": "Ingrese mg/dL",
    "1 unit : __ mg/dL": "1 unidad : __ mg/dL"
  },
  "ht": {
    "This is an experimental web app made to help patients calculate insulin needs. It takes into account the insulin you need from food and the insulin for a correction dose if above your target blood sugar 😊 !": "Sa a se yon aplikasyon entènèt eksperimantal ki fèt pou ede pasyan kalkile bezwen ensilin yo. Li pran an konsiderasyon ensilin ou bezwen soti nan manje ak dòz koreksyon si sik nan san ou pi wo pase sib ou a 😊 !",
    "The Dose Buddy 💉 v2": "Konpayon Dòz la 💉 v2",
    "An insulin dosage calculator": "Kalkilatè dòz ensilin",
    "Carbs eaten (g)": "Kabohidrat manje (g)",
    "Insulin to carb ratio": "Pwopòsyon ensilin pou kabohidrat",
    "Current BG (mg/dL)": "Glisemi aktyèl (mg/dL)",
    "Target BG (mg/dL)": "Glisemi sib (mg/dL)",
    "Correction factor": "Faktè koreksyon",
    "Calculate Dose": "Kalkile Dòz",
    "Important Disclaimer": "Avètisman Enpòtan",
    "This calculator is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before making changes to your insulin regimen.": "Kalkilatè sa a se sèlman pou rezon edikatif epi li pa ta dwe ranplase konsèy medikal pwofesyonèl. Toujou konsilte founisè swen sante ou anvan ou fè chanjman nan rejim ensilin ou.",
    "I Understand": "Mwen Konprann",
    "Recommended insulin dose:": "Dòz ensilin rekòmande:",
    "Actual calculated value:": "Valè kalkile aktyèl:",
    "Carb dose:": "Dòz kabohidrat:",
    "Correction dose:": "Dòz koreksyon:",
    "units": "inite",
    "Enter grams": "Antre gram",
    "1 unit : __ g": "1 inite : __ g",
    "Enter mg/dL": "Antre mg/dL",
    "1 unit : __ mg/dL": "1 inite : __ mg/dL"
  },
  "vi": {
    "This is an experimental web app made to help patients calculate insulin needs. It takes into account the insulin you need from food and the insulin for a correction dose if above your target blood sugar 😊 !": "Đây là một ứng dụng web thử nghiệm được tạo ra để giúp bệnh nhân tính toán nhu cầu insulin. Ứng dụng tính cả insulin từ thức ăn và insulin để điều chỉnh khi đường huyết vượt quá mục tiêu 😊 !",
    "The Dose Buddy 💉 v2": "Người Bạn Liều Lượng 💉 v2",
    "An insulin dosage calculator": "Máy tính liều lượng insulin",
    "Carbs eaten (g)": "Carbs đã ăn (g)",
    "Insulin to carb ratio": "Tỷ lệ insulin trên carb",
    "Current BG (mg/dL)": "Đường huyết hiện tại (mg/dL)",
    "Target BG (mg/dL)": "Đường huyết mục tiêu (mg/dL)",
    "Correction factor": "Hệ số điều chỉnh",
    "Calculate Dose": "Tính Liều",
    "Important Disclaimer": "Tuyên bố Quan trọng",
    "This calculator is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before making changes to your insulin regimen.": "Máy tính này chỉ dành cho mục đích giáo dục và không thay thế lời khuyên y tế chuyên nghiệp. Hãy luôn tham khảo ý kiến nhà cung cấp dịch vụ chăm sóc sức khỏe của bạn trước khi thay đổi chế độ insulin.",
    "I Understand": "Tôi Hiểu",
    "Recommended insulin dose:": "Liều insulin được khuyến nghị:",
    "Actual calculated value:": "Giá trị tính toán thực tế:",
    "Carb dose:": "Liều carbs:",
    "Correction dose:": "Liều điều chỉnh:",
    "units": "đơn vị",
    "Enter grams": "Nhập gram",
    "1 unit : __ g": "1 đơn vị : __ g",
    "Enter mg/dL": "Nhập mg/dL",
    "1 unit : __ mg/dL": "1 đơn vị : __ mg/dL"
  }
};

export default translations;