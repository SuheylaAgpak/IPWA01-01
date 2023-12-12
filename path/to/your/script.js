function myFunction() {
    
    alert("Sie werden nun zur Registrierungsseite weitergeleitet!");

    let formPageURL = "formular.html";
    
    window.location.href = formPageURL;
    
  }

  function optionen() { 

    let uebergabeOrAbholung = document.getElementById("uebergabeOrAbholung");
    let uebergabeOptions = document.getElementById("uebergabeOptions");
    let abholungOptions = document.getElementById("abholungOptions");
   

    if (uebergabeOrAbholung.value === "uebergabe") { 
      uebergabeOptions.classList.remove("hidden");
      abholungOptions.classList.add("hidden");
   
    } else {
      abholungOptions.classList.remove("hidden");
      uebergabeOptions.classList.add("hidden");
   
    }
   
  
  }
 
  function postleitzahlPrüfung() {

    let postleitzahlInput = document.getElementById("postleitzahl");
    let postleitzahl = postleitzahlInput.value;
    let firstTwoDigits = postleitzahl.slice(0, 2);
    let userInput = document.getElementById("postleitzahl").value;
    
    if (/^\d{5}$/.test(userInput)) {
      if (firstTwoDigits === "95") {
        alert("Sie sind weit genug von Ihrem Zuhause entfernt, sodass wir Ihre Spende abholen können.Bitte füllen Sie das Formular als Abholung aus.");
        abholungOptions.classList.remove("hidden");
        uebergabeOptions.classList.add("hidden");
      } else {
        alert("Sie sind zu weit weg, als dass wir Sie von zu Hause abholen könnten. Bitte füllen Sie das Formular an der Geschäftsstelle aus.");
        uebergabeOptions.classList.remove("hidden");
        abholungOptions.classList.add("hidden");
      }
    } else {
      alert("Eintrag ist ungültig. Geben Sie eine 5-stellige Postleitzahl ein.");
      
    } 
  }

  function genderoptionenuebergabe() { 

    let genderUebergabe = document.getElementById("genderUebergabe");
    let damenOptionsUebergabe = document.getElementById("damenOptionsUebergabe");
    let herrenOptionsUebergabe = document.getElementById("herrenOptionsUebergabe");

    if (genderUebergabe.value === "Damen") {
      damenOptionsUebergabe.classList.remove("hidden");
      herrenOptionsUebergabe.classList.add("hidden");
    } else {
      herrenOptionsUebergabe.classList.remove("hidden");
      damenOptionsUebergabe.classList.add("hidden");
    }
    
}

function genderoptionenabholung() { 

  let genderAbholung = document.getElementById("genderAbholung");
  let damenOptionsAbholung = document.getElementById("damenOptionsAbholung");
  let herrenOptionsAbholung = document.getElementById("herrenOptionsAbholung");

  if (genderAbholung.value === "Damen") {
    damenOptionsAbholung.classList.remove("hidden");
    herrenOptionsAAbholung.classList.add("hidden");
  } else {
    herrenOptionsAbholung.classList.remove("hidden");
    damenOptionsAbholung.classList.add("hidden");
  }
  
}


          function submitForm(event) {
          
          event.preventDefault(); 

          showConfirmationPage();
         
}

function showConfirmationPage() {

  let uebergabeOrAbholung = document.getElementById("uebergabeOrAbholung").value;
  let genderUebergabe = document.getElementById("genderUebergabe").value;
  let genderAbholung = document.getElementById("genderAbholung").value;
  let krisengebietUebergabe = document.getElementById("krisengebietUebergabe").value;
  let krisengebietAbholung = document.getElementById("krisengebietAbholung").value;
  let abholadresse = document.getElementById("abholadresse").value;
  let postleitzahl = document.getElementById("postleitzahl").value;
  let geschaeftsstelleadresse = "Cottenbacher Straße 21, 95445 Bayreuth";
  const uebergabeadresse = geschaeftsstelleadresse;
  const currentDate = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };

  const formattedDateTime = currentDate.toLocaleDateString('de-DE', options);

  let confirmationMessage = "Registrierung erfolgreich!\n\nDetails:\n";

  if (uebergabeOrAbholung === "uebergabe") {
     
    confirmationMessage += "- Übergabe an der Geschäftsstelle\n";
    confirmationMessage += "- Gender: " + genderUebergabe + "\n"; 
    confirmationMessage += "- Krisengebiet: " + krisengebietUebergabe + "\n"; 
    confirmationMessage += "- Übergabe Adresse: " + uebergabeadresse + "\n"; 
    confirmationMessage += "- Datum und Uhrzeit: " + formattedDateTime;
  }
  else {

        confirmationMessage += "- Abholung\n";
        confirmationMessage += "- Abholadresse: " + abholadresse + "\n";
        confirmationMessage += "- Postleitzahl:" + postleitzahl + "\n";
        confirmationMessage += "- Gender: " + genderAbholung + "\n";
        confirmationMessage += "- Krisengebiet: " + krisengebietAbholung + "\n";
        confirmationMessage += "- Datum und Uhrzeit: " + formattedDateTime;
       
      }

  alert(confirmationMessage);
}
        
      
    