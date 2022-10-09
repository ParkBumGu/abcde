// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
   {
      "name" : "닫힌 문",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "type" : "7",
      "link" : "https://search.shopping.naver.com/search/all?query=%EB%B0%A9%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%AC%B8",
    }, 
    {
      "name" : "열린 문",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "type" : "7",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%97%B4%EB%A6%B0%20%EB%AC%B8&frm=NVSHATC&prevQuery=%EB%B0%A9%EB%AC%B8",
    }, 
    {
      "name" : "오르내리 창문1",
      "image" : "models/thumbnails/thumbnail_window.png",
      "model" : "models/js/whitewindow.js",
      "type" : "3",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD&frm=NVSHATC&prevQuery=%EC%97%B4%EB%A6%B0%20%EB%AC%B8",
    }, 
    {
      "name" : "철제 의자",
      "image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "models/js/gus-churchchair-whiteoak.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%B2%A0%EC%A0%9C%20%EC%9D%98%EC%9E%90&frm=NVSHATC&prevQuery=%EC%98%A4%EB%A5%B4%EB%82%B4%EB%A6%AC%20%EC%B0%BD",
    }, 
    {
      "name" : "1인용 빨간 소파",
      "image" : "models/thumbnails/thumbnail_tn-orange.png",
      "model" : "models/js/ik-ekero-orange_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9+%EB%B9%A8%EA%B0%84+%EC%87%BC%ED%8C%8C&bt=-1&frm=NVSCPRO",
    },
    {
      "name" : "1인용 파란 소파",
      "image" : "models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "models/js/ik-ekero-blue_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=1%EC%9D%B8%EC%9A%A9%20%ED%8C%8C%EB%9E%80%20%EC%87%BC%ED%8C%8C&frm=NVSHATC&prevQuery=%EC%B2%A0%EC%A0%9C%20%EC%9D%98%EC%9E%90",
    },
    {
      "name" : "나무 5칸 서랍형 옷장",
      "image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
      "model" : "models/js/DWR_MATERA_DRESSER2.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EB%82%98%EB%AC%B4%20%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5&frm=NVSHATC&prevQuery=%EB%82%98%EB%AC%B4%20%EC%98%B7%EC%9E%A5",
    }, 
    {
      "name" : "흰색 6칸 서랍형 옷장",
      "image" : "models/thumbnails/thumbnail_img25o.jpg",
      "model" : "models/js/we-narrow6white_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%ED%9D%B0%EC%83%89%20%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5&frm=NVSHATC&prevQuery=%EB%82%98%EB%AC%B4%20%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5",
    },  
    {
      "name" : "나무 침대 옆 협탁",
      "image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "models/js/bd-shalebedside-smoke_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%B9%A8%EB%8C%80%EC%98%86%20%ED%98%91%ED%83%81&frm=NVSHATC&prevQuery=%EC%84%9C%EB%9E%8D%ED%98%95%20%EC%98%B7%EC%9E%A5",
    }, 
    {
      "name" : "흰색 침대 옆 협탁",
      "image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "models/js/cb-archnight-white_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%ED%9D%B0%EC%83%89%20%EC%B9%A8%EB%8C%80%20%EC%98%86%20%ED%98%91%ED%83%81&frm=NVSHATC&prevQuery=%ED%9D%B0%EC%83%89%20%EC%B9%A8%EB%8C%80%EC%98%86%20%ED%98%91%ED%83%81",
    }, 
    // gltf 오류로 제거
    // {
    //   "name" : "Wardrobe - White",
    //   "image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
    //   "model" : "models/js/ik-kivine_baked.js",
    //   "type" : "1"
    // }, 
    {
      "name" : "침대",
      "image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "models/js/ik_nordli_full.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%B9%A8%EB%8C%80&frm=NVSHATC&prevQuery=%ED%9D%B0%EC%83%89%20%EC%B9%A8%EB%8C%80%20%EC%98%86%20%ED%98%91%ED%83%81",
    }, 
    {
      "name" : "얇은 원목 책장",
      "image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "models/js/cb-kendallbookcasewalnut_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%96%87%EC%9D%80%20%EC%9B%90%EB%AA%A9%20%EC%B1%85%EC%9E%A5&frm=NVSHATC&prevQuery=%EC%96%87%EC%9D%80%20%EC%B1%85%EC%9E%A5",
    }, 
        {
      "name" : "텔레비전",
      "image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "models/js/cb-clapboard_baked.js",
      "type" : "8",
      "link" : "https://search.shopping.naver.com/search/all?query=%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84&frm=NVSHATC&prevQuery=%EC%B9%A8%EB%8C%80", //9->8
    },
    // gltf 오류로 제거 
    //     {
    //   "name" : "Media Console - Black",
    //   "image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
    //   "model" : "models/js/cb-moore_baked.js",
    //   "type" : "9"
    // }, 
    // gltf 오류로 제거
    //    {
    //   "name" : "Sectional - Olive",
    //   "image" : "models/thumbnails/thumbnail_img21o.jpg",
    //   "model" : "models/js/we-crosby2piece-greenbaked.js",
    //   "type" : "1"
    // }, 
    {
      "name" : "회색 3인용 소파",
      "image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model" : "models/js/cb-rochelle-gray_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%ED%9A%8C%EC%83%89%203%EC%9D%B8%EC%9A%A9%20%EC%86%8C%ED%8C%8C&cat_id=&frm=NVSHATC",
    }, 
        {
      "name" : "원목 수납장",
      "image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model" : "models/js/cb-tecs_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?where=all&frm=NVSCTAB&query=%EC%9B%90%EB%AA%A9+%EC%88%98%EB%82%A9%EC%9E%A5",
    }, 
        {
      "name" : "거실용 스텐드",
      "image" : "models/thumbnails/thumbnail_ore-white.png",
      "model" : "models/js/ore-3legged-white_baked.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%85%90%EB%93%9C&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%88%98%EB%82%A9%EC%9E%A5",
    },
    {
      "name" : "원목 커피테이블",
      "image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "models/js/ik-stockholmcoffee-brown.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EA%B1%B0%EC%8B%A4%EC%9A%A9%20%EC%8A%A4%ED%83%A0%EB%93%9C",
    }, 
    {
      "name" : "사이드 테이블",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "models/js/GUSossingtonendtable.js",
      "type" : "1",
      "link" : "https://search.shopping.naver.com/search/all?query=%EC%82%AC%EC%9D%B4%EB%93%9C%20%ED%85%8C%EC%9D%B4%EB%B8%94&frm=NVSHATC&prevQuery=%EC%9B%90%EB%AA%A9%20%EC%BB%A4%ED%94%BC%20%ED%85%8C%EC%9D%B4%EB%B8%94",
    },
    // gltf 오류로 제거
    // {
    //   "name" : "Dining Table",
    //   "image" : "models/thumbnails/thumbnail_scholar-dining-table.jpg",
    //   "model" : "models/js/cb-scholartable_baked.js",
    //   "type" : "1"
    // }, 
    // {
    //   "name" : "Dining table",
    //   "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
    //   "model" : "models/js/BlakeAvenuejoshuatreecheftable.js",
    //   "type" : "1"
    // },
    {
      "name" : "거실 러그",
      "image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "models/js/cb-blue-block-60x96.js",
      "type" : "8",
      "link" : "https://search.shopping.naver.com/search/all?color=8192&frm=NVSHPRC&origQuery=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8&pagingIndex=1&pagingSize=40&productSet=total&query=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8&sort=rel&timestamp=&viewType=list",
    },
    {
      "name" : "뉴욕 포스터 액자",
      "image" : "models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "models/js/nyc-poster2.js",
      "type" : "9",
      "link" : "https://search.shopping.naver.com/search/all?query=%EB%89%B4%EC%9A%95%20%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%95%A1%EC%9E%90&frm=NVSHATC&prevQuery=%EA%B1%B0%EC%8B%A4%20%EB%9F%AC%EA%B7%B8",
    },
    // { // 오류 삭제
    //   "name" : "Simple Cabinet",
    //   "image" : "models/thumbnails/thumbnail_cabinet.png",
    //   "model" : "models/js/cabinet.json",
    //   "type" : "1"
    // },
    {
        "name" : "러버덕 인형",
        "image" : "models/thumbnails/thumbnail_duck.png",
        "model" : "models/js/Duck.gltf",
        "type" : "1",
        "format": "gltf",
        "link" : "https://search.shopping.naver.com/search/all?query=%EB%9F%AC%EB%B2%84%EB%8D%95%20%EC%9D%B8%ED%98%95&cat_id=&frm=NVSHATC",
      }
   /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    }, 
    */
  ]


  var modelTypesNum = ["1","2","3","7","8","9"];
  var modelTypesIds = ["floor-items", "wall-items", "in-wall-items", "in-wall-floor-items", "on-floor-items", "wall-floor-items"];
  var itemsDiv = $("#items-wrapper");
  for (var i = 0; i < items.length; i++) 
  {
	var item = items[i];
    itemsDiv = $("#"+modelTypesIds[modelTypesNum.indexOf(item.type)]+"-wrapper");
	var modelformat = (item.format) ?' model-format="'+item.format+'"' : "";
  var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' + ' model-name="' + item.name + '"' + ' model-link="' + item.link + '"'+ ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item"   data-dismiss="modal" 	> ' + item.name + '</a></div>';
  //var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' + ' model-name="' + item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item"   data-dismiss="modal" 	> ' + item.name + '</a></div>';
    itemsDiv.append(html);
  }
});
