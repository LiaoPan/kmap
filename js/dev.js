// development testing script - not used for library

/*global require, KMap*/
require(["main"], function(KMap){
  // create the model and pass it into the views
  var graphModel = new KMap.GraphModel(),
      graphView = new KMap.GraphView({model: graphModel}),
      graphListView = new KMap.GraphListView({model: graphModel});

  // fetch some graph data
  $.getJSON("/data/demo_kmap.json",
    function (data) {
      // add the data to the graph model
      graphModel.addJsonNodesToGraph(data);

      // set the graph placement (don't use if "x" and "y" are specified in the data)
      graphView.optimizeGraphPlacement(false, false);

      // render the views
      graphView.render();
      graphListView.render();

      // insert them into the html
      $("#explore-graph-view-wrapper").append(graphView.$el);
      $("#concept-list-wrapper").append(graphListView.$el);
    });

  // add the data to the graph model


  // render the views and insert them in a desired location

});
