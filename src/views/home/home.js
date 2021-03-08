var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Who We Are</title>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.css" />
          <link rel="stylesheet" href="./static/style.css" />
          <div className="page-container">
            <header>
              <div className="container">
                <button id="login-butt" type="button" className="btn btn-secondary">Log in</button>
                <br /><br /><br />
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <img src="https://via.placeholder.com/300x75?text=Company Logo" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="nav-border">
                    <div className="centerTop">
                      <ul>
                        <li><a href="/index.html" className="active">WHO WE ARE</a></li>
                        <li><a href="/what-we-do.html">WHAT WE DO</a></li>
                        <li><a href="#events">NEWS &amp; EVENTS</a></li>
                        <li><a href="/where_we_work.html">WHERE WE WORK</a></li>
                        <li><a href="/contact.html">CONTACT US</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="container">
              <div style={{marginTop: '20px'}} className="row">
                <div className="col-md-8">
                  <div className="dsecondborder" id="dleftcontainer">
                    <div className="dleftpane">
                      <a style={{}} href>
                        <img style={{width: '688px', height: 432}} src="https://images4.fanpop.com/image/photos/19500000/Very-Green-Forest-green-19511297-950-632.jpg" alt="" />
                      </a> <br />
                    </div>
                  </div>
                  <div className="container">
                    <div style={{border: 'none', marginTop: '5%'}} className="dleftpane">
                      <h4>Welcome to our Website!</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, quis quidem sunt suscipit doloribus quo dolorum 
                        laborum molestias accusantium blanditiis.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container">
                    <div className="drightpane">
                      <h3>News feed</h3>
                      <hr style={{backgroundColor: '#fff'}} />
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Saepe nam necessitatibus magni, laboriosam tempore id
                        delectus animi minima nisi sapiente error eveniet eos, non,
                        incidunt debitis distinctio suscipit? Beatae, adipisci?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Saepe nam necessitatibus magni, laboriosam tempore id
                        delectus animi minima nisi sapiente error eveniet eos, non,
                        incidunt debitis distinctio suscipit? Beatae, adipisci?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque ab, fuga totam ratione
                        adipisci
                        voluptas, quae natus dicta id at sunt iure officiis excepturi soluta tempore ducimus quam aliquam.
                      </p>
                    </div>
                    <div className="dbottomrightpane">
                      <h5>Bigshot, Zoo, &amp; Adds, P.C.</h5>
                      <p>419 West South Street, Suite 4200<br />
                        Houston, Texas 35983 <br />
                        555-555-5555 (Phone) <br />
                        555-555-5555 (fax) </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer>
              <div className="container">
                <hr className="col-md-12" />
                <div className="row">
                  <div className="col-lg-12 offset-lg-1">
                    <div className="bottom-text">
                      <span><a href="/what-we-do.html" title style={{margin: '2%'}}>WHAT WE DO</a></span>
                      <span><a href title style={{margin: '2%'}}>NEWS &amp; EVENTS</a></span>
                      <span><a href="/where_we_work.html" title style={{margin: '2%'}}>WHERE WE WORK</a></span>
                      <span><a href="/contact.html" title style={{margin: '2%'}}>CONTACT US</a></span>
                      <span><a href="/index.html" title style={{margin: '2%'}}>WHO WE ARE</a></span>
                    </div>
                  </div>
                </div>
              </div></footer>
          </div>
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
      );
    }
  });