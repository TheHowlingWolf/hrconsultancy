function showSignUpForm() {
    document.getElementById('signupForm').classList.remove('d-none');
    document.getElementById('signinForm').classList.add('d-none');

}
let flag = 0;
//signup
const site = document.getElementById('siteSignUp');
site.addEventListener('submit', (e) => {
    //preventing default refresh
    e.preventDefault();
    console.log('submit');
    flag=1;
    //get user info
    const name = site['name'].value;
    const email = site['email'].value;
    const phone = site['phone'].value;
    const password = site['password'].value;
    const adminKey = site['adminKey'].value;
    const adminAccess = true;
    console.log(email);
    //console.log(siteName+'\n'+devId+'\n'+password);

    db.collection('keys').get().then(snapshot => {
        if (snapshot.docs[0].data().authkey === adminKey) {
            auth.createUserWithEmailAndPassword(email, password)
                .then(cred => {
                    auth.signOut().then(() => {
                        db.collection('UserProfile').add({
                            uid: cred.user.uid,
                            name: name,
                            phone: phone,
                            adminAccess: adminAccess,
                            superAdminAccess: false
                        }).then(doc=>{

                            site.reset();
                            document.querySelector('#signinForm').classList.remove('d-none');
                            document.querySelector('#signupForm').classList.add('d-none');
                        });
                    })
                }).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    document.querySelector('.lgerror').innerHTML = `OPPS! ${errorMessage}`;
                });
        }
        else {
            console.log("Invalid Access Key");
        }
    })
});


auth.onAuthStateChanged(user => {
    if (user) {
        if (flag===0)
            window.location.assign('./admin.html');
        else
        {
            
        }
    }
})


//login users
const Login = document.querySelector('#login-form');
Login.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const lg_email = Login['login_email'].value;
    const lg_pass = Login['login_password'].value;

    auth.signInWithEmailAndPassword(lg_email, lg_pass)
        .then((cred) => {
            document.querySelector('.lgerror').innerHTML = '';
            Login.reset();
            setTimeout((time) => {
                auth.onAuthStateChanged(function (user) {
                    db.collection('UserProfile').where('uid', '==', user.uid).get().then((snapshot) => {
                        var adminCheck = snapshot.docs[0].data().superAdminAccess;
                        console.log(adminCheck);

                        if (adminCheck) {
                            window.location.assign('../pages/superadmin.html');
                        }
                        else {
                            window.location.assign('../pages/admin.html');
                        }
                    })
                })
            }, 2000);
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            document.querySelector('.lgerror').innerHTML = `OPPS! ${errorMessage}`;
        });
});
