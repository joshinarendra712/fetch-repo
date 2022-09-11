let cl = console.log;

const POSTtemp = document.getElementById("POSTtemp");
const title = document.getElementById("title");
const info = document.getElementById("info");
const postForm = document.getElementById("postForm");
const submitBtn = document.getElementById("submitBtn");
const updateBtn  = document.getElementById('updateBtn')
let baseUrl = `http://localhost:3000`;


let getUrl = `${baseUrl}/posts`;
let tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
localStorage.setItem("token",tokenValue)

const makeAPICall = (Url,methodName,body)=>{
    return fetch(Url,{
        method : methodName,
        body : body,
        headers  : {
            'Content-type': 'application/json; charset=UTF-8',
            "auto" : localStorage.getItem("token")
        }
    }).then(res => res.json())
    }
makeAPICall(getUrl,"GET")
.then(data => templating(data))
.catch(cl)

const postsubmitHandler = (ele) =>{
    ele.preventDefault();
    let obj ={
        title : title.value,
        info : info.value,
        userId : Math.ceil(Math.random() * 10)
    }
    cl(obj)
    let submitUrl = `${baseUrl}/posts`
    makeAPICall(submitUrl,"POST",JSON.stringify(obj))
    .then(cl)
    .catch(cl)
    ele.target.reset();
}

const onEdithandler =(e)=>{
    let getId = e.dataset.id
    localStorage.setItem('updateId',getId)
    // cl(getId)
    let editUrl =`${baseUrl}/posts/${getId}`
    makeAPICall(editUrl,'GET')
        .then(res => {(res)
            title.value =res.title;
            info.value = res.info;
        })
        .catch(cl)
    updateBtn.classList.remove('d-none')
    submitBtn.classList.add('d-none')
}

const updateHandler = ()=>{
    let updateId = localStorage.getItem('updateId')
    let obj = {
        title : title.value,
        info : info.value
    }
    let updateUrl = `${baseUrl}/posts/${updateId}`
        makeAPICall(updateUrl,'PATCH',JSON.stringify(obj))
        .then(res => cl(res))
        .catch(cl)
    updateBtn.classList.add('d-none')
    submitBtn.classList.remove('d-none')
}

const onDeletehandler = (e)=>{
    let deleteId = e.dataset.id
    let deleteUrl = `${baseUrl}/posts/${deleteId}`
    makeAPICall(deleteUrl,'DELETE')
    .then(cl)
    .catch(cl)
}
function templating(arr){
    let result = "";
    arr.forEach(ele => {
        result +=`       
        <div class="card mb-4">
            <div class="card-body">
                <figure>
                    <figcaption>
                        <h4>${ele.title}</h4>
                        <p>${ele.info}</p>      
                <button class="btn btn-info" data-id="${ele.id}" onclick="onEdithandler(this)">Edit</button>
             <button class="btn btn-danger " data-id="${ele.id}" onclick="onDeletehandler(this)">Delete</button>
                    </figcaption>
                </figure>
            </div>
        </div>
        `
    });
    POSTtemp.innerHTML = result;
}    
postForm.addEventListener("submit",postsubmitHandler);
updateBtn.addEventListener('click',updateHandler)