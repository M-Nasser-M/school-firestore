var config = {
    apiKey: "AIzaSyCNvWwN_3cIVnk8lYdDb7aZBfluPxk_8XM",
    authDomain: "school-project-40c85.firebaseapp.com",
    databaseURL: "https://school-project-40c85.firebaseio.com",
    projectId: "school-project-40c85",
    storageBucket: "school-project-40c85.appspot.com",
    messagingSenderId: "798951948015"
  };
  firebase.initializeApp(config);
  
  var firestore=firebase.firestore();
  
  
  const outputheader = document.getElementById("#testoutput");
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const cell = document.getElementById("cell");
  const notes = document.getElementById("notes");
  const saveButton = document.getElementById("saveButton");
 
  saveButton.addEventListener("click",
  function(){
	  const text1=fname.value;
	  const text2=lname.value;
	  const text3=email.value;
	  const text4=cell.value;
	  const text5=notes.value;
	  
	  if(text1.length==0 || text2.length==0 || text3.length==0){
		  alert("fill firstname lastname and email");
		  return;
	  }
	  	 else if (isNaN(text4) == true)
      {
      alert("cell number must contain numbers");
	  return;
      }
	  else if(text4.length < 11 && text4.length!=0)
	  {
		  
		 alert("cell number incorrect");
		  return; 
	  }

	  const docRef=firestore.collection("students").doc(email.value);
	  docRef.set({
		  firstname: text1,
		  lastname: text2,
		  email:text3,
		  cell:text4,
		  notes:text5
		  }).then(function() {
    console.log("Document successfully written!");
	alert("saved");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
	  
  }
  );
