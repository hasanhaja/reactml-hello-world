'use strict';

var React = require("react");

function NotHiring(Props) {
  return React.createElement("div", undefined, React.createElement("p", undefined, "The library is not hiring. Check back later on www.library.com/jobs for\n      more."));
}

var make = NotHiring;

exports.make = make;
/* react Not a pure module */
