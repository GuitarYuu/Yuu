const fs = require('fs');

// 1) ja/index：日文人设（CRLF 兼容）
{
  let s = fs.readFileSync('src/pages/ja/index.astro', 'utf8');
  const jobs = [
    [/ {2}import GitHubActivityCalendar from '@\/components\/home\/GitHubActivityCalendar\.astro'\r?\\n/, ''],
    [/<Section title='About'>[\s\S]*?<\/Section>/,
     "<Section title='自己紹介'>\n        <p class='text-muted-foreground'>遠見東学園の2年生、生徒会の一員。放課後は図書館で少女小説を読むのが日課。少しずつ、自分の物語も書き始めてみています。<br/>「好きになろうと、努力してみる」——今日もその練習から。</p>\n        <Button title='自己紹介へ' class='w-fit self-end' href='/Yuu/ja/about' style='ahead' />\n      </Section>"],
    [/<Section title='Education'>[\s\S]*?<\/Section>/,
     "<Section title='所属'>\n        <Card\n          as='a'\n          heading='遠見東学園'\n          subheading='普通科・生徒会'\n          date='2年・在学中'\n          href='#'\n        >\n        </Card>\n      </Section>"],
    [/ {6}\{config\.personal\?\.githubUsername && \([\s\S]*?\)\}\n/, '']
  ];
  for (const [re, b] of jobs) {
    if (!re.test(s)) throw new Error('ja/index regex missing: ' + String(re).slice(0, 60));
    s = s.replace(re, b);
  }
  fs.writeFileSync('src/pages/ja/index.astro', s);
  console.log('ja/index ok');
}

// 2) ja/links：日语措辞
{
  let s = fs.readFileSync('src/pages/ja/links/index.astro', 'utf8');
  const jobs = [
    ["slug: 'common-links', text: 'Common Links'", "slug: 'common-links', text: 'リンク集'"],
    ["slug: 'apply-links', text: 'Apply Links'", "slug: 'apply-links', text: 'リンク申請'"],
    ["<h2 id='common-links' class='text-2xl font-semibold m-0'>Common Links</h2>", "<h2 id='common-links' class='text-2xl font-semibold m-0'>リンク集</h2>"],
    ["Curated blogroll<span class='mx-2 align-middle'>·</span>Explore an interesting world together", '仲間のブログリンク集です'],
    ["<h2 id='apply-links' class='text-2xl font-semibold m-0'>Apply Links</h2>", "<h2 id='apply-links' class='text-2xl font-semibold m-0'>リンク申請</h2>"],
    ["Apply for Blogroll<span class='mx-2 align-middle'>·</span>Submit your site here", '相互リンクのご申請はこちら']
  ];
  for (const [a, b] of jobs) {
    if (!s.includes(a)) throw new Error('ja/links missing: ' + a);
    s = s.split(a).join(b);
  }
  fs.writeFileSync('src/pages/ja/links/index.astro', s);
  console.log('ja/links ok');
}
