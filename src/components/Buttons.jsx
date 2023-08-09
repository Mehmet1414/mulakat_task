const Button = [
  {
    button: "h1",
    tagS: "<h1>",
    tagE: "</h1>",
  },
  {
    button: "h3",
    tagS: "<h3>",
    tagE: "</h3>",
  },
  {
    button: "p",
    tagS: "<p>",
    tagE: "</p>",
  },
  {
    button: "b",
    tagS: "<b>",
    tagE: "</b>",
  },
  {
    button: "u",
    tagS: "<u>",
    tagE: "</u>",
  },
  {
    button: "i",
    tagS: "<i>",
    tagE: "</i>",
  },
];
const Buttons = ({ wrapTextWithTag }) => {
  return (
    <div className="container">
      <div className="btn_container">
        {Button.map((item) => (
          <button
            onClick={() => {
              wrapTextWithTag(item.tagS, item.tagE);
            }}
            className="btn"
            key={item.id}
          >
            {item.button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
