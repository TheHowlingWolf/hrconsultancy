
auth.onAuthStateChanged(user => {
    if (user) {
       db.collection('UserProfile').where("uid", "==", `${user.uid}`).get().then(doc => {
         if(doc.data[0].data().superAdminAccess){
           window.location.assign('/pages/superadmin.html')
         }
         else if(doc.data[0].data().adminAccess){
           window.location.assign('/pages/admin.html');
         }
       })
    }
})