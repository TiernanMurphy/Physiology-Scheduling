const courseworkData = {
    'pre-dental': {
        title: 'PRE-DENTAL RECOMMENDED COURSEWORK',
        intro: 'Dental schools do not require a specific undergraduate major for admission. However, they do require a strong foundation in the basic sciences.',
        courses: [
            {
                section: '3 Semesters of Biology, including 2 with Lab',
                items: [
                    { code: 'BIOL 105/L', name: 'Info Flow in Biological Systems with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms' },
                    { code: 'BIOL 106', name: 'Energy Flow in Biological Systems', credits: 3, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required' },
                    { code: '', name: '1 additional Semester with lab – consult specific dental school requirements', credits: 4 }
                ]
            },
            {
                section: '4 Semesters of Chemistry',
                items: [
                    { code: 'CHEM 101/L', name: 'General Chemistry with lab', credits: 4, notes: 'May only be offered in certain terms' },
                    { code: 'CHEM 230/L', name: 'Organic Chemistry I with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 231/L', name: 'Organic Chemistry II with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 245/L', name: 'Biochemistry with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '2 Semesters of Physics',
                items: [
                    { code: 'PHYS 101/L or PHYS 103', name: 'General Physics I with lab or Scientific Physics I with lab', credits: 5, notes: 'Course Authorization Required if not in BIOL major or minor' },
                    { code: 'PHYS 102/L or PHYS 204', name: 'General Physics II with lab or Scientific Physics II with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '1 Semester of Mathematics',
                items: [
                    { code: 'MATH 121 or MATH 148 or MATH 157', name: 'Statistics or Survey of Calculus or Calculus-Analytic Geometry', credits: '3 or 4', notes: 'Pre-requisite required' }
                ]
            }
        ],
        additional: [
            'Many schools require additional Biology credits and/or upper-level science courses such as Anatomy & Physiology, Genetics, Microbiology, or Physiology.',
            'Many programs want a full year of General Chemistry with lab. Consider taking Inorganic Chemistry (CHEM 205) and General Chemistry II lab (CHEM 200L).',
            'Students are ultimately responsible for checking prospective dental schools\' pre-requisite courses via the ADEA Dental School Explorer.'
        ]
    },
    'pre-medicine': {
        title: 'PRE-MEDICINE RECOMMENDED COURSEWORK',
        intro: 'Medical schools do not require a specific undergraduate major for admission. However, they do require a strong foundation in the basic sciences.',
        courses: [
            {
                section: '3 Semesters of Biology',
                items: [
                    { code: 'BIOL 105/L', name: 'Info Flow in Biological Systems with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms' },
                    { code: 'BIOL 106', name: 'Energy Flow in Biological Systems', credits: 3, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required' },
                    { code: 'BIOL 207/L', name: 'Genetics with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '4 Semesters of Chemistry',
                items: [
                    { code: 'CHEM 101/L', name: 'General Chemistry with lab', credits: 4, notes: 'May only be offered in certain terms' },
                    { code: 'CHEM 230/L', name: 'Organic Chemistry I with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 231/L', name: 'Organic Chemistry II with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 245/L', name: 'Biochemistry with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '2 Semesters of Physics',
                items: [
                    { code: 'PHYS 101/L or PHYS 103', name: 'General Physics I with lab or Scientific Physics I with lab', credits: 5, notes: 'Course Authorization Required if not in BIOL major or minor' },
                    { code: 'PHYS 102/L or PHYS 204', name: 'General Physics II with lab or Scientific Physics II with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '1-2 Semesters of Mathematics',
                items: [
                    { code: 'MATH 121 and/or MATH 148 or MATH 157', name: 'Statistics and/or Survey of Calculus or Calculus-Analytic Geometry', credits: '3 or 4', notes: 'Pre-requisite required' }
                ]
            }
        ],
        additional: [
            'Many programs want a full year of General Chemistry with lab. Consider taking Inorganic Chemistry (CHEM 205) and General Chemistry II lab (CHEM 200L).',
            'Check with your "must apply" schools to see if they will count Gonzaga\'s Biochemistry course as part of the General Chemistry requirement.',
            'Resources include the MSAR for MD programs and the Choose DO Explorer for DO programs.',
            'Also consider: grade point average, the MCAT, shadowing, clinical experience, and volunteer experience.'
        ]
    },
    'pre-occupational-therapy': {
        title: 'PRE-OCCUPATIONAL THERAPY RECOMMENDED COURSEWORK',
        intro: 'Occupational Therapy (OT) schools do not require a specific undergraduate major for admission. However, they do require a strong foundation in the basic sciences.',
        courses: [
            {
                section: '1 Semester of Biology',
                items: [
                    { code: 'BIOL 105/L', name: 'Info Flow in Biological Systems with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms' }
                ]
            },
            {
                section: '1 Semester of Chemistry',
                items: [
                    { code: 'CHEM 101/L', name: 'General Chemistry with lab', credits: 4, notes: 'May only be offered in certain terms' }
                ]
            },
            {
                section: '2 Semesters of Anatomy & Physiology',
                items: [
                    { code: 'HPHY 241/L', name: 'Human Anatomy & Physiology I with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'HPHY 242/L', name: 'Human Anatomy & Physiology II with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '1 Semester of Mathematics',
                items: [
                    { code: 'MATH 121', name: 'Statistics', credits: 3 }
                ]
            },
            {
                section: '1 Semester of Sociology / Anthropology',
                items: [
                    { code: 'SOCI 101', name: 'Introduction to Sociology', credits: 3 }
                ]
            },
            {
                section: '2-3 Semesters of Psychology',
                items: [
                    { code: 'PSYC 101', name: 'General Psychology', credits: 3 },
                    { code: 'PSYC 364 and/or PSYC 390', name: 'Abnormal Child Psychology and/or Psychopathology', credits: 3, notes: 'Pre-requisite required, Course Authorization Required if not in PSYC major or minor' },
                    { code: 'PSYC 357', name: 'Lifespan Development', credits: 3, notes: 'Pre-requisite required, Course Authorization Required if not in PSYC major or minor' }
                ]
            },
            {
                section: 'Medical Terminology',
                items: [
                    { code: '', name: 'Not offered at Gonzaga', credits: 'Varies' }
                ]
            }
        ],
        additional: [
            'OT schools may require or recommend additional coursework such as Chemistry, Physics, or Kinesiology.',
            'Students can search the ACOTE School Directory for specific school requirements.',
            'Also consider: grade point average, the GRE, shadowing, clinical experience, and volunteer service.'
        ]
    },
    'pre-physical-therapy': {
        title: 'PRE-PHYSICAL THERAPY RECOMMENDED COURSEWORK',
        intro: 'Physical Therapy (PT) schools do not require a specific undergraduate major for admission. However, they do require a strong foundation in the basic sciences.',
        courses: [
            {
                section: '2 Semesters of Biology',
                items: [
                    { code: 'BIOL 105/L', name: 'Info Flow in Biological Systems with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms' },
                    { code: 'BIOL 170/L', name: 'Microbiology with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '2 Semesters of Chemistry',
                items: [
                    { code: 'CHEM 101/L', name: 'General Chemistry with lab', credits: 4, notes: 'May only be offered in certain terms' },
                    { code: 'CHEM 205 + CHEM 200L or Organic Chemistry I with lab', name: 'Inorganic Chemistry + Chemistry II Lab or Organic Chemistry I with lab', credits: '4 to 5' }
                ]
            },
            {
                section: '2 Semesters of Anatomy & Physiology',
                items: [
                    { code: 'HPHY 241/L', name: 'Human Anatomy & Physiology I with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'HPHY 242/L', name: 'Human Anatomy & Physiology II with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '1 Semester of Mathematics',
                items: [
                    { code: 'MATH 121', name: 'Statistics', credits: 3, notes: 'Some schools may accept HPHY 205 Experimental Design & Stats' }
                ]
            },
            {
                section: '2 Semesters of Physics',
                items: [
                    { code: 'PHYS 101/L or PHYS 103', name: 'General Physics I with lab or Scientific Physics I with lab', credits: 5, notes: 'Course Authorization Required if not in BIOL major or minor' },
                    { code: 'PHYS 102/L or PHYS 204', name: 'General Physics II with lab or Scientific Physics II with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '1 Semester of Social Science',
                items: [
                    { code: 'PSYC 101', name: 'Psychology', credits: 3 }
                ]
            }
        ],
        additional: [
            'PT schools may require or recommend additional courses such as Genetics, additional Psychology or social science, Organic Chemistry, Biochemistry, or Medical Terminology.',
            'Check the PTCAS Program Directory for specific school requirements.',
            'Also consider: grade point average, the GRE, shadowing, clinical experience, and volunteer service.'
        ]
    },
    'pre-physician-assistant': {
        title: 'PRE-PHYSICIAN ASSISTANT RECOMMENDED COURSEWORK',
        intro: 'Physician Assistant (PA) schools do not require a specific undergraduate major for admission. However, they do require a strong foundation in the basic sciences.',
        courses: [
            {
                section: '4 Semesters of Biology',
                items: [
                    { code: 'BIOL 105/L', name: 'Info Flow in Biological Systems with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms' },
                    { code: 'BIOL 106', name: 'Energy Flow in Biological Systems', credits: 3, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required' },
                    { code: 'BIOL 170/L or BIOL 370/L', name: 'Introduction to Microbiology or Microbiology with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required' },
                    { code: 'BIOL 207/L', name: 'Genetics with Lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '4 Semesters of Chemistry',
                items: [
                    { code: 'CHEM 101/L', name: 'General Chemistry with lab', credits: 4, notes: 'May only be offered in certain terms' },
                    { code: 'CHEM 230/L', name: 'Organic Chemistry I with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 231/L', name: 'Organic Chemistry II with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 245/L', name: 'Biochemistry with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '2 Semesters of Anatomy & Physiology',
                items: [
                    { code: 'HPHY 241/L', name: 'Human Anatomy & Physiology I with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'HPHY 242/L', name: 'Human Anatomy & Physiology II with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '1 Semester of Mathematics',
                items: [
                    { code: 'MATH 121', name: 'Statistics', credits: 3 }
                ]
            },
            {
                section: '1 Semester of Social Science',
                items: [
                    { code: 'PSYC 101', name: 'General Psychology', credits: 3 }
                ]
            },
            {
                section: 'Medical Terminology',
                items: [
                    { code: '', name: 'Not offered at Gonzaga', credits: 'Varies' }
                ]
            }
        ],
        additional: [
            'PA schools may require or recommend additional coursework including advanced Psychology courses (Abnormal Psychology, Lifespan Development, etc.).',
            'Search the PAEA Program Directory for specific school requirements.',
            'Also consider: grade point average, standardized exams, shadowing, extensive clinical experience, and volunteer service.'
        ]
    },
    'undecided': {
        title: 'UNDECIDED PRE-HEALTH RECOMMENDED COURSEWORK',
        intro: 'All health professions schools require a strong foundation in the basic sciences for admission. For pre-health students that have not yet determined a specific pathway, start with these courses:',
        courses: [
            {
                section: '2 Semesters of Biology',
                items: [
                    { code: 'BIOL 105/L', name: 'Info Flow in Biological Systems with lab', credits: 4, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms' },
                    { code: 'BIOL 106', name: 'Energy Flow in Biological Systems', credits: 3, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '4 Semesters of Chemistry',
                items: [
                    { code: 'CHEM 101/L', name: 'General Chemistry with lab', credits: 4, notes: 'May only be offered in certain terms' },
                    { code: 'CHEM 230/L', name: 'Organic Chemistry I with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 231/L', name: 'Organic Chemistry II with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' },
                    { code: 'CHEM 245/L', name: 'Biochemistry with lab', credits: 4, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '2 Semesters of Physics',
                items: [
                    { code: 'PHYS 101/L or PHYS 103', name: 'General Physics I with lab or Scientific Physics I with lab', credits: 5, notes: 'Course Authorization Required if not in BIOL major or minor' },
                    { code: 'PHYS 102/L or PHYS 204', name: 'General Physics II with lab or Scientific Physics II with lab', credits: 5, notes: 'May only be offered in certain terms, Pre-requisite required' }
                ]
            },
            {
                section: '1 Semester of Mathematics',
                items: [
                    { code: 'MATH 121 or MATH 148 or MATH 157', name: 'Statistics or Survey of Calculus or Calculus-Analytic Geometry', credits: '3 or 4', notes: 'Pre-requisite required' }
                ]
            }
        ],
        additional: [
            'Due to varied admission requirements, additional suggested courses include: Genetics and Lab; Physiology and Biodiversity or Human Anatomy & Physiology I and II; Inorganic Chemistry and General Chemistry II Lab; Microbiology.',
            'Reference the recommended coursework for your specific pre-health pathway once determined.',
            'Also consider: grade point average, standardized exams, shadowing, clinical experience, and volunteer service.'
        ]
    }
};

let currentQuestion = 1;
const totalQuestions = 8;
const surveyData = {};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'register') {
        currentQuestion = 1;
        updateProgress();
        showQuestion(1);
    }
}

function submitRegistration() {
    saveCurrentAnswer();
   
    const userName = surveyData.name?.trim() || "Student";


    loggedInUser = { 
        name: userName,
        email: surveyData.email || "student@example.com",
        ...surveyData
    };

    document.getElementById("user-name").textContent = userName;

    displayDegreeGuide();
    showScreen("dashboard");
}


function showQuestion(questionNum) {
    document.querySelectorAll('.survey-question').forEach(q => q.classList.remove('active'));
    document.querySelector(`[data-q="${questionNum}"]`).classList.add('active');
    currentQuestion = questionNum;
    updateProgress();
}

function updateProgress() {
    const progress = (currentQuestion / totalQuestions) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-q').textContent = currentQuestion;
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        saveCurrentAnswer();
        showQuestion(currentQuestion + 1);
    }
}

function prevQuestion() {
    if (currentQuestion > 1) {
        showQuestion(currentQuestion - 1);
    }
}

function saveCurrentAnswer() {
    const questions = ['name', 'email', 'major', 'minor', 'abroad', 'career', 'clubs', 'additional'];
    const currentField = questions[currentQuestion - 1];
    
    if (currentField === 'abroad') {
        const selected = document.querySelector('input[name="abroad"]:checked');
        if (selected) surveyData[currentField] = selected.value;
    } else {
        const element = document.getElementById(currentField);
        if (element) surveyData[currentField] = element.value;
    }
}

function submitRegistration() {
    saveCurrentAnswer();
    
    const userName = surveyData.name?.trim() || "Student";

    // store as logged in
    loggedInUser = {
        name: userName,
        email: surveyData.email || "example@zagmail.com",
        ...surveyData
    };

    document.getElementById("user-name").textContent = userName;

    displayDegreeGuide();
    showScreen("dashboard");
    
    // Display coursework based on career path
    const careerPath = surveyData.career;
    if (careerPath && courseworkData[careerPath]) {
        displayCoursework(careerPath);
        showScreen('coursework');
    } else {
        alert('Registration submitted! (Data logged to console)');
        showScreen('home');
    }
}

function displayCoursework(pathway) {
    const data = courseworkData[pathway];
    const content = document.getElementById('coursework-content');
    
    let html = `
        <div class="coursework-section">
            <h3>${data.title}</h3>
            <p>${data.intro}</p>
        </div>
    `;

    data.courses.forEach(section => {
        html += `
            <div class="coursework-section">
                <h3>${section.section}</h3>
                <table class="degree-table simple-table">
                    <tbody>
        `;
        
        section.items.forEach(item => {
            html += `
                <tr>
                    <td>${item.code || ''}</td>
                    <td>${item.name}</td>
                    <td style="text-align:center">${item.credits}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
    });
    
    if (data.additional && data.additional.length > 0) {
        html += `
            <div class="coursework-section">
                <h3>Additional Information</h3>
        `;
        data.additional.forEach(note => {
            html += `<div class="info-note">• ${note}</div>`;
        });
        html += `</div>`;
    }
    
    content.innerHTML = html;
}



function downloadCoursework() {
    const pathway = surveyData.career;
    if (!pathway || !courseworkData[pathway]) return;
    
    const data = courseworkData[pathway];
    let pdfContent = `${data.title}\n\n`;
    pdfContent += `${data.intro}\n\n`;
    
    data.courses.forEach(section => {
        pdfContent += `${section.section}\n`;
        section.items.forEach(item => {
            pdfContent += `  ${item.code ? item.code + ': ' : ''}${item.name} (${item.credits} credits)\n`;
            if (item.notes) pdfContent += `    ${item.notes}\n`;
        });
        pdfContent += `\n`;
    });
    
    if (data.additional && data.additional.length > 0) {
        pdfContent += `Additional Information:\n`;
        data.additional.forEach(note => {
            pdfContent += `• ${note}\n`;
        });
        pdfContent += `\n`;
    }
    
    pdfContent += `Important Notes:\n`;
    pdfContent += `• This information is subject to change. Confirm with the course catalog, ZagWeb, and/or your academic advisor.\n`;
    pdfContent += `• Use this as a guide and work with your faculty advisor and Academic Advising & Assistance.\n`;
    pdfContent += `• Last Updated: 12.07.21 | Health Professions Pathways Program | h3p@gonzaga.edu | www.gonzaga.edu/h3p\n`;
    
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${pathway}-coursework.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function displayDegreeGuide() {
    const content = document.getElementById('degree-content');
    content.innerHTML = `
        <div class="coursework-section">
            <h3>B.S. Human Physiology Required Courses</h3>
            <p><strong>Science Core, 29 Credits</strong></p>
            <table class="degree-table">
            <tbody>
                <tr>
                    <td>BIOL 105/L</td>
                    <td>Biological Systems & Lab</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>CHEM 101/L</td>
                    <td>Chemistry & Lab</td>
                    <td>4</tr>
                </tr>
                <tr>
                    <td>CHEM 230/L</td>
                    <td>Organic Chem & Lab</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>PSYC 101</td>
                    <td>Psychology</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>MATH 148</td>
                    <td>Survey of Calculus</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>PHYS 101/L</td>
                    <td>Physics I & Lab</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>PHYS 102/L</td>
                    <td>Physics II & Lab</td>
                    <td>5</td>
                </tr>
                </tbody>
            </table>
            <p><strong>Lower Division, 17 Credits</strong></p>
            <table class="degree-table">
            <tbody>
                <tr>
                    <td>HPHY 205</td>
                    <td>Exp. Research</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>HPHY 210</td>
                    <td>Scientific Writing</td>
                    <td>3</tr>
                </tr>
                <tr>
                    <td>HPHY 241/L</td>
                    <td>Anatomy & Physiology 1 (Course & Lab)</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>HPHY 242/L</td>
                    <td>Anatomy & Physiology 2 (Course & Lab)</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>HPHY 274</td>
                    <td>Human Kinetics</td>
                    <td>3</td>
                </tbody>
            </table>
            <p><strong>Upper Division, 23 Credits</p></strong>
            <table class="degree-table">
            <tbody>
                <tr>
                    <td>HPHY 375/L</td>
                    <td>Biomechanics & Lab</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>HPHY 376/L</td>
                    <td>Exercise Physiology & Lab</td>
                    <td>4</tr>
                </tr>
                <tr>
                    <td>HPHY 441L</td>
                    <td>Guided Experimental Design</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>HPHY 442L</td>
                    <td>Guided Research</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>HPHY 499</td>
                    <td>Culminating Experience</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>PHYS 101/L</td>
                    <td>Physics I & Lab</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>PHYS 102/L</td>
                    <td>Physics II & Lab</td>
                    <td>5</td>
                </tr>
                </tbody>
            </table>
        </div>
    `;
}


function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    loggedInUser = { email };

    const baseName = email.includes("@") ? email.split("@")[0] : "Student";
    const userName = baseName.charAt(0).toUpperCase() + baseName.slice(1);

    document.getElementById("user-name").textContent = userName;

    displayDegreeGuide();
    showScreen("dashboard");
}


function handleEnterKey(event, action) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (action === 'nextQuestion') {
            nextQuestion();
        } else if (action === 'submitRegistration') {
            submitRegistration();
        }
    }
}

// Add visual feedback for radio buttons
document.addEventListener('change', function(e) {
    if (e.target.type === 'radio') {
        document.querySelectorAll('.radio-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        e.target.closest('.radio-option').classList.add('selected');
    }
});