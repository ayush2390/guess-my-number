let num = Math.trunc(Math.random() * 6) + 1;

while (num !== 6) {
  console.log(`Roll the dice ${num}`);
  num = Math.trunc(Math.random() * 6) + 1;
}
