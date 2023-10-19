import { React, useState, useEffect } from 'react'
import convertRepoName from './convertRepoName'
import fetchRepoByName from './fetchRepoByName'
import './RepoCard.css'

function RepoCard({ repoName, customHeading, displayColor}) {

  const [repo, setRepo] = useState({})

  useEffect(() => {
    fetchRepoByName(repoName)
      .then(setRepo)
  }, [])

  return (
    <div className="repo-card debug-border">
      <div className={`repo-card-colorbar ${displayColor}`}></div>
      <div className="repo-card-content">
        <div className="flex-1">
          <h3>{customHeading ? customHeading : convertRepoName(repoName)}</h3>
        </div>
        <div className="flex-2">
          <p>{repo.description}</p>
        </div>
        <div className="flex-3">
          <p>{repo.language}</p>
          <p>{repo.updated_at?.substring(0, 10)}</p>
        </div>
      </div>
    </div>
  )
}

export default RepoCard