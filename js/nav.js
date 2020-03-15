
var nav = document.querySelector('.main-nav');
var logout;
if (window.location.pathname === "/" || window.location.pathname === "/#intro") {
    nav.innerHTML =
        `<ul>
        <li class="active"><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/pages/services.html">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        
        <li><a href="/#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/#about" ) {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li class="active"><a href="/#about">About Us</a></li>
        <li><a href="/pages/services.html">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        
        <li><a href="/#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/pages/services.html") {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li class="active"><a href="/pages/services.html">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        <li><a href="/pages/services.html#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/#footer") {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/pages/services.html">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        
        <li class="active"><a href="/#footer">Contact Us</a></li>
        </ul>`;
}
if (window.location.pathname === "/pages/openings.html") {

    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/pages/services.html">Services</a></li>
        <li class="active"><a href="/pages/openings.html">Current Opennings</a></li>
        
        <li><a href="/pages/openings.html#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/pages/login.html") {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/pages/services.html">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        <li><a href="/pages/login.html#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/pages/superadmin.html") {
    nav.innerHTML =
        `<ul>
        <li class="active"><a href="/pages/superadmin.html">Home</a></li>
        <li><a href="/pages/superAdminPost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

if (window.location.pathname === "/pages/superAdminPost.html") {
    nav.innerHTML =
        `<ul>
        <li><a href="/pages/superadmin.html">Home</a></li>
        <li class="active"><a href="/pages/superAdminPost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

if (window.location.pathname === "/pages/admin.html") {
    nav.innerHTML =
        `<ul>
        <li class="active"><a href="/pages/superadmin.html">Home</a></li>v
        <li><a href="/pages/adminPost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

if (window.location.pathname === "/pages/adminPost.html") {
    nav.innerHTML =
        `<ul>
        <li><a href="/pages/superadmin.html">Home</a></li>
        <li class="active"><a href="/pages/adminPost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

//logo change
window.addEventListener("scroll",(e)=>{
    
    cur= document.querySelector('#header').offsetHeight
     if(window.location.href !== 'https://hrconsultant.co.in/' || window.location.href !== 'https://hrconsultant.co.in')
    {
        if(window.scrollY > 0+cur)
            document.querySelector('#logohead').src = "../img/logoScroll.png" 
        else if (window.scrollY <= 0+cur)
            document.querySelector('#logohead').src = "../img/logo.png"
        else
        console.log('hi');
    }
    else
    {
        if(window.scrollY > 0+cur)
            document.querySelector('#logohead').src = "./img/logoScroll.png" 
        else if (window.scrollY <= 0+cur)
            document.querySelector('#logohead').src = "./img/logo.png"
        else
        console.log('hi');
    }
    
})

