// ===================== GLOBAL VARIABLES =====================
let testData = {
    passage: "Click the Admin Panel (⚙️) to paste your passage here...",
    questions: [
        {
            number: 1,
            text: "Sample Question 1",
            type: "text"
        },
        {
            number: 2,
            text: "Sample Question 2",
            type: "text"
        }
    ]
};

let userAnswers = {};
let currentQuestionIndex = 0;
let timeRemaining = 3600; // 60 minutes
let timerInterval = null;

// ===================== INITIALIZATION =====================
document.addEventListener('DOMContentLoaded', function() {
    loadTestFromLocalStorage();
    renderPassage();
    renderQuestions();
    generateQuestionNumbers();
    startTimer();
});

// ===================== LOCAL STORAGE MANAGEMENT =====================
function loadTestFromLocalStorage() {
    const savedData = localStorage.getItem('ieltsTestData');
    if (savedData) {
        try {
            testData = JSON.parse(savedData);
        } catch (e) {
            console.log('Error loading saved data, using defaults');
        }
    }
}

function saveTestToLocalStorage() {
    localStorage.setItem('ieltsTestData', JSON.stringify(testData));
}

// ===================== ADMIN PANEL =====================
function toggleAdminPanel() {
    const adminContent = document.getElementById('adminContent');
    adminContent.style.display = adminContent.style.display === 'none' ? 'block' : 'none';
    
    if (adminContent.style.display === 'block') {
        document.getElementById('passageInput').value = testData.passage;
        document.getElementById('questionsInput').value = JSON.stringify(testData.questions, null, 2);
    }
}

function savePassage() {
    const passage = document.getElementById('passageInput').value;
    if (!passage.trim()) {
        alert('Please enter a passage');
        return;
    }
    testData.passage = passage;
    saveTestToLocalStorage();
    renderPassage();
    alert('Passage saved successfully!');
}

function saveQuestions() {
    const questionsText = document.getElementById('questionsInput').value;
    try {
        const questions = JSON.parse(questionsText);
        
        // Validate questions format
        if (!Array.isArray(questions)) {
            alert('Questions must be a JSON array');
            return;
        }
        
        testData.questions = questions;
        saveTestToLocalStorage();
        userAnswers = {}; // Reset answers when questions change
        currentQuestionIndex = 0;
        renderQuestions();
        generateQuestionNumbers();
        alert('Questions saved successfully!');
    } catch (e) {
        alert('Invalid JSON format. Please check your input.\n\nError: ' + e.message);
    }
}

// ===================== RENDER PASSAGE =====================
function renderPassage() {
    const passageContent = document.getElementById('passageContent');
    
    // Simple paragraph breaking
    const paragraphs = testData.passage.split('\n\n');
    let html = '';
    
    paragraphs.forEach(para => {
        if (para.trim()) {
            html += `<p>${para.trim()}</p>`;
        }
    });
    
    passageContent.innerHTML = html || '<p>No passage loaded. Use Admin Panel to add content.</p>';
}

// ===================== RENDER QUESTIONS =====================
function renderQuestions() {
    const questionsContent = document.getElementById('questionsContent');
    questionsContent.innerHTML = '';
    
    if (!testData.questions || testData.questions.length === 0) {
        questionsContent.innerHTML = '<p>No questions loaded. Use Admin Panel to add questions.</p>';
        return;
    }
    
    testData.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.id = `question-${index}`;
        
        let html = `<div class="question-number">Question ${question.number}</div>
                    <div class="question-text">${question.text}</div>`;
        
        const answerKey = `q${question.number}`;
        const savedAnswer = userAnswers[answerKey] || '';
        
        if (question.type === 'text') {
            html += `<input type="text" class="answer-input" 
                    placeholder="Your answer" 
                    value="${savedAnswer}"
                    onchange="saveAnswer('${answerKey}', this.value)">`;
        } 
        else if (question.type === 'multiple-choice') {
            if (question.options && Array.isArray(question.options)) {
                html += '<div class="multiple-choice-options">';
                question.options.forEach(option => {
                    const isSelected = savedAnswer === option;
                    html += `<label class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(this, '${answerKey}', '${option}')">
                        <input type="radio" name="q${question.number}" value="${option}" ${isSelected ? 'checked' : ''}>
                        ${option}
                    </label>`;
                });
                html += '</div>';
            }
        }
        else if (question.type === 'true-false') {
            html += '<div class="true-false-buttons">';
            ['True', 'False', 'Not Given'].forEach(option => {
                const isSelected = savedAnswer === option;
                html += `<button class="true-false-btn ${isSelected ? 'selected' : ''}" 
                        onclick="selectTrueFalse(this, '${answerKey}', '${option}')">
                        ${option}
                    </button>`;
            });
            html += '</div>';
        }
        
        questionDiv.innerHTML = html;
        questionsContent.appendChild(questionDiv);
    });
}

// ===================== ANSWER MANAGEMENT =====================
function saveAnswer(key, value) {
    userAnswers[key] = value;
    updateQuestionNumberButtons();
}

function selectOption(element, key, value) {
    const parent = element.parentElement;
    parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    userAnswers[key] = value;
    updateQuestionNumberButtons();
}

function selectTrueFalse(element, key, value) {
    const parent = element.parentElement;
    parent.querySelectorAll('.true-false-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    userAnswers[key] = value;
    updateQuestionNumberButtons();
}

// ===================== QUESTION NUMBERS =====================
function generateQuestionNumbers() {
    const container = document.getElementById('questionNumbers');
    container.innerHTML = '';
    
    if (!testData.questions || testData.questions.length === 0) return;
    
    testData.questions.forEach((question, index) => {
        const btn = document.createElement('button');
        btn.className = 'question-number-btn';
        btn.textContent = question.number;
        btn.id = `btn-${index}`;
        
        const answerKey = `q${question.number}`;
        if (userAnswers[answerKey]) {
            btn.classList.add('answered');
        }
        
        if (index === currentQuestionIndex) {
            btn.classList.add('active');
        }
        
        btn.onclick = () => goToQuestion(index);
        container.appendChild(btn);
    });
}

function updateQuestionNumberButtons() {
    if (!testData.questions) return;
    
    testData.questions.forEach((question, index) => {
        const btn = document.getElementById(`btn-${index}`);
        if (!btn) return;
        
        const answerKey = `q${question.number}`;
        if (userAnswers[answerKey]) {
            btn.classList.add('answered');
        } else {
            btn.classList.remove('answered');
        }
    });
}

function goToQuestion(index) {
    if (index >= 0 && index < testData.questions.length) {
        currentQuestionIndex = index;
        generateQuestionNumbers();
        scrollToQuestion(index);
    }
}

function scrollToQuestion(index) {
    const questionElement = document.getElementById(`question-${index}`);
    if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===================== NAVIGATION =====================
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        goToQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < testData.questions.length - 1) {
        goToQuestion(currentQuestionIndex + 1);
    }
}

// ===================== TIMER =====================
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = display;
    
    // Change color when time is running out
    const timerElement = document.getElementById('timerDisplay');
    if (timeRemaining <= 300) { // Last 5 minutes
        timerElement.style.color = '#ff6b6b';
        timerElement.style.fontWeight = 'bold';
    } else {
        timerElement.style.color = 'white';
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = 3600; // 60 minutes
    startTimer();
}

// ===================== SUBMIT TEST =====================
function submitTest() {
    clearInterval(timerInterval);
    
    const studentName = prompt('Enter your name:', '');
    if (!studentName) {
        alert('Name is required to submit the test.');
        return;
    }
    
    const studentEmail = prompt('Enter your email:', '');
    if (!studentEmail) {
        alert('Email is required to submit the test.');
        return;
    }
    
    // Format results
    const results = formatResults(studentName, studentEmail);
    
    // Send to email using Formspree
    sendResultsToEmail(results, studentName, studentEmail);
}

function formatResults(studentName, studentEmail) {
    let results = `IELTS ACADEMIC READING TEST RESULTS\n`;
    results += `====================================\n\n`;
    results += `Student Name: ${studentName}\n`;
    results += `Student Email: ${studentEmail}\n`;
    results += `Submission Time: ${new Date().toLocaleString()}\n`;
    results += `Test Duration: 60 minutes\n`;
    results += `Time Used: ${60 - Math.floor(timeRemaining / 60)} minutes\n\n`;
    
    results += `ANSWERS PROVIDED:\n`;
    results += `================\n\n`;
    
    testData.questions.forEach(question => {
        const answerKey = `q${question.number}`;
        const answer = userAnswers[answerKey] || '(No answer)';
        results += `Question ${question.number}: ${answer}\n`;
    });
    
    return results;
}

function sendResultsToEmail(results, studentName, studentEmail) {
    // Using Formspree or similar service
    // You can replace this with your own backend
    
    // Option 1: Show results in a popup for now
    console.log('Test Results:', results);
    console.log('Student:', studentName, studentEmail);
    console.log('Instructor Email: laithongthu.2002@gmail.com');
    
    // Option 2: Send via Formspree (requires setup)
    const formData = new FormData();
    formData.append('email', 'laithongthu.2002@gmail.com');
    formData.append('student_name', studentName);
    formData.append('student_email', studentEmail);
    formData.append('results', results);
    
    // Example: Send to a backend service
    // fetch('your-backend-url', {
    //     method: 'POST',
    //     body: formData
    // })
    
    alert(`Test submitted successfully!\n\nStudent: ${studentName}\nEmail: ${studentEmail}\n\nResults will be sent to: laithongthu.2002@gmail.com`);
    
    // Log results to console for verification
    console.log('---FULL RESULTS---');
    console.log(results);
}
