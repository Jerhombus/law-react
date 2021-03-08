var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Contact Us</title>
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
            <div style={{marginTop: '20px'}} className="container">
              <div className="jleftpane">
                <jh1>CONTACT US</jh1>
                <hr style={{backgroundColor: '#fff', width: '100%'}} />
                <jh2>Directions/Parking</jh2>
                <br />
                <jh2>Career Opportunities</jh2>
                <img id="jleftpane-image" src="https://www.penheaven.co.uk/media/mageplaza/blog/post/r/o/rollerball-vs-ballpoint2.jpg" alt="" />
                <br />
                <jh3>News &amp; Events</jh3>
                <br />
                <jh4>Join our magnificent firm and do more stuff with us.</jh4></div>
              <div className="jmiddlepane">
                <div className="jsecondborder">
                  <img id="jmiddlepane-image" src="./static/phone.png" alt="" /></div>
                <div className="jmiddlepane-text"><jh4>The office hours are 8am - 5pm Monday through Friday<br />
                    <p>689 East South Street</p>
                    Suite 4210<br />
                    Houston, Texas 09324 <br />
                    <p>PH: 555-555-5555</p>
                    <p>Fax: 555-555-5555</p>
                    <p>Contact Rosemary Sage at <a href="Google.com">rosemary@lawfirm.com</a></p>
                  </jh4></div>
              </div>
              <div className="jrightpane"><a href="/where_we_work.html">
                  <img href="/where_we_work.html" id="jrightpane-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEBISFRIVEA8PDxUVFRUQEA8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi8uFx8zODMsNygtLisBCgoKDg0OGBAQGismHx0tLS0tLS0tLS0tLS0tLS0tLi0tLS0tLS0tLS0uLS0tLS0rLS0uLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAABAgUGBwj/xAA8EAACAgEDAgQEAwYEBQUAAAABAgADEQQSIQUxE0FRYQYicYEUMpFDUmKhsfAHI4LRM0LB4fEVJERTkv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgQDBQb/xAApEQACAgEEAQQCAQUAAAAAAAAAAQIRIQMSMUEEBRNRcSJhgRQVIzIz/9oADAMBAAIRAxEAPwD0NbRhINcSw03mMOs3Aq8KrSGWmaKTSCYzLERVjCGZdplcybZLKRgmEUyeHLCRoGkWITOBzIkDrnwImwUbM2awDzlpZmeA671w12bRyZ6D4Y6gbVBMzf1Ud+w9j+z6i8f3nwd5lkVYzs4g24mlOzx5YdE2ZEG1cKjEynUxk2BDQ1cwtRh6+IMaNqk0KvaaRhCqwkNlJAxTKeqM5lZk7mVtRzysIojXhyGqVuJcQIWYZ8QrHEweYWOkYzmYIhkSbNcpMhoTeDBjT1wfhYlWhJAgYxUJSVwgE4yZoiXmSa2ySR4OBxLCwOMSLb7zSZaGNssTCvmWBAKGU5hAIsj4hQ5MQ6DAy90BmbVTChWaLTPiSipmdkKHYdHgdcMqfpCVJC3JxJaLjKj5p1jojWW5H0nqvhnphqUCdUaUZ7Tp6akATN/TRU9/Z6s/VtWWj7PRFXiBsWObZl6poWDyW7E1h6+ZgriEqaUQa2wdicRpRMW1ySjnG3EPTdF76DmZqGJbSJTZ01fM0sWrsjVRnNovcGQGVZxCLJZJHYmxzMAQjpM4lk2zSwiwIhEMRVFlZkpCqJe2AAgMTQXMtq5ta4qQbjG2SG2y4UG48S5zAHOYRazC1iaNpyWoE0iGdBaYHTgRxXEhjuwBplhIcvAuxjQgtaQ61xOp4z4uBE0CNOAIuxmb7eMkziW9eQNt3DP1ibUVbOkNOWo6irPQKZq5uIvpLgwyJLTkwTT4CUHB0wlXJj4ielHMbaJgjQMstBiDsaJITNPIoEEls2TmMEhisiFJEQVoxW0kraZuSKMkcsEBtJlJicRdeIzTfLGnzNeBiDYqGEuE27ZiaCO1rkSHgtKxZhKAjL0QSpBMGqLRIZK5utIUJiIVg1E0wm5hzAQLbCIkEzmWlsYB8SQe6SIZ5AoJmJ+MYRHM1GYdWyWboqG9oapMxYHkMLZZcwldEONNFaKpi9MaMoafEMkTYJHn/iS5krJXyBJnyCu8s5Zick5n3XquiDoR7T5V1P4XsS0+GMqTn6TB50ZSiqPo/QNbS05tSdM9f8HdS3ALnyE9Yyzynwn0B6fmfuZ7FRH4UZxh+Ry9d1dHU1/8OQVIxG1MGUkwZrbPFSYQtBvK5zzCimAC6pDrVDJVDqsllCX4eGrrhyBMF4BYKxZmleZdnMB4mIqGpYOilcuxRiLUajMO5yIUSIW949pe0RbvGUuAlSWCYsfKcQLUwC63mN1vmRTRd2StJbSFsTFrZiAw1mJN4gLJCZVAGMETCI01iAgOZIwKxJCwPFMo8ppB7CKgmNaad9xzem0SxT5S6beYxavEU3n0j5Jto6Fd8bqtnMU8eU0l2POQ4lqR2N2e8E4nP/EN6wtd2YqaKVPgcL9vSc++sGztGApxzFqTl8H1iTK2Vk69dfA+ktq4ZcAQZ1K5xkZ+sgbLqWMCmUjibFwgKwLVS1bEY4MDZXCxUTfKJMH4Zh6secYUZCyeFGMASi0VhQu9eJzr+86jmKPScxxkDiCoSOq/HMCBAvZ5RPJaWC7jN11ExcoTH9Ocd43InYC/CcxylMTSnM3tkuVhtopkzMGswu7E0nMVjoRIPnNIMxu2n0izKRKTJovZIkLVC+EJNlGQZJrZJEM8YKhNLUBLWRppOFmyAYvbpxFrLTnjMMvIlVRPINxtEBgnsIxZk8AR7S6fA5k7slqCStiVKeuY/VxC+EJoV5kvI064KTVDsYigPicdsxo6PHaC0ykNz6xqhOzzP+JnxY+lC0U8WOCS37i+3vPFfDnU7Dche1+XGSWPnO//AIu9HZnr1CglNuxj+6c8fbvPFaDKkTyPNk7r4PsvQNOO26WeT730u4klCc4GQfYzpLQZ5L/DtrLFa2zOOEX3x5z3Imvx9Ry002eF6roR0vJlCPXNfINEMvEJumszqYExW0xYOc9p0GqzKFAjsBdbfWHC5mXo9JSttgKzfhymrm1tEhtEQWKNRNLpZttQJvxuJWRFrQJPCgPGOYZbTE0OwZyIZbYC26LFyYUO0xu24Qf4nEUtrb1mErMpUS0zsU6oHzhgQ04G5o/pGI7xSjQk7OlsxMs4lCzMw2nzIRTRvxPeVBfhzJHgk8aLmAziJtrdxI5yI+QcThajRurFsZGePWaoqzk5UhzafLPrD6Rj5zXSfnHI+3pOmlK+ghJ9Ciu0ShB3jQMGiCGE5s6FZ9otr+p06dd99iVqTgFjgsfRR3Y/SN+Io7nE/PvxB1x9ZqXuftvIqH/10g/Kg+3PuSTOOrqbEa/E8b35112fbtB8V6O47a9QmTgAMGqyT2ALgCO69dpBA+s+QfBNim8Jb/wnRxYCAyt8p25BPHzY57ifS+g6jNdtJYstNm2lick1EZCk+e05Gfp6Th4/kucql2en6j6VHx9P3NNtpJXf7dc476/k7yadba9rgMpHIPIxPL6P4K0p1VmU+UAFU/5QfpO/07W8duPKD0Fxa+0j0AmmWkpf7I8jS8nU0v8AnJq/g7GnpStQqAKoGABxCrYPWKmljKXSn1gkjm5Nu2P7x6yxYIBKfeQkCKgsY8UTLakRdsn1mRo/rHS7C2MeMTK8MGWtE0KTFgBe6nA7xRX5wTOsKotqqAOR941LoVGE0mY0mngNJqhjEeVsxOxqgXhARVjkxvUsAD9IhpjyY0DCtSPOaqQS/BJhEpxCxUUUEywUQ22DarMkYuMeQkNJMZrpAhI7ABVURHKHi5aXVeCZLVlJnRkgBcPWSSM8LW00cHuJxb+rKFyhDc9uYFuvN/ypk+2TNtGapcUx2+w0OG/Zk4Ptmdiu7IyOxGRPNayyy6iwOhBxuTHnjmN9A172UIwTy2keYI45jdUCi0zvCyTxDEHvsA4r58pzb+p3+VfOPeSo2Ent5O/YA3efB+t9IbS6h6XB+ViUPk9Z/Kw9QR/1n17Qa+0/nrMH13T130uL6QQtdjI3Z6yATlW8uQPY+c4eRo7lXaNvgeV7M9zWGfKtC5HIJB9uJ9h+BumsNLusyDZyue+wZwfvk/y9Z5/4J6Bp1oputq8S1667stkou9QwATODjPmDPdjXgdwZj0PFcJ75P6PY9R9Yjr6Hsaax23+ukC0gFb+GR3P85vQAC+zHtE+oa6s4bOGH0ivSOsZtsJB8h2xPQeVZ86k7qj14eAfVeSzm1Wsck5xHKHUdhzIpFuLGEBPeEWoecELx7zRuB84gphTaFmqbsxQBRyTmaq1w8hCgydCXEl1LHsJY1JH5pNDWRyU9WYNbCewmwGiKoXfRCDr1gQ7SY6KvUznaypXYBRn1MpNsVRQTWvnGO3nM0IF5jP4MYAihrKn5skf0jTxQtoydQfIQtTE95hF4ys0LSO4k2G0LKMFZqlHeL36wEfLiA6YyzgdzB22jHBnHYM35jiP6CkDu2TKcaRCdsC5czWjobPP850wg9JnIEmzomlwiBPeSXmSKhbmeAWlf3R+gh661HZR+mIEMIVLZsMljSRU9OwS1J2MeTjlGPuIVbRDJZFlFYYp0/qRa16LQFtRVcY7WVnjcv3nT49pyeraTftsRf81fkDgkPWh7njuO3E5qdSsqUeI5/OqobVAawk428Ac57Stu7KJ3Vyen2zlfFjbdDqmz/wDF1AH1ZCo/mZ0NJaxQF12sc5HfHPH8pxvjwE6GxB+1fS0//vUVgj7jI+85M6I6Wh6fiilASuymlBj+FAI1X03P5nYxpUxCosNzCjnanpyKMhN3r5xehQj7sAb8Db2ndewICzkKo7liAP1MU/F12g4rd07BguA3upP9YJ3yOq4OjUBjtiL6gWE4rAHuYj05NUoYkLtyfCrY5sCe7dszpdP6gtqbh8pBKup4ZHHdTJaopSD6Wv5cHk+cN4Q9IPOeVxn+sLU+f77Tmyvo0Kh6QX4EZyCRDiEEkpSaBDTDHcza6cCbzLzAdssSwZQliAi2nN6Ufncd8N3l9U1ZBSpPz2EgH0UdzG9HphWMDv5nzJlcL7J5f0HgtW6quX7Q2YDV6dbFKtJXJTE+jhvmz+XPy/SdFliOlNlY2suQOFI9IRtcB+cFfc9pUk2yU6QSyhT3ETtrQdoXV6vJFdfLHuR2UfWap0AA5OT5/WNY5BuxBaWc/LwB5wy9LGd245+uZ0q6wowJZEHN9C2iP4Vv3oF9ERybD+sNqK7S/wApAXH3zKp0P77Fj/KH8gm1wItqcHG/t9Zc6n4VfQSR7kKmfPRZ6d5ln/vvAVWZ9Dn05Bmz7/74/viajOaFuPP/ALRlL4t4Y/v/AGm1r9YOgOjVfGGVHBRwGUjDKwypHnkHvEKxD15H/ac2i0yafp71DbRaDX3VLQbPDHojghtvsd2PL0nn/iDq3jWafRsmy5epaE3BG8WrwgHtyLABg4UHawVvPGOZ6L8Qy8gbvb29p5PX2g9UoavI3lr7q7FapTbXS1Fbi3BDBvErX5QSMc98RO+ylR9FA9JwOiWXak2tdca/Cvu05pqHhkBSNr2McsCykMACBhhHjVqmHL6er12B9UwH8LP4a5+qEexjHSunV0IVQszM5stdzvtutOAXdvM4AGBgAAAACSnSKasJX0ukEMV3sOQXLWEH1G4nE6CwKtCq0ltsaSCLPNa+hK+oVMVUjV12U2A8/wCbSviI4/07wft6T0mZx/i+kHR3P8weiqzVUMv5676VLoy/cYI7EEg944On9g1aOj/6fX+4B9MqR9xMtoWXmu2weoJDgj7+cnSdQ1tFNj7dz01WPt5Xc6AnHtkxwGS2xqhBnuU53h68eSYcNnkHHt7SL1GxcF1ZlJG7apJRTnk/TiOHIO5Rn99fM+49/wCs3fqFSs2FlCgEgllRSfIbmIA+8L6oHHtMJptUjjKMG9cHkfUeUYE4A19V20rXW5fZtP5shjgHIAyM8e2RnvK0upRuFo1G/aHZUc7EDFgMsXCg/KeO4/TJsFvPQ5gNZq0qRrLGCooLMT2AE8/1zqdmlofUFblVdvyvbUzMSQAAMNk5PYHJ8gYe3pV9qo171uynxAmHSlm5xuHckAjuOCM4jUFy3gHJ9ImhS9731DVjYVVdMGbDhcZLEY4yf6R8X2jG4Y458wD6e85tQtAK323VZ3bTtDqg7YFigj15YCO6fTUuTtuLnABAsH67R5+8qX7JQwmsc99gXyJPJ9TiDv6wEwDtYn8u1u8PT02pDkLk9vmO7H0zDClDxsXg+g4M53H4Kpg6TY43FlUHsByf1kt6arjbaS4PrGgZe6Tb6KpdnGH/ALPAxmknG/uaye272nVptJ7/AK+Rl30LYrI4yrKVYHzB4iOmot06qiDxa1AUZOLlUduTw38o3+X2Nfjjo6eJWIp0nqlepr8WkkpudOQVIZGKsMH0IIjklpp0xqmZImSYQzBTv7/rATKP0knJf4dQkk235JJ/4jCSXUfkm38HgKdIqZNYAycsMDk/XGf6w2f4T+o/3mQ3EKr+k2NmVJdC760A42MAGwzcAA8Hn9Y7SQeQePbtiLW0lu2B6+p+8NpCuSoGD545UxOqwCu8jVYHt/WMoMwNagcQ6mc2dA6RDVa5bbG0po8RlVLE8Zlprs8w1TfM528ZdVyp7eUeB9YLX6Ou6vZb+UEOCCUetl5Do45Uj1EkpBuh6e2uoLfZ4lgZyCCzbKycpX4jYawqON7AE+YnTUzy2i6rYmoK5a3SvUrVu/hLYL/3UA2s6lfmyRnPYny72h6ilnCnnG7aRhtoOCcH34icWh7kOgwgMDmEz7ySjZPpA9Qr3U2rtLZpuXaO75QjaORyc47iFGP74myYgOL8D2Z0GmBOWSiumwcA121gK1bDHyspGCDzO9unl/hT5NRr62wjHV/iEp8hU6KPHRjywsYEnyVlI+vqFjapjNqZ5TQ0CvqWpV08Y7auoUM48WzT12lqrEq3Z2YZCQFxlWx3GD6C/qNanDMc7igwjvlwCSBtU84BP2nF1iPfqKr9LVZXZW6V232qdPXdoyxNtHhOPEs/eUlAA2CG5MVMaZ6UVVt821GyBhsKcj6+kR+INZbRVu09Kt+bcxyU0yhc+I1VYL2gY/Kgz9skMn5CWTkEkuvqc8svv6jz79+567wcFTkev99jJT+Rtdo5nRekUhUu3DU2Nm5dQ5FpJs5JpPatOcBVwAJ2p53oWmbSb6nO436rU6hCnCIHIO0V/s+OSATk7z6zv7o5XZKN7pi/TJZxYiMP4lDf1k3S8yRnONF1AHg5vqAOanYeOo7jwrWIDY7bbD/qGME9XUqzwHCuf2dgNVufZHwT28sjjgxrdJYgYbWAZT3DAMp+x7yr+RUYo1GSQwww8vWJdQ6yK76tMiF7rUssUZ2VpXXjczvgkdxgAHv5TLdH2gjT220qVcFFb/LBYAAoHDeDjGR4YAye0S+FXrQWac0pTqaPBr1W0bzebFDLctp+e1XO45bkENnkZjpciV1k7X4uxfz0kjzNTeKR9UIVj/pDGcP4s6sW09iUlqkZCL9RZVqKxRQfldq/kGbAO2SoHfPE9JXYGGVOR/fr5d+YQRRaTuuB8rkW6To66Ka6qceGlapXjGGUAfNxwc98+8cE83rdA+k33aApyd9mjdglFpGSxoP7G0/dCe4BO6RPikWbDpa/FJr8S+kkLq9PnGA9PLA8nyI47xON5TKdpXR6STEFpr96g7WXIyQyspH6gQskZnEk1JAKPhml6yScMMe3/idK/Xqo3E9sZGDJJNEJvsNfRiqrsXfr6Z8NVJ4GT2ldO6y7sVVFUA4HPJ+uJJJ13UcfZTV2zt6HUMwy5AbJ7cjEdp1IJkkiWbOcltY3W2YcDMkkhlITu6TU4PBUkbQVJBX0I9MRLTX/AIMqt4DB3WpLwPnsZjwLF9c+Y4kklRy9rFLCtHpVM1z5H/rJJORYQHHeaFkqSILPOfE9p0+o0+rrG6xj+Bsr7eNTYdyhWPCsrjOfQn2nU8DUWk+LYKa/3KDutb13XMPlHsoB/ikklt1GILI50/QVUgipAuTuc8s9jcDc7tlnPA5JJ4jZfylSTm2WWDMlMHcnBPceT/X0PvJJECdEsrWwA8hlJKnzU+Y9xKr1J3lHxnG5SMgMPcc+skkcchLDGg0suJJJI0ZFw8j/ACm1Y+S/zAkkiLaSNZb0Ufq3+043xV0+xq11FOPxFDJYCoCO+mDA305Y4YMgb5W+XIB4wCJJHF0xXgc6e62Kl1Tu9VoS1TlkJrcAo2OCDgjj2M6P4ZPNQfr8x/VsypIaiqVCg2uGFrQDsAPLgATlfEGmrsKGyvLpvei0O1NtVmPyo6fMMgEnsCBg5zJJFHDGxToetvrqQai0andYypaKxp2KhsFSuSCV+YZwM7e/mfQ03BlDKcqRkHnkfeSSXqJZf7Jiy5JJJzGf/9k=" alt="" /> <br />
                  <jh2 style={{fontWeight: 'bold', textTransform: 'capitalize', color: '#7C2F2B', marginBottom: '0px'}}></jh2> 
                  <jh2>Where we work</jh2>
                  <br />      
                  <jh3 style={{color: '#7C2F2B', marginTop: '0px', fontWeight: 'lighter'}}>Find out more about our work coverage area</jh3> <br />
                </a>
                <img style={{marginTop: '30px'}} id="jrightpane-image" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg" alt="" />
                <br />
                <jh3>News &amp; Events</jh3>
                <br />
                <jh4>Join our magnificent firm and do more stuff with us.</jh4></div>
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