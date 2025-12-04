function fun1(id, fun2){
    console.log("ID:", id);
    fun2({ username: "Bhanu" });
}
function fun2(name,fun3){
    console.log("Name:", name);
    fun3({useremail:"gunipebhanusatya@gmail.com"});
}
function fun3(email){
    console.log("Email:",email);
}
// fun1("123",function(name){
//     fun2(name,function(email){
//         fun3(email)
//     })
// });