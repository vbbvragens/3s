// script.js

const answers = {
    1: 'B',
    2: 'B',
    3: 'B',
    4: 'B',
    5: 'C',
    6: 'B',
    7: 'C',
    8: 'C',
    9: 'B',
    10: 'B',
    11: 'A',
    12: 'B',
    13: 'B',
    14: 'C',
    15: 'B',
    16: 'B',
    17: 'C',
    18: 'B',
    19: 'C',
    20: 'B',
    21: 'B',
    22: 'B',
    23: 'C',
    24: 'B',
    25: 'B',
    26: 'B',
    27: 'B',
    28: 'A',
    29: 'B',
    30: 'B'
};

let correctCount = 0;
let incorrectCount = 0;
const questionCount = Object.keys(answers).length;

function getExplanation(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "Het hoofddoel van een commercieel bedrijf zoals Philips is winst maken.";
        case 2:
            return "Een nevendoelstelling is een ondersteunend doel dat helpt het hoofddoel van de organisatie te bereiken.";
        case 3:
            return "Het doel van beveiliging is het beschermen van een omgeving, object of persoon tegen schadelijke invloeden.";
        case 4:
            return "Beveiliging (security) richt zich op het beschermen van objecten en informatie, terwijl veiligheid (safety) zich richt op het beschermen van mensen.";
        case 5:
            return "Een winkelcentrum is een open object omdat iedereen er zonder voorwaarden naar binnen mag.";
        case 6:
            return "Een bioscoop is een halfbesloten object omdat je een entreekaartje moet kopen om binnen te komen.";
        case 7:
            return "Een school is een besloten object omdat alleen personeel, leerlingen en bezoekers met toestemming naar binnen mogen.";
        case 8:
            return "Stormschade is een natuurlijk risico omdat het veroorzaakt wordt door weersomstandigheden.";
        case 9:
            return "Uitval van een machine is een technisch risico omdat het veroorzaakt wordt door technische problemen.";
        case 10:
            return "Vandalisme is een menselijk risico omdat het veroorzaakt wordt door opzettelijke handelingen van mensen.";
        case 11:
            return "Een brand- en sluitronde is een organisatorische maatregel omdat het een procedure is die de veiligheid vergroot.";
        case 12:
            return "Een schuifpoort is een bouwkundige maatregel omdat het een fysieke barrière is die inbraak moeilijker maakt.";
        case 13:
            return "Een beveiligingscamera is een elektronische maatregel omdat het een technisch hulpmiddel is dat ongewenste indringers detecteert.";
        case 14:
            return "Het primaire proces van een bierbrouwerij is het brouwen en verkopen van bier.";
        case 15:
            return "Compartimentering helpt bij het voorkomen van de snelle uitbreiding van brand door ruimtes te verdelen met brandwerende wanden en deuren.";
        case 16:
            return "Een surveillant is een voorbeeld van manbeveiliging omdat het een persoon is die toezicht houdt.";
        case 17:
            return "Een bewakingshond is een voorbeeld van animale beveiliging omdat een dier wordt ingezet voor beveiliging.";
        case 18:
            return "Een arbeidsconflict is een conflict tussen werknemers en werkgevers over arbeidsvoorwaarden of andere werkgerelateerde zaken.";
        case 19:
            return "Een stiptheidsactie is een actie waarbij personeel precies volgens de regels werkt, wat leidt tot vertragingen.";
        case 20:
            return "Sabotage is het opzettelijk verstoren van de normale gang van zaken, vaak uit frustratie of idealisme.";
        case 21:
            return "Een bommelding is een melding dat er een explosief is geplaatst, wat serieus genomen moet worden.";
        case 22:
            return "Een drone is een onbemand luchtvaartuig dat op afstand bestuurd kan worden.";
        case 23:
            return "Een risicoanalyse is een onderzoek waarbij mogelijke risico’s worden geïdentificeerd, geanalyseerd en beoordeeld.";
        case 24:
            return "Schadecategorie 1 omvat ruimtes die van vitaal belang zijn voor de onderneming, zoals de productieruimte.";
        case 25:
            return "Een goed beveiligingsplan moet geschikte maatregelen bevatten die het beoogde doel bereiken.";
        case 26:
            return "Een escalatiemodel beschrijft hoe beveiligingsmaatregelen worden opgeschaald bij een calamiteit.";
        case 27:
            return "Storm is een natuurlijk risico omdat het veroorzaakt wordt door weersomstandigheden.";
        case 28:
            return "Uitval van een machine is een technisch risico omdat het veroorzaakt wordt door technische problemen.";
        case 29:
            return "Diefstal is een menselijk risico omdat het veroorzaakt wordt door opzettelijke handelingen van mensen.";
        case 30:
            return "Een bhv-training is een organisatorische maatregel omdat het een training is die de veiligheid in de organisatie vergroot.";
        default:
            return "Geen uitleg beschikbaar voor deze vraag.";
    }
}

// Cevabı kontrol etme fonksiyonu
function checkAnswer(questionNumber, selectedAnswer, clickedButton) {
    const resultDiv = document.getElementById(`result${questionNumber}`);
    const numberDiv = document.querySelector(`#numberContainer .number:nth-child(${questionNumber})`);

    const buttons = clickedButton.parentElement.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.remove('selected');
        if (button !== clickedButton) {
            button.classList.add('fade');
        }
    });

    clickedButton.classList.add('selected');
    const correctAnswer = answers[questionNumber];

    // Arka plan rengi sınıflarını uygulayın
    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = `<div class="true-result">Correct! ${getExplanation(questionNumber)}</div>`;
        correctCount++;
        numberDiv.classList.add('correct-solved');
    } else {
        resultDiv.innerHTML = `<div class="false-result">Fout! Het juiste antwoord is ${correctAnswer}. <br> Verklaring: ${getExplanation(questionNumber)}</div>`;
        incorrectCount++;
        numberDiv.classList.add('incorrect-solved');
    }

    // Çözülen sorunun stilini güncelleyin
    numberDiv.classList.add('solved');

    displayScore();
}

// Score gösterme fonksiyonu
function displayScore() {
    const scoreDiv = document.getElementById('score');
    const totalScore = (correctCount / questionCount) * 10;
    scoreDiv.innerHTML = `Je score is ${correctCount} van de ${questionCount} vragen. <br> Foute antwoorden: ${incorrectCount}. <br> Totale score: ${totalScore.toFixed(1)} /10 `;
    displayNumbers();
}

function navigateToQuestion(index) {
    console.log(`Navigating to question ${index}`);
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.style.display = (i === index) ? 'block' : 'none';
    });
    // Scroll naar de geselecteerde vraag
    questions[index].scrollIntoView({ behavior: "smooth" });
}

// Numara görüntüleme fonksiyonu
function displayNumbers() {
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.innerHTML = '';

    for (let i = 1; i <= questionCount; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.innerText = i;

        // Numaraya tıklama olayını ekle
        numberDiv.addEventListener('click', (e) => {
            console.log(`Number ${i} clicked`);
            const questions = document.querySelectorAll('.question');
            questions.forEach((q, index) => {
                q.style.display = (index + 1 === i) ? 'block' : 'none';
            });
            // Soruya kaydırma
            const questionElement = document.querySelector(`.question:nth-child(${i})`);
            if (questionElement) questionElement.scrollIntoView({ behavior: "smooth" });
        });

        // Çözülen sorular için stil ekle
        if (document.getElementById(`result${i}`).innerHTML !== '') {
            numberDiv.classList.add('solved');
        }

        numberContainer.appendChild(numberDiv);
    }
}

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
});

// Tüm soruları gösterme fonksiyonu
function showAllQuestions() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'block';
    });
}

// Yan paneli açıp kapayan fonksiyon
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Event listener ekleme
document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
document.getElementById('showAllQuestions').addEventListener('click', showAllQuestions);

// Dark mode toggle
document.getElementById('toggleButton').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Buton metnini güncelle
    const isDarkMode = body.classList.contains('dark-mode');
    document.getElementById('toggleButton').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
    // Vragenlijst butonuna tıklama olayı ekleniyor
    document.querySelector('#vragenlijst').addEventListener('click', () => {
        console.log('Vragenlijst tuşuna tıklanmış');
        showAllQuestions();
    });
});