!function(){"use strict";var e,t={57868:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.game_consts=void 0,t.game_consts={default_scale:2,max_velocity:400,bg_1_parallax:32,bg_2_parallax:16,bg_3_parallax:8,max_pixel_width:1280}},29820:function(e,t,n){n(11307);const r=n(58687),a=n(14588),i=n(6906),o=n(57868),s=new r.Application;window.onload=async()=>{await s.init({backgroundColor:13882323,width:window.innerWidth,height:window.innerHeight}),await Promise.all([r.Assets.load("assets/player.png"),r.Assets.load("assets/bg_0.png"),r.Assets.load("assets/bg_1.png"),r.Assets.load("assets/bg_2.png"),r.Assets.load("assets/bg_3.png")]),document.body.appendChild(s.canvas),function(){const e=()=>{s.renderer.resize(window.innerWidth,window.innerHeight)};e(),window.addEventListener("resize",e)}(),new l};class l{state;constructor(){this.state={player:{x:0,y:0,thruster_on:!1,brake_on:!1,turning_left:!1,turning_right:!1,velocity:0,direction:0},game_width:(0,i.get_game_width)(),game_height:(0,i.get_game_height)(),game_scale:(0,i.get_game_scale)()},document.addEventListener("keydown",(e=>{switch(e.key){case"ArrowUp":case"w":this.state.player.thruster_on=!0,e.preventDefault();break;case"ArrowDown":case"s":this.state.player.brake_on=!0,e.preventDefault();break;case"ArrowLeft":case"a":this.state.player.turning_left=!0,e.preventDefault();break;case"ArrowRight":case"d":this.state.player.turning_right=!0,e.preventDefault()}})),document.addEventListener("keyup",(e=>{switch(e.key){case"ArrowUp":case"w":this.state.player.thruster_on=!1,e.preventDefault();break;case"ArrowDown":case"s":this.state.player.brake_on=!1,e.preventDefault();break;case"ArrowLeft":case"a":this.state.player.turning_left=!1,e.preventDefault();break;case"ArrowRight":case"d":this.state.player.turning_right=!1,e.preventDefault()}})),window.addEventListener("resize",(()=>{this.state.game_scale=(0,i.get_game_scale)(),this.state.game_width=(0,i.get_game_width)(),this.state.game_height=(0,i.get_game_height)()})),this.run()}update_physics(){const e=this.state.player;e.brake_on&&e.velocity>0?e.velocity--:e.thruster_on&&e.velocity<o.game_consts.max_velocity&&e.velocity++,e.turning_right&&!e.turning_left?e.direction-=.05:e.turning_left&&!e.turning_right&&(e.direction+=.05),e.x+=Math.cos(e.direction)*e.velocity*.3,e.y+=Math.sin(-e.direction)*e.velocity*.3}update(){this.update_physics()}async run(){const e=(0,a.SpaceViewRenderer)(s.renderer,s.stage,this.state);for(;;)this.update(),e.render(this.state),await new Promise((e=>setTimeout(e,6)))}}},14588:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.SpaceViewRenderer=void 0;const r=n(57994);t.SpaceViewRenderer=(e,t,n)=>{const a=(0,r.SpaceView)(e,n);t.addChild(a.container);return{render:e=>{a.update(e)},destroy:()=>{a.container.destroy({children:!0})}}}},29161:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundBlur=void 0;const r=n(58687);t.BackgroundBlur=(e,t,n)=>{const a=new r.Sprite(e.generateTexture(t));a.mask=n,a.filters=new r.BlurFilter;return{container:a,update:()=>{a.texture.source.destroy(),a.texture=e.generateTexture(t)}}}},47695:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Scaler=void 0;const r=n(58687);t.Scaler=(e,t)=>{const n=new r.Container({scale:e,children:t});return{container:n,update:e=>{n.scale.set(e)}}}},57994:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.SpaceView=void 0;const r=n(58687),a=n(6906),i=n(47695),o=n(8605),s=n(63862);t.SpaceView=(e,t)=>{const n=(0,a.get_game_width)(),l=(0,a.get_game_height)(),c=(0,o.WorldLayer)(e,n,l,t),g=(0,s.Ui)(e,c.container),u=(0,i.Scaler)((0,a.get_game_scale)(),[c.container,g.container]);return{container:new r.Container({children:[u.container]}),update:()=>{const e=(0,a.get_game_scale)();c.update(t),g.update(),u.update(e)}}}},47956:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerPanel=void 0;const r=n(58687);t.PlayerPanel=(e,t,n,a,i,o)=>{const s=(new r.GraphicsPath).lineTo(n-i,0).arc(n-i,i,i,1.5*Math.PI,0*Math.PI,!1).lineTo(n,a).lineTo(i,a).arc(i,a-i,i,.5*Math.PI,1*Math.PI,!1).lineTo(0,0).closePath();return{render:new r.Graphics({x:e,y:t}).path(s).fill({color:o}),blurMask:new r.Graphics({x:e,y:t}).path(s).fill({color:"#fff"})}}},63862:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Ui=void 0;const r=n(58687),a=n(47956),i=n(29161);t.Ui=(e,t)=>{const n=(0,a.PlayerPanel)(30,30,300,60,24,"#111a2180"),o=(0,i.BackgroundBlur)(e,t,n.blurMask);return{container:new r.Container({children:[n.blurMask,o.container,n.render]}),update:()=>{o.update()}}}},44764:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Background=void 0;const r=n(58687),a=n(57868),i=n(6906);t.Background=(e,t,n,o)=>{const s=(0,i.parallax)(n,o,960,540,a.game_consts.bg_1_parallax),l=(0,i.parallax)(n,o,960,540,a.game_consts.bg_2_parallax),c=(0,i.parallax)(n,o,960,540,a.game_consts.bg_3_parallax),g={bg0:r.Texture.from("assets/bg_0.png"),bg1:r.Texture.from("assets/bg_1.png"),bg2:r.Texture.from("assets/bg_2.png"),bg3:r.Texture.from("assets/bg_3.png")},u={bg0:new r.TilingSprite({texture:g.bg0,width:e,height:t}),bg1:new r.TilingSprite({texture:g.bg1,width:e,height:t,tilePosition:{x:s.x,y:s.y}}),bg2:new r.TilingSprite({texture:g.bg2,width:e,height:t,tilePosition:{x:l.x,y:l.y}}),bg3:new r.TilingSprite({texture:g.bg3,width:e,height:t,tilePosition:{x:c.x,y:c.y}})};return{container:new r.Container({children:[u.bg0,u.bg1,u.bg2,u.bg3]}),update:(e,t,n,r)=>{const o=(0,i.parallax)(n,r,960,540,a.game_consts.bg_1_parallax),s=(0,i.parallax)(n,r,960,540,a.game_consts.bg_2_parallax),l=(0,i.parallax)(n,r,960,540,a.game_consts.bg_3_parallax);u.bg1.tilePosition.x=o.x,u.bg1.tilePosition.y=o.y,u.bg2.tilePosition.x=s.x,u.bg2.tilePosition.y=s.y,u.bg3.tilePosition.x=l.x,u.bg3.tilePosition.y=l.y,u.bg0.width=e,u.bg0.height=t,u.bg1.width=e,u.bg1.height=t,u.bg2.width=e,u.bg2.height=t,u.bg3.width=e,u.bg3.height=t}}}},27159:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;const r=n(58687),a=n(6906);t.Player=(e,t,n)=>{const i=r.Texture.from("assets/player.png"),o=new r.Sprite({texture:i,anchor:.5,x:e/2,y:t/2,rotation:-(n-1.5*Math.PI)});return{container:o,update:e=>{const t=(0,a.get_game_width)(),n=(0,a.get_game_height)();o.rotation=-(e-1.5*Math.PI),o.x=t/2,o.y=n/2}}}},8605:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.WorldLayer=void 0;const r=n(58687),a=n(44764),i=n(27159),o=n(6906);t.WorldLayer=(e,t,n,s)=>{const l=(0,a.Background)(t,n,s.player.x,s.player.y),c=(0,i.Player)(t,n,s.player.direction);return{container:new r.Container({children:[l.container,c.container]}),update:e=>{const t=(0,o.get_game_width)(),n=(0,o.get_game_height)();l.update(t,n,e.player.x,e.player.y),c.update(e.player.direction)}}}},6906:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.parallax=t.get_game_scale=t.get_game_height=t.get_game_width=void 0;const r=n(57868);function a(){return window.innerWidth>r.game_consts.max_pixel_width?Math.ceil(window.innerWidth/r.game_consts.max_pixel_width):1}t.get_game_width=function(){return Math.floor(window.innerWidth/a())},t.get_game_height=function(){return Math.floor(window.innerHeight/a())},t.get_game_scale=a,t.parallax=function(e,t,n,r,a){return{x:e/a%n,y:t/a%r}}},11307:function(e,t,n){n.r(t)}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,a,i){if(!n){var o=1/0;for(g=0;g<e.length;g++){n=e[g][0],a=e[g][1],i=e[g][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(g--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var g=e.length;g>0&&e[g-1][2]>i;g--)e[g]=e[g-1];e[g]=[n,a,i]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,o=n[0],s=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var g=l(r)}for(t&&t(n);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(g)},n=self.webpackChunkpixi_typescript_boilerplate=self.webpackChunkpixi_typescript_boilerplate||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[687],(function(){return r(29820)}));a=r.O(a)}();