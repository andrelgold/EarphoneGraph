let DIR = "data/";
// Get data (as a list of [x,y] pairs) from an FR file
let tsvParse = fr => d3.tsvParseRows(fr).slice(2,482);

// Add a watermark to the graph.
function watermark(svg) {
    var wm = svg.append("g")
        .attr("transform", "translate("+(pad.l+W/2)+","+(pad.t+H/2-20)+")")
        .attr("opacity",0.1);
    wm.append("image")
        .attrs({x:-64, y:-64, width:128, height:128, "xlink:href":"https://crinacle.com/wp-content/uploads/2019/01/avatardiao2xredditsafe.png"});
    wm.append("text")
        .attrs({x:0, y:100, "font-size":36, "text-anchor":"middle"})
        .text("crinacle.com/graphs");
}