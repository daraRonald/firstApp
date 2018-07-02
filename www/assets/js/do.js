function myFunction(){
	alert("Hello");
	}
	
var wallmounted1=[0,1,2,3,4];	
 var polomax=[];
    var wallmounted=[];    	
	var valve=[];
	var bathroom=[];
	var washbasin=[];
	var toilet=[];
	var shower=[];
	var steelsink=[];
	var faucet=[];
	var miscellaneous=[];	
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://www.polomaxten.com/wp-json/wc/v1/products?fields=18&consumer_key=ck_12f20405a9cecb93ddd1f5dfeb67d7d37ca9e09e&consumer_secret=cs_8185efc705304b578e40e9701bc4fe27326b7104&per_page=100');
    ourRequest.onload= function() {
		if(ourRequest.status >= 200 && ourRequest.status < 400){
			var data = JSON.parse(ourRequest.responseText);
			createHTML(data);
			}else{
				console.log("We connected to the server but return error.");
				}
		};
		
		ourRequest.onerror=function(){
			console.log("Connection error");
			};
			
			ourRequest.send();
			
function load(){
	ourRequest.open('GET','https://www.polomaxten.com//wp-json/wc/v1/products?fields=18&consumer_key=ck_12f20405a9cecb93ddd1f5dfeb67d7d37ca9e09e&consumer_secret=cs_8185efc705304b578e40e9701bc4fe27326b7104&per_page=100');
    ourRequest.onload= function() {
		if(ourRequest.status >= 200 && ourRequest.status < 400){
			var data = JSON.parse(ourRequest.responseText);
			createHTML(data);
			}else{
				console.log("We connected to the server but return error.");
				}
		};
		
		ourRequest.onerror=function(){
			console.log("Connection error");
			};
			
			ourRequest.send();
	}			

function createHTML(postData){
	var i=null;
	var number=0;
	var postCategories="";
	//postContainer.innerHTML=postData.
   var j=0;k=0;l=0;m=0;n=0;o=0;p=0;q=0;r=0;
    for(i=0;i<postData.length;i++){
		//alert(postData[i].categories[0].id);
		switch(postData[i].categories[0].name){
          case "Wall Mounted":  
                    wallmounted[j]=postData[i];
                    j++;
                    //postContainer[i].innerHTML=polomax[0].a[0].name;
				break;			
		   case "Valve &amp; Acc;":
					valve[k]=postData[i];
					k++;	
		    	break;
		    case "Bathroom Acc;":
					bathroom[l]=postData[i];
					l++;
		    	break;
		    case "Wash Basin":
					washbasin[m]=postData[i];
					m++;
		    	break;
		    case "Toilet":
					toilet[n]=postData[i];
					n++;	
		    	break;
		    case "Shower":
					shower[o]=postData[i];
					o++;
		    	break;
		    case "Steel Sink":
					steelsink[p]=postData[i];
					p++;	
		    	break;
		    case "Faucet":
					faucet[q]=postData[i];
					q++;
		    	break;
		    case "Miscellaneous":
					miscellaneous[r]=postData[i];
					r++;
		    	break;							
			}
			
		}
		
	
	
}        
		
	





		
	


