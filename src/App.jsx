import './App.css'
import RepoCard from './RepoCard'
import Header from './Header'
import ProjectDisplay from './ProjectDisplay'
import { React, useState } from 'react'

function App() {

  const [display, setDisplay] = useState(0);
  
  function handleLogoClick() {
    setDisplay(0);
  }

  const defaultRepoInfos = [
    {
      repoName: "stock-price-scraper",
      customHeading: null,
      description: "A stock market web scraper that outputs stock price data to a csv file. Built using Go and Colly.",
      language: "Go",
      updatedAt: "2023-09-27",
    },
    {
      repoName: "slack-note-v2",
      customHeading: "Slack Note",
      description: "A minimalistic note taking app built using React.js, inspired by Slack’s self-DM feature.",
      language: "JavaScript",
      updatedAt: "2024-10-04"
    },
    {
      repoName: "sho-noma-v1",
      customHeading: "Portfolio Website",
      description: "My portfolio website built using React.js, with a theme inspired by Paul Smith's signature stripe.",
      language: "HTML, CSS, React.js",
      updatedAt: "2024-01-24"
    },
  ]

  return (
    <div className="wrapper">
      <div className="loading-container">
      </div>
      <div className="main-container">
        <div className="inner-container debug-border">
          <Header handleLogoClick={handleLogoClick}/>
          <div className="flex-margin" />
          <main className="main-projects debug-border">
            <ProjectDisplay display={display}></ProjectDisplay>
            <div className="projects-sidebar debug-border">
              {/* <h2>Projects</h2> */}
              {/* <select name="" id="" className="filter-bar">
                <option value="all">All Projects</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="database">Database</option>
                <option value="llm">Large Language Models</option>
              </select> */}
              <div className="project-list">
                <ul>
                  <li>
                    {/* <a rel="noopener" className="project-link" onClick={display==1 ? () => setDisplay(0) : () => setDisplay(1)}>
                      <RepoCard repoName="stock-price-scraper" displayColor="orange" />
                    </a> */}
                    <a href="https://github.com/shosukenoma/stock-price-scraper" className="project-link" target="_blank">
                      <RepoCard displayColor="orange" repoName={`${defaultRepoInfos[0].repoName}`} description={`${defaultRepoInfos[0].description}`} language={`${defaultRepoInfos[0].language}`} updatedAt={`${defaultRepoInfos[0].updatedAt}`}/>
                    </a>
                  </li>
                  <li>
                    {/* <a rel="noopener" className="project-link" onClick={display==2 ? () => setDisplay(0) : () => setDisplay(2)}>
                      <RepoCard repoName="slack-note-v2" customHeading="Slack Note" displayColor="pink" />
                    </a> */}
                    <a href="https://shosukenoma.github.io/slack-note-v2/" className="project-link" target="_blank">
                      <RepoCard displayColor="pink" repoName={`${defaultRepoInfos[1].repoName}`} customHeading={`${defaultRepoInfos[1].customHeading}`} description={`${defaultRepoInfos[1].description}`} language={`${defaultRepoInfos[1].language}`} updatedAt={`${defaultRepoInfos[1].updatedAt}`}/>
                    </a>
                  </li>
                  <li>
                    {/* <a rel="noopener" className="project-link" onClick={display==3 ? () => setDisplay(0) : () => setDisplay(3)}>
                      <RepoCard repoName="sho-noma-v1" customHeading="Portfolio Website" displayColor="light-green" />
                    </a> */}
                    <a href="https://github.com/shosukenoma/sho-noma-v1/" className="project-link" target="_blank">
                      <RepoCard displayColor="light-green" repoName={`${defaultRepoInfos[2].repoName}`} customHeading={`${defaultRepoInfos[2].customHeading}`} description={`${defaultRepoInfos[2].description}`} language={`${defaultRepoInfos[2].language}`} updatedAt={`${defaultRepoInfos[2].updatedAt}`}/>
                    </a>
                  </li>
                  {/* <li>
                    <RepoCard repoName="chore-roulette" displayColor="dark-blue" />
                  </li> */}
                </ul>
              </div>
            </div>
          </main>
          <footer className="debug-border">
            <p>Copyright © 2023 Sho Noma</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
