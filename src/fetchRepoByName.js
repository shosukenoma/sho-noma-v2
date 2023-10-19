import { Octokit } from "https://esm.sh/@octokit/core";

async function fetchRepoByName(repo_name) {
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
  });
  console.log(`Sending request for ${repo_name}...`);
  const response = await octokit.request("GET /users/shosukenoma/repos", {});
  console.log(`Received response for ${repo_name}!`);
  const repo_data = response.data.filter(repo => repo.name == repo_name)

  return repo_data[0] // Returns object directly
}

export default fetchRepoByName