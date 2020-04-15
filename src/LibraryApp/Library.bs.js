'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Book$ReasonReactExamples = require("./Book.bs.js");

function makeBookRecordFromBookData(bookData, freeBookmark) {
  return {
          title: bookData.title,
          author: bookData.author,
          pages: bookData.pages,
          freeBookmark: freeBookmark
        };
}

function makeArrayOfBookElementFromBooks(books) {
  return Belt_List.toArray(Belt_List.mapWithIndex(books, (function (i, currentBook) {
                    return React.createElement(Book$ReasonReactExamples.make, {
                                book: makeBookRecordFromBookData(currentBook, false)
                              });
                  })));
}

function Library(Props) {
  var books = Props.books;
  return React.createElement("div", undefined, React.createElement("h1", undefined, "The Library is open"), React.createElement("button", undefined, "Open/Close"), React.createElement("h1", undefined, "The Library is open"), makeArrayOfBookElementFromBooks(books));
}

var make = Library;

exports.makeBookRecordFromBookData = makeBookRecordFromBookData;
exports.makeArrayOfBookElementFromBooks = makeArrayOfBookElementFromBooks;
exports.make = make;
/* react Not a pure module */
