﻿Ar = [];
brr = [];
crr = [];
drr = [];
err = [];
frr = [];
grr = [];
hrr = [];
jrr = [];
var url = "http://report.offline.qingger.com:8188/bi_yhj/REALLY/bi/report/crossOrgRank/query";
var Nd = document.getElementsByClassName('nav-d');
var MdId = document.getElementsByClassName('mendianId');
var Lwidth = document.getElementById("L-wid").getElementsByTagName("li")
var Rwidth = document.getElementById("R-wid").getElementsByTagName("li")
var sum = 0;
var m = 5;
var ctrr1=[];
var brightnessarray1=[];
var atrr1=[];
var counter = 0;
var x = 1;
var par = {
		"areacode1": brightnessarray1,
		"org_level_id": atrr1,
		"org_brd_id": ctrr1,
		"local_send_flag":x,		//0表示包含本店销发数据;默认值1
		"userId":"1234536",			//123456表示分别代表时间段,
		"va_months":m,
		"sortField":"cross_sal_amt",
		"sortType":0,
		"pageRow":300	
};
fengzhuang(par)
function fengzhuang(par){
	
					console.log("调用first");
					console.log("调用first参数mouth："+par.va_months+";mou:"+par.local_send_flag);
					if(brightnessarray1.length==0){
						console.log("调用first参数brightnessarray1为空");
						par.areacode1='';
					}else{
						var bValue='';
						for(var i=0;i<brightnessarray1.length;i++){
							bValue=bValue+brightnessarray1[i]+",";
						}
						if(bValue!='')bValue=bValue.substring(0,bValue.length-1);
						console.log('bValue:'+bValue);
						par.areacode1=bValue;
					}
					if(atrr1.length==0){
						par.org_level_id='';
						console.log("调用first参数atrr1为空");
					}else{
						var atrr1Value='';
						for(var i=0;i<atrr1.length;i++){
							atrr1Value=atrr1Value+atrr1[i]+",";
						}
						if(atrr1Value!='')atrr1Value=atrr1Value.substring(0,atrr1Value.length-1);
						console.log('atrr1Value:'+atrr1Value);
						par.org_level_id=atrr1Value;
					}
					if(ctrr1.length==0){
						par.org_brd_id='';
						console.log("调用first参数ctrr1为空");
					}else{
						var ctrr1Value='';
						for(var i=0;i<ctrr1.length;i++){
							ctrr1Value=ctrr1Value+ctrr1[i]+",";
						}
						if(ctrr1Value!='')ctrr1Value=ctrr1Value.substring(0,ctrr1Value.length-1);
						console.log('ctrr1Value:'+ctrr1Value);
						par.org_brd_id=ctrr1Value;
					}
					console.log("调用first参数brightnessarray1："+brightnessarray1+";atrr1:"+par.org_level_id+";ctrr1:"+par.org_brd_id);
					 //par.org_brd_id='AD';
					//par.org_brd_id='AD,NK';
	Ar = [];
	brr = [];
	crr = [];
	drr = [];
	err = [];
	frr = [];
	grr = [];
	hrr = [];
	jrr = [];
  	$.ajax({
		type: 'POST',
		url: url,
		dataType: 'json',
		data: par,
		success:function(obj){
			var list = obj.data.list
			sum =  obj.data.summary;
			for (var i = 0; i < list.length; i++) {
				Ar.push(list[i].cross_sal_amt)//金额
				brr.push(list[i].org_id)//店铺
				crr.push(list[i].cross_sal_amt_ratio)//占比
				drr.push(list[i].cross_sal_qty_ratio)//数量占比
				err.push(list[i].cross_sal_qty)
				frr.push(list[i].org_id);//恢复初始
				grr.push(list[i].cross_sal_nos_ratio)//左边单数
				hrr.push(list[i].org_id);//再次恢复
				jrr.push(list[i].cross_sal_nos);//右边单数
			}
			//console.log(Ar);
			var nav = document.getElementById("nav").getElementsByTagName("li")
				
				if(nav[0].classList.contains('active')){
					fo()
				}else if(nav[1].classList.contains('active')){
					fo()
				}else if(nav[2].classList.contains('active')){
					fo()
				}else if(nav[3].classList.contains('active')){
					fo()
				}else if(nav[4].classList.contains('active')){
					fo()
				}else if(nav[5].classList.contains('active')){
					fo()
				}
			
			
			
			 
			 tan()
			  
			 function tan(){
			 $('#tanchu').on('click',function(){
			 	  if($(".mui-poppicker").length > 0){
							$(".mui-poppicker").remove()
							$(".mui-backdrop").remove()
						}else{
							//不存在
						}
				var picker = new mui.PopPicker();
						picker.setData([{
						index:1,
					    text: "零售金额",
					    jinqian:sum[0].sal_amt,						//零售金额选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_amt_ratio,		//零售金额的总占比
					    zongjinqian:sum[0].cross_sal_amt,			//零售总金额
					    ziti_l:"对店铺总零售占比",
					    ziti_r:"跨店零售金额",
					    jinelist:Ar,
					    dianpu:brr,
					    Zzhanbi:crr
					}, {
						index:2,
					    text: "零售数量",
					    jinqian:sum[0].sal_qty,						//零售数量选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_qty_ratio,		//零售数量的总占比
					    zongjinqian:sum[0].cross_sal_qty,			//零售总数量
					    ziti_l:"对店铺总数量占比",
					    ziti_r:"跨店零售数量",
					}, {
						index:3,
					    text: "零售单数",
					    jinqian:sum[0].sal_nos,						 //零售单数选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_nos_ratio,		//零售单数的总占比
					    zongjinqian:sum[0].cross_sal_nos,			//零售总单数
					    ziti_l:"对店铺总单数占比",
					    ziti_r:"跨店零售单数",
					}])
					picker.pickers[0].setSelectedIndex(0);
					picker.show(function(SelectedItem) {
						$("#j").html(SelectedItem[0].ziti_r)
						$("#z").html(SelectedItem[0].ziti_l)
						  $("#jine").html(format(SelectedItem[0].zongjinqian))
						  $("#zhanbi").html(toPercent(SelectedItem[0].zongzhanbi/100))
					      $("#pull-money").html(format(SelectedItem[0].jinqian))
					      $("#Pull-text").html(SelectedItem[0].text)
					    
					   
					      if(SelectedItem[0].index==1){
					      	  $("body").find("#L-wid li").remove()
							  $("body").find("#M-wid li").remove()
							  $("body").find("#R-wid li").remove()
						      $("#r_top").remove()
						      $("#l_top").remove()
						      $("#r_dow").remove()
						      $("#l_dow").remove()
						      $("#youbianjine").append("<span id='r_top'>▲</span><span id='r_dow'>▼</span>")
						      $("#zuobianzhanbi").append("<span id='l_top'>▲</span><span id='l_dow'>▼</span>")
					      	firstList_jine()
					      	jinqian();
					      	firstList_zhanbi();		
					      }else if(SelectedItem[0].index==2){
					      	 $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("#r_top").remove()
						     $("#l_top").remove()
						     $("#r_dow").remove()
						     $("#l_dow").remove()
						      $("#youbianjine").append("<span id='r_top'>▲</span><span id='r_dow'>▼</span>")
						     $("#zuobianzhanbi").append("<span id='l_top'>▲</span><span id='l_dow'>▼</span>")
						     shuliang();
							
					      }else{
					       	$(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("#r_top").remove()
						     $("#l_top").remove()
						     $("#r_dow").remove()
						     $("#l_dow").remove()
						      $("#youbianjine").append("<span id='r_top'>▲</span><span id='r_dow'>▼</span>")
						     $("#zuobianzhanbi").append("<span id='l_top'>▲</span><span id='l_dow'>▼</span>")
						      danshu();
						     
					      }
	      
					})
					
					
					
				})
		}
			
		}
})
	
		

	}
 var ke = 0;  	
  var je = 0;
 
function jinqian(){
	var max;
    var maxmiddle;
    for(var i=0; i<Ar.length; i++){
        for(var j=i; j<Ar.length; j++){
            if(Ar[i]<Ar[j]){
　　　　　　　　　 max=Ar[j];
                 Ar[j]=Ar[i];
                 Ar[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
            }
        }    		  		
		 $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
    }	
    
    
    	
    	
    	
    	
    	
    	
    	
    	for (var i = 0; i < Ar.length; i++) {
    		$(".data_list_r ul").append(" <li><span>"+format(Ar[i])+"</span></li>");
    	}
    	
    	
    	 for (var i = 0; i < Lwidth.length; i++) {
			var n =  Math.max.apply(null, crr);//最大值
    		ke = crr[i]/n
			Lwidth[i].style.width=toPercent(ke)				
		 }
    		 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, Ar);//最大值
    		je = Ar[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }
//  	 $("#jine").html(format(sum[0].cross_sal_amt))
//		 $("#zhanbi").html(toPercent(sum[0].cross_sal_amt_ratio/100))
}
function jinqianDao(){
	var max;
    var maxmiddle;
    for(var i=0; i<Ar.length; i++){
        for(var j=i; j<Ar.length; j++){
            if(Ar[i]>Ar[j]){
　　　　　　　　　 max=Ar[j];
                 Ar[j]=Ar[i];
                 Ar[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=crr[j];
                 crr[j]=crr[i];
                 crr[i]=maxmiddle;
            }
        }   
       	
		
          
          $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
    	}
    	for (var i = 0; i < Ar.length; i++) {
    		$(".data_list_r ul").append(" <li><span>"+format(Ar[i])+"</span></li>");
    	}
    	
    	
    	 for (var i = 0; i < Lwidth.length; i++) {
			var n =  Math.max.apply(null, crr);//最大值
    		ke = crr[i]/n
    		//console.log(ke)
			Lwidth[i].style.width=toPercent(ke)				
		 }
    		 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, Ar);//最大值
    		je = Ar[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }
    	 $("#jine").html(format(sum[0].cross_sal_amt))
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_amt_ratio/100))
}
function zhanbi(){
	var max;
    var maxmiddle;

    for(var i=0; i<crr.length; i++){
        for(var j=i; j<crr.length; j++){
            if(crr[i]<crr[j]){
　　　　　　　　　 max=crr[j];
                 crr[j]=crr[i];
                 crr[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=Ar[j];
                 Ar[j]=Ar[i];
                 Ar[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(Ar[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
    }
    	var ke=0;
    for (var i = 0; i < Lwidth.length; i++) {
    	
			var n =  Math.max.apply(null, crr);//最大值
    		ke = crr[i]/n
			Lwidth[i].style.width=toPercent(ke)
				
		 
    	
    }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
	
		var x =  Math.max.apply(null, Ar);//最大值
    		je = Ar[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }
}
function zhanbiDao(){
	var max;
    var maxmiddle;
    for(var i=0; i<crr.length; i++){
        for(var j=i; j<crr.length; j++){
            if(crr[i]>crr[j]){
　　　　　　　　　 max=crr[j];
                 crr[j]=crr[i];
                 crr[i]=max;
                 maxmiddle=brr[j];
                 brr[j]=brr[i];
                 brr[i]=maxmiddle;
                 maxmiddle=Ar[j];
                 Ar[j]=Ar[i];
                 Ar[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(Ar[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+brr[i]+"</li>");
          var zb = crr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
    }
    	var ke=0;
    for (var i = 0; i < Lwidth.length; i++) {
    	
			var n =  Math.max.apply(null, crr);//最大值
    		ke = crr[i]/n
			Lwidth[i].style.width=toPercent(ke)	
    }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
	
		var x =  Math.max.apply(null, Ar);//最大值
    		je = Ar[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }
}
function toPercent(point){
    var str=Number(point*100).toFixed(1);//换百分比
    str+="%";
    return str;
}

//1
	function firstList_zhanbi(){
		
			$('#zuobianzhanbi').bind("click", function() {
			counter++ % 2 ? 
				(function(){ 
					$("#r_top").css("color","#b5b8c1")
					$("#l_top").css("color","#5d6c77")
					$("#l_dow").css("color","#b5b8c1")
					$("#r_dow").css("color","#b5b8c1")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
						$("#r_top").css("color","#b5b8c1")
						$("#l_top").css("color","#5d6c77")
						$("#l_dow").css("color","#b5b8c1")
						$("#r_dow").css("color","#b5b8c1")
						zhanbiDao()
					}else if($("#Pull-text").html()=="零售数量"){
						$("#r_top").css("color","#b5b8c1")
						$("#l_top").css("color","#5d6c77")
						$("#l_dow").css("color","#b5b8c1")
						$("#r_dow").css("color","#b5b8c1")
						shuliangzhanbiDao()
					}else{
						$("#r_top").css("color","#b5b8c1")
						$("#l_top").css("color","#5d6c77")
						$("#l_dow").css("color","#b5b8c1")
						$("#r_dow").css("color","#b5b8c1")
						danshuzhanbiDao()
					}
				}()) :
				(function(){
					$("#r_top").css("color","#b5b8c1")
					$("#l_top").css("color","#b5b8c1")
					$("#l_dow").css("color","#5d6c77")
					$("#r_dow").css("color","#b5b8c1")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
							$("#r_top").css("color","#b5b8c1")
							$("#l_top").css("color","#b5b8c1")
							$("#l_dow").css("color","#5d6c77")
							$("#r_dow").css("color","#b5b8c1")
						zhanbi()
						
					}else if($("#Pull-text").html()=="零售数量"){
							$("#r_top").css("color","#b5b8c1")
							$("#l_top").css("color","#b5b8c1")
							$("#l_dow").css("color","#5d6c77")
							$("#r_dow").css("color","#b5b8c1")
						shuliangzhanbi()
					}else{
							$("#r_top").css("color","#b5b8c1")
							$("#l_top").css("color","#b5b8c1")
							$("#l_dow").css("color","#5d6c77")
							$("#r_dow").css("color","#b5b8c1")
						danshuzhanbi()
					}
				}());
		});
	
	}
	function firstList_jine(){
			$('#youbianjine').bind("click", function() {
			counter++ % 2 ? 
				(function(){ 
					$("#r_top").css("color","#b5b8c1")
					$("#l_top").css("color","#b5b8c1")
					$("#l_dow").css("color","#b5b8c1")
					$("#r_dow").css("color","#5d6c77")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
						jinqian()
					}else if($("#Pull-text").html()=="零售数量"){
						shuliang()
					}else{
						danshu()
					}
				}()) :
				(function(){
					$("#r_top").css("color","#5d6c77")
					$("#l_top").css("color","#b5b8c1")
					$("#l_dow").css("color","#b5b8c1")
					$("#r_dow").css("color","#b5b8c1")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
						jinqianDao()
					}else if($("#Pull-text").html()=="零售数量"){
						shuliangDao()
					}else{
						danshuDao()
					}
				}());
		});
	}
//第二个数据页面
function shuliang(){
	var max;
    var maxmiddle;
    for(var i=0; i<err.length; i++){
        for(var j=i; j<err.length; j++){
            if(err[i]<err[j]){
　　　　　　　　　 max=err[j];
                 err[j]=err[i];
                 err[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=drr[j];
                 drr[j]=drr[i];
                 drr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(err[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	var ke =0; 
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			
			var n =  Math.max.apply(null, drr);//最大值
    		ke = drr[i]/n
    		
			Lwidth[i].style.width=toPercent(ke)	
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, err);//最大值
    		je = err[i]/x
			Rwidth[i].style.width=toPercent(je)
    	}
    	$("#jine").html(format(sum[0].cross_sal_qty))
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_qty_ratio/100))

}
function shuliangDao(){
	var max;
    var maxmiddle;
    for(var i=0; i<err.length; i++){
        for(var j=i; j<err.length; j++){
            if(err[i]>err[j]){
　　　　　　　　　 max=err[j];
                 err[j]=err[i];
                 err[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=drr[j];
                 drr[j]=drr[i];
                 drr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(err[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	var ke =0; 
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			
			var n =  Math.max.apply(null, drr);//最大值
    		ke = drr[i]/n
    		console.log(ke)
			Lwidth[i].style.width=toPercent(ke)	
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, err);//最大值
    		je = err[i]/x
			Rwidth[i].style.width=toPercent(je)
    	}
    	$("#jine").html(format(sum[0].cross_sal_qty))
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_qty_ratio/100))

}
function shuliangzhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<drr.length; i++){
        for(var j=i; j<drr.length; j++){
            if(drr[i]<drr[j]){
　　　　　　　　　 max=drr[j];
                 drr[j]=drr[i];
                 drr[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=err[j];
                 err[j]=err[i];
                 err[i]=maxmiddle;
            }
        }
      
          $(".data_list_r ul").append(" <li><span>"+format(err[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
			var n =  Math.max.apply(null, drr);//最大值
    		ke = drr[i]/n
    		console.log(ke)
			Lwidth[i].style.width=toPercent(ke)	
		 
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, err);//最大值
    		je = err[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }

}

function shuliangzhanbiDao(){
	var max;
    var maxmiddle;
    for(var i=0; i<drr.length; i++){
        for(var j=i; j<drr.length; j++){
            if(drr[i]>drr[j]){
　　　　　　　　　 max=drr[j];
                 drr[j]=drr[i];
                 drr[i]=max;
                 maxmiddle=frr[j];
                 frr[j]=frr[i];
                 frr[i]=maxmiddle;
                 maxmiddle=err[j];
                 err[j]=err[i];
                 err[i]=maxmiddle;
            }
        }
      
          $(".data_list_r ul").append(" <li><span>"+format(err[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+frr[i]+"</li>");
          var zb = drr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
			var n =  Math.max.apply(null, drr);//最大值
    		ke = drr[i]/n
    		console.log(ke)
			Lwidth[i].style.width=toPercent(ke)	
		 
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, err);//最大值
    		je = err[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }

}
	//第三个数据页面
function danshu(){
	var max;
    var maxmiddle;
    for(var i=0; i<jrr.length; i++){
        for(var j=i; j<jrr.length; j++){
            if(jrr[i]<jrr[j]){
　　　　　　　　　 max=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=grr[j];
                 grr[j]=grr[i];
                 grr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(jrr[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var n =  Math.max.apply(null, grr);//最大值
		    		ke = grr[i]/n
		    		
					Lwidth[i].style.width=toPercent(ke)	
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, jrr);//最大值
    		je = jrr[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }
		$("#jine").html(format(sum[0].cross_sal_nos))
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_nos_ratio/100))
}
function danshuDao(){
	var max;
    var maxmiddle;
    for(var i=0; i<jrr.length; i++){
        for(var j=i; j<jrr.length; j++){
            if(jrr[i]>jrr[j]){
　　　　　　　　　 max=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=grr[j];
                 grr[j]=grr[i];
                 grr[i]=maxmiddle;
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(jrr[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");
			     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var n =  Math.max.apply(null, grr);//最大值
		    		ke = grr[i]/n
		    		
					Lwidth[i].style.width=toPercent(ke)	
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, jrr);//最大值
    		je = jrr[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }
		$("#jine").html(format(sum[0].cross_sal_nos))
		 $("#zhanbi").html(toPercent(sum[0].cross_sal_nos_ratio/100))
}
function danshuzhanbi(){
	var max;
    var maxmiddle;
    for(var i=0; i<grr.length; i++){
        for(var j=i; j<grr.length; j++){
            if(grr[i]<grr[j]){
　　　　　　　　　 max=grr[j];
                 grr[j]=grr[i];
                 grr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
                 
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(jrr[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");	     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var n =  Math.max.apply(null, grr);//最大值
		    		ke = grr[i]/n
		    		console.log(ke)
					Lwidth[i].style.width=toPercent(ke)	
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, jrr);//最大值
    		je = jrr[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }

}
function danshuzhanbiDao(){
	var max;
    var maxmiddle;
    for(var i=0; i<grr.length; i++){
        for(var j=i; j<grr.length; j++){
            if(grr[i]>grr[j]){
　　　　　　　　　 max=grr[j];
                 grr[j]=grr[i];
                 grr[i]=max;
                 maxmiddle=hrr[j];
                 hrr[j]=hrr[i];
                 hrr[i]=maxmiddle;
                 maxmiddle=jrr[j];
                 jrr[j]=jrr[i];
                 jrr[i]=maxmiddle;
                 
            }
        }
          $(".data_list_r ul").append(" <li><span>"+format(jrr[i])+"</span></li>");
          $(".data_list_m ul").append(" <li>"+hrr[i]+"</li>");
          var zb = grr[i]/100;
          $(".data_list_l ul").append(" <li><span>"+toPercent(zb)+"</span></li>");	     
    	}
    	 for (var i = 0; i < Lwidth.length; i++) {
    	 			var n =  Math.max.apply(null, grr);//最大值
		    		ke = grr[i]/n
		    		console.log(ke)
					Lwidth[i].style.width=toPercent(ke)	
		 }
    	 var je = 0;  	 
    	for (var i = 0; i < Rwidth.length; i++) {
    		var x =  Math.max.apply(null, jrr);//最大值
    		je = jrr[i]/x
			Rwidth[i].style.width=toPercent(je)
		 }

}
 
function format (num) {
    return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');//千分位转换
}


function fo(){
	if($("#Pull-text").html()=="零售金额"){
					      $("#jine").html("")
					      $("#zhanbi").html("")
			    	 	  $("#zhanbi").html(sum[0].cross_sal_amt_ratio +"%")
						  $("#jine").html(format(sum[0].cross_sal_amt))
						  $("#pull-money").html(format(sum[0].sal_amt))
						  $(".data_list_r ul").children().remove()
					      $(".data_list_m ul").children().remove()
					      $(".data_list_l ul").children().remove()
					      $("body").find("#L-wid li").remove()
						  $("body").find("#M-wid li").remove()
						  $("body").find("#R-wid li").remove()
						  jinqian()
						  firstList_jine()
						  firstList_zhanbi()
		      	  }else if($("#Pull-text").html()=="零售数量"){	   		   
		    			    $("#jine").html("")
					        $("#zhanbi").html("")
						    $("#zhanbi").html(sum[0].cross_sal_qty_ratio +"%")
						    $("#jine").html(format(sum[0].cross_sal_qty))
						    $("#pull-money").html(format(sum[0].sal_qty))
						     $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("body").find("#L-wid li").remove()
							 $("body").find("#M-wid li").remove()
							 $("body").find("#R-wid li").remove()
						     shuliang()
		    		}else{
		    			     $("#jine").html("")
					         $("#zhanbi").html("")
		    			     $("#zhanbi").html(sum[0].cross_sal_nos_ratio +"%")
						     $("#jine").html(format(sum[0].cross_sal_nos))
						     $("#pull-money").html(format(sum[0].sal_nos))
						    $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("body").find("#L-wid li").remove()
							 $("body").find("#M-wid li").remove()
							 $("body").find("#R-wid li").remove()
						     danshu()
					}
}
