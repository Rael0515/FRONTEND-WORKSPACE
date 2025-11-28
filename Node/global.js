console.log("filename: ", __filename);
console.log("dirname: ", __dirname);

process.argv.forEach(function (item, index) {
  console.log(index + " : " + typeof item + " : ", item);
});
