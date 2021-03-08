var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Where We Work</title>
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
            <div className="flex-container">
              <div className="leftRedBox">
                <h2 style={{marginTop: '15px'}}>WHERE WE WORK</h2>
                <hr />
                <p>United States</p>
                <p>International</p>
                <img src="https://cdn7.dissolve.com/p/D1061_16_389/D1061_16_389_1200.jpg" alt="Man Computer" className="center" />
                <p style={{marginTop: '15px'}}><strong>Career Opportunties</strong></p>
                <p>Join our magnificent firm.</p>
              </div>
              <div className="rightTextBox">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odit harum molestiae
                  assumenda
                  in.
                  Fugiat minima aperiam quo maxime eveniet, tenetur minus nesciunt ipsa culpa. Aliquam
                  odit
                  similique
                  soluta doloremque voluptatem placeat dicta, facilis modi quae saepe rerum, recusandae
                  accusantium
                  esse illum neque officiis veniam et. Repellendus autem fugiat repudiandae fuga eaque
                  minima eius
                  similique? Cumque sint tenetur sunt, culpa eos molestias eum obcaecati, dolorem,
                  deserunt
                  distinctio
                  aliquam! Magnam unde eos quaerat ut similique praesentium ex, atque quis quisquam amet
                  sapiente,
                  fugit ullam in blanditiis, alias at nobis enim aut odio facere? Sunt fugiat fuga harum,
                  ad
                  doloribus
                  minima, omnis, eligendi amet nisi recusandae accusamus iure doloremque repudiandae
                  laudantium
                  tempore iusto. Deleniti ex corrupti nihil dolore, officiis ullam ratione asperiores!
                </p>
                <div className="row2">
                  <div className="column left">
                    <h6>United States</h6>
                    <hr />
                    <div className="col-left">
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                      <span>State</span>
                    </div>
                  </div>
                  <div className="column right">
                    <h6>International</h6>
                    <hr />
                    <div className="col-right">
                      <p>Canada</p>
                      <p>Columbia</p>
                      <p>Germany</p>
                      <p>Nicaragua</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <div className="container">
              </div>
              <div className="footer-container">
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
        </div>
      );
    }
  }); 