'use strict';

var React = require("react");

function Book(Props) {
  var param = Props.book;
  return React.createElement("section", undefined, React.createElement("h2", undefined, param.title), React.createElement("p", undefined, "by:" + param.author), React.createElement("p", undefined, "Pages: " + (String(param.pages) + " pages")), React.createElement("p", undefined, "Free Bookmark Today: " + (
                  param.freeBookmark ? "Yayyy!" : "Nah blud!"
                )));
}

var make = Book;

exports.make = make;
/* react Not a pure module */
