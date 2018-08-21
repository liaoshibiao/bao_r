 			
 $("#nav li").bind("click",function() {
		data_id = $(this).attr("data-id");
				$("#nav li").removeClass('active');
				$("#nav li[data-id = '" + data_id + "']").addClass('active');
					let index = $(this).index() + 1;
					var m = "";
					if(index==1){	
						m = 1;
						
					}
					else if(index==2){ 
						
						m = 2;
						
					}
					else if(index==3){ 
						
						m = 3;
						
					}
					else if(index==4){ 
						
						m = 4;
						
					}
					else if(index==5){ 
					
						m = 5;
						
					}
					else if(index==6){ 	
						m = 6;
					
					
					}
					$("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					$(".index-content").find("#area_list td").remove()
					$(".index-content").find("#area_list th").remove()
					$(".index-content").find("#ace td").remove()
					var par = {
						"areacode1":"",
						"local_send_flag":x,
						"org_brd_id":"",
						"org_level_id":"",
						"userId":"1234536",
						"va_months":m,
						"sortField":"cross_sal_amt",
						"sortType":0,
						"pageRow":3000
				};
				
		         	 fengzhuang(par)
		         
	})
 
 
 
 		kaiguan()
 		var nav = document.getElementById("nav").getElementsByTagName("li")
 		function kaiguan(){
		document.getElementById("mySwitch").addEventListener("toggle",function(event){
		if(event.detail.isActive){
			
			//x = 1;
			//m =1			在这里写个判断
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
			firstList_jine()
			firstList_zhanbi()
			
		}else{
		   	for (var i = 0; i < nav.length; i++) {	
				
				if(nav[0].classList.contains('active')){
					x =0;
					m = 1
				}else if(nav[1].classList.contains('active')){
					x =0;
					m = 2
				}else if(nav[2].classList.contains('active')){
					x =0;
					m = 3
				}else if(nav[3].classList.contains('active')){
					x =0;
					m = 4
				}else if(nav[4].classList.contains('active')){
					x =0;
					m = 5
				}else if(nav[5].classList.contains('active')){
					x =0;
					m = 6
				}
			}
		}
		
			$("body").find("#L-wid li").remove()
			$("body").find("#M-wid li").remove()
			$("body").find("#R-wid li").remove()
			var par = {
					"areacode1":"",
					"local_send_flag":x,
					"org_brd_id":"",
					"org_level_id":"",
					"userId":"1234536",
					"va_months":m,
					"sortField":"cross_sal_amt",
					"sortType":0,
					"pageRow":3000
		};
		
		   fengzhuang(par)
		})
}