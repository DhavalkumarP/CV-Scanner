myArray = [
    {
        name: 'dhaval',
        age: 16,
        language: 'java',
        framework: 'spring',
        city: 'Ahmedabad',
        img: 'https://randomuser.me/api/portraits/men/50.jpg'
    },
    {
        name: 'Adittya',
        age: 17,
        language: 'c',
        framework: 'C with framework',
        city: 'MP',
        img: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Vignesh',
        age: 18,
        language: 'javascript',
        framework: 'React',
        city: 'chennai',
        img: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
        name: 'Shrut',
        age: 18,
        language: 'C++',
        framework: 'C++ with framework',
        city: 'Ahmedabad',
        img: 'https://randomuser.me/api/portraits/men/53.jpg'
    },
    {
        name: 'maya',
        age: 16,
        language: 'java',
        framework: 'spring',
        city: 'Ahmedabad',
        img: 'https://randomuser.me/api/portraits/women/54.jpg'
    }
];

function iterator(profile) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profile.length) {
                return {
                    value: profile[nextIndex++],
                    done: false

                }
            }
            else{
                return{done:true}
            }
        }
    }
}
let iter=iterator(myArray);
let next=document.getElementById('next');
nextFunc();
next.addEventListener('click',nextFunc)
function nextFunc(){
    let image=document.getElementById('image');
    let profille=document.getElementById('profile');
    let iter2=iter.next().value;
    if(iter2!=undefined)
    {
    let img=`<img src="${iter2.img}" alt="else">`;
    image.innerHTML=img;
    let profiles=`<ul class="list-group">
    <li class="list-group-item">${iter2.name}</li>
    <li class="list-group-item">${iter2.age}</li>
    <li class="list-group-item">${iter2.language}</li>
    <li class="list-group-item">${iter2.framework}</li>
    <li class="list-group-item">${iter2.city}</li>
  </ul>`;
   profille.innerHTML=profiles;
    }
    else{
        window.alert('finish');
        window.location.reload();
    }
}