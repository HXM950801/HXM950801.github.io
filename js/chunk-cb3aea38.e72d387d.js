(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb3aea38"],{"07a5":function(e,t,s){},"836e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("van-nav-bar",{attrs:{title:"找回密码","left-arrow":""},on:{"click-left":e.onClickLeft}}),s("div",{staticClass:"sy_top"},[s("van-form",[s("van-field",{attrs:{name:"手机号",placeholder:"请输入手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("van-field",{attrs:{type:"text",name:"验证码",placeholder:"请输入验证码",rules:[{required:!0,message:"请填写验证码"}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),s("van-field",{attrs:{type:"password",name:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"","native-type":"submit"},on:{click:e.onLogin}},[e._v(" 确定 ")])],1)],1)],1),s("p",{directives:[{name:"show",rawName:"v-show",value:e.shaw,expression:"shaw"}],staticClass:"p-uu",on:{click:e.add}},[e._v("获取验证码")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.shaw,expression:"!shaw"}],staticClass:"count"},[e._v(e._s(e.count))])],1)},n=[],o={data:function(){return{text:"",username:"",password:"",shaw:!0,count:"",timer:null}},methods:{onClickLeft:function(){this.$router.go("-1")},onLogin:function(){var e=this;this.$axios.post("http://120.53.31.103:84/api/app/password",{mobile:this.username,password:this.password,sms_code:this.text}).then((function(t){console.log(t),e.$router.push({path:"/login"})}))},add:function(){var e=this;if(""==this.username)return alert("手机号必填");var t=/^[1]([3-9])[0-9]{9}$/;if(t.test(this.username)){var s=60;this.timer||(this.count=s,this.shaw=!1,this.timer=setInterval((function(){e.count>0&&e.count<=s?e.count--:(e.shaw=!0,clearInterval(e.timer),e.timer=null)}),1e3)),this.$axios.post("http://120.53.31.103:84/api/app/smsCode",{mobile:this.username,sms_type:"getPassword"}).then((function(e){console.log(e)}))}else Toast.loading({message:"手机号码格式不正确",position:"center"})}}},i=o,r=(s("ffa7"),s("2877")),l=Object(r["a"])(i,a,n,!1,null,"06a24164",null);t["default"]=l.exports},ffa7:function(e,t,s){"use strict";var a=s("07a5"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-cb3aea38.e72d387d.js.map