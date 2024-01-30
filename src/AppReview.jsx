import { useState } from "react";
import Review from "./components/Review";

const AppReview = () => {
  const [isFeedback, setIsFeedback] = useState("");
  const [isStudent, setIsStudent] = useState("");

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea
            value={isFeedback}
            onChange={(e) => setIsFeedback(e.target.value)}
          />
        </p>
        <p>
          <label>Your Name</label>
          <input
            type="text"
            value={isStudent}
            onChange={(e) => setIsStudent(e.target.value)}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
        <Review feedback={isFeedback} student={isStudent} />
        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
};

export default AppReview;
