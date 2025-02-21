function order(callback){
    setTimeout(() => {
        const data = {id:"1",name :"Mango"};
        callback(data);
    }, 2000);
}
function processData(input , callback){

    processed = `Processed : ${input.name}`;
    callback(processed);

}

function saveData(input ,callback){
    savedData =`Saved Data :${input}`;
    callback(savedData)
}
// this is the callback hell which is funtion of callback inside the other function
order(function(result1){
    processData(result1 ,function (result2){
             saveData(result2 ,function (result3){
                   console.log("finalresult :" , result3);
             })
    })
});