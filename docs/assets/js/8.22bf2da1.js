(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{259:function(e,a,s){},287:function(e,a,s){"use strict";s(259)},304:function(e,a,s){"use strict";s.r(a);s(44);var n={computed:{icon(){let e=null;switch(this.name){case"file":e="file-earmark-code";break;case"bad":e="hand-thumbs-down";break;case"blender":e="box";break;case"definition":e="star";break;case"example":e="hand-index";break;case"good":e="hand-thumbs-up";break;case"info":e="info-circle";break;case"know":e="question-circle";break;case"linkedin-learning":e="linkedin";break;case"person":e="people";break;case"quote":e="chat-quote";break;case"raspbian":e="raspberry-pi";break;case"remark":e="exclamation-circle";break;case"see":e="book";break;case"sources":e="globe2";break;case"task":e="clipboard-check";break;case"tip":e="gift";break;case"tree":e="folder2-open";break;case"video":e="film";break;case"warning":e="exclamation-triangle";break;default:e=this.name}return e},styles(){const e=[];switch(this.name){case"adobe":case"android":case"app-store":case"apple":case"blender":case"github":case"linux":case"microsoft":case"mouse":case"npm":case"person":case"quote":case"raspbian":case"steam":case"ubuntu":case"windows":case"yarn":e.push("-icon"),e.push("-primary");break;case"bad":case"warning":e.push("-danger"),e.push("-icon");break;case"definition":case"example":case"info":case"linkedin-learning":case"video":case"youtube":e.push("-icon"),e.push("-info");break;case"file":e.push("-file");break;case"good":case"see":case"tip":e.push("-icon"),e.push("-tip");break;case"know":case"sources":e.push("-icon"),e.push("-secondary");break;case"remark":case"task":e.push("-icon"),e.push("-warning");break;case"tree":e.push("-icon"),e.push("-primary"),e.push("file-tree")}return e}},props:{info:{type:String},name:{type:String,validator(e){const a=["adobe","android","app-store","apple","bad","blender","definition","example","file","github","good","info","know","linkedin-learning","linux","microsoft","mouse","npm","person","quote","raspbian","remark","see","sources","steam","task","tip","tree","ubuntu","video","warning","windows","yarn","youtube"].includes(e);return a||console.error(e),a}}}},i=(s(287),s(13)),c=Object(i.a)(n,(function(){var e=this._self._c;return e("div",{class:["custom-block",this.styles]},[e("p",{staticClass:"custom-block-title"},[e("Icon",{staticClass:"custom-block-icon",attrs:{name:this.icon}}),this._v(" "),e("strong",{domProps:{innerHTML:this._s(this.info)}})],1),this._v(" "),this._t("default")],2)}),[],!1,null,"8fa0b07e",null);a.default=c.exports}}]);