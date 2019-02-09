var objContainer = document.getElementById( "container" ),
    intLevels = 10,
    strBlocksHTML = '';

// Using innerHTML is faster than DOM appendChild
for( var i=0; i<intLevels; i++ ){
    for( var n=0; n<i+1; n++ ){
        strBlocksHTML += '<div class="buildingBlock"></div>';
    }
    strBlocksHTML += '<div></div>'; // Line break after each row
}

objContainer.innerHTML = strBlocksHTML;

