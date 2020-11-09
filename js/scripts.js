// Ro'yhatda bor retseptlarni bitta arrayga solib oldim
var retsepts = ['Pomidor', 'Kurka go\'shti', 'Zaytun', 'Tuzlangan bodring', 'Qo\'ziqorin', 'Qazi'];
// Tanlangan retseptlarni solish un bosh array
var chosenRetsepts = [];


// Qo'shimcha retseptlarni bitta arrayga to'plab oldim
var additional = ['Acchiq', 'Sosiskali'];
// Tanlanga qo'shimcha retseptlarni yig'ish un bo'sh array hosil qilib oldim
var additionalRetsepts = [];


// Formani html filedan topib oldim
var elPizzaForm = document.querySelector('.pizza-form');
// Non qalinligini tanlash un ishlatiladigon inputni topib oldim
var elPizzaBredSelect = elPizzaForm.querySelector('.pizza-bred');
// Non qalinligini natijani ko'rsatuvchi spanni topib oldim
var elResultPizzaBred = document.querySelector('.pizza-berd-result');


// Pitsa hajmini ko'rsatuvchi chekboxlarni topib oldim
var elPizzaSmall = elPizzaForm.querySelector('.small-pizza');
var elPizzaMiddle = elPizzaForm.querySelector('.middle-pizza');
var elPizzaLarge = elPizzaForm.querySelector('.large-pizza');
// Pitsa hajmi tanlanganda ekranga natijani ko'rsatuvchi spanni topib oldim
var elPizzaSizeResult = document.querySelector('.size-result');


// Retseplar Chackboxlarini o'rab turuvchi divni topib oldim
var elCheckboxWrapper = document.querySelector('.checkbox-wrapper');
// Retseptlarni ekranda ko'rinib turuvchi natijasini o'rab turuvchi div
var elNewDivForRetseptsWrapper = document.querySelector('.retsepts-result');


// Qo'shimcha retseplar Chackboxlarini o'rab turuvchi divni topib oldim
var elAdditionalCheckboxWrapper = document.querySelector('.additional-wrapper');
// Qo'shimcha retseplar tanlanganda ekranda natijani ko'rsatib turuvchi divni topib oldim
var elNewDivForAditionalRetseptsWrapper = document.querySelector('.additional-retsepts-result');


// Non qalinligi tanlaganda qiymatni olib ekranda ko'rsatib beruvchi function
var bred = function () {
  // Natijaning matni Selectimizning valuesiga teng ekanligi aytilmoqda
  elResultPizzaBred.textContent = elPizzaBredSelect.value;
}


// Pitsa hajmi tanlanganda natijani qabul qilib va uni ekranga uzatib beruvchi function
var size = function () {
  // Shart bajarilyabdi qaysiki checkbox bosilganda o'ziga tegishli qiymat natijada ko'rsatilishini ifodalmoqda
  if (elPizzaSmall.checked) {
    elPizzaSizeResult.textContent = '25 sm';
  } else if (elPizzaMiddle.checked) {
    elPizzaSizeResult.textContent = '30 sm';
  } else if (elPizzaLarge.checked) {
    elPizzaSizeResult.textContent = '35 sm';
  }
}


// Pitsa ustiga qo'shiladigan masalliqlarni qo'shishga yoki olib tashlashga javob beruvchi sikl
for (var i = 0; i < retsepts.length; i++) {
  // Yangi label yaratib oldim
  var elNewLabel = document.createElement('label');

  // Yangi input yaratib oldim
  var elNewCheckbox = document.createElement('input');
  // Yangi yaratilgan inputni type checkbox bo'lishi kerakligini aytdim
  elNewCheckbox.type = 'checkbox';
  // Checkboxni name retsepts arreydagi retseptlar nomiga teng bo'lishi kerakligini aytdim
  elNewCheckbox.name = retsepts[i];

  // Bu function pitsa ustida qanday maxsulotlar bo'lishi kerak yoki bo'lmasligi kerakligi ustida amallar bajaryabdi
  elNewCheckbox.addEventListener('change', function () {
    // Agar tanlangan retseptlar ichida biz tanlagan retsept bo'lsa
    if (chosenRetsepts.includes(this.name)) {
      // Retsept index biz tanlagn nomdagi retseptni indexsiga teng ekanligini tushuntirdik
      var retseptIndex = chosenRetsepts.indexOf(this.name);
      // Biz tanlagan retsept tenlangan retseptlar ro'yhatini ichida bo'lsa uni retseptlar ro'yhatidan olib tashlaymiz
      chosenRetsepts.splice(retseptIndex, 1);
    } else {
      // Aksincha yog' bo'lsa qo'shib qo'yamiz
      chosenRetsepts.push(this.name);
    }

    // Harsafar natijani ko'rstishfan oldin divni ichini tozalab olamiz
    elNewDivForRetseptsWrapper.innerHTML = '';

    // Tanlangan Retseptlar arrayidagi natijani ekranga chiqarib beradigan sikl
    for (retsept of chosenRetsepts){
      var elNewSpanForRetseptsResult = document.createElement('span');
      elNewDivForRetseptsWrapper.appendChild(elNewSpanForRetseptsResult);
      elNewSpanForRetseptsResult.classList.add('text-warning')
        
      elNewSpanForRetseptsResult.textContent = retsept;
    }
  });

  // Yangi span yaratib oldim
  var elNewSpan = document.createElement('span');
  // Spanni textContenti retseptlarda bor nomlar bilan bo'lishini aytib qo'ydim
  elNewSpan.textContent = retsepts[i];

  // Checkboxlar va Spanlar labelarni ichada turishini eslatib qo'ydim
  elNewLabel.appendChild(elNewCheckbox);
  elNewLabel.appendChild(elNewSpan);

  // Labelni Umumiy barcha checkboxlarni o'rab turuvchi divning farzandi bo'lishi kerakligini eslatib qo'ydim
  elCheckboxWrapper.appendChild(elNewLabel);

  // Stillarini to'g'rilash un bir nechta classlar qo'shib qo'ydim
  elNewLabel.classList.add('mr-4', 'align-items-center');
  elNewCheckbox.classList.add('mr-1',);
}


// Qo'shimcha retseptlarni qo'shish va olib tashlashga javob beruvchi sikl
for (var i = 0; i < additional.length; i++) {
  // Yangi label yaratib oldim
  
  var elNewLabel = document.createElement('label');

  // Yangi input yaratib oldim
  var elNewCheckbox = document.createElement('input');
  // Yangi yaratilgan inputni type checkbox bo'lishi kerakligini aytdim
  elNewCheckbox.type = 'checkbox';
  // Checkboxni name retsepts arreydagi retseptlar nomiga teng bo'lishi kerakligini aytdim
  elNewCheckbox.name = additional[i];

  elNewCheckbox.addEventListener('change', function () {
    if (additionalRetsepts.includes(this.name)) {
      var additionalIndex = additionalRetsepts.indexOf(this.name);
      additionalRetsepts.splice(additionalIndex, 1);
    } else {
      additionalRetsepts.push(this.name);
    }

    elNewDivForAditionalRetseptsWrapper.innerHTML = '';

    for (addition of additionalRetsepts){
      var elNewSpanForRetseptsResult = document.createElement('span');
      elNewDivForAditionalRetseptsWrapper.appendChild(elNewSpanForRetseptsResult);
      elNewSpanForRetseptsResult.classList.add('text-warning')
        
      elNewSpanForRetseptsResult.textContent = addition;
    }
  });

  var elNewSpan = document.createElement('span');
  elNewSpan.textContent = additional[i];

  elNewLabel.appendChild(elNewCheckbox);
  elNewLabel.appendChild(elNewSpan);

  elAdditionalCheckboxWrapper.appendChild(elNewLabel);

  elNewLabel.classList.add('mr-4', 'align-items-center');
  elNewCheckbox.classList.add('mr-1',);
}


// Non qalinligini tanlovchi element qaysi hodisaga quloq solishi 
elPizzaBredSelect.addEventListener('change', bred);

// Pits hajmini o'lchovchi checkboxlar qaysi hodisaga quloq solishi
elPizzaSmall.addEventListener('change', size);
elPizzaMiddle.addEventListener('change', size);
elPizzaLarge.addEventListener('change', size);
