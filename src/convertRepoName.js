function convertRepoName(repoName) {
  let first_letter = true;
  let charList = []
  for (let i = 0; i < repoName.length; i++) {
    if (repoName.charAt(i) != "-") {
      if (first_letter) {
        charList = [...charList, repoName.charAt(i).toUpperCase()]
      }
      else {
        charList = [...charList, repoName.charAt(i)]
      }
      first_letter = false;
    } else { // if substring is “-”
      charList = [...charList, " "]
      first_letter = true;
    }
  }
  const result = charList.join('')
  console.log("Repo name is ", result)
  return charList
}
export default convertRepoName
// https://www.w3schools.com/jsref/jsref_replace.asp