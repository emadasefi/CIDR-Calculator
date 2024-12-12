///////////////////////////////////////////////////////////////////////////////////
//;==========================================
//; Title:  CIDR Calculator
//; Author: Emad Asefi / @emadasefi / emad.asefi@gmail.com
//; Version:  - v1.1
//;==========================================
///////////////////////////////////////////////////////////////////////////////////
function downloadResults(resultId, filename) {
    const resultText = document.getElementById(resultId).innerText;
    
    // Create a blob from the result text
    const blob = new Blob([resultText], { type: 'text/plain' });
    
    // Create a link element
    const link = document.createElement('a');
    
    // Set the URL using createObjectURL
    link.href = URL.createObjectURL(blob);
    
    // Set the download attribute with a filename
    link.download = filename;
    
    // Append to the document and trigger the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up and remove the link
    document.body.removeChild(link);
}
///////////////////////////////////////////////////////////////////////////////////
//;==========================================
//; Title:  CIDR Calculator
//; Author: Emad Asefi / @emadasefi / emad.asefi@gmail.com
//; Version:  - v1.1
//;==========================================
///////////////////////////////////////////////////////////////////////////////////