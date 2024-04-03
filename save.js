function loadSaveFromExport(exportString) {
    // convert Base64 to a binary string 
    const exportBinary = atob(exportString);

    // split it into an array rather than a "string"
    const charData = exportBinary.split('').map(function(x){return x.charCodeAt(0); });

    // convert to binary
    const binData = new Uint8Array(charData);

    // Pako magic
    const saveData = pako.inflate(binData, { to: 'string' });

    const saveJson = JSON.parse(saveData);

    // Output to console
    console.log(saveJson.Memories.TotalMemories);

    return saveJson;
}