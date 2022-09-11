// let cl  = console.log;
// let formsubmit = document.getElementById('OnForm')
// let title = document.getElementById('title');
// let info = document.getElementById('info');
// let addpost = document.getElementById('AddPost');
// let myinfo = document.getElementById('myinfo');

// let baseUrl = `http://localhost:3000`
// let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

// localStorage.setItem('tokenvalue',token)

// const MakeAPIcall =(Url,methodName,objBody)=>{
//    return fetch(Url,{
//         method :methodName,
//         body :objBody,
//         headers:{
//             "content-type" :"application/json charset=UTF-8",
//             "auth":localStorage.getItem('tokenvalue')
//         }
//     }).then(res => res.json())

// }
// let infoUrl =`${baseUrl}/posts`
// MakeAPIcall(infoUrl,"GET")
//     .then(data => templating(data))
//     .catch(cl)

// const onSubmitHandler = (e)=>{
//     e.preventDefault()
//     // cl('event triggred')
//     let obj ={
//             title : title.value,
//             info : info.value,
//             userId :Math.ceil(Math.random() * 10)
//         }
//         cl(obj)
//         // let getInfoUrl =  `${baseUrl}/posts`
//         // MakeAPIcall(getInfoUrl,"POST",JSON.stringify(obj))
//         //     .then(cl)
//         //     .catch(cl)
//         // e.target.reset()
//     }
    
// const templating = (arr)=>{
//     let final ="";
//     arr.forEach(ele => {
//         final +=`
//         <div class="card">
//                         <div class="card-body">
//                             <figure>
//                                 <figcaption>
//                                     <h3>${ele.title}</h3>
//                                     <p>${ele.info}</p>
//                                 </figcaption>
//                             </figure>
//                         </div>
//                     </div>
//         `
//     });
//   myinfo.innerHTML = final;  
// }
// formsubmit.addEventListener('submit',onSubmitHandler)