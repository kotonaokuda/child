$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $(".hamburger").on("click", function () {
      // headerにopenクラスがあるか判定する
      if ($("header").hasClass("open")) {
        // headerにopenクラスが存在しない場合、openクラスを削除する
        $("header").removeClass("open");
      } else {
        // headerにopenクラスが存在する場合、openクラスを加える
        $("header").addClass("open");
      }
    });
  
    // //下記も同様の意味となります。
    //   $(".toggle_btn").on("click", function () {
    //     $("header").toggleClass("open");
    //   });
  
  


     // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("header").toggleClass("open");

  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    // #navi aをクリックしたときに実行する

    $("header").toggleClass("open");
  });
  });
  





  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });

  
/*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // aタグのhref属性の値が#で始まる要素をクリックした時に実行する
    // 'a[href^=#]'：「aタグのhref属性で値が#で始まる要素だったとき」

    // リンクを取得 クリックされたaタグのhref属性の中身をhrefという変数に代入する （#menuなど）をhrefという変数に代入する
    let href = $(this).attr("href");
    // this: クリックされたaタグ $('a[href^=#]')
    // .attr()は、要素の属性の値を取得する

    // ジャンプ先のid名をセット href == "#" 】 変数hrefの値が"#"【 || 】 または【href == ""】  であれば（【？】）
    // 【 $('html'); 】 へのリンク（≒ページトップ）,そうでなければ（【:】）【 $(href); 】 変数hrefの中身が到着地点になる
    let target = $(href == "#" || href == "" ? "html" : href);

    // トップからジャンプ先の要素までの距離を取得 （id=menuなどがページの一番上から何pxかを取得）
    let position = target.offset().top;
    // offset()は表示位置を取得する offset().topでページの一番上から何pxかを取得

    // animateでスムーススクロールを行う ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒 swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
  // {scrollTop:position}で、ページトップからposition分だけスクロールするという指定をしているいる。
  // linear：常に同じ速さで動く swing：始めはゆっくり動いて、途中はちょっと速め、最後はゆっくりと動く
  // 出発地点をクリックすると、URLの末尾にIDタグ(例.https://coffee.com#menu)が付与されてしまう。
  // これを防ぐために、最後に１文return falseを追加します。




  

  $('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 10000,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数

    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
  });





  



