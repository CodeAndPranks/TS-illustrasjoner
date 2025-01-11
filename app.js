document.addEventListener("DOMContentLoaded", () => {
    // Select all elements in the body
const elements = document.body.getElementsByTagName("*");
for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("translate", "no");
}
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
            const accessCode = prompt("Vennligst Tast Kode");

            // Sjekk om koden er riktig
            if (accessCode === "2020") {
                // Hvis rett,gå til sikret album
                window.location.href = "album6/album6.html";
            } else if (accessCode === null || accessCode.trim() === "") {
                // Håndter avbrutt prompt eller tomt svar
                alert("Lure muslim ?  \n Login-Secure: 2 feil gir virus i retur !");
            } else {
                // Feil kode
                alert("Feil kode!  \n Login-Secure:2 feil gir virus i retur !");
            }
        });
    } else {
        console.error("Secured link element ikke funnet i DOM.");
    }


    // Bildelister for hver mappe
    const imageLists = {
        album1: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg","17.jpg","14.jpg","15.jpg","16.jpg","13.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg"],
        album2: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg","32.jpg"],
        album3: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"],
        //album4: ["1.jpg"]  //START SIDEEN FOR X-ANTALL MUZZIE ALBUM.
        album4_1: ["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg"
],
        album4_2: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg"],
        album4_3: ["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],
        album5: ["1.jpg", "2.jpg", "3.jpg", "4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg", "10.jpg", "11.jpg", "12.jpg","17.jpg","14.jpg","15.jpg","16.jpg","13.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"],
        album6: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        album7: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg","9.jpg", "10.jpg", "11.jpg", "12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"],
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
        debugLog(); // Log every time photo updates.Console.log is greath !
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
    // Define the click and touch event handlers
const handlePrevClick = () => {
    console.log("Previous button clicked."); // Debug log
    showPrevious();
};

const handleNextClick = () => {
    console.log("Next button clicked."); // Debug log
    showNext();
};

    // Add event listeners for both touch and click events
if (prevButton) {
    prevButton.addEventListener("click", handlePrevClick);
    prevButton.addEventListener("touchstart", (event) => {
        event.preventDefault(); // Prevents the default action to avoid triggering click event immediately after
        handlePrevClick();
    });
};

if (nextButton) {
    nextButton.addEventListener("click", handleNextClick);
    nextButton.addEventListener("touchstart", (event) => {
        event.preventDefault(); // Prevents the default action to avoid triggering click event immediately after
        handleNextClick();
    });
};
    updatePhoto(); // Sørg for at første bilde vises med en gang
    console.log("App initialized."); // Final debug
});   
  
 
