var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          /
          <title>What We Do</title>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.css" />
          <link rel="stylesheet" href="./static/what-we-do.css" />
          <link rel="stylesheet" href="./static/style.css" />
          <div className="page-container2">
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
            <main>
              <div className="container">
                <div style={{marginTop: '20px'}} className="row">
                  <div className="col-md-3">
                    <section>
                      <div className="section-container">
                        <div className="container1">
                          <h5>WHAT WE DO</h5>
                        </div>
                        <hr className="divider" />
                        <div className="container">
                          <h6>Subrogation</h6>
                          <ul>
                            <li>Property</li>
                            <li>Workers' Comp</li>
                          </ul>
                        </div>
                        <div className="container">
                          <h6>Litigation</h6>
                          <ul>
                            <li>Appeliate</li>
                            <li>Commercial</li>
                            <li>Defense</li>
                            <li>Labor/Employment</li>
                          </ul>
                        </div>
                        <div className="container">
                          <h6>Business</h6>
                          <ul>
                            <li>Brokerage Agreement</li>
                            <li>Business Formation</li>
                            <li>Contracts</li>
                            <li>Property</li>
                            <li>Labor/Employment</li>
                          </ul>
                        </div>
                        <div className="container">
                          <h6>Transportation</h6>
                          <ul>
                            <li>Brokerage Agreement</li>
                            <li>Business Formation</li>
                          </ul>
                        </div>
                        <div className="text-center container-fluid">
                          <img src="./static/images/Chairs.png" style={{width: '180px', height: '130px'}} alt="" />
                        </div>
                        <div className="container1">
                          <h6>Attorneys</h6>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-md-9">
                    <article>
                      <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                          Reprehenderit libero non laborum blanditiis ipsum? Doloremque,
                          ad reprehenderit eum voluptatem excepturi odio at aliquam et
                          impedit repellendus. Illum ad adipisci fugit? Lorem ipsum dolor,
                          sit amet consectetur adipisicing elit. Impedit quibusdam repudiandae
                          minus mollitia alias. Aut molestias hic voluptate magnam ex sunt
                          incidunt saepe eaque consectetur, fugit dicta fugiat exercitationem
                          voluptas.</p>
                      </div>
                    </article>
                    <div className="container2">
                      <div className="image"><img src="./static/images/Subrogation.png" style={{width: '320px', height: '150px'}} alt="" />
                      </div>
                      <div className="image"><img src="./static/images/Litigation.png" style={{width: '320px', height: '150px'}} alt="" />
                      </div>
                      <div className="image"><img src="./static/images/Transportation.png" style={{width: '320px', height: '150px'}} alt="" /></div>
                      <div className="image"><img src="./static/images/Business.png" style={{width: '320px', height: '150px'}} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer>
              <div className="container">
                <hr className="col-md-12" />
              </div>
              <div className="container">
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
              </div>
            </footer>
          </div>
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
      );
    }
  });