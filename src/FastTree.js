import React, { useState } from "react";

function CheckBox({ comment, onSelectAllClick }) {
  const nestedComments = (comment.children || []).map(comment => {
    return (
      <CheckBox
        type="child"
        id={comment.id}
        key={comment.id}
        onSelectAllClick={onSelectAllClick}
        comment={comment}
      />
    );
  });

  return (
    <div style={{ marginLeft: "15px", marginTop: "10px" }}>
      <label>
        <input
          type="checkbox"
          id={comment.id}
          checked={comment.checked}
          onChange={onSelectAllClick}
        />{" "}
        {comment.id} {comment.text}
      </label>
      {nestedComments}
    </div>
  );
}

const FastTree = props => {
  const [checkedItems, setCheckedItems] = useState(props.items);

  const handleClick = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.id]: event.target.checked
    });
  };

  return (
    <div>
      {props.items.map(item => {
        return (
          <CheckBox
            key={item.id}
            id={item.id}
            checked={checkedItems[item.checked]}
            label={item.text}
            children={item.children}
            onSelectAllClick={handleClick}
            comment={item}
          />
        );
      })}
    </div>
  );
};

export default FastTree;
