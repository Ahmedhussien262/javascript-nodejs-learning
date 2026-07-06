let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function(){
    let username  = input.value;
    getDataPicture(username);
})

async function getDataPicture(username) {
    let data = await fetch(`https://api.github.com/users/${username}`);
    let jsonData = await data.json();
    creatProfilePicture(jsonData);
    getData(username);
    return jsonData;
}

async function getData(name) {
    let data = await fetch(`https://api.github.com/users/${name}/repos`);
    let jsonData = await data.json();
    creatElement(jsonData);
    return jsonData;
}



function creatElement(repoData){
    const UiList = document.createElement('ul');
    if(Array.isArray(repoData)){
        repoData.forEach(repo => {
            console.log('repo: ' + repo.name)
            const listItem = document.createElement('li');
            const listItemText = document.createTextNode(repo.name);
            listItem.appendChild(listItemText);
            UiList.appendChild(listItem);
        })
        document.querySelector('#app').appendChild(UiList);
    }else{
        return
    }
}

function creatProfilePicture(profileData){
    if(profileData.avatar_url && profileData.name){
    const heading = document.createElement('h1');
    heading.textContent = `Github Profile: ${profileData.name}`;
        let image = document.createElement('img');
        image.src = profileData.avatar_url;
        image.width = 100;
        document.querySelector('#app').appendChild(heading);
        document.querySelector('#app').appendChild(image); 
    }else{
        return
    }
}


// getData('https://api.github.com/users/ahmed').then(data => 
//     {console.log(data);
//     creatProfilePicture(data);
// })   

// getData('https://api.github.com/users/ahmed/repos').then(data => creatElement(data))
