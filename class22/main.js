function fora()
{
event.currentTarget.style.backgroundColor = "red";
}

function forb()
{
event.currentTarget.style.backgroundColor = "blue";
}

function forc()
{
event.currentTarget.style.backgroundColor = "green";
}

function ford()
{
event.currentTarget.style.backgroundColor = "yellow";
}

function fore()
{
event.currentTarget.style.backgroundColor = "black";
}

function forf()
{
event.currentTarget.style.backgroundColor = "orange";
}

function forg()
{
event.currentTarget.style.backgroundColor = "white";
}

var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
var e = document.querySelector("#e");
var f = document.querySelector("#f");
var g = document.querySelector("#g");

a.addEventListener("mouseover",fora,false);
b.addEventListener("mouseover",forb,false);
c.addEventListener("mouseover",forc,false);
d.addEventListener("mouseover",ford,false);
e.addEventListener("mouseover",fore,false);
f.addEventListener("mouseover",forf,false);
g.addEventListener("mouseover",forg,false);


obj = {}
obj.fun = function ()
{
  alert("Outer Div");
}
obj.fun2 = function()
{
  alert("inner Div");
}

var out = document.querySelector("#outer");
var inn = document.querySelector("#inner");
var innn = document.querySelector("#inner2");

inner.eventListener("click",obj.fun)
