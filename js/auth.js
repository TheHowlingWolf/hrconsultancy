
// //signup
// const site = document.getElementById('siteSignUp');
// site.addEventListener('submit', (e) => {
//     //preventing default refresh
//     e.preventDefault();

//     //get user info


//     const email = site['email'].value;
//     const password = site['password'].value;
//     const name = site['name'].value;
//     const phoneNo = site['phone'].value;
//     const adminAccess = true;
//     const superAdminAccess = false;

//     console.log(email);
//     console.log(password);
//     console.log(name);
//     console.log(phoneNo);
//     console.log(adminAccess);
//     console.log(superAdminAccess);
//     //signup the user using firebase
//     auth.createUserWithEmailAndPassword(email, password)
//         .then(cred => {
//             console.log(cred.user.uid);

//             db.collection('UserProfile').add({
//                 uid: cred.user.uid,
//                 name:name,
//                 phone: phoneNo,
//                 adminAccess: adminAccess,
//                 superAdminAccess: superAdminAccess
//             }).then(res=>{
//                 console.log("done");
//             });
//             site.reset();
//         }).catch(function (error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
// console.log(errorMessage);
//             // document.querySelector('.error').innerHTML = `OPPS! ${errorMessage}`;

//         });

// });

//login users
const Login = document.querySelector('#login-form');
Login.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const lg_email = Login['login_email'].value;
    const lg_pass = Login['login_password'].value;

    auth.signInWithEmailAndPassword(lg_email, lg_pass)
        .then((cred) => {
            Login.reset();

            auth.onAuthStateChanged(function (user) {
                db.collection('UserProfile').where('uid', '==', user.uid).get().then((snapshot) => {
                    var adminCheck = snapshot.docs[0].data().adminAccess;
                    var superAdminCheck = snapshot.docs[0].data().superAdminAccess;


                    if (superAdminCheck) {
                        window.location.assign('superAdmin.html');
                    }
                    else if (adminCheck) {
                        window.location.assign('admin.html');
                    }
                    else {
                        window.location.assign('user.html');
                    }
                })
            })

        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            document.querySelector('.lgerror').innerHTML = `OPPS! ${errorMessage}`;
        });
});
