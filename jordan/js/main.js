var maxH = 230;
var maxW = 920;

// var margin = {top:12, bottom:40, left:25, right:80};
var margin = {top:12, bottom:35, left:35, right:35};
var height = maxH - margin.top - margin.bottom;
var width = maxW - margin.left - margin.right;

var buttons = d3.selectAll("button")
    .classed("button", true);

// ok  >
var parseTime = d3.timeParse("%Y");
var years = ["1988", "2017"];
var xScale = d3.scaleTime()
    .range([0, width])
    .domain(d3.extent(years, function(d) {
      return parseTime(d);
		}));

var yScale = d3.scaleLinear()
    .range([75, height]);

var xAxis = d3.axisBottom(xScale)
    .ticks(d3.timeYear)
    .tickPadding([5]);

var yAxis = d3.axisLeft(yScale)
    .scale(yScale)
// .orient("left")
    .ticks(5)
    .tickPadding([7]);
// ok  <

var line = d3.line()
    .x(function(d) { return xScale(parseTime(d.year)); })
    .y(function(d) { return yScale(d.price); });

// var svg = d3.select("#chart4")
var svg = d3.select(".main3")
    .append("svg")
      .attr("width", maxW)
      .attr("height", maxH)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
var tooltip = d3.select(".main3").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

//------------- MAIN FUNCTIONS ---------------
d3.queue()
    .defer(d3.csv,"data/jordan_031.csv")
    .defer(d3.csv,"data/jordan_032.csv")
    .defer(d3.csv,"data/jordan_033.csv")
    .defer(d3.csv,"data/jordan_034.csv")
    .defer(d3.csv,"data/jordan_041.csv")
    .defer(d3.csv,"data/jordan_042.csv")
    .defer(d3.csv,"data/jordan_043.csv")
    .defer(d3.csv,"data/jordan_044.csv")
    .defer(d3.csv,"data/jordan_051.csv")
    .defer(d3.csv,"data/jordan_052.csv")
    .defer(d3.csv,"data/jordan_053.csv")
    .defer(d3.csv,"data/jordan_054.csv")
    .defer(d3.csv,"data/jordan_061.csv")
    .defer(d3.csv,"data/jordan_062.csv")
    .defer(d3.csv,"data/jordan_063.csv")
    .defer(d3.csv,"data/jordan_064.csv")
    .defer(d3.csv,"data/jordan_065.csv")
    .defer(d3.csv,"data/jordan_071.csv")
    .defer(d3.csv,"data/jordan_072.csv")
    .defer(d3.csv,"data/jordan_073.csv")
    .defer(d3.csv,"data/jordan_074.csv")
    .defer(d3.csv,"data/jordan_081.csv")
    .defer(d3.csv,"data/jordan_082.csv")
    .defer(d3.csv,"data/jordan_083.csv")
    .defer(d3.csv,"data/jordan_091.csv")
    .defer(d3.csv,"data/jordan_092.csv")
    .defer(d3.csv,"data/jordan_093.csv")
    .defer(d3.csv,"data/jordan_094.csv")
    .defer(d3.csv,"data/jordan_101.csv")
    .defer(d3.csv,"data/jordan_102.csv")
    .defer(d3.csv,"data/jordan_103.csv")
    .defer(d3.csv,"data/jordan_104.csv")
    .defer(d3.csv,"data/jordan_111.csv")
    .defer(d3.csv,"data/jordan_112.csv")
    .defer(d3.csv,"data/jordan_113.csv")
    .defer(d3.csv,"data/jordan_114.csv")
    .defer(d3.csv,"data/jordan_121.csv")
    .defer(d3.csv,"data/jordan_122.csv")
    .defer(d3.csv,"data/jordan_123.csv")
    .defer(d3.csv,"data/jordan_124.csv")
    .defer(d3.csv,"data/jordan_125.csv")
    .defer(d3.csv,"data/jordan_131.csv")
    .defer(d3.csv,"data/jordan_132.csv")
    .defer(d3.csv,"data/jordan_133.csv")
    .defer(d3.csv,"data/jordan_134.csv")
    .defer(d3.csv,"data/jordan_135.csv")
    .defer(d3.csv,"data/jordan_141.csv")
    .defer(d3.csv,"data/jordan_142.csv")
    .defer(d3.csv,"data/jordan_143.csv")
    .defer(d3.csv,"data/jordan_144.csv")
    .defer(d3.csv,"data/jordan_145.csv")
    .defer(d3.csv,"data/jordan_151.csv")
    .defer(d3.csv,"data/jordan_152.csv")
    .defer(d3.csv,"data/jordan_153.csv")
    .defer(d3.csv,"data/jordan_154.csv")
    .await(drawLineChart);

window.onload  = function(e){
  ChangeSlide(3);
};

function ChangeSlide(number)
{
  for(i = 3;i <= 15; i++)
    {
      var slideID = "jo"+i;
      var buttonID = "group"+i;
      var imageID = "jo-main"+i;
      var chartID = "chart"+i;
      var vID = "jordan_0" + i + "1";
      var xID = "main2_2_" + i;

      if(i == number){
        document.getElementById(slideID).style.display = "block";
        document.getElementById(imageID).style.display = "block";
        document.getElementById(chartID).style.display = "block";
        document.getElementById(xID).style.display = "block";
        document.getElementById(buttonID).classList.add('selected');
      }
      else{
        document.getElementById(slideID).style.display = "none";
        document.getElementById(imageID).style.display = "none";
        document.getElementById(chartID).style.display = "none";
        document.getElementById(xID).style.display = "none";
        document.getElementById(buttonID).classList.remove('selected');
      }
  }
};

function drawLineChart(error, jordan_031, jordan_032, jordan_033, jordan_034, jordan_041, jordan_042, jordan_043, jordan_044, jordan_051, jordan_052, jordan_053, jordan_054, jordan_061, jordan_062, jordan_063, jordan_064, jordan_065, jordan_071, jordan_072, jordan_073, jordan_074, jordan_081, jordan_082, jordan_083, jordan_091, jordan_092, jordan_093, jordan_094, jordan_101, jordan_102, jordan_103, jordan_104, jordan_111, jordan_112, jordan_113, jordan_114, jordan_121, jordan_122, jordan_123, jordan_124, jordan_125, jordan_131, jordan_132, jordan_133, jordan_134, jordan_135, jordan_141, jordan_142, jordan_143, jordan_144, jordan_145, jordan_151, jordan_152, jordan_153, jordan_154) {
  if(error) { console.log(error); }
  // else {
  // d3.select("#jordan_031").classed("selected", true);
  // xScale.domain([d3.max(jordan_031, function(d) {
  //   return +d.year;
  // }), 0]);

  yScale.domain([d3.max(jordan_031, function(d, i) {
    return +d.price;
    return d.code;
  }), 0]);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg.append("g")
    .attr("class", "y axis")
    // .attr("transform", "translate(0,280)")
    .call(yAxis);

  redraw(jordan_031);
  redraw(jordan_031);

function redraw (data) {
  // yScale.domain([d3.max(data, function(d) {
  //   return +d.price;
  // }), 0]);

  var dataset = d3.nest()
    .key(function(d) { return d.code; })
    .sortValues(function (a, b) { return parseTime(a.year) - parseTime(b.year)})
    // .sortValues(function (a, b) { return parseTime(a.year) - parseTime(b.year)})
    .entries(data);

  // create grouping layer for individual line

  var groups = svg.selectAll("g.lines")
    .data(dataset, function(d){
      return d.key;
      return d.price;
    });

  groups.enter()
    .append("g")
    .attr("class", "lines");

  groups.exit()
    .remove();

  // create path for each line
  var lines = groups.selectAll("path.line")
    .data(function(d) {
      return [d.values];
      return d.price;
    });

  lines.enter()
    .append("path")
    .attr("d", line)
    .attr("class", "line")
    // .attr("color","black")
    .classed("unfocused", true); 

  lines.exit()
  //   .transition()
  //   .duration(1000)
    .remove();

  var circles = groups.selectAll("circle")
    .data(function(d) {
      return d.values;
    });

  circles.enter()
    .append("circle")
    .attr("r", 5)
    .classed("circle", true)
    .attr("z-index",0)
    // .style("opacity", 1);
    .attr("cx",function(d) {return xScale(parseTime(d.year));})
    .attr("cy", function(d) {return yScale(+d.price);});
    // .on("mouseover", function(d){
    //   // alert(d.price);
    //   tooltip.transition()
    //          .duration(200)
    //          .style("opacity", 0.9);
    //   tooltip.html("d.price")
    //      .style("left",(d3.event.pageX) + "px")
    //      .style("top",(d3.event.pageY - 10) + "px");
    // })
    // .on("mouseout", function(d){
    //   tooltip.transition()
    //      .duration(500)
    //      .style("opacity",0);
    // })
    
  circles.enter()
    .append("text")
    .attr("dx",function(d) {return xScale(parseTime(d.year))-13 ;})
    .attr("dy", function(d) {return yScale(+d.price) - 11;})
    .attr("color","black")
    .attr("z-index",1)
    .text(function(d){return "$"+d.price});

  // groups
  //   .on("mouseover", TIn)
  //   .on("mouseout", TOut);

//y axis transition
//  d3.select(".y.axis").transition().call(yAxis);

}

$(".about-cover").show();
$("#enter").remove;
$("#about").click(function(){
  $(".about-cover").fadeToggle();
  $("#enter").remove;
  // $(".about-cover").css({"opacity": "1"});
  $(this).text(function(i, text){
          return text === "SNEAKERS" ? "ABOUT" : "SNEAKERS";
      })
});

$("#enter").click(function(){
  // $(".about-cover").hide();
  $(".about-cover").fadeToggle();
  $("#enter .button").remove;
  // $(".about-cover").css({"opacity": "1"});
  $("#about").text(function(i, text){
          return text === "SNEAKERS" ? "ABOUT" : "SNEAKERS";
      })
});

d3.select("#group3").on("click", function(d, i) {
    redraw(jordan_031);
    redraw(jordan_031); 
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_031").classed("selected", true);
});
d3.select("#group4").on("click", function(d, i) {
    redraw(jordan_041);
    redraw(jordan_041); 
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_041").classed("selected", true);
});
d3.select("#group5").on("click", function(d, i) {
    redraw(jordan_051);
    redraw(jordan_051);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_051").classed("selected", true);
});
d3.select("#group6").on("click", function(d, i) {
    redraw(jordan_061);
    redraw(jordan_061);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_061").classed("selected", true);
});
d3.select("#group7").on("click", function(d, i) {
    redraw(jordan_071);
    redraw(jordan_071);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_071").classed("selected", true);
});
d3.select("#group8").on("click", function(d, i) {
    redraw(jordan_081);
    redraw(jordan_081);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_081").classed("selected", true);
});
d3.select("#group9").on("click", function(d, i) {
    redraw(jordan_091);
    redraw(jordan_091);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_091").classed("selected", true);
});
d3.select("#group10").on("click", function(d, i) {
    redraw(jordan_101);
    redraw(jordan_101);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_101").classed("selected", true);
});
d3.select("#group11").on("click", function(d, i) {
    redraw(jordan_111);
    redraw(jordan_111);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_111").classed("selected", true);
});
d3.select("#group12").on("click", function(d, i) {
    redraw(jordan_121);
    redraw(jordan_121);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_121").classed("selected", true);
});
d3.select("#group13").on("click", function(d, i) {
    redraw(jordan_131);
    redraw(jordan_131);    
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_131").classed("selected", true);
});
d3.select("#group14").on("click", function(d, i) {
    redraw(jordan_141);
    redraw(jordan_141);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_141").classed("selected", true);
});
d3.select("#group15").on("click", function(d, i) {
    redraw(jordan_151);
    redraw(jordan_151);
        d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select("#jordan_151").classed("selected", true);
});

////////3////////

  d3.select("#jordan_031").on("click", function(d, i) {
    redraw(jordan_031);
    document.getElementById("j3").src="img/a_031.png";
    document.getElementById("colorway_03").innerHTML = "<i><b>White Cement:</b> White / Cement Grey</i>";
    redraw(jordan_031);
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
  });

  d3.select("#jordan_032").on("click", function(d, i) {
    redraw(jordan_032); 
    document.getElementById("j3").src="img/a_032.png";
    document.getElementById("colorway_03").innerHTML = "<i><b>Black Cement:</b> Black / Cement Grey</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_032); 
  });

  d3.select("#jordan_033").on("click", function(d, i) {
    redraw(jordan_033);
    document.getElementById("j3").src="img/a_0333.png";
    document.getElementById("colorway_03").innerHTML = "<i><b>Fire Red:</b> White / Fire Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_033); 
  });

  d3.select("#jordan_034").on("click", function(d, i) {
    redraw(jordan_034); 
    document.getElementById("j3").src="img/a_034.png";
    document.getElementById("colorway_03").innerHTML = "<i><b>True Blue:</b> White / Cement Grey / True Blue</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_034); 
  });

////////4////////
  d3.select("#jordan_041").on("click", function(d, i) {
    redraw(jordan_041);
    document.getElementById("j4").src="img/a_041.png";
    document.getElementById("colorway_04").innerHTML = "<i><b>White Cement:</b> White / Black</i>";
    redraw(jordan_041);
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
  });

  d3.select("#jordan_042").on("click", function(d, i) {
    redraw(jordan_042); 
    document.getElementById("j4").src="img/a_042.png";
    document.getElementById("colorway_04").innerHTML = "<i><b>Black Cement:</b> Black / Cement Grey</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_042); 
  });

  d3.select("#jordan_043").on("click", function(d, i) {
    redraw(jordan_043); 
    document.getElementById("j4").src="img/a_044.png";
    document.getElementById("colorway_04").innerHTML = "<i><b>Fire Red:</b> White / Red / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_043); 
  });

  d3.select("#jordan_044").on("click", function(d, i) {
    redraw(jordan_044);
    document.getElementById("j4").src="img/a_043.png";
    document.getElementById("colorway_04").innerHTML = "<i><b>Military Blue:</b> Off White / Military Blue</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_044); 
  });

////////5////////

  d3.select("#jordan_051").on("click", function(d, i) {
    redraw(jordan_051);
    document.getElementById("j5").src="img/a_051.png";
    document.getElementById("colorway_05").innerHTML = "<i><b>Fire Red:</b> White / Black / Fire Red</i>";
    redraw(jordan_051);
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
  });

  d3.select("#jordan_052").on("click", function(d, i) {
    redraw(jordan_052); 
    document.getElementById("j5").src="img/a_052.png";
    document.getElementById("colorway_05").innerHTML = "<i><b>Metallic Silver:</b> Black / Metallic Silver</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_052); 
  });

  d3.select("#jordan_053").on("click", function(d, i) {
    redraw(jordan_053);
    document.getElementById("j5").src="img/a_053.png";
    document.getElementById("colorway_05").innerHTML = "<i><b>Grape:</b> White / Grape Ice / New Emerald</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_053); 
  });

  d3.select("#jordan_054").on("click", function(d, i) {
    redraw(jordan_054); 
    document.getElementById("j5").src="img/a_054.png";
    document.getElementById("colorway_05").innerHTML = "<i><b>Fire Red 23:</b> White / Red / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_054); 
  });

////////4////////
  d3.select("#jordan_061").on("click", function(d, i) {
    redraw(jordan_061);
    document.getElementById("j6").src="img/a_061.png";
    document.getElementById("colorway_06").innerHTML = "<i><b>White Infra Red:</b> White / Infra Red / Black</i>";
    redraw(jordan_061);
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
  });

  d3.select("#jordan_062").on("click", function(d, i) {
    redraw(jordan_062); 
    document.getElementById("j6").src="img/a_062.png";
    document.getElementById("colorway_06").innerHTML = "<i><b>Black Infrared:</b> Black / Infra Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_062); 
  });

  d3.select("#jordan_063").on("click", function(d, i) {
    redraw(jordan_063);
    document.getElementById("j6").src="img/a_063.png";
    document.getElementById("colorway_06").innerHTML = "<i><b>Sport Blue:</b> White / Sport Blue / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_063); 
  });

  d3.select("#jordan_064").on("click", function(d, i) {
    redraw(jordan_064); 
    document.getElementById("j6").src="img/a_064.png";
    document.getElementById("colorway_06").innerHTML = "<i><b>Maroon:</b> Off White / NW / Maroon</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_064); 
  });

  d3.select("#jordan_065").on("click", function(d, i) {
    redraw(jordan_065); 
    document.getElementById("j6").src="img/a_065.png";
    document.getElementById("colorway_06").innerHTML = "<i><b>Carmine:</b> White / Carmine / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_065); 
  });

////////7////////

  d3.select("#jordan_071").on("click", function(d, i) {
    redraw(jordan_071);
    document.getElementById("j7").src="img/a_071.png";
    document.getElementById("colorway_07").innerHTML = "<i><b>Olympic:</b> White / Midnight Navy / True Red</i>";
    redraw(jordan_071);
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
  });

  d3.select("#jordan_072").on("click", function(d, i) {
    redraw(jordan_072); 
    document.getElementById("j7").src="img/a_072.png";
    document.getElementById("colorway_07").innerHTML = "<i><b>Hare:</b> White / Light Silver / True Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_072); 
  });

  d3.select("#jordan_073").on("click", function(d, i) {
    redraw(jordan_073);
    document.getElementById("j7").src="img/a_073.png";
    document.getElementById("colorway_07").innerHTML = "<i><b>Bordeaux:</b> Black / Light Graphite / Bordeaux</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_073); 
  });

  d3.select("#jordan_074").on("click", function(d, i) {
    redraw(jordan_074); 
    document.getElementById("j7").src="img/a_074.png";
    document.getElementById("colorway_07").innerHTML = "<i><b>Raptor:</b> Black / Dark Charcoal / True Rede</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_074); 
  });

////////8////////
  d3.select("#jordan_081").on("click", function(d, i) {
    redraw(jordan_081);
    document.getElementById("j8").src="img/a_081.png";
    document.getElementById("colorway_08").innerHTML = "<i><b>Aqua:</b> Black / Bright Concord / Aqua Tone</i>";
    redraw(jordan_081);
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
  });

  d3.select("#jordan_082").on("click", function(d, i) {
    redraw(jordan_082); 
    document.getElementById("j8").src="img/a_082.png";
    document.getElementById("colorway_08").innerHTML = "<i><b>Bugs Bunny:</b> White / Black / True Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_082); 
  });

  d3.select("#jordan_083").on("click", function(d, i) {
    redraw(jordan_083);
    document.getElementById("j8").src="img/a_083.png";
    document.getElementById("colorway_08").innerHTML = "<i><b>Playoff:</b> Black / True Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_083); 
  });

////////9////////

  d3.select("#jordan_091").on("click", function(d, i) {
    redraw(jordan_091);
    document.getElementById("j9").src="img/a_091.png";
    document.getElementById("colorway_09").innerHTML = "<i><b>White Black Red:</b> White / Black / True Red</i>";
    redraw(jordan_091);
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
  });

  d3.select("#jordan_092").on("click", function(d, i) {
    redraw(jordan_092); 
    document.getElementById("j9").src="img/a_092.png";
    document.getElementById("colorway_09").innerHTML = "<i><b>Powder Blue:</b> White / Black / Dark Powder Blue</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_092); 
  });

  d3.select("#jordan_093").on("click", function(d, i) {
    redraw(jordan_093);
    document.getElementById("j9").src="img/a_093.png";
    document.getElementById("colorway_09").innerHTML = "<i><b>Olive:</b> Black / Light Olive / True Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_093); 
  });

  d3.select("#jordan_094").on("click", function(d, i) {
    redraw(jordan_094); 
    document.getElementById("j9").src="img/a_094.png";
    document.getElementById("colorway_09").innerHTML = "<i><b>Charcoal:</b> Black / Dark Charcoal / True Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_094); 
  });

////////10////////
  d3.select("#jordan_101").on("click", function(d, i) {
    redraw(jordan_101);
    document.getElementById("j10").src="img/a_101.png";
    document.getElementById("colorway_10").innerHTML = "<i><b>Steel:</b> White / Black / Light Steel Grey</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_101); 
  });

  d3.select("#jordan_102").on("click", function(d, i) {
    redraw(jordan_102); 
    document.getElementById("j10").src="img/a_102.png";
    document.getElementById("colorway_10").innerHTML = "<i><b>Powder:</b> White / Black / Dark Powder Blue</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_102); 
  });

  d3.select("#jordan_103").on("click", function(d, i) {
    redraw(jordan_103);
    document.getElementById("j10").src="img/a_103.png";
    document.getElementById("colorway_10").innerHTML = "<i><b>Shadow:</b> Black / Dark Shadow / True Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_103); 
  });

  d3.select("#jordan_104").on("click", function(d, i) {
    redraw(jordan_104); 
    document.getElementById("j10").src="img/a_104.png";
    document.getElementById("colorway_10").innerHTML = "<i><b>Chicago Bulls:</b> White / Black / True Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_104); 
  });

////////11////////
  d3.select("#jordan_111").on("click", function(d, i) {
    redraw(jordan_111);
    document.getElementById("j11").src="img/a_111.png";
    document.getElementById("colorway_11").innerHTML = "<i><b>Concord:</b> White / Columbia Blue / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_111); 
  });

  d3.select("#jordan_112").on("click", function(d, i) {
    redraw(jordan_112); 
    document.getElementById("j11").src="img/a_112.png";
    document.getElementById("colorway_11").innerHTML = "<i><b>Columbia:</b> White / Columbia Blue / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_112); 
  });

  d3.select("#jordan_113").on("click", function(d, i) {
    redraw(jordan_113);
    document.getElementById("j11").src="img/a_113.png";
    document.getElementById("colorway_11").innerHTML = "<i><b>Bred:</b> Black / True Red / White</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_113); 
  });

  d3.select("#jordan_114").on("click", function(d, i) {
    redraw(jordan_114); 
    document.getElementById("j11").src="img/a_114.png";
    document.getElementById("colorway_11").innerHTML = "<i><b>Space Jam:</b> Black / Varsity Royal / White</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_114); 
  });

////////12////////
  d3.select("#jordan_121").on("click", function(d, i) {
    redraw(jordan_121);
    document.getElementById("j12").src="img/a_121.png";
    document.getElementById("colorway_12").innerHTML = "<i><b>Taxi:</b> White / Black / Taxi</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_121); 
  });

  d3.select("#jordan_122").on("click", function(d, i) {
    redraw(jordan_122); 
    document.getElementById("j12").src="img/a_122.png";
    document.getElementById("colorway_12").innerHTML = "<i><b>White Red:</b> White / Varsity Red / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_122); 
  });

  d3.select("#jordan_123").on("click", function(d, i) {
    redraw(jordan_123);
    document.getElementById("j12").src="img/a_123.png";
    document.getElementById("colorway_12").innerHTML = "<i><b>Obsidian:</b> Obsidian / White / French Blue</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_123); 
  });

  d3.select("#jordan_124").on("click", function(d, i) {
    redraw(jordan_124); 
    document.getElementById("j12").src="img/a_124.png";
    document.getElementById("colorway_12").innerHTML = "<i><b>Bred:</b> Black / Varsity Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_124); 
  });

  d3.select("#jordan_125").on("click", function(d, i) {
    redraw(jordan_125); 
    document.getElementById("j12").src="img/a_125.png";
    document.getElementById("colorway_12").innerHTML = "<i><b>Playoff:</b> Black / Varsity Red / White / Metallic Silver</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_125); 
  });

////////13////////
  d3.select("#jordan_131").on("click", function(d, i) {
    redraw(jordan_131);
    document.getElementById("j13").src="img/a_131.png";
    document.getElementById("colorway_13").innerHTML = "<i><b>Black Toe:</b> White / True Red / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_131); 
  });

  d3.select("#jordan_132").on("click", function(d, i) {
    redraw(jordan_132); 
    document.getElementById("j13").src="img/a_132.png";
    document.getElementById("colorway_13").innerHTML = "<i><b>Playoff:</b> Black / True Red / White</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_132); 
  });

  d3.select("#jordan_133").on("click", function(d, i) {
    redraw(jordan_133);
    document.getElementById("j13").src="img/a_133.png";
    document.getElementById("colorway_13").innerHTML = "<i><b>Flint:</b> Navy / Carolina Blue / Flint Grey / White</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_133); 
  });

  d3.select("#jordan_134").on("click", function(d, i) {
    redraw(jordan_134); 
    document.getElementById("j13").src="img/a_134.png";
    document.getElementById("colorway_13").innerHTML = "<i><b>White Red:</b> White / Black / True Red / Pearl Grey</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_134); 
  });

  d3.select("#jordan_135").on("click", function(d, i) {
    redraw(jordan_135); 
    document.getElementById("j13").src="img/a_135.png";
    document.getElementById("colorway_13").innerHTML = "<i><b>Bred:</b> Black / Varsity Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_135); 
  });

////////14////////
  d3.select("#jordan_141").on("click", function(d, i) {
    redraw(jordan_141);
    document.getElementById("j14").src="img/a_141.png";
    document.getElementById("colorway_14").innerHTML = "<i><b>Black Toe:</b> White / Black / Varsity Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_141); 
  });

  d3.select("#jordan_142").on("click", function(d, i) {
    redraw(jordan_142); 
    document.getElementById("j14").src="img/a_142.png";
    document.getElementById("colorway_14").innerHTML = "<i><b>Candy Cane:</b> White / Black / Varsity Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_142); 
  });

  d3.select("#jordan_143").on("click", function(d, i) {
    redraw(jordan_143);
    document.getElementById("j14").src="img/a_143.png";
    document.getElementById("colorway_14").innerHTML = "<i><b>Oxy:</b> White / Black / Oxidized Green</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_143); 
  });

  d3.select("#jordan_144").on("click", function(d, i) {
    redraw(jordan_144); 
    document.getElementById("j14").src="img/a_144.png";
    document.getElementById("colorway_14").innerHTML = "<i><b>Bred:</b> Black / Varsity Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_144); 
  });

  d3.select("#jordan_145").on("click", function(d, i) {
    redraw(jordan_145); 
    document.getElementById("j14").src="img/a_145.png";
    document.getElementById("colorway_14").innerHTML = "<i><b>Indiglo:</b> Black / White / Indiglo</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_145); 
  });

////////15////////
  d3.select("#jordan_151").on("click", function(d, i) {
    redraw(jordan_151);
    document.getElementById("j15").src="img/a_151.png";
    document.getElementById("colorway_15").innerHTML = "<i><b>Stealth:</b> Black / Varsity Red</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_151); 
  });

  d3.select("#jordan_152").on("click", function(d, i) {
    redraw(jordan_152); 
    document.getElementById("j15").src="img/a_152.png";
    document.getElementById("colorway_15").innerHTML = "<i><b>Columbia Blue:</b> White / Columbia Blue / Black</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_152); 
  });

  d3.select("#jordan_153").on("click", function(d, i) {
    redraw(jordan_153);
    document.getElementById("j15").src="img/a_153.png";
    document.getElementById("colorway_15").innerHTML = "<i><b>Flint Grey:</b> Flint Grey / White</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_153); 
  });

  d3.select("#jordan_154").on("click", function(d, i) {
    redraw(jordan_154);
    document.getElementById("j15").src="img/a_154.png";
    document.getElementById("colorway_15").innerHTML = "<i><b>Obsidian:</b> Obsidian / White / Metallic Silver</i>";
    d3.selectAll(".main2_2 .button").classed("selected", false);
    d3.select(this).classed("selected", true);
    redraw(jordan_154); 
  });

}

// end of function redraw()
//
function mouseoverFunc(d) {
  d3.select(this)
  .transition()
  .style("opacity", 1)
  .attr("r", 10);

  tooltip
  .style("display", null)
  .html("<p>$<span style='color:black'>" + d.price +"</span>"+ "</p>");
  // .html("<p>$ <span style='color:#fff'>" + d.nick +"</span>" + "<br>Year: <span style='color:#fff'>" + d.year +"</span>" + "<br>Price: $<span style='color:#fff'> " + d.price + "</span>" + "</p>");
}

function mousemoveFunc(d) {
  console.log(d3.event.pageX, d3.event.pageY);
  tooltip.style("top", (d3.event.pageY - 90) + "px" )
        .style("left", (d3.event.pageX) + "px");
}

function mouseoutFunc(d) {
  d3.select(this)
    .transition()
    .style("opacity", 0)
    .attr("r", 10);
    tooltip.style();
}

function TIn(d) {
  d3.select(this).select("path")
    .classed("unfocused", false)
    .classed("focused", true);
    d3.select(this).select("text.label")
    .attr("id", "highlight");
}

function TOut(d) {
  d3.select(this).select("path")
    .classed("unfocused", true)
    .classed("focused", false);
    d3.select(this).select("text.label")
    .attr("id",null);
}
