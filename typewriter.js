const sentence = "hello";

// for (const char of sentence) {
//   process.stdout.write(char);
// }

// Have each letter of a sentence delay its appearance by 50ms longer then the previous letter:

// Initialize variable delay:
let delay = 0;
// Use setTimeout to initiate typing action after 0.5 sec:
setTimeout(() => {
  // Loop through the characters of the sentence:
  for (let char = 0; char < sentence.length; char++) {
    // Increase delay of each character by 50ms:
    delay += 50;
    // Use setTimeout to write each character after a delay:
    setTimeout(() => {
      process.stdout.write(sentence[char]);
    }, delay);
  }
  // add the new line after last character:
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
}, 500);
