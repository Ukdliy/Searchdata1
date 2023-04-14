function doGet() {
  return HtmlService.createHtmlOutputFromFile('Page');
}

function searchStudent(nisn) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Siswa");
  var data = sheet.getDataRange().getValues();
  var results = [];
  for (var i = 1; i < data.length; i++) {
    if (data[i][4] == nisn) {
      results.push([i, data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5], data[i][6], data[i][7], data[i][8], data[i][9], data[i][10], data[i][11], data[i][12]]);
    }
  }
  return results;
}
