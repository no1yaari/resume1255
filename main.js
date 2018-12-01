function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);	
}
getfile("main.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	Career(data.Career);
	Education(data.Education);
	Languages(data.Languages);
	Skills(data.Skills);
}

	)
var left=document.querySelector(".left");
function profile(pro){
	var img=document.createElement("img");
	img.src=pro.img;
	left.appendChild(img);
	var h1=document.createElement("h1");
	h1.textContent=pro.name;
	left.appendChild(h1);
	var h2=document.createElement("h2");
	h2.textContent=pro.Rollno;
	left.appendChild(h2);
	var h3=document.createElement("h3");
	h3.textContent=pro.Institute;
	left.appendChild(h3);
}
var right=document.querySelector(".right");
function Career(c){
	var h2=document.createElement("h2");
	h2.textContent="careerObjective";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var p=document.createElement("p");
	p.textContent=c.info;
	right.appendChild(p);
}
function Education(e){
	var h2=document.createElement("h2");
	h2.textContent="Education Details";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var tb=document.createElement("table");
	tb.border="2";
	var tr1="<tr><td>Degree</td><td>Institution</td><td>Year of Passing</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].Degree+"</td><td>"+e[i].Institution+"</td><td>"+e[i].YearofPassing+"</td></tr>";
	}
	tb.innerHTML=tr1+tr2;
	right.appendChild(tb);

}
function Languages(l){
	var h2=document.createElement("h2");
	h2.textContent="Languages";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var ul=document.createElement("ul");
	//var ul2="";
	//for(i=0;i<l.length;i++){
	//	ul2=ul2+"<br>"+l[i].lang+"</br>";
	//}
	//ul.innerHTML=ul2;
	right.appendChild(ul);
	for(i=0;i<l.length;i++){
		var li=document.createElement("li");
		li.textContent=l[i].lang;
		ul.appendChild(li);
	}
}
function Skills(s){
	var h2=document.createElement("h2");
	h2.textContent="Skills";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<s.length;i++){
		var li=document.createElement("li");
		li.textContent=s[i].title+":"+s[i].content;
		ul.appendChild(li);
	}
}