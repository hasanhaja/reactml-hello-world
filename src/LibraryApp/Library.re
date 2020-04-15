[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

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
      <Book
        key={string_of_int(i)}
        book={makeBookRecordFromBookData(currentBook, freeBookmark)}
      />
    })
  ->Belt.List.toArray;
};

[@react.component]
let make = (~books: libraryData) => {
  let (libOpen, setLibOpen) = React.useState(() => true);
  let (freeBookmark, setFreeBookmark) = React.useState(() => true);
  let (hiring, setHiring) = React.useState(() => false);
  let (loading, setLoading) = React.useState(() => true);
  let (data, setData) = React.useState(() => []);

  React.useEffect0(() => {
    Js.log("Using effect");

    Js.Promise.(
      fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      |> then_(data => data##json())
      |> then_(data => {
           setData(_ => data);
           setLoading(_ => false);
           Js.Promise.resolve();
         })
      |> ignore
    );

    None;
  });

  <div>
    {hiring ? <Hiring /> : <NotHiring />}
    <button onClick={_ => setHiring(prev => !prev)}>
      {React.string("Toggle hiring")}
    </button>
    <div>
      {loading
         ? <h3> {React.string("Loading...")} </h3>
         : <h3>
             {data
              ->Belt.List.map(product =>
                  <div key={product##id}>
                    <h3> {React.string("Library product of the week")} </h3>
                    <h4> {product##name} </h4>
                    <img src={product##image} height={string_of_int(100)} />
                    <h4>
                      {React.string("$" ++ string_of_int(product##price))}
                    </h4>
                  </div>
                )
              ->Belt.List.toArray
              ->React.array}
           </h3>}
    </div>
    <h1>
      {React.string("The Library is " ++ (libOpen ? "open." : "closed."))}
    </h1>
    <button onClick={_ => setLibOpen(prevState => !prevState)}>
      {React.string("Open/Close")}
    </button>
    {makeArrayOfBookElementFromBooks(books, freeBookmark)->React.array}
  </div>;
};
