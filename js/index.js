var index=1
var widths=window.innerWidth
var img=document.getElementById("imgBnner")
var imgT=document.getElementById('imgBannerT')
var ulBanner=document.getElementById('ulBanner').getElementsByTagName('li')


    var ele = document.getElementById("divTwo");
    ele.style.top  = "0px";
    ele.style.left = "0px";
    movement = setInterval("moveObj("+widths*0.29+")",50);

        divNone=document.getElementById('divNone')
        function moveObj(l){

         var ele = document.getElementById("divTwo");
        var xPos = parseInt(ele.style.left);
        if(xPos>= l){
        clearInterval(movement);
        return true;
    }
    xPos+=30;
    ele.style.left = xPos+"px";
}
/////
var elei = document.getElementById("imgZZ");
elei.style.top  = "0px";
elei.style.left = -elei.width+'px';



imgZZ=document.getElementById('imgZZ')
function moveObjs(l){

    var ele = document.getElementById("imgZZ");
    ele.style.display='inline'
    var xPos = parseInt(ele.style.left);

    if(xPos>= l){
        clearInterval(movements);
        return true;
    }
    xPos+=30;
    if(xPos>l){
        xPos=0
    }
    ele.style.left = xPos+"px";

}

        function lis(t){
            var ul=document.getElementById('ulD').getElementsByTagName('li')
            for(var i= 0;i<ul.length;i++){
                ul[i].style.color="white"
                ul[i].style.borderTop="3px solid transparent"
            }
            t.style.color="orange"
            t.style.borderTop="3px solid #ff7639"
        }
    function liB(t){
        t.style.color="white"
        t.style.borderTop="3px solid transparent"
    }
    function imgBi(t,num){
        t.src="image/ico_0"+num+"hover.png"
    }
function imgX(t,num){
    t.src="image/ico_0"+num+".png"

}
function banner(){

    divNone.setAttribute('style','color:white; position: absolute;left:0;top:0')
    document.getElementById("divTwo").style.left='-520px'
    clearInterval(movement);
    if(index<3){
        index++
    }

    img.src="image/ic_banner"+index+".png"
    imgT.src="image/ic_words_banner"+index+".png"


    if(index==1){
        imgZZ.style.display='none'
        imgZZ.style.left=-imgZZ.width+'px'
        movement = setInterval("moveObj("+widths*0.29+")",50);
        clearInterval(movements)

    }
    if(index==2){
        imgZZ.style.display='inline'
        movement = setInterval("moveObj("+widths*0.07+")",50);
        movements = setInterval("moveObjs("+0+")",50);
    }
    if(index==3){
        imgZZ.style.display='none'
        clearInterval(movements)
        imgZZ.style.left=-imgZZ.width+'px'
        movement = setInterval("moveObj("+widths*0.29+")",50);
    }
    for(var s=0;s<ulBanner.length;s++){
        ulBanner[s].style.borderTop="3px solid white"
    }
    ulBanner[index-1].style.borderTop="3px solid #ff7639"
    if(index>=3){
        index=0
    }

}
var sse=setInterval(banner,4000)
function bian(n){

    clearInterval(movement);

    document.getElementById("divTwo").style.left='-520px'
    clearInterval(sse)
    img.src="image/ic_banner"+n+".png"
    imgT.src="image/ic_words_banner"+n+".png"
    console.log(n)
    if(n==1){
        imgZZ.style.left=-imgZZ.width+'px'
        imgZZ.style.display='none'
        movement = setInterval("moveObj("+widths*0.29+")",50);
        clearInterval(movements)

    }
    if(n==2){
        imgZZ.style.display='inline'
        movement = setInterval("moveObj("+widths*0.07+")",50);
        movements = setInterval("moveObjs("+0+")",50);
    }
    if(n==3){
        imgZZ.style.display='none'
        imgZZ.style.left=-imgZZ.width+'px'
        movement = setInterval("moveObj("+widths*0.29+")",50);
        clearInterval(movements)
    }

    for(var s=0;s<ulBanner.length;s++){
        ulBanner[s].style.borderTop="3px solid white"
    }
    ulBanner[n-1].style.borderTop="3px solid #ff7639"
}
function kai(n){
    index=n
    if(index==3){
        index=0
    }
    sse=setInterval(banner,4000)
}
console.log(window.innerWidth)
document.getElementById('middleOne').style.width= widths*0.58+'px'
document.getElementById('middleTwo').style.width= widths*0.58+'px'
document.getElementById('middleThree').style.width= widths*0.58+'px'

document.getElementById('mapOne').style.width= widths*0.58+'px'
function imgMove(){

    var share=document.getElementById('imgShare')

    if(parseInt(share.style.top)>165){
        share.style.top=parseInt(share.style.top)-10+"px"
        share.style.display='inline'
   }
    else{
       clearInterval(imgD)
    }

}
 var imgD
function imgMoves(){
    var imgTrans=document.getElementById('imgTrans')

    imgTrans.style.display='inline'

    if(parseInt(imgTrans.style.top)>250){
        imgTrans.style.top=parseInt(imgTrans.style.top)-5+"px"

    }
    else{
        clearInterval(imgT)
    }
}
var imgTs
var imgf
function imgMover(){
    var imgSec=document.getElementById('imgSec')
    imgSec.style.display='inline'
    if(parseInt(imgSec.style.top)>220){

        imgSec.style.top=parseInt(imgSec.style.top)-5+"px"

    }
    else{
        clearInterval(imgf)
    }

}
function allNone(){
    var imgRockt=document.getElementById('imgRockt')

    imgRockt.style.width='0px'
    imgRockt.style.height='0px'
    imgRockt.style.left='-50px'
    clearInterval(rockts)

    var imgPos=document.getElementById('imgPos')

    imgPos.style.display='none'
    imgPos.style.width="0px"
    imgPos.style.height='0px'
    imgPos.style.top='350px'
    clearInterval(imgD)
    clearInterval(imgTs)
    clearInterval(imgf)
    clearInterval(imgG)
    clearInterval(imgD)
    clearInterval(imgTs)
    clearInterval(imgf)
    var share=document.getElementById('imgShare')
    share.style.top='550px'
    share.style.display='none'
    var imgTrans=document.getElementById('imgTrans')
    imgTrans.style.display='none'
    imgTrans.style.top='550px'
    var imgSec=document.getElementById('imgSec')
    imgSec.style.display='none'
    imgSec.style.top='550px'
}
function imgBian(){
    var imgRockt=document.getElementById('imgRockt')

    imgRockt.style.width='0px'
    imgRockt.style.height='0px'
    imgRockt.style.left='-50px'
    clearInterval(rockts)

    var imgPos=document.getElementById('imgPos')
    clearInterval(imgG)
    imgPos.style.display='none'
    imgPos.style.width="0px"
    imgPos.style.height='0px'
    imgPos.style.top='350px'
    clearInterval(imgD)
    clearInterval(imgTs)
    clearInterval(imgf)
    imgD=setInterval(imgMove,40)
    imgTs=setInterval(imgMoves,20)
    imgf=setInterval(imgMover,20)

}
function imgBig(){
    var imgPos=document.getElementById('imgPos')
    imgPos.style.display='inline'
    if(parseInt(imgPos.style.width)<250){

        imgPos.style.width=parseInt(imgPos.style.width)+10+'px'
        imgPos.style.height=parseInt(imgPos.style.height)+10+'px'
        imgPos.style.top=parseInt(imgPos.style.top)-10+'px'
    }
    else{
        clearInterval(imgG)
    }

}
 var imgG
function imgBigs(){
    var imgRockt=document.getElementById('imgRockt')

        imgRockt.style.width='0px'
        imgRockt.style.height='0px'
        imgRockt.style.left='-50px'
    clearInterval(rockts)
    clearInterval(imgG)
    clearInterval(imgD)
    clearInterval(imgTs)
    clearInterval(imgf)
    var share=document.getElementById('imgShare')
    share.style.top='550px'
    share.style.display='none'
    var imgTrans=document.getElementById('imgTrans')
    imgTrans.style.display='none'
    imgTrans.style.top='550px'
    var imgSec=document.getElementById('imgSec')
    imgSec.style.display='none'
    imgSec.style.top='550px'
    setTimeout(
        function(){
            imgG=setInterval(imgBig,100)
        },1000
    )
}
function rockt(){
    var imgRockt=document.getElementById('imgRockt')
    if(parseInt(imgRockt.style.width)<500){
        imgRockt.style.width=parseInt(imgRockt.style.width)+11+'px'
        imgRockt.style.height=parseInt(imgRockt.style.height)+2+'px'
        imgRockt.style.left=parseInt(imgRockt.style.left)-2+"px"
    }
}
var rockts
function imgROCK(){
    var imgPos=document.getElementById('imgPos')
    imgPos.style.display='none'
    imgPos.style.width="10px"
    imgPos.style.height='10px'
    imgPos.style.top='350px'
    clearInterval(rockts)
    rockts=setInterval(rockt,50)

    clearInterval(imgD)
    clearInterval(imgTs)
    clearInterval(imgf)
    var share=document.getElementById('imgShare')
    share.style.top='550px'
    share.style.display='none'
    var imgTrans=document.getElementById('imgTrans')
    imgTrans.style.display='none'
    imgTrans.style.top='550px'
    var imgSec=document.getElementById('imgSec')
    imgSec.style.display='none'
    imgSec.style.top='550px'
}
function btnColor(){
    var btnA=document.getElementById('btnA')
    var btnB=document.getElementById('btnB')
    btnA.setAttribute('style','font-size:18px;cursor:pointer;width:100px;height:40px;border-radius: 40px;background:#ff7638;color:black;line-height: 25px;font-weight: 900')
    btnB.setAttribute('style','font-size:18px;cursor:pointer;background:transparent;width:100px;height:40px;border-radius: 40px;border:1px solid #ff7638;margin-left:10px;color: #ff7638;font-weight:900;line-height: 25px')
}
function btnColors(){
    var btnA=document.getElementById('btnA')
    var btnB=document.getElementById('btnB')
    btnB.setAttribute('style','font-size:18px;cursor:pointer;width:100px;height:40px;border-radius: 40px;background:#ff7638;color:black;margin-left:10px;line-height: 25px;font-weight: 900')
    btnA.setAttribute('style','font-size:18px;cursor:pointer;background:transparent;width:100px;height:40px;border-radius: 40px;border:1px solid #ff7638;color: #ff7638;font-weight:900;line-height: 25px')
}
var myChart = echarts.init(document.getElementById('main'));
var placeList = [
    {name:'海门', geoCoord:[121.15, 31.89]},
    {name:'鄂尔多斯', geoCoord:[109.781327, 39.608266]},
    {name:'招远', geoCoord:[120.38, 37.35]},
    {name:'舟山', geoCoord:[122.207216, 29.985295]},
    {name:'齐齐哈尔', geoCoord:[123.97, 47.33]},
    {name:'盐城', geoCoord:[120.13, 33.38]},
    {name:'赤峰', geoCoord:[118.87, 42.28]},
    {name:'青岛', geoCoord:[120.33, 36.07]},
    {name:'乳山', geoCoord:[121.52, 36.89]},
    {name:'金昌', geoCoord:[102.188043, 38.520089]},
    {name:'泉州', geoCoord:[118.58, 24.93]},
    {name:'莱西', geoCoord:[120.53, 36.86]},
    {name:'日照', geoCoord:[119.46, 35.42]},
    {name:'胶南', geoCoord:[119.97, 35.88]},
    {name:'南通', geoCoord:[121.05, 32.08]},
    {name:'拉萨', geoCoord:[91.11, 29.97]},
    {name:'云浮', geoCoord:[112.02, 22.93]},
    {name:'梅州', geoCoord:[116.1, 24.55]},
    {name:'文登', geoCoord:[122.05, 37.2]},
    {name:'上海', geoCoord:[121.48, 31.22]},
    {name:'攀枝花', geoCoord:[101.718637, 26.582347]},
    {name:'威海', geoCoord:[122.1, 37.5]},
    {name:'承德', geoCoord:[117.93, 40.97]},
    {name:'厦门', geoCoord:[118.1, 24.46]},
    {name:'汕尾', geoCoord:[115.375279, 22.786211]},
    {name:'潮州', geoCoord:[116.63, 23.68]},
    {name:'丹东', geoCoord:[124.37, 40.13]},
    {name:'太仓', geoCoord:[121.1, 31.45]},
    {name:'曲靖', geoCoord:[103.79, 25.51]},
    {name:'烟台', geoCoord:[121.39, 37.52]},
    {name:'福州', geoCoord:[119.3, 26.08]},
    {name:'瓦房店', geoCoord:[121.979603, 39.627114]},
    {name:'即墨', geoCoord:[120.45, 36.38]},
    {name:'抚顺', geoCoord:[123.97, 41.97]},
    {name:'玉溪', geoCoord:[102.52, 24.35]},
    {name:'张家口', geoCoord:[114.87, 40.82]},
    {name:'阳泉', geoCoord:[113.57, 37.85]},
    {name:'莱州', geoCoord:[119.942327, 37.177017]},
    {name:'湖州', geoCoord:[120.1, 30.86]},
    {name:'汕头', geoCoord:[116.69, 23.39]},
    {name:'昆山', geoCoord:[120.95, 31.39]},
    {name:'宁波', geoCoord:[121.56, 29.86]},
    {name:'湛江', geoCoord:[110.359377, 21.270708]},
    {name:'揭阳', geoCoord:[116.35, 23.55]},
    {name:'荣成', geoCoord:[122.41, 37.16]},
    {name:'连云港', geoCoord:[119.16, 34.59]},
    {name:'葫芦岛', geoCoord:[120.836932, 40.711052]},
    {name:'常熟', geoCoord:[120.74, 31.64]},
    {name:'东莞', geoCoord:[113.75, 23.04]},
    {name:'河源', geoCoord:[114.68, 23.73]},
    {name:'淮安', geoCoord:[119.15, 33.5]},
    {name:'泰州', geoCoord:[119.9, 32.49]},
    {name:'南宁', geoCoord:[108.33, 22.84]},
    {name:'营口', geoCoord:[122.18, 40.65]},
    {name:'惠州', geoCoord:[114.4, 23.09]},
    {name:'江阴', geoCoord:[120.26, 31.91]},
    {name:'蓬莱', geoCoord:[120.75, 37.8]},
    {name:'韶关', geoCoord:[113.62, 24.84]},
    {name:'嘉峪关', geoCoord:[98.289152, 39.77313]},
    {name:'广州', geoCoord:[113.23, 23.16]},
    {name:'延安', geoCoord:[109.47, 36.6]},
    {name:'太原', geoCoord:[112.53, 37.87]},
    {name:'清远', geoCoord:[113.01, 23.7]},
    {name:'中山', geoCoord:[113.38, 22.52]},
    {name:'昆明', geoCoord:[102.73, 25.04]},
    {name:'寿光', geoCoord:[118.73, 36.86]},
    {name:'盘锦', geoCoord:[122.070714, 41.119997]},
    {name:'长治', geoCoord:[113.08, 36.18]},
    {name:'深圳', geoCoord:[114.07, 22.62]},
    {name:'珠海', geoCoord:[113.52, 22.3]},
    {name:'宿迁', geoCoord:[118.3, 33.96]},
    {name:'咸阳', geoCoord:[108.72, 34.36]},
    {name:'铜川', geoCoord:[109.11, 35.09]},
    {name:'平度', geoCoord:[119.97, 36.77]},
    {name:'佛山', geoCoord:[113.11, 23.05]},
    {name:'海口', geoCoord:[110.35, 20.02]},
    {name:'江门', geoCoord:[113.06, 22.61]},
    {name:'章丘', geoCoord:[117.53, 36.72]},
    {name:'肇庆', geoCoord:[112.44, 23.05]},
    {name:'大连', geoCoord:[121.62, 38.92]},
    {name:'临汾', geoCoord:[111.5, 36.08]},
    {name:'吴江', geoCoord:[120.63, 31.16]},
    {name:'石嘴山', geoCoord:[106.39, 39.04]},
    {name:'沈阳', geoCoord:[123.38, 41.8]},
    {name:'苏州', geoCoord:[120.62, 31.32]},
    {name:'茂名', geoCoord:[110.88, 21.68]},
    {name:'嘉兴', geoCoord:[120.76, 30.77]},
    {name:'长春', geoCoord:[125.35, 43.88]},
    {name:'胶州', geoCoord:[120.03336, 36.264622]},
    {name:'银川', geoCoord:[106.27, 38.47]},
    {name:'张家港', geoCoord:[120.555821, 31.875428]},
    {name:'三门峡', geoCoord:[111.19, 34.76]},
    {name:'锦州', geoCoord:[121.15, 41.13]},
    {name:'南昌', geoCoord:[115.89, 28.68]},
    {name:'柳州', geoCoord:[109.4, 24.33]},
    {name:'三亚', geoCoord:[109.511909, 18.252847]},
    {name:'自贡', geoCoord:[104.778442, 29.33903]},
    {name:'吉林', geoCoord:[126.57, 43.87]},
    {name:'阳江', geoCoord:[111.95, 21.85]},
    {name:'泸州', geoCoord:[105.39, 28.91]},
    {name:'西宁', geoCoord:[101.74, 36.56]},
    {name:'宜宾', geoCoord:[104.56, 29.77]},
    {name:'呼和浩特', geoCoord:[111.65, 40.82]},
    {name:'成都', geoCoord:[104.06, 30.67]},
    {name:'大同', geoCoord:[113.3, 40.12]},
    {name:'镇江', geoCoord:[119.44, 32.2]},
    {name:'桂林', geoCoord:[110.28, 25.29]},
    {name:'张家界', geoCoord:[110.479191, 29.117096]},
    {name:'宜兴', geoCoord:[119.82, 31.36]},
    {name:'北海', geoCoord:[109.12, 21.49]},
    {name:'西安', geoCoord:[108.95, 34.27]},
    {name:'金坛', geoCoord:[119.56, 31.74]},
    {name:'东营', geoCoord:[118.49, 37.46]},
    {name:'牡丹江', geoCoord:[129.58, 44.6]},
    {name:'遵义', geoCoord:[106.9, 27.7]},
    {name:'绍兴', geoCoord:[120.58, 30.01]},
    {name:'扬州', geoCoord:[119.42, 32.39]},
    {name:'常州', geoCoord:[119.95, 31.79]},
    {name:'潍坊', geoCoord:[119.1, 36.62]},
    {name:'重庆', geoCoord:[106.54, 29.59]},
    {name:'台州', geoCoord:[121.420757, 28.656386]},
    {name:'南京', geoCoord:[118.78, 32.04]},
    {name:'滨州', geoCoord:[118.03, 37.36]},
    {name:'贵阳', geoCoord:[106.71, 26.57]},
    {name:'无锡', geoCoord:[120.29, 31.59]},
    {name:'本溪', geoCoord:[123.73, 41.3]},
    {name:'克拉玛依', geoCoord:[84.77, 45.59]},
    {name:'渭南', geoCoord:[109.5, 34.52]},
    {name:'马鞍山', geoCoord:[118.48, 31.56]},
    {name:'宝鸡', geoCoord:[107.15, 34.38]},
    {name:'焦作', geoCoord:[113.21, 35.24]},
    {name:'句容', geoCoord:[119.16, 31.95]},
    {name:'北京', geoCoord:[116.46, 39.92]},
    {name:'徐州', geoCoord:[117.2, 34.26]},
    {name:'衡水', geoCoord:[115.72, 37.72]},
    {name:'包头', geoCoord:[110, 40.58]},
    {name:'绵阳', geoCoord:[104.73, 31.48]},
    {name:'乌鲁木齐', geoCoord:[87.68, 43.77]},
    {name:'枣庄', geoCoord:[117.57, 34.86]},
    {name:'杭州', geoCoord:[120.19, 30.26]},
    {name:'淄博', geoCoord:[118.05, 36.78]},
    {name:'鞍山', geoCoord:[122.85, 41.12]},
    {name:'溧阳', geoCoord:[119.48, 31.43]},
    {name:'库尔勒', geoCoord:[86.06, 41.68]},
    {name:'安阳', geoCoord:[114.35, 36.1]},
    {name:'开封', geoCoord:[114.35, 34.79]},
    {name:'济南', geoCoord:[117, 36.65]},
    {name:'德阳', geoCoord:[104.37, 31.13]},
    {name:'温州', geoCoord:[120.65, 28.01]},
    {name:'九江', geoCoord:[115.97, 29.71]},
    {name:'邯郸', geoCoord:[114.47, 36.6]},
    {name:'临安', geoCoord:[119.72, 30.23]},
    {name:'兰州', geoCoord:[103.73, 36.03]},
    {name:'沧州', geoCoord:[116.83, 38.33]},
    {name:'临沂', geoCoord:[118.35, 35.05]},
    {name:'南充', geoCoord:[106.110698, 30.837793]},
    {name:'天津', geoCoord:[117.2, 39.13]},
    {name:'富阳', geoCoord:[119.95, 30.07]},
    {name:'泰安', geoCoord:[117.13, 36.18]},
    {name:'诸暨', geoCoord:[120.23, 29.71]},
    {name:'郑州', geoCoord:[113.65, 34.76]},
    {name:'哈尔滨', geoCoord:[126.63, 45.75]},
    {name:'聊城', geoCoord:[115.97, 36.45]},
    {name:'芜湖', geoCoord:[118.38, 31.33]},
    {name:'唐山', geoCoord:[118.02, 39.63]},
    {name:'平顶山', geoCoord:[113.29, 33.75]},
    {name:'邢台', geoCoord:[114.48, 37.05]},
    {name:'德州', geoCoord:[116.29, 37.45]},
    {name:'济宁', geoCoord:[116.59, 35.38]},
    {name:'荆州', geoCoord:[112.239741, 30.335165]},
    {name:'宜昌', geoCoord:[111.3, 30.7]},
    {name:'义乌', geoCoord:[120.06, 29.32]},
    {name:'丽水', geoCoord:[119.92, 28.45]},
    {name:'洛阳', geoCoord:[112.44, 34.7]},
    {name:'秦皇岛', geoCoord:[119.57, 39.95]},
    {name:'株洲', geoCoord:[113.16, 27.83]},
    {name:'石家庄', geoCoord:[114.48, 38.03]},
    {name:'莱芜', geoCoord:[117.67, 36.19]},
    {name:'常德', geoCoord:[111.69, 29.05]},
    {name:'保定', geoCoord:[115.48, 38.85]},
    {name:'湘潭', geoCoord:[112.91, 27.87]},
    {name:'金华', geoCoord:[119.64, 29.12]},
    {name:'岳阳', geoCoord:[113.09, 29.37]},
    {name:'长沙', geoCoord:[113, 28.21]},
    {name:'衢州', geoCoord:[118.88, 28.97]},
    {name:'廊坊', geoCoord:[116.7, 39.53]},
    {name:'菏泽', geoCoord:[115.480656, 35.23375]},
    {name:'合肥', geoCoord:[117.27, 31.86]},
    {name:'武汉', geoCoord:[114.31, 30.52]},
    {name:'大庆', geoCoord:[125.03, 46.58]}
]
option = {
    backgroundColor: 'transparent',

    tooltip: {
                    //show: false //不显示提示标签
        formatter: '{b}', //提示标签格式
        backgroundColor:"#ff7f50",//提示标签背景颜色
        textStyle:{color:"#fff"} //提示标签字体颜色
    },
    color: [
        'rgba(255, 118,56, 0.8)',
        'rgba(255, 118,56, 0.8)',
        'rgba(255, 118,56, 0.8)'
    ],

    legend: {
        show:false,
        borderColor:'rgba(255, 118,56, 0.8)',
        orient: 'vertical',
        x:'left',
        data:['强'],
        textStyle : {
            color: '#fff'
        }
    },
    //toolbox: {
    //    show : true,
    //    orient : 'vertical',
    //    x: 'right',
    //    y: 'center',
    //    feature : {
    //        mark : {show: true},
    //        dataView : {show: true, readOnly: false},
    //        restore : {show: true},
    //        saveAsImage : {show: true}
    //    }
    //},
    areaStyle:{
        color:'black',
        type:'default'
    },

    series : [
        {
            name: '弱',
            type: 'map',
            mapType: 'china',
            roam:false,
            label: {
                normal: {
                    show: true,//显示省份标签
                    textStyle:{color:"#c71585"}//省份标签字体颜色
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: true,
                    textStyle:{color:"#800080"}
                }
            },
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data : [],
            markPoint : {
                symbolSize: 2,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = 3000;
                    var geoCoord
                    while(len--) {
                        geoCoord = placeList[len % placeList.length].geoCoord;
                        data.push({
                            name : placeList[len % placeList.length].name + len,
                            value : 0,
                            geoCoord : [
                               0,
                               0
                            ]
                        })
                    }
                    return data;
                })()
            }
        },
        {
            name: '中',
            type: 'map',
            mapType: 'china',
            roam:false,
            data : [],
            markPoint : {
                symbolSize: 3,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = 1000;
                    var geoCoord
                    while(len--) {
                        geoCoord = placeList[len % placeList.length].geoCoord;
                        data.push({
                            name : placeList[len % placeList.length].name + len,
                            value : 0,
                            geoCoord : [
                                0,
                                0
                            ]
                        })
                    }
                    return data;
                })()
            }
        },
        {
            name: '强',
            type: 'map',
            mapType: 'china',
            background:'red',
            hoverable: false,

            roam:false,
            data : [],
            markPoint : {
                symbol : 'diamond',
                symbolSize: 6,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = placeList.length;
                    while(len--) {
                        data.push({
                            name : placeList[len].name,
                            value : 90,
                            geoCoord : placeList[len].geoCoord
                        })
                    }
                    return data;
                })()
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);