(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dbd4143"],{"00a5":function(e,t,i){},"0b42":function(e,t,i){var n=i("da84"),l=i("e8b5"),s=i("68ee"),o=i("861d"),a=i("b622"),c=a("species"),r=n.Array;e.exports=function(e){var t;return l(e)&&(t=e.constructor,s(t)&&(t===r||l(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?r:t}},"0cc4":function(e,t,i){"use strict";i("e0e1")},"159b":function(e,t,i){var n=i("da84"),l=i("fdbc"),s=i("785a"),o=i("17c2"),a=i("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var r in l)l[r]&&c(n[r]&&n[r].prototype);c(s)},"17c2":function(e,t,i){"use strict";var n=i("b727").forEach,l=i("a640"),s=l("forEach");e.exports=s?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},4773:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"pageExhibitionsOne-box"},[i("p",[e._v("Exhibitions")]),i("search-query-one-select",{attrs:{prop_color:e.$global_colors.PAM_blue,prop_item_data:e.search_value_item}}),i("div",{attrs:{id:"exhibitions_box"}},[i("div",{staticClass:"item-backgroundimg-box",attrs:{id:"item-backgroundimg-box"}}),e._l(e.table_item_data,(function(t,n){return i("div",{key:n,staticClass:"Exhibitions-item Exhibitions-item-copy"},[i("div",{staticClass:"Exhibitions-item-content"},[i("div",{staticClass:"item-content-title",on:{click:function(i){return e.to_exhibitons_article_page(t)}}},[e._v(" "+e._s(t.content_title)+" ")]),i("div",{staticClass:"item-content-time"},[e._v(e._s(t.time))]),t.warning_content?i("div",{staticClass:"item-content-warning",class:[t.warning_content.level]},[i("div",{staticClass:"warning-box"}),i("span",{class:[t.warning_content.level]},[e._v(e._s(t.warning_content.content))])]):e._e(),t.year?i("div",{staticClass:"year-box"},[i("span",[e._v(e._s(t.year.time_title))])]):e._e()])])}))],2)],1),i("footer-page")],1)},l=[],s=(i("d3b7"),i("159b"),i("b680"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.table_childitem_data?i("div",e._l(e.table_childitem_data,(function(t,n){return i("div",{key:n,staticClass:"Exhibitions-childitem",style:t.currentstyle,on:{click:e.test}},[i("div",{staticClass:"Exhibitions-childitem-content"},[i("div",{staticClass:"childitem-content-title"},[e._v(" "+e._s(t.content_title)+" ")]),i("div",{staticClass:"childitem-content-time"},[e._v(e._s(t.time))]),t.warning_content?i("div",{staticClass:"childitem-content-warning",class:[t.warning_content.level]},[i("div",{staticClass:"warning-box"}),i("span",{class:[t.warning_content.level]},[e._v(e._s(t.warning_content.content))])]):e._e(),t.year?i("div",{staticClass:"year-box"},[i("span",[e._v(e._s(t.year.time_title))])]):e._e()])])})),0):e._e()}),o=[],a={name:"ExhibitonsContentchilditem",props:{prop_table_childitem_data:Array},data:function(){return{table_childitem_data:this.prop_table_childitem_data}},mounted:function(){},updated:function(){},watch:{prop_table_childitem_data:{handler:function(e,t){},deep:!0}},methods:{test:function(){}}},c=a,r=(i("0cc4"),i("2877")),_=Object(r["a"])(c,s,o,!1,null,"4bef14ca",null),d=_.exports,u=i("5046"),m=i("50cc"),h={components:{ExhibitonsContentItem:d,"search-query-one-select":m["a"],"footer-page":u["a"]},name:"",data:function(){return{blogTitle:"sdfsdfsdf",search_value_item:{selected_all:"All",selected_type:"Type",selected_year:"Year",all:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"}],type:[{text:"One",value:"A"},{text:"Two",value:"B"},{text:"Three",value:"C"},{text:"Three",value:"C"},{text:"Three",value:"C"}],year:[{text:"2020",value:"2020"},{text:"2021",value:"2021"},{text:"2022",value:"2022"}]},hidden_element_index:[],table_box_dom:null,table_info:{row:null,column:null,height:null,item_height:null,item_width:null},table_item_data:[{index:1,content_title:"Beyond Social Text",time:"2021.03.28 - 2021.06.20",warning_content:{level:"PAM-warning-color-1",content:"On Now"},news_link:{route_name:"pageExhibitionsNews",title:"Beyond Social Text",exhibitions_article_id:"exhibitionsContent2021-1"},background_image:{show:!1,url:"exhibitions_img_1.png"},element:null,rows:1},{index:2,content_title:"桃花源·迹 前言",news_link:{route_name:"pageExhibitionsNews",title:"桃花源·迹 前言",exhibitions_article_id:"exhibitionsContent2022-1"},time:"2022-01",warning_content:{level:"PAM-warning-color-2",content:"Ends Soon"},element:null,current_row:1,isRouter:"pageExhibitionsNews"},{index:3,content_title:"Perspectival Playground",time:"8/7/2021",element:null,current_row:1,news_link:{route_name:"pageExhibitionsNews",title:"Perspectival Playground",exhibitions_article_id:"exhibitionsContent2021-2"}},{index:4,content_title:"Shenzhen Contemporary Artists Series No.1Xue Feng: Far Far",time:"2021.8.8",element:null,current_row:1,news_link:{route_name:"pageExhibitionsNews",title:"Perspectival Playground",exhibitions_article_id:"exhibitionsContent2021-3"}},{index:5,content_title:"故乡系列之二｜王子耕《1994年》",time:"2021.10.24",element:null,current_row:1,news_link:{route_name:"pageExhibitionsNews",title:"Perspectival Playground",exhibitions_article_id:"exhibitionsContent2021-4"}},{index:6,content_title:"AURA",time:"2021.3.28-6.20",news_link:{route_name:"pageExhibitionsNews",title:"Perspectival Playground",exhibitions_article_id:"exhibitionsContent2021-5"},element:null,current_row:1,background_image:{show:!1,url:"exhibitions_img_2.png"}},{index:7,content_title:"Muses, Yu Gong and Compasses ",time:"2021.3.28-6.20",news_link:{route_name:"pageExhibitionsNews",title:"Perspectival Playground",exhibitions_article_id:"exhibitionsContent2020-1"},element:null,current_row:1,background_image:{show:!1,url:"exhibitions_img_2.png"}},{index:8,content_title:"Portraiting Pingshan",time:"2020.8.22-10.9",news_link:{route_name:"pageExhibitionsNews",title:"Perspectival Playground",exhibitions_article_id:"exhibitionsContent2020-2"},element:null,current_row:1,background_image:{show:!1,url:"exhibitions_img_2.png"}}]}},mounted:function(){},methods:{to_exhibitons_article_page:function(e){e.news_link&&this.$router.push({path:"/pc/pageExhibitionsNews",query:{exhibitions_article_id:e.news_link.exhibitions_article_id}})},item_backgroundimg_show:function(){var e=this.table_item_data;for(var t in e);},extend_more_box:function(){var e=this,t=this.table_item_data,i=this.table_box_dom;t.forEach((function(t,n){if(t.extend_content_box){t.shrink_spread_mark=!1,t.element.addEventListener("click",(function(){e.shrink_spread_morebox(t)}));var l=t.element.getElementsByClassName("Exhibitions-item-content")[0];for(var s in l.classList.add("Exhibitions-item-content-morebox"),t.extend_content_box){var o=document.getElementsByClassName("Exhibitions-item")[0].cloneNode(!0),a=t.extend_content_box[s];a.element_dom=o,a.element_dom.getElementsByClassName("item-content-title")[0].innerText=a.content_title,a.element_dom.getElementsByClassName("Exhibitions-item-content")[0].style.border="2px dotted #043fb5",a.element_dom.classList.add("Exhibitions-item-content-children"),a.element_dom.getElementsByClassName("item-content-time")[0].innerText=a.time,a.element_dom.getElementsByClassName("item-content-warning")[0].remove(),a.element_dom.style.top=t.element.offsetTop+"px",a.element_dom.style.left=t.element.offsetLeft+"px",a.element_dom.style.zIndex=-1,a.currentstyle={top:t.element.offsetTop+"px",left:t.element.offsetLeft+"px",zIndex:100},i.appendChild(a.element_dom)}}}))},shrink_spread_morebox:function(e){var t=this;e.shrink_spread_mark=!e.shrink_spread_mark;var i=e;if(e.shrink_spread_mark){var n=i.index,l=(i.element.offsetLeft,0),s=0,o=null;i.extend_content_box.forEach((function(e,i){if(l=parseInt((n+i)/3),o=(n+(i+1))%3,l%2===0)switch(o){case 0:s=2;break;case 1:s=0;break;case 2:s=1;break}else switch(o){case 0:s=0;break;case 1:s=2;break;case 2:s=1;break}e.element_dom.style.left=t.table_info.item_width*s+"px",e.element_dom.style.top=t.table_info.item_height*l+"px",e.element_dom.style.zIndex=99,e.currentstyle={top:t.table_info.item_height*l+"px",left:t.table_info.item_width*s+"px",zIndex:100}}))}else i.extend_content_box.forEach((function(t,i){t.element_dom.style.zIndex=-1,t.element_dom.style.top=e.element.offsetTop+"px",t.element_dom.style.left=e.element.offsetLeft+"px"}))},waterFall:function(){var e=0,t=0,i=document.getElementById("exhibitions_box");this.table_box_dom=document.getElementById("exhibitions_box");for(var n=document.getElementsByClassName("Exhibitions-item"),l=0;l<n.length;l++)this.table_item_data[l].element=n[l],this.table_item_data[l].current_row=parseInt(l/3)+1;var s=i.offsetWidth,o=n[0].offsetWidth||446,a=(s/(o+t)).toFixed(1),c=0;c=n.length%a!==0?parseInt(n.length/a)+1:n.length/a;var r=(o-405)/2;i.style.height=(553+e)*c+"px",this.table_info={row:c,column:3,height:(553+e)*c,item_height:553+e,item_width:o};for(var _=[],d=0;d<n.length;d++)if(n[d].style.width=(s/a).toFixed(1)+"px",n[d].style.borderLeft=r+1+"px solid white",n[d].style.borderRight=r+1+"px solid white",d<a)n[d].style.top=0,n[d].style.left=(o+t)*d+"px",_.push(n[d].offsetHeight);else{for(var u=_[0],m=0,h=0;h<_.length;h++)u>_[h]&&(u=_[h],m=h);n[d].style.top=_[m]+e+"px",n[d].style.left=n[m].offsetLeft+"px",_[m]=_[m]+n[d].offsetHeight+e}this.extend_more_box()}}},p=h,v=(i("b18a"),Object(r["a"])(p,n,l,!1,null,"76d46119",null));t["default"]=v.exports},5046:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"big-logo-box"},[i("svg",{attrs:{width:"1389",height:"1367",viewBox:"0 0 1389 1367",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{filter:"url(#filter0_b_1416_933)"}},[i("path",{attrs:{d:"M495.818 228.187V0H0V1367H417.904H793.31H1389V228.187H495.818ZM220.993 456.374V342.687H297.491V228.999H198.327V797.437H99.1637V114.5H179.203H198.327H297.491H396.655V228.187V341.875V455.562H297.491H220.993V456.374ZM694.146 910.312H636.773H594.274H395.946V890.011V796.625V682.937V569.25H495.11H571.608V682.937H495.11V796.625H594.274V455.562H495.11V341.875H594.274H689.896H694.146V910.312ZM893.89 683.749H794.726V342.687H893.89V683.749ZM1289.84 347.559V455.562V682.937H1190.67V455.562H1091.51V569.25H992.345V455.562H915.848V341.875H1289.84V347.559Z",fill:e.computed_theme_color.topside_fontColor}})]),i("defs",[i("filter",{attrs:{id:"filter0_b_1416_933",x:"-25",y:"-25",width:"1439",height:"1417",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[i("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),i("feGaussianBlur",{attrs:{in:"BackgroundImage",stdDeviation:"12.5"}}),i("feComposite",{attrs:{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_1416_933"}}),i("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_1416_933",result:"shape"}})],1)])]),e._m(0)])},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"museum-des-box-position"},[i("div",{staticClass:"museum-des-box"},[i("div",{staticClass:"des-box-item"},[i("p",[i("span",[e._v("Pingshan Art Museum")]),i("br"),e._v(" Huide Road, Pingshan District, Shenzhen, China "),i("br"),i("br"),i("span",[e._v("Park Annexe")]),i("br"),e._v(" Pingshan Central Park, Shenzhen, China")])]),i("div",{staticClass:"des-box-item"},[i("p",[i("span",[e._v("Park Annexe")]),i("br"),e._v(" Pingshan Experimental School Stop"),i("br"),e._v(" 公交车：坪山实验学校站"),i("br"),e._v(" M478/ M393/M440/963/M497/915/M325"),i("br"),i("br"),i("span",[e._v("High-speed Rail")]),i("br"),e._v(" Pingshan Station 高铁：坪山站")])]),i("div",{staticClass:"des-box-item"},[i("p",[i("span",[e._v("Hours")]),i("br"),e._v(" Open from Tuesday to Sunday"),i("br"),e._v(" 逢周二至周日开放"),i("br"),e._v(" 9:00 - 17:00")])])]),i("div",{staticClass:"museum-des-box"},[i("div",{staticClass:"des-box-item"},[i("div",{staticClass:"email"},[e._v("press@pingshanartmuseum.org")])]),i("div",{staticClass:"des-box-item"}),i("div",{staticClass:"des-box-item"},[i("p",{staticClass:"zh-en-mark"},[i("span",[e._v("中文")])])])])])}],s={name:"",data:function(){return{}},computed:{computed_theme_color:function(){return this.$store.state.current_theme_color}}},o=s,a=(i("6411"),i("2877")),c=Object(a["a"])(o,n,l,!1,null,"7a0935e0",null);t["a"]=c.exports},"50cc":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"select-box-out",attrs:{id:"search-top-input-box"}},[i("div",{class:["select-box-content",e.top_fixed?"top-fixed":""]},[i("div",{staticClass:"select-item-box"},[i("div",{staticClass:"select-item"},[i("div",{staticClass:"select-item-icon",on:{click:e.get_selected_click_all}},[i("div",{staticClass:"item-arrow-head"},[i("div",{staticClass:"arrow-head-left",style:{"background-color":e.color}}),i("div",{staticClass:"arrow-head-right",style:{"background-color":e.color}})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.select_value.selected_all,expression:"select_value.selected_all"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{all:"text",name:"",id:"1"},domProps:{value:e.select_value.selected_all},on:{input:function(t){t.target.composing||e.$set(e.select_value,"selected_all",t.target.value)}}}),i("ul",{style:{height:e.selected_click_all?47*e.select_value.all.length+"px":0}},e._l(e.select_value.all,(function(t,n){return i("li",{style:{color:e.color,"border-bottom":"2px solid"+e.color},on:{click:function(i){return e.get_selected_click_all_value(t,n)}}},[e._v(e._s(t.text))])})),0)])]),i("div",{staticClass:"select-item-box"},[i("div",{staticClass:"select-item"},[i("div",{staticClass:"select-item-icon",on:{click:e.get_selected_click_type}},[i("div",{staticClass:"item-arrow-head"},[i("div",{staticClass:"arrow-head-left",style:{"background-color":e.color}}),i("div",{staticClass:"arrow-head-right",style:{"background-color":e.color}})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.select_value.selected_type,expression:"select_value.selected_type"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{type:"text",name:"",id:"2"},domProps:{value:e.select_value.selected_type},on:{input:function(t){t.target.composing||e.$set(e.select_value,"selected_type",t.target.value)}}}),i("ul",{style:{height:e.selected_click_type?47*e.select_value.type.length+"px":0}},e._l(e.select_value.type,(function(t,n){return i("li",{style:{color:e.color,"border-bottom":"2px solid"+e.color},on:{click:function(i){return e.get_selected_click_type_value(t,n)}}},[e._v(e._s(t.text))])})),0)])]),i("div",{staticClass:"select-item-box"},[i("div",{staticClass:"select-item"},[i("div",{staticClass:"select-item-icon",on:{click:e.get_selected_click_year}},[i("div",{staticClass:"item-arrow-head"},[i("div",{staticClass:"arrow-head-left",style:{"background-color":e.color}}),i("div",{staticClass:"arrow-head-right",style:{"background-color":e.color}})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.select_value.selected_year,expression:"select_value.selected_year"}],style:{color:e.color,border:"2px solid"+e.color},attrs:{year:"text",name:"",id:"3"},domProps:{value:e.select_value.selected_year},on:{input:function(t){t.target.composing||e.$set(e.select_value,"selected_year",t.target.value)}}}),i("ul",{style:{height:e.selected_click_year?47*e.select_value.year.length+"px":0}},e._l(e.select_value.year,(function(t,n){return i("li",{style:{color:e.color,"border-bottom":"2px solid"+e.color},on:{click:function(i){return e.get_selected_click_year_value(t,n)}}},[e._v(e._s(t.text))])})),0)])])])])},l=[],s={name:"searchQuery",props:{prop_color:String,prop_item_data:Object},mounted:function(){window.addEventListener("scroll",this.div_top_fixed,!0)},data:function(){return{top_fixed:!1,color:this.prop_color,select_base_style:{color:this.prop_color,border:"1px solid"+this.prop_color},selected_click_all:!1,selected_click_type:!1,selected_click_year:!1,select_value:this.prop_item_data}},beforeDestroy:function(){window.removeEventListener("scroll",this.div_top_fixed,!0)},methods:{div_top_fixed:function(){var e=document.getElementById("search-top-input-box").getBoundingClientRect().top||document.getElementById("search-top-input-box").getBoundingClientRect().top;this.top_fixed=e<0},get_selected_click_all:function(){this.selected_click_all=!this.selected_click_all},get_selected_click_type:function(){this.selected_click_type=!this.selected_click_type},get_selected_click_year:function(){this.selected_click_year=!this.selected_click_year},get_selected_click_all_value:function(e,t){this.select_value.selected_all=e.text,this.selected_click_all=!this.selected_click_all},get_selected_click_year_value:function(e,t){this.select_value.selected_year=e.text,this.selected_click_year=!this.selected_click_year},get_selected_click_type_value:function(e,t){this.select_value.selected_type=e.text,this.selected_click_type=!this.selected_click_type}}},o=s,a=(i("8048"),i("2877")),c=Object(a["a"])(o,n,l,!1,null,"06009724",null);t["a"]=c.exports},"51fa":function(e,t,i){},5286:function(e,t,i){},6411:function(e,t,i){"use strict";i("5286")},"65f0":function(e,t,i){var n=i("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"785a":function(e,t,i){var n=i("cc12"),l=n("span").classList,s=l&&l.constructor&&l.constructor.prototype;e.exports=s===Object.prototype?void 0:s},8048:function(e,t,i){"use strict";i("00a5")},a640:function(e,t,i){"use strict";var n=i("d039");e.exports=function(e,t){var i=[][e];return!!i&&n((function(){i.call(null,t||function(){throw 1},1)}))}},b18a:function(e,t,i){"use strict";i("51fa")},b727:function(e,t,i){var n=i("0366"),l=i("e330"),s=i("44ad"),o=i("7b0b"),a=i("07fa"),c=i("65f0"),r=l([].push),_=function(e){var t=1==e,i=2==e,l=3==e,_=4==e,d=6==e,u=7==e,m=5==e||d;return function(h,p,v,f){for(var x,b,g=o(h),y=s(g),w=n(p,v),k=a(y),C=0,E=f||c,H=t?E(h,k):i||u?E(h,0):void 0;k>C;C++)if((m||C in y)&&(x=y[C],b=w(x,C,g),e))if(t)H[C]=b;else if(b)switch(e){case 3:return!0;case 5:return x;case 6:return C;case 2:r(H,x)}else switch(e){case 4:return!1;case 7:r(H,x)}return d?-1:l||_?_:H}};e.exports={forEach:_(0),map:_(1),filter:_(2),some:_(3),every:_(4),find:_(5),findIndex:_(6),filterReject:_(7)}},e0e1:function(e,t,i){},e8b5:function(e,t,i){var n=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);