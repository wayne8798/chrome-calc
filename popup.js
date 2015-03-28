function submitForm() {
  searchTerm = document.getElementById('query').value;
  var newURL = "http://www.google.com/webhp?#safe=off&q=" + encodeURIComponent(searchTerm);
  chrome.tabs.create({url: newURL});
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitQuery').addEventListener('submit', submitForm)
});