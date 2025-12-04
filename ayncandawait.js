function fun1(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userroll:"678"}) //API CALL
        },2000);
    })
};
const myfun=async()=>{
    console.log("123")
    const result=await fun1("123");
    console.log(result);
    console.log("456")
    console.log("TEsting");
};
myfun();
//asyncawait