(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{231:function(t,a,s){t.exports=s.p+"assets/img/1570007752850.134f1487.png"},270:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"網頁創世紀，一篇說完lektor網頁建置！"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#網頁創世紀，一篇說完lektor網頁建置！","aria-hidden":"true"}},[t._v("#")]),t._v(" 網頁創世紀，一篇說完Lektor網頁建置！")]),t._v(" "),n("p",[t._v("今天這一篇又要來把重中之重的網頁架構再來說一遍了!!")]),t._v(" "),n("p",[t._v("在經過這幾天的了解(折磨?)之後，發現Lektor真的提供很大的開放性，修改上也十分簡單。只要掌握好整個網頁的建置邏輯、流程，基本上就差不多了，所以今天要再來介紹一次建立網頁的方式。")]),t._v(" "),n("h2",{attrs:{id:"models"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#models","aria-hidden":"true"}},[t._v("#")]),t._v(" Models")]),t._v(" "),n("p",[t._v("在開始之前呢，要先說明一下今天的情境。我想要建立一個可以列出我的所有專案的網站。")]),t._v(" "),n("p",[t._v("首先要建立一個專案預覽頁面，這一頁將告訴"),n("code",[t._v("Lektor")]),t._v("我要放在專案預覽頁面下的子頁面為"),n("code",[t._v("project")]),t._v("，並且這一頁不能被其他頁面使用("),n("code",[t._v("hidden")]),t._v(")，也不能被刪除("),n("code",[t._v("protected")]),t._v(")。因為有設定"),n("code",[t._v("hidden = yes")]),t._v("，所以等一下要先建立content才能使用。在確認這樣的邏輯之後，我們先建立專案預覽頁面的model：")]),t._v(" "),n("p",[n("strong",[t._v("projects.ini")])]),t._v(" "),n("p",[t._v("專案預覽頁面只會有一個，在Label的地方使用固定的值即可，等一下可以跟子頁面的model比較看看。")]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[model]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Projects")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Projects")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("hidden")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" yes")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" yes")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[children]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("model")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" project")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("order_by")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" -date, name")]),t._v("\n")])])]),n("p",[t._v("設定完專案預覽頁面後，再來就是子頁面啦~子頁面著重於你想要在頁面中顯示那些資訊，通常設定會有："),n("code",[t._v("標題")]),t._v("、"),n("code",[t._v("內文")]),t._v("、"),n("code",[t._v("時間")]),t._v("、"),n("code",[t._v("類型")]),t._v("、"),n("code",[t._v("專案網站")]),t._v("等資訊，並提供附件上傳。所以接下來要建立子頁面的model，並在model中設定要顯示資訊的項目屬性：")]),t._v(" "),n("p",[n("strong",[t._v("project.ini")])]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[model]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("name")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Project")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" {{ this.name }}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("hidden")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" yes")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[attachments]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("order_by")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" _id")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[fields.name]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("size")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" large")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[fields.date]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Date")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" date")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("size")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1/4")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[fields.type]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Project type")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" string")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("size")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1/4")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[fields.website]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Website")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" url")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("size")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1/2")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[fields.description]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Description")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" markdown")]),t._v("\n")])])]),n("h2",{attrs:{id:"templates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#templates","aria-hidden":"true"}},[t._v("#")]),t._v(" Templates")]),t._v(" "),n("p",[t._v("建立完model後，再來就是設定版面啦！")]),t._v(" "),n("p",[n("strong",[t._v("projects.html")])]),t._v(" "),n("p",[t._v("這邊除了將專案排列顯示出來，若附件有照片的話則會顯示照片，並透過"),n("code",[t._v("imagemagick")]),t._v("調整圖片大小。再來設定子頁面的版面：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v('{% extends "layout.html" %}\n{% block title %}{{ this.name }} ({{ this.date.year }}){% endblock %}\n{% block body %}\n  '),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ this.name }}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Date\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ this.date|dateformat }}\n    {% if this.website %}\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Website\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ this.website }}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ this.website.host }}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endif %}\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Project type\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ this.type }}\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Description"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ this.description }}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {% set images = this.attachments.images.all() %}\n  {% if images %}\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Images"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% for image in images %}\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ image.thumbnail(640)|url }}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {% if image.exif %}\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("meta")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          {{ image.exif.camera }}\n          {% if image.exif.created_at %}\n            ({{ image.exif.created_at|dateformat }})\n          {% endif %}\n        {% endif %}\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endfor %}\n  {% endif %}\n{% endblock %}\n")])])]),n("h1",{attrs:{id:"成果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#成果","aria-hidden":"true"}},[t._v("#")]),t._v(" 成果")]),t._v(" "),n("p",[t._v("於是我照著上面的步驟成功建立了網頁，同時將我們團員的文章各自建立一個專案，順便宣傳一下我們團隊的系列文，請大家多多訂閱喔！")]),t._v(" "),n("p",[n("img",{attrs:{src:s(231),alt:"1570007752850"}})]),t._v(" "),n("p",[t._v("版面是不是很醜，沒關係，今天這篇只是教你如何建立這樣的網頁，之後也不會教你怎麼排版喔(?)")]),t._v(" "),n("p",[t._v("想切出美美的版面，可以到下面進入"),n("code",[t._v("CSScoke")]),t._v("的文章學習，金魚都懂了你應該可以學會。如果還是不懂的話，那你可以聯絡"),n("code",[t._v("CSScoke")]),t._v("報名暴力班！")]),t._v(" "),n("h2",{attrs:{id:"小小bug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小小bug","aria-hidden":"true"}},[t._v("#")]),t._v(" 小小bug")]),t._v(" "),n("p",[t._v("這個bug在之前就有遇到，就是"),n("code",[t._v("image.thumbnail(640)|url")]),t._v("使得網頁中無法正常顯示圖片，當初是刪掉後面的"),n("code",[t._v(".thumbnail(640)")]),t._v("就可以正常顯示。"),n("code",[t._v(".thumbnail(640)")]),t._v("是讓"),n("code",[t._v("imagemagick")]),t._v("去掌控圖片的大小，透過這樣的方式可以快速調整圖片的大小，統一圖片規格。")]),t._v(" "),n("p",[t._v("查詢之後發現這應該是windows的bug，在github上有"),n("a",{attrs:{href:"https://github.com/lektor/lektor/issues/362",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),n("OutboundLink")],1),t._v("，windows安裝"),n("code",[t._v("imagemagick")]),t._v(" 後依舊無法讓lektor使用。有人回覆修復方式，但我去下載程式後安裝也沒有看到他所說的選項，所以還是沒有試成功。")]),t._v(" "),n("h1",{attrs:{id:"團隊系列文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#團隊系列文","aria-hidden":"true"}},[t._v("#")]),t._v(" 團隊系列文")]),t._v(" "),n("p",[t._v("CSScoke - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112550/ironman/2623",target:"_blank",rel:"noopener noreferrer"}},[t._v("金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎"),n("OutboundLink")],1),t._v("\nKing Tzeng - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20103130/ironman/2125",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT沒那麼難！新手用JavaScript入門做自己的玩具～"),n("OutboundLink")],1),t._v("\nHina Hina - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120000/ironman/2256",target:"_blank",rel:"noopener noreferrer"}},[t._v("陣列大亂鬥"),n("OutboundLink")],1),t._v("\n阿斬 - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120536/ironman/2571",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 程式交易 30 天新手入門"),n("OutboundLink")],1),t._v("\nClarence - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20117701/ironman/2634",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE bot 好好玩 30 天玩轉 LINE API"),n("OutboundLink")],1),t._v("\n塔塔默 - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112552/ironman/2735",target:"_blank",rel:"noopener noreferrer"}},[t._v("用Python開發的網頁不能放到Github上？Lektor說可以！！"),n("OutboundLink")],1),t._v("\nVita Ora - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112656/ironman/2782",target:"_blank",rel:"noopener noreferrer"}},[t._v("好 Js 不學嗎 !? JavaScript 入門中的入門。"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);