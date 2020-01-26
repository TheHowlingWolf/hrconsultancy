var nav = document.querySelector('.main-nav');
var logout;
(async function () {
  await firebase.auth().onAuthStateChanged(async function (user) {
    if (user) {
      /////user is signed in
      var uid = user.uid;
      var isSuperAdmin;
      await db.collection('UserProfile').where('uid', '==', uid).get().then((snapshot) => {
        isSuperAdmin = snapshot.docs[0].data().superAdminAccess;
      })
      if (isSuperAdmin) {
        ////////////////superAdminAccess
        nav.innerHTML =
          `<ul>
              <li><a href="../pages/superadmin.html">Home</a></li>
              <li><a href="../pages/adminpost.html">Post A Job</a></li>
              <li><a href="" class="logout">Logout</a></li>
              <li><button class="btn btn-md btn-info mt-1 p-1" onclick="settings()"><i class="fa fa-cog"></i><b> Settings</b></button></li>
              </ul>`;
      }
      else {
        nav.innerHTML =
          `<ul>
            <li><a href="../pages/admin.html">Home</a></li>
            <li><a href="../pages/adminpost.html">Post A Job</a></li>
            <li><a href="" class="logout">Logout</a></li>
            <ul>`;
          }
          //get logout
          logout = document.querySelector('.logout');
          logout.addEventListener('click',(e)=>{
            e.preventDefault();
            auth.signOut().then(()=>{
                window.location.assign("../index.html");
            })
        });
        } else {
          // No user is signed in.
          nav.innerHTML = 
        `<ul>
        <li class="active"><a href="../index.html#intro">Home</a></li>
        <li><a href="../index.html#about">About Us</a></li>
        <li><a href="../index.html#services">Services</a></li>
        <li><a href="./pages/openings.html">Current Opennings</a></li>
        <li><a href="./pages/login.html">Admin login</a></li>
        <li><a href="../index.html#footer">Contact Us</a></li>
        </ul>`;
        }
      });
    //////logout users
    
})();
