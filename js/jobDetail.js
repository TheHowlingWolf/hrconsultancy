var search = location.search.substring(1);
var s = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

    var jobHead = document.getElementById('jobHeader');
    var jobTitle = document.getElementById('jobDetails');
    console.log(s);

    db.collection('job').doc(s.jid).get().then(snapshot => {
        jobDet = snapshot.data();
        jobHead.innerHTML = `<h4 class="font-weight-bolder">${jobDet.title}</h4>`;
        
        jobTitle.innerHTML=`   <div class="col-12 mt-4 mb-2"> <b>Qualification :</b> ${jobDet.qualification}</div>
        <div class="col-12 m-2">

        <b>Experience:</b> ${jobDet.experience}
        </div>
        <div class="col-12 m-2">

            <b>Job Location: </b>${jobDet.address}</div>

        <div class="col-12 my-4">
            <p class="mb-2"><b >Job Responsiblity</b></p>
            <p>
            ${jobDet.responsiblity}

            </p>

        </div>
        <button class="btn btn-outline-info" onclick="applyJob('${jobDet.id}')">Apply for this job</button>
        `
    })



    function applyJob(jobid){
        
    }

