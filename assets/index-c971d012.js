var Le=Object.defineProperty;var Re=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>(Re(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function M(){}function me(e,t){for(const n in t)e[n]=t[n];return e}function Ae(e){return e()}function _e(){return Object.create(null)}function I(e){e.forEach(Ae)}function Me(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function L(){return Y(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function He(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ie(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}let x;function z(e){x=e}function Pe(){if(!x)throw new Error("Function called outside component initialization");return x}function Oe(e){Pe().$$.on_mount.push(e)}function ie(){const e=Pe();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const o=Ie(t,n,{cancelable:r});return i.slice().forEach(s=>{s.call(e,o)}),!o.defaultPrevented}return!0}}const N=[],ye=[],te=[],pe=[],De=Promise.resolve();let le=!1;function We(){le||(le=!0,De.then($e))}function ue(e){te.push(e)}const se=new Set;let R=0;function $e(){if(R!==0)return;const e=x;do{try{for(;R<N.length;){const t=N[R];R++,z(t),Be(t.$$)}}catch(t){throw N.length=0,R=0,t}for(z(null),N.length=0,R=0;ye.length;)ye.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];se.has(n)||(se.add(n),n())}te.length=0}while(N.length);for(;pe.length;)pe.pop()();le=!1,se.clear(),z(e)}function Be(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ue)}}const ne=new Set;let je;function W(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(ne.has(e))return;ne.add(e),je.c.push(()=>{ne.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ge(e,t){const n={},r={},i={$$scope:1};let o=e.length;for(;o--;){const s=e[o],l=t[o];if(l){for(const u in s)u in l||(r[u]=1);for(const u in l)i[u]||(n[u]=l[u],i[u]=1);e[o]=l}else for(const u in s)i[u]=1}for(const s in r)s in n||(n[s]=void 0);return n}function ve(e){return typeof e=="object"&&e!==null?e:{}}function X(e){e&&e.c()}function B(e,t,n,r){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),r||ue(()=>{const s=e.$$.on_mount.map(Ae).filter(Me);e.$$.on_destroy?e.$$.on_destroy.push(...s):I(s),e.$$.on_mount=[]}),o.forEach(ue)}function j(e,t){const n=e.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(e,t){e.$$.dirty[0]===-1&&(N.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,r,i,o,s,l=[-1]){const u=x;z(e);const c=e.$$={fragment:null,ctx:[],props:o,update:M,not_equal:i,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:_e(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(h,g,...A)=>{const f=A.length?A[0]:g;return c.ctx&&i(c.ctx[h],c.ctx[h]=f)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](f),d&&ze(e,h)),g}):[],c.update(),d=!0,I(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const h=He(t.target);c.fragment&&c.fragment.l(h),h.forEach(w)}else c.fragment&&c.fragment.c();t.intro&&W(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),$e()}z(u)}class G{$destroy(){j(this,1),this.$destroy=M}$on(t,n){if(!Me(n))return M;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ue(e,t){const n=re(e,t);return n!==-1?n:fe(e)}function xe(e,t){const n=oe(e),r=new Map;for(const o of n){const s=[...e];s[o]=t,r.set(o,ae(s,C(t),t,!1)),s[o]=y.EMPTY}let i=[-1,-1/0];for(const o of r)o[1]>i[1]&&(i=o);return i[0]}function ae(e,t,n,r){const i=oe(e),o=Ye(e);if(o===n)return 1;if(o===C(n))return-1;if(i.length===0)return 0;let s=r?-1/0:1/0;for(const l of i){if(e[l]=t,r){const u=ae(e,C(t),n,!1);s=Math.max(s,u)}else{const u=ae(e,C(t),n,!0);s=Math.min(s,u)}e[l]=y.EMPTY}return s}function Fe(e,t){const n=re(e,t);if(n!==-1)return n;const r=t===y.PLAYER1?y.PLAYER2:y.PLAYER1,i=re(e,r);return i!==-1?i:e[4]===y.EMPTY?4:fe(e)}function qe(e,t){if(t===y.EMPTY)return-1;const n=t===y.PLAYER1?y.PLAYER2:y.PLAYER1,r=re(e,n);return r!==-1?r:fe(e)}function Z(e){switch(e){case k.EASY:return Ue;case k.PETTY:return qe;case k.MEDIUM:return Fe;case k.HARD:return xe;case(k.HUMAN||k.ONLINE):return;default:return}}function re(e,t){if(!Te(t))throw new Error(`Player ${t} is not valid`);for(const n of Se){const r=n.filter(o=>e[o]===t).length,i=n.filter(o=>e[o]===y.EMPTY).length;if(r===2&&i===1)return n.find(o=>e[o]===y.EMPTY)||-1}return-1}function fe(e){const t=oe(e);if(t.length===0)return-1;const n=Math.floor(Math.random()*t.length);return t[n]}var k=(e=>(e[e.EASY=0]="EASY",e[e.PETTY=1]="PETTY",e[e.MEDIUM=2]="MEDIUM",e[e.HARD=3]="HARD",e[e.HUMAN=4]="HUMAN",e[e.ONLINE=5]="ONLINE",e))(k||{}),y=(e=>(e[e.EMPTY=0]="EMPTY",e[e.PLAYER1=1]="PLAYER1",e[e.PLAYER2=2]="PLAYER2",e))(y||{});class be{constructor(t){v(this,"score",0);v(this,"field");v(this,"botMove");this.field=t}addWin(){this.score++}isHuman(){return this.botMove===void 0}move(t){return this.botMove!==void 0?this.botMove(t,this.field):-1}}class Ge{constructor(t=new be(1),n=new be(2),r=0){v(this,"player");v(this,"enemy");v(this,"mode");t.score=0,n.score=0,this.mode=r,this.player=t,this.enemy=n,this.enemy.botMove=Z(this.mode)}addWin(t){switch(t){case 1:this.player.addWin();break;case 2:this.enemy.addWin();break}}switchSides(){const t=this.player.botMove;this.player.botMove=this.enemy.botMove,this.enemy.botMove=t;const n=this.player.score;this.player.score=this.enemy.score,this.enemy.score=n}updateMode(t){if(this.mode=t,this.player.isHuman()&&this.enemy.isHuman()&&t!=4){this.enemy.botMove=Z(this.mode);return}this.player.isHuman()||(this.player.botMove=Z(this.mode)),this.enemy.isHuman()||(this.enemy.botMove=Z(this.mode))}}class Ee{constructor(t){v(this,"finished");v(this,"winner",0);this.winner=Ye(t),this.finished=Ke(t)||this.winner!==0}isDraw(){return this.finished&&this.winner===0}}function Ke(e){return e.every(t=>t!==0)}function Ye(e){for(const t of[1,2])if(Ve(e,t))return t;return 0}function ee(){const e=new Array(9);return e.fill(0),e}function oe(e){return e.map((t,n)=>t!==0?-1:n).filter(t=>t>=0)}function C(e){return Te(e)?3-e:0}function Te(e){return e===1||e===2}function Ve(e,t){return Se.some(n=>n.every(r=>e[r]===t))}const Se=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function ke(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function we(e){let t,n=e[1](e[11])+"",r,i,o,s;function l(){return e[5](e[13])}function u(){return e[6](e[13])}return{c(){t=p("div"),r=Y(n),i=L(),m(t,"class","field svelte-4c94un"),m(t,"id",e[13].toString())},m(c,d){P(c,t,d),_(t,r),_(t,i),o||(s=[H(t,"click",l),H(t,"keydown",u)],o=!0)},p(c,d){e=c,d&3&&n!==(n=e[1](e[11])+"")&&ce(r,n)},d(c){c&&w(t),o=!1,I(s)}}}function Je(e){let t,n=e[0],r=[];for(let i=0;i<n.length;i+=1)r[i]=we(ke(e,n,i));return{c(){t=p("div");for(let i=0;i<r.length;i+=1)r[i].c();m(t,"id","grid"),m(t,"class","svelte-4c94un")},m(i,o){P(i,t,o);for(let s=0;s<r.length;s+=1)r[s].m(t,null)},p(i,[o]){if(o&7){n=i[0];let s;for(s=0;s<n.length;s+=1){const l=ke(i,n,s);r[s]?r[s].p(l,o):(r[s]=we(l),r[s].c(),r[s].m(t,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},i:M,o:M,d(i){i&&w(t),Ce(r,i)}}}function Qe(e,t,n){let{board:r}=t,{fieldToString:i}=t,{player:o}=t,{enemy:s}=t,l=y.PLAYER1|y.PLAYER2;l=y.PLAYER1;const u=ie();function c(){return l===o.field?o:s}function d(f){h(f,c().field)&&(l=C(l),c().isHuman()||(h(c().move(r),c().field),l=C(l)))}function h(f,a){return r[f]!==y.EMPTY||new Ee(r).finished?!1:(n(0,r[f]=a,r),n(0,r),!0)}const g=f=>d(f),A=f=>d(f);return e.$$set=f=>{"board"in f&&n(0,r=f.board),"fieldToString"in f&&n(1,i=f.fieldToString),"player"in f&&n(3,o=f.player),"enemy"in f&&n(4,s=f.enemy)},e.$$.update=()=>{if(e.$$.dirty&1){let f=new Ee(r);f.finished&&u("finished",f)}e.$$.dirty&1&&oe(r).length===9&&(l=y.PLAYER1,c().isHuman()||(h(c().move(r),c().field),l=y.PLAYER2))},[r,i,d,o,s,g,A]}class Xe extends G{constructor(t){super(),q(this,t,Qe,Je,F,{board:0,fieldToString:1,player:3,enemy:4})}}function Ze(e){let t;return{c(){t=Y("🤖")},m(n,r){P(n,t,r)},d(n){n&&w(t)}}}function et(e){let t;return{c(){t=Y("👨‍💻")},m(n,r){P(n,t,r)},d(n){n&&w(t)}}}function tt(e){let t;return{c(){t=Y("🤖")},m(n,r){P(n,t,r)},d(n){n&&w(t)}}}function nt(e){let t;return{c(){t=Y("👨‍💻")},m(n,r){P(n,t,r)},d(n){n&&w(t)}}}function rt(e){let t,n,r,i,o,s=e[0].score+"",l,u,c,d,h,g=e[1].score+"",A,f,a,b,O,K;function de(E,$){return $&1&&(i=null),i==null&&(i=!!E[0].isHuman()),i?et:Ze}let V=de(e,-1),T=V(e);function he(E,$){return $&2&&(b=null),b==null&&(b=!!E[1].isHuman()),b?nt:tt}let J=he(e,-1),S=J(e);return{c(){t=p("div"),n=p("div"),r=p("i"),T.c(),o=L(),l=Y(s),u=L(),c=p("div"),c.textContent="🆚",d=L(),h=p("div"),A=Y(g),f=L(),a=p("i"),S.c(),m(r,"class","svelte-1b4pifs"),m(n,"id","player1"),m(n,"class","player svelte-1b4pifs"),m(c,"id","versus"),m(c,"class","svelte-1b4pifs"),m(a,"class","svelte-1b4pifs"),m(h,"id","player2"),m(h,"class","player svelte-1b4pifs"),m(t,"id","scoreboard"),m(t,"class","svelte-1b4pifs")},m(E,$){P(E,t,$),_(t,n),_(n,r),T.m(r,null),_(n,o),_(n,l),_(t,u),_(t,c),_(t,d),_(t,h),_(h,A),_(h,f),_(h,a),S.m(a,null),O||(K=[H(c,"click",e[3]),H(c,"keydown",e[4])],O=!0)},p(E,[$]){V!==(V=de(E,$))&&(T.d(1),T=V(E),T&&(T.c(),T.m(r,null))),$&1&&s!==(s=E[0].score+"")&&ce(l,s),$&2&&g!==(g=E[1].score+"")&&ce(A,g),J!==(J=he(E,$))&&(S.d(1),S=J(E),S&&(S.c(),S.m(a,null)))},i:M,o:M,d(E){E&&w(t),T.d(),S.d(),O=!1,I(K)}}}function it(e,t,n){let{player:r}=t,{enemy:i}=t,o=ie();function s(){o("switch")}const l=()=>s(),u=()=>s();return e.$$set=c=>{"player"in c&&n(0,r=c.player),"enemy"in c&&n(1,i=c.enemy)},[r,i,s,l,u]}class ot extends G{constructor(t){super(),q(this,t,it,rt,F,{player:0,enemy:1})}}function st(e){let t,n,r,i,o,s,l,u,c,d;return{c(){t=p("nav"),n=p("select"),r=p("option"),r.textContent="🤖",i=p("option"),i.textContent="🤖➕",o=p("option"),o.textContent="🤖❗",s=p("option"),s.textContent="❗🤖❗",l=p("option"),l.textContent="👨‍💻",u=p("option"),u.textContent="👨‍💻 / 👨‍💻",r.__value="easy",r.value=r.__value,m(r,"class","svelte-1d47szg"),i.__value="petty",i.value=i.__value,m(i,"class","svelte-1d47szg"),o.__value="medium",o.value=o.__value,m(o,"class","svelte-1d47szg"),s.__value="hard",s.value=s.__value,m(s,"class","svelte-1d47szg"),l.__value="human",l.value=l.__value,m(l,"class","svelte-1d47szg"),u.__value="online",u.value=u.__value,u.disabled=!0,m(u,"class","svelte-1d47szg"),m(n,"id","mode"),m(n,"class","svelte-1d47szg"),m(t,"class","svelte-1d47szg")},m(h,g){P(h,t,g),_(t,n),_(n,r),_(n,i),_(n,o),_(n,s),_(n,l),_(n,u),c||(d=H(n,"change",e[0]),c=!0)},p:M,i:M,o:M,d(h){h&&w(t),c=!1,d()}}}function ct(e){const t=ie();function n(r){let i=r.target.value,o;switch(i){case"easy":o=k.EASY;break;case"petty":o=k.PETTY;break;case"medium":o=k.MEDIUM;break;case"hard":o=k.HARD;break;case"human":o=k.HUMAN;break;case"online":o=k.ONLINE;break;default:o=k.EASY;break}t("change",o)}return[n]}class lt extends G{constructor(t){super(),q(this,t,ct,st,F,{})}}class D{constructor({primary:t,secondary:n,primaryAccent:r,secondaryAccent:i,background:o,name:s}){v(this,"primary");v(this,"secondary");v(this,"primaryAccent");v(this,"secondaryAccent");v(this,"background");v(this,"name");this.primary=t,this.secondary=n,this.primaryAccent=r,this.secondaryAccent=i,this.background=o,this.name=s}CSS(){return`--primary: ${this.primary}; --secondary: ${this.secondary}; --primaryAccent: ${this.primaryAccent}; --secondaryAccent: ${this.secondaryAccent}; --background: ${this.background}`}}const U=[new D({primary:"#1e1f26",secondary:"#bdc3c7",primaryAccent:"#3498db",secondaryAccent:"#2980b9",background:"#2c3e50",name:"Midnight blue"}),new D({primary:"#ffd700",secondary:"#616161",primaryAccent:"#8c7853",secondaryAccent:"#c5cae9",background:"#121212",name:"Black and gold"}),new D({primary:"#4e9a06",secondary:"#f7e267",primaryAccent:"#edd400",secondaryAccent:"#ce5c00",background:"#1b1b1b",name:"Dark green"}),new D({primary:"#8e24aa",secondary:"#ffd54f",primaryAccent:"#ffb300",secondaryAccent:"#e65100",background:"#121212",name:"Vibrant purple"}),new D({primary:"#008080",secondary:"#ffe0b2",primaryAccent:"#ffab91",secondaryAccent:"#4a148c",background:"#232323",name:"Teal blue"})];function ut(e){let t,n,r,i,o;return{c(){t=p("button"),n=Y("🎨"),m(t,"title",r=U[e[0]].name),m(t,"class","svelte-tojmix")},m(s,l){P(s,t,l),_(t,n),i||(o=H(t,"click",e[2]),i=!0)},p(s,[l]){l&1&&r!==(r=U[s[0]].name)&&m(t,"title",r)},i:M,o:M,d(s){s&&w(t),i=!1,o()}}}function at(e,t,n){const r=ie();let i=0;Oe(()=>{r("changed",U[i])});function o(){n(0,i=(i+1)%U.length),r("changed",U[i])}return[i,o,()=>o()]}class ft extends G{constructor(t){super(),q(this,t,at,ut,F,{})}}function dt(e){let t,n,r,i,o,s,l,u,c,d;n=new lt({}),n.$on("change",e[5]);const h=[e[1]];let g={};for(let a=0;a<h.length;a+=1)g=me(g,h[a]);i=new ot({props:g}),i.$on("switch",e[6]),s=new ft({}),s.$on("changed",_t);const A=[{board:e[0]},{fieldToString:e[2]},e[1]];let f={};for(let a=0;a<A.length;a+=1)f=me(f,A[a]);return c=new Xe({props:f}),c.$on("finished",e[3]),{c(){t=p("header"),X(n.$$.fragment),r=L(),X(i.$$.fragment),o=L(),X(s.$$.fragment),l=L(),u=p("main"),X(c.$$.fragment),m(t,"class","svelte-1ftnyyy"),m(u,"class","svelte-1ftnyyy")},m(a,b){P(a,t,b),B(n,t,null),_(t,r),B(i,t,null),_(t,o),B(s,t,null),P(a,l,b),P(a,u,b),B(c,u,null),d=!0},p(a,[b]){const O=b&2?ge(h,[ve(a[1])]):{};i.$set(O);const K=b&7?ge(A,[b&1&&{board:a[0]},b&4&&{fieldToString:a[2]},b&2&&ve(a[1])]):{};c.$set(K)},i(a){d||(W(n.$$.fragment,a),W(i.$$.fragment,a),W(s.$$.fragment,a),W(c.$$.fragment,a),d=!0)},o(a){Q(n.$$.fragment,a),Q(i.$$.fragment,a),Q(s.$$.fragment,a),Q(c.$$.fragment,a),d=!1},d(a){a&&w(t),j(n),j(i),j(s),a&&w(l),a&&w(u),j(c)}}}const ht="❌",mt="⭕";function _t({detail:e}){let t=Object.entries(e);for(let n of t)typeof n[1]=="string"&&document.documentElement.style.setProperty(`--${n[0]}`,`${n[1]}`)}function yt(e,t,n){let r=ee(),i=new Ge,o=d=>{switch(d){case y.EMPTY:return"";case y.PLAYER1:return ht;case y.PLAYER2:return mt}};function s(d){d.detail.isDraw()||(i.addWin(d.detail.winner),n(1,i)),setTimeout(()=>n(0,r=ee()),1e3)}function l(){n(0,r=ee()),i.switchSides(),n(1,i)}function u({detail:d}){i.updateMode(d),n(1,i),n(0,r=ee())}return[r,i,o,s,l,u,()=>l()]}class pt extends G{constructor(t){super(),q(this,t,yt,dt,F,{})}}new pt({target:document.getElementById("app")});
