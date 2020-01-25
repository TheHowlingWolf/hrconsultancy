var jobDet;
var jobView = document.getElementById('jobs');
if (jobView) {

    db
        .collection('job')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc);
                jobView.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card text-white bg-info mb-3" style="max-width: 20rem; ">
                            <div class="card-header">${doc.data().title}</div>
                            <div class="card-body">
                              <h5 class="card-title">
                                <div class="icon" style="background: #e6fdfc;"><i class="ion-ios-paper-outline"
                                    style="color: #3fcdc7;"></i></div>
                                  {Job Company Name}
                              </h5>
                              <p class="card-text">
                                <span class="badge bg-light text-info">${doc.data().type}</span>
                                  <br />{Description}</p>
                              <div class="card-footer">
                                <div class="apply">
                                    <div class="details" style="font-size: 15px;">
                                    ${doc.data().location}<br />,${new Date(doc.data().lastDate).toDateString()}<br />,${doc.data().position}
                                    </div>
                                      <div class="text-right">
                                        <a href="#" class="ml-2 btn btn-md btn-light text-dark" onclick="viewDetails('${doc.id}')">View More</a>
                                      </div>
                                  </div>
                              </div> 
                            </div>
                        </div>
                    </div>
     `

            });
        })


}



function viewDetails(jobId) {
    jobDet = jobId;
    window.location.assign(`./jobDetail.html?jid=${jobId}` );
}

