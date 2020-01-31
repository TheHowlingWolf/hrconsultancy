
var nav = document.querySelector('.main-nav');
var logout;
if (window.location.pathname === "/" || window.location.pathname === "/#intro") {
    nav.innerHTML =
        `<ul>
        <li class="active"><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        <li><a href="/pages/login.html">Admin login</a></li>
        <li><a href="/#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/#about" ) {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li class="active"><a href="/#about">About Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        <li><a href="/pages/login.html">Admin login</a></li>
        <li><a href="/#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/#services") {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li class="active"><a href="/#services">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        <li><a href="/pages/login.html">Admin login</a></li>
        <li><a href="/#footer">Contact Us</a></li>
        </ul>`;
}
if (window.location.pathname === "/#footer") {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        <li><a href="/pages/login.html">Admin login</a></li>
        <li class="active"><a href="/#footer">Contact Us</a></li>
        </ul>`;
}
if (window.location.pathname === "/pages/openings.html") {

    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li class="active"><a href="/pages/openings.html">Current Opennings</a></li>
        <li><a href="/pages/login.html">Admin login</a></li>
        <li><a href="/#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/pages/login.html") {
    nav.innerHTML =
        `<ul>
        <li><a href="/#intro">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/pages/openings.html">Current Opennings</a></li>
        <li class="active"><a href="/pages/login.html">Admin login</a></li>
        <li><a href="/#footer">Contact Us</a></li>
        </ul>`;
}

if (window.location.pathname === "/pages/superadmin.html") {
    nav.innerHTML =
        `<ul>
        <li class="active"><a href="/pages/superadmin.html">Home</a></li>
        <li><a href="/pages/superAdminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

if (window.location.pathname === "/pages/superAdminpost.html") {
    nav.innerHTML =
        `<ul>
        <li><a href="/pages/superadmin.html">Home</a></li>
        <li class="active"><a href="/pages/superAdminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

if (window.location.pathname === "/pages/admin.html") {
    nav.innerHTML =
        `<ul>
        <li class="active"><a href="/pages/superadmin.html">Home</a></li>v
        <li><a href="/pages/adminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

if (window.location.pathname === "/pages/adminpost.html") {
    nav.innerHTML =
        `<ul>
        <li><a href="/pages/superadmin.html">Home</a></li>
        <li class="active"><a href="/pages/adminpost.html">Post A Job</a></li>
        <li><a href="" class="logout">Logout</a></li>
        <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
        </ul>`;
    logout = document.querySelector('.logout');
}

//get logout

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign("./");
    })
});