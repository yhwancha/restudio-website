const params = new URLSearchParams(location.search);
let current = params.get('screen') || 'identity';
const guided = params.has('guided');
const host = document.querySelector('#screen');
const context = document.querySelector('#context');
let screens, noticeTimer;
const materials = [['component-full-58','용기'],['component-full-59','뚜껑'],['component-full-61','단상자'],['component-full-62','봉인 스티커'],['component-full-60','운송 상자']];
const ancillaries = [['submaterial-ink-jar','용기 인쇄잉크'],['submaterial-ink-carton','상자 인쇄잉크']];
const evidence = [['evidence-spec','사양 / 재질 자료'],['evidence-drawings','도면 / 구조 자료'],['evidence-tests','시험 성적서'],['evidence-hazardous','유해물질 자료'],['evidence-recycled','재생원료 / 재활용 자료'],['evidence-supplier','공급사 TD / DoC'],['evidence-minimization','포장 최소화 / 재사용 자료'],['evidence-other','기타']];
function send(action, screen) { parent.postMessage({type:'regulatory-tour',action,screen},location.origin); }
function notice(text) { const el=document.querySelector('#notice');el.textContent=text;el.classList.add('show');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>el.classList.remove('show'),3500); }
function groupFor(name) { return name.startsWith('component-full')?materials:name.startsWith('submaterial')?ancillaries:[]; }
function show(name) {
 if(!screens[name]) return;
 current=name;host.innerHTML=screens[name];context.replaceChildren();
 for(const [key,label] of groupFor(name)) {
  const button=document.createElement('button');button.textContent=label;button.type='button';button.setAttribute('aria-pressed',String(key===name));button.onclick=()=>show(key);context.append(button);
 }
 for(const input of host.querySelectorAll('input,textarea,select')) {
  if(input.type==='file') continue;
  input.addEventListener('change',()=>notice('체험에서는 가상 예시 데이터를 확인합니다.'));
 }
 if(guided) {
  const next=[...host.querySelectorAll('button')].find(b=>b.textContent.trim()==='다음'||b.textContent.trim()==='진단 진행');
  if(next) {next.disabled=false;next.classList.add('tour-focus');next.dataset.next='true';}
 }
 window.scrollTo(0,0);
 if(name==='report-td'||name==='report-doc') requestAnimationFrame(()=>{
  const target=[...host.querySelectorAll('button')].find(b=>b.textContent.trim()===(name==='report-td'?'TD 리포트':'DoC 리포트'));
  target?.scrollIntoView({block:'start'});
 });
 send('screen',name);
}
window.addEventListener('message',event=>{if(event.origin===location.origin&&event.data?.type==='regulatory-show')show(event.data.screen);});
host.addEventListener('submit',event=>event.preventDefault());
host.addEventListener('click',event=>{
 const button=event.target.closest('button,a,input[type=checkbox]');if(!button)return;
 event.preventDefault();
 if(button.dataset.next){send('next');return;}
 const text=button.textContent.replace(/\s+/g,' ').trim();
 if(text==='이전'){send('previous');return;}
 const step={'1제조자 / 기업 식별':'identity','2품목 정보 입력':'product-primary','3증빙 서류 등록':'evidence-spec','4진단 진행':'diagnosis-run'};
 const normalized=text.replace(/^(\d)\s+/, '$1');
 if(step[normalized]){show(step[normalized]);return;}
 const category=evidence.find(([,label])=>label===text);if(category){show(category[0]);return;}
 if(text==='1차 포장재 (4)'){show('product-primary');return;}
 if(text==='3차 포장재 (1)'){show('product-tertiary');return;}
 if(text==='2차 포장재 (0)'){notice('이 품목에는 등록된 2차 포장재가 없습니다.');return;}
 if(text.includes('다른 품목 선택')){show('product-select');return;}
 if(current==='product-select'&&text==='Lumiere Daily Cream LM-CR060'){show('product-primary');return;}
 if(text.startsWith('자세히 보기')) {
  const buttons=[...host.querySelectorAll('button')].filter(b=>b.textContent.includes('자세히 보기'));
  const index=buttons.indexOf(button);show(current==='product-tertiary'?'component-full-60':materials[index]?.[0]||'component-full-58');return;
 }
 if(text==='TD 리포트'){show('report-td');return;}
 if(text==='DoC 리포트'){show('report-doc');return;}
 if(text==='품목 정보'){show('product-primary');return;}
 if(text==='포장자재 정보'){show('component-full-58');return;}
 if(text==='간단 리포트'||text==='리포트 샘플'){show('report-summary');return;}
 if(text.includes('TD / DoC')){show('report-td');return;}
 const href=button.dataset.originalHref||'';
 const component=href.match(/\/components\/(\d+)$/);if(component&&screens['component-full-'+component[1]]){show('component-full-'+component[1]);return;}
 const ancillary=href.match(/\/sub-materials\/(28|29)$/);if(ancillary){show(ancillary[1]==='28'?'submaterial-ink-jar':'submaterial-ink-carton');return;}
 if(text==='INK-LM01 용기 외부 인쇄잉크'){show('submaterial-ink-jar');return;}
 if(text==='INK-LM02 상자 외부 인쇄잉크'){show('submaterial-ink-carton');return;}
 if(text==='기본 품목 정보'||text==='접기'||text==='펼치기'||text==='내용보기'||text==='내용닫기'||text==='내용확인'){notice('체험 화면에서는 등록된 상세 내용을 펼쳐 두었습니다. 아래로 내려 확인해 주세요.');return;}
 notice('등록된 예시를 확인하는 체험 화면입니다. 안내의 다음 버튼으로 계속할 수 있어요.');
});
fetch('./screens.json').then(r=>r.json()).then(data=>{screens=data;show(current);}).catch(()=>{host.textContent='체험 화면을 불러오지 못했습니다. 새로고침해 주세요.';});
