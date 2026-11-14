import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const bytes=await readFile('public/games/cinder-shift/build-manifest.json'),m=JSON.parse(bytes);
if(m.build_id!=='0.7.0-rw1.b6'||m.source_sha!=='a390b80e4488e0cde4596ba64631098c030843d4'||m.source_dirty!==false)throw Error('Unexpected source artifact');
for(const f of m.files){const b=await readFile('public/games/cinder-shift/'+f.path);if(createHash('sha256').update(b).digest('hex')!==f.sha256)throw Error('Changed artifact '+f.path);}
let html=await readFile('public/games/index.html','utf8');
html=html.replace(/<p class="status">[\s\S]*?<\/p>/,'<p class="status">Спринт 1: пять секторов и 44 комнаты, развилки, двенадцать технологий и Регулятор с эвакуацией. Прицельный стрелок в Архиве; отражённый Splitter попадает в открытое ядро босса. EN/RU, сенсорное управление и геймпад.</p>')
.replace(/<p class="version">[\s\S]*?<\/p>/,'<p class="version">Сборка 0.7.0-rw1.b6 · a390b80 · инженерное превью спринта 1 · EN/RU</p>');
await writeFile('public/games/index.html',html);
const hash=createHash('sha256').update(bytes).digest('hex');
await writeFile('docs/cinder-shift-rw1-b6-preview.md',[
'# Cinder Shift 64: Sprint 1 B6 preview','',
'Build 0.7.0-rw1.b6, clean game source a390b80e4488e0cde4596ba64631098c030843d4.','',
'Manifest SHA-256: '+hash+'. All '+m.files.length+' listed resource hashes verified.','',
'B6 adds a useful boss ricochet path and fixes angled projectiles at the open armor aperture. Campaign ruleset campaign-rework9. Base and other loadouts retain the same 32 boss HP, four required exposure windows and both phases.','',
'Source verification and videos: https://github.com/kirillgoncharik-commits/web-games-nuts/pull/9 . Final exact-source regression and full-route results are recorded there.','',
'This branch is a separate development preview; production main stays B3. Human acceptance is deferred outside the current Sprint 1 gate by user instruction on 14 November. Human first-play duration and physical devices are not claimed verified.','',
'Previous hashed resources remain available to older tabs.',''
].join('\n'));
console.log(JSON.stringify({build:m.build_id,source:m.source_sha,manifest_sha256:hash,files:m.files.length}));
