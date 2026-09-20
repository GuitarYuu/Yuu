const fs = require('fs');

// 1) astro.config：locales 加 ja
{
  let s = fs.readFileSync('astro.config.mjs', 'utf8');
  if (!s.includes("locales: ['zh', 'en', 'ja']")) {
    s = s.replace("locales: ['zh', 'en'],", "locales: ['zh', 'en', 'ja'],");
    fs.writeFileSync('astro.config.mjs', s);
  }
  console.log('locales ok');
}

// 2) 菜单换人设板块
{
  let s = fs.readFileSync('src/site.config.ts', 'utf8');
  const oldMenu = /      \{ title: 'Blog', link: '\/' \},\r?\n      \{ title: 'Academic', link: '\/academic' \},\r?\n      \{ title: 'Projects', link: '\/projects' \},\r?\n      \{ title: 'Links', link: '\/links' \},\r?\n      \{ title: 'About', link: '\/about' \}/;
  if (!oldMenu.test(s)) throw new Error('menu not found');
  s = s.replace(oldMenu, [
    "      { title: 'Blog', link: '/' },",
    "      { title: 'Reading', link: '/reading' },",
    "      { title: 'Works', link: '/works' },",
    "      { title: 'Friends', link: '/links' },",
    "      { title: 'About', link: '/about' }"
  ].join('\n'));
  fs.writeFileSync('src/site.config.ts', s);
  console.log('menu ok');
}

// 3) Copyright：移除咖啡赞助条
{
  let s = fs.readFileSync('src/components/pages/Copyright.astro', 'utf8');
  const re = /\r?\n<div class='mx-6 rounded-b-xl border border-t-0 px-3 pb-1\.5 pt-1 sm:mx-8 sm:px-4'>[\s\S]*?<\/a>\r?\n<\/div>/;
  if (!re.test(s)) throw new Error('coffee strip not found');
  s = s.replace(re, '');
  fs.writeFileSync('src/components/pages/Copyright.astro', s);
  console.log('coffee strip removed');
}

// 4) ja/index：日文人设
{
  let s = fs.readFileSync('src/pages/ja/index.astro', 'utf8');
  const jobs = [
    ["import GitHubActivityCalendar from '@/components/home/GitHubActivityCalendar.astro'\n", ''],
    [/<Section title='About'>[\s\S]*?<\/Section>/,
     "<Section title='自己紹介'>\n        <p class='text-muted-foreground'>遠見東学園の2年生、生徒会の一員。放課後は図書館で少女小説を読むのが日課。少しずつ、自分の物語も書き始めてみています。<br/>「好きになろうと、努力してみる」——今日もその練習から。</p>\n        <Button title='自己紹介へ' class='w-fit self-end' href='/Yuu/ja/about' style='ahead' />\n      </Section>"],
    [/<Section title='Education'>[\s\S]*?<\/Section>/,
     "<Section title='所属'>\n        <Card\n          as='a'\n          heading='遠見東学園'\n          subheading='普通科・生徒会'\n          date='2年・在学中'\n          href='#'\n        >\n        </Card>\n      </Section>"],
    ["Section title='Statistics'", "Section title='統計'"],
    [/ {6}\{config\.personal\?\.githubUsername && \([\s\S]*?\)\}\n/, '']
  ];
  for (const [a, b] of jobs) {
    if (!s.includes(a)) throw new Error('ja/index missing: ' + String(a).slice(0, 60));
    s = s.replace(a, b);
  }
  fs.writeFileSync('src/pages/ja/index.astro', s);
  console.log('ja/index ok');
}

// 5) ja/links：由 en 镜像改为日语措辞
{
  let s = fs.readFileSync('src/pages/ja/links/index.astro', 'utf8');
  const jobs = [
    ["slug: 'common-links', text: 'Common Links'", "slug: 'common-links', text: 'リンク集'"],
    ["slug: 'apply-links', text: 'Apply Links'", "slug: 'apply-links', text: 'リンク申請'"],
    ["<h2 id='common-links' class='text-2xl font-semibold m-0'>Common Links</h2>", "<h2 id='common-links' class='text-2xl font-semibold m-0'>リンク集</h2>"],
    ['Curated blogroll<span class=\'mx-2 align-middle\'>·</span>Explore an interesting world together', '仲間のブログリンク集です'],
    ["<h2 id='apply-links' class='text-2xl font-semibold m-0'>Apply Links</h2>", "<h2 id='apply-links' class='text-2xl font-semibold m-0'>リンク申請</h2>"],
    ['Apply for Blogroll<span class=\'mx-2 align-middle\'>·</span>Submit your site here', '相互リンクのご申請はこちら']
  ];
  for (const [a, b] of jobs) {
    if (!s.includes(a)) throw new Error('ja/links missing: ' + a);
    s = s.split(a).join(b);
  }
  fs.writeFileSync('src/pages/ja/links/index.astro', s);
  console.log('ja/links ok');
}
