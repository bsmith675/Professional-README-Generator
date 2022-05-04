const generateReadme = (answers, githubInfo) => {
        return `
    <h1>${answers.projectName}</h1>
    <p>${answers.description}</p>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#Installation">Installation</a></li>
        <li><a href="#Usage">Usage</a></li>
        <li><a href="#License">License</a></li>
        <li><a href="#Contributing">Contributing</a></li>
        <li><a href="#Tests">Tests</a></li>
        <li><a href="#Questions">Questions</a></li>
    </ul>
    
    <h2 id="Installation">Installation</h2>
    <p>${answers.install}</p>
    <h2 id="Usage">Usage</h2>
    <p>${answers.usage}</p>
    <h2 id="License">License</hd>
    <p>Licensed under the<a href="./README.md">${answers.license}</a></p>
    <h2 id="Contributing">Contributing</h2>
    <p>${answers.contributing}</p>
    <h2 id="Tests">Tests</h2>
    <h3>Follow These Dirrections to Test:</h3>
    <p>${answers.tests}</p>
    <h2 id="Questions">Questions</h2>

    <p style="strong"> If you have questions contact ${githubInfo.email}.</p>
    <img src="${githubInfo.avatar_url}" alt="git hub profile picture" height="225" width="250">
`;

}
module.exports = generateReadme;
