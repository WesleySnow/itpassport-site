/* IPPASS 学習マップ — 共有ロジック
   localStorageキー:
   ipss.progress   {lessonId:true}          講義完了
   ipss.quizStats  {S:{c,t},M:{c,t},T:{c,t}} 演習の分野別正答数/回答数
   ipss.examHist   [{date,total,S,M,T,pass,n}] 模擬テスト履歴
*/
window.IPSS = (function(){
  // 令和7年度公開問題を演習・模擬テストのプールへ統合
  if(window.QUESTIONS){
    ["QUESTIONS_R07_S","QUESTIONS_R07_M","QUESTIONS_R07_T","QUESTIONS_R06_S","QUESTIONS_R06_M","QUESTIONS_R06_T","QUESTIONS_R05_S","QUESTIONS_R05_M","QUESTIONS_R05_T","QUESTIONS_R04_S","QUESTIONS_R04_M","QUESTIONS_R04_T","QUESTIONS_R03_S","QUESTIONS_R03_M","QUESTIONS_R03_T","QUESTIONS_R08_S","QUESTIONS_R08_M","QUESTIONS_R08_T"].forEach(function(k){
      if(window[k]) window.QUESTIONS = window.QUESTIONS.concat(window[k]);
    });
  }
  const CAT = {
    S:{name:"ストラテジ系", color:"var(--S)", ratio:0.35},
    M:{name:"マネジメント系", color:"var(--M)", ratio:0.20},
    T:{name:"テクノロジ系", color:"var(--T)", ratio:0.45},
    G:{name:"共通", color:"var(--G)", ratio:0}
  };
  function load(key, fallback){
    try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  }
  function save(key, val){
    try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){ /* 保存不可環境では黙って続行 */ }
  }
  const api = {
    CAT,
    getProgress(){ return load("ipss.progress", {}); },
    setDone(id, done){
      const p = api.getProgress();
      if(done) p[id] = true; else delete p[id];
      save("ipss.progress", p);
    },
    getQuizStats(){ return load("ipss.quizStats", {S:{c:0,t:0},M:{c:0,t:0},T:{c:0,t:0}}); },
    recordAnswer(cat, correct){
      const s = api.getQuizStats();
      if(!s[cat]) s[cat] = {c:0,t:0};
      s[cat].t++; if(correct) s[cat].c++;
      save("ipss.quizStats", s);
    },
    getExamHist(){ return load("ipss.examHist", []); },
    recordExam(rec){
      const h = api.getExamHist();
      h.push(rec); save("ipss.examHist", h);
    },
    shuffle(arr){
      const a = arr.slice();
      for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
      return a;
    },
    // 分野比率(35/20/45)でn問をサンプリング。データ不足分は他分野で補完
    sampleExam(n){
      const by = {S:[],M:[],T:[]};
      window.QUESTIONS.forEach(q=>{ if(by[q.cat]) by[q.cat].push(q); });
      let want = {S:Math.round(n*.35), M:Math.round(n*.20), T:0};
      want.T = n - want.S - want.M;
      let picked = [], leftovers = [];
      ["S","M","T"].forEach(c=>{
        const pool = api.shuffle(by[c]);
        picked = picked.concat(pool.slice(0, want[c]));
        leftovers = leftovers.concat(pool.slice(want[c]));
      });
      if(picked.length < n) picked = picked.concat(api.shuffle(leftovers).slice(0, n - picked.length));
      return api.shuffle(picked);
    },
    initLessonPage(id){
      const btn = document.getElementById("doneBtn");
      if(!btn) return;
      const sync = ()=>{
        const done = !!api.getProgress()[id];
        btn.classList.toggle("is-done", done);
        btn.textContent = done ? "完了済み(タップで取消)" : "この回を完了にする";
      };
      btn.addEventListener("click", ()=>{
        api.setDone(id, !api.getProgress()[id]); sync();
      });
      sync();
    },
    esc(s){ return String(s).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }
  };
  return api;
})();

// スマホ用の下部タブバー: ヘッダーのナビから自動生成(全ページ共通)
(function(){
  try{
    var head = document.querySelector(".site-head");
    if(!head || document.querySelector(".bottom-nav")) return;
    var isLesson = /lessons\//.test(location.pathname) || document.body.classList.contains("page-lesson");
    var pre = isLesson ? "../" : "";
    var here = location.pathname.split("/").pop() || "index.html";
    var ICONS = {
      home:'<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
      quiz:'<svg viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
      exam:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
      book:'<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2z"/><path d="M8 7h8M8 11h8"/></svg>',
      chart:'<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>'
    };
    var items = [
      ["index.html","マップ","home"],["quiz.html","演習","quiz"],["exam.html","模試","exam"],
      ["glossary.html","辞典","book"],["dashboard.html","記録","chart"]
    ];
    var nav = document.createElement("nav");
    nav.className = "bottom-nav";
    nav.setAttribute("aria-label","主要ページ");
    nav.innerHTML = items.map(function(it){
      var on = here === it[0] ? " on" : "";
      return '<a class="'+on+'" href="'+pre+it[0]+'">'+ICONS[it[2]]+'<span>'+it[1]+'</span></a>';
    }).join("");
    document.body.appendChild(nav);
  }catch(e){}
})();
