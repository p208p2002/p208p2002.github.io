import React from 'react';
import './App.css';
import ProjectBlock from './componments/projectBlock/index.jsx'
function App() {
  return (
    <div className="App">
      <ProjectBlock
        name="Querator AI 前端展示系統"
        content="問句生成的AI展示系統，負責前端開發與API串接"
        tags={['React', 'AI DEMO']}
        links={[
          { name: 'Querator AI', type: 'web', href: 'http://udiclab.cs.nchu.edu.tw/querator.html' },
          { name: 'Demo', type: 'demo', href: 'http://140.120.13.249:3000' }
        ]}
      />

      <ProjectBlock
        name="鸚鵡兄弟文字圖產生器"
        content="可愛的鸚鵡兄弟梗圖生產器、快速上字與分享"
        tags={['React', 'RWD', 'meme']}
        links={[
          { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/yinwubrother-textmaker-react' },
          { name: 'Demo', type: 'demo', href: 'https://p208p2002.github.io/yinwubrother-textmaker-react' }
        ]}
      />

      <ProjectBlock
        name="自動旅遊排程系統"
        content="帶有旅遊景點資料庫的，全/半自動旅遊排程推薦系統。來一趟說走就走的旅遊🛫"
        tags={['React', 'Laravel', 'RWD', 'PWA', 'GOOGLE Map', '會員系統']}
        links={[
          { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/quick-travel-schedule' },
          { name: 'Demo', type: 'demo', href: 'https://quicktravel.thecodingday.com' }
        ]}
      />

      <ProjectBlock
        name="Docker for AI DEV"
        content="快速建立包含Jupyter、web-vscode和cuda support在內的遠端開發環境"
        tags={['Docker', 'dev-env']}
        links={[
          { name: 'GitHub', type: 'code', href: 'https://github.com/p208p2002/docker-for-ai-dev' },
          { name: 'Docker Hub', type: 'btn-primary', href: 'https://hub.docker.com/r/p208p2002/docker-for-ai-dev' }
        ]}
      />


    </div>
  );
}

export default App;
