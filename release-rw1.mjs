import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const manifestPath='public/games/cinder-shift/build-manifest.json';
const bytes=await readFile(manifestPath),m=JSON.parse(bytes);
if(m.build_id!=='0.7.0-rw1.b3'||m.source_sha!=='d52853ed6b2d339d6015e64075dc93628cc482fa'||m.source_dirty!==false)throw Error('Unexpected source artifact');
for(const f of m.files){const b=await readFile('public/games/cinder-shift/'+f.path);if(createHash('sha256').update(b).digest('hex')!==f.sha256)throw Error('Changed artifact '+f.path);}
let html=await readFile('public/games/index.html','utf8');
html=html.replace(/content="Cinder Shift 64[^"]*"/,'content="Cinder Shift 64: тестовая браузерная кампания Nuts Games. Пять секторов, 44 комнаты, технологии, развилки и эвакуация."')
.replace('<span>КАМПАНИЯ И ИСПЫТАНИЯ</span>','<span>ПЕРЕРАБОТКА КАМПАНИИ · СПРИНТ 1</span>')
.replace(/<p class="status">[\s\S]*?<\/p>/,'<p class="status">Обновлённая кампания: пять секторов и 44 уникальные комнаты, развилки, переключение питания, двенадцать технологий и бой с Регулятором. Добавлены реакции на попадания, щит и ремонт. Баланс и темп ещё дорабатываются. Есть EN/RU, музыка, сенсорное управление и геймпад.</p>')
.replace(/<p class="version">[\s\S]*?<\/p>/,'<p class="version">Сборка 0.7.0-rw1.b3 · d52853e · тестовое превью · EN/RU · клавиатура, сенсор, геймпад</p>');
await writeFile('public/games/index.html',html);
const hash=createHash('sha256').update(bytes).digest('hex');
await writeFile('docs/cinder-shift-rw1-release.md',[
'# Cinder Shift 64: Sprint 1 production preview',
'',
'Published candidate: 0.7.0-rw1.b3. Game source: d52853ed6b2d339d6015e64075dc93628cc482fa (documentation-only successor of tested code 483484fbf206e5fcbf03b525ac0d9a9db3d91bf2).',
'',
'Manifest SHA-256: '+hash+'. All '+m.files.length+' listed resource hashes verified.',
'',
'Player changes: six-room Airlock, nine-room Reactor, real power choices, staged threats, HP/shield/repair feedback, two-phase Regulator and evacuation. Campaign contains 44 unique rooms and 41 on a selected path.',
'',
'Validation: 276 regression tests pass; targeted three-browser, save, sector, boss and fresh-profile campaign checks pass. The whole-site check runs before this artifact commit.',
'',
'Known limits: sector-wide upgraded-build comparisons, independent first-player pacing (25–35 minutes), human audiovisual review and physical devices remain open. Publishing this development preview does not close M-RW1 acceptance.',
'',
'Rollback: revert this site artifact commit. Previous hashed assets are retained for tabs opened before the update.',
'',
'Production URL: https://nuts.bid/games/cinder-shift/',
''].join('\n'));
console.log(JSON.stringify({build:m.build_id,source:m.source_sha,manifest_sha256:hash,files:m.files.length}));
