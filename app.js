const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React IS rendered"),
    React.createElement(
      Person,
      { name: "Bryan", occupation: "developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Andrei", occupation: "developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Yihua", occupation: "developer" },
      null
    ),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
