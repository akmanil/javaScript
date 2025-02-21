//to avoid the callback hell we are used the promises

function doSomethingAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("task will done");
    }, 2000);
  });
}
//in promise we will definetly adding new to create a promises
//and inside promises to do something definetly use resolve

// doSomethingAsync().then((result) => {
//   console.log(result);
// });
//this will done in promises format



// lets do in async/await


// async function run(){
//     const result = await doSomethingAsync();
//     console.log(result)
// }
// run()

// we use try catch for error handling

async function run(){
    try{
        const result = await doSomethingAsync();
        console.log(result);
    }catch(error){
        console.error("Error",error);
    }
}
run();