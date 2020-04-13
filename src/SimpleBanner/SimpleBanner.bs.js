'use strict';

var React = require("react");

function SimpleBanner(Props) {
  var style = {
    color: "teal",
    fontFamily: "cursive"
  };
  return React.createElement("h1", {
              style: style
            }, "This is my banner text");
}

var make = SimpleBanner;

exports.make = make;
/* react Not a pure module */
