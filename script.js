const CATEGORIES = {
  misto_c:{label:'Misto C', size:16, layout:'16'},
  masc_avancado:{label:'Masculino Avançado', size:16, layout:'16'},
  masc_interno:{label:'Masculino Interno', size:16, layout:'16'},
  masc_iniciante_c:{label:'Masculino Iniciante + C', size:24, layout:'24'},
  misto_aprendiz:{label:'Misto Aprendiz', size:12, layout:'12'}
};

let active='misto_c';
let states={};
const IS_PUBLIC = new URLSearchParams(window.location.search).get('view') === '1';

const TABLE16 = {
  entries: {
    JG1:['T1','T2'], JG2:['T3','T4'], JG3:['T5','T6'], JG4:['T7','T8'],
    JG5:['T9','T10'], JG6:['T11','T12'], JG7:['T13','T14'], JG8:['T15','T16'],
    JG9:['V1','V2'], JG10:['V3','V4'], JG11:['V5','V6'], JG12:['V7','V8'],
    JG21:['V9','V10'], JG22:['V11','V12'],
    JG13:['P8','P7'], JG14:['P6','P5'], JG15:['P4','P3'], JG16:['P2','P1'],
    JG17:['P15','V13'], JG18:['P16','V14'], JG19:['P11','V15'], JG20:['P12','V16'],
    JG23:['V17','V18'], JG24:['V19','V20'],
    JG25:['P22','V23'], JG26:['P21','V24'],
    JG27:['V21','V25'], JG28:['V22','V26'],
    JG29:['P27','P28'], JG30:['V27','V28']
  },
  final:'JG30',
  third:'JG29',
  positions: {
    JG1:[70,85],JG2:[70,170],JG3:[70,275],JG4:[70,360],JG5:[70,485],JG6:[70,570],JG7:[70,675],JG8:[70,760],
    JG9:[330,130],JG10:[330,315],JG11:[330,530],JG12:[330,715],
    JG21:[590,225],JG22:[590,625],JG27:[900,225],JG28:[900,625],JG30:[900,425],
    JG29:[1260,425],JG25:[1260,225],JG26:[1260,625],JG23:[1600,225],JG24:[1600,625],
    JG17:[1600,95],JG18:[1600,345],JG19:[1600,520],JG20:[1600,770],
    JG13:[1430,95],JG14:[1430,345],JG15:[1430,520],JG16:[1430,770]
  }
};

const TABLE12 = {
  entries: {
    JG1:['T1','T2'], JG2:['T3','T4'], JG3:['T5','T6'], JG4:['T7','T8'],
    JG5:['T9','V1'], JG6:['V2','T10'], JG7:['T11','V3'], JG8:['V4','T12'],
    JG16:['V5','V6'], JG15:['V7','V8'],
    JG12:['P3','P8'], JG11:['P4','P7'], JG10:['P2','P6'], JG9:['P1','P5'],
    JG14:['V10','V9'], JG13:['V12','V11'],
    JG17:['P15','V14'], JG18:['P16','V13'],
    JG19:['V16','V17'], JG20:['V15','V18'],
    JG21:['P19','P20'], JG22:['V19','V20']
  },
  final:'JG22',
  third:'JG21',
  positions: {
    JG1:[70,165],JG2:[70,265],JG3:[70,515],JG4:[70,615],
    JG5:[330,130],JG6:[330,330],JG7:[330,470],JG8:[330,670],
    JG16:[590,230],JG15:[590,570],JG19:[845,310],JG20:[845,650],JG22:[1065,480],
    JG21:[1280,625],JG17:[1470,205],JG18:[1470,605],
    JG12:[1625,120],JG11:[1625,270],JG10:[1625,520],JG9:[1625,670],
    JG13:[1625,390],JG14:[1625,780]
  }
};

const TABLE24 = {
  entries: {
    JG1:['T1','T2'], JG2:['T3','T4'], JG3:['T5','T6'], JG4:['T7','T8'],
    JG5:['T9','T10'], JG6:['T11','T12'], JG7:['T13','T14'], JG8:['T15','T16'],
    JG9:['T17','V1'], JG10:['V2','T18'], JG11:['T19','V3'], JG12:['V4','T20'],
    JG13:['T21','V5'], JG14:['V6','T22'], JG15:['T23','V7'], JG16:['V8','T24'],
    JG25:['V9','V10'], JG26:['V11','V12'], JG27:['V13','V14'], JG28:['V15','V16'],
    JG37:['V25','V26'], JG38:['V27','V28'],
    JG43:['V37','V41'], JG44:['V38','V42'], JG46:['V43','V44'],
    JG24:['P16','P1'], JG23:['P2','P15'], JG22:['P14','P3'], JG21:['P4','P13'],
    JG20:['P12','P5'], JG19:['P6','P11'], JG18:['P10','P7'], JG17:['P8','P9'],
    JG29:['V24','V23'], JG30:['V22','V21'], JG31:['V20','V19'], JG32:['V18','V17'],
    JG33:['V29','P25'], JG34:['V30','P26'], JG35:['V31','P27'], JG36:['V32','P28'],
    JG39:['V33','V34'], JG40:['V35','V36'],
    JG41:['P38','V39'], JG42:['P37','V40'],
    JG45:['P43','P44']
  },
  final:'JG46',
  third:'JG45',
  positions: {
    JG1:[60,70],JG2:[60,180],JG3:[60,300],JG4:[60,410],JG5:[60,540],JG6:[60,650],JG7:[60,770],JG8:[60,880],
    JG9:[330,70],JG10:[330,180],JG11:[330,300],JG12:[330,410],JG13:[330,540],JG14:[330,650],JG15:[330,770],JG16:[330,880],
    JG25:[600,125],JG26:[600,355],JG27:[600,605],JG28:[600,835],JG37:[870,245],JG38:[870,720],
    JG43:[1125,300],JG44:[1125,760],JG46:[1370,530],
    JG45:[1595,650],JG41:[1560,300],JG42:[1560,760],JG39:[1815,220],JG40:[1815,680],
    JG33:[2070,125],JG34:[2070,355],JG35:[2070,605],JG36:[2070,835],
    JG29:[2260,125],JG30:[2260,355],JG31:[2260,605],JG32:[2260,835],
    JG24:[2400,70],JG23:[2400,180],JG22:[2400,300],JG21:[2400,410],JG20:[2400,540],JG19:[2400,650],JG18:[2400,770],JG17:[2400,880]
  }
};

function table(){ const l=CATEGORIES[active].layout; return l==='16'?TABLE16:l==='24'?TABLE24:TABLE12; }
function layout(){ return CATEGORIES[active].layout; }

function ensureState(){
  const c=CATEGORIES[active], tab=table();
  if(!states[active]){
    const matches={};
    Object.keys(tab.entries).forEach(id=>matches[id]={s:['','']});
    states[active]={teams:Array.from({length:c.size},()=>''),matches};
  }
  return states[active];
}

function selectCategory(id){
  active=id;
  ensureState();
  renderTeamGrid();
  render();
}

function renderTeamGrid(){
  const st=ensureState();
  document.getElementById('teamGrid').innerHTML=st.teams.map((v,i)=>`
    <input class="team-input" placeholder="Dupla ${i+1}" value="${esc(v)}" ${IS_PUBLIC?'readonly':''} oninput="if(!IS_PUBLIC){states[active].teams[${i}]=this.value; render();}">
  `).join('');
}

function resolveToken(token){
  if(!token) return '';
  token=String(token).trim().toUpperCase();
  if(token.startsWith('T')) return ensureState().teams[parseInt(token.slice(1))-1] || '';
  const kind=token[0], id='JG'+parseInt(token.slice(1));
  const res=resultOf(id);
  return kind==='V'?res.winner:res.loser;
}

function resultOf(id){
  const tab=table(), m=ensureState().matches[id] || {s:['','']}, entries=tab.entries[id] || ['',''];
  const teams=[resolveToken(entries[0]), resolveToken(entries[1])];
  const a=parseInt(m.s[0]), b=parseInt(m.s[1]);
  if(Number.isNaN(a)||Number.isNaN(b)||a===b) return {winner:'', loser:'', winSlot:null, loseSlot:null};
  const winSlot=a>b?0:1, loseSlot=winSlot===0?1:0;
  return {winner:teams[winSlot]||'', loser:teams[loseSlot]||'', winSlot, loseSlot};
}

function render(){
  const c=CATEGORIES[active], tab=table(), st=ensureState(), board=document.getElementById('board');
  document.getElementById('title').textContent=`${c.label} — ${c.size} duplas`;
  board.className='board w'+layout();
  board.innerHTML='<svg class="lines" id="lines"></svg>';
  addBadges(); addCenterLabels();

  Object.keys(tab.positions).forEach(id=>{
    if(!st.matches[id]) st.matches[id]={s:['','']};
    const [x,y]=tab.positions[id];
    const el=document.createElement('div');
    let cls='match';
    if(id===tab.final) cls+=' final';
    if(id===tab.third) cls+=' third';
    el.className=cls;
    el.style.left=x+'px';
    el.style.top=y+'px';
    el.innerHTML=matchHtml(id);
    board.appendChild(el);
  });

  drawLines();
  setZoom(document.getElementById('zoom').value);
}

function matchHtml(id){
  const tab=table(), st=ensureState(), entries=tab.entries[id] || ['',''];
  const teams=[resolveToken(entries[0]), resolveToken(entries[1])];
  const m=st.matches[id] || {s:['','']};
  const res=resultOf(id);
  const c0=res.winSlot===0?'win':res.loseSlot===0?'lose-row':'';
  const c1=res.winSlot===1?'win':res.loseSlot===1?'lose-row':'';
  let label=`${entries[0]||''} × ${entries[1]||''}`;
  if(id===tab.final) label='Final';
  if(id===tab.third) label='3º lugar';

  return `<div class="match-head"><span class="match-id">${id}</span><span class="flow">${label}</span></div>
  <div class="row ${c0}"><input class="name" value="${esc(teams[0])}" placeholder="${entries[0]||'Dupla'}" readonly><input class="score" type="number" value="${m.s[0]}" ${IS_PUBLIC?'readonly':''} oninput="setScore('${id}',0,this.value)"></div>
  <div class="row ${c1}"><input class="name" value="${esc(teams[1])}" placeholder="${entries[1]||'Dupla'}" readonly><input class="score" type="number" value="${m.s[1]}" ${IS_PUBLIC?'readonly':''} oninput="setScore('${id}',1,this.value)"></div>`;
}

function setScore(id,slot,val){
  if(IS_PUBLIC) return;
  ensureState().matches[id].s[slot]=val;
  render();
}

function clearScores(){
  if(IS_PUBLIC) return;
  Object.values(ensureState().matches).forEach(m=>m.s=['','']);
  render();
}

function resetCategory(){
  if(IS_PUBLIC) return;
  delete states[active];
  ensureState();
  renderTeamGrid();
  render();
}

function drawLines(){
  const tab=table(), svg=document.getElementById('lines'), destMap={};

  Object.entries(tab.entries).forEach(([dest,inputs])=>{
    inputs.forEach((tok,slot)=>{
      if(!tok || tok.startsWith('T')) return;
      if(!destMap[tok]) destMap[tok]=[];
      destMap[tok].push({dest,slot});
    });
  });

  Object.entries(destMap).forEach(([tok,list])=>{
    const src='JG'+parseInt(tok.slice(1)), isLose=tok.startsWith('P');
    if(!tab.positions[src]) return;
    list.forEach(({dest,slot})=>{
      if(tab.positions[dest]) line(svg,tab.positions[src],tab.positions[dest],isLose,slot);
    });
  });
}

function line(svg,a,b,isLose,slot){
  const sx=a[0]+158, sy=a[1]+31, ex=b[0], ey=b[1]+(slot===1?46:24);
  const mid=(sx+ex)/2;
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');
  path.setAttribute('class','line'+(isLose?' lose':''));
  path.setAttribute('d',`M${sx} ${sy} H${mid} V${ey} H${ex}`);
  svg.appendChild(path);
}

function addBadges(){
  const board=document.getElementById('board'), l=layout();
  const data = l==='24'
    ? [['Chave Principal',80,25,'green'],['Repescagem / Perdedores',1775,25,'orange'],['Grande Final',1335,500,'gold']]
    : l==='16'
    ? [['Chave Principal',80,35,'green'],['Chave de Perdedores',1450,35,'orange'],['Grande Final',855,375,'gold']]
    : [['Chave Principal',80,95,'green'],['Chave de Perdedores',1450,80,'orange'],['Grande Final',1010,425,'gold']];

  data.forEach(([t,x,y,c])=>{
    const d=document.createElement('div');
    d.className='badge '+c;
    d.style.left=x+'px';
    d.style.top=y+'px';
    d.innerHTML=t;
    board.appendChild(d);
  });
}

function addCenterLabels(){
  const board=document.getElementById('board');
  let labels=[];

  if(layout()==='16'){
    labels=[
      ['Semifinal A<br>Jogo 27',760,185],
      ['x',850,270],
      ['Semifinal B<br>Jogo 28',760,585],
      ['x',850,670],
      ['Campeão',940,505],
      ['3º lugar',1325,505]
    ];
  } else if(layout()==='12'){
    labels=[
      ['Semifinal A<br>Jogo 19',705,255],
      ['x',835,340],
      ['Semifinal B<br>Jogo 20',705,595],
      ['x',835,680],
      ['Campeã',1095,560],
      ['3º lugar',1280,700]
    ];
  } else {
    labels=[
      ['Semifinal A<br>Jogo 43',1010,260],
      ['x',1110,365],
      ['Semifinal B<br>Jogo 44',1010,720],
      ['x',1110,825],
      ['Campeão',1410,610],
      ['3º lugar<br>Jogo 45',1595,620]
    ];
  }

  labels.forEach(([txt,x,y])=>{
    const d=document.createElement('div');
    d.className='badge center-label';
    d.style.left=x+'px';
    d.style.top=y+'px';
    d.innerHTML=txt;
    board.appendChild(d);
  });
}

function setZoom(v){
  document.getElementById('board').style.transform=`scale(${parseFloat(v)})`;
}

function toggleFullscreen(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen?.();
  }else{
    document.exitFullscreen?.();
  }
}

function toggleCleanMode(){
  document.body.classList.toggle('clean-mode');
}


function copyPublicLink(){
  const url = new URL(window.location.href);
  url.searchParams.set('view','1');
  navigator.clipboard?.writeText(url.toString());
  alert('Link público copiado! Quem abrir por esse link só poderá visualizar e trocar categorias.');
}

function applyPublicMode(){
  if(IS_PUBLIC){
    document.body.classList.add('public-mode');
  }
}

function esc(s){
  return String(s||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

applyPublicMode();
ensureState();
renderTeamGrid();
render();
