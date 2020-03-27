
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user)
        db.collection('UserProfile').where("uid", "==", `${user.uid}`).get().then(doc => {
            console.log(doc.docs);
            if (!doc.docs[0].data())
                auth.signOut().then(() => {
                    window.location.assign("./login.html");
                })
            else
                if (doc.docs[0].data().adminAccess) {
                    let allJobApplicants = document.getElementById('allJobApplicants');
                    var applicantsNo;
                    db.collection('job').get().then(async snapshot => {
                        let index = 0;
                        console.log("snapshot : "+ snapshot.docs.length)
                        if (snapshot.docs.length > 0) {
                            await snapshot.forEach(async (doc) => {
                                console.log(doc.data());
                                index += 1;

                                await db.collection('CV').where('jid', '==', `${doc.id}`).orderBy('uploadTime').get().then(async documents => {
                                    allJobApplicants.innerHTML += ` <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="card text-white bg-info mb-3 " style="max-width: 20rem; min-height:15rem;">
                                        <div class="card-header font-weight-bold text-center">${doc.data().title}</div>
                                        <div class="card-body">
                                            <p class="card-text">
                                                <span class="badge bg-light  float-right text-info" id='job${doc.id}'></span>
                                                <div class="card-footer mt-4">
                                                    <div class="apply">
                                                        <div class="details" style="font-size: 15px;">
                                ${doc.data().location}<br />january,15 2020 <br />${doc.data().position}
                                                        </div>
                                                        <div class="text-right mt-3">
                                                            <button  class="ml-2 btn btn-md btn-light text-info" onClick="viewApplicantDetails('${doc.id}')">View all
                                                                Applicants</button>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>`
                                    applicantsNo = await document.getElementById(`job${doc.id}`);

                                    applicantsNo.innerHTML = `${documents.docs.length} applicants`


                                });
                            });
                        }
                        else {
                            allJobApplicants.innerHTML += `<div> 
                    
                    </div>`
                        }

                    })



                }
                else {
                    console.log("not admin")
                    window.location.assign('./login.html')
                }


        })
    }
    else {
        console.log("not loggedin");
        window.location.assign('./login.html');
    }
})



function viewApplicantDetails(jid) {
    document.getElementById('viewApplicants').classList.add('d-none');
    document.getElementById('viewApplicantsDetails').classList.remove('d-none');
    var applicantsDetail = document.getElementById('jobApplicantDetails');
    db.collection('CV').where('jid', '==', `${jid}`).orderBy("uploadTime").get().then(snapshot => {
        
        snapshot.forEach(doc => {
            applicantsDetail.innerHTML += `<tr class="text-left">
                            <td class="align-self-center">${doc.data().name}</td>
                            <td class="align-self-center">${doc.data().email}</td>
                            <td class="align-self-center">${doc.data().phoneNo}</td>
                            <td>  <a class="btn btn-sm btn-info text-light" onClick="downloadFile('${doc.data().Resume}')">See Resume </a>  </td>
                            <td class="align-self-center"> ${doc.data().Retype} </td>
                        </tr>`
        })
    })
}

function downloadFile(filename) {
    console.log(filename);
    firebase.storage().ref().child(filename).getDownloadURL().then(function (url) {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url);
        // This can be downloaded directly:
        window.open(url, '_blank');
    }).catch(function (error) {
        // Handle any errors
        console.log(error);
    });
}

//get logout
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign("./");
    })
});
