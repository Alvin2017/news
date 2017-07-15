$( function() {
    //登录界面
    $(document).ready(function () {
        var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false;
        trigger.click(function () {
            hamburger_cross();
        });

        function hamburger_cross() {
            if (isClosed == true) {
                overlay.hide();
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
            } else {
                overlay.show();
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
            }
        }

        $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
        });
    });

    //新闻网tabs
    $( "#tabs" ).tabs({
        event: "mouseover"
    });

    //资讯站里面3d
    $('#dg-container').gallery({
        autoplay:true
    });

    //滑动页面动态效果
    window.scrollReveal = new scrollReveal({reset:true});

    //滚动楼层
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if(top>2000){
            $(".bktop>a[href='#firstPage']").css("display","block");
        }
        var items = $(".item");

        var currentID="";
        items.each(function(){
            var itemtops=$(this).offset().top;

             if(top>itemtops-100){
                currentID=$(this).attr("id");
            }
        });
        currentLink=$("[href=#"+currentID+"]");
        if(currentID&&currentLink.attr("class")!="current"){
            currentLink.parent().siblings().children().removeClass("current");
            currentLink.attr("class","current");
        }
    });

    //每个楼层点击动画
    $("[href='#secondPage']").click(function(){
        $("html,body").animate({scrollTop:$("#secondPage").offset().top},800)
    });
    $("[href='#thirdPage']").click(function(){
        $("html,body").animate({scrollTop:$("#thirdPage").offset().top},800)
    });
    $("[href='#forthPage']").click(function(){
        $("html,body").animate({scrollTop:$("#forthPage").offset().top},800)
    });
    $("[href='#fivePage']").click(function(){
        $("html,body").animate({scrollTop:$("#fivePage").offset().top},800)
    });
    $("[href='#sixPage']").click(function(){
        $("html,body").animate({scrollTop:$("#sixPage").offset().top},800)
    });
    $("[href='#foot']").click(function(){
        $("html,body").animate({scrollTop:$("#foot").offset().top},800)
    });
    $("[href='#baidumap']").click(function(){
        $("html,body").animate({scrollTop:$("#baidumap").offset().top},800)
    });
    $("[href='#firstPage']").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0},800)
    });



    //地图api
    function initMap(){
        createMap();//������ͼ
        setMapEvent();//���õ�ͼ�¼�
        addMapControl();//���ͼ��ӿؼ�
        addPolyline();//���ͼ�������
    }

    //������ͼ������
    function createMap(){
        var map = new BMap.Map("dituContent");//�ڰٶȵ�ͼ�����д���һ����ͼ
        var point = new BMap.Point(118.793333,32.048577);//����һ�����ĵ�����
        map.centerAndZoom(point,14);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
        window.map = map;//��map�����洢��ȫ��
    }

    //��ͼ�¼����ú�����
    function setMapEvent(){
        map.enableDragging();//���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
        map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
        map.enableDoubleClickZoom();//�������˫���Ŵ�Ĭ������(�ɲ�д)
        map.enableKeyboard();//���ü����������Ҽ��ƶ���ͼ
    }

    //��ͼ�ؼ���Ӻ�����
    function addMapControl(){
        //���ͼ��������ſؼ�
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //���ͼ���������ͼ�ؼ�
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //���ͼ����ӱ����߿ؼ�
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }

//��ע������
    var plPoints = [{style:"solid",weight:4,color:"#f00",opacity:0.6,points:["118.788806|32.045516","118.791105|32.043802","118.796711|32.050168"]}
    ];
    //���ͼ������ߺ���
    function addPolyline(){
        for(var i=0;i<plPoints.length;i++){
            var json = plPoints[i];
            var points = [];
            for(var j=0;j<json.points.length;j++){
                var p1 = json.points[j].split("|")[0];
                var p2 = json.points[j].split("|")[1];
                points.push(new BMap.Point(p1,p2));
            }
            var line = new BMap.Polyline(points,{strokeStyle:json.style,strokeWeight:json.weight,strokeColor:json.color,strokeOpacity:json.opacity});
            map.addOverlay(line);
        }
    }

    initMap();//�����ͳ�ʼ����ͼ
} );
//点击登录异步请求
$("#sub").click(function(e){
    e.preventDefault();
    console.log(2);
    $.ajax({
        type:"POST",
        url:"data/login_do.php",
        data:{uname:$("#uname").val(),pwd:$("#pwd").val()},
        success:function(data){
            if(data=="err"){
                alert("登录失败");
            }else{
                alert("登录成功!3s后将自动跳转到首页");
                setTimeout(function(){
                    location.href = 'index.html';
                },3000);
            }
        },
    });
});