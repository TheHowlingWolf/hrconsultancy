
var cvUpload = document.getElementById('cvUpload');

document.getElementById('aResume').addEventListener('change', e => {
    document.getElementById('aResumeLabel').innerHTML = e.target.files[0].name;

})

document.getElementById('vResume').addEventListener('change', e => {
    document.getElementById('vResumeLabel').innerHTML = e.target.files[0].name;

})

cvUpload.addEventListener('submit', (e) => {
    e.preventDefault();
    var name = cvUpload["name"].value;
    var email = cvUpload["email"].value;
    var phone = cvUpload["phone"].value;
    var AResume = cvUpload["aResume"].files[0];
    var VResume = cvUpload["vResume"].files[0];
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(AResume);
    console.log(VResume);
    var storageRef = store.ref('audio-CV/' + AResume.name)
    var task = storageRef.put(AResume)
    task.on('state_changed',
        function error(err){
            console.log(err);
        },
        function complete(){
            console.log("success");
        }
)




})




