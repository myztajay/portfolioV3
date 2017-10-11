$(document).ready(function(){
  console.log("rwqerqwerwq");
fetch('https://api.github.com/users/myztajay/events/public', {
      headers: {
        Accept: 'application/vnd.github.cloak-preview',
      },
    })
.catch((err)=> console.log(err))
.then((res)=> res.json())
.then((data)=> {
const gitData = data.slice(0,10)
let gitCounter = 0
const gitCommits = gitData.filter((gitArr) => {
  if (gitArr.payload.commits === undefined || gitCounter === 4 ) return
  else if (gitArr.payload.commits ) {
    gitCounter += 1;
    return gitArr;
    console.log(data)
  }
})

gitCommits.forEach((item, index)=>{
let message =  item.payload.commits[0].message;
let repoUrl =  'https://github.com/';
let repoName = item.repo.name;
let username = item.display_login;
let gitPhoto = item.actor.avatar_url;

const div = document.querySelector(`#gitMessages${index}`);
div.append(message);
const repo = document.querySelector(`#gitRepo${index}`);
repo.innerHTML = `<a target='_blank' href=${repoUrl}${repoName}>${repoName} </a>`;
// const photo = document.querySelector(`#gitPhoto${index}`);
// photo.innerHTML = `<img class='smallImg' src=${gitPhoto}>`;
document.querySelector(`#gitRepoTitle${index}`).append(repoName)

})

});

console.log("Thanks for look at my site -- Now it's time to get Schwifty in here!")



})