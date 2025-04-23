/* 轮播背景图片 */
var images = [
    $cdnPrefix + "/public/%E5%A3%81%E7%BA%B8/chunli.jpg",
    //$cdnPrefix + "/public/%E5%A3%81%E7%BA%B8/onepiece-youling.jpg",
    $cdnPrefix + "/public/%E5%A3%81%E7%BA%B8/dianjuren.jpg",
    $cdnPrefix + "/public/%E5%A3%81%E7%BA%B8/sao.jpg",
];

$(function () {
    // shuffle(images);
    // $.backstretch(images, { duration: 45000, fade: 1500 });
    // 判断不是自己的网站就跳回
    const allow_list = ["kirito.info", "localhost", "127.0.0.1", "vercel.app", "github.io"];
    let ok = false;
    const hostname = window.location.hostname;
    for (const h of allow_list) {
        if (hostname.endsWith(h)) {
            ok = true;
            break;
        }
    }
    if (!ok) {
        window.location.href = "https://www.kirito.info";
    }
});

// 随机排序
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}