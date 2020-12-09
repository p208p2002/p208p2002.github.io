import React from 'react';
import './App.css';
import styled from 'styled-components'
import EducationBlock from './componments/educationBlock'
import ProjectBlock from './componments/projectBlock'
import Header from './componments/header'
import InfoBlock from './componments/infoBlock'
import BlockTitle from './componments/blockTitle'
import SkillBlock from './componments/skillBlock'
import Footer from './componments/footer'
import { useTranslation } from 'react-i18next';
import ChangLangBtn from './modules/i18n/changLangBtn'
import { ModeContext } from './contexts'

// styled
const AboutMe = styled.div`
  @media print{
    margin-left:16.6667%;
  }
`

const ProjectContext = styled.div`
  @media print{
    display:block !important;
  }
`

const PageContext = styled.div`
  min-height: calc(100% - 48px);
  padding-bottom: 15px;
  position: relative;
`

const InfoIcons = styled.div`
  & img {
    width: 24px;
    margin-right: 10px;
  }
  & span {
    display: inline-block;
    margin-bottom: 5px;
  }
`;

function App() {
  const context = React.useContext(ModeContext),
    { resume: resumeMode } = context


  const { t } = useTranslation();
  // educations
  const educations = [
    <EducationBlock
      degree={t("碩士")}
      image={require('./assets/img/nchu2.png')}
      school={t("國立中興大學")}
      content={t("國立中興大學, 資訊科學與工研究所, 2019~2021")}
    />,
    <EducationBlock
      degree={t("學士")}
      image={require('./assets/img/nutc.gif')}
      school={t("國立臺中科技大學")}
      content={t("國立臺中科技大學, 資訊工程學系, 2015~2019")}
    />
  ]

  // skills
  const skills = [
    <SkillBlock
      name={t("前端")}
      images={[
        { name: 'JavaScript ES6+', src: require('./assets/img/008-javascript.png') },
        { name: 'React JS', src: require('./assets/img/react.ico') },
        { name: 'Redux', src: require('./assets/img/redux.png') },
      ]}
      content={t("熟悉JS ES6與npm等熱門工具的使用，擅長使用ReactJS、Redux")}
    />,
    <SkillBlock
      name={t("後端")}
      images={[
        { name: 'PHP 7', src: require('./assets/img/011-php.png') },
        { name: 'Laravel', src: require('./assets/img/laravel.svg') },
        { name: 'MySQL', src: require('./assets/img/012-mysql.png') }
      ]}
      content={t("使用Laravel開發RESTful風格API，與內容管理系統之經驗")}
    />,
    <SkillBlock
      name={t("自然語言處理")}
      images={[
        { name: 'Python 3', src: require('./assets/img/010-python.png') },
        { name: 'Pytorch', src: require('./assets/img/pytorch-logo.png') },
        { name: 'Transformers', src: require('./assets/img/huggingface_logo.svg') },
      ]}
      content={t("搭配深度學習技術、框架(PyTorch)研究NLP相關項目")}
    />,
    <SkillBlock
      name={t("其它")}
      images={[
        { name: 'Ubuntu', src: require('./assets/img/ubuntu.svg') },
        { name: 'Docker', src: require('./assets/img/docker.svg') },
        { name: 'Git & GitHub', src: require('./assets/img/github.svg') }
      ]}
      content={t("網站佈署流程與設定 / Docker管理 / 版本控制")}
    />
  ]

  // projects
  const projects = [
    <ProjectBlock
      name={t("台北QA問答機器人")}
      content={t("基於實驗室蒐集的問答資料集之問答分類模型(使用BERT、ALBERT)")}
      tags={['NLP', 'PyTorch', 'BERT']}
      gitRepoName={'p208p2002/taipei-QA-BERT'}
      links={[
        { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/taipei-QA-BERT', showInPrint: true },
      ]}
    />,
    <ProjectBlock
      name={t("Querator AI 前端展示系統")}
      previewImg={require('./assets/img/querator_ai.png')}
      content={t("問句生成的AI展示系統，負責前端系統開發與API設計")}
      tags={['React', 'AI DEMO']}
      links={[
        { name: 'Querator AI', type: 'web', href: 'http://udiclab.cs.nchu.edu.tw/querator.html', showInPrint: true },
        { name: 'Demo', type: 'demo', href: 'http://140.120.13.249:3000' }
      ]}
    />,
    <ProjectBlock
      name={t("鸚鵡兄弟文字圖產生器")}
      previewImg={require('./assets/img/yinwubrother.jpg')}
      content={t("可愛的鸚鵡兄弟梗圖生產器、快速上字與分享")}
      tags={['React', 'RWD', 'meme']}
      gitRepoName={'p208p2002/yinwubrother-textmaker-react'}
      links={[
        { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/yinwubrother-textmaker-react' },
        { name: 'Demo', type: 'demo', href: 'https://p208p2002.github.io/yinwubrother-textmaker-react', showInPrint: true }
      ]}
    />,
    <ProjectBlock
      name={t("自動旅遊排程系統")}
      previewImg={require('./assets/img/qts.png')}
      content={t("帶有旅遊景點資料庫的，全/半自動旅遊排程推薦系統。來一趟說走就走的旅遊🛫")}
      tags={['React', 'Laravel', 'RWD', 'PWA', 'GOOGLE Map', '會員系統']}
      // gitRepoName={'p208p2002/quick-travel-schedule'}
      links={[
        { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/quick-travel-schedule' },
        { name: 'Demo', type: 'demo', href: 'https://quicktravel.thecodingday.com', showInPrint: true }
      ]}
    />,
    <ProjectBlock
      name={t("Docker for AI DEV")}
      previewImg={require('./assets/img/docker_q.png')}
      content={t("快速建立包含Jupyter、web-vscode和cuda support在內的遠端開發環境")}
      tags={['Docker', 'dev-env']}
      gitRepoName={'p208p2002/docker-for-ai-dev'}
      links={[
        { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/docker-for-ai-dev', showInPrint: true },
        { name: 'Docker Hub', type: 'btn-primary', href: 'https://hub.docker.com/r/p208p2002/docker-for-ai-dev' }
      ]}
    />,
    <ProjectBlock
      name={t("PC Monitor")}
      previewImg={require('./assets/img/pc-monitor.png')}
      content={t("角落懸浮電腦狀態監視器(CPU、RAM)")}
      tags={['React', 'Electron']}
      // gitRepoName={'p208p2002/pc-monitor'}
      links={[
        { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/pc-monitor', showInPrint: true },
        { name: 'Download', type: 'web', href: 'https://github.com/p208p2002/pc-monitor/releases' }
      ]}
    />
  ]

  return (
    <div className="animate__animated animate__fadeIn">
      <ChangLangBtn />
      <PageContext className="container" style={{ backgroundColor: 'white' }}>
        <Header />

        <AboutMe className="row">
          <div className="col-12 col-md-5 offset-lg-2 pt-3 pb-md-3">
            <InfoBlock title={t("關於我")}>
              <p>{t('全端開發與佈署經驗，熟悉ReactJS與相關主流套件')}</p>
              <p>{t('目前是 UDIC@NCHU 的成員，主要研究領域為自然語言處理(Natural Language Processing)')}</p>
              <p>{t('喜歡攝影、咖啡跟電影，偶爾做些Side Project')}</p>
            </InfoBlock>
          </div>
          <div className="col-12 col-md-5">
            <InfoBlock>
              <InfoIcons className="mt-md-4 pt-md-1">
                <span><img src={require('./assets/img/003-point.png')} alt="" srcSet="" />{t('臺灣，臺中')}</span><br />
                <span className="mt-2 mt-sm-1"><img src={require('./assets/img/004-mail.png')} alt="" srcSet="" />p208p2002@gmail.com</span><br />
                <span className="mt-2 mt-sm-1"><img src={require('./assets/img/linkedin.png')} alt="" srcSet="" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/p208p2002">linkedin.com/p208p2002</a></span><br />
                <span className="mt-2 mt-sm-1"><img src={require('./assets/img/001-cat.png')} alt="" srcSet="" />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/p208p2002">github.com/p208p2002</a></span><br />
                <span className="mt-2 mt-sm-1"><img src={require('./assets/img/002-wordpress.png')} alt="" srcSet="" />
                  <a target="_blank" rel="noopener noreferrer" href="https://blog.thecodingday.com">blog.thecodingday.com</a></span><br />
              </InfoIcons>
            </InfoBlock>
          </div>
        </AboutMe>

        {/* education */}
        <BlockTitle>{t('學歷')}</BlockTitle>
        <div className="row">
          {educations.map((education, index) => {
            return <div key={index} className="col-6">
              {education}
            </div>
          })}
        </div>
        <br />

        {/* skills */}
        <BlockTitle>{t('技術棧')}</BlockTitle>
        <div className="row">
          {skills.map((skill, index) => {
            return <div key={index} className="col-12 col-md-6 mb-4">
              {skill}
            </div>
          })}
        </div>

        {/* projects */}
        <BlockTitle>{t("精選項目")}</BlockTitle>
        <ProjectContext className="row">
          {projects.map((project, index) => {
            return <div key={index} className={`print-no-cut col-12 ${resumeMode ? 'col-lg-12' : 'col-lg-6'}`}>
              {project}
            </div>
          })}
        </ProjectContext>
      </PageContext>

      {/* footer */}
      <Footer>
        {new Date().getFullYear()} © Philip Huang
        <br />
        <small>{t("網站設計與開發：")} <b>Philip Huang</b></small>
      </Footer>
    </div>
  );
}

export default App;
