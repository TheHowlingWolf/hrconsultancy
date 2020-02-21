
auth.onAuthStateChanged(user => {
    if (user) {

        db.collection('UserProfile').where("uid", "==", `${user.uid}`).get().then(doc => {
              if (doc.docs[0].data().adminAccess) {
                  console.log(user);
                var jobDet = document.getElementById('jobUpload');
                jobDet.addEventListener('submit', (e) => {
                    e.preventDefault();
                    document.getElementById('jobpostButton').disabled = true;
                    var jtitle = jobDet["jtitle"].value;
                    var jtype = jobDet["jtype"].value;
                    var jlocation = jobDet["jlocation"].value;
                    var jlastDate = jobDet["jlastDate"].value;
                    var jposition = jobDet["jposition"].value;
                    var jqualification = jobDet["jqualification"].value;
                    var jexperience = jobDet["jexperience"].value;
                    var jaddress = jobDet["jaddress"].value;

                    var jresponsibility = jobDet["jresponsibility"].value.replace(/\n\r?/g, '<br />');

                    db.collection("job").add({
                        title: jtitle,
                        type: jtype,
                        location: jlocation,
                        lastDate: jlastDate,
                        position: jposition,
                        qualification: jqualification,
                        experience: jexperience,
                        address: jaddress,
                        responsiblity: jresponsibility
                    }).then(ref => {
                        console.log(ref.id);
                        window.location.assign('../index.html')
                    })
                })
            }
              else {
        console.log("not loggedin");
        window.location.assign('./login.html');
              }
        })

    }
      else {
        console.log("not loggedin");
        window.location.assign('./login.html');
    }

})


