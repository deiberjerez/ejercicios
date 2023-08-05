let valor = prompt("ingrese valor de compra");
let total2 = Number(valor) + Number(valor * 0.05);
let total6 = Number(valor) + Number(valor * 0.4);


alert("1 cuota de $"+valor+"(0% de recargo)")
alert("2 cuotas de $"+(valor/2)+" total: "+total2+"$ (5% de recargo)")
alert("6 cuotas de $"+(valor/6)+" total: "+total6+"$ (40% de recargo") 