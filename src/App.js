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
import projectContent from './contents/project.yaml'
import educationContent from './contents/education.yaml'
import experimentContent from './contents/experience.yaml'
import skillContent from './contents/skill.yaml'


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
  const [educations, setEducations] = useState([])
  useEffect(() => {
    yamlParser(educationContent)
      .then((res) => {
        console.log(res)
        // to Block
        let _educations = res.map((edu) => {
          let { degree, image, school, content } = edu
          return (
            <EducationBlock
              degree={degree}
              image={image}
              school={school}
              content={content}
            />
          )
        })
        setEducations(_educations)
      })
  }, [])

  // experiences
  const [experiences, setExperiences] = useState([])
  useEffect(() => {
    yamlParser(experimentContent)
      .then((res) => {
        setExperiences(res)
      })
  }, [])

  // skills
  const [skills, setSkills] = useState([])
  useEffect(() => {
    yamlParser(skillContent)
      .then((res) => {
        res = res.map((skill) => {
          return (
            <SkillBlock
              name={skill.name}
              images={skill.images}
              content={skill.content}
            />
          )
        })
        setSkills(res)
      })
  }, [])

  // projects
  const [projects, setProjects] = useState([])
  useEffect(() => {
    yamlParser(projectContent)
      .then((res) => {
        console.log(res)
        // to ProjectBlock
        let _projects = res.map((project) => {
          let { name, previewImg, content, tags, gitRepoName, links } = project
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
          <div style={{lineHeight:2}} className="col-12 col-md-5 offset-lg-2 pt-3 pb-md-3">
            <InfoBlock title={t("關於我")}>
              <p>大學時開始接觸ReactJS，也對後端開發有所涉獵，曾經參與多家網銀前端開發。
              研究所專攻自然語言處理，並且擔任實驗室網管，探索各類基於Transformers的預訓練語言模型(BERT, GPT, BART ...)之架構與應用，熟悉Transfromers、PyTorch與PyTorch Lightining等深度學習套件。
              善於結合並且應用已經掌握的技術；暑期於工研院實習期間，負責的計畫包含關係抽取與抽取結果視覺化呈現等技術。
              即將畢業於中興大學資工所。
              喜歡攝影、咖啡跟電影，偶爾做些Side Project。
              </p>
            </InfoBlock>
          </div>
          <div className="col-12 col-md-5">
            <InfoBlock>
              <InfoIcons className="pt-md-5 mt-md-4 mb-5 text-center text-md-left">
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
