const CACHE="the-worship-calendar-v1-66";const ASSETS=["./","./index.html","./manifest.webmanifest","./icon.svg","./assets/logo.png","./assets/icon-192.png","./assets/icon-512.png","./assets/favicon.png","./assets/apple-touch-icon.png"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).catch(()=>caches.match("./index.html"))))});
function cleanSlateV167(){
 try{
  if(localStorage.getItem('twc-v167-clean-slate')==='yes') return;
  if(typeof data!=='undefined'){
    data.members=(data.members||[]).filter(m=>m.role==='admin'||m.email==='admin');
    if(!data.members.length){
      data.members=[{id:'admin',name:'Administrator',email:'admin',password:'admin123',role:'admin'}];
    }
    data.ministries=[];
    data.roles=[];
    data.templates=[];
    data.services=[];
    data.rosters=[];
    data.availability=[];
    localStorage.setItem('twc-v167-clean-slate','yes');
    if(typeof save==='function') save();
  }
 }catch(e){}
}
