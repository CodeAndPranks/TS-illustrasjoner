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
        console.log("Adding event listener to secured link...");  // Dette bør vises også

        securedLink.addEventListener("click", function (e) {
            console.log("secured link clicked!");  //  klikk test for secured link.
            e.preventDefault(); // Stopp standard navigasjon

            // Be om koden
            const accessCode = prompt("Tast koden !");

            // Sjekk om koden er riktig
            if (accessCode === "2020") {
                // Gå til sikret album
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
        album1: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg","17.jpg","14.jpg","15.jpg","16.jpg","13.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg"],
        album2: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg","7.jpg","8.jpg", "9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"],
        album3: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg","14.jpg","15.jpg"],
        //album4: ["1.jpg"]  //START SIDEEN FOR X-ANTALL MUZZIE ALBUM.
        album4_1: ["1.jpg", "2.jpg"],
        album4_2: ["1.jpg", "2.jpg", "3.jpg"],
        album4_3: ["1.jpg", "2.jpg", "3.jpg"],
        album5: ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        album6: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        album7: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg"],
   }
    // Hvis "photo" ikke fins i albumet, avslutt funksjonen.
    if (!photo || !imageLists[folderName]) {
        return;
    }
    // Konfigurer basepath og bilder
    const basePath = `../${folderName}/images/`;
    const images = imageLists[folderName];
    let currentIndex = images.indexOf(photo.src.split("/").pop()); // Finn nåværende bilde

    // Oppdater bildet
    const updatePhoto = () => {
        photo.src = basePath + images[currentIndex];
    };
    
    // Navigasjonsfunksjoner
    const showPrevious = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updatePhoto();
    };
    const showNext = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updatePhoto();
    };

    // Event listeners for navigasjon
    prevButton?.addEventListener("click", showPrevious);
    nextButton?.addEventListener("click", showNext);

});

 
