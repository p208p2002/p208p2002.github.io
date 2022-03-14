import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import ProjectBlock from './componments/projectBlock'
import Header from './componments/header'
import BlockTitle from './componments/blockTitle'
import SkillBlock from './componments/skillBlock'
import Footer from './componments/footer'
import { useTranslation } from 'react-i18next';
import ChangLangBtn from './modules/i18n/changLangBtn'
import { useSelector } from 'react-redux'
// 
import { yamlParser } from './utils'
import projectContent from './contents/project.yaml'
import skillContent from './contents/skill.yaml'

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
            <span className="mt-2 mt-sm-1"><img src={'/assets/img/004-mail.png'} alt="" srcSet="" />me@philip-huang.tech</span>
            <span className="mt-2 mt-sm-1"><img src={'assets/img/linkedin.png'} alt="" srcSet="" />
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/philip-huang">linkedin.com/in/philip-huang</a></span>
            <span className="mt-2 mt-sm-1"><img src={'/assets/img/001-cat.png'} alt="" srcSet="" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/p208p2002">github.com/p208p2002</a></span>
            {/* <span className="mt-2 mt-sm-1"><img src={'/assets/img/002-wordpress.png'} alt="" srcSet="" />
              <a target="_blank" rel="noopener noreferrer" href="https://p208p2002.github.io/blog">p208p2002.github.io/blog</a></span> */}
          </InfoIcons>
        </AboutMe>
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
