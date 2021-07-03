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












