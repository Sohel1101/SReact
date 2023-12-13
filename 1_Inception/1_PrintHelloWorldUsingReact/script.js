const heading = React.createElement
("h1",
{id:"heading"},                 // this is used to create attributes
 "Hello World from React");    // this is a children

 console.log(heading);    // heading is a react element means js object.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);       // render method converts heading(react element) into h1 tag and put it on DOM.