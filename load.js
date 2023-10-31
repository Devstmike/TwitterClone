const myleft = document.querySelector(".leftsidebar");
const myright = document.querySelector(".mainContent .column2");
const leftcontent = `<h1><i class="fa-brands fa-x-twitter"></i></h1>
<ul>
    <li><a href="index.html"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
    <li><a href="message.html"><i class="fa-solid fa-magnifying-glass"></i><span>Explore</span></a></li>
    <li><a href="notification.html"><i class="fa-regular fa-bell"></i><span>Notifications</span></a></li>
    <li><a href=""><i class="fa-regular fa-envelope"></i><span>Messages</span></a></li>
    <li><a href=""><i class="fa-solid fa-list"></i><span>Lists</span></a></li>
    <li><a href=""><i class="fa-solid fa-user-group"></i><span>Communities</span></a></li>
    <li class="premiumpage"><a href="premium.html"><i class="fa-brands fa-x-twitter"></i><span>Premium</span></a></li>
    <li><a href=""><i class="fa-solid fa-user-large"></i><span>Profile</span></a></li>
    <li><a href=""><i class="fa-regular fa-face-meh-blank"></i><span>More</span></a></li>
</ul>
<p>Post</p>
<div class="profile">
    <img src="./images/myprofilepic.jpg" alt="">
    <div class="text">
        <h3>SpreadsheetLord</h3>    
         <p>@<span>SpreadsheetLord</span></p>
    </div>
</div>`


const rightcontent  = ` <div class="search">
<i class="fa-solid fa-magnifying-glass"></i>
<input type="text" placeholder="Search">
</div>
<div class="live">
<h1>Live On X</h1>
<div>
    <img src="./images/myprofilepic.jpg" alt="">
    <span>SpreadsheetLord</span>  is listening
</div>
</div>
<div class="Trends">
<h1>Trends for You</h1>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
<div class="trendword">
    <div class="word">
        <p>Trending in Nigeria</p>
        <h3>Maraji</h3>
        <p><span>2,997 </span>posts</p>
   </div>
   <div>...</div>                        
</div>
</div>
`;


myleft.innerHTML = leftcontent;
myright.innerHTML = rightcontent;

