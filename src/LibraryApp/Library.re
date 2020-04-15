type libraryData = list(Data.bookData);

let makeBookRecordFromBookData = (~bookData: Data.bookData, ~freeBookmark) => {
  let book: Book.book = {
    title: bookData.title,
    author: bookData.author,
    pages: bookData.pages,
    freeBookmark,
  };
  book;
};

let makeArrayOfBookElementFromBooks = (~books: libraryData, ~freeBookmark) => {
  books
  ->Belt.List.mapWithIndex((i, currentBook) => {
      <Book book={makeBookRecordFromBookData(currentBook, freeBookmark)} />
    })
  ->Belt.List.toArray;
};

[@react.component]
let make = (~books: libraryData) => {
  let (libOpen, setLibOpen) = React.useState(() => true);
  let (freeBookmark, setFreeBookmark) = React.useState(() => true);
  let (hiring, setHiring) = React.useState(() => false);
  let (loading, setLoading) = React.useState(() => false);

  <div>
    {hiring ? <Hiring /> : <NotHiring />}
    <button onClick={_ => setHiring(prev => !prev)}>
      {React.string("Toggle hiring")}
    </button>
    <h1>
      {React.string("The Library is " ++ (libOpen ? "open." : "closed."))}
    </h1>
    <button onClick={_ => setLibOpen(prevState => !prevState)}>
      {React.string("Open/Close")}
    </button>
    {makeArrayOfBookElementFromBooks(books, freeBookmark)->React.array}
  </div>;
};
