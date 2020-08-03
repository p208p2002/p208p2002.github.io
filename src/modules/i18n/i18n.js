import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "關於我": "About Me",
      "繁體中文":"繁體中文",
      "English":"English",
      "臺灣，臺中":"Taiwan, Taichang",
      "全端開發與佈署經驗，熟悉ReactJS與相關主流套件":"Full Stack Develpoer, Familiar with ES6+, ReactJS and it's popular packages.",
      "目前是 UDIC@NCHU 的成員，主要研究領域為自然語言處理(Natural Language Processing)":"Member of UDIC@NCHU, Natural Language Processing(NLP) is my field of research.",
      "喜歡攝影、咖啡跟電影，偶爾做些Side Project":"🏌️‍♂️ Photography, Coffee and Movie, also Side Project too.",
      "技術棧":"Skills",
      "前端":"Front End",
      "後端":"Back End",
      "自然語言處理":"Natural Language Processing",
      "其它":"Other",
      "熟悉JS ES6與npm等熱門工具的使用，擅長使用ReactJS、Redux":"Familiar with ES6+, ReactJS and it's popular packages",
      "使用Laravel開發RESTful風格API，與內容管理系統之經驗":"Experience of develop RESTful APIs and CMS with Laravel",
      "搭配深度學習技術、框架(PyTorch)研究NLP相關項目":"Using Deep Learning on NLP classification task with Pytorch and Transformers",
      "網站佈署流程與設定 / Docker管理 / 版本控制":"Ubuntu, Apache , Docker and Git, experience of MIS at UDIC LAB",
      "精選項目":"Projects"
    }
  },
  tw: {
    translation: {}
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;