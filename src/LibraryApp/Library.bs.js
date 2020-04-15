'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Book$ReasonReactExamples = require("./Book.bs.js");
var Hiring$ReasonReactExamples = require("./Hiring.bs.js");
var NotHiring$ReasonReactExamples = require("./NotHiring.bs.js");

function makeBookRecordFromBookData(bookData, freeBookmark) {
  return {
          title: bookData.title,
          author: bookData.author,
          pages: bookData.pages,
          freeBookmark: freeBookmark
        };
}

function makeArrayOfBookElementFromBooks(books, freeBookmark) {
  return Belt_List.toArray(Belt_List.mapWithIndex(books, (function (i, currentBook) {
                    return React.createElement(Book$ReasonReactExamples.make, {
                                book: makeBookRecordFromBookData(currentBook, freeBookmark)
                              });
                  })));
}

function Library(Props) {
  var books = Props.books;
  var match = React.useState((function () {
          return true;
        }));
  var setLibOpen = match[1];
  var match$1 = React.useState((function () {
          return true;
        }));
  var match$2 = React.useState((function () {
          return false;
        }));
  var setHiring = match$2[1];
  React.useState((function () {
          return false;
        }));
  return React.createElement("div", undefined, match$2[0] ? React.createElement(Hiring$ReasonReactExamples.make, { }) : React.createElement(NotHiring$ReasonReactExamples.make, { }), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setHiring, (function (prev) {
                                    return !prev;
                                  }));
                    })
                }, "Toggle hiring"), React.createElement("h1", undefined, "The Library is " + (
                  match[0] ? "open." : "closed."
                )), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setLibOpen, (function (prevState) {
                                    return !prevState;
                                  }));
                    })
                }, "Open/Close"), makeArrayOfBookElementFromBooks(books, match$1[0]));
}

var make = Library;

exports.makeBookRecordFromBookData = makeBookRecordFromBookData;
exports.makeArrayOfBookElementFromBooks = makeArrayOfBookElementFromBooks;
exports.make = make;
/* react Not a pure module */
