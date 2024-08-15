import React, { useState } from "react";
import { scroller } from "react-scroll";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleButtonClick = async (path) => {
    setLoading(true);
    setCompleted(false);

    try {
      const response = await fetch("http://localhost:5000/run-automation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Automation script executed:", data);
        setCompleted(true);
      } else {
        console.error("Error executing automation script");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  const scrollToNextSection = () => {
    scroller.scrollTo("more-section", {
      duration: 800,
      delay: 100,
      smooth: "easeInOutQuart",
      offset: 10,
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
        <h1 className="text-4xl font-bold mb-8 text-primary">Tic-Tac-Toe</h1>
        {!completed && (
          <button
            onClick={() =>
              handleButtonClick("C:\\Users\\P10\\Documents\\Project\\Test_app")
            }
            disabled={loading}
            className={`px-6 py-3 text-lg ${
              loading ? "bg-gray-400" : "bg-blue-500"
            } text-white rounded`}
          >
            {loading ? <div className="loader"></div> : "Run Automation"}
          </button>
        )}
        {completed && (
          <div className="text-2xl text-primary">
            <div className="tick-icon">&#10003;</div> {/* Checkmark icon */}
            <p>Automation Script Completed!</p>
            <button
              onClick={scrollToNextSection}
              className="mt-6 px-6 glow-on-hover py-3 text-lg bg-blue-500 text-white rounded"
            >
              Go to Next Section
            </button>
          </div>
        )}
      </div>
      <div id="more-section" className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
        <h1 className="text-4xl font-bold mb-8 text-second">OLAS Jobs</h1>
        <button
          onClick={() => handleButtonClick("C:\\Users\\P10\\Desktop\\nikhil\\internship\\Learning\\June\\Week_4\\OLAS_2")}
          className="mt-6 px-6 glow-on-hover py-3 text-lg bg-white-500 text-white rounded"
        >
          Run Automation
        </button>
      </div>
      <div id="additional-section" className="circle-container">
  <div className="circle-wrapper">
  <h1 className="text-4xl font-bold mb-8 text-primary centered-text">
  <span className="word">More</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <span className="smaller-text">Coming</span>&nbsp;&nbsp;&nbsp;&nbsp;
  <span className="word">Soon</span>
</h1>

    <div className="buttons-container">
      {/* Floating Buttons */}
      <button className="floating-button">Amazon</button>
      <button className="floating-button">My<br/>Shop</button>
      <button className="floating-button">Allegiant</button>
      <button className="floating-button">Postman</button>
      <button className="floating-button">Rest<br/>Assured</button>
      <button className="floating-button">Orange<br/>HRM</button>
      <button className="floating-button">Jmeter</button>
      <button className="floating-button">Mobile</button>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
