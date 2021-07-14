/*! For license information please see 1578-15a8e5615f2bfc7d31e7.js.LICENSE.txt */
(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[1578],{27815:function(e,t,n){var i,o;!function(){var r,s,a,u,l,c,d,h,f,p,m,v,g,y,S,x,b,w,I,E,F,D,N,z,k,_=function e(t){var n=new e.Index;return n.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),t&&t.call(n,n),n};_.version="0.9.5",lunr=_,(_.utils={}).warn=(r=this,function(e){r.console&&console.warn&&console.warn(e)}),_.utils.toString=function(e){return null==e?"":e.toString()},(_.EventEmitter=function(){this.events={}}).prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");n.forEach((function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)}),this)},_.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);-1!==n&&(this.events[e].splice(n,1),0==this.events[e].length&&delete this.events[e])}},_.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach((function(e){e.apply(void 0,t)}),this)}},_.EventEmitter.prototype.hasHandler=function(e){return e in this.events},(_.tokenizer=function(e){if(!arguments.length||null==e)return[];if(Array.isArray(e)){var t=e.filter((function(e){return null!=e}));t=t.map((function(e){return _.utils.toString(e).toLowerCase()}));var n=[];return t.forEach((function(e){var t=e.split(_.tokenizer.seperator);n=n.concat(t)}),this),n}return e.toString().trim().toLowerCase().split(_.tokenizer.seperator)}).defaultSeperator=/[\s\-]+/,_.tokenizer.seperator=_.tokenizer.defaultSeperator,_.tokenizer.setSeperator=function(e){null!=e&&"object"==typeof e&&(_.tokenizer.seperator=e)},_.tokenizer.resetSeperator=function(){_.tokenizer.seperator=_.tokenizer.defaultSeperator},_.tokenizer.getSeperator=function(){return _.tokenizer.seperator},(_.Pipeline=function(){this._queue=[]}).registeredFunctions={},_.Pipeline.registerFunction=function(e,t){t in _.Pipeline.registeredFunctions&&_.utils.warn("Overwriting existing registered function: "+t),e.label=t,_.Pipeline.registeredFunctions[t]=e},_.Pipeline.getRegisteredFunction=function(e){return e in _.Pipeline.registeredFunctions!=!0?null:_.Pipeline.registeredFunctions[e]},_.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||_.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},_.Pipeline.load=function(e){var t=new _.Pipeline;return e.forEach((function(e){var n=_.Pipeline.getRegisteredFunction(e);if(!n)throw new Error("Cannot load un-registered function: "+e);t.add(n)})),t},_.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach((function(e){_.Pipeline.warnIfFunctionNotRegistered(e),this._queue.push(e)}),this)},_.Pipeline.prototype.after=function(e,t){_.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(-1===n)throw new Error("Cannot find existingFn");this._queue.splice(n+1,0,t)},_.Pipeline.prototype.before=function(e,t){_.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(-1===n)throw new Error("Cannot find existingFn");this._queue.splice(n,0,t)},_.Pipeline.prototype.remove=function(e){var t=this._queue.indexOf(e);-1!==t&&this._queue.splice(t,1)},_.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,i=this._queue.length,o=0;o<n;o++){for(var r=e[o],s=0;s<i&&null!=(r=this._queue[s](r,o,e));s++);null!=r&&t.push(r)}return t},_.Pipeline.prototype.reset=function(){this._queue=[]},_.Pipeline.prototype.get=function(){return this._queue},_.Pipeline.prototype.toJSON=function(){return this._queue.map((function(e){return _.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},(_.Index=function(){this._fields=[],this._ref="id",this.pipeline=new _.Pipeline,this.documentStore=new _.DocumentStore,this.index={},this.eventEmitter=new _.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))}).prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},_.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},_.Index.load=function(e){e.version!==_.version&&_.utils.warn("version mismatch: current "+_.version+" importing "+e.version);var t=new this;for(var n in t._fields=e.fields,t._ref=e.ref,t.documentStore=_.DocumentStore.load(e.documentStore),t.pipeline=_.Pipeline.load(e.pipeline),t.index={},e.index)t.index[n]=_.InvertedIndex.load(e.index[n]);return t},_.Index.prototype.addField=function(e){return this._fields.push(e),this.index[e]=new _.InvertedIndex,this},_.Index.prototype.setRef=function(e){return this._ref=e,this},_.Index.prototype.saveDocument=function(e){return this.documentStore=new _.DocumentStore(e),this},_.Index.prototype.addDoc=function(e,t){if(e){t=void 0===t||t;var n=e[this._ref];this.documentStore.addDoc(n,e),this._fields.forEach((function(t){var i=this.pipeline.run(_.tokenizer(e[t]));this.documentStore.addFieldLength(n,t,i.length);var o={};for(var r in i.forEach((function(e){e in o?o[e]+=1:o[e]=1}),this),o){var s=o[r];s=Math.sqrt(s),this.index[t].addToken(r,{ref:n,tf:s})}}),this),t&&this.eventEmitter.emit("add",e,this)}},_.Index.prototype.removeDocByRef=function(e,t){if(e&&!1!==this.documentStore.isDocStored()&&this.documentStore.hasDoc(e)){var n=this.documentStore.getDoc(e);this.removeDoc(n,!1)}},_.Index.prototype.removeDoc=function(e,t){if(e){t=void 0===t||t;var n=e[this._ref];this.documentStore.hasDoc(n)&&(this.documentStore.removeDoc(n),this._fields.forEach((function(t){this.pipeline.run(_.tokenizer(e[t])).forEach((function(e){this.index[t].removeToken(e,n)}),this)}),this),t&&this.eventEmitter.emit("remove",e,this))}},_.Index.prototype.updateDoc=function(e,t){t=void 0===t||t;this.removeDocByRef(e[this._ref],!1),this.addDoc(e,!1),t&&this.eventEmitter.emit("update",e,this)},_.Index.prototype.idf=function(e,t){var n="@"+t+"/"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,n))return this._idfCache[n];var i=this.index[t].getDocFreq(e),o=1+Math.log(this.documentStore.length/(i+1));return this._idfCache[n]=o,o},_.Index.prototype.getFields=function(){return this._fields.slice()},_.Index.prototype.search=function(e,t){if(!e)return[];var n=null;null!=t&&(n=JSON.stringify(t));var i=new _.Configuration(n,this.getFields()).get(),o=this.pipeline.run(_.tokenizer(e)),r={};for(var s in i){var a=this.fieldSearch(o,s,i),u=i[s].boost;for(var l in a)a[l]=a[l]*u;for(var l in a)l in r?r[l]+=a[l]:r[l]=a[l]}var c=[];for(var l in r)c.push({ref:l,score:r[l]});return c.sort((function(e,t){return t.score-e.score})),c},_.Index.prototype.fieldSearch=function(e,t,n){var i=n[t].bool,o=n[t].expand,r=n[t].boost,s=null,a={};if(0!==r)return e.forEach((function(e){var n=[e];1==o&&(n=this.index[t].expandToken(e));var r={};n.forEach((function(n){var o=this.index[t].getDocs(n),u=this.idf(n,t);if(s&&"AND"==i){var l={};for(var c in s)c in o&&(l[c]=o[c]);o=l}for(var c in n==e&&this.fieldSearchStats(a,n,o),o){var d=this.index[t].getTermFrequency(n,c),h=this.documentStore.getFieldLength(c,t),f=1;0!=h&&(f=1/Math.sqrt(h));var p=1;n!=e&&(p=.15*(1-(n.length-e.length)/n.length));var m=d*u*f*p;c in r?r[c]+=m:r[c]=m}}),this),s=this.mergeScores(s,r,i)}),this),s=this.coordNorm(s,a,e.length)},_.Index.prototype.mergeScores=function(e,t,n){if(!e)return t;if("AND"==n){var i={};for(var o in t)o in e&&(i[o]=e[o]+t[o]);return i}for(var o in t)o in e?e[o]+=t[o]:e[o]=t[o];return e},_.Index.prototype.fieldSearchStats=function(e,t,n){for(var i in n)i in e?e[i].push(t):e[i]=[t]},_.Index.prototype.coordNorm=function(e,t,n){for(var i in e)if(i in t){var o=t[i].length;e[i]=e[i]*o/n}return e},_.Index.prototype.toJSON=function(){var e={};return this._fields.forEach((function(t){e[t]=this.index[t].toJSON()}),this),{version:_.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),index:e,pipeline:this.pipeline.toJSON()}},_.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},(_.DocumentStore=function(e){this._save=null==e||e,this.docs={},this.docInfo={},this.length=0}).load=function(e){var t=new this;return t.length=e.length,t.docs=e.docs,t.docInfo=e.docInfo,t._save=e.save,t},_.DocumentStore.prototype.isDocStored=function(){return this._save},_.DocumentStore.prototype.addDoc=function(e,t){this.hasDoc(e)||this.length++,!0===this._save?this.docs[e]=function(e){if(null===e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(t):this.docs[e]=null},_.DocumentStore.prototype.getDoc=function(e){return!1===this.hasDoc(e)?null:this.docs[e]},_.DocumentStore.prototype.hasDoc=function(e){return e in this.docs},_.DocumentStore.prototype.removeDoc=function(e){this.hasDoc(e)&&(delete this.docs[e],delete this.docInfo[e],this.length--)},_.DocumentStore.prototype.addFieldLength=function(e,t,n){null!=e&&0!=this.hasDoc(e)&&(this.docInfo[e]||(this.docInfo[e]={}),this.docInfo[e][t]=n)},_.DocumentStore.prototype.updateFieldLength=function(e,t,n){null!=e&&0!=this.hasDoc(e)&&this.addFieldLength(e,t,n)},_.DocumentStore.prototype.getFieldLength=function(e,t){return null==e?0:e in this.docs&&t in this.docInfo[e]?this.docInfo[e][t]:0},_.DocumentStore.prototype.toJSON=function(){return{docs:this.docs,docInfo:this.docInfo,length:this.length,save:this._save}},_.stemmer=(s={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",l="[^aeiou][^aeiouy]*",c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),h=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),p=/^(.+?)(ss|i)es$/,m=/^(.+?)([^s])s$/,v=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,y=/.$/,S=/(at|bl|iz)$/,x=new RegExp("([^aeiouylsz])\\1$"),b=new RegExp("^"+l+u+"[^aeiouwxy]$"),w=/^(.+?[^aeiou])y$/,I=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,F=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,D=/^(.+?)(s|t)(ion)$/,N=/^(.+?)e$/,z=/ll$/,k=new RegExp("^"+l+u+"[^aeiouwxy]$"),function(e){var t,n,i,o,r,u,l;if(e.length<3)return e;if("y"==(i=e.substr(0,1))&&(e=i.toUpperCase()+e.substr(1)),r=m,(o=p).test(e)?e=e.replace(o,"$1$2"):r.test(e)&&(e=e.replace(r,"$1$2")),r=g,(o=v).test(e)){var _=o.exec(e);(o=c).test(_[1])&&(o=y,e=e.replace(o,""))}else r.test(e)&&(t=(_=r.exec(e))[1],(r=f).test(t)&&(u=x,l=b,(r=S).test(e=t)?e+="e":u.test(e)?(o=y,e=e.replace(o,"")):l.test(e)&&(e+="e")));return(o=w).test(e)&&(e=(t=(_=o.exec(e))[1])+"i"),(o=I).test(e)&&(t=(_=o.exec(e))[1],n=_[2],(o=c).test(t)&&(e=t+s[n])),(o=E).test(e)&&(t=(_=o.exec(e))[1],n=_[2],(o=c).test(t)&&(e=t+a[n])),r=D,(o=F).test(e)?(t=(_=o.exec(e))[1],(o=d).test(t)&&(e=t)):r.test(e)&&(t=(_=r.exec(e))[1]+_[2],(r=d).test(t)&&(e=t)),(o=N).test(e)&&(t=(_=o.exec(e))[1],r=h,u=k,((o=d).test(t)||r.test(t)&&!u.test(t))&&(e=t)),r=d,(o=z).test(e)&&r.test(e)&&(o=y,e=e.replace(o,"")),"y"==i&&(e=i.toLowerCase()+e.substr(1)),e}),_.Pipeline.registerFunction(_.stemmer,"stemmer"),_.stopWordFilter=function(e){if(e&&!0!==_.stopWordFilter.stopWords[e])return e},_.clearStopWords=function(){_.stopWordFilter.stopWords={}},_.addStopWords=function(e){null!=e&&!1!==Array.isArray(e)&&e.forEach((function(e){_.stopWordFilter.stopWords[e]=!0}),this)},_.resetStopWords=function(){_.stopWordFilter.stopWords=_.defaultStopWords},_.defaultStopWords={"":!0,a:!0,able:!0,about:!0,across:!0,after:!0,all:!0,almost:!0,also:!0,am:!0,among:!0,an:!0,and:!0,any:!0,are:!0,as:!0,at:!0,be:!0,because:!0,been:!0,but:!0,by:!0,can:!0,cannot:!0,could:!0,dear:!0,did:!0,do:!0,does:!0,either:!0,else:!0,ever:!0,every:!0,for:!0,from:!0,get:!0,got:!0,had:!0,has:!0,have:!0,he:!0,her:!0,hers:!0,him:!0,his:!0,how:!0,however:!0,i:!0,if:!0,in:!0,into:!0,is:!0,it:!0,its:!0,just:!0,least:!0,let:!0,like:!0,likely:!0,may:!0,me:!0,might:!0,most:!0,must:!0,my:!0,neither:!0,no:!0,nor:!0,not:!0,of:!0,off:!0,often:!0,on:!0,only:!0,or:!0,other:!0,our:!0,own:!0,rather:!0,said:!0,say:!0,says:!0,she:!0,should:!0,since:!0,so:!0,some:!0,than:!0,that:!0,the:!0,their:!0,them:!0,then:!0,there:!0,these:!0,they:!0,this:!0,tis:!0,to:!0,too:!0,twas:!0,us:!0,wants:!0,was:!0,we:!0,were:!0,what:!0,when:!0,where:!0,which:!0,while:!0,who:!0,whom:!0,why:!0,will:!0,with:!0,would:!0,yet:!0,you:!0,your:!0},_.stopWordFilter.stopWords=_.defaultStopWords,_.Pipeline.registerFunction(_.stopWordFilter,"stopWordFilter"),_.trimmer=function(e){if(null==e)throw new Error("token should not be undefined");return e.replace(/^\W+/,"").replace(/\W+$/,"")},_.Pipeline.registerFunction(_.trimmer,"trimmer"),(_.InvertedIndex=function(){this.root={docs:{},df:0}}).load=function(e){var t=new this;return t.root=e.root,t},_.InvertedIndex.prototype.addToken=function(e,t,n){n=n||this.root;for(var i=0;i<=e.length-1;){var o=e[i];o in n||(n[o]={docs:{},df:0}),i+=1,n=n[o]}var r=t.ref;n.docs[r]?n.docs[r]={tf:t.tf}:(n.docs[r]={tf:t.tf},n.df+=1)},_.InvertedIndex.prototype.hasToken=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},_.InvertedIndex.prototype.getNode=function(e){if(!e)return null;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return null;t=t[e[n]]}return t},_.InvertedIndex.prototype.getDocs=function(e){var t=this.getNode(e);return null==t?{}:t.docs},_.InvertedIndex.prototype.getTermFrequency=function(e,t){var n=this.getNode(e);return null==n?0:t in n.docs?n.docs[t].tf:0},_.InvertedIndex.prototype.getDocFreq=function(e){var t=this.getNode(e);return null==t?0:t.df},_.InvertedIndex.prototype.removeToken=function(e,t){if(e){var n=this.getNode(e);null!=n&&t in n.docs&&(delete n.docs[t],n.df-=1)}},_.InvertedIndex.prototype.expandToken=function(e,t,n){if(null==e||""==e)return[];t=t||[];if(null==n&&null==(n=this.getNode(e)))return t;for(var i in n.df>0&&t.push(e),n)"docs"!==i&&"df"!==i&&this.expandToken(e+i,t,n[i]);return t},_.InvertedIndex.prototype.toJSON=function(){return{root:this.root}},(_.Configuration=function(e,t){var n;e=e||"";if(null==t||null==t)throw new Error("fields should not be null");this.config={};try{n=JSON.parse(e),this.buildUserConfig(n,t)}catch(i){_.utils.warn("user configuration parse failed, will use default configuration"),this.buildDefaultConfig(t)}}).prototype.buildDefaultConfig=function(e){this.reset(),e.forEach((function(e){this.config[e]={boost:1,bool:"OR",expand:!1}}),this)},_.Configuration.prototype.buildUserConfig=function(e,t){var n="OR",i=!1;if(this.reset(),"bool"in e&&(n=e.bool||n),"expand"in e&&(i=e.expand||i),"fields"in e)for(var o in e.fields)if(t.indexOf(o)>-1){var r=e.fields[o],s=i;null!=r.expand&&(s=r.expand),this.config[o]={boost:r.boost||0===r.boost?r.boost:1,bool:r.bool||n,expand:s}}else _.utils.warn("field name in user configuration not found in index instance fields");else this.addAllFields2UserConfig(n,i,t)},_.Configuration.prototype.addAllFields2UserConfig=function(e,t,n){n.forEach((function(n){this.config[n]={boost:1,bool:e,expand:t}}),this)},_.Configuration.prototype.get=function(){return this.config},_.Configuration.prototype.reset=function(){this.config={}},lunr.SortedSet=function(){this.length=0,this.elements=[]},lunr.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},lunr.SortedSet.prototype.add=function(){var e,t;for(e=0;e<arguments.length;e++)t=arguments[e],~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t);this.length=this.elements.length},lunr.SortedSet.prototype.toArray=function(){return this.elements.slice()},lunr.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},lunr.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},lunr.SortedSet.prototype.indexOf=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];i>1;){if(r===e)return o;r<e&&(t=o),r>e&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o]}return r===e?o:-1},lunr.SortedSet.prototype.locationFor=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];i>1;)r<e&&(t=o),r>e&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o];return r>e?o:r<e?o+1:void 0},lunr.SortedSet.prototype.intersect=function(e){for(var t=new lunr.SortedSet,n=0,i=0,o=this.length,r=e.length,s=this.elements,a=e.elements;!(n>o-1||i>r-1);)s[n]!==a[i]?s[n]<a[i]?n++:s[n]>a[i]&&i++:(t.add(s[n]),n++,i++);return t},lunr.SortedSet.prototype.clone=function(){var e=new lunr.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},lunr.SortedSet.prototype.union=function(e){var t,n,i;this.length>=e.length?(t=this,n=e):(t=e,n=this),i=t.clone();for(var o=0,r=n.toArray();o<r.length;o++)i.add(r[o]);return i},lunr.SortedSet.prototype.toJSON=function(){return this.toArray()},void 0===(o="function"==typeof(i=function(){return _})?i.call(t,n,t,e):i)||(e.exports=o)}()},61578:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(22122),o=n(15007),r=n(25444),s=n(72390),a=n(64922),u=n(75900),l=n.n(u),c=n(19756),d=n(27815),h=n(75961);var f={name:"11qpleq",styles:"min-width:auto;width:100%"},p=function(e){var t=e.className,n=e.onClear,i=e.onChange,r=e.onSubmit,s=(0,o.useState)(!1),u=s[0],c=s[1],d=(0,o.useState)(!1),p=d[0],m=d[1];return(0,a.tZ)("form",{className:l()("spectrum-Search",t),onSubmit:function(e){e.preventDefault(),r&&r()}},(0,a.tZ)("div",{className:l()("spectrum-Textfield",{"is-focused":u}),css:f},(0,a.tZ)(h.Magnify,{className:"spectrum-Textfield-icon"}),(0,a.tZ)("input",{onFocus:function(){c(!0)},onBlur:function(){c(!1)},onChange:function(e){i(e.target.value),m(e.target.value.length>0)},"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),p&&(0,a.tZ)("button",{"aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:function(){n&&n()}},(0,a.tZ)(h.Cross,null)))},m=n(47197),v=n(27851),g=["searchIndex"];var y={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},S={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},x={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},b=function(e){var t=e.results,n=e.setIsOpen,i=[],s=[];t.forEach((function(e){var t=(0,a.tZ)(m.ck,{key:e.id,href:(0,r.dq)(e.path),onKeyPress:function(e){"enter"===e.key&&n(!1)},onClick:function(){n(!1)}},e.title);"apis"===e.type?s.push(t):i.push(t)}));var u=i.length>0,l=s.length>0;return u||l?(0,a.tZ)(m.v2,null,u&&(0,a.tZ)(m.$0,{title:"docs"},(0,o.cloneElement)(i[0],{isHighlighted:!0}),i.slice(1)),u&&l&&(0,a.tZ)(m.ck,{isDivider:!0}),l&&(0,a.tZ)(m.$0,{title:"API References"},u?s:(0,a.tZ)(o.default.Fragment,null,(0,o.cloneElement)(s[0],{isHighlighted:!0}),s.slice(1)))):(0,a.tZ)("div",{css:x},(0,a.tZ)("div",{css:S},(0,a.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:y},"No Results Found"),(0,a.tZ)("em",null,"Try another search term")))},w={name:"rx1x36",styles:"position:absolute;top:var(--spectrum-global-dimension-size-800);width:var(--spectrum-global-dimension-size-3600)"},I={name:"1d3w5wq",styles:"width:100%"},E={name:"bjn8wh",styles:"position:relative"},F=function(e){var t=e.searchIndex,n=void 0===t?{}:t,s=(0,c.Z)(e,g),u=(0,o.useRef)(null),l=(0,o.useState)(d.Index.load(n))[0],h=(0,o.useState)([]),f=h[0],m=h[1],y=(0,o.useState)(!1),S=y[0],x=y[1],F=function(e){u.current&&!u.current.contains(e.target)&&x(!1)};(0,o.useEffect)((function(){return document.addEventListener("click",F,!0),function(){document.removeEventListener("click",F,!0)}}),[]);return(0,a.tZ)("div",(0,i.Z)({ref:u,css:E},s),(0,a.tZ)(p,{css:I,onClear:function(){x(!1)},onChange:function(e){e.length>0?function(e){var t=l.search(e,{expand:!0}).map((function(e){var t=e.ref;return l.documentStore.getDoc(t)}));m(t),e.length>0&&x(!0)}(e):x(!1)},onSubmit:function(){f.length>0&&((0,r.c4)(f[0].path),x(!1))}}),(0,a.tZ)(v.J,{isOpen:S,css:w},(0,a.tZ)(b,{results:f,setIsOpen:x})))},D=n(77158);var N={name:"1bkyfo2",styles:"box-sizing:border-box;padding:0 var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-400);overflow:auto;height:calc(\n            100vh - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-400) -\n              var(--spectrum-global-dimension-size-400)\n          )"},z={name:"isxf96",styles:"padding-top:var(--spectrum-global-dimension-size-400);margin-left:var(--spectrum-global-dimension-size-400);margin-right:var(--spectrum-global-dimension-size-400);margin-bottom:var(--spectrum-global-dimension-size-200)"},k={name:"mgxzbr",styles:"&:not(.is-expanded) .spectrum-SideNav{display:none;}"},_=function(e){var t=e.selectedPages,n=e.selectedSubPages,o=e.searchIndex,u=e.setShowSideNav,c=n.some((function(e){return e.header})),d=n.some((function(e){var t;return(null==e||null===(t=e.pages)||void 0===t?void 0:t.length)>0}));return(0,a.tZ)("nav",{role:"navigation","aria-label":"Primary",css:(0,a.iv)("margin-top:var(--spectrum-global-dimension-size-800);@media screen and (max-width: ",s.q9,"){margin-top:var(--spectrum-global-dimension-size-1200);}","")},(0,a.tZ)(F,{searchIndex:o,css:z}),(0,a.tZ)("div",{role:"tree",css:N},(0,a.tZ)("ul",{"aria-label":"Table of contents",className:l()("spectrum-SideNav",{"spectrum-SideNav--multiLevel":d&&!c})},function e(n,o){return n.filter((function(e){return e.title&&e.href})).map((function(n,c){var d=t.find((function(e){return e===n})),h=(0,D.ZP)();return(0,a.tZ)("li",{key:c,css:k,className:l()(["spectrum-SideNav-item",{"is-expanded":d||n.header},{"is-selected":t[t.length-1]===n&&d}])},n.header?(0,a.tZ)("h2",{className:"spectrum-SideNav-heading",id:h},n.title):(0,s.Bm)(n.href)?(0,a.tZ)("a",(0,i.Z)({},(0,s.U3)(n.href),{href:n.href,className:"spectrum-SideNav-itemLink",role:"treeitem","aria-level":o,onClick:function(){u(!1)}}),n.title):(0,a.tZ)(r.rU,{onClick:function(){u(!1)},to:n.href,className:"spectrum-SideNav-itemLink",role:"treeitem","aria-level":o},n.title),n.pages&&(0,a.tZ)("ul",(0,i.Z)({className:"spectrum-SideNav",css:(0,a.iv)(o>1?"\n                    & > li > a {\n                      padding-left: calc("+(o+1)+" * var(--spectrum-global-dimension-size-150)) !important;\n                    }\n                  ":"",";","")},n.heading?{"aria-labelledby":h}:{}),e(n.pages,o+1)))}))}(n,1))))}}}]);
//# sourceMappingURL=1578-15a8e5615f2bfc7d31e7.js.map