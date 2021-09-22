function createAndSendDocument() {

  var doc = DocumentApp.create('Hello, World!'); // Create a doc named Hello World
  doc.getBody().appendParagraph('Hello World! Made by Google Script.'); // Append to the end of a paragraph
  var url = doc.getUrl(); // Get the doc URL
  var email = Session.getActiveUser().getEmail(); // Get active user email
  var subject = doc.getName(); // Get name for the subject line
  var body = 'Link to your doc: ' + url; // Email body
  GmailApp.sendEmail(email, subject, body); // Send the email!
}
