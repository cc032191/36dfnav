(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3d1a3132"],{"33fd":function(t,s,e){"use strict";e("eef9")},"34d7":function(t,s,e){"use strict";e("c01dc")},7267:function(t,s,e){"use strict";e.r(s);var n=e("2f62"),i={name:"HsClock",data:()=>({hours:"00",minutes:"00",seconds:"00"}),mounted(){setInterval(this.clock,1e3)},methods:{clock(){let t=(new Date).getHours(),s=(new Date).getMinutes(),e=(new Date).getSeconds();this.$data.hours=t<10?"0"+t:t,this.$data.minutes=s<10?"0"+s:s,this.$data.seconds=e<10?"0"+e:e}}},o=(e("34d7"),e("2877")),a={name:"HomeHead",components:{Clock:Object(o.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hs-clock"},[e("div",{staticClass:"time"},[e("span",{ref:"hour",staticClass:"hour"},[t._v(t._s(t.hours))]),e("div",{staticClass:"text"},[t._v("时")]),e("span",{ref:"minute",staticClass:"minute"},[t._v(t._s(t.minutes))]),e("div",{staticClass:"text"},[t._v("分")]),e("span",{ref:"second",staticClass:"second"},[t._v(t._s(t.seconds))]),e("div",{staticClass:"text"},[t._v("秒")])])])}),[],!1,null,"77315c13",null).exports,Weather:Weather},props:{headBgConfig:{type:Object,default:()=>({clear:!1,white:!1,grossGlass:!0})}},data:()=>({showMenu:!1,selectedTake:"常用热门",takes:[],journals:[],currentJournal:{}}),computed:{...Object(n.e)(["user"]),showGrossGlass(){return!!(this.showMenu&&document.body.clientWidth<=1024)},signText(){return this.user.token?this.user.name:"注册登录"},links(){let t=this.$store.state.appConfig.site;return[{iconfontClass:"iconfont icon-md-home",text:t.guidePageName,url:t.guidePageUrl,isArticle:!1},{iconfontClass:"iconfont icon-md-stats",text:"更新日志",url:this.$store.state.appConfig.article.changelog,isArticle:!0},{iconfontClass:"iconfont icon-md-at",text:"关于我们",url:this.$store.state.appConfig.article.about,isArticle:!0}]}},mounted(){this.querySites(),this.queryJournals(),this.initMenu()},methods:{...Object(n.d)(["commitAll"]),querySites(){this.API.findSiteByCode({},{notify:!1}).then(t=>{this.commitAll({sites:t.data})})},queryJournals(){this.API.findJournal({},{notify:!1}).then(t=>{0!==t.data.length&&(this.journals=t.data||[],this.handleSelectJournal(this.journals[0]._id))})},handleSelectJournal(t){this.journals.find(s=>s._id===t)&&this.API.findJournalInformationById({_id:t},{notify:!1}).then(t=>{this.selectJournal(t.data)})},selectJournal(t){this.currentJournal=t,this.commitAll({categorySites:t.series})},handleNavbar(){this.commitAll({user:{config:{showNavbar:!this.user.config.showNavbar}}}),this.$store.dispatch("snapshoot")},sign(){this.user.token?this.commitAll({showWrapPerson:!0}):this.commitAll({showWrapSign:!0})},handleMenu(){this.showMenu=!this.showMenu},initMenu(){let t=this.LODASH.debounce(()=>{document.body.clientWidth>1024?this.showMenu=!0:this.showMenu=!1},100,{leading:!0,trailing:!0});window.addEventListener("resize",t),this.$once("hook:beforeDestory",()=>{window.removeEventListener("resize",t)}),this.$nextTick(()=>{let t=new Event("resize",{bubbles:!0,cancelable:!1});document.dispatchEvent(t)})},jump(t,s){let e=t.url;0===s?this.TOOL.openPage(e):this.TOOL.jumpToRead(this,e)}}},l=(e("33fd"),Object(o.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"home-head",class:{clear:!t.showGrossGlass&&t.headBgConfig.clear,white:t.headBgConfig.white,"gross-glass":t.showGrossGlass||t.headBgConfig.grossGlass},attrs:{id:"js-home-head"}},[e("section",{staticClass:"fold",on:{click:t.handleNavbar}},[e("i",{staticClass:"iconfont icon-a-unfoldcross-line"})]),e("section",{staticClass:"menu",on:{click:t.handleMenu}},[e("i",{staticClass:"iconfont icon-md-menu"})]),t.showMenu?e("section",{staticClass:"collapse"},[e("ul",{staticClass:"links"},t._l(t.links,(function(s,n){return e("li",{key:n,on:{click:function(e){return t.jump(s,n)}}},[e("i",{staticClass:"icon",class:s.iconfontClass}),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])})),0)]):t._e(),e("section",{staticClass:"today"},[e("div",{staticClass:"clock-group"},[e("Clock")],1)]),t.showMenu?e("section",{staticClass:"take"},[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"},on:{command:t.handleSelectJournal}},[e("span",{staticClass:"el-dropdown-link pointer"},[t._v(" "+t._s(t.currentJournal.name||"无订阅源")+" "),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t.journals.length?t._l(t.journals,(function(s){return e("el-dropdown-item",{key:s._id,attrs:{command:s._id}},[t._v(" "+t._s(s.name)+" ")])})):[e("el-dropdown-item",{attrs:{disabled:!0}},[t._v(" 空空如也 ")])]],2)],1)],1):t._e(),t.showMenu?e("section",{staticClass:"sign",on:{click:t.sign}},[t._v(" "+t._s(t.signText||"初级花酱")+" ")]):t._e()])}),[],!1,null,"07679e78",null));s.default=l.exports},c01dc:function(t,s,e){},eef9:function(t,s,e){}}]);