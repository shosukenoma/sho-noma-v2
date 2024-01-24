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
                      <RepoCard repoName="stock-price-scraper" displayColor="orange" />
                    </a>
                  </li>
                  <li>
                    {/* <a rel="noopener" className="project-link" onClick={display==2 ? () => setDisplay(0) : () => setDisplay(2)}>
                      <RepoCard repoName="slack-note-v2" customHeading="Slack Note" displayColor="pink" />
                    </a> */}
                    <a href="https://shosukenoma.github.io/slack-note-v2/" className="project-link" target="_blank">
                      <RepoCard repoName="slack-note-v2" customHeading="Slack Note" displayColor="pink" />
                    </a>
                  </li>
                  <li>
                    {/* <a rel="noopener" className="project-link" onClick={display==3 ? () => setDisplay(0) : () => setDisplay(3)}>
                      <RepoCard repoName="sho-noma-v1" customHeading="Portfolio Website" displayColor="light-green" />
                    </a> */}
                    <a href="https://github.com/shosukenoma/sho-noma-v1/" className="project-link" target="_blank">
                      <RepoCard repoName="sho-noma-v1" customHeading="Portfolio Website" displayColor="light-green" />
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
