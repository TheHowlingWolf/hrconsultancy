let allJobApplicants = document.getElementById('allJobApplicants');
var applicantsNo;
db.collection('job').get().then(async snapshot => {
    let index = 0;
    await snapshot.forEach(async (doc) => {
        index += 1;

        await db.collection('CV').where('jid', '==', `${doc.id}`).get().then(async documents => {
            allJobApplicants.innerHTML += ` <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card text-white bg-info mb-3" style="max-width: 20rem; ">
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
})


function viewApplicantDetails(jid) {
    document.getElementById('viewApplicants').classList.add('d-none');
    document.getElementById('viewApplicantsDetails').classList.remove('d-none');
    var applicantsDetail = document.getElementById('jobApplicantDetails');
    db.collection('CV').where('jid', '==', `${jid}`).get().then(snapshot => {
        snapshot.forEach(doc => {
            applicantsDetail.innerHTML += `<tr>
            <td>${doc.data().name}</td>
            <td>${doc.data().email}</td>
            <td>${doc.data().phoneNo}</td>
            <td>${doc.data().audioResume}</td>
            <td>${doc.data().videoResume}</td>
        </tr>`
        })
    })
}