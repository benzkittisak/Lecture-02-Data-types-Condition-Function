//Date function returnn milliseconds that have elapsed
//since midnight on January 1, 1970, UTC
// this example takes 2 seconds to run
const start = Date.now();

console.log('string timer...');
// expected output: starting timer...

setTimeout(()=>{
    const mills = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(mills / 1000)}`);
    // expected output: seconds elapsed = 2
},2000);