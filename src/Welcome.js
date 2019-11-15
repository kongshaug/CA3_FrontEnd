import React from "react";

function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>How to use this Quick-Start Project</h3>
      <h4>Running this react-app on your computer</h4>
      <p>1. Download the React project</p>
      <p>2. Open terminal in the root-folder, and run "npm install"</p>
      <p>3. Run "npm install react-router-dom"</p>
      <p>4. start the react-app by running "npm start"</p>
      <br />
      <h4>Setting up fetch to your own api</h4>
      <p>1. Go to Settings.js, and change the URL to your own URL</p>
      <p>
        2. Edit the function "getQuotes" in the apiFacade to fetch from the
        desired endpoint
      </p>
      <p>
        3. Edit the file Quote.js to rend the table with the right attributes
      </p>
      <p>4. Go to the App.js and change the headers</p>
      <p>
        5. If any changes or additions to the user or admin page is desired, go
        to user.js or admin.js
      </p>
    </div>
  );
}

export default Welcome;
