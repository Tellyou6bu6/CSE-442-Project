function TiMu(){
	for(var i in data1){
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);
		
		var beijing = document.createElement("div");
		beijing.className = "entrance-bottom-frame-beijing";
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(beijing);
		
		var div1 = document.createElement("div");
		div1.className = "entrance-bottom-frame-line-id";
		div1.innerHTML = data1[i].id;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div1);
		
		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";
		div2.innerHTML = data1[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
		
		var code = document.createElement("code");
		var pre = document.createElement("pre");
		code.innerHTML = data1[i].code;
		pre.appendChild(code);
		pre.className = "pre_message"
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(pre);
		
		for(var j in data1[i].xuanxiang){
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";
			if(j == 0){
				 div3_id.innerHTML = "A";
			}else if(j == 1){
				 div3_id.innerHTML = "B";
			}else if(j == 2){
				 div3_id.innerHTML = "C";
			}else{
				 div3_id.innerHTML = "D";
			}
			var div4 = document.createElement("div");
			div4.className = "entrance-bottom-frame-line-button-frame";
			div4.innerHTML = data1[i].xuanxiang[j];
			div3.appendChild(div3_id)
			div3.appendChild(div4);
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
		}
	}
	
}

function addClass(obj, cls){
  var obj_class = obj.className,
  blank = (obj_class != '') ? ' ' : '';
  added = obj_class + blank + cls;
  obj.className = added;
}

function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';
  obj_class = obj_class.replace(/(\s+)/gi, ' '),
  removed = obj_class.replace(' '+cls+' ', ' ');
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');
  obj.className = removed;
}

function hasClass(obj, cls){
  var obj_class = obj.className,
  obj_class_lst = obj_class.split(/\s+/);
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {
      return true;
    }
  }
  return false;
}


function getStyle(obj,attr){ 
  if(obj.currentStyle){ 
    return obj.currentStyle[attr]; 
  } 
  else{ 
    return document.defaultView.getComputedStyle(obj,null)[attr]; 
  } 
}

// 计时用
function CountDown() {
       minutes = Math.floor(mintime / 60);
      seconds = Math.floor(mintime % 60);
      if(minutes < 10){
      	minutes1 = "0" + minutes
      }else{
      	minutes1 = minutes
      }
      if(seconds < 10){
      	seconds1 = "0" + seconds
      }else{
      	seconds1 = seconds
      }
      msg =   minutes1 + ":" + seconds1;
      document.all["timer"].innerHTML = msg;
      if (maxtime == 5 * 60)alert("还剩5分钟");
          ++mintime;

//       clearInterval(timer);

}

window.onload = function(){
	TiMu()
	mintime = 1; 
//  timer = setInterval("CountDown()", 1000); 
	var dact = document.querySelector(".entrance-bottom-frame-line")
	var active = "active"
	var none = "none"
	addClass(dact, active)
	var timu_id = 0
	for(var i = 0;i<document.querySelectorAll(".entrance-bottom-frame-line-button").length;i++){
		document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function(){
			if(timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1){
				var frame_left = getStyle(document.querySelector(".entrance-bottom-frame"),'marginLeft')
				document.querySelector(".entrance-bottom-frame").style.marginLeft = parseInt(frame_left) -1050 + "px"
				timu_id++;
				addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
				removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id-1], active)
				addClass(document.querySelectorAll(".entrance-bottom-frame-beijing")[timu_id-1],none)
			}else{
				alert("Last Question")
			}
		}
	}
}


var data1 =[ {
             "id" : "1",  
             "title": "The result of this code is （）",  
             "code": "public class ThisConstructorCall { "+ "<br>" + 
 	"&nbsp&nbsp"+"public ThisConstructorCall(String s){"+ "<br>" +
    "&nbsp&nbsp"+"	System.out.println('s = ' + s);  "+ "<br>" + 
	"&nbsp&nbsp"+"} "+ "<br>" + 
	"&nbsp&nbsp"+"public ThisConstructorCall(int i){ "+ "<br>" + 
	"&nbsp&nbsp"+"	this('i = ' + i);  "+ "<br>" + 
	"&nbsp&nbsp"+"} "+ "<br>" + 
	"&nbsp&nbsp"+"public static void main(String args[]){  "+ "<br>" + 
	"&nbsp&nbsp"+"	new ThisConstructorCall('String call');"+ "<br>" + 
	"&nbsp&nbsp"+"	new ThisConstructorCall(47);"+ "<br>" + 
	"&nbsp&nbsp"+"}"+ "<br>" + 
"}",			
             "xuanxiang":[
             				"read file and load file",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
	
        },{  
             "id" : "2",  
             "title": "The result of this code is （（）",  
             "code":"public class ThisConstructorCall { "+ "<br>" + 
				 	"&nbsp&nbsp"+"public ThisConstructorCall(String s){"+ "<br>" +
				    "&nbsp&nbsp"+"	System.out.println('s = ' + s);  "+ "<br>" + 
					"&nbsp&nbsp"+"} "+ "<br>" + 
					"&nbsp&nbsp"+"public ThisConstructorCall(int i){ "+ "<br>" + 
					"&nbsp&nbsp"+"	this('i = ' + i);  "+ "<br>" + 
					"&nbsp&nbsp"+"} "+ "<br>" + 
					"&nbsp&nbsp"+"public static void main(String args[]){  "+ "<br>" + 
					"&nbsp&nbsp"+"	new ThisConstructorCall('String call');"+ "<br>" + 
					"&nbsp&nbsp"+"	new ThisConstructorCall(47);"+ "<br>" + 
					"&nbsp&nbsp"+"}"+ "<br>" + 
				"}",	
             "xuanxiang":[
             				"ClassCastException",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        },{  
             "id" : "3",  
             "title": "The result of this code is （）",  
             "code": "public class ThisConstructorCall { "+ "<br>" + 
					 	"&nbsp&nbsp"+"public ThisConstructorCall(String s){"+ "<br>" +
					    "&nbsp&nbsp"+"	System.out.println('s = ' + s);  "+ "<br>" + 
						"&nbsp&nbsp"+"} "+ "<br>" + 
						"&nbsp&nbsp"+"public ThisConstructorCall(int i){ "+ "<br>" + 
						"&nbsp&nbsp"+"	this('i = ' + i);  "+ "<br>" + 
						"&nbsp&nbsp"+"} "+ "<br>" + 
						"&nbsp&nbsp"+"public static void main(String args[]){  "+ "<br>" + 
						"&nbsp&nbsp"+"	new ThisConstructorCall('String call');"+ "<br>" + 
						"&nbsp&nbsp"+"	new ThisConstructorCall(47);"+ "<br>" + 
						"&nbsp&nbsp"+"}"+ "<br>" + 
					"}",
             "xuanxiang":[
             				"ClassCastException",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        },{  
             "id" : "4",  
             "title": "The result of this code is （）",  
             "code": "public class ThisConstructorCall { "+ "<br>" + 
					 	"&nbsp&nbsp"+"public ThisConstructorCall(String s){"+ "<br>" +
					    "&nbsp&nbsp"+"	System.out.println('s = ' + s);  "+ "<br>" + 
						"&nbsp&nbsp"+"} "+ "<br>" + 
						"&nbsp&nbsp"+"public ThisConstructorCall(int i){ "+ "<br>" + 
						"&nbsp&nbsp"+"	this('i = ' + i);  "+ "<br>" + 
						"&nbsp&nbsp"+"} "+ "<br>" + 
						"&nbsp&nbsp"+"public static void main(String args[]){  "+ "<br>" + 
						"&nbsp&nbsp"+"	new ThisConstructorCall('String call');"+ "<br>" + 
						"&nbsp&nbsp"+"	new ThisConstructorCall(47);"+ "<br>" + 
						"&nbsp&nbsp"+"}"+ "<br>" + 
					"}",
             "xuanxiang":[
             				"ClassCastException",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        },{  
             "id" : "5",  
             "title": "The result of this code is （）",  
             "code": "public class ThisConstructorCall { "+ "<br>" + 
					 	"&nbsp&nbsp"+"public ThisConstructorCall(String s){"+ "<br>" +
					    "&nbsp&nbsp"+"	System.out.println('s = ' + s);  "+ "<br>" + 
						"&nbsp&nbsp"+"} "+ "<br>" + 
						"&nbsp&nbsp"+"public ThisConstructorCall(int i){ "+ "<br>" + 
						"&nbsp&nbsp"+"	this('i = ' + i);  "+ "<br>" + 
						"&nbsp&nbsp"+"} "+ "<br>" + 
						"&nbsp&nbsp"+"public static void main(String args[]){  "+ "<br>" + 
						"&nbsp&nbsp"+"	new ThisConstructorCall('String call');"+ "<br>" + 
						"&nbsp&nbsp"+"	new ThisConstructorCall(47);"+ "<br>" + 
						"&nbsp&nbsp"+"}"+ "<br>" + 
					"}",
             "xuanxiang":[
             				"ClassCastException",
             				"ClassCastException",
             				"FileNotFoundException",
             				"IndexOutOfBoundsException",
             				]
        }
        ];
        

