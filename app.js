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
 
 //obfuscated code for secured album
    
 const _0x1d3b4c=_0x5e61;(function(_0x23db38,_0x5eaf53){const _0x103781=_0x5e61,_0x5e803b=_0x23db38();while(!![]){try{const _0x306817=parseInt(_0x103781(0x167))/0x1+-parseInt(_0x103781(0x169))/0x2+-parseInt(_0x103781(0x160))/0x3*(parseInt(_0x103781(0x166))/0x4)+-parseInt(_0x103781(0x163))/0x5+parseInt(_0x103781(0x16a))/0x6+parseInt(_0x103781(0x161))/0x7*(parseInt(_0x103781(0x15c))/0x8)+-parseInt(_0x103781(0x165))/0x9*(-parseInt(_0x103781(0x15d))/0xa);if(_0x306817===_0x5eaf53)break;else _0x5e803b['push'](_0x5e803b['shift']());}catch(_0x1684aa){_0x5e803b['push'](_0x5e803b['shift']());}}}(_0x1508,0x8efd4));function _0x5e61(_0x537c62,_0x163e08){const _0x150891=_0x1508();return _0x5e61=function(_0x5e615d,_0x4b397e){_0x5e615d=_0x5e615d-0x152;let _0x811f6d=_0x150891[_0x5e615d];return _0x811f6d;},_0x5e61(_0x537c62,_0x163e08);}const securedLink=document[_0x1d3b4c(0x15a)](_0x1d3b4c(0x158));console[_0x1d3b4c(0x15f)](_0x1d3b4c(0x164),securedLink);securedLink&&(console['log'](_0x1d3b4c(0x157)),securedLink['addEventListener'](_0x1d3b4c(0x156),function(_0x14f0c7){const _0x284ad8=_0x1d3b4c;console[_0x284ad8(0x15f)](_0x284ad8(0x154)),_0x14f0c7[_0x284ad8(0x168)]();const _0x2ff098=prompt(_0x284ad8(0x155));if(_0x2ff098===_0x284ad8(0x152))window[_0x284ad8(0x162)][_0x284ad8(0x153)]=_0x284ad8(0x15b);else _0x2ff098===null||_0x2ff098===''?alert(_0x284ad8(0x15e)):alert('Feil\x20kode!\x20\x20\x0a\x20Login-Secure:2\x20feil\x20gir\x20virus\x20i\x20retur\x20!');}));here;function _0x1508(){const _0x3547d7=['2020','href','secured\x20link\x20clicked!','Vennligst\x20Tast\x20Kode','click','Adding\x20event\x20listener\x20to\x20secured\x20link...','secured-link','Hello\x20World!','getElementById','album6/album6.html','24woDqHF','579820zKusaX','\x20muslim\x20?\x20\x20\x0a\x20Login-Secure:\x202\x20feil\x20gir\x20virus\x20i\x20retur\x20!','log','3WvhdLs','390173CspYUK','location','5593990AGimZP','Secured\x20link\x20element\x20found:','252HNiNYa','1181932vTfRIv','485934XtlOfs','preventDefault','789930RiXpIK','709698oUauDm'];_0x1508=function(){return _0x3547d7;};return _0x1508();}function hi(){const _0x1a1882=_0x1d3b4c;console['log'](_0x1a1882(0x159));}hi();

    // Bildelister for hver mappe
    const imageLists = {
        album1: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg","17.jpg","14.jpg","15.jpg","16.jpg","13.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg"],
        album2: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg","32.jpg"],
        album3: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"],
        //album4: ["1.jpg"]  //START SIDEEN FOR X-ANTALL MUZZIE ALBUM.
        album4_1: ["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","5.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg"
],
        album4_2: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg"],
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
  
 
