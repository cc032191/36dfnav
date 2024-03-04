(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e2681fec"],{"278d":function(e,t,l){"use strict";l.r(t);l("d3b7"),l("3ca3"),l("ddb0"),l("d81d"),l("a434");var r=l("45a3"),a=l("dc92"),o={name:"Setting",props:{},components:{VueJsonEditor:r.a},computed:{setting:{get:function(){return{site:this.site,theme:this.theme,mail:this.mail,article:this.article}},set:function(e){}}},data:function(){return{loaded:!1,activeNames:["1","2","3","4"],site:{brandName:"花森",brandUrl:"",redirectUrl:"http://huasenjio.top/",guidePageName:"花森小窝",guidePageUrl:"http://huasenjio.top/",footerHtml:"",openLabelClassification:!1,jwt:"",jwtLiveTime:604800,serviceQRCodeUrl:""},siteRule:{redirectUrl:[{validator:Object(a.b)(["isUrl::链接格式不正确"]),trigger:"change"}],guidePageUrl:[{validator:Object(a.b)(["isUrl::链接格式不正确"]),trigger:"change"}],brandUrl:[{validator:Object(a.b)(["isImgUrl::链接格式不正确"]),trigger:"change"}],serviceQRCodeUrl:[{validator:Object(a.b)(["isImgUrl::链接格式不正确"]),trigger:"change"}],jwt:[{validator:Object(a.b)(["minLength:32::请输入32个字符","maxLength:32::请输入32个字符","isEnglish::请输入数字/字母"]),trigger:"change"}]},mail:{host:"smtp.qq.com",port:465,user:"932397243@qq.com",mtp:""},article:{changelog:"",about:"",help:""},theme:{pure:[{color:"#FFFFFF",background:"#000000"},{color:"#000000",background:"#FFFFFF"}],wallpaper:[{headerFontColor:"#FFFFFF",background:"https://s2.loli.net/2023/03/31/oSz3nJB84dC5ueh.jpg"},{headerFontColor:"#000000",background:"https://s2.loli.net/2023/03/31/W9n7RoFvhtlpg6U.jpg"}],default:{bg:"",color:""}},themeRule:{"default.bg":[{validator:Object(a.b)(["isBg::内容不正确"]),trigger:"change"}],"default.color":[{validator:Object(a.b)(["isColorCode::内容不正确"]),trigger:"change"}]},articleOptions:[],currentUploading:{form:null,key:""},originPure:[],originWallpaper:[]}},created:function(){this.queryConfig(),this.queryArticle()},watch:{settingJSON:{handler:function(e){this.setting=e},immediate:!0}},methods:{reset:function(){this.$refs.siteForm.resetFields(),this.$refs.mailForm.resetFields(),this.$refs.themeForm.resetFields(),this.$refs.articleForm.resetFields(),this.theme.pure=this.LODASH.cloneDeep(this.originPure),this.theme.wallpaper=this.LODASH.cloneDeep(this.originWallpaper),this.$tips("success","重置配置表单成功",null,2e3)},queryConfig:function(){var e=this;this.API.findAppConfig({},{notify:!1}).then((function(t){e.loaded=!1;var l=t.data,r=l.site,a=l.mail,o=l.theme,i=l.article;e.TOOL.mergeByOwnKey(e.site,r),e.TOOL.mergeByOwnKey(e.mail,a),e.TOOL.mergeByOwnKey(e.article,i),e.LODASH.get(o,"pure")&&(e.theme.pure=e.LODASH.get(o,"pure")),e.LODASH.get(o,"wallpaper")&&(e.theme.wallpaper=e.LODASH.get(o,"wallpaper")),e.TOOL.mergeByOwnKey(e.theme.default,e.LODASH.get(o,"default")),e.originPure=e.LODASH.cloneDeep(e.theme.pure),e.originWallpaper=e.LODASH.cloneDeep(e.theme.wallpaper),e.loaded=!0}))},saveConfig:function(){var e=this,t=[];t.push(this.checkForm("siteForm"),this.checkForm("mailForm"),this.checkForm("themeForm"),this.checkForm("articleForm")),Promise.all(t).then((function(){e.API.saveAppConfig({systemConfig:JSON.stringify(e.setting,null,2)},{secret:!0}).then((function(t){e.loaded=!1,e.originPure=e.LODASH.cloneDeep(e.theme.pure),e.originWallpaper=e.LODASH.cloneDeep(e.theme.wallpaper),e.$nextTick((function(){e.loaded=!0}))}))})).catch((function(){e.$tips("error","校验失败，请检查配置输入项！",null,2e3)}))},checkForm:function(e){var t=this;return new Promise((function(l,r){t.$refs[e].validate((function(e){e?l():r()}))}))},queryArticle:function(){var e=this;this.API.findArticleByList({},{notify:!1}).then((function(t){e.articleOptions=t.data.map((function(e){return{label:e.title,value:e._id}}))}))},checkImgUrl:function(e){return Object(a.a)([{value:e,rules:[{strategy:"isNoEmpty",errMsg:"必填项"},{strategy:"isImgUrl",errMsg:"内容格式不正确"}]}])},checkColorCode:function(e){return Object(a.a)([{value:e,rules:[{strategy:"isNoEmpty",errMsg:"必填项"},{strategy:"isColorCode",errMsg:"内容格式不正确"}]}])},addTheme:function(e){var t;switch(e){case"pure":t={color:"#ffffff",background:"#000000"};break;case"wallpaper":t={headerFontColor:"#FFFFFF",background:""}}t&&this.theme[e].push(t)},handleUpload:function(e,t){this.currentUploading.form=e,this.currentUploading.key=t;var l=document.getElementById("js-img-picker");l&&l.click()},upload:function(e){var t=this,l=e.target.files[0],r=new FormData;r.append("file",l),this.API.uploadFile(r,{url:"/manage/upload?type=img"}).then((function(l){t.currentUploading.form[t.currentUploading.key]=t.LODASH.get(l.data,"0.path"),e.target.value=null}))},removeTheme:function(e,t,l){this.theme[e].splice(l,1)},setDefaultTheme:function(e,t,l){this.theme.default.bg=t.background,this.theme.default.color="pure"===e?t.color:t.headerFontColor}}},i=(l("fa08"),l("c292"),l("2877")),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loaded?r("div",{staticClass:"setting"},[r("el-collapse",{staticClass:"setting-collapse",model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[r("el-collapse-item",{attrs:{name:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-monitor mr-px-4"}),e._v(" 站点配置")]),r("el-form",{ref:"siteForm",staticClass:"site-form",attrs:{model:e.site,rules:e.siteRule}},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"brandName"}},[r("el-input",{attrs:{placeholder:"请输入品牌名"},model:{value:e.site.brandName,callback:function(t){e.$set(e.site,"brandName",t)},expression:"site.brandName"}},[r("template",{slot:"prepend"},[e._v("品牌名称")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"brandUrl"}},[r("el-input",{attrs:{placeholder:"请输入链接"},model:{value:e.site.brandUrl,callback:function(t){e.$set(e.site,"brandUrl",t)},expression:"site.brandUrl"}},[r("template",{slot:"prepend"},[e._v("品牌图片")]),r("el-button",{attrs:{slot:"append",icon:"el-icon-picture"},on:{click:function(t){return e.handleUpload(e.site,"brandUrl")}},slot:"append"})],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"redirectUrl"}},[r("el-input",{attrs:{placeholder:"请输入重定向地址"},model:{value:e.site.redirectUrl,callback:function(t){e.$set(e.site,"redirectUrl",t)},expression:"site.redirectUrl"}},[r("template",{slot:"prepend"},[e._v("重定向地址")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"serviceQRCodeUrl"}},[r("el-input",{attrs:{placeholder:"请输入二维码地址"},model:{value:e.site.serviceQRCodeUrl,callback:function(t){e.$set(e.site,"serviceQRCodeUrl",t)},expression:"site.serviceQRCodeUrl"}},[r("template",{slot:"prepend"},[e._v("客服二维码")]),r("el-button",{attrs:{slot:"append",icon:"el-icon-picture"},on:{click:function(t){return e.handleUpload(e.site,"serviceQRCodeUrl")}},slot:"append"})],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"guidePageName"}},[r("el-input",{attrs:{placeholder:"请输入引导页名称"},model:{value:e.site.guidePageName,callback:function(t){e.$set(e.site,"guidePageName",t)},expression:"site.guidePageName"}},[r("template",{slot:"prepend"},[e._v("引导页名称")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"guidePageUrl"}},[r("el-input",{attrs:{placeholder:"请输入引导页地址"},model:{value:e.site.guidePageUrl,callback:function(t){e.$set(e.site,"guidePageUrl",t)},expression:"site.guidePageUrl"}},[r("template",{slot:"prepend"},[e._v("引导页地址")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"footerHtml"}},[r("el-input",{attrs:{placeholder:"请输入页脚代码"},model:{value:e.site.footerHtml,callback:function(t){e.$set(e.site,"footerHtml",t)},expression:"site.footerHtml"}},[r("template",{slot:"prepend"},[e._v("页脚代码")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"jwt"}},[r("el-input",{attrs:{placeholder:"请输入令牌密钥"},model:{value:e.site.jwt,callback:function(t){e.$set(e.site,"jwt",t)},expression:"site.jwt"}},[r("template",{slot:"prepend"},[e._v("令牌密钥")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"jwtLiveTime"}},[r("el-input",{attrs:{placeholder:"1000 = 1秒"},on:{input:function(t){return e.site.jwtLiveTime=Number(t.replace(/[^0-9.]/g,""))||604800}},model:{value:e.site.jwtLiveTime,callback:function(t){e.$set(e.site,"jwtLiveTime",t)},expression:"site.jwtLiveTime"}},[r("template",{slot:"prepend"},[e._v("令牌存活时间")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"openLabelClassification"}},[r("el-switch",{attrs:{"active-text":"开启标签分类","inactive-text":"关闭标签分类"},model:{value:e.site.openLabelClassification,callback:function(t){e.$set(e.site,"openLabelClassification",t)},expression:"site.openLabelClassification"}})],1)],1)],1)],1)],2),r("el-collapse-item",{attrs:{name:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-magic-stick mr-px-4"}),e._v("主题配置")]),r("el-form",{ref:"themeForm",staticClass:"theme-form",attrs:{model:e.theme,rules:e.themeRule}},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"default.bg"}},[r("el-input",{attrs:{placeholder:"< 图片链接 | 颜色代码 >"},model:{value:e.theme.default.bg,callback:function(t){e.$set(e.theme.default,"bg",t)},expression:"theme.default.bg"}},[r("template",{slot:"prepend"},[e._v("默认背景")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"default.color"}},[r("el-input",{attrs:{placeholder:"< 颜色代码 >"},model:{value:e.theme.default.color,callback:function(t){e.$set(e.theme.default,"color",t)},expression:"theme.default.color"}},[r("template",{slot:"prepend"},[e._v("背景字体颜色")])],2)],1)],1)],1),r("div",{staticClass:"pure"},[r("div",{staticClass:"px-px-2 text-bold"},[e._v(" 纯色背景列表 "),r("i",{staticClass:"el-icon-circle-plus text-green-500 pointer",on:{click:function(t){return e.addTheme("pure")}}})]),r("ul",{staticClass:"flex overflow-x-auto px-px-2 py-px-6"},e._l(e.theme.pure,(function(t,l){return r("li",{key:l,staticClass:"flex-shrink-0 w-px-184 relative ml-px-15 first:ml-px-0 shadow p-px-8 rounded"},[r("i",{staticClass:"el-icon-top absolute -top-px-6 right-px-12 z-10 text-blue-500 pointer",attrs:{title:"设为默认"},on:{click:function(r){return e.setDefaultTheme("pure",t,l)}}}),r("i",{staticClass:"el-icon-remove absolute -top-px-6 -right-px-4 z-10 text-red-500 pointer",attrs:{title:"移除色块"},on:{click:function(r){return e.removeTheme("pure",t,l)}}}),r("el-tooltip",{staticClass:"item",attrs:{disabled:!e.checkColorCode(t.background),effect:"light",content:"内容格式非法",placement:"right"}},[r("el-input",{class:{"error-tip":!!e.checkColorCode(t.background)},attrs:{placeholder:"背景颜色"},model:{value:t.background,callback:function(l){e.$set(t,"background",l)},expression:"item.background"}},[r("el-color-picker",{staticClass:"relative top-px-5 left-px-0",attrs:{slot:"prefix","popper-class":"setting-color-picker-popper",size:"mini"},slot:"prefix",model:{value:t.background,callback:function(l){e.$set(t,"background",l)},expression:"item.background"}})],1)],1),r("el-tooltip",{staticClass:"item",attrs:{disabled:!e.checkColorCode(t.color),effect:"light",content:"内容格式非法",placement:"right"}},[r("el-input",{staticClass:"mt-px-4",class:{"error-tip":!!e.checkColorCode(t.color)},attrs:{placeholder:"字体颜色"},model:{value:t.color,callback:function(l){e.$set(t,"color",l)},expression:"item.color"}},[r("el-color-picker",{staticClass:"relative top-px-5 left-px-0",attrs:{slot:"prefix","popper-class":"setting-color-picker-popper",size:"mini"},slot:"prefix",model:{value:t.color,callback:function(l){e.$set(t,"color",l)},expression:"item.color"}})],1)],1)],1)})),0)]),r("div",{staticClass:"wallpaper"},[r("div",{staticClass:"px-px-2 text-bold"},[e._v(" 壁纸背景列表 "),r("i",{staticClass:"el-icon-circle-plus text-green-500 pointer",on:{click:function(t){return e.addTheme("wallpaper")}}})]),r("ul",{staticClass:"flex overflow-x-auto px-px-2 py-px-6"},e._l(e.theme.wallpaper,(function(t,a){return r("li",{key:a,staticClass:"flex-shrink-0 w-px-184 relative ml-px-15 first:ml-px-0 shadow p-px-8 rounded"},[r("i",{staticClass:"el-icon-top absolute -top-px-6 right-px-12 z-10 text-blue-500 pointer",attrs:{title:"设为默认"},on:{click:function(l){return e.setDefaultTheme("wallpaper",t,a)}}}),r("i",{staticClass:"el-icon-remove absolute -top-px-6 -right-px-4 z-10 text-red-500 pointer",attrs:{title:"移除壁纸"},on:{click:function(l){return e.removeTheme("wallpaper",t,a)}}}),r("div",{staticClass:"w-full h-px-80 mb-px-4 text-center p-px-4 bg-gray-100 border border-dashed border-gray-400 rounded"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{unload:l("4101")},expression:"{ unload: require('@/assets/img/error/image-error.png') }"}],staticClass:"max-w-full max-h-full rounded",attrs:{src:t.background}})]),r("el-tooltip",{staticClass:"item",attrs:{disabled:!e.checkImgUrl(t.background),effect:"light",content:"内容格式非法",placement:"right"}},[r("el-input",{class:{"error-tip":!!e.checkImgUrl(t.background)},attrs:{placeholder:"图片链接"},model:{value:t.background,callback:function(l){e.$set(t,"background",l)},expression:"item.background"}},[r("div",{staticClass:"w-px-28 h-px-28 p-px-4 relative top-px-5 left-px-0 border border-solid border-gray-300 rounded flex justify-center items-center pointer",attrs:{slot:"prefix"},slot:"prefix"},[r("i",{staticClass:"el-icon-picture text-lg text-gray-600",on:{click:function(l){return e.handleUpload(t,"background")}}})])])],1),r("el-tooltip",{staticClass:"item",attrs:{disabled:!e.checkColorCode(t.headerFontColor),effect:"light",content:"内容格式非法",placement:"right"}},[r("el-input",{staticClass:"mt-px-4",class:{"error-tip":!!e.checkColorCode(t.headerFontColor)},attrs:{placeholder:"字体颜色"},model:{value:t.headerFontColor,callback:function(l){e.$set(t,"headerFontColor",l)},expression:"item.headerFontColor"}},[r("el-color-picker",{staticClass:"relative top-px-5 left-px-0",attrs:{slot:"prefix","popper-class":"setting-color-picker-popper",size:"mini"},slot:"prefix",model:{value:t.headerFontColor,callback:function(l){e.$set(t,"headerFontColor",l)},expression:"item.headerFontColor"}})],1)],1)],1)})),0)])],1)],2),r("el-collapse-item",{attrs:{name:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-document mr-px-4"}),e._v("文章配置")]),r("el-form",{ref:"articleForm",staticClass:"article-form",attrs:{model:e.article,"label-position":"top"}},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"changelog",label:"更新日志"}},[r("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择更新日志"},model:{value:e.article.changelog,callback:function(t){e.$set(e.article,"changelog",t)},expression:"article.changelog"}},e._l(e.articleOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"about",label:"关于我们"}},[r("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择关于我们"},model:{value:e.article.about,callback:function(t){e.$set(e.article,"about",t)},expression:"article.about"}},e._l(e.articleOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"help",label:"帮助文档"}},[r("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择帮助文档"},model:{value:e.article.help,callback:function(t){e.$set(e.article,"help",t)},expression:"article.help"}},e._l(e.articleOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)],2),r("el-collapse-item",{attrs:{name:"4"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message mr-px-4"}),e._v("邮箱配置")]),r("el-form",{ref:"mailForm",staticClass:"mail-form",attrs:{model:e.mail}},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"host"}},[r("el-input",{attrs:{placeholder:"< 主机 >"},model:{value:e.mail.host,callback:function(t){e.$set(e.mail,"host",t)},expression:"mail.host"}},[r("template",{slot:"prepend"},[e._v("host")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"port"}},[r("el-input",{attrs:{placeholder:"< 端口 >"},on:{input:function(t){return e.mail.port=Number(t.replace(/[^0-9.]/g,""))||465}},model:{value:e.mail.port,callback:function(t){e.$set(e.mail,"port",t)},expression:"mail.port"}},[r("template",{slot:"prepend"},[e._v("port")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"user"}},[r("el-input",{attrs:{placeholder:"< 用户 >"},model:{value:e.mail.user,callback:function(t){e.$set(e.mail,"user",t)},expression:"mail.user"}},[r("template",{slot:"prepend"},[e._v("user")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"mtp"}},[r("el-input",{attrs:{placeholder:"< 通行码 >"},model:{value:e.mail.mtp,callback:function(t){e.$set(e.mail,"mtp",t)},expression:"mail.mtp"}},[r("template",{slot:"prepend"},[e._v("mtp")])],2)],1)],1)],1)],1)],2),r("el-collapse-item",{attrs:{name:"5"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-table-lamp mr-px-4"}),e._v("配置总览")]),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"result"},[r("VueJsonEditor",{staticClass:"json-edit",attrs:{"show-btns":!1,expandedOnStart:!0,mode:"form"},model:{value:e.setting,callback:function(t){e.setting=t},expression:"setting"}})],1)])],1)],2)],1),r("div",{staticClass:"operation mt-px-10 flex justify-end"},[r("el-button",{attrs:{type:"primary"},on:{click:e.saveConfig}},[e._v("保存配置")]),r("el-button",{attrs:{type:"danger"},on:{click:e.reset}},[e._v("重置配置")])],1),r("input",{staticStyle:{display:"none"},attrs:{id:"js-img-picker",accept:"image/gif,image/jpeg,image/jpg,image/png",type:"file"},on:{change:function(t){return e.upload(t)}}})],1):e._e()}),[],!1,null,"6ede4ab4",null);t.default=s.exports},6836:function(e,t,l){},c0cc:function(e,t,l){},c292:function(e,t,l){"use strict";l("6836")},fa08:function(e,t,l){"use strict";l("c0cc")}}]);