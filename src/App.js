import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import HonorBlock from './componments/honorBlock'
import EducationBlock from './componments/educationBlock'
import ProjectBlock from './componments/projectBlock'
import Header from './componments/header'
import BlockTitle from './componments/blockTitle'
import SkillBlock from './componments/skillBlock'
import ExperienceBlock from './componments/experienceBlock'
import Footer from './componments/footer'
import { useTranslation } from 'react-i18next';
import ChangLangBtn from './modules/i18n/changLangBtn'
import { useSelector } from 'react-redux'
// 
import { yamlParser } from './utils'
import projectContent from './contents/project.yaml'
import educationContent from './contents/education.yaml'
import experimentContent from './contents/experience.yaml'
import skillContent from './contents/skill.yaml'
import honorContent from './contents/honor.yaml'


// styled
const AboutMe = styled.div`
  /* @media print{
    margin-left:16.6667%;
  } */
`

const ProjectContext = styled.div`
  /* @media print{
    display:block !important;
  } */
`

const PageContext = styled.div`
  min-height: calc(100% - 48px);
  padding-bottom: 15px;
  position: relative;
`

const InfoIcons = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  flex-wrap: wrap;
  /* margin-left:5%; */
  margin-top:10px;
  & img {
    width: 24px;
    margin-right: 10px;
  }
  & span {
    display: inline-block;
    margin-bottom: 5px;
    margin-left:3%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 15%;
    & span {
    display: inline-block;
    margin-bottom: 5px;
    margin-left:3%;
    width:100%;
  }
  }
`;

function App() {
  // eslint-disable-next-line
  const appMode = useSelector((state) => state.appMode)
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

  // honors
  const [honors, setHonors] = useState([])
  useEffect(() => {
    yamlParser(honorContent)
      .then((res) => {
        setHonors(res)
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
        <AboutMe className="center">
          <InfoIcons className="">
            {/* <span><img src={'/assets/img/003-point.png'} alt="" srcSet="" />{t('臺灣，臺中')}</span><br /> */}
            <span className="mt-2 mt-sm-1"><img src={'/assets/img/004-mail.png'} alt="" srcSet="" />p208p2002@gmail.com</span>
            <span className="mt-2 mt-sm-1"><img src={'assets/img/linkedin.png'} alt="" srcSet="" />
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/p208p2002">linkedin.com/in/p208p2002</a></span>
            <span className="mt-2 mt-sm-1"><img src={'/assets/img/001-cat.png'} alt="" srcSet="" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/p208p2002">github.com/p208p2002</a></span>
            {/* <span className="mt-2 mt-sm-1"><img src={'/assets/img/002-wordpress.png'} alt="" srcSet="" />
              <a target="_blank" rel="noopener noreferrer" href="https://p208p2002.github.io/blog">p208p2002.github.io/blog</a></span> */}
          </InfoIcons>
        </AboutMe>
        <br />

        {/* experience */}
        {/* <div className="d-none d-md-block"> */}
        <BlockTitle>{t("經歷")}</BlockTitle>
        <ExperienceBlock experiences={experiences.slice().reverse()} />
        {/* </div> */}
        <br />

        {/* honor */}
        <BlockTitle>{t("榮譽事蹟")}</BlockTitle>
        {
          honors.slice().reverse().map((honor, index) => {
            return (
              <HonorBlock honor={honor} key={index} />
            )
          })
        }
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
            return <div key={index} className={`col-12 col-lg-6 col-md-12`}>
              {project}
            </div>
          })}
        </ProjectContext>
        <br/>

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
        <br/>

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
