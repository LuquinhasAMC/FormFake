function bt2() {
    let bc = document.body;
    let bt2 = document.getElementById("bt2");
    let bars = document.getElementsByClassName("bars");
    let txt = Array.from(document.getElementsByClassName("txt"));
    let txb1 = document.getElementById("txb1");

    if (bt2.innerText === "🌙") {
        bc.style.backgroundColor = "black";
        bt2.innerText = "☀️";
        bt2.style.backgroundColor = "#1e1e1e";
        bt2.style.boxShadow = "0 0 0";
        txb1.style.borderColor = "white";
        txb1.style.color = "white";
        Array.from(bars).forEach(bars => bars.style.backgroundColor = "#1e1e1e");
        txt.forEach(txt => txt.style.color = "white");

    }
    else {
        bc.style.backgroundColor = "#e6e6e6";
        bt2.innerText = "🌙";
        bt2.style.backgroundColor = "white";
        bt2.style.boxShadow = "0px 7px 10px #b4b4b4";
        Array.from(bars).forEach(bars => bars.style.backgroundColor = "white");
        txb1.style.borderColor = "#0c101c";
        txb1.style.color = "#0c101c";
        txt.forEach(txt => txt.style.color = "#0c101c");

    }
}

function bt1() {
    alert("Em-breve");
}