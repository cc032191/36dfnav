(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ba02d0e"],{"0ed7":function(t,e,s){"use strict";s("48e7")},3040:function(t,e,s){},"48e7":function(t,e,s){},6409:function(t,e,s){},"6f0c":function(t,e,s){"use strict";s("6409")},7267:function(t,e,s){"use strict";s.r(e);var i=s("2f62"),n={name:"HsClock",data:()=>({hours:"00",minutes:"00",seconds:"00"}),mounted(){setInterval(this.clock,1e3)},methods:{clock(){let t=(new Date).getHours(),e=(new Date).getMinutes(),s=(new Date).getSeconds();this.$data.hours=t<10?"0"+t:t,this.$data.minutes=e<10?"0"+e:e,this.$data.seconds=s<10?"0"+s:s}}},o=(s("6f0c"),s("2877")),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hs-clock"},[s("div",{staticClass:"time"},[s("span",{ref:"hour",staticClass:"hour"},[t._v(t._s(t.hours))]),s("div",{staticClass:"text"},[t._v("时")]),s("span",{ref:"minute",staticClass:"minute"},[t._v(t._s(t.minutes))]),s("div",{staticClass:"text"},[t._v("分")]),s("span",{ref:"second",staticClass:"second"},[t._v(t._s(t.seconds))]),s("div",{staticClass:"text"},[t._v("秒")])])])}),[],!1,null,"3bf0698a",null).exports,r={name:"Weather",data:()=>({showWeather:!0}),mounted(){window.WIDGET={CONFIG:{modules:"12034",background:5,tmpColor:"E4C600",tmpSize:14,cityColor:"E4C600",citySize:14,aqiColor:"#E4C600",aqiSize:14,weatherIconSize:24,alertIconSize:18,padding:"0px 0px 0px 0px",shadow:"1",language:"auto",borderRadius:5,fixed:"false",vertical:"middle",horizontal:"left",key:"e05c4ce44b7e43c6a9303e68cc42a48c"}},this.TOOL.getCDN("https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0","text/javascript",()=>{this.$nextTick(()=>{let t=document.getElementById("hs-weather");this.chartObserve||(this.chartObserve=new ResizeObserver(([{contentRect:t}])=>{0!==t.width&&(this.showWeather=!(t.width>180))}),this.chartObserve.observe(t),this.$once("hook:beforeDestroy",(function(){this.chartObserve.unobserve(t)})))})})}},c=(s("0ed7"),{name:"HomeHead",components:{Clock:a,Weather:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.showWeather,expression:"showWeather"}],attrs:{id:"hs-weather"}},[e("div",{attrs:{id:"he-plugin-simple"}})])}),[],!1,null,"28f44e35",null).exports},props:{headBgConfig:{type:Object,default:()=>({clear:!1,white:!1,grossGlass:!0})}},data:()=>({showMenu:!1,selectedTake:"常用热门",takes:[],journals:[],currentJournal:{}}),computed:{...Object(i.d)(["showWrapLeft","user"]),showGrossGlass(){return!!(this.showMenu&&document.body.clientWidth<=1024)},signText(){return this.user.token?this.user.name:"注册登录"},links(){let t=this.$store.state.appConfig.site;return[{iconfontClass:"iconfont icon-md-home",text:t.guidePageName,url:t.guidePageUrl,isArticle:!1},{iconfontClass:"iconfont icon-md-stats",text:"更新日志",url:this.$store.state.appConfig.article.changelog,isArticle:!0},{iconfontClass:"iconfont icon-md-at",text:"关于我们",url:this.$store.state.appConfig.article.about,isArticle:!0}]}},mounted(){this.querySites(),this.queryJournals(),this.initMenu()},methods:{...Object(i.c)(["commitAll"]),querySites(){this.API.findSiteByCode({},{notify:!1}).then(t=>{this.commitAll({sites:t.data})})},queryJournals(){this.API.findJournal({},{notify:!1}).then(t=>{0!==t.data.length&&(this.journals=t.data||[],this.handleSelectJournal(this.journals[0]._id))})},handleSelectJournal(t){this.journals.find(e=>e._id===t)&&this.API.findJournalInformationById({_id:t}).then(t=>{this.selectJournal(t.data)})},selectJournal(t){this.currentJournal=t,this.commitAll({categorySites:t.series})},hiddenWrapLeft(){this.commitAll({showWrapLeft:!this.showWrapLeft})},sign(){this.user.token?this.commitAll({showWrapPerson:!0}):this.commitAll({showWrapSign:!0})},hiddenMenu(){this.showMenu=!this.showMenu},initMenu(){let t=this.LODASH.debounce(()=>{document.body.clientWidth>1024?this.showMenu=!0:this.showMenu=!1},100,{leading:!0,trailing:!0});window.addEventListener("resize",t),this.$once("hook:beforeDestory",()=>{window.removeEventListener("resize",t)}),this.$nextTick(()=>{let t=new Event("resize",{bubbles:!0,cancelable:!1});document.dispatchEvent(t)})},jump(t,e){let s=t.url;0===e?this.TOOL.openPage(s):this.TOOL.jumpToRead(this,s)}}}),l=(s("af72"),Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"rightMenu",rawName:"v-rightMenu"}],staticClass:"home-head",class:{clear:!t.showGrossGlass&&t.headBgConfig.clear,white:t.headBgConfig.white,"gross-glass":t.showGrossGlass||t.headBgConfig.grossGlass}},[s("section",{staticClass:"fold",on:{click:t.hiddenWrapLeft}},[s("i",{staticClass:"iconfont icon-md-barcode"})]),s("section",{staticClass:"menu",on:{click:t.hiddenMenu}},[s("i",{staticClass:"iconfont  icon-md-menu"})]),t.showMenu?s("section",{staticClass:"collapse"},[s("ul",{staticClass:"links"},t._l(t.links,(function(e,i){return s("li",{key:i,on:{click:function(s){return t.jump(e,i)}}},[s("i",{staticClass:"icon",class:e.iconfontClass}),s("span",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)]):t._e(),s("section",{staticClass:"today"},[s("div",{staticClass:"clock-group"},[s("Clock")],1),s("div",{staticClass:"weather-group"},[s("Weather")],1)]),t.showMenu?s("section",{staticClass:"take"},[s("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"},on:{command:t.handleSelectJournal}},[s("span",{staticClass:"el-dropdown-link pointer"},[t._v(" "+t._s(t.currentJournal.name||"无订阅源")+" "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t.journals.length?t._l(t.journals,(function(e){return s("el-dropdown-item",{key:e._id,attrs:{command:e._id}},[t._v(" "+t._s(e.name)+" ")])})):[s("el-dropdown-item",{attrs:{disabled:!0}},[t._v(" 空空如也 ")])]],2)],1)],1):t._e(),t.showMenu?s("section",{staticClass:"sign",on:{click:t.sign}},[t._v(" "+t._s(t.signText||"暂无昵称")+" ")]):t._e()])}),[],!1,null,"6e198d40",null));e.default=l.exports},af72:function(t,e,s){"use strict";s("3040")}}]);