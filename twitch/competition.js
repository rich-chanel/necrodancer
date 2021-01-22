function refresh() {
    var P1 = document.getElementById("1p").value;
    var P2 = document.getElementById("2p").value;
    var T1 = document.getElementById("1t");
    var T2 = document.getElementById("2t");
    T1.innerHTML = "<iframe src='https://player.twitch.tv/?channel=" + P1 + "&parent=rich-chanel.github.io' height='528' width='938' allowfullscreen='true' style='margin-left: 4px;'></iframe></td>";
    T2.innerHTML = "<iframe src='https://player.twitch.tv/?channel=" + P2 + "&parent=rich-chanel.github.io' height='528' width='938' allowfullscreen='true'></iframe></td>";

}