(function(win) {
  'use strict';
  
  //Create Dropdown
  var customSelectEl = document.querySelectorAll('.custom-select');
  var selectEl = document.querySelectorAll('select[name="normal-select"]');
  var selectOptions = document.querySelectorAll('select[name="normal-select"] option');
  var customSelected = document.querySelectorAll('.custom-select .selected')[0];
  var customOptions = [];
  var customListElem = document.createElement('ul');

  customListElem.setAttribute('class', 'custom-dropdown');

  selectOptions.forEach(function(elem) {
    var el = document.createElement('li');
    el.setAttribute('class', 'custom-option');
    el.setAttribute('data-value', elem.value);
    if(elem.value === '0') {
      el.innerHTML = 'Select Name';
      customSelected.innerHTML = 'Select Name';
    } else {
      el.innerHTML = elem.value;
    }
    customOptions.push(el);
  });

  customOptions.forEach(function(el) {
    customListElem.appendChild(el);
  });
  customSelectEl[0].append(customListElem);


  //Add Dropdown Logic
  customSelected.addEventListener('click', function() {
    this.classList.add('open');
  });

  var customSelectOption = document.querySelectorAll('.custom-dropdown .custom-option');
  customSelectOption.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
      var value = this.getAttribute('data-value');

      customSelected.innerHTML = value === '0' ? 'Select Name' : value;

      customSelected.classList.remove('open');
      
      selectEl[0].value = value;
      
    });
  });

})(window);
