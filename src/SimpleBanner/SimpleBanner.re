[@react.component]
let make = () => {
  let style = {
    ReactDOMRe.Style.make(~color="teal", ~fontFamily="cursive", ());
  };
  <h1 style> {React.string("This is my banner text")} </h1>;
};
