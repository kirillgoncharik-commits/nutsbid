import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const bytes=await readFile('public/games/cinder-shift/build-manifest.json'),m=JSON.parse(bytes);
if(m.build_id!=='0.7.0-rw1.b5'||m.source_sha!=='07e18683b664d9443d81ec07ffcec295f44d4030'||m.source_dirty!==false)throw Error('Unexpected source artifact');
for(const f of m.files){const b=await readFile('public/games/cinder-shift/'+f.path);if(createHash('sha256').update(b).digest('hex')!==f.sha256)throw Error('Changed artifact '+f.path);}
let html=await readFile('public/games/index.html','utf8');
html=html.replace(/<p class="status">[\s\S]*?<\/p>/,'<p class="status">Тест спринта 1: бронированный стрелок в Архиве, прицельный выстрел и окно контратаки. Улучшены повторный прыжок и звуки начала боя. Пять секторов, 44 комнаты, технологии и Регулятор. Баланс и темп дорабатываются.</p>')
.replace(/<p class="version">[\s\S]*?<\/p>/,'<p class="version">Сборка 0.7.0-rw1.b5 · 07e1868 · отдельное тестовое превью · EN/RU</p>');
await writeFile('public/games/index.html',html);
const hash=createHash('sha256').update(bytes).digest('hex');
await writeFile('docs/cinder-shift-rw1-b5-preview.md',[
'# Cinder Shift 64: Sprint 1 B5 preview','',
'Preview build: 0.7.0-rw1.b5. Game source: 07e18683b664d9443d81ec07ffcec295f44d4030.','',
'Manifest SHA-256: '+hash+'. All '+m.files.length+' resource hashes verified. Clean source checkout.','',
'Changes since production B3: repeated-jump edge case, first-combat audio voice reset, armored aimed guard in Archive M4H with locked trajectory and counterattack window. Campaign ruleset campaign-rework8.','',
'Source PR: https://github.com/kirillgoncharik-commits/web-games-nuts/pull/9 . B5 browser, full-route and native-touch validation is tracked there.','',
'This branch is a Cloudflare preview. Production main remains B3. M-RW1 is IN_PROGRESS / NOT ACCEPTED; independent first-player pacing, human audiovisual review and physical devices remain open.','',
'Previous hashed resources are retained for existing tabs.',''
].join('\n'));
console.log(JSON.stringify({build:m.build_id,source:m.source_sha,manifest_sha256:hash,files:m.files.length}));
