/**
 * Function that returns the csv format of the data.json file
 * @async
 * @return {string} csv format of the data.json file
 */
async function mapData(){
  const data = await fetch('./data.json').then(response => response.json());
  const questions = data.map(question => question.questionName);
  const answers = data.map(question => question.answers.map(answer => answer.answerName));
// if no more answers empty string is added in order to continue the table
  const rows = answers[0].map((col, i) => answers.map(row => row[i] || ''));
  const csvContent = [questions.join(', '), ...rows.map(r => r.join(', '))].join('\n');
  console.log(csvContent)
  return csvContent;
}

/**
  * Function that generates a text file url. If NodeJs is used this is not needed and fs module can be used.
  * @param {string} txt - text to be converted to a file
  * @return {string} url of the text file
 */
let textFileUrl = null;
function generateTextFileUrl(txt) {
  let fileData = new Blob([txt], {type: 'text/plain'});
  if (textFileUrl !== null) {
    window.URL.revokeObjectURL(textFileUrl);
  }
  textFileUrl = window.URL.createObjectURL(fileData);
  return textFileUrl;
}
window.addEventListener("load", async function(){
  document.getElementById('downloadLink').href = generateTextFileUrl(await mapData());
});