type book = {
  title: string,
  author: string,
  pages: int,
  freeBookmark: bool,
};

// Todo: Implement missing data by changing book to hold option types.
[@react.component]
let make = (~book as {title, author, pages, freeBookmark}) =>
  /**
   * Todo: Implement logic for missing data
   */
  {
    <section>
      <h2> {React.string(title)} </h2>
      <p> {React.string("by:" ++ author)} </p>
      <p>
        {React.string("Pages: " ++ Belt.Int.toString(pages) ++ " pages")}
      </p>
      <p>
        {React.string(
           "Free Bookmark Today: " ++ (freeBookmark ? "Yayyy!" : "Nah blud!"),
         )}
      </p>
    </section>;
  };
