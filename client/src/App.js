import React from 'react';

function App() {
  return (
    <>
      <div className="app">

        <header className="side-nav">
          <div className="brand">
            <i class="fa fa-twitter"></i>
            <div className="side-nav-contents">
              <i class="fa fa-home"></i>
            </div>
            <div className="side-nav-contents">
              <i class="fa fa-hashtag"></i>
            </div>
            <div className="side-nav-contents">
              <i class="fa fa-bell"></i>
            </div>
            <div className="side-nav-contents">
              <i class="fa fa-envelope"></i>
            </div>

            <div className="side-nav-contents">
              <i class="fa fa-bookmark"></i>
            </div>

            <div className="side-nav-contents">
              <i class="fa fa-user-circle"></i>
            </div>
          </div>
        </header>

        <div className="main">
          <h3>Home</h3>

        </div>

        <div className="search">
          <input type="text" placeholder="Search Twitter" />
        </div>

      </div>
    </>
  );
}

export default App;
