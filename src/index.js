import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './modules/i18n/i18n.js'
import styled from 'styled-components'
import { ModeContext } from './contexts'

const ResumeContainer = styled.div`
  padding-top:50px;
  padding-bottom:50px;
  background-color:#444444;
  
  
  & > div{
    width:250mm;
    margin-left:calc(50% - 125mm);
    box-shadow: 0px 0px 5px 5px #202020;
  }
  @media(max-width:250mm){
    padding-top:0px;
    padding-bottom:0px;
    & > div{
      width:100%;
      margin-left:0px;
    }
  }

  @media print{
    padding:0px;
    background-color:white;
    & > div{
      width:100%;
      margin-left:0px;
    }
  }

`

let url = new URL(window.location.href)
let resumeMode = (url.searchParams.get('mode') === 'resume' ? true : false)
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (resumeMode && isMobile){
  //  force use pc view in resume mode
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=1024');
}

ReactDOM.render(
  <React.StrictMode>
    <ModeContext.Provider value={{ resume: resumeMode }}>
      {resumeMode ?
        <ResumeContainer>
          <App />
        </ResumeContainer>
        :
        <App />
      }
    </ModeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
