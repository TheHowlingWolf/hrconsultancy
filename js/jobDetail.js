
// auth.onAuthStateChanged(user => {
//     if (user) {

// db.collection('UserProfile').where("uid", "==", `${user.uid}`).get().then(doc => {

var search = location.search.substring(1);
var s = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

var jobHead = document.getElementById('jobHeader');
var jobTitle = document.getElementById('jobDetails');
console.log(s);
let jobLastDate;
db.collection('job').doc(s.jid).get().then(snapshot => {
    jobDet = snapshot.data();
    jobLastDate=jobDet.lastDate;
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

document.getElementById('Resume').addEventListener('change', e => {
    document.getElementById('ResumeLabel').innerHTML = e.target.files[0].name;

})

cvUpload.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('cvButton').disabled = true;
    var name = cvUpload["name"].value;
    var email = cvUpload["email"].value;
    var phone = cvUpload["phone"].value;
    var Resume = cvUpload["Resume"].files[0];
    const uMessage = document.querySelector('#uploadMessage');
let f=1;
    if(new Date(Date.now())  > new Date(jobLastDate) ){
        let x = prompt("Last date to register has already passed. Type YES if you still want to submit the Resume.");
        if(x==="YES"){
            f=1
        }
        else{
            
            document.getElementById('cvButton').disabled = false;
            return;
        }
    }


    if(Resume.size > 63000000){
        document.getElementById('cvButton').disabled = false;
        uMessage.classList.remove('d-none');
        uMessage.classList.add('text-danger');
        uMessage.innerHTML = "File size should be below 60 MB ";
        return;
    }
    

    var resumeName = document.querySelector('#Resume').value;
    var extension = resumeName.substring(resumeName.lastIndexOf('.') + 1);
    console.log(extension);
    var nResume;
    if (extension == 'mp3' || extension == 'aac' || extension == 'wmv' || extension == 'ooc') {
        nResume = 'resume-CV/' + 'Audio From: ' + email + ` ${(new Date).getDate()}` + "|" + `${(new Date).getMonth() + 1}` + "|" + `${(new Date).getYear()}`  + "." + extension;
        Retype = "Audio";
    }
    else if (extension == 'mkv' || extension == 'mp4' || extension == 'mpeg') {
        nResume = 'resume-CV/' + 'Video From: ' + email + ` ${(new Date).getDate()}` + "|" + `${(new Date).getMonth() + 1}` + "|" + `${(new Date).getYear()}` + "." + extension;
        Retype = "Video";
    }
    else {
        console.log('Not Supported');
        document.getElementById('cvButton').disabled = false;
        uMessage.classList.remove('d-none');
        uMessage.classList.add('text-danger');
        uMessage.innerHTML = "File type not supported";
        return;
    }


    var StorageRef = firebase.storage().ref(nResume);
    var task = StorageRef.put(Resume);
    document.getElementById('progressbar').classList.remove('d-none');
    document.getElementById('ResumeInput').classList.add('d-none');
    let AProgressBar = document.getElementById('UploadProgress');
    task.on('state_changed', function (snapshot) {

        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        AProgressBar.style.width = `${progress}%`
        AProgressBar.setAttribute("aria-valuenow", `${progress}`);
        console.log('Upload is ' + progress + '% done');

    }, function (error) {
        uMessage.classList.remove('d-none');
        uMessage.classList.add('text-danger');
        uMessage.innerHTML = "Error Uploading File";
        document.getElementById('cvButton').disabled = false;
        return;

    }, function () {


        uMessage.classList.remove('d-none');
        uMessage.classList.add('text-success');
        uMessage.innerHTML = "File Uploaded Successfully <br>Uploading form please wait...";

        db.collection('CV').add({
            name: name,
            email: email,
            jid: s.jid,
            phoneNo: phone,
            Resume: nResume,
            Retype: Retype,
            uploadTime:Date.now()
        }).then(ref => {
            cvUpload.reset();
            window.location.assign('/');
        }).catch(err => console.log(JSON.stringify(err)));

    });





})



// })
//     }
//     else {
//         console.log("not loggedin");
//         window.location.assign('./login.html');
//     }
// })
