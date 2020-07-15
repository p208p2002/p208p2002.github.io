import React from 'react';
import './App.css';
import styled from 'styled-components'
import ProjectBlock from './componments/projectBlock'
import Header from './componments/header'
import InfoBlock from './componments/infoBlock'
import BlockTitle from './componments/blockTitle'
import SkillBlock from './componments/skillBlock'
import Footer from './componments/footer'

// styled
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

// skills
const skills = [
  <SkillBlock
    name="前端"
    images={[
      // require('./assets/img/007-html-5-1.png'),
      require('./assets/img/008-javascript.png'),
      require('./assets/img/react.ico'),
      require('./assets/img/redux.png')
    ]}
    content="熟悉JS ES6與npm等熱門工具的使用，擅長使用ReactJS、Redux"
  />,
  <SkillBlock
    name="後端"
    images={[
      require('./assets/img/011-php.png'),
      require('./assets/img/laravel.svg'),
      require('./assets/img/012-mysql.png'),
    ]}
    content="使用Laravel開發RESTful風格API，與內容管理系統之經驗"
  />,
  <SkillBlock
    name="自然語言處理"
    images={[
      require('./assets/img/010-python.png'),
      require('./assets/img/DeepLearning.jpg'),
      require('./assets/img/pytorch-logo.png'),
    ]}
    content="搭配深度學習技術、框架(PyTorch)研究NLP相關項目"
  />,
  <SkillBlock
    name="其他"
    images={[
      require('./assets/img/ubuntu.svg'),
      require('./assets/img/docker.svg'),
      require('./assets/img/github.svg'),
    ]}
    content="網站佈署流程與設定 / docker管理 / 版本控制"
  />
]

// projects
const projects = [
  <ProjectBlock
    name="台北QA問答機器人"
    content="基於實驗室蒐集的問答資料集之問答分類模型(使用BERT、ALBERT)"
    tags={['NLP', 'PyTorch', 'BERT']}
    gitRepoName={'p208p2002/taipei-QA-BERT'}
    links={[
      { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/taipei-QA-BERT' },
    ]}
  />,
  <ProjectBlock
    name="Querator AI 前端展示系統"
    previewImg={require('./assets/img/querator_ai.png')}
    content="問句生成的AI展示系統，負責前端開發與API串接"
    tags={['React', 'AI DEMO']}
    links={[
      { name: 'Querator AI', type: 'web', href: 'http://udiclab.cs.nchu.edu.tw/querator.html' },
      { name: 'Demo', type: 'demo', href: 'http://140.120.13.249:3000' }
    ]}
  />,
  <ProjectBlock
    name="鸚鵡兄弟文字圖產生器"
    previewImg={require('./assets/img/yinwubrother.jpg')}
    content="可愛的鸚鵡兄弟梗圖生產器、快速上字與分享"
    tags={['React', 'RWD', 'meme']}
    gitRepoName={'p208p2002/yinwubrother-textmaker-react'}
    links={[
      { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/yinwubrother-textmaker-react' },
      { name: 'Demo', type: 'demo', href: 'https://p208p2002.github.io/yinwubrother-textmaker-react' }
    ]}
  />,
  <ProjectBlock
    name="自動旅遊排程系統"
    previewImg={require('./assets/img/qts.png')}
    content="帶有旅遊景點資料庫的，全/半自動旅遊排程推薦系統。來一趟說走就走的旅遊🛫"
    tags={['React', 'Laravel', 'RWD', 'PWA', 'GOOGLE Map', '會員系統']}
    // gitRepoName={'p208p2002/quick-travel-schedule'}
    links={[
      { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/quick-travel-schedule' },
      { name: 'Demo', type: 'demo', href: 'https://quicktravel.thecodingday.com' }
    ]}
  />,
  <ProjectBlock
    name="Docker for AI DEV"
    previewImg={require('./assets/img/docker_q.png')}
    content="快速建立包含Jupyter、web-vscode和cuda support在內的遠端開發環境"
    tags={['Docker', 'dev-env']}
    gitRepoName={'p208p2002/docker-for-ai-dev'}
    links={[
      { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/docker-for-ai-dev' },
      { name: 'Docker Hub', type: 'btn-primary', href: 'https://hub.docker.com/r/p208p2002/docker-for-ai-dev' }
    ]}
  />,
  <ProjectBlock
    name="PC Monitor"
    previewImg={require('./assets/img/pc-monitor.png')}
    content="角落懸浮電腦狀態監視器(CPU、RAM)"
    tags={['React', 'Electron']}
    // gitRepoName={'p208p2002/pc-monitor'}
    links={[
      { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/pc-monitor' },
      { name: 'Download', type: 'web', href: 'https://github.com/p208p2002/pc-monitor/releases' }
    ]}
  />
]

function App() {
  return (
    <div className="animate__animated animate__fadeIn">
      <PageContext className="container">
        <Header />
        <div className="row">
          <div className="col-12 col-md-5 offset-lg-2">
            <InfoBlock title="關於我">
              <p>全端開發與佈署經驗，熟悉ReactJS與相關主流套件</p>
              <p>目前是<a href="http://udiclab.cs.nchu.edu.tw" target="_blank" rel="noopener noreferrer">UDIC LAB</a>的成員，正在研究NLP(自然語言處理)</p>
              <p>喜歡攝影、咖啡跟電影，偶爾做些Side Project</p>
            </InfoBlock>
          </div>
          <div className="col-12 col-md-5">
            <InfoBlock>
              <InfoIcons>
                <span><img src={require('./assets/img/003-point.png')} alt="" srcSet="" />臺灣，臺中</span><br />
                <span><img src={require('./assets/img/004-mail.png')} alt="" srcSet="" />p208p2002@gmail.com</span><br />
                <span><img src={require('./assets/img/001-cat.png')} alt="" srcSet="" /><a
                  href="https://github.com/p208p2002">https://github.com/p208p2002</a></span><br />
                <span><img src={require('./assets/img/002-wordpress.png')} alt="" srcSet="" /><a
                  href="https://blog.thecodingday.com">https://blog.thecodingday.com</a></span><br />
              </InfoIcons>
            </InfoBlock>
          </div>
        </div>

        {/* skills */}
        <BlockTitle>技術棧</BlockTitle>
        <div className="row">
          {skills.map((skill, index) => {
            return <div key={index} className="col-12 col-md-6">
              {skill}
            </div>
          })}
        </div>

        {/* projects */}
        <BlockTitle>精選項目</BlockTitle>
        <div className="row">
          {projects.map((project, index) => {
            return <div key={index} className="col-12 col-lg-6">
              {project}
            </div>
          })}
        </div>
      </PageContext>

      {/* footer */}
      <Footer>
        {new Date().getFullYear()} © Philip Huang
        <br/>
        <small>Powered by ReactJS</small>
      </Footer>
    </div>
  );
}

export default App;
