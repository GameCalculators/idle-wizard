function getTotalMemories() {
  const exportString = document.getElementById("exportText").value;
  const saveJson = loadSaveFromExport(exportString);
  const totalMemories = saveJson.Memories.TotalMemories;
  const totalMemoriesValue = Math.floor(totalMemories.Mantissa * Math.pow(10, totalMemories.Exponent));
  document.getElementById("totalMemoryCount").innerHTML = totalMemoriesValue;
}