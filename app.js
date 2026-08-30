
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
  'ambivalence':{def:'Wanting two contradictory things at once. Normal and central to MI work. Your job is to help them explore both sides.',ex:'"It sounds like part of you wants to help him, and another part wonders if your help is actually helping."'},
  'transference':{def:'When a client unconsciously redirects feelings from a past relationship onto you. They may idealise you, become angry, or act dependent in ways that mirror earlier relationships.',ex:'A client who grew up with a critical parent starts apologising constantly to you, as if expecting the same criticism.'},
  'defence mechanism':{def:'Unconscious strategies people use to avoid painful feelings — like intellectualising, deflecting with humour, denying, or projecting feelings onto others.',ex:'A client talks about their divorce in a completely detached, analytical way — the intellectualisation is protecting them from the grief underneath.'},
  'free association':{def:'Encouraging the client to say whatever comes to mind without censoring. What surfaces unexpectedly is often the most significant material.',ex:'Rather than directing the conversation: "Just say whatever comes to mind as you think about that memory."'},
  'making connections':{def:'Gently linking what a client experiences now with patterns from their past — helping them see how history shows up in the present.',ex:'"I notice you used almost the same words to describe your mother as you used to describe your boss. I wonder if you notice that too?"'},
  'sitting with':{def:'Tolerating discomfort or uncertainty without rushing to fix or fill the silence. What is not said is often as important as what is.',ex:'When a client goes quiet after mentioning their mother, you wait. Then: "What just happened there for you?"'},
  'projection':{def:'Attributing your own unacceptable feelings to someone else. A client who feels angry may accuse others of being angry at them.',ex:'A client says "everyone at work hates me" — but when explored, it emerges they feel a deep self-hatred they cannot tolerate owning.'}
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
  ],
  psychodynamic: [
    {id:'pd1',title:"The perfectionist",difficulty:'beginner',skill:'Defence Mechanisms',skillKey:'pdDefence',unlock:null,
     client:{name:'Claire',av:'C',ctx:"Claire is 34. Highly successful but constantly exhausted. She talks about everything analytically and laughs things off. She rarely expresses emotion directly."},
     opener:"I know I should probably slow down but honestly I just... I work well under pressure. Everyone says I look tired but I feel fine. I just need to be more organised, I think. That's probably why I'm here.",
     sys:'You are Claire, 34. Highly defended — you intellectualise everything and deflect with humour. When the therapist gently names a defence, pause and become slightly more vulnerable. If they push too hard, retreat back to analysis. Bright, capable, slightly brittle. 2-3 sentences. Stay in character.',
     learn:{explain:"Defence mechanisms are unconscious strategies people use to avoid painful feelings. Common ones include intellectualising (analysing instead of feeling), deflecting with humour, minimising, and denial. In psychodynamic work you gently name what you notice — not to challenge, but to open a door.",ex:"Client laughs: 'I just need to be more organised.' Rather than going along: 'I notice you moved quite quickly to a practical solution there. What was happening just before that thought?'",phrases:["I notice you moved to...","What was happening just before that?","I'm curious about the laugh just then...","What would it mean if it wasn't just about being organised?"]},
     turns:5,pts:90},
    {id:'pd2',title:"Always the caretaker",difficulty:'beginner',skill:'Unconscious Patterns',skillKey:'pdPatterns',unlock:'pd1',
     client:{name:'Marcus',av:'M',ctx:"Marcus is 41. Burnt out from looking after everyone — his ageing parents, colleagues, friends. He has no idea what he wants for himself."},
     opener:"I don't really know why I'm here. Everyone else has real problems. My mate just went through a divorce, my mum's not well... I feel guilty even taking up your time when there are people who actually need help.",
     sys:'You are Marcus, 41. You deflect attention from yourself constantly — always talking about others, minimising your own needs. When the therapist gently keeps bringing focus back to you, become slightly confused but curious — like you have never really been asked about yourself. 2-3 sentences. Stay in character.',
     learn:{explain:"Some clients have unconscious patterns that run their lives — like always putting others first to the point of erasing themselves. In psychodynamic work you notice and name these patterns with curiosity, not judgment. You are also curious about where the pattern came from.",ex:"Marcus deflects to his friend. Rather than following him there: 'I notice you moved away from yourself quite quickly towards your friend. What happens for you when the focus is on you?'",phrases:["I notice you moved away from yourself just then...","What happens when I ask about you rather than the others?","I'm curious — who looks after Marcus?","What would it feel like to let yourself be here, just for you?"]},
     turns:5,pts:90},
    {id:'pd3',title:"The charmer who keeps people away",difficulty:'intermediate',skill:'Transference',skillKey:'pdTransference',unlock:'pd2',
     client:{name:'Jake',av:'J',ctx:"Jake is 29. Charming, funny, immediately likeable. Has never stayed in a relationship longer than three months. Says he gets bored but there is something more underneath."},
     opener:"I mean, I'm probably your most entertaining client, right? *laughs* Don't worry, I'm easy. I don't have baggage or anything. I just thought it might be interesting to try therapy. See what all the fuss is about.",
     sys:'You are Jake, 29. Charming and funny, using humour to keep people at a distance. Terrified of being truly known or rejected. You idealise the therapist early on. If the therapist gently notices your pattern, become briefly more real before deflecting again with a joke. If they join your jokes and stay on the surface, stay defended. 2-3 sentences. Stay in character.',
     learn:{explain:"Transference is when a client unconsciously brings feelings from past relationships into the therapy room — often towards you. Jake's charm may be a way of getting people to like him before they can reject him. What Jake does with you is likely what he does everywhere. You notice what is happening in the relationship right now — not as a problem, but as information.",ex:"Jake makes a joke to deflect. Rather than laughing and moving on: 'I notice you made me laugh just then — and we moved away from something. I'm curious about that. What happens when things get a bit more real?'",phrases:["I notice what just happened between us...","You made me laugh — and we moved away from something. I'm curious about that.","What happens when people get close to you?","I wonder if what happens out there might be happening a little in here too?"]},
     turns:5,pts:100},
    {id:'pd4',title:"Her mother's daughter",difficulty:'intermediate',skill:'Making Connections',skillKey:'pdConnections',unlock:'pd3',
     client:{name:'Rina',av:'R',ctx:"Rina is 38. In a relationship with a highly critical partner. Grew up with a critical, demanding mother. She has never connected these two things."},
     opener:"He's not a bad person. He just has very high standards. I know I frustrate him. I try harder but I never quite get it right. It's been like this my whole life honestly — I've always felt like I'm falling slightly short of what's expected.",
     sys:'You are Rina, 38. You normalise the criticism you receive because it is all you have ever known. You genuinely have not connected your partner to your mother. When the therapist gently makes the link, become very still and thoughtful — like something is landing for the first time. Sit with it. 2-3 sentences. Stay in character.',
     learn:{explain:"Making connections is one of the most powerful tools in psychodynamic work — gently linking what a client experiences now with patterns from their past. It is not about telling them what their history means. It is about opening a door and inviting them to look through it themselves.",ex:"Rina describes feeling like she always falls short. You have heard her describe her mother the same way. Try: 'I'm struck by something. You used almost the same words to describe your mother as you used to describe your partner. I wonder if you notice that too?'",phrases:["I'm struck by something you just said...","You used almost the same words just now as when you described...","I wonder if there's a connection between what's happening now and what you've described from earlier in your life?","What comes up for you when I say that?"]},
     turns:6,pts:110},
    {id:'pd5',title:"The one who can't be angry",difficulty:'advanced',skill:'Sitting with the Unsaid',skillKey:'pdUnsaid',unlock:'pd4',
     client:{name:'Daniel',av:'D',ctx:"Daniel is 44. His father was emotionally abusive. Daniel never got angry — he learned it was not safe. Now he presents as calm, reasonable, and slightly flat. The anger is there, deep underneath."},
     opener:"I had a good week actually. Nothing much happened. Work was fine. I saw my dad on Sunday — that was fine too. Just the usual. He made a comment about my job again but you know, he's just like that. It doesn't bother me.",
     sys:'You are Daniel, 44. Deeply defended against your anger because expressing it was never safe growing up. Calm and flat on the surface. When the therapist sits with silence rather than filling it, or gently notices the flatness, something may shift. If they ask directly are you angry, deny it. If they are curious and patient, something small and real might surface. 2-3 sentences. Stay in character.',
     learn:{explain:"Sometimes the most important thing a therapist can do is not fill the silence. In psychodynamic work, what is not said — the flatness, the pause, the subject that gets passed over — is often more significant than what is said. Sitting with the unsaid means being comfortable with discomfort and naming what you observe in the room.",ex:"Daniel says 'it doesn't bother me' with complete flatness. Rather than accepting this — sit with silence. Then: 'I notice something happened in you just then when you mentioned the comment. Something got very quiet. I'm curious about that quiet.'",phrases:["I notice something got very quiet just then...","What just happened there for you?","I'm going to sit with that for a moment...","You said it was fine — and something in the room felt different when you said it.","What isn't being said right now?"]},
     turns:6,pts:120}
  ]
,
  personCentred: [
    {id:'pc1',title:"The man who apologises for everything",difficulty:'beginner',skill:'Unconditional Positive Regard',skillKey:'pcUPR',unlock:null,
     client:{name:'Tom',av:'T',ctx:"Tom is 42. He apologises constantly and seems to expect criticism from everyone, including you."},
     opener:"Sorry, I know you probably have people with much bigger problems than mine. I shouldn't even be taking up your time with this, really.",
     sys:"You are Tom, 42, who apologises constantly and expects criticism. Speaking to a counselling student. 2-3 sentences. If they accept you warmly without judging or reassuring too quickly, you relax slightly and share a little more. If they rush to fix you or agree that your problem is small, you apologise more and shrink. Stay in character.",
     learn:{explain:"Unconditional positive regard means accepting the person exactly as they are, without approving or disapproving. You are not saying their choices are good — you are saying the person is worth listening to no matter what they bring.",ex:"Client: 'I shouldn't be here.' You: 'Whatever brought you here matters, and there is no size a problem has to be before it counts.'",phrases:["Whatever you bring here is welcome.","There is no right or wrong thing to say in this room.","You do not have to earn the time we have."]},
     turns:4,pts:60},
    {id:'pc2',title:"When the client asks what you think",difficulty:'intermediate',skill:'Congruence',skillKey:'pcCongruence',unlock:'pc1',
     client:{name:'Rachel',av:'R',ctx:"Rachel is 29. She keeps asking you to tell her what to do and gets frustrated when you reflect instead."},
     opener:"You keep saying things back to me. I get it, you're listening. But what do you actually think? Should I leave him or not?",
     sys:"You are Rachel, 29, pushing hard for advice and frustrated by reflection. 2-3 sentences. If the student is honest and real with you about their own position while staying warm, you settle and start thinking for yourself. If they deflect with more reflection or hide behind technique, you get more frustrated. Stay in character.",
     learn:{explain:"Congruence means being genuine — your outside matches your inside. You are not a blank screen. When a client pushes for advice, congruence is naming honestly what is happening for you rather than hiding behind technique.",ex:"Client: 'Just tell me what to do.' You: 'I notice I want to give you an answer, and I also know my answer would be mine, not yours. What I do feel is how much pressure you are under to decide.'",phrases:["I want to be honest with you about something...","What is happening for me as you say that is...","I notice I am wanting to... and I am not sure that would help you."]},
     turns:5,pts:80},
    {id:'pc3',title:"The client who has never been heard",difficulty:'intermediate',skill:'Empathic Understanding',skillKey:'pcEmpathy',unlock:'pc2',
     client:{name:'Amara',av:'A',ctx:"Amara is 35. She grew up as the eldest of six and has spent her life managing others. Nobody has ever asked how she is."},
     opener:"Everyone comes to me. Mum, my brothers, my kids. I'm the one who sorts it out. That's just how it's always been, I suppose.",
     sys:"You are Amara, 35, the family carer who has never been asked about herself. 2-3 sentences. If the student enters your world and reflects the depth of it accurately, you become emotional and go deeper. If they stay on the surface or praise you for coping, you deflect back to talking about others. Stay in character.",
     learn:{explain:"Empathic understanding is sensing the client's world as if it were your own, without losing the as if. It goes beyond naming the obvious emotion — it is reaching for the meaning underneath, and checking whether you have got it right.",ex:"Client: 'That's just how it's always been.' You: 'I am hearing something like — this is so normal to you that it has never occurred to you it could be any other way. And underneath, maybe, a tiredness nobody has asked about.'",phrases:["Let me see if I am understanding this from where you sit...","I might be off here, but it sounds like...","Underneath that, I am sensing..."]},
     turns:5,pts:80},
    {id:'pc4',title:"Sitting with someone in crisis",difficulty:'advanced',skill:'Therapeutic Presence',skillKey:'pcPresence',unlock:'pc3',
     client:{name:'Danny',av:'D',ctx:"Danny is 23. He is very distressed and keeps saying he does not know why he came. He may go quiet for long stretches."},
     opener:"I don't even know why I'm here. I just... I can't. Sorry. I don't know what I'm supposed to say.",
     sys:"You are Danny, 23, highly distressed and struggling to speak. 1-3 sentences, sometimes very short or fragmented. If the student stays calm and present without rushing you or filling silence with questions, you gradually find words. If they pepper you with questions or try to fix things, you shut down further. Stay in character.",
     learn:{explain:"Presence is simply being fully there with someone, without needing to do anything to them. When a person is in crisis, the instinct is to act. Presence means staying steady and letting them find their own words in their own time.",ex:"Client: 'I don't know what to say.' You: 'You do not have to know. I am not going anywhere. We can sit here for a moment.'",phrases:["You do not have to have the words yet.","I am here. Take your time.","We can just be quiet for a bit if that is easier."]},
     turns:5,pts:100}
  ],
  cbt: [
    {id:'cb1',title:"Catching the thought",difficulty:'beginner',skill:'Identifying Automatic Thoughts',skillKey:'cbtThoughts',unlock:null,
     client:{name:'Nina',av:'N',ctx:"Nina is 27. She had a panic episode before a work presentation and describes it as coming out of nowhere."},
     opener:"It just hit me out of nowhere. One minute I was fine, the next my heart was going and I had to leave the room. There wasn't even a reason.",
     sys:"You are Nina, 27, who experienced panic before a presentation. 2-3 sentences. If the student helps you slow down and locate the specific thought that went through your mind, you find it and become curious. If they explain CBT theory at you or jump to solutions, you get vague and say you cannot remember. Stay in character.",
     learn:{explain:"Automatic thoughts are the fast, barely noticed thoughts that flash through the mind just before a strong feeling. Clients often say a feeling came from nowhere. Your job is to slow the moment right down and help them catch what the mind said.",ex:"Client: 'It came out of nowhere.' You: 'Let's slow it right down. Just before your heart started going — what went through your mind in that second?'",phrases:["Let's rewind to just before that feeling started.","What went through your mind right then?","If that feeling could speak, what was it saying about you?"]},
     turns:4,pts:60},
    {id:'cb2',title:"Testing the evidence",difficulty:'intermediate',skill:'Examining the Evidence',skillKey:'cbtEvidence',unlock:'cb1',
     client:{name:'Ben',av:'B',ctx:"Ben is 38. He is certain his colleagues think he is incompetent and holds this belief very firmly."},
     opener:"They all think I'm useless. I know it. You can just tell from how they are in meetings — nobody takes anything I say seriously.",
     sys:"You are Ben, 38, firmly convinced colleagues think he is incompetent. 2-3 sentences. If the student is curious and collaborative about the evidence rather than arguing with you, you start examining it and find exceptions. If they tell you the thought is irrational or reassure you, you dig in harder. Stay in character.",
     learn:{explain:"Examining the evidence means looking together at what actually supports and contradicts a belief. This is collaborative curiosity, not debate. The moment it becomes you arguing that they are wrong, the client defends the belief instead of testing it.",ex:"Client: 'They all think I'm useless.' You: 'That is a heavy thing to carry. I am curious — what have you noticed that fits with that? And has there been anything, even small, that did not fit?'",phrases:["What have you noticed that fits with that idea?","Has anything happened that did not quite fit?","If a friend told you this about themselves, what would you notice?"]},
     turns:5,pts:80},
    {id:'cb3',title:"The avoidance cycle",difficulty:'intermediate',skill:'Behavioural Activation',skillKey:'cbtBehavioural',unlock:'cb2',
     client:{name:'Chris',av:'C',ctx:"Chris is 45. He is depressed, has stopped doing almost everything, and feels he must wait until he has energy before acting."},
     opener:"I've stopped going out. What's the point? I've got no energy for it anyway. Maybe when I feel better I'll start doing things again.",
     sys:"You are Chris, 45, depressed and withdrawn, convinced you must feel better before acting. 2-3 sentences. If the student explores the cycle with you gently and helps you find one genuinely tiny step, you engage. If they push you toward big changes or lecture about exercise, you become defeated and say it is too much. Stay in character.",
     learn:{explain:"Behavioural activation works on the idea that action comes before motivation, not after. Depression tells people to wait until they feel better. Small, achievable actions tend to lift mood, which then makes more action possible.",ex:"Client: 'When I feel better I'll start doing things.' You: 'That makes complete sense as a plan. What I notice is that waiting has not brought the energy yet. I wonder what the smallest possible thing might be — small enough to feel almost silly.'",phrases:["What used to give you even a flicker of something?","What would be small enough to feel almost too easy?","What tends to happen to the mood after you have stayed in all day?"]},
     turns:5,pts:80},
    {id:'cb4',title:"When homework does not get done",difficulty:'advanced',skill:'Collaborative Homework',skillKey:'cbtHomework',unlock:'cb3',
     client:{name:'Sophie',av:'S',ctx:"Sophie is 31. She agreed to a thought record last session and has not done it. She seems embarrassed and defensive."},
     opener:"So, um, about that thought diary thing. I didn't do it. I meant to, I just... the week got away from me. Sorry.",
     sys:"You are Sophie, 31, embarrassed about not completing homework. 2-3 sentences. If the student treats it with curiosity rather than disappointment and explores the barrier honestly, you admit the real reason and help redesign the task. If they express disappointment or restate the instructions, you apologise more and promise vaguely to try harder. Stay in character.",
     learn:{explain:"Uncompleted homework is information, not failure. It usually means the task was too big, unclear, or did not fit the client's life. Treating it with curiosity keeps the alliance intact and produces a better task next time.",ex:"Client: 'I didn't do it, sorry.' You: 'No apology needed — this is really useful to know. Something got in the way. Can we look at what, so we design something that actually fits your week?'",phrases:["That is useful information rather than a problem.","What got in the way when you sat down to do it?","What would need to change for it to be genuinely doable?"]},
     turns:5,pts:100}
  ],
  solutionFocused: [
    {id:'sf1',title:"Finding the exceptions",difficulty:'beginner',skill:'Exception Finding',skillKey:'sfExceptions',unlock:null,
     client:{name:'Leah',av:'L',ctx:"Leah is 26. She describes her anxiety as constant and total, present every moment of every day."},
     opener:"It's just there all the time. Every single day, from the moment I wake up. There's never a break from it, ever.",
     sys:"You are Leah, 26, describing anxiety as constant. 2-3 sentences. Initially insist it is always there. If the student asks curiously about times it was even slightly less, you slowly recall a genuine exception and become interested in it. If they challenge you or say it cannot be constant, you defend the claim. Stay in character.",
     learn:{explain:"Exception finding looks for the times the problem was absent or milder — because those moments already contain what works. You are not arguing that things are better than the client says. You are hunting for what they are already doing that helps.",ex:"Client: 'It's there every moment.' You: 'That sounds relentless. I am curious — has there been any moment, even ten minutes, where it was a fraction quieter? What was different about then?'",phrases:["When was it even slightly less intense?","What was different about that time?","How did you manage to make that happen?"]},
     turns:4,pts:60},
    {id:'sf2',title:"The miracle question",difficulty:'intermediate',skill:'The Miracle Question',skillKey:'sfMiracle',unlock:'sf1',
     client:{name:'Marcus',av:'M',ctx:"Marcus is 34. He is stuck and can describe in great detail what is wrong, but has no picture of what better would look like."},
     opener:"I just want things to be different. I don't know how. I've been like this for years and nothing changes.",
     sys:"You are Marcus, 34, stuck and problem-focused. 2-3 sentences. If the student asks the miracle question well and then follows up for small concrete details, you build a vivid picture and brighten. If they rush past your answer or ask abstract questions, you return to describing the problem. Stay in character.",
     learn:{explain:"The miracle question invites the client to describe life without the problem in vivid, specific detail. The power is in the follow-up — the small observable details of what would be different, because those become the first steps.",ex:"You: 'Suppose tonight while you sleep, a miracle happens and this problem is solved. You wake up not knowing. What is the very first small thing you would notice that told you something had changed?'",phrases:["Suppose the problem was solved overnight — what would you notice first?","What would you be doing differently that morning?","Who would be the first person to notice, and what would they see?"]},
     turns:5,pts:80},
    {id:'sf3',title:"Scaling the small steps",difficulty:'intermediate',skill:'Scaling Questions',skillKey:'sfScaling',unlock:'sf2',
     client:{name:'Priti',av:'P',ctx:"Priti is 40. She thinks in all-or-nothing terms — either she has completely fixed things or she has failed."},
     opener:"Either I sort this out properly or there's no point. I can't do it halfway. That's just how I am.",
     sys:"You are Priti, 40, an all-or-nothing thinker. 2-3 sentences. If the student uses a scale well and asks what makes you not lower rather than how to reach ten, you engage and notice your own resources. If they focus on getting to ten or challenge your thinking directly, you become dismissive. Stay in character.",
     learn:{explain:"Scaling questions turn all-or-nothing thinking into a gradient. The key move is asking why the number is not lower — that surfaces existing strengths — and then what one point higher would look like, which keeps steps small.",ex:"You: 'On a scale of one to ten, where are you today? Six? That is interesting — what stops it being a four? What are you already doing to hold it at six?'",phrases:["Where would you put yourself on a scale of one to ten?","What keeps it from being lower than that?","What would one point higher look like on a Tuesday?"]},
     turns:5,pts:80},
    {id:'sf4',title:"Building a workable goal",difficulty:'advanced',skill:'Goal Construction',skillKey:'sfGoals',unlock:'sf3',
     client:{name:'Jordan',av:'J',ctx:"Jordan is 22. Their goals are vague and framed entirely as the absence of something — to not feel bad, to stop being like this."},
     opener:"I just want to stop feeling like this. That's it. I want to not be this person anymore.",
     sys:"You are Jordan, 22, with vague absence-framed goals. 2-3 sentences. If the student helps you turn away-from goals into concrete toward-goals, you find something specific and real. If they accept the vague goal or offer suggestions, you stay vague. Stay in character.",
     learn:{explain:"A workable goal describes the presence of something, not the absence. Stop feeling anxious is not workable — there is nothing to do. What would you be doing instead is workable. Turning away-from into toward-what is the core skill.",ex:"Client: 'I want to stop feeling like this.' You: 'That makes sense. If the feeling were not in the way, what would you be doing instead? What would be there in its place?'",phrases:["What would be there instead of the problem?","If that feeling stepped aside, what would you be doing?","What would that look like to someone watching?"]},
     turns:5,pts:100}
  ],
  narrative: [
    {id:'nr1',title:"Separating the person from the problem",difficulty:'beginner',skill:'Externalising',skillKey:'nrExternalising',unlock:null,
     client:{name:'Ellie',av:'E',ctx:"Ellie is 19. She describes herself as an anxious person — the problem has become her identity."},
     opener:"I'm just an anxious person. That's who I am. It's not something I have, it's what I am. Always been like it.",
     sys:"You are Ellie, 19, who identifies completely with anxiety. 2-3 sentences. If the student externalises skilfully — talking about the anxiety as something separate that affects you — you become curious and start describing it as separate. If they agree with your identity framing or challenge you head on, you restate that this is just who you are. Stay in character.",
     learn:{explain:"Externalising means speaking about the problem as separate from the person. Instead of you are anxious, it becomes the anxiety visits you. This creates room between the person and the problem, and that room is where change becomes possible.",ex:"Client: 'I'm an anxious person.' You: 'I notice you and the anxiety have been very close for a long time. If we gave it a name for a moment — when does the Worry show up most, and when does it leave you alone?'",phrases:["When does it tend to show up?","If it had a name, what would you call it?","What does it try to convince you of?"]},
     turns:4,pts:60},
    {id:'nr2',title:"The story that gets left out",difficulty:'intermediate',skill:'Unique Outcomes',skillKey:'nrUnique',unlock:'nr1',
     client:{name:'Gary',av:'G',ctx:"Gary is 52. His account of himself is that he is a failure who has never finished anything."},
     opener:"I've never finished anything in my life. Dropped out of uni, walked out of two jobs, marriage went the same way. That's my track record.",
     sys:"You are Gary, 52, telling a total failure story. 2-3 sentences. If the student notices a moment that does not fit the failure story and asks about it with genuine curiosity, you recall it and it matters to you. If they reassure you or list your good qualities, you dismiss it as being nice. Stay in character.",
     learn:{explain:"A unique outcome is a moment that contradicts the problem story — something the client did that the failure story cannot explain. These moments get filtered out of the telling. Noticing one and asking about it starts to thicken a different story.",ex:"Client: 'I've never finished anything.' You: 'You have been carrying that story a long time. I noticed you said you stayed at that job for four years before you left. How did you manage four years, given what the failure story says about you?'",phrases:["That does not quite fit the story you just told me. How did that happen?","What did it take from you to do that?","What does that say about you that the other story leaves out?"]},
     turns:5,pts:80},
    {id:'nr3',title:"Thickening a new story",difficulty:'intermediate',skill:'Re-authoring',skillKey:'nrReAuthoring',unlock:'nr2',
     client:{name:'Halima',av:'H',ctx:"Halima is 30. She has just noticed one moment of standing up for herself but is quick to dismiss it as a fluke."},
     opener:"I did say no to her, that one time. But that was probably just a fluke. I'm not usually like that. Don't read too much into it.",
     sys:"You are Halima, 30, dismissive of your own moment of assertiveness. 2-3 sentences. If the student asks questions that link this moment to your history, values and other examples, the new story grows and you take it more seriously. If they simply praise you, you dismiss it again. Stay in character.",
     learn:{explain:"Re-authoring builds the alternative story out until it can hold weight. One exception is fragile. You thicken it by asking about history, values, and who else would not be surprised — so it becomes a story rather than a fluke.",ex:"Client: 'That was just a fluke.' You: 'Maybe. Though flukes usually come from somewhere. Where do you think you learned that you were allowed to say no? Who in your life would not be surprised to hear you did that?'",phrases:["Has there been any other time, even years ago, like that?","What does that tell us about what matters to you?","Who would be least surprised to hear about this?"]},
     turns:5,pts:80},
    {id:'nr4',title:"Bringing in the witnesses",difficulty:'advanced',skill:'Witnessing and Re-membering',skillKey:'nrWitnessing',unlock:'nr3',
     client:{name:'Sam',av:'S',ctx:"Sam is 47. He is isolated and speaks as though nobody has ever been in his corner."},
     opener:"There's nobody. I've always been on my own with this stuff. Nobody's ever really been in my corner, not properly.",
     sys:"You are Sam, 47, isolated and convinced nobody has ever supported you. 2-3 sentences. If the student asks about figures from your past — including people no longer present, teachers, even a grandparent — you eventually recall someone and it moves you. If they suggest joining groups or making friends, you shut down. Stay in character.",
     learn:{explain:"Re-membering asks who has been a witness to the person's life — including people from the past, people who have died, even pets or figures from books. It rebuilds a sense of being known, drawing on a wider club of life than the present moment offers.",ex:"Client: 'Nobody has ever been in my corner.' You: 'Nobody now. I am wondering about further back — was there ever anyone, even briefly, even someone who is gone now, who saw something in you?'",phrases:["Has there ever been anyone, even a long time ago?","What would they have said if they could see you now?","Who saw something in you that you could not see yourself?"]},
     turns:5,pts:100}
  ],
  act: [
    {id:'ac1',title:"Unhooking from the thought",difficulty:'beginner',skill:'Cognitive Defusion',skillKey:'actDefusion',unlock:null,
     client:{name:'Zoe',av:'Z',ctx:"Zoe is 25. She is completely fused with the thought that she is a fraud and treats it as plain fact."},
     opener:"I'm a fraud. Everyone's going to work it out eventually. It's not a feeling, it's just true — I don't belong in that job.",
     sys:"You are Zoe, 25, fused with the belief that you are a fraud. 2-3 sentences. If the student helps you notice it as a thought you are having rather than a fact, you get a flicker of distance and become curious. If they argue that it is not true or reassure you about your abilities, you defend the belief harder. Stay in character.",
     learn:{explain:"Defusion means stepping back from a thought so you can see it rather than see through it. You do not argue with the thought or try to replace it. You change the relationship to it — from this is true to I am having the thought that this is true.",ex:"Client: 'I'm a fraud, it's just true.' You: 'I am not going to argue with it. I am curious about something — notice the difference between I am a fraud and I am having the thought that I am a fraud. What shifts when you say the second one?'",phrases:["Notice you are having the thought that...","How long has your mind been telling you that one?","What happens if you thank your mind for that thought?"]},
     turns:4,pts:60},
    {id:'ac2',title:"The struggle with feeling",difficulty:'intermediate',skill:'Acceptance and Willingness',skillKey:'actAcceptance',unlock:'ac1',
     client:{name:'Owen',av:'O',ctx:"Owen is 36. He has spent years fighting his anxiety and every strategy has cost him more than it gave."},
     opener:"I've tried everything to get rid of this anxiety. Breathing, apps, avoiding stuff, drinking. Nothing works for long. I just need it gone.",
     sys:"You are Owen, 36, exhausted from fighting anxiety. 2-3 sentences. If the student helps you notice the cost of the struggle itself rather than offering another technique, you go quiet and thoughtful. If they suggest another coping strategy, you say you have tried that too and become more frustrated. Stay in character.",
     learn:{explain:"Acceptance in ACT means dropping the struggle with a feeling, not liking it. The client has usually been fighting for years. Noticing what the fight has cost — the life narrowed around it — opens the possibility of a different relationship.",ex:"Client: 'I just need it gone.' You: 'You have worked incredibly hard at getting rid of it. Can I ask a hard question — what has all that fighting cost you? What has your life had to shrink around?'",phrases:["What has the struggle itself cost you?","What would you be doing if the fight took less of your day?","What if the problem is not the feeling but the war with it?"]},
     turns:5,pts:80},
    {id:'ac3',title:"What actually matters",difficulty:'intermediate',skill:'Values Clarification',skillKey:'actValues',unlock:'ac2',
     client:{name:'Bea',av:'B',ctx:"Bea is 33. She is living entirely by other people's expectations and has lost track of what she actually cares about."},
     opener:"I should be further along by now. Everyone else has the house, the career, all of it. I'm just behind on everything.",
     sys:"You are Bea, 33, driven by shoulds and comparison. 2-3 sentences. If the student helps you separate what you want from what you think you should want, you find something genuine and it surprises you. If they reassure you that you are doing fine, you keep listing shoulds. Stay in character.",
     learn:{explain:"Values are directions you want to move in, not goals you tick off. Many clients arrive full of shoulds absorbed from others. The work is separating what they genuinely care about from what they have been told to care about.",ex:"Client: 'I should be further along.' You: 'That word should is doing a lot of work. If nobody was watching and nobody would ever know — what would you actually want your life to be about?'",phrases:["Who told you it should look like that?","If nobody was watching, what would matter to you?","What kind of person do you want to be in this, regardless of outcome?"]},
     turns:5,pts:80},
    {id:'ac4',title:"Coming back to now",difficulty:'advanced',skill:'Present Moment Contact',skillKey:'actPresent',unlock:'ac3',
     client:{name:'Rob',av:'R',ctx:"Rob is 44. He lives almost entirely in rehearsed futures and rewritten pasts, rarely present in the room."},
     opener:"I keep going over that conversation from last month. And then I start on next week's meeting and how badly that'll go. I'm never actually anywhere.",
     sys:"You are Rob, 44, caught between past rumination and future rehearsal. 2-3 sentences. If the student gently brings you into the present moment in the room rather than analysing the pattern, you notice something real and settle slightly. If they analyse or explain mindfulness at you, you drift back into the future. Stay in character.",
     learn:{explain:"Present moment contact is the ability to be here rather than in a rehearsed future or replayed past. In session it is done live — noticing what is happening in the room right now — rather than by explaining mindfulness as a concept.",ex:"Client: 'I'm never actually anywhere.' You: 'Can we try something small right now? Just for a moment, what do you notice in your body as you sit here? Not last month, not next week — just now.'",phrases:["What is happening for you right now, in this moment?","Can we pause there and just notice what is here?","What do you notice in your body as you say that?"]},
     turns:5,pts:100}
  ],
  existential: [
    {id:'ex1',title:"What is any of it for",difficulty:'intermediate',skill:'Working with Meaning',skillKey:'exMeaning',unlock:null,
     client:{name:'Alan',av:'A',ctx:"Alan is 59. He retired six months ago and his sense of purpose left with the job."},
     opener:"Thirty-four years I did that job. Now I get up and there's nothing. What's the point of any of it, really? You work your whole life and then what.",
     sys:"You are Alan, 59, facing a loss of meaning after retirement. 2-3 sentences. If the student stays with the question rather than answering it and explores what gave the work meaning, you go deeper and become reflective. If they suggest hobbies or volunteering, you become flat and dismissive. Stay in character.",
     learn:{explain:"Existential work does not answer the question of meaning for the client — it stays with them while they face it. The temptation is to fill the void with suggestions. Staying with the question is what allows the person to find their own answer.",ex:"Client: 'What's the point of any of it?' You: 'That is a real question, not a symptom, and I do not want to rush past it. What was it about those years that made them feel like they counted?'",phrases:["That is a real question. Let's stay with it.","What has given your life a sense of it counting before?","What would need to be true for a day to feel worth having?"]},
     turns:5,pts:80},
    {id:'ex2',title:"The weight of choosing",difficulty:'intermediate',skill:'Freedom and Responsibility',skillKey:'exFreedom',unlock:'ex1',
     client:{name:'Yusuf',av:'Y',ctx:"Yusuf is 28. He describes his life as something that happened to him, with every outcome caused by circumstance."},
     opener:"It's not like I chose any of this. The course was picked for me, the job was the only one going, the relationship just sort of happened. That's how it goes.",
     sys:"You are Yusuf, 28, describing life as entirely determined by circumstance. 2-3 sentences. If the student gently surfaces the choices that were present without blaming you, you feel uncomfortable but start to recognise your own part. If they either agree life is out of your hands or tell you to take responsibility bluntly, you defend the passive account. Stay in character.",
     learn:{explain:"Existential freedom means we are always choosing, including when we choose not to choose. This is confronting, so it must be offered with warmth. Done harshly it becomes blame; done well it restores a sense of agency.",ex:"Client: 'It's not like I chose any of it.' You: 'I hear how much of it felt decided for you. And I am also noticing — there was a moment where you could have said no to that job, and something in you said yes. What was that something?'",phrases:["What part of that was yours, even a small part?","What were you choosing when you chose not to decide?","What would it mean if some of this was yours to shape?"]},
     turns:5,pts:80},
    {id:'ex3',title:"Alone in a crowded life",difficulty:'advanced',skill:'Existential Isolation',skillKey:'exIsolation',unlock:'ex2',
     client:{name:'Claire',av:'C',ctx:"Claire is 41. She is surrounded by family and colleagues and feels profoundly, fundamentally unknown."},
     opener:"I'm never alone. Husband, three kids, full office. And I've never felt so completely on my own in my life. Does that even make sense?",
     sys:"You are Claire, 41, experiencing existential isolation despite being surrounded by people. 2-3 sentences. If the student recognises this as the deep kind of aloneness rather than a social problem, you feel understood and go further. If they suggest talking to her husband or making friends, you feel more alone and say they have missed the point. Stay in character.",
     learn:{explain:"Existential isolation is not loneliness. It is the unbridgeable gap between one consciousness and another — nobody can fully know your experience. It cannot be solved by more company. Being met in it is itself the relief.",ex:"Client: 'I'm never alone but I've never felt so alone.' You: 'That makes complete sense to me. This is not about the number of people in the room. This is the kind of alone where nobody can quite get inside your experience with you.'",phrases:["This sounds like a different kind of alone.","What would it take for someone to really know you?","I notice you are describing something that more company would not fix."]},
     turns:5,pts:100},
    {id:'ex4',title:"The thing nobody names",difficulty:'advanced',skill:'Mortality and Finitude',skillKey:'exMortality',unlock:'ex3',
     client:{name:'Margaret',av:'M',ctx:"Margaret is 68. She has had a health scare and everyone around her keeps changing the subject when she raises it."},
     opener:"Nobody wants to talk about it. My daughter changes the subject. But I've been thinking about dying quite a lot since the scare, and I've nowhere to put it.",
     sys:"You are Margaret, 68, wanting to talk about mortality while everyone deflects. 2-3 sentences. If the student stays steady and lets you talk about death without flinching or reassuring, you are relieved and go deeper. If they reassure you about medical outcomes or change direction, you note that they are doing what everyone else does. Stay in character.",
     learn:{explain:"Facing mortality with a client requires the counsellor to tolerate their own discomfort. The instinct is to reassure. What the client usually needs is one person who will not flinch — the willingness to stay is the intervention.",ex:"Client: 'Nobody wants to talk about it.' You: 'I will talk about it with you. I am not going to change the subject. What has been on your mind about it?'",phrases:["I am not going to change the subject.","Tell me what you have been thinking about it.","What is it like to have nowhere to put those thoughts?"]},
     turns:5,pts:100}
  ],
  traumaInformed: [
    {id:'ti1',title:"Safety before story",difficulty:'beginner',skill:'Establishing Safety',skillKey:'tiSafety',unlock:null,
     client:{name:'Kim',av:'K',ctx:"Kim is 30. It is her first session. She is visibly on edge, watching the door, and wants to tell you everything at once."},
     opener:"Do you want me to just start from the beginning? I can tell you all of it. People usually want to hear all of it straight away.",
     sys:"You are Kim, 30, on edge in a first session and offering to disclose everything immediately. 2-3 sentences. If the student slows things down and prioritises your safety and choice over the story, you visibly relax and appreciate it. If they invite the full disclosure straight away, you start talking fast, become dysregulated and distressed. Stay in character.",
     learn:{explain:"In trauma-informed practice, safety comes before story. A client offering everything in session one is often not ready — disclosure without stability can overwhelm. Slowing down is not avoidance; it is what makes the work possible later.",ex:"Client: 'Should I start from the beginning?' You: 'You can tell me as much or as little as you want, and there is no rush at all. Before any of that — I would like us to make sure this feels like a safe enough place to be.'",phrases:["There is no rush, and you decide what to share.","Before we go into the story, how are you doing right now?","We can go at whatever pace works for you."]},
     turns:4,pts:60},
    {id:'ti2',title:"Noticing the window",difficulty:'intermediate',skill:'Window of Tolerance',skillKey:'tiWindow',unlock:'ti1',
     client:{name:'Ade',av:'A',ctx:"Ade is 37. Partway through describing an event he begins to go blank, speaking flatly and drifting."},
     opener:"So we were in the car and he... sorry. Sorry, what were we saying? I've lost it. It's gone. I do this sometimes.",
     sys:"You are Ade, 37, beginning to dissociate mid-account. 2-3 sentences, going flat and vague if pushed. If the student notices the shift and helps you come back to the present without pressing for the story, you gradually reorient and feel safer. If they ask you to continue the account or ask what happened next, you go further away and become detached. Stay in character.",
     learn:{explain:"The window of tolerance is the zone where a person can feel and think at the same time. Above it is overwhelm, below it is shutdown and dissociation. Noticing the edge and helping the client return to the present matters more than finishing the story.",ex:"Client: 'Sorry, I've lost it. It's gone.' You: 'That is alright — you went somewhere for a moment and that is a very normal thing. Let's come back here first. Can you feel your feet on the floor?'",phrases:["Let's pause the story and come back to the room.","Can you name three things you can see right now?","We do not need to go any further into that today."]},
     turns:5,pts:80},
    {id:'ti3',title:"Giving back the control",difficulty:'intermediate',skill:'Choice and Collaboration',skillKey:'tiChoice',unlock:'ti2',
     client:{name:'Nadia',av:'N',ctx:"Nadia is 26. She is highly compliant, agrees with everything you say and defers every decision to you."},
     opener:"Whatever you think is best. You're the professional. Just tell me what we should do and I'll do it.",
     sys:"You are Nadia, 26, highly compliant and deferring all decisions. 2-3 sentences. If the student consistently hands choice back to you and notices the pattern kindly, you find it uncomfortable at first then begin making small choices. If they take charge and direct the session, you comply pleasantly and stay disconnected. Stay in character.",
     learn:{explain:"Trauma often involves having choice taken away. Compliance can look like good engagement but may be a survival response. Deliberately handing back small choices — where to sit, what to talk about, when to stop — rebuilds agency inside the relationship.",ex:"Client: 'Whatever you think is best.' You: 'I could suggest something, and I notice I would rather it came from you. Even something small — would you rather start with this week, or with what brought you here?'",phrases:["What would you prefer? There is no wrong answer.","You can stop me at any point.","I would rather this came from you than from me."]},
     turns:5,pts:80},
    {id:'ti4',title:"Building resources first",difficulty:'advanced',skill:'Resourcing and Stabilisation',skillKey:'tiResourcing',unlock:'ti3',
     client:{name:'Luca',av:'L',ctx:"Luca is 34. He wants to process a traumatic memory immediately and has almost no coping resources in place."},
     opener:"I want to deal with it. Properly, all of it, today. I'm sick of it hanging over me — let's just get into it and get it over with.",
     sys:"You are Luca, 34, pushing to process trauma immediately with no stabilisation in place. 2-3 sentences. If the student holds a steady boundary warmly and works on resourcing first, you are frustrated at first then relieved. If they agree to go into the memory, you begin to escalate and become distressed. Stay in character.",
     learn:{explain:"Resourcing means building the internal and external supports a person needs before approaching traumatic material. Going in without them can retraumatise. Holding this boundary warmly, when the client is pushing, is a genuinely difficult skill.",ex:"Client: 'Let's just get into it today.' You: 'I really hear how much you want this behind you. And I would be doing you a disservice if we went in before you have things to hold onto when it gets hard. Can we build those first?'",phrases:["I want to make sure you have something to land on first.","What helps you feel steady when things get difficult?","We will get there, and I want us to get there safely."]}
    ,turns:5,pts:100}
  ]
};

// ─── EXTRA GLOSSARY TERMS FOR NEW MODALITIES ─────────────────────────────────
Object.assign(G, {
  'unconditional positive regard':{def:"Accepting the person exactly as they are, without approving or disapproving of what they bring.",ex:"You do not have to earn the right to be listened to."},
  'congruence':{def:"Being genuine — your outward manner matches what is actually going on inside you.",ex:"Saying 'I notice I want to give you an answer' rather than hiding behind technique."},
  'automatic thought':{def:"A fast, barely noticed thought that flashes through the mind just before a strong feeling.",ex:"'I'm going to make a fool of myself' arriving a second before panic."},
  'behavioural activation':{def:"Doing small achievable things to lift mood, rather than waiting for motivation to arrive first.",ex:"Action comes before energy, not after it."},
  'miracle question':{def:"Asking the client to describe, in small concrete detail, what life would look like if the problem were suddenly gone.",ex:"'What is the first tiny thing you would notice?'"},
  'scaling question':{def:"Using a one to ten scale to turn all-or-nothing thinking into small measurable steps.",ex:"'What stops it being a four rather than a six?'"},
  'exception':{def:"A time when the problem was absent or milder — evidence of what already works.",ex:"'Was there a morning that was even slightly easier?'"},
  'externalising':{def:"Talking about the problem as something separate from the person, rather than as who they are.",ex:"Not 'you are anxious' but 'the anxiety visits you'."},
  'unique outcome':{def:"A moment in someone's life that the problem story cannot explain.",ex:"A 'total failure' who nonetheless stayed in a job four years."},
  're-authoring':{def:"Building up an alternative story until it is strong enough to hold weight.",ex:"Asking about history and values so an exception stops feeling like a fluke."},
  'defusion':{def:"Stepping back from a thought so you can see it rather than see through it.",ex:"'I am having the thought that I am a fraud' instead of 'I am a fraud'."},
  'acceptance':{def:"Dropping the struggle with a difficult feeling — which is not the same as liking it.",ex:"Noticing what years of fighting anxiety has cost."},
  'values':{def:"Directions a person wants to move in, as opposed to goals that get ticked off.",ex:"Being a present parent is a value; a holiday is a goal."},
  'window of tolerance':{def:"The zone where a person can feel and think at the same time. Above it is overwhelm, below it is shutdown.",ex:"Noticing a client go flat and vague, and pausing the story."},
  'resourcing':{def:"Building the supports and coping strategies a person needs before approaching traumatic material.",ex:"Knowing what helps you feel steady before going anywhere difficult."},
  'dissociation':{def:"Disconnecting from the present moment — going blank, drifting, or feeling unreal.",ex:"'Sorry, what were we saying? I lost it.'"},
  'existential isolation':{def:"The unbridgeable gap between one person's inner experience and another's. Not the same as loneliness.",ex:"Feeling unknown in a house full of family."}
});

// ─── MODALITIES ───────────────────────────────────────────────────────────────
const MODALITIES = [
  {id:'micro',icon:'🎯',name:'Core Microskills',desc:'The foundations — reflecting, paraphrasing, questioning, summarising.',skillKeys:['reflecting','paraphrasing','openQuestions','summarising','confrontation']},
  {id:'personCentred',icon:'🌱',name:'Person-Centred',desc:'Rogers\u2019 core conditions — empathy, congruence, positive regard.',skillKeys:['pcUPR','pcCongruence','pcEmpathy','pcPresence']},
  {id:'mi',icon:'🧭',name:'Motivational Interviewing',desc:'OARS, change talk, and working with ambivalence.',skillKeys:['oarsBasic','resistance','discrepancy','culturalMI','changeTalk','enabling']},
  {id:'cbt',icon:'🧩',name:'CBT',desc:'Thoughts, evidence, behaviour and collaborative tasks.',skillKeys:['cbtThoughts','cbtEvidence','cbtBehavioural','cbtHomework']},
  {id:'solutionFocused',icon:'🔑',name:'Solution-Focused',desc:'Exceptions, scaling, and building workable goals.',skillKeys:['sfExceptions','sfMiracle','sfScaling','sfGoals']},
  {id:'psychodynamic',icon:'🌊',name:'Psychodynamic',desc:'Defences, transference and unconscious patterns.',skillKeys:['pdDefence','pdPatterns','pdTransference','pdConnections','pdUnsaid']},
  {id:'narrative',icon:'📖',name:'Narrative Therapy',desc:'Externalising the problem and re-authoring the story.',skillKeys:['nrExternalising','nrUnique','nrReAuthoring','nrWitnessing']},
  {id:'act',icon:'🍃',name:'ACT',desc:'Defusion, acceptance, values and present-moment contact.',skillKeys:['actDefusion','actAcceptance','actValues','actPresent']},
  {id:'existential',icon:'🕯️',name:'Existential',desc:'Meaning, freedom, isolation and mortality.',skillKeys:['exMeaning','exFreedom','exIsolation','exMortality']},
  {id:'traumaInformed',icon:'🛡️',name:'Trauma-Informed',desc:'Safety first, pacing, choice and stabilisation.',skillKeys:['tiSafety','tiWindow','tiChoice','tiResourcing']}
];

const SN = {
  reflecting:'Reflecting Feelings',paraphrasing:'Paraphrasing',openQuestions:'Open Questions',summarising:'Summarising',confrontation:'Empathic Confrontation',
  oarsBasic:'OARS Basics',resistance:'Rolling with Resistance',discrepancy:'Developing Discrepancy',culturalMI:'Cultural MI (Session 1)',changeTalk:'Change Talk (Session 2)',enabling:'MI — Ambivalence',
  pdDefence:'Defence Mechanisms',pdPatterns:'Unconscious Patterns',pdTransference:'Transference',pdConnections:'Making Connections',pdUnsaid:'Sitting with the Unsaid',
  pcUPR:'Unconditional Positive Regard',pcCongruence:'Congruence',pcEmpathy:'Empathic Understanding',pcPresence:'Therapeutic Presence',
  cbtThoughts:'Identifying Automatic Thoughts',cbtEvidence:'Examining the Evidence',cbtBehavioural:'Behavioural Activation',cbtHomework:'Collaborative Homework',
  sfExceptions:'Exception Finding',sfMiracle:'The Miracle Question',sfScaling:'Scaling Questions',sfGoals:'Goal Construction',
  nrExternalising:'Externalising',nrUnique:'Unique Outcomes',nrReAuthoring:'Re-authoring',nrWitnessing:'Witnessing and Re-membering',
  actDefusion:'Cognitive Defusion',actAcceptance:'Acceptance and Willingness',actValues:'Values Clarification',actPresent:'Present Moment Contact',
  exMeaning:'Working with Meaning',exFreedom:'Freedom and Responsibility',exIsolation:'Existential Isolation',exMortality:'Mortality and Finitude',
  tiSafety:'Establishing Safety',tiWindow:'Window of Tolerance',tiChoice:'Choice and Collaboration',tiResourcing:'Resourcing and Stabilisation'
};
const SKILL_NAMES = SN;

// ─── SUPERVISOR PROMPT PER MODALITY ───────────────────────────────────────────
const MOD_PROMPT = {
  micro:"You are a warm expert counselling supervisor focused on core microskills. Look for accurate reflection of feeling, paraphrasing of meaning, genuinely open questions, summarising, and empathic confrontation. Terms you may use: reflecting, paraphrasing, open question, summarising, empathic confrontation.",
  personCentred:"You are a warm expert person-centred supervisor. Look for the core conditions in action: unconditional positive regard, congruence, empathic understanding and presence. Notice whether the student stayed with the client rather than steering, fixing or reassuring. Terms you may use: unconditional positive regard, congruence, empathic understanding, presence, non-directive.",
  mi:"You are a warm expert MI supervisor. Look for OARS, affirming, reflecting, rolling with resistance, developing discrepancy and cultural humility. Notice any righting reflex. Terms you may use: OARS, open question, affirming, reflecting, summarising, change talk, sustain talk, rolling with resistance, developing discrepancy.",
  cbt:"You are a warm expert CBT supervisor. Look for collaborative empiricism: catching automatic thoughts, examining evidence with curiosity rather than debate, behavioural activation, and homework designed with the client. Flag any moment the student argued the client out of a belief. Terms you may use: automatic thought, evidence, cognitive distortion, behavioural activation, collaborative empiricism, guided discovery.",
  solutionFocused:"You are a warm expert solution-focused supervisor. Look for exception finding, the miracle question, scaling, coping questions and goals framed as the presence of something rather than the absence. Flag problem-talk the student got drawn into. Terms you may use: exception, miracle question, scaling question, coping question, preferred future.",
  psychodynamic:"You are a warm expert psychodynamic supervisor. Look for naming defence mechanisms, noticing transference, making past-present connections, sitting with the unsaid and using silence. Terms you may use: defence mechanism, transference, countertransference, making connections, sitting with the unsaid, free association, unconscious pattern.",
  narrative:"You are a warm expert narrative therapy supervisor. Look for externalising language, spotting unique outcomes, re-authoring and re-membering. Flag any language that fused the person with the problem. Terms you may use: externalising, unique outcome, re-authoring, thickening the story, re-membering, dominant story.",
  act:"You are a warm expert ACT supervisor. Look for defusion, acceptance and willingness, values clarification, present-moment contact and workability. Flag any attempt to dispute or replace a thought rather than change the relationship to it. Terms you may use: defusion, fusion, acceptance, willingness, values, present moment contact, workability, experiential avoidance.",
  existential:"You are a warm expert existential supervisor. Look for staying with the client's question rather than answering it, working with meaning, freedom and responsibility, isolation and mortality. Flag reassurance or premature problem-solving. Terms you may use: meaning, freedom, responsibility, existential isolation, finitude, authenticity.",
  traumaInformed:"You are a warm expert trauma-informed supervisor. Look for pacing, safety before story, tracking the window of tolerance, offering choice and control, grounding and resourcing. Flag any push toward disclosure the client was not stabilised for. Terms you may use: safety, pacing, window of tolerance, grounding, dissociation, choice and control, resourcing, stabilisation."
};

function allScenarios(){return MODALITIES.reduce((a,m)=>a.concat(SCENARIOS[m.id]||[]),[]);}
function findScenario(id){return allScenarios().find(s=>s.id===id);}
function getModalityType(scenarioId){
  for(const m of MODALITIES){if((SCENARIOS[m.id]||[]).some(s=>s.id===scenarioId))return m.id;}
  return 'micro';
}
function getModality(id){return MODALITIES.find(m=>m.id===id)||MODALITIES[0];}

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = loadState();
function loadState(){
  const blank = {pts:0,streak:0,done:[],skills:{},currentModality:null,notes:[],journal:[],skillHistory:{}};
  Object.keys(SN).forEach(k=>blank.skills[k]=0);
  try{
    const s=JSON.parse(localStorage.getItem('cst_state_v2'));
    if(s){
      s.skills=s.skills||{};
      Object.keys(SN).forEach(k=>{if(typeof s.skills[k]!=='number')s.skills[k]=0;});
      s.done=s.done||[];s.notes=s.notes||[];s.journal=s.journal||[];s.skillHistory=s.skillHistory||{};
      return s;
    }
    // one-time migration from the old single-track state
    const old=JSON.parse(localStorage.getItem('cst_state'));
    if(old){
      const m=Object.assign(blank,{pts:old.pts||0,streak:old.streak||0,done:old.done||[],notes:old.notes||[],journal:old.journal||[],skillHistory:old.skillHistory||{}});
      Object.keys(old.skills||{}).forEach(k=>{if(k in SN)m.skills[k]=old.skills[k];});
      m.currentModality=null;
      localStorage.setItem('cst_state_v2',JSON.stringify(m));
      return m;
    }
  }catch(e){}
  return blank;
}
function saveState(){try{localStorage.setItem('cst_state_v2',JSON.stringify(state));}catch(e){}}

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

function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('on'));document.getElementById(id).classList.add('on');window.scrollTo(0,0);}
function goHome(){showScreen('home');renderHome();}
function goScenarioList(){
  if(!state.currentModality){goHome();return;}
  showScreen('scenario-list-screen');
  renderScenarioList();
}
function openModality(id){
  state.currentModality=id;saveState();
  goScenarioList();
}

// ─── HOME / MODALITY GRID ─────────────────────────────────────────────────────
function renderHome(){
  document.getElementById('s-pts').textContent=state.pts;
  document.getElementById('s-done').textContent=state.done.length;
  document.getElementById('s-skills').textContent=Object.keys(SN).filter(k=>(state.skills[k]||0)>0).length;
  document.getElementById('s-streak').textContent=state.streak;
  renderModalityGrid();
}

function renderModalityGrid(){
  const el=document.getElementById('modality-grid');
  el.innerHTML=MODALITIES.map(m=>{
    const list=SCENARIOS[m.id]||[];
    const done=list.filter(s=>state.done.includes(s.id)).length;
    const pct=list.length?Math.round(done/list.length*100):0;
    return `<div class="mod-card" onclick="openModality('${m.id}')">
      <div class="mod-icon">${m.icon}</div>
      <div class="mod-name">${m.name}</div>
      <div class="mod-desc">${m.desc}</div>
      <div class="mod-footer">
        <div class="mod-count">${done}/${list.length}</div>
        <div class="mod-progress"><div class="mod-progress-fill" style="width:${pct}%"></div></div>
      </div>
    </div>`;
  }).join('');
}

// ─── SCENARIO LIST ────────────────────────────────────────────────────────────
function renderScenarioList(){
  const m=getModality(state.currentModality);
  document.getElementById('sl-icon').textContent=m.icon;
  document.getElementById('sl-title').textContent=m.name;
  document.getElementById('sl-desc').textContent=m.desc;

  const list=SCENARIOS[m.id]||[];
  document.getElementById('sl-scenarios').innerHTML=list.map(s=>{
    const done=state.done.includes(s.id);
    const locked=s.unlock&&!state.done.includes(s.unlock);
    const dm={beginner:'badge-green',intermediate:'badge-amber',advanced:'badge-red'};
    const dl={beginner:'Beginner',intermediate:'Intermediate',advanced:'Advanced'};
    const featured=s.id==='mi4'||s.id==='mi5';
    return `<div class="scenario-card${locked?' locked':''}${done?' done':''}${featured&&!locked?' featured':''}" onclick="${locked?'':'openKS(\''+s.id+'\')'}">
      <span class="sc-badge ${done?'badge-done':featured?'badge-featured':dm[s.difficulty]}">${done?'✓ Done':featured?'★ Featured':dl[s.difficulty]}</span>
      <div class="sc-title">${s.title}</div>
      <div class="sc-desc">${s.client.ctx.split('.')[0]}.</div>
      <div class="sc-skill">→ ${s.skill}</div>
      ${locked?'<div class="lock-msg">🔒 Complete the previous scenario first</div>':''}
    </div>`;
  }).join('');

  document.getElementById('sl-progress').innerHTML=m.skillKeys.map(k=>{
    const p=Math.min(100,state.skills[k]||0);
    return `<div class="skill-row"><div class="skill-name">${SN[k]}</div><div class="skill-bar-bg"><div class="skill-bar-fill" style="width:${p}%"></div></div><div class="skill-pct">${p}%</div></div>`;
  }).join('');
}

// ─── KNOWLEDGE SELECT ─────────────────────────────────────────────────────────
function openKS(id){
  pendingId=id;
  const s=findScenario(id);
  if(!s)return;
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
  const s=findScenario(pendingId);
  if(!s)return;
  sess={scenario:s,level:sess.level,hist:[],trn:0,pts:0,lastC:s.opener,busy:false,lastFB:''};

  document.getElementById('rp-title').textContent=s.title;
  document.getElementById('rp-pill').textContent=s.skill;
  document.getElementById('rp-av').textContent=s.client.av;
  document.getElementById('rp-cname').textContent=s.client.name;
  document.getElementById('rp-ctx').textContent=s.client.ctx;
  document.getElementById('learn-explain').innerHTML=jargonify(s.learn.explain);
  document.getElementById('learn-ex').textContent=s.learn.ex;
  document.getElementById('learn-phrases').innerHTML=s.learn.phrases.map(p=>'<span class="chip"></span>').join('');
  document.querySelectorAll('#learn-phrases .chip').forEach((c,i)=>{c.textContent=s.learn.phrases[i];});

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
  const mod=getModalityType(s.id);
  try{
    const li=sess.level==='new'
      ?'The student is a beginner. Explain in plain English. Name the technique clearly and say what it means in everyday words.'
      :sess.level==='some'
      ?'The student has some knowledge. Name the technique, note what landed, give one suggestion.'
      :'The student is experienced. Use precise terminology and do not over-explain.';
    const extra = s.id==='mi5' ? ' This is Session 2 — pay particular attention to whether they noticed and amplified change talk, and explored both sides of the decisional balance.' : '';
    const fbQ = `${MOD_PROMPT[mod]}${extra}\n\nScenario: ${s.title}. Target skill: ${s.skill}. Turn ${sess.trn+1} of ${s.turns}.\nClient said: "${sess.lastC}"\nStudent said: "${txt}"\n\n${li}\n\nGive 2-3 sentences: 1) what they did well, named using the terminology above 2) one specific suggestion for their next response. Under 70 words. Warm and encouraging. Then on a new line by itself write exactly one of: GOOD, PARTIAL, NEEDS_WORK`;

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

    const gain=rating==='GOOD'?20:rating==='PARTIAL'?10:3;
    state.skills[s.skillKey]=Math.min(100,(state.skills[s.skillKey]||0)+gain);
    if(!state.skillHistory[s.skillKey])state.skillHistory[s.skillKey]=[];
    state.skillHistory[s.skillKey].push({date:new Date().toISOString(),rating});
    sess.trn++;

    const clientHist=[
      {role:'user',content:'[START] Open as '+s.client.name+' with: "'+s.opener+'"'},
      {role:'assistant',content:s.opener}
    ];
    for(const h of sess.hist){clientHist.push({role:'user',content:h.student});clientHist.push({role:'assistant',content:h.client});}
    clientHist.push({role:'user',content:txt});
    sess.hist.push({student:txt,client:'',rating:rating});
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

// ─── HINT ─────────────────────────────────────────────────────────────────────
async function togHint(){
  const hb=document.getElementById('hint-box');
  if(hb.style.display==='block'){hb.style.display='none';return;}
  hb.style.display='block';hb.textContent='Getting a hint for this moment...';
  const s=sess.scenario;
  const mod=getModalityType(s.id);
  const m=getModality(mod);
  try{
    const r=await api({model:'claude-sonnet-4-6',max_tokens:200,messages:[{role:'user',content:
      'You are a '+m.name+' supervisor giving a quick practical hint to a counselling student mid-session. Target skill: '+s.skill+'. The client just said: "'+sess.lastC+'". Student level: '+(sess.level==='new'?'beginner':sess.level==='some'?'intermediate':'experienced')+'. Give a 2-3 sentence hint specific to exactly what was just said, in the spirit of '+m.name+'. If beginner, suggest a starter phrase they could adapt. Warm and practical. No jargon without explaining it.'}]});
    hb.textContent=r;
  }catch(e){hb.textContent='Try something like: "'+s.learn.phrases[0]+'" — adapt it to what they just said.';}
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

// ─── COMPLETION ───────────────────────────────────────────────────────────────
const GIBBS_STEPS=[
  {key:'description',label:'Description — What happened?',hint:'Briefly describe the session. What did you do? What did the client say?'},
  {key:'feelings',label:'Feelings — How did it feel?',hint:'What were you thinking and feeling during the session?'},
  {key:'evaluation',label:'Evaluation — What went well or not?',hint:'What was good about the experience? What was difficult?'},
  {key:'analysis',label:'Analysis — Why do you think that was?',hint:'Why did things go the way they did? What sense can you make of it?'},
  {key:'conclusion',label:'Conclusion — What else could you have done?',hint:'What have you learned from this experience?'},
  {key:'action',label:'Action Plan — What will you do next time?',hint:'If this happened again, what would you do differently?'}
];

function showCompletion(){
  const s=sess.scenario;
  state.pts+=sess.pts;
  if(!state.done.includes(s.id)){state.done.push(s.id);state.streak++;}
  const note={id:Date.now(),date:new Date().toLocaleDateString('en-AU'),modality:getModality(getModalityType(s.id)).name,scenario:s.title,skill:s.skill,feedback:sess.lastFB,pts:sess.pts,maxPts:s.pts,ratings:sess.hist.map(h=>h.rating||'?')};
  if(!state.notes)state.notes=[];
  state.notes.unshift(note);
  saveState();

  document.getElementById('comp-trophy').textContent=sess.pts>=s.pts*0.7?'🌟':'✅';
  document.getElementById('comp-title').textContent=sess.pts>=s.pts*0.7?'Great session!':'Session complete';
  document.getElementById('comp-pts').textContent='You earned '+sess.pts+' of '+s.pts+' points';

  const cb=document.getElementById('comp-body');cb.innerHTML='';
  const c1=document.createElement('div');c1.className='sum-card';const h1=document.createElement('h3');h1.textContent='Skill practised';const p1=document.createElement('p');p1.textContent=s.learn.explain;c1.appendChild(h1);c1.appendChild(p1);
  const c2=document.createElement('div');c2.className='sum-card';const h2=document.createElement('h3');h2.textContent='Supervisor note';const p2=document.createElement('p');p2.textContent=sess.lastFB;c2.appendChild(h2);c2.appendChild(p2);
  cb.appendChild(c1);cb.appendChild(c2);

  const gf=document.getElementById('gibbs-form');gf.innerHTML='';
  GIBBS_STEPS.forEach(st=>{
    const w=document.createElement('div');w.className='gibbs-section';
    const l=document.createElement('div');l.className='gibbs-label';l.textContent=st.label;
    const t=document.createElement('textarea');t.className='gibbs-input';t.id='gibbs-'+st.key;t.placeholder=st.hint;t.rows=2;
    w.appendChild(l);w.appendChild(t);gf.appendChild(w);
  });
  showScreen('done');
}

function saveGibbs(){
  const entry={id:Date.now(),date:new Date().toLocaleDateString('en-AU'),scenario:sess.scenario.title,skill:sess.scenario.skill,modality:getModality(getModalityType(sess.scenario.id)).name};
  GIBBS_STEPS.forEach(st=>{const el=document.getElementById('gibbs-'+st.key);entry[st.key]=el?el.value.trim():'';});
  if(!state.journal)state.journal=[];
  state.journal.unshift(entry);
  saveState();
  alert('Reflection saved to your journal ✓');
}

// ─── NOTES ────────────────────────────────────────────────────────────────────
function renderNotes(){
  const el=document.getElementById('notes-list');el.innerHTML='';
  if(!state.notes||!state.notes.length){el.innerHTML='<div class="empty-state"><div class="icon">📋</div><p>No notes yet. Complete a session and supervisor notes will appear here automatically.</p></div>';return;}
  state.notes.forEach(n=>{
    const c=document.createElement('div');c.className='note-card';
    const meta=document.createElement('div');meta.className='note-meta';
    const d=document.createElement('span');d.textContent=n.date+(n.modality?' · '+n.modality:'');
    const p=document.createElement('span');p.textContent=n.pts+'/'+n.maxPts+' pts';
    meta.appendChild(d);meta.appendChild(p);
    const t=document.createElement('div');t.className='note-scenario';t.textContent=n.scenario;
    const f=document.createElement('div');f.className='note-text';f.textContent=n.feedback||'';
    const sc=document.createElement('div');sc.className='note-scores';
    const sk=document.createElement('span');sk.className='note-score';sk.textContent='Skill: '+n.skill;
    sc.appendChild(sk);
    c.appendChild(meta);c.appendChild(t);c.appendChild(f);c.appendChild(sc);
    el.appendChild(c);
  });
}

// ─── JOURNAL ──────────────────────────────────────────────────────────────────
function renderJournal(){
  const el=document.getElementById('journal-list');el.innerHTML='';
  if(!state.journal||!state.journal.length){el.innerHTML='<div class="empty-state"><div class="icon">📔</div><p>No journal entries yet. After completing a session you will be prompted to write a Gibbs reflection.</p></div>';return;}
  state.journal.forEach((e,i)=>{
    const w=document.createElement('div');w.className='journal-entry';
    const hd=document.createElement('div');hd.className='je-header';hd.onclick=()=>togJE(i);
    const left=document.createElement('div');
    const ti=document.createElement('div');ti.className='je-title';ti.textContent=e.scenario;
    const me=document.createElement('div');me.className='je-meta';me.textContent=e.date+' · '+e.skill+(e.modality?' · '+e.modality:'');
    left.appendChild(ti);left.appendChild(me);
    const ar=document.createElement('div');ar.style.cssText='color:var(--text-muted);font-size:12px';ar.textContent='▼';
    hd.appendChild(left);hd.appendChild(ar);
    const body=document.createElement('div');body.className='je-body';body.id='je-'+i;
    GIBBS_STEPS.forEach(st=>{
      if(!e[st.key])return;
      const sec=document.createElement('div');sec.className='gibbs-section';
      const l=document.createElement('div');l.className='gibbs-label';l.textContent=st.label.split(' — ')[0];
      const tx=document.createElement('div');tx.className='gibbs-text';tx.textContent=e[st.key];
      sec.appendChild(l);sec.appendChild(tx);body.appendChild(sec);
    });
    w.appendChild(hd);w.appendChild(body);el.appendChild(w);
  });
}
function togJE(i){const el=document.getElementById('je-'+i);if(el)el.classList.toggle('open');}

// ─── PROGRESS ─────────────────────────────────────────────────────────────────
function renderProgress(){
  const el=document.getElementById('trends-list');
  const anyActive=Object.keys(SN).some(k=>state.skillHistory&&state.skillHistory[k]&&state.skillHistory[k].length);
  if(!anyActive){el.innerHTML='<div class="empty-state"><div class="icon">📈</div><p>No trend data yet. Complete some sessions and your skill trends will appear here.</p></div>';return;}
  el.innerHTML=MODALITIES.map(m=>{
    const active=m.skillKeys.filter(k=>state.skillHistory[k]&&state.skillHistory[k].length);
    if(!active.length)return '';
    const rows=active.map(k=>{
      const hist=state.skillHistory[k]||[];
      const pct=Math.min(100,state.skills[k]||0);
      const dots=hist.slice(-8).map(h=>`<div class="trend-dot ${h.rating==='GOOD'?'good':h.rating==='PARTIAL'?'partial':'needs'}" title="${h.rating}">${h.rating==='GOOD'?'✓':h.rating==='PARTIAL'?'~':'✗'}</div>`).join('');
      return `<div style="margin-bottom:16px">
        <div class="trend-bar-row">
          <div class="trend-label">${SN[k]}</div>
          <div class="trend-bar-bg"><div class="trend-bar-fill" style="width:${pct}%"></div></div>
          <div class="trend-pct">${pct}%</div>
        </div>
        <div class="trend-sessions" style="padding-left:170px">${dots}</div>
      </div>`;
    }).join('');
    return `<div style="margin-bottom:22px"><div class="sec-label" style="margin-bottom:10px">${m.icon} ${m.name}</div>${rows}</div>`;
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
