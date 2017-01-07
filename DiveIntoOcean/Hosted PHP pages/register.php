<!DOCTYPE html>
<html lang="en">
<!-- Head BEGIN -->
<head>
  <meta charset="utf-8">
  <title>Registration | OceanFilms</title>

  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" href="favicon.ico">

  <!-- Fonts START -->
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900|Mirza" rel="stylesheet" type="text/css">
  <!-- Fonts END -->

  <!-- Global styles START -->          
  <link href="assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Global styles END --> 
   
  <!-- Page level plugin styles START -->
  <link href="assets/plugins/fancybox/source/jquery.fancybox.css" rel="stylesheet">
  <link href="assets/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin styles END -->

  <!-- Theme styles START -->
  <link href="assets/pages/css/components.css" rel="stylesheet">
  <link href="assets/corporate/css/style.css" rel="stylesheet">
  <link href="assets/corporate/css/style-responsive.css" rel="stylesheet">
  <link href="assets/corporate/css/themes/red.css" rel="stylesheet" id="style-color">
  <link href="assets/corporate/css/custom.css" rel="stylesheet">
  <!-- Theme styles END -->
  <!-- Form php START -->

  <?php
 
    if(isset($_POST['Register'])){

      require 'phpmailer/PHPMailerAutoload.php';

   
      function died($error) {
        echo '<script language="javascript">';
        echo 'alert("Please fix the following errors in your form :-\n'.$error.'")';
        echo '</script>';
      }
        
      // validation expected data exists
   
      if(empty($_POST['firstName']) ||
   
        empty($_POST['lastName']) ||
   
        empty($_POST['email']) ||
   
        empty($_POST['mobile']) ){
   
         
        died('Fill all the fields marked with *');       
   
      }
   
      else{ 
     
        $first_name = $_POST['firstName']; // required
     
        $last_name = $_POST['lastName']; // required
     
        $email_from = $_POST['email']; // required
     
        $telephone = $_POST['mobile']; // required
        
        $regfor = $_POST['regFor'];

        $subd = '';

        $error_message = "";
     
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
     
       if(!preg_match($email_exp,$email_from)) {
     
          $error_message .= 'The Email Address you entered does not appear to be valid.\n';
     
        }
     
        $string_exp = "/^[A-Za-z .'-]+$/";
     
        if(!preg_match($string_exp,$first_name)) {
     
          $error_message .= 'The First Name you entered does not appear to be valid.\n';
     
        }
     
        if(!preg_match($string_exp,$last_name)) {
       
          $error_message .= 'The Last Name you entered does not appear to be valid.\n';
       
        }

        $num_exp = "/^\+?[0-9]+$/";
     
        if(!preg_match($num_exp,$telephone)) {
       
          $error_message .= 'The Mobile No. you entered does not appear to be valid.\n';
       
        }

        $allowed = array('docx','doc','txt','pdf');


        if(file_exists($_FILES['upload']['tmp_name']) && is_uploaded_file($_FILES['upload']['tmp_name'])) {

          if (!($_FILES['upload']['error'] == UPLOAD_ERR_OK)) {
          
            $error_message .= 'There is an error with the file upload.\n';
          }
          else{
        
            $ext = pathinfo($_FILES['upload']['name'], PATHINFO_EXTENSION); 
            if(!in_array($ext,$allowed) ) {
              $error_message .= ' File extension not supported.\n';
            }
          }
        }

        if(strlen($error_message) > 0) {
       
          died($error_message);
       
        }

        else{

          $email_message = "You have got a new regestration. Form details below.\n\n";

          if(isset($_POST['subscribeForNewsletter'])) {

            $subd = 'Yes';
            $txt = $email_from;
            $myfile = file_put_contents('subscriptions.txt', $txt.PHP_EOL , FILE_APPEND);
            $sub_mail = new PHPMailer;
            $sub_mail->Host= localhost;
            //$sub_mail->isSMTP();
            //$sub_mail->SMTPDebug = 0;
            //$sub_mail->Debugoutput = 'html';
            //$sub_mail->Host = 'smtp.gmail.com';
            //$sub_mail->Port = 587;
            //$sub_mail->SMTPSecure = 'tls';
            //$sub_mail->SMTPAuth = true;
            //$sub_mail->Username = "oceanfilmmailer@gmail.com";
            //$sub_mail->Password = "theoceanfilms";
            $sub_mail->addAddress('trustoceanfilms@gmail.com');
            $sub_mail->Subject = 'UPDATED MAILINGLIST';
            $sub_mail->Body = 'You have got a new subscription. Find the updated mailing list in attachment';
            $sub_mail->AddAttachment('subscriptions.txt');
            //send the message, check for errors
            if (!$sub_mail->send()) {
              $email_message.= "THERE WAS A PROBLEM SENDING SUBSCRIPTION LIST FOR THIS REGESTRATION. PLEASE CONTACT SITE ADMINISTRATER IF YOU CONTINUE TO SEE THIS MESSAGE";
            }
          }

          else {
           $subd = 'No';
          } 
       
          function clean_string($string) {
       
            $bad = array("content-type","bcc:","to:","cc:","href");
       
            return str_replace($bad,"",$string);
       
          }
       
           
          $email_message .= "Registration For: ".clean_string($regfor)."\n";

          $email_message .= "First Name: ".clean_string($first_name)."\n";
       
          $email_message .= "Last Name: ".clean_string($last_name)."\n";
       
          $email_message .= "Email: ".clean_string($email_from)."\n";
       
          $email_message .= "Mobile: ".clean_string($telephone)."\n";

          $email_message .= "Has subscribed for newsletter?: ".clean_string($subd)."\n";

          if($subd == 'Yes') {
            $email_message .="(you must have recieved another email with updated subscription list. Contact administrator if not.)\n";
          }
       
              
          $mail = new PHPMailer;
          $mail->Host=localhost;
          //$mail->isSMTP();
          //$mail->SMTPDebug = 0;
          //$mail->Debugoutput = 'html';
          //$mail->Host = 'smtp.gmail.com';
          //$mail->Port = 587;
          //$mail->SMTPSecure = 'tls';
          //$mail->SMTPAuth = true;
          //$mail->Username = "oceanfilmmailer@gmail.com";
          //$mail->Password = "theoceanfilms";
          $mail->addAddress('trustoceanfilms@gmail.com');
          $mail->Subject = 'New Registration';
          $mail->Body = $email_message;
          if(file_exists($_FILES['upload']['tmp_name']) && is_uploaded_file($_FILES['upload']['tmp_name'])){
            $mail->AddAttachment($_FILES['upload']['tmp_name'],$_FILES['upload']['name']);
          }
          //send the message, check for errors
          if (!$mail->send()) {
            echo '<script language="javascript">';
            echo 'alert("An error occured. Please try again later.")';
            echo '</script>';
          } else {
            echo '<script language="javascript">';
            echo 'alert("Congratulations! Registration Successful.  We will get in touch with you, shortly !")';
            echo '</script>';
          }
        }
      }
    }
  ?>

  <!-- Form php END -->
</head>
<!-- Head END -->

<!-- Body BEGIN -->
<body class="corporate">
    <!-- BEGIN TOP BAR -->
    <div class="pre-header">
        <div class="container">
            <div class="row">
                <!-- BEGIN TOP BAR LEFT PART -->
                <div class="col-md-6 col-sm-6 additional-shop-info">
                    <ul class="list-unstyled list-inline">
                        <!--<li><i class="fa fa-phone"></i><span>what to add?</span></li>
                        <li><i class="fa fa-envelope-o"></i><span>info@oceanfilms.in</span></li>-->
                    </ul>
                </div>
                <!-- END TOP BAR LEFT PART -->
                <!-- BEGIN TOP BAR MENU -->
                <div class="col-md-6 col-sm-6 additional-nav">
                    <ul class="list-unstyled list-inline pull-right">
                        <li><a href="register.php">Registration</a></li><!--login.php here this will come instead of this-->
                        <li><a href="contacts.php">Contact Us</a></li>
                    </ul>
                </div>
                <!-- END TOP BAR MENU -->
            </div>
        </div>        
    </div>
    <!-- END TOP BAR -->
    <!-- BEGIN HEADER -->
    <div class="header">
      <div class="container">
        <a class="site-logo" href="home.php"><img src="assets/corporate/img/logos/finalogo.png" alt="Ocean Films" style="height: 60px; margin: 0px; margin-top: 5px;"></a>
        <a class="site-logo" href="home.php" style="text-decoration: none;"><h2 style="font-size: 2.3em; font-family:Mirza; margin-top: 5px;"> OCEAN FILMS</h2>
        <h5 style="text-align: center; line-height: 0em; margin-top: -10px;">"Your Trust, Our Priority"</h5></a>
        <a href="javascript:void(0);" class="mobi-toggler"><i class="fa fa-bars"></i></a>

        <!-- BEGIN NAVIGATION -->
        <div class="header-navigation pull-right font-transform-inherit">
          <ul>
            <li class="dropdown">
              <a class="dropdown-toggle" style="font-size: 1.03em;" href="home.php">
                Home 
                
              </a>

              
            </li>
            <li class="dropdown dropdown-megamenu">
              <a class="dropdown-toggle" data-toggle="dropdown" style="font-size: 1.03em;" data-target="#" href="javascript:;">
                Explore the Ocean
                
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="header-navigation-content">
                    <div class="row">
                      <div class="col-md-4 header-navigation-col">
                        <h4>All you need to know about us</h4>
                        <ul>
                          <li><a href="gallery.php">Gallery</a></li>
                          <li><a href="services.php">Our Services</a></li>
                          <li><a href="projects.php">Projects</a></li>
                          <li><a href="about.php">About Ocean Films</a></li>
                        </ul>
                      </div>
                      <div class="col-md-4 header-navigation-col">
                        <h4>Reach out to us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                        <ul>
                          
                          <li><a href="register.php">Registration</a></li>
                          <li><a href="contacts.php">Contact Us</a></li>
                        </ul>
                      </div>
         
                    </div>
                  </div>
                </li>
              </ul>
            </li>           
            <li class="dropdown">
              <a class="dropdown-toggle" href="gallery.php" style="font-size: 1.03em;">
                Gallery </a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" href="services.php" style="font-size: 1.03em;">
                Our Services
                
              </a>
            </li>          
            
        </ul>
        </div>
        <!-- END NAVIGATION -->
      </div>
    </div>
    <!-- Header END -->
    <div class="main">
      <div class="container">
        <!-- BEGIN SIDEBAR & CONTENT -->
        <div class="row margin-bottom-40">


          <!-- BEGIN CONTENT -->
          <div class="col-md-8 col-sm-8 col-md-offset-3">
            <h1 style="font-weight: bold; font-family: times !important; font-size: 3em !important; color:#0079b3;">Register with Ocean Films</h1>
            <div class="">
              <div class="row">
                <div class="col-md-7 col-sm-7">
                  <form class="form-horizontal"  enctype="multipart/form-data" name="contactform" role="form" method="POST" action="register.php">
                    <fieldset class="row">
                      <legend style="text-align: center; font-size: 2em; font-family: century;">You are registering for?</legend>  
                      <div class="form-group">    
                      <label class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">
                      <input type="radio" name="regFor" value="Pariyojana" checked="checked">Pariyojna&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                      <label class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">
                      <input type="radio" name="regFor" value="Album & Film Production">Album &amp; Film Production</label>
                      </div>
                      <div class="form-group">
                      <label class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">
                      <input type="radio" name="regFor" value="OfficeWork">Office Work</label>
                      <label class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">
                      <input type="radio" name="regFor" value="Web Series">Web Series&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend style="text-align: center; font-size: 2em; font-family: oldenglishtext;">Your personal details</legend>
                      <div class="form-group">
                        <label for="firstname" class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">First Name <span class="require" style="color:red;">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" class="form-control" id="firstname" name="firstName" style="color:#44b1c1; font-weight:bold;">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="lastname" class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">Last Name <span class="require" style="color:red;">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" class="form-control" id="lastname" name="lastName" style="color:#44b1c1; font-weight:bold;">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="email" class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">Email <span class="require" style="color:red;">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" class="form-control" id="email" name="email" style="color:#44b1c1; font-weight:bold;">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="mobile" class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">Mobile No. <span class="require" style="color:red;">*</span></label>
                        <div class="col-lg-8">
                          <input type="text" class="form-control" id="mobile" name="mobile" style="color:#44b1c1; font-weight:bold;">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="upload" class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">Upload your profile (pdf or word)</label>
                        <div class="col-lg-8">
                          <input type="file" id="upload" name="upload" accept=".pdf, .docx, .doc, .txt" style="color:#44b1c1; font-weight:bold;">
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend style="text-align: center; font-size: 2em; font-family: oldenglishtext;">Newsletter</legend>
                      <div class="form-group">                        
                          <label class="col-lg-4 control-label" style="text-align: center; font-size: 1.2em; font-family: oldenglishtext;">Subscribe for Newsletter</label>
                          <div class="col-lg-8">
                            <input type="checkbox" name="subscribeForNewsletter">
                          </div>                        
                      </div>
                    </fieldset>
                    <div class="row">
                      <div class="col-lg-8 col-md-offset-4 padding-left-0 padding-top-20">                        
                        <button type="submit" name="Register" class="btn btn-primary">Register</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <!-- END CONTENT -->
        </div>
        <!-- END SIDEBAR & CONTENT -->
      </div>
    </div>
    <!-- BEGIN FOOTER -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <!-- BEGIN COPYRIGHT -->
          <div class="col-md-4 col-sm-4 padding-top-10">
            2016 &copy; &reg; Ocean Films, All Rights Reserved. Copyright Protected. 
          </div>
          <!-- END COPYRIGHT -->
          <!-- BEGIN PAYMENTS -->
          <div class="col-md-offset-2 col-md-4 col-sm-4">
            <ul class="social-footer list-unstyled list-inline ">
              <li class="wow rollIn"><a href="https://twitter.com/OCEANFILMZ"><i class="fa fa-twitter" style="color: #00aced;"></i></a></li>
              <li class="wow rollIn"><a href="https://www.facebook.com/oceanfilmsvk/?fref=ts"><i class="fa fa-facebook" style="color: #3b5998;"></i></a></li>
              <li class="wow rollIn"><a href="https://www.youtube.com/channel/UCGm18j2hXr9EwelD6X3h5gg"><i class="fa fa-youtube" style="color: white;"></i></a></li>              
              <li class="wow rollIn"><a href="https://in.linkedin.com/in/oceanfilm"><i class="fa fa-linkedin" style="color: #007bb6;"></i></a></li>
            </ul>  
          </div>
          <!-- END PAYMENTS -->
        </div>
      </div>
    </div>
    <!-- END FOOTER -->



    <!-- Load javascripts at bottom, this will reduce page load time -->
    <!-- BEGIN CORE PLUGINS (REQUIRED FOR ALL PAGES) -->
    <!--[if lt IE 9]>
    <script src="assets/plugins/respond.min.js"></script>
    <![endif]--> 
    <script src="assets/plugins/jquery.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>      
    <script src="assets/corporate/scripts/back-to-top.js" type="text/javascript"></script>
    <!-- END CORE PLUGINS -->

    <!-- BEGIN PAGE LEVEL JAVASCRIPTS (REQUIRED ONLY FOR CURRENT PAGE) -->
    <script src="assets/plugins/fancybox/source/jquery.fancybox.pack.js" type="text/javascript"></script><!-- pop up -->
    <script src="assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>

    <script src="assets/corporate/scripts/layout.js" type="text/javascript"></script>
    <script type="text/javascript">
        jQuery(document).ready(function() {
            Layout.init();
            Layout.initUniform();
        });
    </script>
    <!-- END PAGE LEVEL JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>
