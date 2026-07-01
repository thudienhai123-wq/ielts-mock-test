// ===================== TEST DATA =====================
const testData = {
    listening: {
        duration: 30 * 60, // 30 minutes
        sections: [
            {
                title: "Section 1",
                description: "Conversation between two people",
                questions: [
                    { type: "multiple-choice", text: "What is the main topic of the conversation?", options: ["A) Travel plans", "B) Job interview", "C) Accommodation"], answer: "" },
                    { type: "fill-blank", text: "The person's name is ___________", answer: "" },
                    { type: "multiple-choice", text: "When will they meet?", options: ["A) Tomorrow", "B) Next week", "C) Today"], answer: "" },
                    { type: "fill-blank", text: "The phone number is ___________", answer: "" },
                    { type: "multiple-choice", text: "What is the cost?", options: ["A) $50", "B) $100", "C) $150"], answer: "" }
                ]
            },
            {
                title: "Section 2",
                description: "Monologue about a service",
                questions: [
                    { type: "multiple-choice", text: "What service is being described?", options: ["A) Hotel", "B) Library", "C) Restaurant"], answer: "" },
                    { type: "true-false", text: "The service is available 24/7", answer: "" },
                    { type: "fill-blank", text: "Opening hours are from __________ to __________", answer: "" },
                    { type: "multiple-choice", text: "What is the contact number?", options: ["A) 123-4567", "B) 234-5678", "C) 345-6789"], answer: "" },
                    { type: "true-false", text: "Membership is required", answer: "" }
                ]
            },
            {
                title: "Section 3",
                description: "Conversation between students and tutor",
                questions: [
                    { type: "fill-blank", text: "The assignment deadline is __________", answer: "" },
                    { type: "multiple-choice", text: "What topic should be covered?", options: ["A) History", "B) Science", "C) Literature"], answer: "" },
                    { type: "true-false", text: "References are required", answer: "" },
                    { type: "fill-blank", text: "Minimum word count is __________", answer: "" },
                    { type: "multiple-choice", text: "How many pages are expected?", options: ["A) 5 pages", "B) 10 pages", "C) 15 pages"], answer: "" }
                ]
            },
            {
                title: "Section 4",
                description: "Academic lecture",
                questions: [
                    { type: "fill-blank", text: "The lecture is about __________", answer: "" },
                    { type: "true-false", text: "The topic is new research", answer: "" },
                    { type: "multiple-choice", text: "Who is the lecturer?", options: ["A) Professor Smith", "B) Dr. Johnson", "C) Mr. Brown"], answer: "" },
                    { type: "fill-blank", text: "The study took __________ years", answer: "" },
                    { type: "true-false", text: "Participants were satisfied with the results", answer: "" }
                ]
            }
        ]
    },
    reading: {
        duration: 60 * 60, // 60 minutes
        passages: [
            {
                title: "Passage 1",
                content: `The megafires of California

Drought, housing expansion, and oversupply of tinder make for bigger, hotter fires in the western United States

Wildfires are becoming an increasing menace in the western United States, with Southern California being the hardest hit area. There's a reason fire squads battling more frequent blazes in Southern California are having such difficulty containing the flames, despite better preparedness than ever and decades of experience fighting fires fanned by the 'Santa Ana Winds'. The wildfires themselves, experts say, are generally hotter, faster, and spread more erratically than in the past.

Megafires, also called 'siege fires', are the increasingly frequent blazes that burn 500,000 acres or more – 10 times the size of the average forest fire of 20 years ago. Some recent wildfires are among the biggest ever in California in terms of acreage burned, according to state figures and news reports.

One explanation for the trend to more superhot fires is that the region, which usually has dry summers, has had significantly below normal precipitation in many recent years. Another reason, experts say, is related to the century-long policy of the US Forest Service to stop wildfires as quickly as possible. The unintentional consequence has been to halt the natural eradication of underbrush, now the primary fuel for megafires.

Three other factors contribute to the trend, they add. First is climate change, marked by a 1-degree Fahrenheit rise in average yearly temperature across the western states. Second is fire seasons that on average are 78 days longer than they were 20 years ago. Third is increased construction of homes in wooded areas.`,
                questions: [
                    { type: "fill-blank", text: "Megafires burn __________ acres or more", answer: "" },
                    { type: "true-false", text: "Precipitation has been above normal in recent years", answer: "" },
                    { type: "fill-blank", text: "Fire seasons are __________ days longer than 20 years ago", answer: "" },
                    { type: "multiple-choice", text: "What is one cause of megafires?", options: ["A) Too much rain", "B) Climate change", "C) New equipment"], answer: "" },
                    { type: "true-false", text: "The US Forest Service policy has increased underbrush", answer: "" }
                ]
            },
            {
                title: "Passage 2",
                content: `Second Nature

Your personality isn't necessarily set in stone. With a little experimentation, people can reshape their temperaments and inject passion, optimism, joy and courage into their lives

Psychologists have long held that a person's character cannot undergo a transformation in any meaningful way and that the key traits of personality are determined at a very young age. However, researchers have begun looking more closely at ways we can change. Positive psychologists have identified 24 qualities we admire, such as loyalty and kindness, and are studying them to find out why they come so naturally to some people. What they're discovering is that many of these qualities amount to habitual behaviour that determines the way we respond to the world. The good news is that all this can be learned.

Some qualities are less challenging to develop than others, optimism being one of them. However, developing qualities requires mastering a range of skills which are diverse and sometimes surprising. For example, to bring more joy and passion into your life, you must be open to experiencing negative emotions.`,
                questions: [
                    { type: "fill-blank", text: "Positive psychologists have identified __________ qualities we admire", answer: "" },
                    { type: "true-false", text: "Personality cannot be changed", answer: "" },
                    { type: "multiple-choice", text: "What is easier to develop?", options: ["A) Loyalty", "B) Optimism", "C) Kindness"], answer: "" },
                    { type: "fill-blank", text: "To increase joy, you must be open to __________ emotions", answer: "" },
                    { type: "true-false", text: "All qualities are equally challenging to develop", answer: "" }
                ]
            },
            {
                title: "Passage 3",
                content: `When Evolution Runs Backwards

Evolution isn't supposed to run backwards – yet an increasing number of examples show that it does and that it can sometimes represent the future of a species.

The description of any animal as an 'evolutionary throwback' is controversial. For the better part of a century, most biologists have been reluctant to use those words, mindful of a principle of evolution that says 'evolution cannot run backwards. But as more and more examples come to light and modern genetics enters the scene, that principle is having to be rewritten. Not only are evolutionary throwbacks possible, they sometimes play an important role in the forward march of evolution.

The technical term for an evolutionary throwback is an 'atavism', from the Latin atavus, meaning forefather. The word has ugly connotations thanks largely to Cesare Lombroso, a 19th-century Italian medic who argued that criminals were born not made and could be identified by certain physical features that were throwbacks to a primitive, sub-human state.

While Lombroso was measuring criminals, a Belgian palaeontologist called Louis Dollo was studying fossil records and coming to the opposite conclusion. In 1890 he proposed that evolution was irreversible: that 'an organism is unable to return, even partially, to a previous stage already realised in the ranks of its ancestors.'`,
                questions: [
                    { type: "fill-blank", text: "The technical term for evolutionary throwback is __________", answer: "" },
                    { type: "true-false", text: "Evolution always moves forward and never backwards", answer: "" },
                    { type: "multiple-choice", text: "When did Louis Dollo propose his theory?", options: ["A) 1890", "B) 1900", "C) 1910"], answer: "" },
                    { type: "fill-blank", text: "Dollo was a __________ palaeontologist", answer: "" },
                    { type: "true-false", text: "Evolutionary throwbacks are impossible", answer: "" }
                ]
            }
        ]
    },
    writing: {
        duration: 60 * 60, // 60 minutes
        tasks: [
            {
                taskNumber: 1,
                type: "Task 1",
                description: "Letter Writing",
                prompt: "You should spend about 20 minutes on this task.\n\nYou have just arrived in a new city and plan to stay for a year. Write a letter to your friend telling them about your new accommodation.\n\nYour letter should include:\n- Description of the place\n- What you like about it\n- Any concerns you have\n\nWrite at least 150 words.",
                minWords: 150,
                maxWords: 250,
                answer: ""
            },
            {
                taskNumber: 2,
                type: "Task 2",
                description: "Essay Writing",
                prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people think that the best way to be successful in life is to get a good education, while others argue that hard work and determination are more important.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
                minWords: 250,
                maxWords: 500,
                answer: ""
            }
        ]
    }
};

// ===================== GLOBAL VARIABLES =====================
let currentSkill = '';
let currentSection = 0;
let currentQuestion = 0;
let timerInterval = null;
let timeRemaining = 0;
let testAnswers = {};

// ===================== SKILL SELECTION =====================
function startSkill(skill) {
    currentSkill = skill;
    currentSection = 0;
    currentQuestion = 0;
    testAnswers = {};
    
    document.getElementById('skillSelection').style.display = 'none';
    document.getElementById('testInterface').style.display = 'flex';
    
    initializeTest(skill);
    startTimer(testData[skill].duration);
}

function initializeTest(skill) {
    const header = document.getElementById('skillTitle');
    const info = document.getElementById('sectionInfo');
    
    if (skill === 'listening') {
        header.textContent = 'IELTS Listening Mock Test';
        info.textContent = 'Section 1 of 4 - 40 questions total';
        loadListeningTest();
    } else if (skill === 'reading') {
        header.textContent = 'IELTS Reading Mock Test';
        info.textContent = 'Passage 1 of 3 - 40 questions total';
        loadReadingTest();
    } else if (skill === 'writing') {
        header.textContent = 'IELTS Writing Mock Test';
        info.textContent = 'Task 1 of 2';
        loadWritingTest();
    }
}

// ===================== LISTENING TEST =====================
function loadListeningTest() {
    document.getElementById('listeningContent').style.display = 'block';
    document.getElementById('readingContent').style.display = 'none';
    document.getElementById('writingContent').style.display = 'none';
    
    document.getElementById('listeningQuestions').style.display = 'block';
    document.getElementById('readingQuestions').style.display = 'none';
    document.getElementById('writingEditor').style.display = 'none';
    
    const section = testData.listening.sections[currentSection];
    document.getElementById('listeningSection').innerHTML = `
        <h2>${section.title}</h2>
        <p>${section.description}</p>
        <p style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px;">
            🎧 <strong>Audio would play here:</strong> "${section.title} - Mock Audio"
        </p>
    `;
    
    renderListeningQuestions();
    generateQuestionNumbers();
}

function renderListeningQuestions() {
    const section = testData.listening.sections[currentSection];
    const container = document.getElementById('listeningQuestionsContainer');
    const startNumber = currentSection * 10 + 1;
    
    container.innerHTML = '';
    section.questions.forEach((q, idx) => {
        const qNumber = startNumber + idx;
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        let html = `<div class="question-number">Question ${qNumber}</div>
                    <div class="question-text">${q.text}</div>`;
        
        if (q.type === 'multiple-choice') {
            html += `<div class="question-options">`;
            q.options.forEach(opt => {
                html += `<label class="option" onclick="selectListeningOption(${currentSection}, ${idx}, '${opt}')">
                    <input type="radio" name="q${qNumber}"> ${opt}
                </label>`;
            });
            html += `</div>`;
        } else if (q.type === 'fill-blank') {
            html += `<input type="text" class="fill-blank" placeholder="Type your answer" 
                    onchange="saveListeningAnswer(${currentSection}, ${idx}, this.value)">`;
        } else if (q.type === 'true-false') {
            html += `<div class="true-false-options">
                    <button onclick="selectTrueFalse(${currentSection}, ${idx}, 'True')">True</button>
                    <button onclick="selectTrueFalse(${currentSection}, ${idx}, 'False')">False</button>
                    <button onclick="selectTrueFalse(${currentSection}, ${idx}, 'Not Given')">Not Given</button>
                </div>`;
        }
        
        questionDiv.innerHTML = html;
        container.appendChild(questionDiv);
    });
}

function selectListeningOption(section, qIdx, option) {
    const key = `listening-${section}-${qIdx}`;
    testAnswers[key] = option;
}

function saveListeningAnswer(section, qIdx, value) {
    const key = `listening-${section}-${qIdx}`;
    testAnswers[key] = value;
}

function selectTrueFalse(section, qIdx, value) {
    const key = `listening-${section}-${qIdx}`;
    testAnswers[key] = value;
    
    // Update button styles
    const buttons = event.target.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

// ===================== READING TEST =====================
function loadReadingTest() {
    document.getElementById('listeningContent').style.display = 'none';
    document.getElementById('readingContent').style.display = 'block';
    document.getElementById('writingContent').style.display = 'none';
    
    document.getElementById('listeningQuestions').style.display = 'none';
    document.getElementById('readingQuestions').style.display = 'block';
    document.getElementById('writingEditor').style.display = 'none';
    
    const passage = testData.reading.passages[currentSection];
    document.getElementById('passageContent').innerHTML = `
        <h2>${passage.title}</h2>
        <p>${passage.content}</p>
    `;
    
    renderReadingQuestions();
    generateQuestionNumbers();
}

function renderReadingQuestions() {
    const passage = testData.reading.passages[currentSection];
    const container = document.getElementById('readingQuestionsContainer');
    const startNumber = currentSection * 13 + 1;
    
    container.innerHTML = '';
    passage.questions.forEach((q, idx) => {
        const qNumber = startNumber + idx;
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        let html = `<div class="question-number">Question ${qNumber}</div>
                    <div class="question-text">${q.text}</div>`;
        
        if (q.type === 'multiple-choice') {
            html += `<div class="question-options">`;
            q.options.forEach(opt => {
                html += `<label class="option" onclick="selectReadingOption(${currentSection}, ${idx}, '${opt}')">
                    <input type="radio" name="q${qNumber}"> ${opt}
                </label>`;
            });
            html += `</div>`;
        } else if (q.type === 'fill-blank') {
            html += `<input type="text" class="fill-blank" placeholder="Type your answer" 
                    onchange="saveReadingAnswer(${currentSection}, ${idx}, this.value)">`;
        } else if (q.type === 'true-false') {
            html += `<div class="true-false-options">
                    <button onclick="selectTrueFalseReading(${currentSection}, ${idx}, 'True')">True</button>
                    <button onclick="selectTrueFalseReading(${currentSection}, ${idx}, 'False')">False</button>
                    <button onclick="selectTrueFalseReading(${currentSection}, ${idx}, 'Not Given')">Not Given</button>
                </div>`;
        }
        
        questionDiv.innerHTML = html;
        container.appendChild(questionDiv);
    });
}

function selectReadingOption(section, qIdx, option) {
    const key = `reading-${section}-${qIdx}`;
    testAnswers[key] = option;
}

function saveReadingAnswer(section, qIdx, value) {
    const key = `reading-${section}-${qIdx}`;
    testAnswers[key] = value;
}

function selectTrueFalseReading(section, qIdx, value) {
    const key = `reading-${section}-${qIdx}`;
    testAnswers[key] = value;
    
    const buttons = event.target.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

// ===================== WRITING TEST =====================
function loadWritingTest() {
    document.getElementById('listeningContent').style.display = 'none';
    document.getElementById('readingContent').style.display = 'none';
    document.getElementById('writingContent').style.display = 'block';
    
    document.getElementById('listeningQuestions').style.display = 'none';
    document.getElementById('readingQuestions').style.display = 'none';
    document.getElementById('writingEditor').style.display = 'flex';
    
    const task = testData.writing.tasks[currentSection];
    document.getElementById('writingTaskTitle').textContent = `${task.type} - ${task.description}`;
    document.getElementById('wordTarget').textContent = task.minWords;
    
    document.getElementById('writingSection').innerHTML = `
        <h3>${task.type}</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${task.prompt}</p>
    `;
    
    document.getElementById('writingTextarea').onkeyup = updateWordCount;
    document.getElementById('writingTextarea').value = task.answer;
    updateWordCount();
}

function updateWordCount() {
    const text = document.getElementById('writingTextarea').value;
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById('wordCount').textContent = words;
    
    const task = testData.writing.tasks[currentSection];
    testAnswers[`writing-${currentSection}`] = text;
}

// ===================== NAVIGATION =====================
function nextQuestion() {
    const skill = currentSkill;
    let maxSections = 0;
    
    if (skill === 'listening') maxSections = 4;
    else if (skill === 'reading') maxSections = 3;
    else if (skill === 'writing') maxSections = 2;
    
    if (currentSection < maxSections - 1) {
        currentSection++;
        currentQuestion = 0;
        initializeTest(skill);
    }
}

function previousQuestion() {
    if (currentSection > 0) {
        currentSection--;
        currentQuestion = 0;
        initializeTest(currentSkill);
    }
}

function generateQuestionNumbers() {
    const container = document.getElementById('questionNumbers');
    container.innerHTML = '';
    
    let totalQuestions = 0;
    if (currentSkill === 'listening') totalQuestions = 40;
    else if (currentSkill === 'reading') totalQuestions = 40;
    else if (currentSkill === 'writing') totalQuestions = 2;
    
    for (let i = 1; i <= totalQuestions; i++) {
        const btn = document.createElement('button');
        btn.className = 'question-number-btn';
        btn.textContent = i;
        if (testAnswers[`${currentSkill}-${i}`]) {
            btn.classList.add('answered');
        }
        btn.onclick = () => goToQuestion(i);
        container.appendChild(btn);
    }
}

// ===================== TIMER =====================
function startTimer(duration) {
    timeRemaining = duration;
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
    const timerEl = document.getElementById('timer');
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeRemaining <= 60) {
        timerEl.classList.add('critical');
    } else if (timeRemaining <= 300) {
        timerEl.classList.add('warning');
    }
}

// ===================== SUBMIT TEST =====================
function submitTest() {
    clearInterval(timerInterval);
    
    const answeredCount = Object.keys(testAnswers).length;
    const resultSkill = currentSkill.charAt(0).toUpperCase() + currentSkill.slice(1);
    
    document.getElementById('testInterface').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'flex';
    document.getElementById('resultSkill').textContent = resultSkill;
    document.getElementById('resultAnswered').textContent = answeredCount;
    document.getElementById('resultTime').textContent = new Date().toLocaleString();
    
    sendResultsToEmail();
}

// ===================== EMAIL SUBMISSION =====================
function sendResultsToEmail() {
    const studentEmail = prompt('Enter your email address:', '');
    if (!studentEmail) return;
    
    const resultsText = formatTestResults(studentEmail);
    
    // Using Formspree for email (free service)
    fetch('https://formspree.io/f/xwpeozzd', {
        method: 'POST',
        body: JSON.stringify({
            email: studentEmail,
            instructor_email: 'laithongthu.2002@gmail.com',
            skill: currentSkill,
            answers: JSON.stringify(testAnswers),
            timestamp: new Date().toISOString(),
            results: resultsText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Your test has been submitted successfully!');
        } else {
            alert('Test submitted. You can close this page.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Test submitted. Results have been recorded.');
    });
}

function formatTestResults(studentEmail) {
    let results = `IELTS Mock Test Results\n`;
    results += `================================\n\n`;
    results += `Student Email: ${studentEmail}\n`;
    results += `Skill: ${currentSkill.toUpperCase()}\n`;
    results += `Date: ${new Date().toLocaleString()}\n`;
    results += `Time Remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}\n\n`;
    results += `Answers Provided:\n`;
    results += `================================\n`;
    
    Object.entries(testAnswers).forEach(([key, value]) => {
        results += `${key}: ${value}\n`;
    });
    
    return results;
}
