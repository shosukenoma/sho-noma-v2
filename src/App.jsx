import './App.css'
import RepoCard from './RepoCard'
import Header from './Header'
import { React, useState } from 'react'

function App() {

  const [display, setDisplay] = useState(3);
  
  function handleLogoClick() {
    setDisplay(0);
  }

  return (
    <div className="main-container">
      <div className="inner-container debug-border">
        <Header handleLogoClick={handleLogoClick}/>
        <div className="flex-margin" />
        <main className="main-projects debug-border">
          <div className="projects-display debug-border">
            {/* Overview */}
            <div className={`overview ${display==0 ? "" : "hidden"}`}>
              <span className="pre-heading">Hi there! I am...</span>
              <h2>Sho Noma &#8212; Software Developer</h2>
              <span>
                <p>I'm a software developer specializing in building accessible websites.
                  <br/>I have experience building applications in Python and React.js.</p>
                <p>My interest lies in solving complex problems with logic
                  <br/> and designing applications while thinking about user accessibility.</p>
                <p>Check out my projects from the scrollable list on your right!</p>
              </span>
            </div>
            {/* Repo 1 */}
            <div className={`repo-red ${display==1 ? "" : "hidden"}`}></div>
            {/* Repo 2 */}
            <div className={`repo-green ${display==2 ? "" : "hidden"}`}></div>
            {/* Repo 3 */}
            <div className={`repo-blue ${display==3 ? "" : "hidden"}`}></div>
          </div>
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
                  <a rel="noopener" className="project-link" onClick={display==1 ? () => setDisplay(0) : () => setDisplay(1)}>
                    <RepoCard repoName="stock-price-scraper" displayColor="orange" />
                  </a>
                </li>
                <li>
                  <a rel="noopener" className="project-link" onClick={() => setDisplay(2)}>
                    <RepoCard repoName="slack-note-v2" customHeading="Slack Note" displayColor="pink" />
                  </a>
                </li>
                <li>
                  <a rel="noopener" className="project-link" onClick={() => setDisplay(3)}>
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
  )
}

export default App
