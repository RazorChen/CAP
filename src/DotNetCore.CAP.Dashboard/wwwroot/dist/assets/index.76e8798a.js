import{d as Se}from"./index.afeb6e8d.js";var me={exports:{}},xe={exports:{}},Oe={exports:{}};(function(P){(function(F){var q,A=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,$=Math.ceil,G=Math.floor,R="[BigNumber Error] ",v=R+"Number primitive has more than 15 significant digits: ",H=1e14,N=14,T=9007199254740991,X=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],B=1e7,_=1e9;function K(E){var O,C,j,g=h.prototype={constructor:h,toString:null,valueOf:null},b=new h(1),M=20,L=4,Q=-7,Z=21,ue=-1e7,te=1e7,se=!1,le=1,oe=0,pe={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},ce="0123456789abcdefghijklmnopqrstuvwxyz",we=!0;function h(e,r){var t,s,i,o,l,n,f,c,u=this;if(!(u instanceof h))return new h(e,r);if(r==null){if(e&&e._isBigNumber===!0){u.s=e.s,!e.c||e.e>te?u.c=u.e=null:e.e<ue?u.c=[u.e=0]:(u.e=e.e,u.c=e.c.slice());return}if((n=typeof e=="number")&&e*0==0){if(u.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,l=e;l>=10;l/=10,o++);o>te?u.c=u.e=null:(u.e=o,u.c=[e]);return}c=String(e)}else{if(!A.test(c=String(e)))return j(u,c,n);u.s=c.charCodeAt(0)==45?(c=c.slice(1),-1):1}(o=c.indexOf("."))>-1&&(c=c.replace(".","")),(l=c.search(/e/i))>0?(o<0&&(o=l),o+=+c.slice(l+1),c=c.substring(0,l)):o<0&&(o=c.length)}else{if(w(r,2,ce.length,"Base"),r==10&&we)return u=new h(e),ee(u,M+u.e+1,L);if(c=String(e),n=typeof e=="number"){if(e*0!=0)return j(u,c,n,r);if(u.s=1/e<0?(c=c.slice(1),-1):1,h.DEBUG&&c.replace(/^0\.0*|\./,"").length>15)throw Error(v+e)}else u.s=c.charCodeAt(0)===45?(c=c.slice(1),-1):1;for(t=ce.slice(0,r),o=l=0,f=c.length;l<f;l++)if(t.indexOf(s=c.charAt(l))<0){if(s=="."){if(l>o){o=f;continue}}else if(!i&&(c==c.toUpperCase()&&(c=c.toLowerCase())||c==c.toLowerCase()&&(c=c.toUpperCase()))){i=!0,l=-1,o=0;continue}return j(u,String(e),n,r)}n=!1,c=C(c,r,10,u.s),(o=c.indexOf("."))>-1?c=c.replace(".",""):o=c.length}for(l=0;c.charCodeAt(l)===48;l++);for(f=c.length;c.charCodeAt(--f)===48;);if(c=c.slice(l,++f)){if(f-=l,n&&h.DEBUG&&f>15&&(e>T||e!==G(e)))throw Error(v+u.s*e);if((o=o-l-1)>te)u.c=u.e=null;else if(o<ue)u.c=[u.e=0];else{if(u.e=o,u.c=[],l=(o+1)%N,o<0&&(l+=N),l<f){for(l&&u.c.push(+c.slice(0,l)),f-=N;l<f;)u.c.push(+c.slice(l,l+=N));l=N-(c=c.slice(l)).length}else l-=f;for(;l--;c+="0");u.c.push(+c)}}else u.c=[u.e=0]}h.clone=K,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var r,t;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(t=e[r],w(t,0,_,r),M=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(t=e[r],w(t,0,8,r),L=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(t=e[r],t&&t.pop?(w(t[0],-_,0,r),w(t[1],0,_,r),Q=t[0],Z=t[1]):(w(t,-_,_,r),Q=-(Z=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if(t=e[r],t&&t.pop)w(t[0],-_,-1,r),w(t[1],1,_,r),ue=t[0],te=t[1];else if(w(t,-_,_,r),t)ue=-(te=t<0?-t:t);else throw Error(R+r+" cannot be zero: "+t);if(e.hasOwnProperty(r="CRYPTO"))if(t=e[r],t===!!t)if(t)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))se=t;else throw se=!t,Error(R+"crypto unavailable");else se=t;else throw Error(R+r+" not true or false: "+t);if(e.hasOwnProperty(r="MODULO_MODE")&&(t=e[r],w(t,0,9,r),le=t),e.hasOwnProperty(r="POW_PRECISION")&&(t=e[r],w(t,0,_,r),oe=t),e.hasOwnProperty(r="FORMAT"))if(t=e[r],typeof t=="object")pe=t;else throw Error(R+r+" not an object: "+t);if(e.hasOwnProperty(r="ALPHABET"))if(t=e[r],typeof t=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(t))we=t.slice(0,10)=="0123456789",ce=t;else throw Error(R+r+" invalid: "+t)}else throw Error(R+"Object expected: "+e);return{DECIMAL_PLACES:M,ROUNDING_MODE:L,EXPONENTIAL_AT:[Q,Z],RANGE:[ue,te],CRYPTO:se,MODULO_MODE:le,POW_PRECISION:oe,FORMAT:pe,ALPHABET:ce}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var r,t,s=e.c,i=e.e,o=e.s;e:if({}.toString.call(s)=="[object Array]"){if((o===1||o===-1)&&i>=-_&&i<=_&&i===G(i)){if(s[0]===0){if(i===0&&s.length===1)return!0;break e}if(r=(i+1)%N,r<1&&(r+=N),String(s[0]).length==r){for(r=0;r<s.length;r++)if(t=s[r],t<0||t>=H||t!==G(t))break e;if(t!==0)return!0}}}else if(s===null&&i===null&&(o===null||o===1||o===-1))return!0;throw Error(R+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return ve(arguments,g.lt)},h.minimum=h.min=function(){return ve(arguments,g.gt)},h.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return G(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(t){var s,i,o,l,n,f=0,c=[],u=new h(b);if(t==null?t=M:w(t,0,_),l=$(t/N),se)if(crypto.getRandomValues){for(s=crypto.getRandomValues(new Uint32Array(l*=2));f<l;)n=s[f]*131072+(s[f+1]>>>11),n>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),s[f]=i[0],s[f+1]=i[1]):(c.push(n%1e14),f+=2);f=l/2}else if(crypto.randomBytes){for(s=crypto.randomBytes(l*=7);f<l;)n=(s[f]&31)*281474976710656+s[f+1]*1099511627776+s[f+2]*4294967296+s[f+3]*16777216+(s[f+4]<<16)+(s[f+5]<<8)+s[f+6],n>=9e15?crypto.randomBytes(7).copy(s,f):(c.push(n%1e14),f+=7);f=l/7}else throw se=!1,Error(R+"crypto unavailable");if(!se)for(;f<l;)n=r(),n<9e15&&(c[f++]=n%1e14);for(l=c[--f],t%=N,l&&t&&(n=X[N-t],c[f]=G(l/n)*n);c[f]===0;c.pop(),f--);if(f<0)c=[o=0];else{for(o=-1;c[0]===0;c.splice(0,1),o-=N);for(f=1,n=c[0];n>=10;n/=10,f++);f<N&&(o-=N-f)}return u.e=o,u.c=c,u}}(),h.sum=function(){for(var e=1,r=arguments,t=new h(r[0]);e<r.length;)t=t.plus(r[e++]);return t},C=function(){var e="0123456789";function r(t,s,i,o){for(var l,n=[0],f,c=0,u=t.length;c<u;){for(f=n.length;f--;n[f]*=s);for(n[0]+=o.indexOf(t.charAt(c++)),l=0;l<n.length;l++)n[l]>i-1&&(n[l+1]==null&&(n[l+1]=0),n[l+1]+=n[l]/i|0,n[l]%=i)}return n.reverse()}return function(t,s,i,o,l){var n,f,c,u,a,p,d,S,U=t.indexOf("."),z=M,y=L;for(U>=0&&(u=oe,oe=0,t=t.replace(".",""),S=new h(s),p=S.pow(t.length-U),oe=u,S.c=r(V(x(p.c),p.e,"0"),10,i,e),S.e=S.c.length),d=r(t,s,i,l?(n=ce,e):(n=e,ce)),c=u=d.length;d[--u]==0;d.pop());if(!d[0])return n.charAt(0);if(U<0?--c:(p.c=d,p.e=c,p.s=o,p=O(p,S,z,y,i),d=p.c,a=p.r,c=p.e),f=c+z+1,U=d[f],u=i/2,a=a||f<0||d[f+1]!=null,a=y<4?(U!=null||a)&&(y==0||y==(p.s<0?3:2)):U>u||U==u&&(y==4||a||y==6&&d[f-1]&1||y==(p.s<0?8:7)),f<1||!d[0])t=a?V(n.charAt(1),-z,n.charAt(0)):n.charAt(0);else{if(d.length=f,a)for(--i;++d[--f]>i;)d[f]=0,f||(++c,d=[1].concat(d));for(u=d.length;!d[--u];);for(U=0,t="";U<=u;t+=n.charAt(d[U++]));t=V(t,c,n.charAt(0))}return t}}(),O=function(){function e(s,i,o){var l,n,f,c,u=0,a=s.length,p=i%B,d=i/B|0;for(s=s.slice();a--;)f=s[a]%B,c=s[a]/B|0,l=d*f+c*p,n=p*f+l%B*B+u,u=(n/o|0)+(l/B|0)+d*c,s[a]=n%o;return u&&(s=[u].concat(s)),s}function r(s,i,o,l){var n,f;if(o!=l)f=o>l?1:-1;else for(n=f=0;n<o;n++)if(s[n]!=i[n]){f=s[n]>i[n]?1:-1;break}return f}function t(s,i,o,l){for(var n=0;o--;)s[o]-=n,n=s[o]<i[o]?1:0,s[o]=n*l+s[o]-i[o];for(;!s[0]&&s.length>1;s.splice(0,1));}return function(s,i,o,l,n){var f,c,u,a,p,d,S,U,z,y,I,W,he,Ae,Ee,ie,ae,re=s.s==i.s?1:-1,Y=s.c,k=i.c;if(!Y||!Y[0]||!k||!k[0])return new h(!s.s||!i.s||(Y?k&&Y[0]==k[0]:!k)?NaN:Y&&Y[0]==0||!k?re*0:re/0);for(U=new h(re),z=U.c=[],c=s.e-i.e,re=o+c+1,n||(n=H,c=m(s.e/N)-m(i.e/N),re=re/N|0),u=0;k[u]==(Y[u]||0);u++);if(k[u]>(Y[u]||0)&&c--,re<0)z.push(1),a=!0;else{for(Ae=Y.length,ie=k.length,u=0,re+=2,p=G(n/(k[0]+1)),p>1&&(k=e(k,p,n),Y=e(Y,p,n),ie=k.length,Ae=Y.length),he=ie,y=Y.slice(0,ie),I=y.length;I<ie;y[I++]=0);ae=k.slice(),ae=[0].concat(ae),Ee=k[0],k[1]>=n/2&&Ee++;do{if(p=0,f=r(k,y,ie,I),f<0){if(W=y[0],ie!=I&&(W=W*n+(y[1]||0)),p=G(W/Ee),p>1)for(p>=n&&(p=n-1),d=e(k,p,n),S=d.length,I=y.length;r(d,y,S,I)==1;)p--,t(d,ie<S?ae:k,S,n),S=d.length,f=1;else p==0&&(f=p=1),d=k.slice(),S=d.length;if(S<I&&(d=[0].concat(d)),t(y,d,I,n),I=y.length,f==-1)for(;r(k,y,ie,I)<1;)p++,t(y,ie<I?ae:k,I,n),I=y.length}else f===0&&(p++,y=[0]);z[u++]=p,y[0]?y[I++]=Y[he]||0:(y=[Y[he]],I=1)}while((he++<Ae||y[0]!=null)&&re--);a=y[0]!=null,z[0]||z.splice(0,1)}if(n==H){for(u=1,re=z[0];re>=10;re/=10,u++);ee(U,o+(U.e=u+c*N-1)+1,l,a)}else U.e=c,U.r=+a;return U}}();function de(e,r,t,s){var i,o,l,n,f;if(t==null?t=L:w(t,0,8),!e.c)return e.toString();if(i=e.c[0],l=e.e,r==null)f=x(e.c),f=s==1||s==2&&(l<=Q||l>=Z)?ne(f,l):V(f,l,"0");else if(e=ee(new h(e),r,t),o=e.e,f=x(e.c),n=f.length,s==1||s==2&&(r<=o||o<=Q)){for(;n<r;f+="0",n++);f=ne(f,o)}else if(r-=l,f=V(f,o,"0"),o+1>n){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=o-n,r>0)for(o+1==n&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function ve(e,r){for(var t,s=1,i=new h(e[0]);s<e.length;s++)if(t=new h(e[s]),t.s)r.call(i,t)&&(i=t);else{i=t;break}return i}function Ne(e,r,t){for(var s=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,s++);return(t=s+t*N-1)>te?e.c=e.e=null:t<ue?e.c=[e.e=0]:(e.e=t,e.c=r),e}j=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,t=/^\.([^.]+)$/,s=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,l,n,f){var c,u=n?l:l.replace(i,"");if(s.test(u))o.s=isNaN(u)?null:u<0?-1:1;else{if(!n&&(u=u.replace(e,function(a,p,d){return c=(d=d.toLowerCase())=="x"?16:d=="b"?2:8,!f||f==c?p:a}),f&&(c=f,u=u.replace(r,"$1").replace(t,"0.$1")),l!=u))return new h(u,c);if(h.DEBUG)throw Error(R+"Not a"+(f?" base "+f:"")+" number: "+l);o.s=null}o.c=o.e=null}}();function ee(e,r,t,s){var i,o,l,n,f,c,u,a=e.c,p=X;if(a){e:{for(i=1,n=a[0];n>=10;n/=10,i++);if(o=r-i,o<0)o+=N,l=r,f=a[c=0],u=f/p[i-l-1]%10|0;else if(c=$((o+1)/N),c>=a.length)if(s){for(;a.length<=c;a.push(0));f=u=0,i=1,o%=N,l=o-N+1}else break e;else{for(f=n=a[c],i=1;n>=10;n/=10,i++);o%=N,l=o-N+i,u=l<0?0:f/p[i-l-1]%10|0}if(s=s||r<0||a[c+1]!=null||(l<0?f:f%p[i-l-1]),s=t<4?(u||s)&&(t==0||t==(e.s<0?3:2)):u>5||u==5&&(t==4||s||t==6&&(o>0?l>0?f/p[i-l]:0:a[c-1])%10&1||t==(e.s<0?8:7)),r<1||!a[0])return a.length=0,s?(r-=e.e+1,a[0]=p[(N-r%N)%N],e.e=-r||0):a[0]=e.e=0,e;if(o==0?(a.length=c,n=1,c--):(a.length=c+1,n=p[N-o],a[c]=l>0?G(f/p[i-l]%p[l])*n:0),s)for(;;)if(c==0){for(o=1,l=a[0];l>=10;l/=10,o++);for(l=a[0]+=n,n=1;l>=10;l/=10,n++);o!=n&&(e.e++,a[0]==H&&(a[0]=1));break}else{if(a[c]+=n,a[c]!=H)break;a[c--]=0,n=1}for(o=a.length;a[--o]===0;a.pop());}e.e>te?e.c=e.e=null:e.e<ue&&(e.c=[e.e=0])}return e}function fe(e){var r,t=e.e;return t===null?e.toString():(r=x(e.c),r=t<=Q||t>=Z?ne(r,t):V(r,t,"0"),e.s<0?"-"+r:r)}return g.absoluteValue=g.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},g.comparedTo=function(e,r){return D(this,new h(e,r))},g.decimalPlaces=g.dp=function(e,r){var t,s,i,o=this;if(e!=null)return w(e,0,_),r==null?r=L:w(r,0,8),ee(new h(o),e+o.e+1,r);if(!(t=o.c))return null;if(s=((i=t.length-1)-m(this.e/N))*N,i=t[i])for(;i%10==0;i/=10,s--);return s<0&&(s=0),s},g.dividedBy=g.div=function(e,r){return O(this,new h(e,r),M,L)},g.dividedToIntegerBy=g.idiv=function(e,r){return O(this,new h(e,r),0,1)},g.exponentiatedBy=g.pow=function(e,r){var t,s,i,o,l,n,f,c,u,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(R+"Exponent not an integer: "+fe(e));if(r!=null&&(r=new h(r)),n=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return u=new h(Math.pow(+fe(a),n?2-J(e):+fe(e))),r?u.mod(r):u;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new h(NaN);s=!f&&a.isInteger()&&r.isInteger(),s&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||n&&a.c[1]>=24e7:a.c[0]<8e13||n&&a.c[0]<=9999975e7)))return o=a.s<0&&J(e)?-0:0,a.e>-1&&(o=1/o),new h(f?1/o:o);oe&&(o=$(oe/N+2))}for(n?(t=new h(.5),f&&(e.s=1),c=J(e)):(i=Math.abs(+fe(e)),c=i%2),u=new h(b);;){if(c){if(u=u.times(a),!u.c)break;o?u.c.length>o&&(u.c.length=o):s&&(u=u.mod(r))}if(i){if(i=G(i/2),i===0)break;c=i%2}else if(e=e.times(t),ee(e,e.e+1,1),e.e>14)c=J(e);else{if(i=+fe(e),i===0)break;c=i%2}a=a.times(a),o?a.c&&a.c.length>o&&(a.c.length=o):s&&(a=a.mod(r))}return s?u:(f&&(u=b.div(u)),r?u.mod(r):o?ee(u,oe,L,l):u)},g.integerValue=function(e){var r=new h(this);return e==null?e=L:w(e,0,8),ee(r,r.e+1,e)},g.isEqualTo=g.eq=function(e,r){return D(this,new h(e,r))===0},g.isFinite=function(){return!!this.c},g.isGreaterThan=g.gt=function(e,r){return D(this,new h(e,r))>0},g.isGreaterThanOrEqualTo=g.gte=function(e,r){return(r=D(this,new h(e,r)))===1||r===0},g.isInteger=function(){return!!this.c&&m(this.e/N)>this.c.length-2},g.isLessThan=g.lt=function(e,r){return D(this,new h(e,r))<0},g.isLessThanOrEqualTo=g.lte=function(e,r){return(r=D(this,new h(e,r)))===-1||r===0},g.isNaN=function(){return!this.s},g.isNegative=function(){return this.s<0},g.isPositive=function(){return this.s>0},g.isZero=function(){return!!this.c&&this.c[0]==0},g.minus=function(e,r){var t,s,i,o,l=this,n=l.s;if(e=new h(e,r),r=e.s,!n||!r)return new h(NaN);if(n!=r)return e.s=-r,l.plus(e);var f=l.e/N,c=e.e/N,u=l.c,a=e.c;if(!f||!c){if(!u||!a)return u?(e.s=-r,e):new h(a?l:NaN);if(!u[0]||!a[0])return a[0]?(e.s=-r,e):new h(u[0]?l:L==3?-0:0)}if(f=m(f),c=m(c),u=u.slice(),n=f-c){for((o=n<0)?(n=-n,i=u):(c=f,i=a),i.reverse(),r=n;r--;i.push(0));i.reverse()}else for(s=(o=(n=u.length)<(r=a.length))?n:r,n=r=0;r<s;r++)if(u[r]!=a[r]){o=u[r]<a[r];break}if(o&&(i=u,u=a,a=i,e.s=-e.s),r=(s=a.length)-(t=u.length),r>0)for(;r--;u[t++]=0);for(r=H-1;s>n;){if(u[--s]<a[s]){for(t=s;t&&!u[--t];u[t]=r);--u[t],u[s]+=H}u[s]-=a[s]}for(;u[0]==0;u.splice(0,1),--c);return u[0]?Ne(e,u,c):(e.s=L==3?-1:1,e.c=[e.e=0],e)},g.modulo=g.mod=function(e,r){var t,s,i=this;return e=new h(e,r),!i.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||i.c&&!i.c[0]?new h(i):(le==9?(s=e.s,e.s=1,t=O(i,e,0,3),e.s=s,t.s*=s):t=O(i,e,0,le),e=i.minus(t.times(e)),!e.c[0]&&le==1&&(e.s=i.s),e)},g.multipliedBy=g.times=function(e,r){var t,s,i,o,l,n,f,c,u,a,p,d,S,U,z,y=this,I=y.c,W=(e=new h(e,r)).c;if(!I||!W||!I[0]||!W[0])return!y.s||!e.s||I&&!I[0]&&!W||W&&!W[0]&&!I?e.c=e.e=e.s=null:(e.s*=y.s,!I||!W?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(s=m(y.e/N)+m(e.e/N),e.s*=y.s,f=I.length,a=W.length,f<a&&(S=I,I=W,W=S,i=f,f=a,a=i),i=f+a,S=[];i--;S.push(0));for(U=H,z=B,i=a;--i>=0;){for(t=0,p=W[i]%z,d=W[i]/z|0,l=f,o=i+l;o>i;)c=I[--l]%z,u=I[l]/z|0,n=d*c+u*p,c=p*c+n%z*z+S[o]+t,t=(c/U|0)+(n/z|0)+d*u,S[o--]=c%U;S[o]=t}return t?++s:S.splice(0,1),Ne(e,S,s)},g.negated=function(){var e=new h(this);return e.s=-e.s||null,e},g.plus=function(e,r){var t,s=this,i=s.s;if(e=new h(e,r),r=e.s,!i||!r)return new h(NaN);if(i!=r)return e.s=-r,s.minus(e);var o=s.e/N,l=e.e/N,n=s.c,f=e.c;if(!o||!l){if(!n||!f)return new h(i/0);if(!n[0]||!f[0])return f[0]?e:new h(n[0]?s:i*0)}if(o=m(o),l=m(l),n=n.slice(),i=o-l){for(i>0?(l=o,t=f):(i=-i,t=n),t.reverse();i--;t.push(0));t.reverse()}for(i=n.length,r=f.length,i-r<0&&(t=f,f=n,n=t,r=i),i=0;r;)i=(n[--r]=n[r]+f[r]+i)/H|0,n[r]=H===n[r]?0:n[r]%H;return i&&(n=[i].concat(n),++l),Ne(e,n,l)},g.precision=g.sd=function(e,r){var t,s,i,o=this;if(e!=null&&e!==!!e)return w(e,1,_),r==null?r=L:w(r,0,8),ee(new h(o),e,r);if(!(t=o.c))return null;if(i=t.length-1,s=i*N+1,i=t[i]){for(;i%10==0;i/=10,s--);for(i=t[0];i>=10;i/=10,s++);}return e&&o.e+1>s&&(s=o.e+1),s},g.shiftedBy=function(e){return w(e,-T,T),this.times("1e"+e)},g.squareRoot=g.sqrt=function(){var e,r,t,s,i,o=this,l=o.c,n=o.s,f=o.e,c=M+4,u=new h("0.5");if(n!==1||!l||!l[0])return new h(!n||n<0&&(!l||l[0])?NaN:l?o:1/0);if(n=Math.sqrt(+fe(o)),n==0||n==1/0?(r=x(l),(r.length+f)%2==0&&(r+="0"),n=Math.sqrt(+r),f=m((f+1)/2)-(f<0||f%2),n==1/0?r="5e"+f:(r=n.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),t=new h(r)):t=new h(n+""),t.c[0]){for(f=t.e,n=f+c,n<3&&(n=0);;)if(i=t,t=u.times(i.plus(O(o,i,c,1))),x(i.c).slice(0,n)===(r=x(t.c)).slice(0,n))if(t.e<f&&--n,r=r.slice(n-3,n+1),r=="9999"||!s&&r=="4999"){if(!s&&(ee(i,i.e+M+2,0),i.times(i).eq(o))){t=i;break}c+=4,n+=4,s=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(ee(t,t.e+M+2,1),e=!t.times(t).eq(o));break}}return ee(t,t.e+M+1,L,e)},g.toExponential=function(e,r){return e!=null&&(w(e,0,_),e++),de(this,e,r,1)},g.toFixed=function(e,r){return e!=null&&(w(e,0,_),e=e+this.e+1),de(this,e,r)},g.toFormat=function(e,r,t){var s,i=this;if(t==null)e!=null&&r&&typeof r=="object"?(t=r,r=null):e&&typeof e=="object"?(t=e,e=r=null):t=pe;else if(typeof t!="object")throw Error(R+"Argument not an object: "+t);if(s=i.toFixed(e,r),i.c){var o,l=s.split("."),n=+t.groupSize,f=+t.secondaryGroupSize,c=t.groupSeparator||"",u=l[0],a=l[1],p=i.s<0,d=p?u.slice(1):u,S=d.length;if(f&&(o=n,n=f,f=o,S-=o),n>0&&S>0){for(o=S%n||n,u=d.substr(0,o);o<S;o+=n)u+=c+d.substr(o,n);f>0&&(u+=c+d.slice(o)),p&&(u="-"+u)}s=a?u+(t.decimalSeparator||"")+((f=+t.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):a):u}return(t.prefix||"")+s+(t.suffix||"")},g.toFraction=function(e){var r,t,s,i,o,l,n,f,c,u,a,p,d=this,S=d.c;if(e!=null&&(n=new h(e),!n.isInteger()&&(n.c||n.s!==1)||n.lt(b)))throw Error(R+"Argument "+(n.isInteger()?"out of range: ":"not an integer: ")+fe(n));if(!S)return new h(d);for(r=new h(b),c=t=new h(b),s=f=new h(b),p=x(S),o=r.e=p.length-d.e-1,r.c[0]=X[(l=o%N)<0?N+l:l],e=!e||n.comparedTo(r)>0?o>0?r:c:n,l=te,te=1/0,n=new h(p),f.c[0]=0;u=O(n,r,0,1),i=t.plus(u.times(s)),i.comparedTo(e)!=1;)t=s,s=i,c=f.plus(u.times(i=c)),f=i,r=n.minus(u.times(i=r)),n=i;return i=O(e.minus(t),s,0,1),f=f.plus(i.times(c)),t=t.plus(i.times(s)),f.s=c.s=d.s,o=o*2,a=O(c,s,o,L).minus(d).abs().comparedTo(O(f,t,o,L).minus(d).abs())<1?[c,s]:[f,t],te=l,a},g.toNumber=function(){return+fe(this)},g.toPrecision=function(e,r){return e!=null&&w(e,1,_),de(this,e,r,2)},g.toString=function(e){var r,t=this,s=t.s,i=t.e;return i===null?s?(r="Infinity",s<0&&(r="-"+r)):r="NaN":(e==null?r=i<=Q||i>=Z?ne(x(t.c),i):V(x(t.c),i,"0"):e===10&&we?(t=ee(new h(t),M+i+1,L),r=V(x(t.c),t.e,"0")):(w(e,2,ce.length,"Base"),r=C(V(x(t.c),i,"0"),10,e,s,!0)),s<0&&t.c[0]&&(r="-"+r)),r},g.valueOf=g.toJSON=function(){return fe(this)},g._isBigNumber=!0,E!=null&&h.set(E),h}function m(E){var O=E|0;return E>0||E===O?O:O-1}function x(E){for(var O,C,j=1,g=E.length,b=E[0]+"";j<g;){for(O=E[j++]+"",C=N-O.length;C--;O="0"+O);b+=O}for(g=b.length;b.charCodeAt(--g)===48;);return b.slice(0,g+1||1)}function D(E,O){var C,j,g=E.c,b=O.c,M=E.s,L=O.s,Q=E.e,Z=O.e;if(!M||!L)return null;if(C=g&&!g[0],j=b&&!b[0],C||j)return C?j?0:-L:M;if(M!=L)return M;if(C=M<0,j=Q==Z,!g||!b)return j?0:!g^C?1:-1;if(!j)return Q>Z^C?1:-1;for(L=(Q=g.length)<(Z=b.length)?Q:Z,M=0;M<L;M++)if(g[M]!=b[M])return g[M]>b[M]^C?1:-1;return Q==Z?0:Q>Z^C?1:-1}function w(E,O,C,j){if(E<O||E>C||E!==G(E))throw Error(R+(j||"Argument")+(typeof E=="number"?E<O||E>C?" out of range: ":" not an integer: ":" not a primitive number: ")+String(E))}function J(E){var O=E.c.length-1;return m(E.e/N)==O&&E.c[O]%2!=0}function ne(E,O){return(E.length>1?E.charAt(0)+"."+E.slice(1):E)+(O<0?"e":"e+")+O}function V(E,O,C){var j,g;if(O<0){for(g=C+".";++O;g+=C);E=g+E}else if(j=E.length,++O>j){for(g=C,O-=j;--O;g+=C);E+=g}else O<j&&(E=E.slice(0,O)+"."+E.slice(O));return E}q=K(),q.default=q.BigNumber=q,P.exports?P.exports=q:(F||(F=typeof self<"u"&&self?self:window),F.BigNumber=q)})(Se)})(Oe);(function(P){var F=Oe.exports,q=P.exports;(function(){var A=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,$,G,R={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},v;function H(T){return A.lastIndex=0,A.test(T)?'"'+T.replace(A,function(X){var B=R[X];return typeof B=="string"?B:"\\u"+("0000"+X.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+T+'"'}function N(T,X){var B,_,K,m,x=$,D,w=X[T],J=w!=null&&(w instanceof F||F.isBigNumber(w));switch(w&&typeof w=="object"&&typeof w.toJSON=="function"&&(w=w.toJSON(T)),typeof v=="function"&&(w=v.call(X,T,w)),typeof w){case"string":return J?w:H(w);case"number":return isFinite(w)?String(w):"null";case"boolean":case"null":case"bigint":return String(w);case"object":if(!w)return"null";if($+=G,D=[],Object.prototype.toString.apply(w)==="[object Array]"){for(m=w.length,B=0;B<m;B+=1)D[B]=N(B,w)||"null";return K=D.length===0?"[]":$?`[
`+$+D.join(`,
`+$)+`
`+x+"]":"["+D.join(",")+"]",$=x,K}if(v&&typeof v=="object")for(m=v.length,B=0;B<m;B+=1)typeof v[B]=="string"&&(_=v[B],K=N(_,w),K&&D.push(H(_)+($?": ":":")+K));else Object.keys(w).forEach(function(ne){var V=N(ne,w);V&&D.push(H(ne)+($?": ":":")+V)});return K=D.length===0?"{}":$?`{
`+$+D.join(`,
`+$)+`
`+x+"}":"{"+D.join(",")+"}",$=x,K}}typeof q.stringify!="function"&&(q.stringify=function(T,X,B){var _;if($="",G="",typeof B=="number")for(_=0;_<B;_+=1)G+=" ";else typeof B=="string"&&(G=B);if(v=X,X&&typeof X!="function"&&(typeof X!="object"||typeof X.length!="number"))throw new Error("JSON.stringify");return N("",{"":T})})})()})(xe);var ge=null;const _e=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,Ie=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;var Pe=function(P){var F={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(P!=null){if(P.strict===!0&&(F.strict=!0),P.storeAsString===!0&&(F.storeAsString=!0),F.alwaysParseAsBig=P.alwaysParseAsBig===!0?P.alwaysParseAsBig:!1,F.useNativeBigInt=P.useNativeBigInt===!0?P.useNativeBigInt:!1,typeof P.constructorAction<"u")if(P.constructorAction==="error"||P.constructorAction==="ignore"||P.constructorAction==="preserve")F.constructorAction=P.constructorAction;else throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${P.constructorAction}`);if(typeof P.protoAction<"u")if(P.protoAction==="error"||P.protoAction==="ignore"||P.protoAction==="preserve")F.protoAction=P.protoAction;else throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${P.protoAction}`)}var q,A,$={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},G,R=function(m){throw{name:"SyntaxError",message:m,at:q,text:G}},v=function(m){return m&&m!==A&&R("Expected '"+m+"' instead of '"+A+"'"),A=G.charAt(q),q+=1,A},H=function(){var m,x="";for(A==="-"&&(x="-",v("-"));A>="0"&&A<="9";)x+=A,v();if(A===".")for(x+=".";v()&&A>="0"&&A<="9";)x+=A;if(A==="e"||A==="E")for(x+=A,v(),(A==="-"||A==="+")&&(x+=A,v());A>="0"&&A<="9";)x+=A,v();if(m=+x,!isFinite(m))R("Bad number");else return ge==null&&(ge=Oe.exports),x.length>15?F.storeAsString?x:F.useNativeBigInt?BigInt(x):new ge(x):F.alwaysParseAsBig?F.useNativeBigInt?BigInt(m):new ge(m):m},N=function(){var m,x,D="",w;if(A==='"')for(var J=q;v();){if(A==='"')return q-1>J&&(D+=G.substring(J,q-1)),v(),D;if(A==="\\"){if(q-1>J&&(D+=G.substring(J,q-1)),v(),A==="u"){for(w=0,x=0;x<4&&(m=parseInt(v(),16),!!isFinite(m));x+=1)w=w*16+m;D+=String.fromCharCode(w)}else if(typeof $[A]=="string")D+=$[A];else break;J=q}}R("Bad string")},T=function(){for(;A&&A<=" ";)v()},X=function(){switch(A){case"t":return v("t"),v("r"),v("u"),v("e"),!0;case"f":return v("f"),v("a"),v("l"),v("s"),v("e"),!1;case"n":return v("n"),v("u"),v("l"),v("l"),null}R("Unexpected '"+A+"'")},B,_=function(){var m=[];if(A==="["){if(v("["),T(),A==="]")return v("]"),m;for(;A;){if(m.push(B()),T(),A==="]")return v("]"),m;v(","),T()}}R("Bad array")},K=function(){var m,x=Object.create(null);if(A==="{"){if(v("{"),T(),A==="}")return v("}"),x;for(;A;){if(m=N(),T(),v(":"),F.strict===!0&&Object.hasOwnProperty.call(x,m)&&R('Duplicate key "'+m+'"'),_e.test(m)===!0?F.protoAction==="error"?R("Object contains forbidden prototype property"):F.protoAction==="ignore"?B():x[m]=B():Ie.test(m)===!0?F.constructorAction==="error"?R("Object contains forbidden constructor property"):F.constructorAction==="ignore"?B():x[m]=B():x[m]=B(),T(),A==="}")return v("}"),x;v(","),T()}}R("Bad object")};return B=function(){switch(T(),A){case"{":return K();case"[":return _();case'"':return N();case"-":return H();default:return A>="0"&&A<="9"?H():X()}},function(m,x){var D;return G=m+"",q=0,A=" ",D=B(),T(),A&&R("Syntax error"),typeof x=="function"?function w(J,ne){var V,E=J[ne];return E&&typeof E=="object"&&Object.keys(E).forEach(function(O){V=w(E,O),V!==void 0?E[O]=V:delete E[O]}),x.call(J,ne,E)}({"":D},""):D}},Re=Pe,Be=xe.exports.stringify,ye=Re;me.exports=function(P){return{parse:ye(P),stringify:Be}};me.exports.parse=ye();me.exports.stringify=Be;export{me as j};