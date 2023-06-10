import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goal/goalSlice";

function GoalItem({ goal }) {
  const handleDelete = () => {
    dispatch(deleteGoal(goal._id));
  };
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      {
        <button onClick={handleDelete} className="close">
          X
        </button>
      }
    </div>
  );
}

export default GoalItem;
