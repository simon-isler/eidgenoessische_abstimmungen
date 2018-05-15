<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Eidgenössische Abstimmungen 1866 - 2017</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/scrolling-nav.css" rel="stylesheet">

      <!-- JSR -->
      <link rel="stylesheet" href="jsr/assets/css/main.css">
  </head>

  <body id="page-top">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Eidgenössische Abstimmungen</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#kriterien">Kriterien</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#auswertung">Auswertung</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="bg-primary text-white">
      <div class="container text-center">
          <img src="img/wappen_thurgau.png" width="10%" height="20%" style="float: left;">
        <h1>Eidgenössische Abstimmungen 1866 - 2017</h1>
        <p class="lead">Thurgau</p>
      </div>
    </header>

    <section id="kriterien">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h1 >Kriterien</h1>
            <p class="lead">Nehmen Sie sich Zeit, Ihre Kriterien zusammenzustellen und das Programm sucht Ihnen Ihre passenden Abstimmungen hinaus.</p>
              <!-- buttons -->
              <input type="button" class="btn" onclick="showDiv('jahr')" value="Jahr">
              <button type="button" class="btn" onclick="showDiv('stimmbeteiligung')">Stimmbeteiligung</button>
              <button type="button" class="btn" onclick="showDiv('anteil')">Ja-Anteil</button>
              <button type="button" class="btn" onclick="showDiv('suchbegriffe')">Suchbegriffe</button>
              <button type="button" class="btn" onclick="showDiv('abstimmungsart')">Abstimmungsart</button>

              <script src="jsr/main.js"></script>
              <script src="jsr/index.js"></script>
              <!-- divs for btns -->
              <div id="jahr" style="display:none;">
                  <br>
                  <h4>Jahr</h4>
                  <p class="lead">Hier können Sie einstellen, in welchem Jahr die Abstimmung war.</p>
                  <input id="range-2-1" type="range" min="0" max="100" value="30">
                  <input id="range-2-2" type="range" min="0" max="100" value="30">
                  <script>
                      new JSR(['#range-2-1', '#range-2-2'], {
                          sliders: 2,
                          min: 1866,
                          max: 2017,
                          values: [1900, 1990],
                          labels: {
                              formatter: (value) => {
                                  return value.toString();
                              }
                          },
                          limit: {
                              show: true
                          },
                          grid: {
                              color: '#999'
                          }
                      });
                  </script>
              </div>

              <div id="stimmbeteiligung" style="display:none;">
                  <br>
                  <h4>Stimmbeteiligung</h4>
                  <p class="lead">Hier können Sie einstellen, in welchem Bereich die Stimmbeteiligung war.</p>
                  <input id="range-2-3" type="range" min="0" max="100" value="30">
                  <input id="range-2-4" type="range" min="0" max="100" value="30">

                  <script>
                      new JSR(['#range-2-3', '#range-2-4'], {
                          sliders: 2,
                          min: 0,
                          max: 100,
                          values: [20, 40],
                          labels: {
                              formatter: (value) => {
                                  return value.toString() + "%";
                              }
                          },
                          limit: {
                              show: true
                          },
                          grid: {
                              color: '#999'
                          }
                      });
                  </script>
              </div>

              <div id="anteil" style="display:none;">
                  <br>
                  <h4>Ja-Anteil</h4>
                  <p class="lead">Hier können Sie einstellen, in welchem Bereich der Ja-Anteil war.</p>
                  <input id="range-2-5" type="range" min="0" max="100" value="30">
                  <input id="range-2-6" type="range" min="0" max="100" value="30">

                  <script>
                      new JSR(['#range-2-5', '#range-2-6'], {
                          sliders: 2,
                          min: 0,
                          max: 100,
                          values: [20, 40],
                          labels: {
                              formatter: (value) => {
                                  return value.toString() + "%";
                              }
                          },
                          limit: {
                              show: true
                          },
                          grid: {
                              color: '#999'
                          }
                      });
                  </script>
              </div>

              <div id="suchbegriffe" style="display:none;">
                  <br>
                  <h4>Suchbegriffe</h4>
                  <p class="lead">Hier können Sie nach einem Stichwort suchen.</p>
                  <input type="text" class="form-control" id="suchbegriff" placeholder="Suche...">
                  <br>
              </div>

              <div id="abstimmungsart" style="display:none;">
                  <br>
                  <h4>Abstimmungsart</h4>
                  <p class="lead">Hier können Sie zwischen einer der Abstimmungsarten aussuchen.</p>

                  

              </div>
          </div>
        </div>
      </div>
    </section>

    <section id="auswertung" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h1>Auswertung</h1>

              // TO DO
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Florentin N., Simon I.</p>
      </div>
      <!-- /.container -->
    </footer>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap-slider.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom JavaScript for this theme -->
    <script src="js/scrolling-nav.js"></script>

    <!-- own JavaScript -->
    <script src="js/functions.js"></script></body>

</html>
