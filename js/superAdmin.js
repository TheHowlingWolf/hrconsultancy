
  document.querySelector('.update-auth-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    
    (async function updateAuthPass(){
        var newAuthKey = document.getElementById('authUpdatePass').value;
        var oldAuthKey = document.getElementById('authOldPass').value;
        var adminKey;
        user = auth.getUser('DUDhr2PhSggljhZgaSAle75YDgv1');

        var credential = firebase.auth.EmailAuthProvider.credential(user.email, oldAuthKey);
        await user.reauthenticateWithCredential(credential).then(function() {
            if(oldAuthKey !== newAuthKey && newAuthKey!= "" && oldAuthKey!=="")
            {
                user.updateAuthword(newAuthKey).then(()=>{
                    document.querySelector('.con-reg').classList.remove('d-none');
                    document.querySelector(".settings-menu-updateauth").classList.add("d-none");
                    setTimeout(()=>{
                        document.querySelector('.con-reg').classList.add('d-none');
                        document.querySelector(".settings-menu").classList.remove("d-none");
                    },2000);
                })
                .catch((error)=>{
                    var errorMessage = error.message;
                    document.querySelector('.auth-error').innerHTML = `OPPS! ${errorMessage}`;
                });

            }
            else if(oldAuthKey === newAuthKey )
            {
                document.querySelector('.auth-error').innerHTML = `OPPS! New And Old Keys Cannot Be Same`;
            }
            else
            {
                document.querySelector('.auth-error').innerHTML = `OPPS! Please Fill The Fields`;
            }
          })
          .catch(function(error) {
            var errorMessage = error.message;
                    document.querySelector('.auth-error').textContent = `OPPS! ${errorMessage}`;
          }); 

            
    })();
    
  });


  document.querySelector('.update-pass-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    
    (async function updatePass(){
        var newPassKey = document.getElementById('updatePass').value;
        var oldPassKey = document.getElementById('oldPass').value;
        var adminKey;
        
        var user = auth.currentUser;
        var credential = firebase.auth.EmailAuthProvider.credential(user.email, oldPassKey);
        await user.reauthenticateWithCredential(credential).then(function() {
            if(oldPassKey !== newPassKey && newPassKey!= "" && oldPassKey!=="")
            {
                user.updatePassword(newPassKey).then(()=>{
                    document.querySelector('.con-reg').classList.remove('d-none');
                    document.querySelector(".settings-menu-updatepass").classList.add("d-none");
                    setTimeout(()=>{
                        document.querySelector('.con-reg').classList.add('d-none');
                        document.querySelector(".settings-menu").classList.remove("d-none");
                    },2000);
                })
                .catch((error)=>{
                    var errorMessage = error.message;
                    document.querySelector('.pass-error').innerHTML = `OPPS! ${errorMessage}`;
                });

            }
            else if(oldPassKey === newPassKey )
            {
                document.querySelector('.pass-error').innerHTML = `OPPS! New And Old Keys Cannot Be Same`;
            }
            else
            {
                document.querySelector('.pass-error').innerHTML = `OPPS! Please Fill The Fields`;
            }
          })
          .catch(function(error) {
            var errorMessage = error.message;
                    document.querySelector('.pass-error').textContent = `OPPS! ${errorMessage}`;
          }); 
    })();
    
  });