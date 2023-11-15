import React from 'react'

function ProjectDisplay({ display }) {
  return (
    <div className="projects-display debug-border">
      {/* Overview */}
      <div className={`overview ${display==0 ? "" : "hidden"}`}>
        <span className="pre-heading">Hi there! I am...</span>
        <h2>Sho Noma <br className='heading-line-break'/> &#8212; Software Developer</h2>
        <span className="intro-text">
          <p>I&apos;m a software developer specializing in building accessible websites.
            I have experience building applications in Python, Go and React.js.</p>
          <p>My interest lies in solving complex problems with logic
            and designing applications with a focus on user accessibility.</p>
        </span>
      </div>
      {/* Repo 1 */}
      <div className={`repo-red ${display==1 ? "" : "hidden"}`}></div>
      {/* Repo 2 */}
      <div className={`repo-green ${display==2 ? "" : "hidden"}`}></div>
      {/* Repo 3 */}
      <div className={`repo-blue ${display==3 ? "" : "hidden"}`}></div>
    </div>
  )
}

export default ProjectDisplay