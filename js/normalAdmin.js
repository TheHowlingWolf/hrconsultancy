let allJobApplicants = document.getElementById('allJobApplicants');
var applicantsNo;
db.collection('job').get().then((snapshot) => {
    snapshot.docs.map((doc, index) => {
        console.log(index);

        allJobApplicants.innerHTML += ` <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card text-white bg-info mb-3" style="max-width: 20rem; ">
            <div class="card-header font-weight-bold text-center">${doc.data().title}</div>
            <div class="card-body">
                <p class="card-text">
                    <span class="badge bg-light  float-right text-info" id='job${index}'></span>
                    <div class="card-footer mt-4">
                        <div class="apply">
                            <div class="details" style="font-size: 15px;">
                                Delhi<br />january,15 2020 <br />${doc.data().position}
                            </div>
                            <div class="text-right mt-3">
                                <a href="#" class="ml-2 btn btn-md btn-light text-info">View all
                                    Applicants</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>`

        applicantsNo = document.getElementById(`job${index}`);
        console.log(applicantsNo)
        db.collection('CV').where('jid', '==', `${doc.id}`).get().then(documents => {
            documents.docs.map(d => {
                console.log(d.data());
            })
            applicantsNo.innerHTML = `${documents.docs.length} applicants`
            console.log(applicantsNo);

        });
    });
})