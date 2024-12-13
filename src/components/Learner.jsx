import React from "react";
import Score from "./Score";

function Learner({ learner }) {
  return (
    <div className="learner">
      <h2>{learner.name}</h2>
      <p>
        <strong>Bio:</strong> {learner.bio}
      </p>

      <h3 style={{ color: "coral" }}>Scores:</h3>
      <div className="scores">
        {learner.scores.map((score) => (
          <Score key={score.date} score={score} />
        ))}
      </div>
    </div>
  );
}

export default Learner;
