type libraryData = list(Data.bookData);

type libraryState = {
  libOpen: bool,
  freeBookmark: bool,
  hiring: bool,
  data: list(Js.Json.t),
  loading: bool,
};

let makeBookRecordFromBookData = (~bookData: Data.bookData, ~freeBookmark) => {
  let book: Book.book = {
    title: bookData.title,
    author: bookData.author,
    pages: bookData.pages,
    freeBookmark,
  };
  book;
};

let makeArrayOfBookElementFromBooks = (books: libraryData) => {
  books
  ->Belt.List.mapWithIndex((i, currentBook) => {
      <Book book={makeBookRecordFromBookData(currentBook, false)} />
    })
  ->Belt.List.toArray;
};

[@react.component]
let make = (~books: libraryData) => {
  <div>

      <h1> {React.string("The Library is open")} </h1>
      <button> {React.string("Open/Close")} </button>
      <h1> {React.string("The Library is open")} </h1>
      {makeArrayOfBookElementFromBooks(books)->React.array}
    </div>;
    // })
    //     base;
    //     };
    //         loading: false
    //         data: [],
    //         hiring: false,
    //         freeBookmark: true,
    //         libOpen: true,
    //     let base = {
    // let (myState, setState) = React.useState(() => {
};
