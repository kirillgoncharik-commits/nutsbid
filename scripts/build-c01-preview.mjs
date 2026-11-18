import {cp,rm,writeFile} from 'node:fs/promises';
if(process.env.CF_PAGES_BRANCH==='main')throw Error('C01 experiment is preview-only');
await rm('dist',{recursive:true,force:true});
await cp('public/c01-playtest','dist',{recursive:true});
await writeFile('dist/_headers',`/*\n  Cache-Control: no-cache, no-transform\n  X-Robots-Tag: noindex, nofollow\n  X-Content-Type-Options: nosniff\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'\n`);
console.log('Built isolated C01 A/B preview. Production publication is blocked.');
