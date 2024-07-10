import "./Maintainers.css";

const Maintainers = (props) => {
  const { maintainers } = props;
  return (
    <div className="maintainers">
      <h3 className="maintainers_title">Maintainers</h3>
      <ul className="maintainers_list">
        {maintainers.map((maintainer, index) => (
          <li className="maintainers_list_item" key={"maintainer-" + index}>
            {" "}
            <p className="maintainers_list_item_name">{maintainer.name}</p>{" "}
            <span>-</span>
            <p className="maintainers_list_item_email">
              {maintainer.email}
            </p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Maintainers;
