import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../features/goal/goalSlice";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You Have not Set Any Goal</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
