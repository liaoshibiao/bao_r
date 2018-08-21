          
	  
	  var twodata=[];
	var erji=[];
	 var abc = "http://report.offline.qingger.com:8188/bi_yhj/REALLY/bi/report/params/queryOrgInfo/query";
     	var params = {
		"userId": '15975531236'
	};
    var cx_a=[];
    var cx_b=[];
    var cx_c=[];
    var cx_d=[]
    asser(params);
    function asser(params){
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		success: function(obj) {
		for(var i=0;i<obj.data.list.length;i++){
				erji[i]=obj.data.list[i].areacode2;
			}
             twodata=obj.data.list;
			var list = obj.data.list;
			for (var i = 0; i < list.length; i++) {
				cx_a = cx_a.concat(list[i].areaname1)
				cx_b = cx_b.concat(list[i].areaname2)
				cx_d = cx_d.concat(list[i].areacode1)
			}	
			chaxun_one()
			arr=cx_a
			unique(arr)
			unique_r(cx_c)
				//管辖区域第一层
			    var gxq_one=cx_a.length;
			    //里面三角形属性
			    var aa=cx_d.length;
	
			    var str=1;
			    var d_j=0;
			//管辖区域第一层
			  $("#managementup div").bind("click",function(){
						let index = $(this).index();
						$(".jibieda-top").show()
						$(this).find('.qu_yu').css("background","url(./images/sjx_s.png)no-repeat")
						$("#managementmiddle").show()
			            $(this).siblings('div').find('.qu_yu').css("background","url(./images/sjx_k.png)no-repeat")
			          if(index!=0){		
							if($("#managementup .pinpai").eq(index).hasClass('mypinpai')){
                   d_j+=1;
                  if(d_j==2){
                  	 $("#managementmiddle").hide()
                  	 $("#managementup .pinpai").eq(index).removeClass('mypinpai');
						          $(this).find('.qu_yu').hide()
						          $("#managementmiddle .pinpai").removeClass('mypinpai');
                  	 d_j=0
                  }else{
                  	
                  }
                   console.log(d_j)
							}
							 else{
								 $("#managementup .pinpai").eq(index).addClass('mypinpai');
								  //盒子里面属性三角形
							     $(this).find('.qu_yu').show()
							        var str=0
								  $(".qu_yu").bind('click', function(event) {
											let index = $(this).index();
												 str+=1
												 if(str==1){
												 	$(this).css("background","url(./images/sjx_s.png)no-repeat")
												 		$(this).parent().parent().siblings("div").find('.qu_yu').css("background","url(./images/sjx_k.png)no-repeat")
													str=1
												 }
												 if(str!=1){
												 	$(this).css("background","url(./images/sjx_k.png)no-repeat")
													str=0
												 }	
												 event.stopPropagation();
									});
							 }
								
						}
						else{
							if($("#managementup .pinpai").eq(0).hasClass('mypinpai')){
							    $("#managementup .pinpai").removeClass('mypinpai');
							     $(this).siblings('div').find('.qu_yu').hide()
						     }
							 else{
								$("#managementup .pinpai").addClass('mypinpai');
								$(this).siblings('div').find('.qu_yu').show()
							 }
							
						}
						    var istrue=false;
							var isfalse=false;
							var j=1;
							for(j=1;j<gxq_one;j++){
								if(!($("#managementup .pinpai").eq(j).hasClass('mypinpai'))){
									istrue=true;
								}
							
							}
							if(istrue==false&&j==gxq_one){
								$("#managementup .pinpai").eq(0).addClass('mypinpai');
								}
			            
			             if(index!=0){
			             if($("#managementup .pinpai").eq(index).hasClass('mypinpai')&&$("#managementup .pinpai").eq(0).hasClass('mypinpai')){
			             		$("#managementup .pinpai").eq(0).addClass('mypinpai')
			             	}else{		
			             		$("#managementup .pinpai").eq(0).removeClass('mypinpai');
			             		$("#managementup .a_er").show()
			             	}
						 }

						var twodatathis=[];	
						var k=0;
						if(index!=0&&$("#managementup .pinpai").eq(index).hasClass('mypinpai')){
							$('html #managementmiddle').html("");
							$('html #managementmiddle').append('<div class="pinpai mypinpai"  onclick="clicks('+-1+')"><span>全选<p class="qu_yu"></p></span></div>')	
							for(var i=0;i<twodata.length;i++){
								if($("#managementup .pinpai").eq(index).text()==twodata[i].areaname1){
								   twodatathis[k]=twodata[i].areaname2;
							       k++;
								}
							}
							unique_l(twodatathis);
						}
			        })
		}
	})
	}

	function clicks(index){
		         index=index+1;
				 //管辖区域第二层
				 var gxq_two=cx_b.length;
						  if(index!=0){
								  if($("#managementmiddle .pinpai").eq(index).hasClass('mypinpai')){
									  $("#managementmiddle .pinpai").eq(index).removeClass('mypinpai');
								   }
								   else{
										   $("#managementmiddle .pinpai").eq(index).addClass('mypinpai');
								   }
									  
							  }
							  else{
								  if($("#managementmiddle .pinpai").eq(0).hasClass('mypinpai')){
									  $("#managementmiddle .pinpai").removeClass('mypinpai');
								   }
								   else{
									  $("#managementmiddle .pinpai").addClass('mypinpai');
								   }
								  
							  }
								  var istrue=false;
								  var isfalse=false;
								  var j=1;
								  for(j=1;j<gxq_two;j++){
									  if(!($("#managementmiddle .pinpai").eq(j).hasClass('mypinpai'))){
										  istrue=true;
									  }
								  
								  }
								  if(istrue==false&&j==gxq_two){
									  $("#managementmiddle .pinpai").eq(0).addClass('mypinpai');
									  }
							  
							     if(index!=0){
						             	if($("#store .pinpai").eq(index).hasClass('mypinpai')&&$("#store .pinpai").eq(0).hasClass('mypinpai')){
						             		$("#store .pinpai").eq(0).addClass('mypinpai')
						             	}else{		
						             		$("#store .pinpai").eq(0).removeClass('mypinpai');
						             	}
									 }
							           //将亮点储存
                 var threedata=[];  //将二级区域点亮保存
								 var k=0;
							 for(var i=1;i<$("#managementmiddle .pinpai").length;i++){
								 if($("#managementmiddle .pinpai").eq(i).hasClass('mypinpai')){
									threedata[k]=erji[i-1];
									 k++;
								 }
							 }
	}
	//增加全选
	function chaxun_one(){
		$('html #managementup').append('<div class="pinpai"><span>全选</span></div>')
		$('html #managementmiddle').append('<div class="pinpai a_er" style="display:none"><span>全选</span></div>')
		$('html #managementdown').append('<div class="pinpai"><span>全选</span></div>')
    }

    //清除重复数据
	function unique(arr) {
	    if (!Array.isArray(arr)) {
	        return
	    }
	     var res=[];
         var ss=[];
	    for (let i = 0; i < arr.length; i++) {
	        if (res.indexOf(arr[i]) === -1) {
	            res.push(arr[i])
	        }
	    }
	    var ss=res;
	    for (var i = 0; i <ss.length; i++) {
		$('html #managementup').append('<div class="pinpai"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	    }
	    return res
	    
	}
	function unique_l(arr) {
	    if (!Array.isArray(arr)) {
	        return
	    }
	     var res=[];
         var ss=[];
	    for (let i = 0; i < arr.length; i++) {
	        if (res.indexOf(arr[i]) === -1) {
	            res.push(arr[i])
	        }
	    }
	   var ss=res;
	    	for (var i = 0; i <ss.length; i++) {
				$('html #managementmiddle').append('<div class="pinpai mypinpai" onclick="clicks('+i+')"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
			}
	    return res
	    
	}
	function unique_r(arr) {
	    if (!Array.isArray(arr)) {
	        return
	    }
	     var res=[];
         var ss=[];
	    for (let i = 0; i < arr.length; i++) {
	        if (res.indexOf(arr[i]) === -1) {
	            res.push(arr[i])
	        }
	    }
	    var ss=res;
	for (var i = 0; i < ss.length; i++) {
		$('html #managementdown').append('<div class="pinpai"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	}
	    return res
	    
	}
