
// ─── GLOSSARY ────────────────────────────────────────────────────────────────
const G = {
  'OARS':{def:'The four core tools of Motivational Interviewing: Open questions, Affirming, Reflecting, Summarising.',ex:'Instead of "Have you tried calling the hospital?" use OARS: "What feels most overwhelming right now?"'},
  'open questions':{def:'Questions that cannot be answered yes or no — they invite the person to explore.',ex:'Closed: "Are you worried?" → Open: "What worries you most?"'},
  'affirming':{def:'Noticing and naming a person\'s strength, effort, or courage without being patronising.',ex:'"It takes real courage to come here and talk about something this painful."'},
  'reflecting':{def:'Saying back the meaning or feeling underneath what someone said — in your own words.',ex:'They say: "I don\'t know what to do." You: "It sounds like you feel lost right now."'},
  'summarising':{def:'Pulling together the key threads of what someone has shared — the bigger picture.',ex:'"So from what you\'ve shared, it sounds like you\'re exhausted and carrying this alone."'},
  'change talk':{def:'When a client says something that leans toward wanting things to be different. Your job is to notice it, reflect it back, and amplify it.',ex:'"I just want him to be happy again." This is change talk — reflect it: "So part of you still holds onto that image of him well and happy."'},
  'decisional balance':{def:'Exploring both sides — what is hard (the costs) and what the person wants (the benefits of change). Helps clients hear their own motivation.',ex:'"On one hand things are very hard right now... and on the other hand, what do you hope for?"'},
  'rolling with resistance':{def:'When someone pushes back, you go with it rather than arguing. Fighting resistance makes it stronger.',ex:'"You came here even though you didn\'t feel you needed to — that tells me how much you care."'},
  'developing discrepancy':{def:'Gently helping someone notice the gap between where they are and where they want to be — without lecturing.',ex:'"You\'ve said how much you love him, and I\'m also hearing some of what\'s been happening. How do you hold those two things together?"'},
  'empathic confrontation':{def:'Gently pointing out a contradiction between what someone says and what they do — done with warmth, not challenge.',ex:'"I notice you\'ve said you\'ve wanted this for years — and each time we get close, a new reason appears."'},
  'paraphrase':{def:'Putting what someone said in your own words — shorter and cleaner, capturing the meaning.',ex:'They say: "Everyone says I should be over it." You: "So while others feel you should have moved on, for you it still feels very present."'},
  'cultural humility':{def:'Approaching someone from a different background with curiosity and openness rather than assumptions.',ex:'"I want to understand your experience of this. What has this been like for your family?"'},
  'ambivalence':{def:'Wanting two contradictory things at once. Normal and central to MI work. Your job is to help them explore both sides.',ex:'"It sounds like part of you wants to help him, and another part wonders if your help is actually helping."'}
};

function showTT(term){const g=G[term];if(!g)return;document.getElementById('tt-term').textContent=term;document.getElementById('tt-def').textContent=g.def;const ex=document.getElementById('tt-ex');if(g.ex){ex.textContent=g.ex;ex.style.display='block';}else ex.style.display='none';document.getElementById('tt').classList.add('show');}
function closeTT(){document.getElementById('tt').classList.remove('show');}
function jargonify(text){const terms=Object.keys(G).sort((a,b)=>b.length-a.length);let r=text;terms.forEach(t=>{const rx=new RegExp('\\b('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')\\b','gi');r=r.replace(rx,m=>`<span class="jargon" onclick="showTT('${t}')">${m}</span>`);});return r;}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SCENARIOS = {
  micro: [
    {id:'ms1',title:"A friend who's overwhelmed",difficulty:'beginner',skill:'Reflecting Feelings',skillKey:'reflecting',unlock:null,
     client:{name:'Jess',av:'J',ctx:"Jess is 24. She just started a new job and feels like she's drowning. She looks stressed and close to tears."},
     opener:"I just... I don't know. Everything feels like too much right now. My new job is nothing like I expected and I come home exhausted every single night.",
     sys:'You are Jess, 24, overwhelmed by a new job. Speaking to a counselling student. 2-3 sentences. If they reflect your emotions accurately, open up more. If they give advice or ask closed yes/no questions, pull back. Stay in character.',
     learn:{explain:"Reflecting feelings means naming the emotion you hear underneath what your client says. When you name it accurately, clients feel truly heard and usually open up more.",ex:"Client: 'I can't keep up.' You: 'It sounds like you're feeling really overwhelmed — like everything is closing in at once.'",phrases:["It sounds like you're feeling...","I'm picking up a real sense of...","What I'm hearing underneath that is..."]},
     turns:4,pts:60},
    {id:'ms2',title:"The grieving father",difficulty:'beginner',skill:'Paraphrasing',skillKey:'paraphrasing',unlock:'ms1',
     client:{name:'David',av:'D',ctx:"David is 58. His wife passed away six months ago. He's come to counselling for the first time."},
     opener:"People keep telling me I should be getting better by now. Six months — apparently that's enough time. But I still reach for the phone to call her every morning.",
     sys:'You are David, 58, recently widowed. Quiet, guarded, first time in counselling. 2-3 sentences. If the student paraphrases your meaning accurately, feel more understood and share more. If they give platitudes, become more distant. Stay in character.',
     learn:{explain:"Paraphrasing is reflecting back the meaning of what someone said in your own words — shorter and cleaner. It focuses on content and meaning, not just emotion.",ex:"Client: 'Everyone says I should be over it.' You: 'So while others feel you should have moved on, for you the loss still feels very present in your daily life.'",phrases:["So what I'm hearing is...","It sounds like what you're saying is...","If I've understood you right..."]},
     turns:4,pts:60},
    {id:'ms3',title:"Anxious about everything",difficulty:'intermediate',skill:'Open Questions',skillKey:'openQuestions',unlock:'ms2',
     client:{name:'Maya',av:'M',ctx:"Maya is 31. She has generalised anxiety and tends to give short answers unless asked the right questions."},
     opener:"I just feel anxious all the time. About everything. Work, home, what people think of me. I don't even know where it comes from.",
     sys:'You are Maya, 31, with generalised anxiety. Give very short answers to closed yes/no questions. Open up with good open questions. 1-4 sentences. Stay in character.',
     learn:{explain:"Open questions cannot be answered yes or no — they invite the person to explore and share more. In counselling, open questions are almost always better than closed ones.",ex:"Closed (avoid): 'Are you anxious at work?' Open (better): 'What does it feel like when the anxiety shows up at work?'",phrases:["What does that feel like for you?","Tell me more about...","How does that show up in your daily life?","What's that been like?"]},
     turns:5,pts:80},
    {id:'ms4',title:"At a crossroads",difficulty:'intermediate',skill:'Summarising',skillKey:'summarising',unlock:'ms3',
     client:{name:'Tom',av:'T',ctx:"Tom is 45. He's been talking about his career, his marriage and feeling lost. There's a lot to pull together."},
     opener:"I feel like I've been running on a treadmill for twenty years and now I've just... stopped. I don't know who I am outside of my job. And at home — I love my wife but we barely talk anymore.",
     sys:'You are Tom, 45, feeling lost. When the student summarises well say "yes, exactly" and add something new. If they miss the point, gently add what they missed. 2-3 sentences. Stay in character.',
     learn:{explain:"Summarising pulls together the key threads from what a client has shared. A good summary helps clients feel understood and often reveals patterns they hadn't noticed.",ex:"'So from what you've been sharing, it sounds like there are a few things happening — you've lost a sense of identity outside work, and your marriage feels like it's drifted. Is that right?'",phrases:["So from what you've shared, it sounds like...","There seem to be a few things happening here...","Let me see if I've got the picture right..."]},
     turns:5,pts:80},
    {id:'ms5',title:"Stuck between two worlds",difficulty:'advanced',skill:'Empathic Confrontation',skillKey:'confrontation',unlock:'ms4',
     client:{name:'Anika',av:'A',ctx:"Anika is 28. She says she wants to change careers but keeps finding reasons why she can't."},
     opener:"I really do want to quit my job and study art. I've wanted it for years. But my parents would be devastated. And I'd lose my income. Maybe next year would be better.",
     sys:'You are Anika, 28. You say you want to change careers but keep listing reasons you cannot. When the student gently and warmly points out the contradiction, become thoughtful. If they push too hard, become slightly defensive. 2-3 sentences. Stay in character.',
     learn:{explain:"Empathic confrontation gently points out a contradiction — between what someone says and what they do. Done with warmth it opens new awareness. Done bluntly it shuts people down.",ex:"'I notice you've said you've wanted this for years — and each time we get close, a new reason appears. I'm curious what you make of that.'",phrases:["I notice that on one hand... and on the other...","You've said you want X, and yet...","I'm curious — you mention wanting this, but I also hear..."]},
     turns:5,pts:100}
  ],
  mi: [
    {id:'mi1',title:"A worried mum",difficulty:'beginner',skill:'OARS — Open Questions & Reflecting',skillKey:'oarsBasic',unlock:null,
     client:{name:'Sandra',av:'S',ctx:"Sandra is 52. Her 19-year-old son has started drinking heavily. She's worried but doesn't want to push him away."},
     opener:"I don't know what I'm supposed to do. He comes home drunk and I try to say something and he just shuts down. I'm scared I'll say the wrong thing and lose him completely.",
     sys:'You are Sandra, 52. Your son drinks heavily and you are scared of losing him. With warm empathic responses, open up more. With advice-giving, become overwhelmed and give shorter answers. 2-3 sentences. Stay in character.',
     learn:{explain:"OARS is the foundation of Motivational Interviewing: Open questions, Affirming, Reflecting, Summarising. With family members, your first job is to understand their experience — not fix things.",ex:"Sandra: 'I'm scared I'll say the wrong thing.' You: 'It sounds like you're walking on eggshells — wanting to reach him but afraid of pushing him further away. What's that been like?'",phrases:["It sounds like you're feeling...","What's that been like for you?","Tell me more about what happens when...","What worries you most about..."]},
     turns:4,pts:70},
    {id:'mi2',title:"A dad who wants to fix it",difficulty:'beginner',skill:'Rolling with Resistance',skillKey:'resistance',unlock:'mi1',
     client:{name:'Rob',av:'R',ctx:"Rob is 54. His daughter is using meth. He's angry and resistant to the idea of counselling for himself."},
     opener:"Look, I don't need counselling. She's the one with the problem. If she just made better choices this would all stop. I came here because my wife made me.",
     sys:'You are Rob, 54. Angry, here reluctantly. If the student argues back or lectures, dig in. If they validate your experience and do not push back, soften slightly. 2-3 sentences. Stay in character.',
     learn:{explain:"When someone resists, we don't argue — we roll with it. Fighting resistance makes it stronger. Instead, reflect it, validate it, and keep the door open. Resistance usually comes from pain underneath.",ex:"Rob: 'I don't need counselling.' You: 'You came here even though you didn't feel you needed to — that tells me how much you care about what's happening.'",phrases:["It makes sense you feel that way...","You didn't have to come — the fact that you did...","I hear you — this isn't what you imagined needing...","What would make this feel worthwhile for you?"]},
     turns:4,pts:70},
    {id:'mi3',title:"Parents in denial",difficulty:'intermediate',skill:'Developing Discrepancy',skillKey:'discrepancy',unlock:'mi2',
     client:{name:'Carla and Mark',av:'CM',ctx:"Carla and Mark's 22-year-old daughter is using cocaine. They minimise the problem while describing serious warning signs."},
     opener:"She's always been a bit wild, that's just who she is. She still goes to work most days. I think people are overreacting — it's not like she's on heroin or anything.",
     sys:'You are Carla, speaking for yourself and Mark. You minimise your daughter cocaine use. If the student gently reflects the gap between your concern and your minimising, become thoughtful. If they lecture, defend yourself. 2-3 sentences. Stay in character.',
     learn:{explain:"Developing discrepancy means gently helping someone notice the gap between where they are and where they want to be — without confronting or lecturing. The goal is internal motivation, not pressure.",ex:"'You clearly love her and want her to be well. And I'm also noticing some of what you've described — the weight loss, missing work. How do you hold those two things together?'",phrases:["You've mentioned how much you love her, and I'm also hearing...","Help me understand — on one hand... and on the other...","What would need to change for you to feel more at ease?"]},
     turns:5,pts:90},
    {id:'mi4',title:"Indian parents — first session",difficulty:'advanced',skill:'Full MI — Cultural Sensitivity',skillKey:'culturalMI',unlock:null,
     client:{name:'Priya and Suresh',av:'PS',ctx:"Priya (50) and Suresh (55) arrived in Australia from India 8 years ago. Their son Arjun, 26, has been using heroin and was recently hospitalised for psychosis. They are ashamed, frightened, confused about the health system, and terrified of their community finding out. This is the first time they've spoken to anyone outside the family."},
     opener:"We don't really know why we are here. Our doctor said to come. Arjun... he is our only son. We worked so hard for him. Now he is in hospital again. We don't tell anyone — not even our family back home. We don't understand what is happening to him. In India, we would not... this is not something we know.",
     sys:'You are Priya, speaking carefully and quietly, with Suresh occasionally adding a brief line in brackets like [Suresh: Yes, we did not know what to do...]. Indian parents new to Australia whose son has serious drug and mental health problems. You carry deep shame, fear of community stigma, confusion about Australian health services. Respond to warmth and patience by slowly sharing more. If the counsellor rushes to give information or solutions, pull back. Simple careful language. 2-4 sentences. Stay in character with cultural authenticity and dignity.',
     learn:{explain:"MI with culturally diverse clients needs extra care. Shame, stigma, and unfamiliarity with health services are real barriers. Your first task is safety and trust — not information. Go slowly. Use OARS gently. Cultural humility means staying curious, not expert.",ex:"They say: 'We don't understand what is happening to him.' Rather than explaining: 'It takes a lot of courage to be here today. Can you help me understand — what has this been like for your family?'",phrases:["Thank you for coming — this couldn't have been easy...","I want to understand your experience of this...","What has this been like for you both?","What would be most helpful for you right now?"]},
     turns:6,pts:130},
    {id:'mi5',title:"Indian parents — second session",difficulty:'advanced',skill:'Change Talk + Decisional Balance',skillKey:'changeTalk',unlock:'mi4',
     client:{name:'Priya and Suresh',av:'PS',ctx:"Second session. Priya and Suresh came back — that took courage. In the first session they shared their shame and confusion. Now they are a little more open. Your goal is to gently draw out their hopes for Arjun, explore both sides (what is hard, what they want), and help them hear their own motivation out loud."},
     opener:"We came back... Suresh was not sure. But I said we should come. We have been thinking since last time. We did not sleep much. Arjun called us from the hospital. He sounded different. Not angry like before. Maybe... lost. [Suresh: We do not know how to help him. We have tried everything.]",
     sys:'You are Priya, speaking more openly than last time but still carefully. Suresh occasionally adds a line in brackets. You love Arjun deeply and have a small flicker of hope after last session. When the counsellor uses good MI — reflects your feelings, asks what you want for Arjun, explores both sides — open up and share your hopes and fears. When asked what is hard, share: the shame, the community, not sleeping. When asked what you want (change talk), share your hopes: Arjun getting better, family being okay. If they give advice, pull back slightly. 2-4 sentences. Stay in character.',
     learn:{explain:"In Session 2 you have enough trust to go deeper. Your goal is to draw out change talk — things they say that lean toward wanting things to be different. When they express hope or desire for change, reflect it back and amplify it. Also explore both sides: what is hard AND what they hope for. This is the decisional balance.",ex:"Priya says: 'I just want him to be like before — happy.' Reflect and amplify: 'So there is a part of you that still holds onto that image of him — happy and well. That matters deeply to you.' Then: 'What would it mean for your family if things did start to get better?'",phrases:["What do you most want for Arjun?","What would be different if things started to improve?","On one hand things are very hard... and on the other hand, what do you hope for?","It sounds like part of you still believes things could be different...","What matters most to you as his parents?"]},
     turns:6,pts:130},
    {id:'mi6',title:"A family torn apart",difficulty:'advanced',skill:'MI — Ambivalence and Enabling',skillKey:'enabling',unlock:'mi3',
     client:{name:'Tracey',av:'T',ctx:"Tracey is 48. Her son Josh uses ice. One sibling has cut off contact; Tracey keeps giving Josh money to keep him safe. She's exhausted, frightened, and guilty."},
     opener:"His sister won't speak to him anymore and I understand why, I do. But I can't just abandon him. If I stop giving him money, where does he sleep? So I keep giving it. And then I hate myself for it.",
     sys:'You are Tracey, 48. Exhausted and guilty, caught between keeping Josh safe and knowing it might be making things worse. If the student helps you explore both sides without judging, open up more. If they tell you what to do or take a side, become defensive. 2-3 sentences. Stay in character.',
     learn:{explain:"Ambivalence — wanting two contradictory things at once — is at the heart of MI. Your job is not to resolve this for Tracey or take a side. You help her explore both sides so her own motivation for change can emerge. As soon as you tell her what to do, she stops listening.",ex:"Rather than 'You need to stop enabling him,' try: 'It sounds like you're pulled in two directions — you love him and want to keep him safe, and there's also a part of you that wonders whether this is actually helping. What does that tension feel like?'",phrases:["It sounds like part of you... and another part of you...","What does it feel like to be caught between those two things?","What do you most want for him?","What do you most want for yourself?"]},
     turns:5,pts:120}
  ]
};

const SKILL_NAMES = {reflecting:'Reflecting Feelings',paraphrasing:'Paraphrasing',openQuestions:'Open Questions',summarising:'Summarising',confrontation:'Empathic Confrontation',oarsBasic:'OARS Basics',resistance:'Rolling with Resistance',discrepancy:'Developing Discrepancy',culturalMI:'Cultural MI (Session 1)',changeTalk:'Change Talk (Session 2)',enabling:'MI — Ambivalence'};

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = loadState();
function loadState(){
  try{const s=JSON.parse(localStorage.getItem('cst_state'));if(s)return s;}catch(e){}
  return {pts:0,streak:0,done:[],skills:{reflecting:0,paraphrasing:0,openQuestions:0,summarising:0,confrontation:0,oarsBasic:0,resistance:0,discrepancy:0,culturalMI:0,changeTalk:0,enabling:0},track:'micro',notes:[],journal:[],skillHistory:{}};
}
function saveState(){localStorage.setItem('cst_state',JSON.stringify(state));}

let sess = {scenario:null,level:'some',hist:[],trn:0,pts:0,lastC:'',busy:false,lastFB:''};
let pendingId = null;
let recognition = null;
let listening = false;

// ─── NAV ──────────────────────────────────────────────────────────────────────
function setTab(tab){
  ['practice','notes','journal','progress'].forEach(t=>{
    document.getElementById('tab-'+t).style.display = t===tab?'block':'none';
  });
  document.querySelectorAll('.nav-btn').forEach((b,i)=>{
    b.classList.toggle('active',['practice','notes','journal','progress'][i]===tab);
  });
  if(tab==='notes') renderNotes();
  if(tab==='journal') renderJournal();
  if(tab==='progress') renderProgress();
}

function goHome(){showScreen('home');renderHome();}
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('on'));document.getElementById(id).classList.add('on');window.scrollTo(0,0);}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function renderHome(){
  document.getElementById('s-pts').textContent=state.pts;
  document.getElementById('s-done').textContent=state.done.length;
  document.getElementById('s-skills').textContent=Object.values(state.skills).filter(v=>v>0).length;
  document.getElementById('s-streak').textContent=state.streak;
  renderScenarios();
  renderProgressBars();
}

function switchTrack(t){
  state.track=t;saveState();
  document.getElementById('tt-micro').classList.toggle('active',t==='micro');
  document.getElementById('tt-mi').classList.toggle('active',t==='mi');
  renderScenarios();renderProgressBars();
}

function renderScenarios(){
  const list=document.getElementById('scenario-list');
  const scenarios=SCENARIOS[state.track];
  list.innerHTML=scenarios.map(s=>{
    const done=state.done.includes(s.id);
    const locked=s.unlock&&!state.done.includes(s.unlock);
    const dm={beginner:'badge-green',intermediate:'badge-amber',advanced:'badge-red'};
    const dl={beginner:'Beginner',intermediate:'Intermediate',advanced:'Advanced'};
    const featured=s.id==='mi4'||s.id==='mi5';
    return `<div class="scenario-card${locked?' locked':''}${done?' done':''}${featured&&!locked?' featured':''}" onclick="${locked?'':'openKS(\''+s.id+'\')'}" >
      <span class="sc-badge ${done?'badge-done':featured?'badge-featured':dm[s.difficulty]}">${done?'✓ Done':featured?'★ Featured':dl[s.difficulty]}</span>
      <div class="sc-title">${s.title}</div>
      <div class="sc-desc">${s.client.ctx.split('.')[0]}.</div>
      <div class="sc-skill">→ ${s.skill}</div>
      ${locked?`<div class="lock-msg">🔒 Complete previous scenario first</div>`:''}
    </div>`;
  }).join('');
}

function renderProgressBars(){
  const el=document.getElementById('progress-bars');
  const relevant=state.track==='micro'?['reflecting','paraphrasing','openQuestions','summarising','confrontation']:['oarsBasic','resistance','discrepancy','culturalMI','changeTalk','enabling'];
  el.innerHTML=relevant.map(k=>{
    const p=Math.min(100,state.skills[k]||0);
    return `<div class="skill-row"><div class="skill-name">${SKILL_NAMES[k]}</div><div class="skill-bar-bg"><div class="skill-bar-fill" style="width:${p}%"></div></div><div class="skill-pct">${p}%</div></div>`;
  }).join('');
}

// ─── KNOWLEDGE SELECT ─────────────────────────────────────────────────────────
function openKS(id){
  pendingId=id;
  const all=[...SCENARIOS.micro,...SCENARIOS.mi];
  const s=all.find(x=>x.id===id);
  document.getElementById('ks-head').textContent=s.title;
  ['new','some','expert'].forEach(l=>document.getElementById('kl-'+l).classList.remove('sel'));
  document.getElementById('ks-btn').disabled=true;
  showScreen('ks');
}

function pickLevel(l){
  sess.level=l;
  ['new','some','expert'].forEach(x=>document.getElementById('kl-'+x).classList.remove('sel'));
  document.getElementById('kl-'+l).classList.add('sel');
  document.getElementById('ks-btn').disabled=false;
}

// ─── ROLEPLAY ─────────────────────────────────────────────────────────────────
function startRP(){
  const all=[...SCENARIOS.micro,...SCENARIOS.mi];
  const s=all.find(x=>x.id===pendingId);
  sess={scenario:s,level:sess.level,hist:[],trn:0,pts:0,lastC:s.opener,busy:false,lastFB:''};

  document.getElementById('rp-title').textContent=s.title;
  document.getElementById('rp-pill').textContent=s.skill;
  document.getElementById('rp-av').textContent=s.client.av;
  document.getElementById('rp-cname').textContent=s.client.name;
  document.getElementById('rp-ctx').textContent=s.client.ctx;
  document.getElementById('learn-explain').innerHTML=jargonify(s.learn.explain);
  document.getElementById('learn-ex').textContent=s.learn.ex;
  document.getElementById('learn-phrases').innerHTML=s.learn.phrases.map(p=>'<span class="chip">'+p+'</span>').join('');

  const lb=document.getElementById('learn-box'),bd=document.getElementById('learn-body'),pw=document.getElementById('phrases-wrap');
  if(sess.level==='new'){lb.style.display='block';bd.classList.add('open');pw.style.display='block';}
  else if(sess.level==='some'){lb.style.display='block';bd.classList.remove('open');pw.style.display='none';}
  else lb.style.display='none';

  document.getElementById('chat-log').innerHTML='';
  document.getElementById('fb-area').innerHTML='';
  document.getElementById('pts-display').innerHTML='';
  document.getElementById('hint-box').style.display='none';
  document.getElementById('ta').value='';
  document.getElementById('mic-status').textContent='';
  document.getElementById('send-btn').disabled=false;
  addThem(s.opener);updateT();showScreen('rp');
}

function togLearn(){const b=document.getElementById('learn-body'),a=document.getElementById('learn-arr');const o=b.classList.toggle('open');a.classList.toggle('open',o);}
function addThem(text){const log=document.getElementById('chat-log');const w=document.createElement('div');w.className='msg-them';const l=document.createElement('div');l.className='msg-them-lbl';l.textContent=sess.scenario.client.name;const b=document.createElement('div');b.className='msg-them-bubble';b.textContent=text;w.appendChild(l);w.appendChild(b);log.appendChild(w);log.scrollTop=log.scrollHeight;}
function addMe(text){const log=document.getElementById('chat-log');const w=document.createElement('div');w.className='msg-you';const l=document.createElement('div');l.className='msg-you-lbl';l.textContent='You';const b=document.createElement('div');b.className='msg-you-bubble';b.textContent=text;w.appendChild(l);w.appendChild(b);log.appendChild(w);log.scrollTop=log.scrollHeight;}
function updateT(){const l=sess.scenario.turns-sess.trn;document.getElementById('tbar').textContent=l+' exchange'+(l!==1?'s':'')+' remaining';}
function taKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}

async function togHint(){
  const hb=document.getElementById('hint-box');
  if(hb.style.display==='block'){hb.style.display='none';return;}
  hb.style.display='block';hb.textContent='Getting a hint for this moment...';
  const s=sess.scenario;
  const isS2=s.id==='mi5';
  try{
    const r=await api({model:'claude-sonnet-4-6',max_tokens:200,messages:[{role:'user',content:'You are an MI supervisor giving a quick practical hint. Skill: '+s.skill+'. '+(isS2?'Look for any change talk in what they said and suggest how to reflect and amplify it. ':'')+'Client just said: "'+sess.lastC+'". Student level: '+(sess.level==='new'?'beginner':sess.level==='some'?'intermediate':'experienced')+'. Give a 2-3 sentence hint specific to exactly what was just said. If beginner suggest a starter phrase. Warm and practical. No jargon without explanation.'}]});
    hb.textContent=r;
  }catch(e){hb.textContent='Try: "'+s.learn.phrases[0]+'"';}
}

// ─── SPEECH ───────────────────────────────────────────────────────────────────
function togMic(){
  if(!('webkitSpeechRecognition' in window)&&!('SpeechRecognition' in window)){
    alert('Speech recognition is not supported in this browser. Try Chrome.');return;
  }
  if(listening){stopMic();return;}
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  recognition=new SR();
  recognition.lang='en-AU';
  recognition.interimResults=true;
  recognition.continuous=false;
  recognition.onstart=()=>{listening=true;document.getElementById('mic-btn').classList.add('listening');document.getElementById('mic-status').textContent='🔴 Listening...';};
  recognition.onresult=e=>{const t=Array.from(e.results).map(r=>r[0].transcript).join('');document.getElementById('ta').value=t;};
  recognition.onend=()=>stopMic();
  recognition.onerror=()=>stopMic();
  recognition.start();
}
function stopMic(){listening=false;if(recognition)recognition.stop();document.getElementById('mic-btn').classList.remove('listening');document.getElementById('mic-status').textContent='';}

// ─── SEND ─────────────────────────────────────────────────────────────────────
async function send(){
  const ta=document.getElementById('ta');
  const txt=ta.value.trim();
  if(!txt||sess.busy)return;
  if(listening)stopMic();
  sess.busy=true;
  document.getElementById('send-btn').disabled=true;
  document.getElementById('hint-box').style.display='none';
  ta.value='';
  addMe(txt);
  document.getElementById('fb-area').innerHTML='<div class="loading">Getting feedback...</div>';
  const s=sess.scenario;
  const isS2=s.id==='mi5';
  try{
    // Feedback
    const li=sess.level==='new'?'Beginner - explain in plain English. Name the technique clearly.':sess.level==='some'?'Intermediate - name the technique, note what landed, give one suggestion.':'Experienced - use MI terminology precisely.';
    const fbQ=isS2
      ?`You are a warm expert MI supervisor. Session 2 - goal is drawing out change talk and decisional balance. Turn: ${sess.trn+1}. Client said: "${sess.lastC}". Student said: "${txt}". ${li} Did they notice and reflect change talk? Explore both sides (costs and hopes)? Use affirming, open questions, summarising? Give 2-3 sentences: 1) what they did well using MI terms (change talk, decisional balance, amplifying, affirming, open question, reflecting, summarising) 2) one specific suggestion. Under 70 words. Encouraging. End with new line: GOOD, PARTIAL, or NEEDS_WORK`
      :`You are a warm expert MI supervisor. Scenario: ${s.title}. Skill: ${s.skill}. Turn: ${sess.trn+1}. Client said: "${sess.lastC}". Student said: "${txt}". ${li} Give 2-3 sentences: 1) what they did well (open question, affirming, reflecting, summarising, OARS, rolling with resistance, developing discrepancy, empathic confrontation, cultural humility, paraphrase) 2) one specific suggestion. Under 70 words. Encouraging. End with new line: GOOD, PARTIAL, or NEEDS_WORK`;
    const fbRaw=await api({model:'claude-sonnet-4-6',max_tokens:300,messages:[{role:'user',content:fbQ}]});
    const lines=fbRaw.split('\n');
    const rl=lines.find(l=>/^(GOOD|PARTIAL|NEEDS_WORK)$/.test(l.trim()));
    const rating=rl?rl.trim():'PARTIAL';
    const fbTxt=lines.filter(l=>!l.trim().match(/^(GOOD|PARTIAL|NEEDS_WORK)$/)).join(' ').trim();
    sess.lastFB=fbTxt;
    const earned=rating==='GOOD'?Math.round(s.pts/s.turns):rating==='PARTIAL'?Math.round(s.pts/s.turns*0.5):5;
    sess.pts+=earned;
    const ok=rating==='GOOD';
    const fd=document.createElement('div');fd.className='fb '+(ok?'fb-good':'fb-warn');
    const ft=document.createElement('div');ft.className='fb-title';ft.textContent=ok?'✓ Good work':'→ Keep developing';
    const fx=document.createElement('div');fx.className='fb-text';fx.textContent=fbTxt;
    fd.appendChild(ft);fd.appendChild(fx);
    document.getElementById('fb-area').innerHTML='';
    document.getElementById('fb-area').appendChild(fd);
    document.getElementById('pts-display').innerHTML='<span class="pts-badge">+'+earned+' pts</span>';
    // Update skill
    const gain=rating==='GOOD'?20:rating==='PARTIAL'?10:3;
    state.skills[s.skillKey]=Math.min(100,(state.skills[s.skillKey]||0)+gain);
    // Track history for trends
    if(!state.skillHistory[s.skillKey])state.skillHistory[s.skillKey]=[];
    state.skillHistory[s.skillKey].push({date:new Date().toISOString(),rating});
    sess.trn++;
    // Get client reply
    const clientHist=[
      {role:'user',content:'[START] Open as '+s.client.name+' with: "'+s.opener+'"'},
      {role:'assistant',content:s.opener}
    ];
    for(const h of sess.hist){clientHist.push({role:'user',content:h.student});clientHist.push({role:'assistant',content:h.client});}
    clientHist.push({role:'user',content:txt});
    sess.hist.push({student:txt,client:''});
    const cr=await api({model:'claude-sonnet-4-6',max_tokens:300,system:s.sys,messages:clientHist});
    sess.hist[sess.hist.length-1].client=cr;
    sess.lastC=cr;
    addThem(cr);
    if(sess.trn>=s.turns){
      document.getElementById('send-btn').disabled=true;
      setTimeout(()=>showCompletion(),400);
    } else {
      updateT();
      document.getElementById('send-btn').disabled=false;
      document.getElementById('chat-log').scrollTop=document.getElementById('chat-log').scrollHeight;
      sess.busy=false;
    }
  }catch(e){
    document.getElementById('fb-area').innerHTML='<div class="loading">Connection issue — please try again.</div>';
    document.getElementById('send-btn').disabled=false;
    sess.busy=false;
  }
}

// ─── COMPLETION ───────────────────────────────────────────────────────────────
function showCompletion(){
  const s=sess.scenario;
  state.pts+=sess.pts;
  if(!state.done.includes(s.id)){state.done.push(s.id);state.streak++;}
  // Auto supervisor notes
  const note={id:Date.now(),date:new Date().toLocaleDateString('en-AU'),scenario:s.title,skill:s.skill,feedback:sess.lastFB,pts:sess.pts,maxPts:s.pts,ratings:sess.hist.map(h=>h.rating||'?')};
  if(!state.notes)state.notes=[];
  state.notes.unshift(note);
  saveState();
  document.getElementById('comp-trophy').textContent=sess.pts>=s.pts*0.7?'🌟':'✅';
  document.getElementById('comp-title').textContent=sess.pts>=s.pts*0.7?'Great session!':'Session complete';
  document.getElementById('comp-pts').textContent='You earned '+sess.pts+' of '+s.pts+' points';
  // Summary cards
  const cb=document.getElementById('comp-body');cb.innerHTML='';
  const c1=document.createElement('div');c1.className='sum-card';c1.innerHTML='<h3>Skill practised</h3>';const p1=document.createElement('p');p1.textContent=s.learn.explain;c1.appendChild(p1);
  const c2=document.createElement('div');c2.className='sum-card';c2.innerHTML='<h3>Supervisor note</h3>';const p2=document.createElement('p');p2.textContent=sess.lastFB;c2.appendChild(p2);
  cb.appendChild(c1);cb.appendChild(c2);
  // Gibbs form
  const gf=document.getElementById('gibbs-form');
  const steps=[
    {key:'description',label:'Description — What happened?',hint:'Briefly describe the session. What did you do? What did the client say?'},
    {key:'feelings',label:'Feelings — How did it feel?',hint:'What were you thinking and feeling during the session?'},
    {key:'evaluation',label:'Evaluation — What went well or not?',hint:'What was good about the experience? What was difficult?'},
    {key:'analysis',label:'Analysis — Why do you think that was?',hint:'Why did things go the way they did? What sense can you make of it?'},
    {key:'conclusion',label:'Conclusion — What else could you have done?',hint:'What have you learned from this experience?'},
    {key:'action',label:'Action Plan — What will you do next time?',hint:'If this happened again, what would you do differently?'}
  ];
  gf.innerHTML=steps.map(st=>`<div class="gibbs-section"><div class="gibbs-label">${st.label}</div><textarea class="gibbs-input" id="gibbs-${st.key}" placeholder="${st.hint}" rows="2"></textarea></div>`).join('');
  showScreen('done');
}

function saveGibbs(){
  const steps=['description','feelings','evaluation','analysis','conclusion','action'];
  const entry={id:Date.now(),date:new Date().toLocaleDateString('en-AU'),scenario:sess.scenario.title,skill:sess.scenario.skill,open:false};
  steps.forEach(k=>{entry[k]=document.getElementById('gibbs-'+k).value.trim();});
  if(!state.journal)state.journal=[];
  state.journal.unshift(entry);
  saveState();
  alert('Reflection saved to your journal! ✓');
}

// ─── NOTES ────────────────────────────────────────────────────────────────────
function renderNotes(){
  const el=document.getElementById('notes-list');
  if(!state.notes||!state.notes.length){el.innerHTML='<div class="empty-state"><div class="icon">📋</div><p>No notes yet. Complete a session and supervisor notes will appear here automatically.</p></div>';return;}
  el.innerHTML=state.notes.map(n=>`
    <div class="note-card">
      <div class="note-meta"><span>${n.date}</span><span>${n.pts}/${n.maxPts} pts</span></div>
      <div class="note-scenario">${n.scenario}</div>
      <div class="note-text">${n.feedback}</div>
      <div class="note-scores">
        <span class="note-score">Skill: ${n.skill}</span>
      </div>
    </div>`).join('');
}

// ─── JOURNAL ──────────────────────────────────────────────────────────────────
function renderJournal(){
  const el=document.getElementById('journal-list');
  if(!state.journal||!state.journal.length){el.innerHTML='<div class="empty-state"><div class="icon">📔</div><p>No journal entries yet. After completing a session you\'ll be prompted to write a Gibbs reflection.</p></div>';return;}
  el.innerHTML=state.journal.map((e,i)=>`
    <div class="journal-entry">
      <div class="je-header" onclick="togJE(${i})">
        <div>
          <div class="je-title">${e.scenario}</div>
          <div class="je-meta">${e.date} · ${e.skill}</div>
        </div>
        <div style="color:var(--text-muted);font-size:12px">▼</div>
      </div>
      <div class="je-body" id="je-${i}">
        ${['description','feelings','evaluation','analysis','conclusion','action'].filter(k=>e[k]).map(k=>`
          <div class="gibbs-section">
            <div class="gibbs-label">${{description:'Description',feelings:'Feelings',evaluation:'Evaluation',analysis:'Analysis',conclusion:'Conclusion',action:'Action Plan'}[k]}</div>
            <div class="gibbs-text">${e[k]||'—'}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}
function togJE(i){const el=document.getElementById('je-'+i);el.classList.toggle('open');}

// ─── PROGRESS ─────────────────────────────────────────────────────────────────
function renderProgress(){
  const el=document.getElementById('trends-list');
  const allSkills=Object.keys(SKILL_NAMES);
  const active=allSkills.filter(k=>state.skillHistory&&state.skillHistory[k]&&state.skillHistory[k].length>0);
  if(!active.length){el.innerHTML='<div class="empty-state"><div class="icon">📈</div><p>No trend data yet. Complete some sessions and your skill trends will appear here.</p></div>';return;}
  el.innerHTML=active.map(k=>{
    const hist=state.skillHistory[k]||[];
    const pct=Math.min(100,state.skills[k]||0);
    const dots=hist.slice(-8).map(h=>`<div class="trend-dot ${h.rating==='GOOD'?'good':h.rating==='PARTIAL'?'partial':'needs'}" title="${h.rating}">${h.rating==='GOOD'?'✓':h.rating==='PARTIAL'?'~':'✗'}</div>`).join('');
    return `<div style="margin-bottom:18px">
      <div class="trend-bar-row">
        <div class="trend-label">${SKILL_NAMES[k]}</div>
        <div class="trend-bar-bg"><div class="trend-bar-fill" style="width:${pct}%"></div></div>
        <div class="trend-pct">${pct}%</div>
      </div>
      <div class="trend-sessions" style="padding-left:170px">${dots}</div>
    </div>`;
  }).join('');
}

// ─── API ──────────────────────────────────────────────────────────────────────
async function api(body){
  const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const d=await r.json();
  if(!d.content||!d.content[0])throw new Error(JSON.stringify(d));
  return d.content[0].text;
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderHome();
