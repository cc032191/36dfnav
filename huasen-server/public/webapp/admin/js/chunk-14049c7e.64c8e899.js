(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-14049c7e"],{1232:function(t,e,i){},"9c1e":function(t,e,i){"use strict";i("1232")},fb5f:function(t,e,i){"use strict";i.r(e);i("d81d"),i("99af"),i("b0c0");var a={name:"HomeSystem",props:{system:{type:Object,default:function(){return{time:[],cpu:[],memory:[]}}}},watch:{system:function(t,e){this.initMemoryChart()}},data:function(){return{disks:[{value:20,name:"根目录"},{value:30,name:"盘1"},{value:25,name:"盘2"},{value:25,name:"盘3"},{value:20,name:"盘4"},{value:35,name:"盘5"},{value:35,name:"盘6"}]}},mounted:function(){this.queryDiskOverview()},methods:{queryDiskOverview:function(){var t=this;this.API.diskOverview({},{notify:!1}).then((function(e){t.disks=e.data.map((function(e){return{name:e.diskName,value:e.diskValue,valueSize:t.bytesToSize(e.diskValue),totalSize:t.bytesToSize(e.totalValue),usage:e.usage}})),t.initStoreChart()}))},initStoreChart:function(){var t={color:["#32c5e9","#ffdb5c"],tooltip:{trigger:"item",formatter:function(t){return"".concat(t.data.name,"占比：").concat(t.data.usage," </br> 磁盘空间大小：").concat(t.data.valueSize," </br> 磁盘总容量：").concat(t.data.totalSize)}},legend:{type:"scroll",orient:"vertical",left:0,align:"left",top:"middle",textStyle:{color:"#8C8C8C"},height:140,pageIconColor:"#6495ed",pageIconInactiveColor:"#999",pageIconSize:12,pageButtonItemGap:0},series:[{name:"硬盘分析",type:"pie",radius:[0,80],center:["70%","50%"],label:{show:!1},data:this.disks}]};this.storeChart=this.$echarts.init(document.getElementById("disk-chart")),this.storeChart.setOption(t)},initMemoryChart:function(){var t=this,e=e={title:{text:"CPU/内存占用率",textStyle:{align:"center",color:"#8c8c8c",fontSize:12},top:"6",left:"0"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"10",right:"10",bottom:"15%",top:"18%",containLabel:!0},legend:{data:["CPU","内存"],right:10,top:12,textStyle:{color:"#8c8c8c"},itemWidth:12,itemHeight:10},xAxis:{type:"category",data:this.system.time,axisLine:{lineStyle:{color:"#8c8c8c"}},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei"}}},yAxis:{type:"value",max:"100",axisLine:{show:!1,lineStyle:{color:"#8c8c8c"}},splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.3)"}}},dataZoom:[{show:!0,height:18,xAxisIndex:[0],left:"0",right:"6",bottom:"14",start:0,end:100,textStyle:{color:"#8c8c8c"},borderColor:"#8c8c8c"},{type:"inside",show:!0,height:15,start:2,end:35}],series:[{name:"CPU",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fccb05"},{offset:1,color:"#f5804d"}]),barBorderRadius:12}},data:this.system.cpu},{name:"内存",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#248ff7"},{offset:1,color:"#6851f1"}]),barBorderRadius:11}},data:this.system.memory}]};if(!this.memoryChart){var i=document.getElementById("memory-chart");this.memoryChart=this.$echarts.init(i),this.memoryChartObserve=new ResizeObserver((function(e){t.memoryChart.resize()})),this.memoryChartObserve.observe(i),this.$once("hook:beforeDestroy",(function(){this.memoryChartObserve.unobserve(i)}))}this.memoryChart.setOption(e)},bytesToSize:function(t){if(0===t)return"0 B";var e=Math.floor(Math.log(t)/Math.log(1e3));return(t/Math.pow(1e3,e)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}}},o=(i("9c1e"),i("2877")),r=Object(o.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-system"},[e("div",{staticClass:"store-group shadow"},[e("div",{staticClass:"title"},[this._v("磁盘已用占比")]),e("div",{attrs:{id:"disk-chart"}})]),e("div",{staticClass:"memory-group shadow"},[e("div",{attrs:{id:"memory-chart"}})])])}],!1,null,"50e32ab0",null);e.default=r.exports}}]);