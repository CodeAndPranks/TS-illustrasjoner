document.addEventListener("DOMContentLoaded", () => {
    // Referanser til elementene
    const photo = document.getElementById("photo");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // Hent nåværende sti for å finne mappe (folder) navn
    const pathParts = window.location.pathname.split("/");
    const folderName = pathParts[pathParts.length - 2]; // Nest siste del er foldernavnet
 
 const securedLink = document.getElementById("secured-link");
    console.log("Secured link element found:", securedLink);  // chech secure elementet finnes

   
    if (securedLink) {
        console.log("Adding event listener to secured link...");  // Test,bør vises i console.log 

        securedLink.addEventListener("click", function (e) {
            console.log("secured link clicked!");  //  klikk test for secured link.
            e.preventDefault(); // Stopp standard navigasjon

            // Be om koden
            const accessCode = prompt("Tast koden !");

            // Sjekk om koden er riktig
            if (accessCode === "2020") {
                // Hvis rett,gå til sikret album
                window.location.href = "album6/album6.html";
            } else if (accessCode === null || accessCode.trim() === "") {
                // Håndter avbrutt prompt eller tomt svar
                alert("Lure muslim ?  \n Sikring kode: 2 feil gir virus i retur !");
            } else {
                // Feil kode
                alert("Feil kode!  \n Sikring kode: 2 feil gir virus i retur !");
            }
        });
    } else {
        console.error("Secured link eleement ikke funnet i DOM.");
    }


    // Bildelister for hver mappe
    const imageLists = {
        album1: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg","17.jpg","14.jpg","15.jpg","16.jpg","13.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg"],
        album2: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"],
        album3: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg"],
        //album4: ["1.jpg"]  //START SIDEEN FOR X-ANTALL MUZZIE ALBUM.
        album4_1: ["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"],
        album4_2: ["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"],
        album4_3: ["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],
        album5: ["1.jpg", "2.jpg", "3.jpg", "4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg", "10.jpg", "11.jpg", "12.jpg","17.jpg","14.jpg","15.jpg","16.jpg","13.jpg","18.jpg","19.jpg","20.jpg","21.jpg"],
        album6: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        album7: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg","9.jpg", "10.jpg", "11.jpg", "12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg"],
   }
    // Hvis "photo" ikke fins i albumet, avslutt funksjonen.
    if (!photo || !imageLists[folderName]) {
        return;
    }
    // Hvis "photo" ikke fins i albumet, avslutt funksjonen.
    if (!photo || !imageLists[folderName]) {
        console.error("Photo element or image list not found."); // Debug log
        return; // Stop execution if no photo element or folder is found
    }

    // Konfigurer basepath og bilder
    const basePath = `../${folderName}/images/`; // Path to folder's image directory
    const images = imageLists[folderName];

    // Debugging function
    const debugLog = () => {
        console.log("Folder Name:", folderName);
        console.log("Base Path:", basePath);
        console.log("Images List:", images);
        console.log("Current Index:", currentIndex);
        console.log("Current Image Path:", photo.src);
    };

    // Finn nåværende bilde (initialize currentIndex)
    let currentIndex = images.indexOf(photo.src.split("/").pop());
    if (currentIndex === -1) currentIndex = 0; // Default to first image if not found

    // Oppdater bildet
    const updatePhoto = () => {
        photo.src = basePath + images[currentIndex];
        debugLog(); // Log every time photo updates
    };

    // Navigasjonsfunksjoner
    const showPrevious = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around
        updatePhoto();
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % images.length; // Wrap around
        updatePhoto();
    };

    // Event listeners for navigasjon
    prevButton?.addEventListener("click", () => {
        console.log("Previous button clicked."); // Debug log
        showPrevious();
    });

    nextButton?.addEventListener("click", () => {
        console.log("Next button clicked."); // Debug log
        showNext();
    });

    // Sørg for at første bilde vises med en gang
    updatePhoto(); // Display the first image immediately
    console.log("App initialized."); // Final debug log
});


 
