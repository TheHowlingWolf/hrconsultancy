var search = location.search.substring(1);
var s = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

var jobHead = document.getElementById('jobHeader');
var jobTitle = document.getElementById('jobDetails');
console.log(s);

db.collection('job').doc(s.jid).get().then(snapshot => {
    jobDet = snapshot.data();
    jobHead.innerHTML = `<h4 class="font-weight-bolder">${jobDet.title}</h4>`;

    jobTitle.innerHTML = `   <div class="col-12 mt-4 mb-2"> <b>Qualification :</b> ${jobDet.qualification}</div>
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
        <button type="button" class="btn btn-info btn-lg"  data-toggle="modal" data-target="#myModal"  >Apply for this job</button>
        `
})







var cvUpload = document.getElementById('cvUpload');

document.getElementById('aResume').addEventListener('change', e => {
    document.getElementById('aResumeLabel').innerHTML = e.target.files[0].name;

})

document.getElementById('vResume').addEventListener('change', e => {
    document.getElementById('vResumeLabel').innerHTML = e.target.files[0].name;
})

cvUpload.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('cvButton').disabled = true;
    var name = cvUpload["name"].value;
    var email = cvUpload["email"].value;
    var phone = cvUpload["phone"].value;
    var AResume = cvUpload["aResume"].files[0];
    var VResume = cvUpload["vResume"].files[0];

    videoResume = 'video-CV/' + Date.now() + email;
    audioResume = 'audio-CV/' + Date.now() + email;
    
    var audioStorageRef = firebase.storage().ref(audioResume)
    var task = audioStorageRef.put(AResume)
    task.on('state_changed',
        function error(err) {
            console.log(err);
        },
        function complete() {
            console.log("success");
        }
    )
    var videoStorageRef = firebase.storage().ref(videoResume)

    task = videoStorageRef.put(AResume)
    task.on('state_changed',
        function error(err) {
            console.log(err);
        },
        function complete() {
            console.log("success");
        }
    )

    db.collection('CV').add({
        name: name,
        email: email,
        jid:s.jid,
        phoneNo: phone,
        audioResume: audioResume,
        videoResume: videoResume
    }).then(ref=>{
        cvUpload.reset();
        window.location.assign('../index.html')
        
        
    }).catch(err=>console.log(JSON.stringify(err)));


})




