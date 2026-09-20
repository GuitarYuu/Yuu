const fs = require('fs');
let s = fs.readFileSync('src/pages/ja/index.astro', 'utf8');
const jobs = [
  ["<Section title='About'>", "<Section title='自己紹介'>"],
  ["远见东学园二年级，学生会的一员。放课后常泡在图书馆读少女小说，也开始尝试着把自己的故事写下来。",
   "遠見東学園の2年生、生徒会の一員。放課後は図書館で少女小説を読むのが日課。少しずつ、自分の物語も書き始めてみています。"],
  ["<Button title='More about me' class='w-fit self-end' href='/Yuu/ja/about' style='ahead' />",
   "<Button title='詳しくはこちら' class='w-fit self-end' href='/Yuu/ja/about' style='ahead' />"],
  ["<Section title='Education'>", "<Section title='所属'>"],
  ["heading='远见东学园'", "heading='遠見東学園'"],
  ["subheading='普通科 · 学生会'", "subheading='普通科・生徒会'"],
  ["date='二年级 · 在读中'", "date='2年・在学中'"],
  ["<Section title='Statistics'>", "<Section title='統計'>"]
];
for (const [a, b] of jobs) {
  if (!s.includes(a)) throw new Error('missing: ' + a);
  s = s.replace(a, b);
}
fs.writeFileSync('src/pages/ja/index.astro', s);
console.log('ja/index 日本語化 ok');
