const sentence = "hello there from lighthouse labs";
let delayStep = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);// print the char here
  }, delayStep += 50);
}
setTimeout(() => console.log('\n'), 5000);