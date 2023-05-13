window.addEventListener('load', function() {
    var cookieHeader = document.getElementById('cookie-header');
    cookieHeader.style.color = '#f7f16d';
  });
  
  window.addEventListener('load', function() {
    var cookieItems = document.querySelectorAll('#cookie-jar .cookie');
    var cookieCount = cookieItems.length;
    var cookieCountElement = document.getElementById('cookie-count');
    cookieCountElement.textContent = "There are " + cookieCount + " cookie(s) in the cookie jar!";
    cookieCountElement.style.color = '#f7f16d';
  });
  
  window.addEventListener('load', function() {
    var cookieItems = document.querySelectorAll('#cookie-jar .cookie');
    var cookieCountElement = document.getElementById('cookie-count');
  
    function removeLastCookie() {
      if (cookieItems.length > 0) {
        cookieItems[cookieItems.length - 1].remove();
        cookieItems = document.querySelectorAll('#cookie-jar .cookie');
        cookieCountElement.textContent = "There are " + cookieItems.length + " cookie(s) in the cookie jar!";
      }
    }
  
    setInterval(removeLastCookie, 30000);
  });
  