//找class为tree的ul下的span，保存在spans中
var spans=document.querySelectorAll("ul.tree span");
//遍历spans中每个span
for(var i=0;i<spans.length;i++){
  //为当前span绑定单击事件为toggle
  spans[i].onclick=toggle;
}

//定义函数toggle
function toggle(){
  //如果当前span的className为open
  if(this.className=="open"){
    //修改当前span的className为closed
    this.className="closed";
    //获取当前span的下一个兄弟，修改其class为hide
    this.nextElementSibling.className="hide";
  }else{ //否则
    //找class为tree的ul下class为open的span
    var span=document.querySelector("ul.tree span.open");
    //如果span不是null
    if(span){
      //修改span的className为closed
      span.className="closed";
      //获取span的下一个兄弟，修改其class为hide
      span.nextElementSibling.className="hide";
    }
    //修改当前span的className为open
    this.className="open";
    //获取当前span的下一个兄弟，修改其class为show
    this.nextElementSibling.className="";
  }
}