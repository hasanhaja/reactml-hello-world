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
                                book: makeBookRecordFromBookData(currentBook, freeBookmark),
                                key: String(i)
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
  var match$3 = React.useState((function () {
          return true;
        }));
  var setLoading = match$3[1];
  var match$4 = React.useState((function () {
          return /* [] */0;
        }));
  var setData = match$4[1];
  React.useEffect((function () {
          console.log("Using effect");
          fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1").then((function (data) {
                    return data.json();
                  })).then((function (data) {
                  Curry._1(setData, (function (param) {
                          return data;
                        }));
                  Curry._1(setLoading, (function (param) {
                          return false;
                        }));
                  return Promise.resolve(/* () */0);
                }));
          return ;
        }), ([]));
  return React.createElement("div", undefined, match$2[0] ? React.createElement(Hiring$ReasonReactExamples.make, { }) : React.createElement(NotHiring$ReasonReactExamples.make, { }), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setHiring, (function (prev) {
                                    return !prev;
                                  }));
                    })
                }, "Toggle hiring"), React.createElement("div", undefined, match$3[0] ? React.createElement("h3", undefined, "Loading...") : React.createElement("h3", undefined, Belt_List.toArray(Belt_List.map(match$4[0], (function (product) {
                                  return React.createElement("div", {
                                              key: product.id
                                            }, React.createElement("h3", undefined, "Library product of the week"), React.createElement("h4", undefined, product.name), React.createElement("img", {
                                                  height: String(100),
                                                  src: product.image
                                                }), React.createElement("h4", undefined, "$" + String(product.price)));
                                }))))), React.createElement("h1", undefined, "The Library is " + (
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
