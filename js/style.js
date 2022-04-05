const nav = document.querySelector('.nav');
let navTop = nav.offsetTop;

function fixedNav() {
    if (window.scrollY >= navTop) {
        nav.classList.add('fixed');
    }
     else {
         nav.classList.remove('fixed');
     }
}

window.addEventListener('scroll', fixedNav);

#ff523b
#f76a68
,#8df8f7

body{
    margin: 50px;
    overflow-x: hidden;
    font-family:sans-serif;
}
.first-line{
 direction: rtl; 
}
.go-section{
    text-align: center;
}
.main-header{
    border-bottom: 1px solid black;
}
.body-image{
    background: url('../images/banner2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 50px;
    height: 50%;
}
.words p{
    line-height: 1.9em;
    letter-spacing: 1px;
    text-align: center;
}
.cap-word{
    text-transform: capitalize;
}
#banners{
    margin: 40px;
    overflow-x: hidden !important;
}
.nav1{
    background-color: #8CF8F8;
    position: -webkit-sticky;
    position: sticky;
    top:0;
}
.nav1 ul{
    margin-left:20px;
    padding: 20px;
    list-style: none;
    display: flex;
    margin-left: 40%;
}
.nav li{
    flex: 1;
    display: flex;
    justify-content: center;
}
.nav1 ul li a{
    color:#000326;
    transition: all 0.4s;
    text-transform: capitalize;
    margin-right: 10px;
    text-align: center;
    font-size: large;
    text-decoration: none;
}
/*.nav1.fixed{
    position:fixed;
    box-shadow: 5px 5px 19px 0px rgba(0,0,0,0.5);
}
.nav1.fixed ul li a{
    font-size: 14px;
}*/


div class = "main-header">
  <p class = "first-line"> Account <i class="fas fa-shopping-cart"></i> </p>
   <section class = "go-section"> 
    <h1> GOBUYBOOKS </h1>
     <p> Reaching out to all University students </p>
      </section>

       
</div>

<div class = "nav1">
  <ul>
  <li><a href=""> Home </a></li>
    <li><a href=""> Books </a></li>
      <li><a href=""> law  </a></li>
       <li><a href=""> Medicine </a></li>
         <li><a href=""> History </a></li>
  </ul>
</div>

<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Shop</li>
  </ol>
</nav>

<div class = "body-image">

</div>

<div class = "words">
  <p>This great brand aims to help you grow by providing knowledge in the least stressful way,
    secured and at an affordable price.<br> We do not want you to be involved with the hassle of 
    acquiring your knowledge materials because we are <span class = "cap-word">"providing literacy at your doorstep."</span>
   </p> 
  </div>

  <div class = "container-fluid" id = "banners">
   <div class = "row">

    <div class = "col-sm-4">
      <img src="../images/g2.jpg " alt = "banner">
    </div>

    <div class = "col-sm-4">
      <img src="../images/g6.jpg " alt = "banner">
    </div>

    <div class = "col-sm-4">
      <img src="../images/g3.jpg " alt = "banner">
    </div>



   </div>

  </div>












  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href = "../css/index.css" rel = "stylesheet"> 
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,800&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
      <title>All-Products GOBUYBOOKS5</title>
  </head>
  <body>  
  <div class = "container">  
      <div class="navbar">
          <div class="logo">
            <img src="../images/gbb.svg" class = "svg-image" width="120px"> 
           <strong> GOBUYBOOKS </strong>
          </div>
          <nav>
            <ul id = "MenuItems">
              <li><a href=""> Home </a></li>
              <li><a href=""> Products </a></li>
              <li><a href=""> About </a></li>
              <li><a href=""> Contact </a></li>
              <li><a href=""> Account </a></li>
            </ul>
          </nav>
          <img src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png"/>
          <!--img src="../images/cart.jfif" width="30px" height="30px" alt=""-->
          <!--i class="fa fa-cart-arrow-down" aria-hidden="true"></i-->
          <img src="../images/menu.png" class = "menu-icon" onclick="menutoggle()" alt="">
      </div> 
  </div>
  
  
  <!--account-->
  <div class="account-page">
      <div class="container">
          <div class="row">
              <div class="col-2">
                  <img src="../images/images.jfif" width="100%" alt="">
              </div>
  
              <div class="col-2">
                  <div class="form-container">
                      <div class="form-btn">
                          <span onclick="login()"> Login</span>
                          <span onclick="register()"> Register</span>
                          <hr id = "indicator">
                      </div>
  
                      <form id="LoginForm">
                          <input type="text" placeholder="Username">
                          <input type="password" placeholder="password">
                          <button type="submit" class="btn"> Login </button>
                           <a href=""> Forgot password</a>
                      </form>
  
                      <form id="RegForm">
                          <input type="text" placeholder="Username">
                          <input type="email" placeholder="Email">
                          <input type="password" placeholder="password">
                          <button type="submit" class="btn"> Register </button>
                      </form>
  
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  
  
  
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col-1">
          <h3>
            Download Our App
          </h3>
          <p> Enjoy Awesome Stuffs</p>
        </div>
  
        <div class="footer-col-2">
            <img src="../images/gbb.svg" alt="">
          <p> We believe evryone is perfect in their imperfections and all can do whatever they want  </p>
        </div>
        
        <div class="footer-col-3">
          <h3>
            Useful Links
          </h3>
          <ul>
            <li> Blog Post </li>
            <li> Blog Post </li>
            <li> Blog Post </li>
            <li> Blog Post </li>
            <li> Blog Post </li>
          </ul>
        </div>
  
        <div class="footer-col-4">
          <h3>
            Follow Us
          </h3>
          <ul>
            <li> Facebook </li>
            <li> Twitter </li>
            <li> Instagram </li>
            <li> YouTube </li>
            <li> Blog Post </li>
          </ul>
        </div>
  
  
      </div>
      <hr>
      <p class = "Copyright"> Copyright 2020 - GOBUYBOOKS</p>
    </div>
  </div>
  
  <script>
    var MenuItems = document.getElementById("MenuItems");
  
    MenuItems.style.maxHeight = "0px";
  
    function menutoggle(){
      if(MenuItems.style.maxHeight == "0px")
      {
        MenuItems.style.maxHeight = "200px";
      }
      else
      {
        MenuItems.style.maxHeight = "0px";
      }
    }
  </script>
  
  <!--js form-->
  
  <script>
   var LoginForm = document.getElementById("LoginForm");
   var RegForm = document.getElementById("RegForm");
   var indicator = document.getElementById("indicator");
     
      function register(){
          RegForm.style.transform = "translateX(0px)";
          LoginForm.style.transform = "translateX(0px)";
          indicator.style.transform = "translateX(100px)";
      }
  
      function login(){
          RegForm.style.transform = "translateX(300px)";
          LoginForm.style.transform = "translateX(300px)";
          indicator.style.transform = "translateX(0px)";
      }
  
  </script>
  
  
  </body>
  </html>