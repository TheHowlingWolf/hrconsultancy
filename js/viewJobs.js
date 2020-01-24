var jobDet;

var jobView = document.getElementById('jobs');

db
    .collection('job')
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc);
           jobView.innerHTML += ` <div class="col-12 row bg-light my-2 py-4">
           <div class="col-lg-2 col-sm-12">
             <img />
           </div>
           <div class="col-lg-8 row col-sm-12">
             <h3 class="col-lg-11 my-1 font-weight-bold col-sm-12">${doc.data().title}</h3>
             <div class="col-12 ">
               <hr class="col-5  float-left">
             </div>
             <div class="col-lg-3 my-1 col-sm-5 font-weight-bold">HR CONSULTANCY</div>
             <div class="col-lg-2 my-1 col-sm-5">${doc.data().type}</div>
             <div class="col-lg-2 my-1 col-sm-5">${doc.data().location}</div>
             <div class="col-lg-3 my-1 col-sm-5"> ${new Date(doc.data().lastDate).toDateString()}</div>
             <div class="col-lg-3 my-1 col-sm-6">${doc.data().position}</div>

           </div>
           <div class="col-sm-6 my-1 col-lg-2 align-self-center">
             <a class="  btn btn-outline-info " onclick="viewDetails('${doc.id}')">View More</a>
           </div>
         </div>
         
         ` 
         
        });
    })

    function viewDetails(jobId){
        console.log(jobId);
        db.collection('job').doc(jobId).get().then(snapshot=>{
            console.log(snapshot.data());
        })
    }