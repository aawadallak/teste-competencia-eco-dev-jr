function repeatedString(s, n) {
  let a = 0;

  if (n >= s.length) {
    let quantintyOfAs = [...s].filter(e => e === 'a').length;
    a = Math.floor(n / s.length) * quantintyOfAs;
  }

  let splitNumber = n % s.length;

  for (let i = 0; i < splitNumber; i++) {
    if (s[i] === "a") a++;
  }

  return a;
};
