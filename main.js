const LinksSocialMedia = {
  github: 'DilanLopezN',
  whatsapp: '5511944502819',
  facebook: 'EsseEmeuJeitoNinja',
  instagram: 'dilanlopez.17',
  twitter: 'DilanLopezLd'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      namebig.textContent = data.name
    })
}
//alert(url)
getGitHubProfileInfos()
