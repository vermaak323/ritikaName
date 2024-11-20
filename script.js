const buttons = document.querySelectorAll('.btn');
const outputDiv = document.getElementById('output');

const nameTranslations = {
  English: "Ritika",
  Hindi: "ऋतिका",
//   Spanish: "Ritika",
//   French: "Ritika",
//   German: "Ritika",
  Chinese: "瑞蒂卡 (Ruìdìkǎ)",
  Japanese: "リティカ (Ritika)",
  Korean: "리티카 (Ritika)",
  Arabic: "ريتيكا (Rītīkā)",
  Russian: "Ритика (Ritika)",
  Bengali: "ঋতিকা (Ritika)"
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const language = button.getAttribute('data-language');
    const translatedName = nameTranslations[language];
    outputDiv.innerHTML = `Ritika, your name in <strong>${language}</strong>: <em>${translatedName}</em>`;
  });
});
