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
    console.log("Secured link element found:", securedLink);  // chech secure elementet finn>
   
    if (securedLink) {
        console.log("Adding event listener to secured link...");  // Test,bør vises i consol>

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
                alert("Tomt ? \n Login-Secure: 2 feil gir virus i retur !");
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
   album1: [
        "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
        "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
        "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg",
        "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg",
        "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg",
        "47.jpg", "48.jpg"
    ],
    album2: [
        "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
        "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
        "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg",
        "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg",
        "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg",
        "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg",
        "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg", "62.jpg", "63.jpg", "64.jpg",
        "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg",
        "74.jpg", "75.jpg", "76.jpg", "77.jpg", "78.jpg", "79.jpg", "80.jpg", "81.jpg", "82.jpg",
        "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg", "89.jpg", "90.jpg", "91.jpg",
        "92.jpg", "93.jpg", "94.jpg", "95.jpg", "96.jpg", "97.jpg", "98.jpg", "99.jpg", "100.jpg",
        "101.jpg", "102.jpg", "103.jpg", "104.jpg", "105.jpg", "106.jpg", "107.jpg", "108.jpg",
        "109.jpg", "110.jpg", "111.jpg", "112.jpg", "113.jpg", "114.jpg", "115.jpg", "116.jpg", "117.jpg", "118.jpg", "119.jpg",
        "120.jpg", "121.jpg", "122.jpg", "123.jpg", "124.jpg", "125.jpg", "126.jpg", "127.jpg", "128.jpg",
        "129.jpg", "130.jpg", "131.jpg", "132.jpg", "133.jpg", "134.jpg"
    ],
  album3: [
        "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg",
        "13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg",
        "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
         "41.jpg","42.jpg","43.jpg","44.jpg","45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg",
        "55.jpg","56.jpg","57.jpg","58.jpg", "59.jpg","60.jpg", "61.jpg","62.jpg","63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg","68.jpg",
         "69.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg", "77.jpg", "78.jpg", "79.jpg","80.jpg", "81.jpg","82.jpg",
        "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg","88.jpg", "89.jpg", "90.jpg", "91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg",
        "96.jpg", "97.jpg", "98.jpg","99.png","100.png", "101.jpg", "102.jpg", "103.jpg", "104.jpg", "105.jpg", "106.jpg", "107.jpg", "108.jpg",
        "109.jpg", "110.jpg", "111.jpg", "112.jpg", "113.jpg", "114.jpg", "115.jpg", "116.jpg", "117.jpg", "118.jpg", "119.jpg",
        "120.jpg", "121.jpg", "122.jpg", "123.jpeg", "124.png"
    ],
        //album 4 index.html = START SIDEN FOR X-ANTALL MUZZIE ALBUM.
album4_1: [
         "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg" "16.jpg","17.jpg",
          "18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg", "28.jpg", "29.jpg", "30.jpg",
         "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg","41.jpg","42.jpg","43.jpg","44.jpg","45.jpg",             
         "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg","55.jpg","56.jpg", "57.jpg","58.jpg", "59.jpg", "60.jpg",
         "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg",
         "75.jpg", "76.jpg", "77.jpg", "78.jpg", "79.jpg","80.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg",
         "89.jpg", "90.jpg", "91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg", "96.jpg", "97.jpg", "98.jpg","99.png","100.png"
     ],
   album4_2: [
            "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg",
            "18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", 
            "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg","41.jpg","42.jpg","43.jpg","44.jpg","45.jpg", "46.jpg", "47.jpg", "48.jpg",
             "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg","57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg", "62.jpg", 
           "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg",
             "77.jpg", "78.jpg", "79.jpg","80.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg", "89.jpg", "90.jpg",
            "91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg", "96.jpg", "97.jpg", "98.jpg","99.jpg","100.jpg"
   ],
        album4_3: [
                   "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg",
                   "18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg", "24.jpg","25.jpg","26.jpg","27.jpg", "28.jpg", "29.jpg","30.jpg", "31.jpg", "32.jpg",
                   "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg","39.jpg", "40.jpg","41.jpg","42.jpg","43.jpg","44.jpg","45.jpg", "46.jpg", "47.jpg",
                   "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg",
                   "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg", "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg",
                   "76.jpg", "77.jpg", "78.jpg", "79.jpg","80.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg", "86.jpg", "87.jpg", "88.jpg", "89.jpg",
                   "90.jpg", "91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg", "96.jpg", "97.jpg", "98.jpg","99.jpg","100.jpg"
      ],
        
           album5: [
              "1.jpg", "2.jpg", "3.jpg", "4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg", "10.jpg", "11.jpg", "12.jpg","17.jpg","14.jpg","15.jpg","16.jpg","13.jpg",
              "18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg", "28.jpg", "29.jpg","30.jpg", "31.jpg", "32.jpg",
                 "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg","39.jpg", "40.jpg","41.jpg","42.jpg","43.jpg","44.jpg","45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg"
       ],
        album6: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg"
                
                ],
        album7: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg",8.jpg","9jpg","10.jpg", "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg", "24.jpg","25.jpg]
      
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
  
 
