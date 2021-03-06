import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from 'js-cookie'
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "關於我": "About Me",
      "繁體中文": "繁體中文",
      "English": "English",
      "臺灣，臺中": "Taiwan, Taichang",
      "全端開發與佈署經驗，熟悉ReactJS與相關主流套件": "Full Stack Develpoer, Familiar with ES6+, ReactJS and it's popular packages.",
      "目前是 UDIC@NCHU 的成員，主要研究領域為自然語言處理(Natural Language Processing)": "Member of UDIC@NCHU, focusing on Natural Language Processing(NLP).",
      "喜歡攝影、咖啡跟電影，偶爾做些Side Project": "🏌️‍♂️ Photography, Coffee and Movie, also Side Project too.",
      "技術棧": "Skills",
      "前端": "Front End",
      "後端": "Back End",
      "自然語言處理": "Natural Language Processing",
      "其它": "Other",
      "熟悉JS ES6與npm等熱門工具的使用，擅長使用ReactJS、Redux": "Familiar with ES6+, ReactJS and it's popular packages",
      "使用Laravel開發RESTful風格API，與內容管理系統之經驗": "Experience of develop RESTful APIs and CMS with Laravel",
      "搭配深度學習技術、框架(PyTorch)研究NLP相關項目": "Using Deep Learning on NLP classification task with Pytorch and Transformers",
      "網站佈署流程與設定 / Docker管理 / 版本控制": "Ubuntu, Apache , Docker and Git, experience of MIS at UDIC LAB",
      "精選項目": "Projects",
      "台北QA問答機器人": "QA-BOT with Taipei",
      "基於實驗室蒐集的問答資料集之問答分類模型(使用BERT、ALBERT)":"A QA-BOT using BERT and ALBERT base on UDIC LAB Dataset that collect from Taipei GOV.",
      "Querator AI 前端展示系統": "Querator AI Front-End",
      "問句生成的AI展示系統，負責前端系統開發與API設計":"Custom UI System for Querator-AI(A Question Generator AI develop by UDIC LAB).",
      "鸚鵡兄弟文字圖產生器": "Cute meme generator",
      "可愛的鸚鵡兄弟梗圖生產器、快速上字與分享":"A Cute meme generator, upload and share with your friends.",
      "自動旅遊排程系統": "Auto travel scheduler",
      "帶有旅遊景點資料庫的，全/半自動旅遊排程推薦系統。來一趟說走就走的旅遊🛫":"Fully automatic recommend travel spot for you🛫, no more irritation with travel schedule.",
      "Docker for AI DEV": "Docker for AI DEV",
      "快速建立包含Jupyter、web-vscode和cuda support在內的遠端開發環境":"Quickly create Docker remote server workplace with PyTorch and Tensorflow.",
      "PC Monitor": "PC Monitor",
      "角落懸浮電腦狀態監視器(CPU、RAM)":"A PC Monitor made with ReactJS and Electron, that can float on the corner.",
      "學歷":"Education",
      "碩士":"Master",
      "學士":"Bachelor",
      "國立中興大學":"National Chung Hsing University",
      "國立臺中科技大學":"National Taichung University of Science and Technology",
      "國立中興大學, 資訊科學與工研究所, 2019~2021":"NCHU, Computer Science and Engineering, 2019~2021",
      "國立臺中科技大學, 資訊工程學系, 2015~2019":"NUTC, Computer Science and Engineering, 2015~2019",
      "網站設計與開發：":"Website design and develop by",
      "履歷模式":"Resume",
      "網頁模式":"Website",
      "2019/09 - 現在":"2019/09 - Now",
      "實驗室成員":"Lab Member",
      "暑期實習生":"Summer Intern",
      "中興大學 - 普及資料與智慧運算實驗室":"NCHU - Ubiquitous Data and Intelligent Computing Lab",
      "工業技術研究院 - 資訊與通訊研究所":"ITRI - Information and Communications Research Laboratories",
      "經歷":"Experience"
    }
  },
  tw: {
    translation: {}
  }
};

let lang = Cookies.get('lang');
if(lang === undefined){
  lang = 'en'
}
console.log('lang',lang)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:lang,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
