<?php include("includes/config.php");?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Hooksello data extraction made easy">
    <meta name="author" content="Simon Barrett and Phil Newland">   
    <title><?=$CURRENT_PAGE;?></title>

    <?php include("includes/head-tag-contents.php");?>

    <!-- Custom styles for this template -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
  </head>
  <body>
    <div class="container">
        <?php include("includes/header.php");?>
        <div class="jumbotron p-4 p-md-5 text-white rounded">
    
        <div class="col-12" style="height:100%;">
        <br/> <br/>   <br/>   
            <a class="btn btn-primary"  href="./signin.php">Sign In</a>     
            <br/> <br/>   
            <a class="btn btn-primary"  href="./register.php">Register</a>        			 
        </div>
    </div>
    
    <main role="main" class="container">
        <div class="row">
            <div class="col-md-12 blog-main">
                <h3 class="pb-4 mb-4 font-italic border-bottom">
                    Skeleton Blog
                </h3>

                <div class="blog-post">
                    <h2 class="blog-post-title">Blog title</h2>
                    <p class="blog-post-meta">April 9, 2020 by <a href="#">Simon</a></p>

                    <p></p>
                    <hr>            
                </div><!-- /.blog-post -->        
            </div><!-- /.blog-main -->
        </div><!-- /.row -->
    </main><!-- /.container -->
    <?php include("includes/footer.php");?>
    <?php include("includes/scripts.php");?>
    <script type="text/javascript"></script>
</body>
</html>
