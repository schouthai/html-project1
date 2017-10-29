(function () {
   console.log('abc');
   document.addEventListener('DOMContentLoaded', function() {

      var gridDiv = document.querySelector('#myGrid');
      console.log('gridDiv = ' + gridDiv);

      var gridOptions = {
         columnDefs: [
            {field: 'Country/Region'},
            {field: '5 Yr Avg'},
            {field: 'Prior 3M Avg'},
            {field: '07-2017'},
            {field: '08-2017'},
            {field: '09-2017'},
            {field: 'Comments'},
         ],
      };

      new agGrid.Grid(gridDiv, gridOptions);

      jsonLoad( function(data) {
         gridOptions.api.setRowData(data);
      });
   });

})();

function jsonLoad(callback) {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://localhost:8080/html-project1/data.json');
   xhr.responseType = 'json';

   xhr.onload = function() {
      if(this.status == 200) {
         callback(this.response);
      }
   };

   xhr.onerror = function() {
      console.log('loading data error');
   };

   xhr.send();
}
