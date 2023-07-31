//   S:  r a d e n c y   = radency

// P1:  r    d    n c      = rdnc

// P2:    a    e       y   = aey

// S = "FoqLYYXl3CwvSr23b5zQ", P1 = "FoqLYYXl3C", P2 = "wvSr23b5zQ"

const strOrigin = "radency";
const part1 = "rdnc";
const part2 = "aey";

const stringChecker = function (s, p1, p2) {
  const ss = s.split("");
  var pp1 = p1.split("");
  var pp2 = p2.split("");

  var res1 = [];
  var res2 = [];

  ss.forEach((element) => {
    if (element === pp1[0]) {
      res1.push(pp1.shift());
      return;
    }
    if (element === pp2[0]) {
      res1.push(pp2.shift());
      return;
    }
  });

  if (s === res1.join("") + pp1.join("") + pp2.join("")) {
    return true;
  }

  var pp1 = p1.split("");
  var pp2 = p2.split("");

  ss.forEach((element) => {
    if (element === pp2[0]) {
      res2.push(pp2.shift());
      return;
    }
    if (element === pp1[0]) {
      res2.push(pp1.shift());
      return;
    }
  });

  if (s === res2.join("") + pp1.join("") + pp2.join("")) {
    return true;
  }

  return false;
};

console.log(stringChecker(strOrigin, part1, part2));
console.log(stringChecker("FoqLYYXl3CwvSr23b5zQ", "FoqLYYXl3C", "wvSr23b5zQ"));
console.log(stringChecker("RBvtVa xbXl8Dzo6MuZ", "RVvxBbta ", "Xl8Dzo6MuZ"));
console.log(stringChecker("GjhWlMc68SBZ1ZHjlBc", "hc8SBZZHjlBc", "GjWlM61"));
console.log(stringChecker("A17x8MRwrEztm8QVuQQ", "A78RrzmQuQ", "1xMwEt8VQ"));
console.log(stringChecker("1tTWsY2gwDtlxjKzKJQ", "1tTWsY2gw", "DtlxjKzKJQ"));

console.log(stringChecker("w27y7", "27", "w7y"));
console.log(stringChecker(" Hacker News! ", " cker s ", "HaNew!"));
console.log(stringChecker("Hacker News!", "Haerws", "ck Ne!"));
console.log(
  stringChecker(
    "Do you have a cup of tea? Yes, I do!",
    " yo ha a cof tea Yes I",
    "Douveup ?, do!"
  )
);
console.log(stringChecker("Will do", "Wl o", "ild"));

console.log(stringChecker("radency", "rade", "ncyy"));
console.log(stringChecker("mNTbCc6 Zrz5ZfJ2MXN", "mNTbCc6 Z", "rz5ZfJ2MXNN"));
