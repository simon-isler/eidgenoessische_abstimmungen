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
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Eidgenössische Abstimmungen</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
                <form action="index.php" method="post">
                    <h1>Kriterien</h1>
                    <p class="lead">Nehmen Sie sich Zeit, Ihre Kriterien zusammenzustellen und das Programm sucht Ihnen Ihre passenden Abstimmungen hinaus.</p>

                    <input type="button" class="btn" onclick="showDiv('jahr')" value="Jahr">
                    <button type="button" class="btn" onclick="showDiv('stimmbeteiligung')">Stimmbeteiligung</button>
                    <button type="button" class="btn" onclick="showDiv('anteil')">Ja-Anteil</button>
                    <button type="button" class="btn" onclick="showDiv('abstimmungsart')">Abstimmungsart</button>
                    <button type="button" class="btn" onclick="showDiv('suchbegriffe')">Suchbegriffe</button>

                    <script src="jsr/main.js"></script>
                    <script src="jsr/index.js"></script>
                    <div id="jahr" style="display:none;">
                        <br>
                        <h4>Jahr</h4>
                        <p class="lead">Hier können Sie einstellen, in welchem Jahr die Abstimmung war.</p>
                            <input name="jahrSlider_1" id="range-2-1" type="range" min="1866" max="2017">
                            <input name="jahrSlider_2" id="range-2-2" type="range" min="1866" max="2017">
                        <script>
                            new JSR(['#range-2-1', '#range-2-2'], {
                                sliders: 2,
                                min: 1866,
                                max: 2017,
                                values: [1866, 2017],
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
                        <input name="stimmbeteiligung_1" id="range-2-3" type="range" min="0" max="100">
                        <input name="stimmbeteiligung_2" id="range-2-4" type="range" min="0" max="100">

                        <script>
                            new JSR(['#range-2-3', '#range-2-4'], {
                                sliders: 2,
                                min: 0,
                                max: 100,
                                values: [0, 100],
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
                        <input name="jaAnteil_1" id="range-2-5" type="range" min="0" max="100" value="30">
                        <input name="jaAnteil_2" id="range-2-6" type="range" min="0" max="100" value="30">
                        <script>
                            new JSR(['#range-2-5', '#range-2-6'], {
                                sliders: 2,
                                min: 0,
                                max: 100,
                                values: [0, 100],
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

                    <div id="abstimmungsart" style="display:none;">
                        <br>
                        <h4>Abstimmungsart</h4>
                        <p class="lead">Hier können Sie zwischen einer der Abstimmungsarten aussuchen.</p>
                        <select name="abstimmungArt" id="abstimmung" class="custom-select">
                            <option selected value="alle">Alle</option>
                            <option value="Volksinitiative">Volksinitiative</option>
                            <option value="Volksinitiative mit Gegenentwurf: Gegenentwurf">Volksinitiative mit Gegenentwurf: Gegenentwurf</option>
                            <option value="Volksinitiative mit Gegenentwurf: Initiative">Volksinitiative mit Gegenentwurf: Initiative</option>
                            <option value="Obligatorisches Referendum">Obligatorisches Referendum</option>
                            <option value="Fakultatives Referendum">Fakultatives Referendum</option>
                            <option value="Plebiszit">Plebiszit</option>
                        </select>
                    </div>

                    <div id="suchbegriffe" style="display:none;">
                        <br>
                        <h4>Suchbegriffe</h4>
                        <p class="lead">Hier können Sie nach einem Stichwort suchen.</p>
                        <input name="suche" type="text" class="form-control" id="suchbegriff" placeholder="Suche...">
                        <br>
                    </div>
                    <input class="btn btn-primary" type="submit" name="submit" value="Submit" style="margin-top: 5%; margin-left: 80%;">
                </form>
            </div>
        </div>
    </div>
</section>

<?php
// boolean zum überprüfen ob die Kriterien schon gesetzt wurden
$notSet = false;
?>

<section id="auswertung" class="bg-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <h1>Auswertung</h1>
                    <?php
                    // Fehler ausblenden
                    error_reporting(0);

                    // CSV datei lesen
                    function readCSV($csvFile)
                    {
                        $file_handle = fopen($csvFile, 'r');
                        while (!feof($file_handle)) {
                            $line_of_text[] = fgetcsv($file_handle, 1024, ";");
                        }
                        fclose($file_handle);
                        return $line_of_text;
                    }

                    // Funktion ausführen
                    $abstimmungen = 'data/abstimmungen.csv'; // Dateiname
                    $array_abstg = readCSV($abstimmungen);
                    $array_length = count($array_abstg); // array länge

                    // Speichert die Daten der Kriterien
                    if (isset($_POST['submit'])) {
                        // Jahr
                        $gesJahr_1 = $_POST['jahrSlider_1']; // von
                        $gesJahr_2 = $_POST['jahrSlider_2']; // bis

                        // Stimmbeteiligung
                        $stimmbeteiligung_1 = $_POST['stimmbeteiligung_1']; // von
                        $stimmbeteiligung_2 = $_POST['stimmbeteiligung_2']; // bis

                        // Ja-Anteil
                        $jaAnteil_1 = $_POST['jaAnteil_1']; // von
                        $jaAnteil_2 = $_POST['jaAnteil_2']; // bis

                        // Suchbegriff
                        if (isset($_POST['suche'])) {
                            // Suchbegriff ist gesetzt
                            $suchbegriff_1 = $_POST['suche'];
                            $GLOBALS['notSet'] = false;
                        } else {
                            // falls Suchbegriff leer ist
                            $suchbegriff_1 = "";
                        }

                        // Abstimmungsart
                        $abstimmungsart_1 = $_POST['abstimmungArt'];
                    } else {
                        // Kriterien wurden noch nicht gesetzt
                         $GLOBALS['notSet'] = true;
                    }

                    // Kriterien sind gesetzt
                    if (($GLOBALS['notSet']) == false) {
                        echo "<p class='lead'>Folgende Auswahl trifft auf Ihre Kriterien zu.</p>";
                    }

                    // Anzahl passender Abstimmungen
                    $anzahl = 0;

                    // Summen für den Gesamtdurchschnitt
                    $sumJa = 0;
                    $sumProzentJa = 0;
                    $sumNein = 0;
                    $sumProzentNein = 0;
                    $sumGueltigeStimmen = 0;

                    // Array geht durch CSV datei
                    for ($i = 1; $i < $array_length -1; $i++) {
                        // speichert Array Elemente
                        $datum = $array_abstg[$i][0];
                        $jahr = substr($datum, -4);
                        $name = utf8_encode($array_abstg[$i][1]); // umlaute
                        $art = $array_abstg[$i][3];
                        $anzStimmberechtigte = $array_abstg[$i][4];
                        $anzStimmzettel = $array_abstg[$i][5];
                        $anzEnthaltungen = $array_abstg[$i][6];
                        $gueltigeStimmen = $array_abstg[$i][8];
                        $jaStimmen = $array_abstg[$i][9];
                        $neinStimmen = $array_abstg[$i][10];
                        $stimmbeteiligung = $array_abstg[$i][11];
                        $prozentJa = $array_abstg[$i][12];
                        $prozentNein = $prozentJa / $jaStimmen * $neinStimmen;
                        $prozentNein = round($prozentNein, 1);

                        // leere Stimmbteteiligung
                        if ($stimmbeteiligung == "") {
                            $stimmbeteiligung = 0;
                            $stimm = "Keine Daten vorhanden.";
                        } else {
                            $stimm = $stimmbeteiligung;
                        }

                        // gefilterte Daten anzeigen
                        if (($jahr >= $gesJahr_1 && $jahr <= $gesJahr_2) && ($stimmbeteiligung >= $stimmbeteiligung_1 && $stimmbeteiligung <= $stimmbeteiligung_2) && ($prozentJa >= $jaAnteil_1 && $prozentJa <= $jaAnteil_2) && ($art == $abstimmungsart_1 || $abstimmungsart_1 == 'alle')) {
                            if (((strpos($name, $suchbegriff_1)) !== false)|| $suchbegriff_1 == "") {
                                // berechnen
                                $anzahl++; // anzahl um 1 erhöhen
                                $sumJa = $sumJa + $jaStimmen;   // Summe aller Ja-Stimmen
                                $sumProzentJa = $sumProzentJa + $prozentJa; // Summe aller Ja-Stimmen in Prozent
                                $sumNein = $sumNein + $neinStimmen; // Summe aller Nein-Stimmen
                                $sumProzentNein =
                                $sumGueltigeStimmen = $sumGueltigeStimmen + $gueltigeStimmen; // Summe von allen gültigen Stimmen

                                // Collapse
                                echo "
                        <div class=\"panel-group\">
                          <div class=\"panel panel-default\">
                            <div class=\"panel-heading\">
                              <h4 class=\"panel-title\">
                                <a data-toggle=\"collapse\" href=\"#$i\">$name ($datum)</a>
                              </h4>
                            </div>
                            <div id=\"$i\" class=\"panel-collapse collapse\">
                              <div class=\"panel-body\">
                              <table class=\"table-borderless\">                            
                                  <thead>
                                    <tr>
                                      <th scope=\"col\" style='width: 45%;'>Name</th>
                                      <th scope=\"col\" style='width: 20%;'>Datum</th>
                                      <th scope=\"col\" style='width: 35%;'>Art</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>                                  
                                      <td>$name</td>
                                      <td>$datum</td>
                                      <td>$art</td>
                                    </tr>                                
                                  </tbody>                       
                                  <thead>
                                    <tr>
                                      <th scope=\"col\" style='width: 45%; padding-top: 4%;'>Stimmbeteiligung [%]</th>
                                      <th scope=\"col\" style='width: 20%; padding-top: 4%;'>Ja</th>
                                      <th scope=\"col\" style='width: 35%; padding-top: 4%;'>Nein</th>
                                    </tr>   
                                    </thead>
                                    <tbody>
                                    <tr>                                  
                                      <td>$stimm</td>
                                      <td>$jaStimmen ($prozentJa%)</td>
                                      <td>$neinStimmen ($prozentNein%)</td>
                                    </tr>                        
                                  </tbody>                                                          
                               </table>     
                               </div>    
                          </div>
                        </div>
                        </div>
                        <br>
                        ";
                                }
                            }
                    }

                    ?>

                    <p class="lead">
                        <?php
                        // falls keine Kriterien ausgewählt wurden
                        if ($GLOBALS['notSet'] == true) {
                            echo "Es wurden noch keine Kriterien ausgewählt. Bitte wählen Sie diese oben aus und drücken Sie auf 'Submit'.";
                        }
                        ?>
                    </p>

                <?php
                // gesamtdurchschnitt
                $avgJa = round($sumJa / $anzahl, 0);
                $avgProzentJa = round($sumProzentJa / $anzahl, 1);
                $avgNein = round($sumNein / $anzahl, 0);
                $avgProzentNein = round($sumProzentNein / $anzahl, 1);
                $avgGueltig = round($sumGueltigeStimmen / $anzahl, 0);

                // nur wenn Kriterien gesetzt wurden
                if ($GLOBALS['notSet'] != true) {
                    echo "
                      <div class=\"panel-group\">
                          <div class=\"panel panel-default\">
                            <div class=\"panel-heading\">
                              <h4 class=\"panel-title\">
                                <a data-toggle=\"collapse\" href=\"#gesamtdurchschnitt\" style='color: green;'>Gesamtdurchschnitt</a>
                              </h4>
                            </div>
                            <div id=\"gesamtdurchschnitt\" class=\"panel-collapse collapse\">
                              <div class=\"panel-body\">
                              <table class=\"table-borderless\">                            
                                  <thead>
                                    <tr>
                                      <th scope=\"col\">Gültige Stimmen</th>
                                      <th scope=\"col\">Ja</th>
                                      <th scope=\"col\">Nein</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>                                  
                                      <td>$avgGueltig</td>
                                      <td>$avgJa ($avgProzentJa%)</td>
                                      <td>$avgNein ($avgProzentNein%)</td>
                                    </tr>                                
                                  </tbody>                                                                                            
                               </table>     
                               </div>    
                          </div>
                        </div>
                        </div>
                        <br>
                ";
                }

                // wenn die Anzahl Abstimmungen 1 ist, dann Singular von Abstimmung
                $text = "";
                if ($GLOBALS['anzahl'] == 1) {
                $text = $text . "Abstimmung";   // singular
                } else {
                $text = $text . "Abstimmungen"; // plural
                }
                // ausgabe
                echo "<br><p class='lead'>Insgesamt hat es <strong>$anzahl</strong> zutreffende $text.</p>";
                ?>
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

<!-- Plugin JavaScript -->
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<!-- Custom JavaScript for this theme -->
<script src="js/scrolling-nav.js"></script>

<!-- own JavaScript -->
<script src="js/functions.js"></script>
</body>
</html>
