//fullPage插件
$(document).ready(function(){
  $("#fullPage").fullpage({
    verticalCentered: false,
	anchors:["page1","page2","page3","page4","page5"],
	fixedElements: "#fix-me",
	navigation: true,
	navigationPosition: "right",
	navigationTooltips: ["page1","page2","page3","page4","page5"],
	afterLoad:function(link,index){
	  switch(index){
	    case 1:
		move(".intro h2").scale(1.1).end();
		move(".intro p").set("margin-top","10%").end();
		break;
		case 2:
		move(".section2 h2").set("margin-left","35%").end();
		move(".section2 p").set("margin-left","-3%").end();
		break;
        case 3:
		move(".section3 h2").skew(-20).set("height",20).end();
		move(".section3 p").set("margin-top","1%").end();
		break;
		case 4:
		move(".section4 h2").set("margin-left","5%").end();
		move(".section4 p").set("margin-left","28%").end();
		break;
		case 5:
		move(".thank h2").scale(1.2).end();
		break;
	  }
	}
  })
});
//fix图标样式
var timer=null;
function startMove(){
	var myTele=document.getElementById("fix-me");
	timer=setInterval(function(){
	    if(myTele.offsetHeight==0){
			clearInterval(timer);
		}
        else{
			myTele.style.height=myTele.offsetHeight-10+"px";
		}		
	},30)
}

//标题样式 
 $(function(){
    $(".header_p").mouseover(function(){
	  $(this).html("web前端工程师");
	}).mouseout(function(){
	  $(this).html("这是我的个人简介");
	})
  });

  $(function(){
    $(".navmenu").mouseover(function(){
	  $(this).children("ul").show();
	})
	$(".navmenu").mouseout(function(){
	  $(this).children("ul").hide();
	})
 });
   $(function(){
	  $(".experience").click(function(){
		 alert("现在还很欠缺，希望您能给我这个机会");  
	  }) 
   });
 //第二页样式
    $(function () {
        $('#navList').on('click', 'li', function (event) {
            if ($(this).hasClass('btn-active')) {
                $('#expandZone #closeBtn').click();
                return false;
            }
            var curIndex = $(this).index() , mlValue = '-' + curIndex * 100 + '%';
            if ($('#expandZone').hasClass('active')) {
                $('#expandZone .expdiv').animate({ marginLeft: mlValue });
            }
            else {
                $('#expandZone .expdiv').css({ marginLeft: mlValue });

                $('#expandZone').animate({ height: '200px' }).addClass('active');
            }
            $(this).addClass('btn-active').siblings().removeClass('btn-active');
            return false;
        });

        $('#expandZone #closeBtn').on('click', function () {
            $('#expandZone').animate({ height: '0px' }, function () {
                $(this).removeClass('active');
                $('#navList .btn-active').removeClass('btn-active');
            });
            return false;
        });
    });
// 第三页样式
   $(function(){
       $(".section3 li span").click(function(){
	       $(".skill_hide").each(function(){
		       if($(this).is(":visible")){
				   $(this).slideUp(200);
				   $(this).prev().removeClass("flag_scale");
			   }	   
		   }); 
           if($(this).siblings(".skill_hide").is(":hidden")){
			   $(this).siblings(".skill_hide").slideDown(400);
			   $(this).siblings(".flag").addClass("flag_scale");
		   }else{
			   $(this).siblings(".skill_hide").slideUp(200);
			   $(this).siblings("flag").removeClass("flag_scale");
		   }
	  });
   });
// 第四页样式
   window.onload=function(){
	     var container=document.getElementById("container");
		 var list=document.getElementById("list");
		 var buttons=document.getElementById("buttons").getElementsByTagName("span");
		 var prev=document.getElementById("prev");
		 var next=document.getElementById("next");
		 var index=1;
		 var animated=false;
		 var timer;
		  
		 function showButton(){
		      for(var i=0;i<buttons.length;i++){
			      if(buttons[i].className=="on"){
				     buttons[i].className="";
                     break;					 
				  }
			  }
		      buttons[index-1].className="on";
		 }
		 
		 function animate(offset){
		      var newLeft=parseInt(list.style.left)+offset;
			  var time=300;  
			  var interval=10;
			  var speed=offset/(time/interval);
			  animated=true;
	
			  function go(){
			      if((speed<0&&parseInt(list.style.left)>newLeft)||(speed>0&&parseInt(list.style.left)<newLeft)){
				      list.style.left=parseInt(list.style.left)+speed+"px";
					  setTimeout(go,interval);
				  }
				  else{
				     list.style.left=newLeft+"px"; 
                     if(newLeft>-1200){
			            list.style.left=-4800+"px"
			         }
                     if(newLeft<-4800){
			             list.style.left=-1200+"px"
			         }
                     animated=false;					 
		           }
			    }
				go();
			  }
		
		function play(){
		     timer=setInterval(function(){
			     next.onclick();
			 },3000);
		}
		
		
		function stop(){
		     clearInterval(timer);
		}
		
		 next.onclick=function(){
		     if(animated){
			     return;
			 }
		     if(index==4){
			     index=1;
			 }
			 else{
			     index+=1;
			 }
			 showButton();
			 if(!animated){
		         animate(-1200)
			 }
		 }
		 prev.onclick=function(){
		     if(animated){
			      return;
			 }
		     if(index==1){
			     index=4;
			 }
			 else{
			     index-=1;
			 }
			 showButton();
			 if(!animated){
		         animate(1200)
			 }
		 }
		 for(var i=0;i<buttons.length;i++){
		      buttons[i].onclick=function(){
			      if(animated){
				      return;
				  }
			      if(this.className=="on"){
				      return;
				  }
			      var myIndex=parseInt(this.getAttribute("index"));
				  var offset=-1200*(myIndex-index);
				  index=myIndex;
				  showButton();
				  if(!animated){
				      animate(offset);
				  }
			  }
		 }
		 
		 container.onmouseover=stop;
		 container.onmouseout=play;
		 play();
	// 加载fix函数	 
	var myTele=document.getElementById("fix-me");
	var closeB=document.getElementById("close");
	closeB.onclick=function(){
		startMove();
	}
}
//第五页样式
