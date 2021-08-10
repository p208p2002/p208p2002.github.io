import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import EducationBlock from './componments/educationBlock'
import ProjectBlock from './componments/projectBlock'
import Header from './componments/header'
import InfoBlock from './componments/infoBlock'
import BlockTitle from './componments/blockTitle'
import SkillBlock from './componments/skillBlock'
import ExperienceBlock from './componments/experienceBlock'
import Footer from './componments/footer'
import { useTranslation } from 'react-i18next';
import ChangLangBtn from './modules/i18n/changLangBtn'
import { ModeContext } from './contexts'

// 
import { yamlParser } from './utils'
import projectContent from './contents/projects.yaml'


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
    // <EducationBlock
    //   degree={t("碩士")}
    //   image={require('./assets/img/nchu2.png')}
    //   school={t("國立中興大學")}
    //   content={t("國立中興大學, 資訊科學與工研究所, 2019~2021")}
    // />,
    // <EducationBlock
    //   degree={t("學士")}
    //   image={require('./assets/img/nutc.gif')}
    //   school={t("國立臺中科技大學")}
    //   content={t("國立臺中科技大學, 資訊工程學系, 2015~2019")}
    // />
  ]

  // experiences
  const experiences = [
    // {
    //   dateTime: t('2019/09 - 現在'),
    //   image: <img src={require('./assets/img/udic.jpg')} alt='udic' />,
    //   text: t('中興大學 - 普及資料與智慧運算實驗室'),
    //   title: t('實驗室成員')
    // },
    // {
    //   dateTime: t('2020/07 - 2020/08'),
    //   image: <img src={require('./assets/img/itri2.png')} alt='itri' />,
    //   text: t('工業技術研究院 - 資訊與通訊研究所'),
    //   title: t('暑期實習生')
    // }
  ]

  // skills
  const skills = [
    // <SkillBlock
    //   name={t("前端")}
    //   images={[
    //     { name: 'JavaScript ES6+', src: require('./assets/img/008-javascript.png') },
    //     { name: 'React JS', src: require('./assets/img/react.ico') },
    //     { name: 'Redux', src: require('./assets/img/redux.png') },
    //   ]}
    //   content={t("熟悉JS ES6與npm等熱門工具的使用，擅長使用ReactJS、Redux")}
    // />,
    // <SkillBlock
    //   name={t("後端")}
    //   images={[
    //     { name: 'PHP 7', src: require('./assets/img/011-php.png') },
    //     { name: 'Laravel', src: require('./assets/img/laravel.svg') },
    //     { name: 'MySQL', src: require('./assets/img/012-mysql.png') }
    //   ]}
    //   content={t("使用Laravel開發RESTful風格API，與內容管理系統之經驗")}
    // />,
    // <SkillBlock
    //   name={t("自然語言處理")}
    //   images={[
    //     { name: 'Python 3', src: require('./assets/img/010-python.png') },
    //     { name: 'Pytorch', src: require('./assets/img/pytorch-logo.png') },
    //     { name: 'Transformers', src: require('./assets/img/huggingface_logo.svg') },
    //   ]}
    //   content={t("搭配深度學習技術、框架(PyTorch)研究NLP相關項目")}
    // />,
    // <SkillBlock
    //   name={t("其它")}
    //   images={[
    //     { name: 'Ubuntu', src: require('./assets/img/ubuntu.svg') },
    //     { name: 'Docker', src: require('./assets/img/docker.svg') },
    //     { name: 'Git & GitHub', src: require('./assets/img/github.svg') }
    //   ]}
    //   content={t("網站佈署流程與設定 / Docker管理 / 版本控制")}
    // />
  ]

  // projects
  const [projects, setProjects] = useState([])
  useEffect(() => {
    yamlParser(projectContent)
      .then((res) => {
        console.log(res)
        // to ProjectBlock
        let _projects = res.projects.map((project) => {
          let { name,previewImg,content,tags,gitRepoName,links } = project
          return (
            <ProjectBlock
              name={name}
              previewImg={previewImg}
              content={content}
              tags={tags}
              gitRepoName={gitRepoName}
              links={links}
            />
          )
        })
        setProjects(_projects)
      })
  }, [])

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
                <span><img src={'/assets/img/003-point.png'} alt="" srcSet="" />{t('臺灣，臺中')}</span><br />
                <span className="mt-2 mt-sm-1"><img src={'/assets/img/004-mail.png'} alt="" srcSet="" />p208p2002@gmail.com</span><br />
                <span className="mt-2 mt-sm-1"><img src={'assets/img/linkedin.png'} alt="" srcSet="" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/p208p2002">linkedin.com/in/p208p2002</a></span><br />
                <span className="mt-2 mt-sm-1"><img src={'/assets/img/001-cat.png'} alt="" srcSet="" />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/p208p2002">github.com/p208p2002</a></span><br />
                <span className="mt-2 mt-sm-1"><img src={'/assets/img/002-wordpress.png'} alt="" srcSet="" />
                  <a target="_blank" rel="noopener noreferrer" href="https://p208p2002.github.io/blog">p208p2002.github.io/blog</a></span><br />
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

        {/* experience */}
        <div className="d-none d-md-block">
          <BlockTitle>{t("經歷")}</BlockTitle>
          <ExperienceBlock experiences={experiences} />
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
