(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6b2196e2"],{"0159":function(t,e,s){"use strict";s.r(e);var i=s("2f62"),a=s("dc92"),o=s("6f90"),l=s("934a"),c=s("af63"),r={name:"FormDialog",components:{HsDialog:c.a},props:{title:{type:String},formData:{type:Object,default:()=>({name:"杭州",area:"1"})},formMap:{type:Array,default:()=>[{label:"输入框示例",key:"name",type:"input"},{label:"下拉选择",key:"area",type:"select",selectOptions:[{label:"滨江区",value:1},{label:"萧山区",value:2}]}]},formRule:{type:Object,default:()=>({name:[{required:!0,message:"必填项",trigger:"blur"}]})}},methods:{comfirmDialog(){this.$refs.form.validate(t=>{t&&this.$emit("comfirmForm")})},closeDialog(){this.$refs.form.resetFields(),this.$emit("cancelForm")},resetFormFields(){this.$refs.form.resetFields()}}},n=(s("1448"),s("2877")),d=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HsDialog",t._g(t._b({staticClass:"form-dialog",attrs:{title:t.title},on:{comfirmDialog:t.comfirmDialog,closeDialog:t.closeDialog,close:t.closeDialog}},"HsDialog",t.$attrs,!1),t.$listeners),[s("el-form",{ref:"form",staticClass:"form-group",attrs:{model:t.formData,rules:t.formRule,"label-position":"top"}},t._l(t.formMap,(function(e,i){return s("el-form-item",{key:i,attrs:{label:e.label,prop:e.key}},["input"===e.type?s("el-input",{model:{value:t.formData[e.key],callback:function(s){t.$set(t.formData,e.key,s)},expression:"formData[item.key]"}}):t._e(),"select"===e.type?s("el-select",{attrs:{"popper-append-to-body":!1},model:{value:t.formData[e.key],callback:function(s){t.$set(t.formData,e.key,s)},expression:"formData[item.key]"}},t._l(e.selectOptions,(function(t,e){return s("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1):t._e(),"textarea"===e.type?s("el-input",{attrs:{type:"textarea",autosize:{minRows:e.minRows}},model:{value:t.formData[e.key],callback:function(s){t.$set(t.formData,e.key,s)},expression:"formData[item.key]"}}):t._e()],1)})),1)],1)}),[],!1,null,"505e0a26",null).exports,h=s("f8b1"),u=s("6c51"),m={name:"CustomDrawer",components:{HsDrawer:h.a},data:()=>({show:!1,activeName:"1",bg:"",sliderFilter:0,sliderLightness:0,associationCount:6,searchBorderRadius:24,searchEngineIndex:0,showLeftNavbar:!0,pures:[{color:"#FFFFFF",background:"#9CA3AF"},{color:"#FFFFFF",background:"#F87171"},{color:"#FFFFFF",background:"#FBBF24"},{color:"#FFFFFF",background:"#34D399"},{color:"#FFFFFF",background:"#60A5FA"},{color:"#FFFFFF",background:"#A78BFA"}],wallpaperImages:[{headerFontColor:"#FFFFFF",background:s("a13d")},{headerFontColor:"#FFFFFF",background:s("6e73")},{headerFontColor:"#FFFFFF",background:s("aee4")},{headerFontColor:"#000000",background:s("63cd")},{headerFontColor:"#FFFFFF",background:s("0a8c")},{headerFontColor:"#000000",background:s("bd9f")}]}),mounted(){this.bg=this.user.config.bg,this.sliderFilter=this.user.config.bgFilter,this.sliderLightness=this.user.config.bgLightness,this.associationCount=this.user.config.searchAssociationCount,this.searchBorderRadius=this.user.config.searchBorderRadius,this.searchEngineIndex=this.user.config.searchEngineIndex,this.showLeftNavbar=this.user.config.showNavbar},computed:{...Object(i.e)(["user","themeConfig"]),displayPure(){let t=this.themeConfig.pure?this.themeConfig.pure:[];return[...this.pures.concat(t)]},displayWallpaperImages(){let t=this.themeConfig.wallpaper?this.themeConfig.wallpaper:[];return[...this.wallpaperImages.concat(t)]},searchOptions:()=>u.a.map((t,e)=>({value:e,label:t.name}))},methods:{...Object(i.d)(["commitAll"]),handleSearchBorderRadiusChange(t){this.initCustomStyle({user:{config:{searchBorderRadius:t}}})},handleSearchEngineChange(t){this.initCustomStyle({user:{config:{searchEngineIndex:t}}})},handleNavbar(t){this.initCustomStyle({user:{config:{showNavbar:!!t}}})},handleBlur(){this.associationCount=this.associationCount<2||this.associationCount>10?6:this.associationCount,this.initCustomStyle({user:{config:{searchAssociationCount:this.associationCount}}})},changeFilter(t){this.initCustomStyle({user:{config:{bgFilter:t}}})},changeShadow(t){this.initCustomStyle({user:{config:{bgLightness:t}}})},beforeUpload(t){return t.size<=2097152?this.TOOL.getBase64(t,t=>{this.initCustomStyle({user:{config:{bg:t}}})}):this.$tips("error","图片大小已超过 2MB",null,2e3),!1},changeBg(t,e){this.initCustomStyle({user:{config:{bg:"pick"==e?t:t.background}}})},initCustomStyle(t){this.commitAll(t),this.$store.dispatch("snapshoot"),this.$store.dispatch("initLocalUserInfo")}}},p=(s("cd74"),Object(n.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HsDrawer",t._g(t._b({attrs:{title:"个性定制"},nativeOn:{contextmenu:function(t){t.stopPropagation()}}},"HsDrawer",t.$attrs,!1),t.$listeners),[s("div",{staticClass:"custom-drawer"},[s("el-collapse",{staticClass:"collapse",attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-collapse-item",{attrs:{name:"1"}},[s("template",{slot:"title"},[s("div",{staticClass:"title"},[t._v("基础设置")])]),s("div",{staticClass:"collapse-content"},[s("section",{staticClass:"option"},[s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("预选引擎")]),s("div",{staticClass:"detail"},[t._v("默认选中的搜索引擎")])]),s("div",{staticClass:"right"},[s("el-select",{staticStyle:{width:"120px"},on:{change:t.handleSearchEngineChange},model:{value:t.searchEngineIndex,callback:function(e){t.searchEngineIndex=e},expression:"searchEngineIndex"}},t._l(t.searchOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("搜索建议")]),s("div",{staticClass:"detail"},[t._v("配置搜索框联想数量")])]),s("div",{staticClass:"right"},[s("el-input",{staticStyle:{width:"120px"},attrs:{type:"number",max:10,min:2},on:{blur:t.handleBlur},model:{value:t.associationCount,callback:function(e){t.associationCount=e},expression:"associationCount"}},[s("template",{slot:"append"},[t._v("个")])],2)],1)]),s("div",{staticClass:"row vertical"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("搜索框圆角")]),s("div",{staticClass:"detail"},[t._v("控制搜索框的圆角样式")])]),s("div",{staticClass:"right px-px-12"},[s("el-slider",{attrs:{min:0,max:24,step:2,"show-stops":"","format-tooltip":function(t){return t+"px"}},on:{change:t.handleSearchBorderRadiusChange},model:{value:t.searchBorderRadius,callback:function(e){t.searchBorderRadius=e},expression:"searchBorderRadius"}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("侧边栏")]),s("div",{staticClass:"detail"},[t._v("控制侧边栏显示隐藏")])]),s("div",{staticClass:"right"},[s("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏"},on:{change:t.handleNavbar},model:{value:t.showLeftNavbar,callback:function(e){t.showLeftNavbar=e},expression:"showLeftNavbar"}})],1)])])])],2),s("el-collapse-item",{attrs:{name:"2"}},[s("template",{slot:"title"},[s("div",{staticClass:"title"},[t._v("背景墙")])]),s("div",{staticClass:"collapse-content"},[s("div",{staticClass:"option"},[s("div",{staticClass:"row vertical"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("背景模糊度")]),s("div",{staticClass:"detail"},[t._v("调整背景墙的模糊度")])]),s("div",{staticClass:"right px-px-12"},[s("el-slider",{attrs:{"show-tooltip":!1,min:0,max:10,step:.5,"show-stops":""},on:{change:t.changeFilter},model:{value:t.sliderFilter,callback:function(e){t.sliderFilter=e},expression:"sliderFilter"}})],1)]),s("div",{staticClass:"row vertical"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("遮罩浓度")]),s("div",{staticClass:"detail"},[t._v("调整背景墙的明暗")])]),s("div",{staticClass:"right px-px-12"},[s("el-slider",{attrs:{"show-tooltip":!1,min:0,max:1,step:.1,"show-stops":""},on:{change:t.changeShadow},model:{value:t.sliderLightness,callback:function(e){t.sliderLightness=e},expression:"sliderLightness"}})],1)]),s("div",{staticClass:"row vertical"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("纯色背景")]),s("div",{staticClass:"detail"},[t._v("选择纯色作为背景墙")])]),s("div",{staticClass:"right"},[s("div",{staticClass:"color-block-group"},[t._l(t.displayPure,(function(e,i){return s("div",{key:i,staticClass:"color-block",style:{backgroundColor:e.background},on:{click:function(s){return t.changeBg(e)}}})})),s("div",{staticClass:"color-block"},[s("el-color-picker",{attrs:{size:"mini"},on:{change:function(e){return t.changeBg(e,"pick")}},model:{value:t.bg,callback:function(e){t.bg=e},expression:"bg"}})],1)],2)])]),s("div",{staticClass:"row vertical"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("图片背景")]),s("div",{staticClass:"detail"},[t._v("选择图片作为背景墙")])]),s("div",{staticClass:"right"},[s("div",{staticClass:"image-group"},t._l(t.displayWallpaperImages,(function(e,i){return s("div",{key:i,staticClass:"image",style:{backgroundImage:"url("+e.background+")"},on:{click:function(s){return t.changeBg(e)}}},[s("div",{staticClass:"image__setting"},[t._v(" 立即设置 ")])])})),0)])]),s("div",{staticClass:"row vertical"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left__title"},[t._v("自定义上传")]),s("div",{staticClass:"detail"},[t._v("上传图片作为背景墙")])]),s("div",{staticClass:"right"},[s("div",{staticClass:"flex justify-center items-center"},[s("el-upload",{staticClass:"upload pt-px-10",attrs:{accept:".png,.jpg,.git","before-upload":t.beforeUpload,action:"",drag:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("拖拽上传 · "),s("em",[t._v("点击上传")])])])],1)])])])])],2)],1)],1)])}),[],!1,null,"633aaf2c",null).exports),f={name:"RecoveryDialog",components:{HsDialog:c.a},data:()=>({width:435,height:500,active:"backup",currentData:"",displayData:""}),mounted(){this.handleBackupData()},computed:{...Object(i.e)(["user"]),...Object(i.c)(["isLogin"])},watch:{active:{handler(t){this.displayData="backup"===t?this.currentData:""}}},methods:{...Object(i.d)(["commitAll"]),handleCommit(t){0!==Object.keys(t).length&&(this.commitAll(t),this.$store.dispatch("snapshoot"))},handleBackupData(){let{records:t,config:e}=this.user,s={records:t,config:e};this.currentData=JSON.stringify(s),this.displayData=this.currentData},handleCopy(){this.TOOL.copyTextToClip(this.displayData,"数据已复制到剪贴板")},handleSaveToCloud(){this.isLogin?(this.$store.dispatch("initLocalUserInfo"),setTimeout(()=>{let{config:t,records:e}=this.STORAGE.getItem(this.CONSTANT.localUser),s={config:t,records:e};this.API.backup(s,{secret:!0})},200)):this.$tips("error","请先登录账号")},async handleRecoveryByPaste(){try{let t=JSON.parse(this.displayData),{records:e,config:s}=t;if(!Array.isArray(e||"[object Object]"!==Object.prototype.toString.call(s)))throw new Error;this.handleCommit({user:{records:e,config:s}}),this.$tips("success","恢复成功，即将刷新页面！","top-right",2e3,()=>{window.location.reload()})}catch(t){this.$tips("error","恢复失败，请检查数据格式！","top-right",2e3)}},handleRecoveryByCloud(){this.isLogin?this.API.recovery({},{notify:!1}).then(t=>{let{records:e,config:s}=t.data,i=this.STORAGE.getItem(this.CONSTANT.localUser);i.records=e,i.config=s,this.STORAGE.setItem(this.CONSTANT.localUser,i),this.$tips("success","应用云端数据成功，即将刷新页面！","top-right",2e3,()=>{window.location.reload()})}):this.$tips("error","请先登录账号")}}},v=(s("edac"),{name:"HomeRecord",components:{FormDialog:d,CustomDrawer:p,RecoveryDialog:Object(n.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HsDialog",t._g(t._b({staticClass:"recovery-dialog",attrs:{title:"数据管理面板",width:t.width,height:t.height,"close-on-click-modal":!1}},"HsDialog",t.$attrs,!1),t.$listeners),[s("el-tabs",{staticClass:"recovery-dialog__tabs",attrs:{type:"border-card"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("el-tab-pane",{attrs:{name:"backup",label:"数据备份"}},[s("el-button",{attrs:{icon:"el-icon-document-copy",type:"info",size:"mini"},on:{click:t.handleCopy}},[t._v("拷贝数据")]),s("el-button",{attrs:{icon:"el-icon-upload",type:"success",size:"mini"},on:{click:t.handleSaveToCloud}},[t._v("数据上云")])],1),s("el-tab-pane",{attrs:{name:"recovery",label:"恢复数据"}},[s("el-button",{attrs:{icon:"el-icon-document-copy",type:"info",size:"mini"},on:{click:t.handleRecoveryByPaste}},[t._v("粘贴数据恢复")]),s("el-button",{attrs:{icon:"el-icon-download",type:"success",size:"mini"},on:{click:t.handleRecoveryByCloud}},[t._v("应用云端数据")])],1),s("div",{staticClass:"tabs__textarea w-full h-px-320 mt-px-20"},[s("el-input",{attrs:{disabled:"backup"===t.active,type:"textarea",placeholder:"请粘贴离线数据",autosize:{minRows:14,maxRows:14},resize:"none"},model:{value:t.displayData,callback:function(e){t.displayData=e},expression:"displayData"}})],1)],1)],1)}),[],!1,null,"31fe91c4",null).exports},data:()=>({isEditMode:!1,isDeleteMode:!1,showForm:!1,showCustom:!1,showRecovery:!1,title:"",formData:{name:"",url:"",remark:""},formMap:[{key:"name",label:"站点名称",type:"input"},{key:"url",label:"站点链接",type:"input"},{key:"remark",label:"备注",type:"textarea",minRows:4}],formRule:{name:[{validator:Object(a.a)(["isNoEmpty::必填项","isChinese::请输入汉字/英文/数字"]),trigger:"blur"}],url:[{validator:Object(a.a)(["isNoEmpty::必填项","isUrl::请输入正确的网址"]),trigger:"blur"}]}}),computed:{...Object(i.e)(["user","config"])},watch:{showForm(t){t?o.a.pubEv(l.b):o.a.pubEv(l.a)}},methods:{...Object(i.d)(["commitAll"]),openAddMode(){this.title="添加网站",this.isEditMode=!1,this.isDeleteMode=!1,this.showForm=!0},openEditMode(){this.isEditMode=!this.isEditMode},openDeleteMode(){this.isDeleteMode=!this.isDeleteMode},handleEdit(t,e){this.title="编辑网站",this.showForm=!0,this.$nextTick(()=>{this.formData=Object.assign(this.formData,t)})},openSimpleMode(){this.handleCommit({user:{config:{simpleMode:!this.user.config.simpleMode}}})},handleDelete(t){let e=[...this.user.records];e.map((s,i)=>{s.id==t.id&&e.splice(i,1)}),this.handleCommit({user:{records:e}})},save(){let t=[...this.user.records],e=Object.assign({id:"",name:"",url:"",remark:""},{...this.formData});if(this.isEditMode)for(let s=0;s<t.length;s++)t[s].id==e.id&&(t[s]=e);else e.id=this.TOOL.getUid(16,8),t.push(e);this.handleCommit({user:{records:t}}),this.cancel()},cancel(){this.$refs.formDialog&&this.$refs.formDialog.resetFormFields(),this.showForm=!1},handleCommit(t){0!==Object.keys(t).length&&(this.commitAll(t),this.$store.dispatch("snapshoot"))},async handleRecovery(){this.showRecovery=!this.showRecovery},openCustomWallpaper(){this.showCustom=!0}}}),g=(s("fe46"),Object(n.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"home-record",attrs:{id:"js-home-record"}},[s("header",[t._m(0),s("ul",[s("li",{on:{click:t.openAddMode}},[s("i",{staticClass:"iconfont icon-tianjia"}),s("span",{staticClass:"sm:hidden"},[t._v("添加")])]),s("li",{class:{active:t.isEditMode},on:{click:t.openEditMode}},[s("i",{staticClass:"iconfont icon-md-settings"}),s("span",{staticClass:"sm:hidden"},[t._v("编辑")])]),s("li",{class:{active:t.isDeleteMode},on:{click:t.openDeleteMode}},[s("i",{staticClass:"iconfont icon-md-trash"}),s("span",{staticClass:"sm:hidden"},[t._v("管理")])]),s("li",{on:{click:t.handleRecovery}},[s("i",{staticClass:"iconfont icon-md-sync"}),s("span",{staticClass:"sm:hidden"},[t._v("数据")])]),s("li",{on:{click:t.openCustomWallpaper}},[s("i",{staticClass:"iconfont icon-md-happy"}),s("span",{staticClass:"sm:hidden"},[t._v("个性")])]),s("li",{on:{click:t.openSimpleMode}},[s("i",{staticClass:"iconfont icon-md-qr-scanner"}),s("span",{staticClass:"sm:hidden"},[t._v("全屏")])])])]),s("main",{directives:[{name:"discolor",rawName:"v-discolor"}],attrs:{id:"js-home-record__main"}},[s("ul",{directives:[{name:"balance",rawName:"v-balance"}]},t._l(t.user.records,(function(e,i){return s("li",{key:e+"-"+i,staticClass:"record-item"},[t.isEditMode?s("a",{staticClass:"pointer text",class:{"edit-mode":t.isEditMode},on:{click:function(s){return t.handleEdit(e,i)}}},[t._v(" "+t._s(e.name)+" ")]):s("a",{staticClass:"inherit-text text",attrs:{title:e.remark,href:e.url,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")]),t.isDeleteMode?s("i",{staticClass:"iconfont icon-md-close-circle delete-icon",on:{click:function(s){return t.handleDelete(e)}}}):t._e()])})),0)]),t.showForm?s("FormDialog",{ref:"formDialog",attrs:{visible:t.showForm,width:"400",buttons:{comfirm:"确 认",cancel:"取 消"},title:t.title,"close-on-click-modal":!1,formData:t.formData,formMap:t.formMap,formRule:t.formRule},on:{"update:visible":function(e){t.showForm=e},comfirmForm:t.save,cancelForm:t.cancel}}):t._e(),t.showCustom?s("CustomDrawer",{attrs:{visible:t.showCustom,direction:"rtl",size:435,wrapperClosable:!1},on:{"update:visible":function(e){t.showCustom=e}}}):t._e(),t.showRecovery?s("RecoveryDialog",{attrs:{visible:t.showRecovery,showMax:!1},on:{"update:visible":function(e){t.showRecovery=e}}}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[this._v(" 自定义网站 "),e("i",{staticClass:"iconfont icon-md-attach"})])}],!1,null,"09ebec6d",null));e.default=g.exports},"07d7":function(t,e,s){},"0a8c":function(t,e,s){t.exports=s.p+"img/5.4cb38539.jpeg"},1448:function(t,e,s){"use strict";s("07d7")},"6e73":function(t,e,s){t.exports=s.p+"img/2.6a62f7d0.jpeg"},a13d:function(t,e,s){t.exports=s.p+"img/1.11dc71da.jpeg"},aee4:function(t,e,s){t.exports=s.p+"img/3.b838a609.jpeg"},bd9f:function(t,e,s){t.exports=s.p+"img/6.53f3a604.jpeg"},c210:function(t,e,s){},cd74:function(t,e,s){"use strict";s("c210")},e64f:function(t,e,s){},edac:function(t,e,s){"use strict";s("f361")},f361:function(t,e,s){},fe46:function(t,e,s){"use strict";s("e64f")}}]);