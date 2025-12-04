// const myPromise=new Promise((resolve,reject)=>{
//     if(true){
//         resolve("Success Call");
//     }
//     else{
//         reject("API Failed");
//     }
// });
// myPromise.then((result)=>console.log("Result:",result))
//          .catch((error)=>console.log(error))

function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        console.log("Fun1 Is Called");
        resolve({Name:"Bhanu"});
    })
}
function getUserName(Name){
    return new Promise((resolve,reject)=>{
        console.log("Fun2 is Called");
        resolve({RollNo:"123"});
    })
}
function getUserRollNo(RollNo){
    return new Promise((resolve,reject)=>{
        console.log("Fun3 is Called");
        resolve("UserRollNo is getting from RollNo",RollNo);
    })
}
getUserDetails("123")
    .then((result)=>{return getUserName(result.Name)})
    .then((result)=>{return getUserRollNo(result.RollNo)})
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))