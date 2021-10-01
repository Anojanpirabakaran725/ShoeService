let seconds = 1;
const myProm = () => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
});

myProm()
  .then(() => {
    console.log("0 seconds");
    myProm().then(() => {
      console.log("1 second")
      myProm().then( () => {
        console.log("2 seconds")
      }
      )
    })
  })
