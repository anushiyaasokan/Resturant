function a(sidedish) {
	sidedish=sidedish||"whatever";
	console.log("chicken with"+sidedish);
	// body...
}
a("noodles");
a();
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(randomInteger(1, 500))
  var arr = [];
while(arr.length < 50){
    var r = Math.floor(Math.random() * 500) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
var n=[1,2,25,3,42,6]
for(var i=0;i<n.length;i++)
{
	var count=0;
	for(var j=i+1;j<n.length;j++)
	{
	if(n[i]<n[j])
	{
		console.log(n[i]+":"+n[j])
		count=count+1
		break;
	}
}
if (count==0)
{
	console.log(n[i]+":"+"-1")
}
}
var x=10;
if ((null)||(console.log("hello"))||x>5) {
	console.log("hello");
}
var company=new Object;
company.name="facebook";
company.ceo=new Object;
company.ceo.firstname="mark";
company.ceo.favcolor="blue";
console.log(company);



