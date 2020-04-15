'use strict';

var React = require("react");

function Hiring(Props) {
  return React.createElement("div", undefined, React.createElement("p", undefined, "The library is hiring. Visit www.library.com/jobs for more."));
}

var make = Hiring;

exports.make = make;
/* react Not a pure module */
