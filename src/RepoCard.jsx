import { React, useState, useEffect } from 'react'
import convertRepoName from './convertRepoName'
import fetchRepoByName from './fetchRepoByName'
import './RepoCard.css'

// eslint-disable-next-line react/prop-types
function RepoCard({ repoName, customHeading, displayColor, description, language, updatedAt}) {

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
          <p>{repo? repo.description : description}</p>
        </div>
        <div className="flex-3">
          <p>{repo ? repo.language : language}</p>
          <p>{repo ? repo.updated_at?.substring(0, 10) : updatedAt}</p>
        </div>
      </div>
    </div>
  )
}

export default RepoCard