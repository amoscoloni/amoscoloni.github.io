// let listItems = document.getElementsByClassName( "nav-link" );
// let tabbedItem = listItems[0];
// let displaySections = [ "tic-tac-toe-project", "trip-tracker-project", "card-project", "music-project"];
// let displayedSection = document.getElementById(displaySections[0]);

// function changeTab( event ) {
//     tabbedItem.className = "nav-link";
//     tabbedItem = event.target;
//     event.target.className = "nav-link active";

//     let index = getIndexOf( event.target );
//     displayedSection.style.display = 'none';
//     displayedSection = document.getElementById(displaySections[index]);
//     displayedSection.style.display = 'flex';
// }

// function getIndexOf ( element ) {
//     for ( let i = 0; i < listItems.length; i++ ) {
//         if ( listItems[i] == element )
//             return i;
//     }

//     return -1;
// }



// function initializeProject() {
//     for ( let i = 0; i < listItems.length; i++ ) {
//         listItems[i].addEventListener( 'click', changeTab );

//         if ( i != 0)
//             document.getElementById(displaySections[i]).style.display = 'none';
//     }
// }

// function loadCardProject() {
//     console.log("test")
// }

// initializeProject();