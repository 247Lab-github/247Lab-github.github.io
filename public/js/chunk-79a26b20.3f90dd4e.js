(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79a26b20"],{"00b4":function(e,i,t){"use strict";t("ac1f");var n=t("23e7"),o=t("da84"),a=t("c65b"),s=t("e330"),r=t("1626"),h=t("861d"),c=function(){var e=!1,i=/[ac]/;return i.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===i.test("abc")&&e}(),l=o.Error,d=s(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var i=this.exec;if(!r(i))return d(this,e);var t=a(i,this,e);if(null!==t&&!h(t))throw new l("RegExp exec method returned something other than an Object or null");return!!t}})},"093a":function(e,i,t){},"0b42":function(e,i,t){var n=t("da84"),o=t("e8b5"),a=t("68ee"),s=t("861d"),r=t("b622"),h=r("species"),c=n.Array;e.exports=function(e){var i;return o(e)&&(i=e.constructor,a(i)&&(i===c||o(i.prototype))?i=void 0:s(i)&&(i=i[h],null===i&&(i=void 0))),void 0===i?c:i}},"159b":function(e,i,t){var n=t("da84"),o=t("fdbc"),a=t("785a"),s=t("17c2"),r=t("9112"),h=function(e){if(e&&e.forEach!==s)try{r(e,"forEach",s)}catch(i){e.forEach=s}};for(var c in o)o[c]&&h(n[c]&&n[c].prototype);h(a)},"17c2":function(e,i,t){"use strict";var n=t("b727").forEach,o=t("a640"),a=o("forEach");e.exports=a?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"25f0":function(e,i,t){"use strict";var n=t("e330"),o=t("5e77").PROPER,a=t("6eeb"),s=t("825a"),r=t("3a9b"),h=t("577e"),c=t("d039"),l=t("ad6d"),d="toString",f=RegExp.prototype,g=f[d],u=n(l),p=c((function(){return"/a/b"!=g.call({source:"a",flags:"b"})})),b=o&&g.name!=d;(p||b)&&a(RegExp.prototype,d,(function(){var e=s(this),i=h(e.source),t=e.flags,n=h(void 0===t&&r(f,e)&&!("flags"in f)?u(e):t);return"/"+i+"/"+n}),{unsafe:!0})},"2c3e":function(e,i,t){var n=t("da84"),o=t("83ab"),a=t("9f7f").MISSED_STICKY,s=t("c6b6"),r=t("9bf2").f,h=t("69f3").get,c=RegExp.prototype,l=n.TypeError;o&&a&&r(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===s(this))return!!h(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},"44e7":function(e,i,t){var n=t("861d"),o=t("c6b6"),a=t("b622"),s=a("match");e.exports=function(e){var i;return n(e)&&(void 0!==(i=e[s])?!!i:"RegExp"==o(e))}},"4d63":function(e,i,t){var n=t("83ab"),o=t("da84"),a=t("e330"),s=t("94ca"),r=t("7156"),h=t("9112"),c=t("9bf2").f,l=t("241c").f,d=t("3a9b"),f=t("44e7"),g=t("577e"),u=t("ad6d"),p=t("9f7f"),b=t("6eeb"),m=t("d039"),v=t("1a2d"),y=t("69f3").enforce,w=t("2626"),S=t("b622"),x=t("fce3"),P=t("107c"),F=S("match"),O=o.RegExp,T=O.prototype,L=o.SyntaxError,k=a(u),E=a(T.exec),A=a("".charAt),Z=a("".replace),_=a("".indexOf),j=a("".slice),H=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,C=/a/g,J=/a/g,N=new O(C)!==C,U=p.MISSED_STICKY,z=p.UNSUPPORTED_Y,W=n&&(!N||U||x||P||m((function(){return J[F]=!1,O(C)!=C||O(J)==J||"/a/i"!=O(C,"i")}))),M=function(e){for(var i,t=e.length,n=0,o="",a=!1;n<=t;n++)i=A(e,n),"\\"!==i?a||"."!==i?("["===i?a=!0:"]"===i&&(a=!1),o+=i):o+="[\\s\\S]":o+=i+A(e,++n);return o},R=function(e){for(var i,t=e.length,n=0,o="",a=[],s={},r=!1,h=!1,c=0,l="";n<=t;n++){if(i=A(e,n),"\\"===i)i+=A(e,++n);else if("]"===i)r=!1;else if(!r)switch(!0){case"["===i:r=!0;break;case"("===i:E(H,j(e,n+1))&&(n+=2,h=!0),o+=i,c++;continue;case">"===i&&h:if(""===l||v(s,l))throw new L("Invalid capture group name");s[l]=!0,a[a.length]=[l,c],h=!1,l="";continue}h?l+=i:o+=i}return[o,a]};if(s("RegExp",W)){for(var D=function(e,i){var t,n,o,a,s,c,l=d(T,this),u=f(e),p=void 0===i,b=[],m=e;if(!l&&u&&p&&e.constructor===D)return e;if((u||d(T,e))&&(e=e.source,p&&(i="flags"in m?m.flags:k(m))),e=void 0===e?"":g(e),i=void 0===i?"":g(i),m=e,x&&"dotAll"in C&&(n=!!i&&_(i,"s")>-1,n&&(i=Z(i,/s/g,""))),t=i,U&&"sticky"in C&&(o=!!i&&_(i,"y")>-1,o&&z&&(i=Z(i,/y/g,""))),P&&(a=R(e),e=a[0],b=a[1]),s=r(O(e,i),l?this:T,D),(n||o||b.length)&&(c=y(s),n&&(c.dotAll=!0,c.raw=D(M(e),t)),o&&(c.sticky=!0),b.length&&(c.groups=b)),e!==m)try{h(s,"source",""===m?"(?:)":m)}catch(v){}return s},B=function(e){e in D||c(D,e,{configurable:!0,get:function(){return O[e]},set:function(i){O[e]=i}})},Y=l(O),X=0;Y.length>X;)B(Y[X++]);T.constructor=D,D.prototype=T,b(o,"RegExp",D)}w("RegExp")},"53e4":function(e,i,t){"use strict";t.d(i,"a",(function(){return o})),t.d(i,"c",(function(){return a})),t.d(i,"b",(function(){return s}));t("ac1f"),t("5319"),t("00b4"),t("4d63"),t("c607"),t("2c3e"),t("25f0");function n(e,i){return i=i||"",0!=i.replace(/\s/g,"").length&&new RegExp(" "+i+" ").test(" "+e.className+" ")}function o(e,i){n(e,i)||(e.className=""==e.className?i:e.className+" "+i)}function a(e,i){if(n(e,i)){var t=" "+e.className.replace(/[\t\r\n]/g,"")+" ";while(t.indexOf(" "+i+" ")>=0)t=t.replace(" "+i+" "," ");e.className=t.replace(/^\s+|\s+$/g,"")}}function s(e){for(var i=[],t=e.parentNode.firstChild;t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i}},"65f0":function(e,i,t){var n=t("0b42");e.exports=function(e,i){return new(n(e))(0===i?0:i)}},7156:function(e,i,t){var n=t("1626"),o=t("861d"),a=t("d2bb");e.exports=function(e,i,t){var s,r;return a&&n(s=i.constructor)&&s!==t&&o(r=s.prototype)&&r!==t.prototype&&a(e,r),e}},"785a":function(e,i,t){var n=t("cc12"),o=n("span").classList,a=o&&o.constructor&&o.constructor.prototype;e.exports=a===Object.prototype?void 0:a},"78a5":function(e,i,t){"use strict";t("093a")},"9bd0":function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"about-box"},[e._m(0),e._l(e.content_listdata,(function(i){return t("div",{staticClass:"news-content-list"},[t("div",{staticClass:"content-title"},[t("div",{staticClass:"title-content-shrink"},[e._v(e._s(i.title))])]),t("div",{staticClass:"content-author"},[e._v(e._s(i.author))]),t("div",{staticClass:"content-subject"},[e._v(e._s(i.subject))]),t("div",{staticClass:"content-box"},e._l(i.news_content,(function(i){return t("p",[e._v(e._s(i))])})),0)])}))],2)},o=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"title-box"},[t("span",[e._v("News")])])}],a=(t("d3b7"),t("159b"),t("53e4")),s={data:function(){return{list_dom_element:{title_click_dom:[],content_show_dom:[]},content_listdata:[{title:"This is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer Title",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"his is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer Title",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"his is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer Title",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]},{title:"This is a Longer Title...",author:"Author Example",subject:"Exhibition",news_content:["As the first project of Nine-Tiered Pagoda, Unity is Strength is an awakening voice-over, heralding the value and openness of the collaboration among 9 groups of artists, architects and designers. The exhibition is based on the works of Polit-Sheer-Form Office, with architect Wang Zigeng creating the space and graphic designer Liu Zhizhi in charge of posters and other visual designs. Polit-Sheer-Form Office, or PSFO for short, is an art collective founded by artists Hong Hao, Xiao Yu, Song Dong, Liu Jianhua, and Leng Lin in 2005. Facing the world and focusing on the construction of the cultural experience, PSFO transforms political, cultural, economic and daily life into sheer form, blurring boundaries in between. By making thoughts, discussions, footprints, pleasures and ideas into forms, the Polit Sheer Form has thus been developed.PSFO was chosen because of their concept and attributes. As one of the longest standing art groups in China, PSFO embodies the value of combination and symbiosis through the increasingly integrated individuality and collectivity. PSFO not only represents a new model of organization and creation, but also a form and concept of Unity is Strength.PSFO is mainly thinking over collectivism, which also prevails in architectural and graphic designs. The brand-new exhibition space designed by Wang Zigeng shares the same core as the portrait of Mr. Zheng created by PSFO. The exhibition hall resembles the tube-shape apartment consisting of washroom, canteen, projection room, barbershop and bathhouse. The five collectivist spatial forms are mixing in the corridor, where converge the abstract space, artifacts and memories of life, dreamily blurring the fine line between reality and distant history. Audience have to pass through the blue space featuring the sense of while yet ‘never seen before’ to reach the new context of the exhibition.Just like the footsteps and history experienced by PSFO and many others, collectivism has formulated a several-folded space in factories, farms and places of interest, in brochures, posters, colors, fonts and minimalist designs, as well as in different terms, categories and disciplines."]}]}},mounted:function(){this.get_news_listdata()},created:function(){},methods:{get_news_listdata:function(){var e=this,i=document.getElementsByClassName("content-box"),t=document.getElementsByClassName("content-title");this.content_listdata.forEach((function(n,o){n.clickdom=t[o],n.contentdom=i[o],n.contentdom_height=i[o].offsetHeight,n.contentdom.style.height=0,n.title_child_div=t[o].children[0],n.clickdom.addEventListener("click",(function(){var i=e.content_listdata[o].contentdom,t=e.content_listdata[o].contentdom_height;0===i.offsetHeight?i.style.height=t+"px":i.style.height=0,0===i.offsetHeight?this.style.height="auto":this.style.height="83px",0===i.offsetHeight?Object(a["c"])(this.children[0],"title-content-shrink"):Object(a["a"])(this.children[0],"title-content-shrink")}))}))}}},r=s,h=(t("78a5"),t("2877")),c=Object(h["a"])(r,n,o,!1,null,"fe2fa51c",null);i["default"]=c.exports},a640:function(e,i,t){"use strict";var n=t("d039");e.exports=function(e,i){var t=[][e];return!!t&&n((function(){t.call(null,i||function(){throw 1},1)}))}},b727:function(e,i,t){var n=t("0366"),o=t("e330"),a=t("44ad"),s=t("7b0b"),r=t("07fa"),h=t("65f0"),c=o([].push),l=function(e){var i=1==e,t=2==e,o=3==e,l=4==e,d=6==e,f=7==e,g=5==e||d;return function(u,p,b,m){for(var v,y,w=s(u),S=a(w),x=n(p,b),P=r(S),F=0,O=m||h,T=i?O(u,P):t||f?O(u,0):void 0;P>F;F++)if((g||F in S)&&(v=S[F],y=x(v,F,w),e))if(i)T[F]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return F;case 2:c(T,v)}else switch(e){case 4:return!1;case 7:c(T,v)}return d?-1:o||l?l:T}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c607:function(e,i,t){var n=t("da84"),o=t("83ab"),a=t("fce3"),s=t("c6b6"),r=t("9bf2").f,h=t("69f3").get,c=RegExp.prototype,l=n.TypeError;o&&a&&r(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===s(this))return!!h(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},e8b5:function(e,i,t){var n=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fdbc:function(e,i){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);