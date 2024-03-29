var drawGrap = function(){
    d3.csv("data.csv", function(error, data){
		console.log(data)
		// create an empty object that nv is expecting
    var exampleData = [
    	{
    		key: "totals",
    		values: []
    	}
    ];

        // populate the empty object with your data
    data.forEach(function (d){
    	d.value = +d.value
    	exampleData[0].values.push(d)
    })       

 	nv.addGraph(function() {
		
   		var chart = nv.models.discreteBarChart()
       		.x(function (d) { console.log(d); return d.label })
       		.y(function (d) { return d.value })
       		.staggerLabels(true)
       		.tooltips(false)
       		.showValues(true)
 
 	  	d3.select('#chart')
    			.datum(exampleData)
    			.attr("id", function (d) { console.log(d); })
    		.transition().duration(500)
       			.call(chart);
 
   		nv.utils.windowResize(chart.update);
   		return chart;
 	});

 });        
}
function loadGraps(){
    console.log('draw grap');
    drawGrap();
    //drawGrap2();       

}