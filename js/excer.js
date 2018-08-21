 		$('#someElm').click(function(){
					$("#cehua").show(500)
					$("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
		})
		$('.cz').click(function(){
			$("body").find("#L-wid li").remove()
			$("body").find("#M-wid li").remove()
			$("body").find("#R-wid li").remove()
			$("#managementmiddle .pinpai").removeClass('mypinpai');
			$("#managementup .pinpai").removeClass('mypinpai');
			$("#managementdown .pinpai").removeClass('mypinpai');
            $("#store .pinpai").removeClass('mypinpai');
			$("#brand .pinpai").removeClass('mypinpai');
			$("#jine").html("")
			$("#zhanbi").html("")
		})
		$('.wc').click(function(){
			$("body").find("#L-wid li").remove()
			$("body").find("#M-wid li").remove()
			$("body").find("#R-wid li").remove()
			
			var brightness=0;
			var brightnessarray=[];
			var index=0;
			var ctrr=[];
			var trr=0;
			var atrr=[];
			var mrr=0;		
		for(var s=0;s<$("#brand .pinpai").length;s++){
			if($("#brand .pinpai").eq(s).hasClass('mypinpai'))
			{
				ctrr[trr]=cx_n[s-1];
				trr++;
			}
		  };
			for(var s=1;s<$("#managementmiddle .pinpai").length;s++){
			if($("#managementmiddle .pinpai").eq(s).hasClass('mypinpai'))
			{
				brightnessarray[index]=erji[s-1];
				index++;
			}
		 };
			for(var s=1;s<$("#store .pinpai").length;s++){
			if($("#store .pinpai").eq(s).hasClass('mypinpai'))
			{
				atrr[mrr]=mydata[s-1];
				mrr++;
			}
		   };
		 
		 		var nav = document.getElementById("nav").getElementsByTagName("li")
				for (var i = 0; i < nav.length; i++) {	
				
				if(nav[0].classList.contains('active')){
					x =1;
					m = 1
				}else if(nav[1].classList.contains('active')){
					x =1;
					m = 2
				}else if(nav[2].classList.contains('active')){
					x =1;
					m = 3
				}else if(nav[3].classList.contains('active')){
					x =1;
					m = 4
				}else if(nav[4].classList.contains('active')){
					x =1;
					m = 5
				}else if(nav[5].classList.contains('active')){
					x =1;
					m = 6
				}
			}
					var isActive = document.getElementById("mySwitch").classList.contains("mui-active");
					if(isActive){
					  console.log("打开状态");
					  x =1;
					}else{
					  console.log("关闭状态");  
					  x = 0;
					}
							
					$("#cehua").hide()
					$("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
			var pra={
				"userId":"123456789",
				"va_months":m,
				"local_send_flag":x,
				 "areacode1":brightnessarray,
				 "org_level_id":atrr,
				 "org_brd_id":ctrr,
				 "sortField":"cross_sal_amt",
				"sortType":0,
				"pageRow":3000
			} 
			brightnessarray1=brightnessarray;
			atrr1=atrr;
			ctrr1=ctrr;
			if(trr=0)ctrr1=[];
			if(mrr=0)atrr1=[];
			if(index=0)brightnessarray1=[];
			console.log("mouth:"+m+";mou:"+x);
			console.log("brightnessarray1:"+brightnessarray1.length);
			//console.log("brightnessarray:"+brightnessarray.length);
			//console.log("atrr:"+atrr.length);
			console.log("atrr1:"+atrr1.length);
			//console.log("ctrr:"+ctrr.length);
			console.log("ctrr1:"+ctrr1.length);
				fengzhuang(pra)		
			})
