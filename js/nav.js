
var nav = document.querySelector('.main-nav');
if(window.location.href === "file:///D:/projects/hrconsultancy/index.html#intro" || window.location.href === "file:///D:/projects/hrconsultancy/index.html"){
    nav.innerHTML = 
        `<ul>
        <li class="active"><a href="../index.html#intro">Home</a></li>
        <li><a href="./index.html#about">About Us</a></li>
        <li><a href="./index.html#services">Services</a></li>
        <li><a href="./pages/openings.html">Current Opennings</a></li>
        <li><a href="./pages/login.html">Admin login</a></li>
        <li><a href="./index.html#footer">Contact Us</a></li>
        </ul>`;
}

if(window.location.href === "file:///D:/projects/hrconsultancy/index.html#about"){
    nav.innerHTML = 
        `<ul>
        <li><a href="../index.html#intro">Home</a></li>
        <li class="active"><a href="./index.html#about">About Us</a></li>
        <li><a href="./index.html#services">Services</a></li>
        <li><a href="./pages/openings.html">Current Opennings</a></li>
        <li><a href="./pages/login.html">Admin login</a></li>
        <li><a href="./index.html#footer">Contact Us</a></li>
        </ul>`;
}

if(window.location.href === "file:///D:/projects/hrconsultancy/index.html#services"){
    nav.innerHTML = 
        `<ul>
        <li><a href="../index.html#intro">Home</a></li>
        <li><a href="./index.html#about">About Us</a></li>
        <li class="active"><a href="./index.html#services">Services</a></li>
        <li><a href="./pages/openings.html">Current Opennings</a></li>
        <li><a href="./pages/login.html">Admin login</a></li>
        <li><a href="./index.html#footer">Contact Us</a></li>
        </ul>`;
}

if(window.location.href === "file:///D:/projects/hrconsultancy/index.html#footer"){
    nav.innerHTML = 
        `<ul>
        <li><a href="../index.html#intro">Home</a></li>
        <li><a href="./index.html#about">About Us</a></li>
        <li><a href="./index.html#services">Services</a></li>
        <li><a href="./pages/openings.html">Current Opennings</a></li>
        <li><a href="./pages/login.html">Admin login</a></li>
        <li class="active"><a href="./index.html#footer">Contact Us</a></li>
        </ul>`;
}

if(window.location.href === "file:///D:/projects/hrconsultancy/pages/openings.html"){
    nav.innerHTML = 
        `<ul>
        <li><a href="../index.html#intro">Home</a></li>
        <li><a href="../index.html#about">About Us</a></li>
        <li><a href="../index.html#services">Services</a></li>
        <li class="active"><a href="./openings.html">Current Opennings</a></li>
        <li><a href="./login.html">Admin login</a></li>
        <li><a href="../index.html#footer">Contact Us</a></li>
        </ul>`;
}

if(window.location.href === "file:///D:/projects/hrconsultancy/pages/login.html"){
    nav.innerHTML = 
        `<ul>
        <li><a href="../index.html#intro">Home</a></li>
        <li><a href="../index.html#about">About Us</a></li>
        <li><a href="../index.html#services">Services</a></li>
        <li><a href="./openings.html">Current Opennings</a></li>
        <li class="active"><a href="./login.html">Admin login</a></li>
        <li><a href="../index.html#footer">Contact Us</a></li>
        </ul>`;
}

if(window.location.href === "file:///D:/projects/hrconsultancy/pages/login.html"){
    nav.innerHTML = 
        `<ul>
        <li><a href="../index.html#intro">Home</a></li>
        <li><a href="../index.html#about">About Us</a></li>
        <li><a href="../index.html#services">Services</a></li>
        <li><a href="./openings.html">Current Opennings</a></li>
        <li class="active"><a href="./login.html">Admin login</a></li>
        <li><a href="../index.html#footer">Contact Us</a></li>
        </ul>`;
}

if(window.location.href === "file:///D:/projects/hrconsultancy/pages/superadmin.html"){
    nav.innerHTML =
    `<ul>
        <li class="active"><a href="./superadmin.html">Home</a></li>
        <li><a href="./superAdminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
        logout = document.querySelector('.logout');
}

if(window.location.href === "file:///D:/projects/hrconsultancy/pages/superAdminpost.html"){
    nav.innerHTML =
    `<ul>
        <li><a href="./superadmin.html">Home</a></li>
        <li class="active"><a href="./superAdminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
        logout = document.querySelector('.logout');
}

if(window.location.href === "file:///D:/projects/hrconsultancy/pages/admin.html"){
    nav.innerHTML =
    `<ul>
        <li class="active"><a href="./superadmin.html">Home</a></li>
        <li><a href="./adminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        </ul>`;
        logout = document.querySelector('.logout');
}

if(window.location.href === "file:///D:/projects/hrconsultancy/pages/adminpost.html"){
    nav.innerHTML =
    `<ul>
        <li><a href="./superadmin.html">Home</a></li>
        <li class="active"><a href="./adminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
        logout = document.querySelector('.logout');
}

//get logout

logout.addEventListener('click',(e)=>{
  e.preventDefault();
  auth.signOut().then(()=>{
      window.location.assign("../index.html");
  })
});