(this.webpackJsonpgibberishtv=this.webpackJsonpgibberishtv||[]).push([[0],{134:function(t,e,n){},135:function(t,e,n){},443:function(t,e,n){},445:function(t,e,n){"use strict";n.r(e);var s=n(6),r=n.n(s),i=n(17),c=n.n(i),u=(n(134),n.p,n(135),n(124)),o=n(125),a=n(50),b=n(130),h=n(129),l=(n(136),n(128)),d=n.n(l),j=(n(443),n(1)),p=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(u.a)(this,n),(s=e.call(this,t)).state={currentIndex:0},s.nextVideo=s.nextVideo.bind(Object(a.a)(s)),s}return Object(o.a)(n,[{key:"nextVideo",value:function(){var t=this;return this.setState((function(e){var n=e.currentIndex;return n>=t.props.urls.length-1?n=0:n+=1,{currentIndex:n}}))}},{key:"render",value:function(){var t=this.props.urls,e=this.state.currentIndex;return Object(j.jsxs)("div",{className:"VideoPlayer",children:[Object(j.jsx)(d.a,{className:"react-player",url:t[e],playing:!0,controls:!0,config:{youtube:{playerVars:{modestbranding:1,controls:1}}}}),Object(j.jsx)("button",{onClick:this.nextVideo,children:"next (random) gibberish \u2192"})]})}}]),n}(s.Component);var f=function(t){for(var e,n,s=t.length;0!==s;)n=Math.floor(Math.random()*s),e=t[s-=1],t[s]=t[n],t[n]=e;return t};var x=function(){var t=["https://youtu.be/gNf8Bsu0UYc","https://youtu.be/IlFK2xhj4Mc","https://youtu.be/ywSlCcEghMg","https://youtu.be/kfKEB07LunA","https://youtu.be/JrhQzuuuGHU","https://youtu.be/zH25swZo9iA","https://youtu.be/4RYnLl0IqMA"];return f(t),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App__Header",children:[Object(j.jsx)("h1",{children:"gibberish.tv"}),Object(j.jsx)("h2",{children:"unwind an exhausted mind"}),Object(j.jsx)("span",{className:"App__Header__tag2",children:"a me & my girlfriend production"})]}),Object(j.jsx)(p,{urls:t}),Object(j.jsxs)("footer",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"about gibberish.tv:"})}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"there is a lot of mindfulness content out there - and no denying its helpfulness."}),Object(j.jsx)("p",{children:"We found personally that best paired with mindfulness, is gibberish. content so random, so passionate, so interesting, so unuseful (yet surprisingly useful), that it can't help but bring you back into reality."})]})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,446)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),r(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),g()}},[[445,1,2]]]);
//# sourceMappingURL=main.e325d7bc.chunk.js.map