const courseworkData = {
    'pre-dental': {
        title: 'PRE-DENTAL RECOMMENDED COURSEWORK',
        intro: 'Dental schools do not require a specific undergraduate major for admission. However, they do require a strong foundation in the basic sciences.',
        courses: [
            {
                section: '3 Semesters of Biology, including 2 with Lab',
                items: [
                    {
                        code: 'BIOL 105/L',
                        name: 'Info Flow in Biological Systems with lab',
                        credits: 4, 
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    {
                        code: 'BIOL 106',
                        name: 'Energy Flow in Biological Systems',
                        credits: 3,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    {
                        code: '',
                        name: '1 additional Semester with lab – consult specific dental school requirements',
                        credits: 4
                    }
                ]
            },
            {
                section: '4 Semesters of Chemistry',
                items: [
                    {
                        code: 'CHEM 101/L',
                        name: 'General Chemistry with lab',
                        credits: 4,
                        notes: 'May only be offered in certain terms'
                    },
                    {
                        code: 'CHEM 230/L',
                        name: 'Organic Chemistry I with lab',
                        credits: 5,
                        notes: 'May only be offered in certain terms, Pre-requisite required'
                    },
                    {
                        code: 'CHEM 231/L',
                        name: 'Organic Chemistry II with lab',
                        credits: 4,
                        notes: 'May only be offered in certain terms, Pre-requisite required'
                    },
                    {
                        code: 'CHEM 245/L',
                        name: 'Biochemistry with lab',
                        credits: 4,
                        notes: 'May only be offered in certain terms, Pre-requisite required'
                    }
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
                    {
                        code: 'BIOL 105/L',
                        name: 'Info Flow in Biological Systems with lab',
                        credits: 4,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    {
                        code: 'BIOL 106',
                        name: 'Energy Flow in Biological Systems',
                        credits: 3,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    {
                        code: 'BIOL 207/L',
                        name: 'Genetics with lab',
                        credits: 4,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    }
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
                    {
                        code: 'BIOL 105/L',
                        name: 'Info Flow in Biological Systems with lab',
                        credits: 4,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    }
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
                    {
                        code: 'BIOL 105/L',
                        name: 'Info Flow in Biological Systems with lab',
                        credits: 4,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    {
                        code: 'BIOL 170/L',
                        name: 'Microbiology with lab',
                        credits: 4,
                        notes: 'May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    }
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
                    { 
                        code: 'BIOL 105/L',
                        name: 'Info Flow in Biological Systems with lab',
                        credits: 4,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    {
                        code: 'BIOL 106',
                        name: 'Energy Flow in Biological Systems',
                        credits: 3, notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    { 
                        code: 'BIOL 170/L or BIOL 370/L',
                        name: 'Introduction to Microbiology or Microbiology with lab',
                        credits: 4,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    {
                        code: 'BIOL 207/L',
                        name: 'Genetics with Lab',
                        credits: 4,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    }
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
                    {
                        code: 'BIOL 105/L', 
                        name: 'Info Flow in Biological Systems with lab', 
                        credits: 4, 
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    },
                    { 
                        code: 'BIOL 106',
                        name: 'Energy Flow in Biological Systems',
                        credits: 3,
                        notes: 'Course Authorization Required if not in BIOL major or minor, May only be offered in certain terms, Pre-requisite required',
                        url: 'https://catalog.gonzaga.edu/courses/biol/'
                    }
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

const coreRequirements = {
    title: "GU Core Curriculum Requirements",
    intro: "All courses must be completed by undergraduates, ask advisor about AP and/or transfer credits.",
    sections: [
        {
            category: 'Year 1',
            credits: 18,
            courses: [
                {
                    code: 'DEPT 193',
                    name: 'First Year Seminar',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/courses/engl/'
                },
                {
                    code: 'ENGL 101',
                    name: 'Writing 101 (Enriched)',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/courses/phil/'
                },
                {
                    code: 'PHIL 101',
                    name: 'Reasoning',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/courses/reli/'
                },
                {
                    code: 'COMM 100',
                    name: 'Communication & Speech',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/courses/ucor/'
                },
                {
                    code: 'MATH',
                    name: 'must be above Math 100 level',
                    credits: 3,
                    // url: ''
                },
                {
                    code: 'DEPT 104',
                    name: 'Scientific Inquiry (Year 1 or 2)',
                    credits: 3,
                    // url: ''
                }
            ]
        },
        {
            category: 'Year 2',
            credits: 6,
            courses: [
                {
                    code: 'PHIL 201',
                    name: 'Philosophy of Human Nature',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/undergraduate/core-curriculum/'
                },
                {
                    code: 'RELI',
                    name: 'World or Comparative Religion',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/undergraduate/core-curriculum/'
                }
            ]
        },
        {
            category: 'Year 3',
            credits: 6,
            courses: [
                {
                    code: 'PHIL 301 or RELI Ethics',
                    name: 'Ethics (philosophy or religion based)',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/courses/phil/'
                },
                {
                    code: 'RELI',
                    name: 'World or Comparative Religion',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/courses/reli/'
                }
            ]
        },
        {
            category: 'Year 4',
            credits: 3,
            courses: [
                {
                    code: 'DEPT 492',
                    name: 'Core Integration Seminar',
                    credits: 3,
                    // url: 'https://catalog.gonzaga.edu/courses/phil/'
                }
            ]
        }
    ]
};

let currentQuestion = 1;
const totalQuestions = 8;
const surveyData = {};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    const container = document.querySelector('.container');

    // make container wider for coursework and dashboard screens
    if (screenId === 'coursework' || screenId === 'dashboard') {
        container.classList.add('wide');
    } else {
        container.classList.remove('wide');
    }
    
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

    // displayDegreeGuide();
    // showScreen("dashboard");

    // Display coursework based on career path
    let careerPath  = surveyData.career;

    // Treat "other" as "undecided"
    if (careerPath === "other") {
        careerPath = "undecided";
    }

    if (careerPath && courseworkData[careerPath]) {
        displayCourseworkWithCore(careerPath);
        showScreen('coursework');
    } else {
        alert('Registration submitted! (Data logged to console)');
        showScreen('home');
    }
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
            const courseName = item.url
                ? `<a href="${item.url}" target="_blank" class="course-link">${item.name}</a>`
                : item.name;

            html += `
                <tr>
                    <td>${item.code || ''}</td>
                    <td>${courseName}</td>
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

function displayCourseworkWithCore(pathway) {
    const content = document.getElementById('coursework-content');
    
    // First display core requirements
    let html = `
        <!-- Core Requirements Section -->
        <div class="coursework-section">
            <h3>${coreRequirements.title}</h3>
            <p>${coreRequirements.intro}</p>
        </div>
    `;
    
    // Display each core section
    coreRequirements.sections.forEach(section => {
        html += `
            <div class="coursework-section">
                <h3>${section.category} (${section.credits} Credits)</h3>
                <table class="degree-table">
                    <tbody>
        `;
        
        section.courses.forEach(course => {
            const courseName = course.url
                ? `<a href="${course.url}" target="_blank" class="course-link">${course.name}</a>`
                : course.name;
            
            html += `
                <tr>
                    <td>${course.code}</td>
                    <td>${courseName}</td>
                    <td style="text-align:center">${course.credits}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
    });

    // Add separator between core and career-specific coursework
    html += `<hr style="margin: 40px 0; border: none; border-top: 3px solid #002554;">`;

    // Now add the career-specific coursework
    const data = courseworkData[pathway];
    
    html += `
        <div class="coursework-section">
            <h3>${data.title}</h3>
            <p>${data.intro}</p>
        </div>
    `;

    data.courses.forEach(section => {
        html += `
            <div class="coursework-section">
                <h3>${section.section}</h3>
                <table class="degree-table">
                    <tbody>
        `;
        
        section.items.forEach(item => {
            const courseName = item.url
                ? `<a href="${item.url}" target="_blank" class="course-link">${item.name}</a>`
                : item.name;

            html += `
                <tr>
                    <td>${item.code || ''}</td>
                    <td>${courseName}</td>
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
    
    // Add additional information if available
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
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const userName = document.getElementById("user-name").textContent;
    const email = loggedInUser ? loggedInUser.email : "N/A";
    
    // Header with background
    doc.setFillColor(0, 37, 84);
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("Recommended Coursework", 105, 18, { align: 'center' });
    
    // Student info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(`Student: ${userName}`, 14, 40);
    doc.text(`Email: ${email}`, 14, 45);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 50);
    
    doc.line(14, 55, 196, 55);
    
    let yPos = 65;
    
    // Get coursework content
    const contentElement = document.getElementById("coursework-content");
    
    if (contentElement) {
        const sections = contentElement.querySelectorAll('.coursework-section');
        
        sections.forEach((section, index) => {
            const heading = section.querySelector('h3');
            const paragraph = section.querySelector('p');
            const table = section.querySelector('table');
            const notes = section.querySelectorAll('.info-note');
            
            // Title section (first section only)
            if (index === 0 && heading && paragraph) {
                doc.setFontSize(16);
                doc.setFont(undefined, 'bold');
                doc.setTextColor(0, 37, 84);
                doc.text(heading.innerText, 105, yPos, { align: 'center' });
                yPos += 10;
                
                doc.setFontSize(10);
                doc.setFont(undefined, 'normal');
                doc.setTextColor(0, 0, 0);
                const splitPara = doc.splitTextToSize(paragraph.innerText, 182);
                doc.text(splitPara, 14, yPos);
                yPos += (splitPara.length * 5) + 10;
            }
            // Course sections with tables
            else if (heading && table) {
                // Check if we need a new page
                if (yPos > 240) {
                    doc.addPage();
                    yPos = 20;
                }
                
                // Add section heading
                doc.setFontSize(12);
                doc.setFont(undefined, 'bold');
                doc.setTextColor(0, 37, 84);
                doc.text(heading.innerText, 14, yPos);
                yPos += 8;
                
                // Extract table data
                const rows = table.querySelectorAll('tr');
                const tableData = [];
                
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells.length >= 3) {
                        tableData.push([
                            cells[0].innerText.trim() || '',
                            cells[1].innerText.trim() || '',
                            cells[2].innerText.trim() || ''
                        ]);
                    }
                });
                
                // Use autoTable for clean formatting
                if (tableData.length > 0) {
                    doc.autoTable({
                        startY: yPos,
                        head: [['Course Code', 'Course Name', 'Credits']],
                        body: tableData,
                        theme: 'striped',
                        headStyles: { 
                            fillColor: [0, 37, 84], 
                            textColor: 255,
                            fontSize: 9
                        },
                        margin: { left: 14, right: 14 },
                        styles: { 
                            fontSize: 9,
                            cellPadding: 3
                        },
                        columnStyles: {
                            0: { cellWidth: 35 },
                            1: { cellWidth: 'auto' },
                            2: { cellWidth: 20, halign: 'center' }
                        }
                    });
                    yPos = doc.lastAutoTable.finalY + 10;
                }
            }
            // Additional Information section
            else if (notes.length > 0) {
                // Check if we need a new page
                if (yPos > 230) {
                    doc.addPage();
                    yPos = 20;
                }
                
                doc.setFontSize(12);
                doc.setFont(undefined, 'bold');
                doc.setTextColor(0, 37, 84);
                doc.text('Additional Information:', 14, yPos);
                yPos += 8;
                
                doc.setFontSize(9);
                doc.setFont(undefined, 'normal');
                doc.setTextColor(0, 0, 0);
                
                notes.forEach(note => {
                    if (yPos > 270) {
                        doc.addPage();
                        yPos = 20;
                    }
                    const splitNote = doc.splitTextToSize(note.innerText, 182);
                    doc.text(splitNote, 14, yPos);
                    yPos += (splitNote.length * 4) + 4;
                });
            }
        });
    } else {
        doc.text("No coursework content found", 14, yPos);
    }
    
    // Save as pdf
    doc.save(`recommended_coursework.pdf`);
}

function displayDegreeGuide() {
    const content = document.getElementById('degree-content');

    let html = `
        <!-- Core Requirements Section -->
        <div class="coursework-section">
            <h3>${coreRequirements.title}</h3>
            <p>${coreRequirements.intro}</p>
        </div>
    `;
    
    // Display each core section
    coreRequirements.sections.forEach(section => {
        html += `
            <div class="coursework-section">
                <h3>${section.category} (${section.credits} Credits)</h3>
                <table class="degree-table">
                    <tbody>
        `;
        
        section.courses.forEach(course => {
            const courseName = course.url
                ? `<a href="${course.url}" target="_blank" class="course-link">${course.name}</a>`
                : course.name;
            
            html += `
                <tr>
                    <td>${course.code}</td>
                    <td>${courseName}</td>
                    <td style="text-align:center">${course.credits}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
    });

        // Add total credits
        html += `
        <div class="coursework-section">
            <p style="text-align: right; font-weight: bold; font-size: 16px; color: #002554;">
                Total Core Credits: ${coreRequirements.totalCredits}
            </p>
        </div>
    `;
 
    // Add additional notes
    if (coreRequirements.additionalNotes && coreRequirements.additionalNotes.length > 0) {
        html += `
            <div class="coursework-section">
                <h3>Important Notes</h3>
        `;
        coreRequirements.additionalNotes.forEach(note => {
            html += `<div class="info-note">• ${note}</div>`;
        });
        html += `</div>`;
    }

    html += `<hr style="margin: 40px 0; border: none; border-top: 3px solid #002554;">`;

    html += `
        <div class="coursework-section">
            <h3>B.S. Human Physiology Required Courses</h3>
            <p><strong>Science Core, 29 Credits</strong></p>
            <table class="degree-table">
            <tbody>
                <tr>
                    <td>BIOL 105/L</td>
                    <td><a href="https://catalog.gonzaga.edu/courses/biol/" target="_blank" class="course-link">Biological Systems & Lab</a></td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>CHEM 101/L</td>
                    <td><a href="https://catalog.gonzaga.edu/undergraduate/arts-sciences/chemistry-biochemistry/#coursestext" target="_blank" class="course-link">Chemistry & Lab</a></td>
                    <td>4</tr>
                </tr>
                <tr>
                    <td>CHEM 230/L</td>
                    <td><a href="https://catalog.gonzaga.edu/undergraduate/arts-sciences/chemistry-biochemistry/#coursestext" target="_blank" class="course-link">Organic Chem & Lab</a></td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>PSYC 101</td>
                    <td><a href="https://catalog.gonzaga.edu/undergraduate/arts-sciences/psychology/#coursestext" target="_blank" class="course-link">Psychology</a></td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>MATH 148</td>
                    <td><a href="https://catalog.gonzaga.edu/undergraduate/arts-sciences/mathematics/#coursestext" target="_blank" class="course-link">Survey of Calculus</a></td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>PHYS 101/L</td>
                    <td><a href="https://catalog.gonzaga.edu/programs/physics-bs/" target="_blank" class="course-link">Physics I & Lab</a></td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>PHYS 102/L</td>
                    <td><a href="https://catalog.gonzaga.edu/programs/physics-bs/" target="_blank" class="course-link">Physics II & Lab</a></td>
                    <td>5</td>
                </tr>
                </tbody>
            </table>
            <p><strong>Lower Division, 17 Credits</strong></p>
            <table class="degree-table">
            <tbody>
                <tr>
                    <td>HPHY 205</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Exp. Research</a></td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>HPHY 210</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Scientific Writing</a></td>
                    <td>3</tr>
                </tr>
                <tr>
                    <td>HPHY 241/L</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Anatomy & Physiology 1 (Course & Lab)</a></td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>HPHY 242/L</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Anatomy & Physiology 2 (Course & Lab)</a></td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>HPHY 274</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Human Kinetics</a></td>
                    <td>3</td>
                </tbody>
            </table>
            <p><strong>Upper Division, 23 Credits</p></strong>
            <table class="degree-table">
            <tbody>
                <tr>
                    <td>HPHY 375/L</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Biomechanics & Lab</a></td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>HPHY 376/L</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Exercise Physiology & Lab</a></td>
                    <td>4</tr>
                </tr>
                <tr>
                    <td>HPHY 441L</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Guided Experimental Design</a></td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>HPHY 442L</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Guided Research</a></td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>HPHY 499</td>
                    <td><a href="https://www.gonzaga.edu/school-of-health-sciences/departments/human-physiology/courses" target="_blank" class="course-link">Culminating Experience</a></td>
                    <td>3</td>
                </tr>
                </tbody>
            </table>
        </div>
    `;

    content.innerHTML = html;
}

function downloadDegreeGuide() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.setTextColor(0, 37, 84);  // Gonzaga blue
    doc.text('B.S. Human Physiology Required Courses', 105, 20, { align: 'center' });
    
    let yPos = 35;
    
    // Science Core Section
    doc.setFontSize(14);
    doc.setTextColor(0, 37, 84);
    doc.text('Science Core - 29 Credits', 14, yPos);
    yPos += 8;
    
    doc.autoTable({
        startY: yPos,
        head: [['Course Code', 'Course Name', 'Credits']],
        body: [
            ['BIOL 105/L', 'Biological Systems & Lab', '4'],
            ['CHEM 101/L', 'Chemistry & Lab', '4'],
            ['CHEM 230/L', 'Organic Chem & Lab', '5'],
            ['PSYC 101', 'Psychology', '3'],
            ['MATH 148', 'Survey of Calculus', '3'],
            ['PHYS 101/L', 'Physics I & Lab', '5'],
            ['PHYS 102/L', 'Physics II & Lab', '5']
        ],
        theme: 'striped',
        headStyles: { fillColor: [0, 37, 84], textColor: 255 },
        margin: { left: 14, right: 14 },
        styles: { fontSize: 10 }
    });
    
    yPos = doc.lastAutoTable.finalY + 12;
    
    // Lower Division Section
    doc.setFontSize(14);
    doc.setTextColor(0, 37, 84);
    doc.text('Lower Division - 17 Credits', 14, yPos);
    yPos += 8;
    
    doc.autoTable({
        startY: yPos,
        head: [['Course Code', 'Course Name', 'Credits']],
        body: [
            ['HPHY 205', 'Exp. Research', '3'],
            ['HPHY 210', 'Scientific Writing', '3'],
            ['HPHY 241/L', 'Anatomy & Physiology 1 (Course & Lab)', '4'],
            ['HPHY 242/L', 'Anatomy & Physiology 2 (Course & Lab)', '4'],
            ['HPHY 274', 'Human Kinetics', '3']
        ],
        theme: 'striped',
        headStyles: { fillColor: [0, 37, 84], textColor: 255 },
        margin: { left: 14, right: 14 },
        styles: { fontSize: 10 }
    });
    
    yPos = doc.lastAutoTable.finalY + 12;
    
    // Upper Division Section
    doc.setFontSize(14);
    doc.setTextColor(0, 37, 84);
    doc.text('Upper Division - 23 Credits', 14, yPos);
    yPos += 8;
    
    doc.autoTable({
        startY: yPos,
        head: [['Course Code', 'Course Name', 'Credits']],
        body: [
            ['HPHY 375/L', 'Biomechanics & Lab', '4'],
            ['HPHY 376/L', 'Exercise Physiology & Lab', '4'],
            ['HPHY 441L', 'Guided Experimental Design', '5'],
            ['HPHY 442L', 'Guided Research', '3'],
            ['HPHY 499', 'Culminating Experience', '3']
        ],
        theme: 'striped',
        headStyles: { fillColor: [0, 37, 84], textColor: 255 },
        margin: { left: 14, right: 14 },
        styles: { fontSize: 10 }
    });
    
    yPos = doc.lastAutoTable.finalY + 12;
    
    // Total Credits
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Total Credits: 69', 14, yPos);
    yPos += 10;
    
    // Important Notes
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('Important Notes:', 14, yPos);
    yPos += 6;
    
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    const notes = [
        '• This information is subject to change. Confirm with the course catalog, ZagWeb,',
        '  and/or your academic advisor.',
        '• Use this as a guide and work with your faculty advisor and Academic Advising',
        '  & Assistance.'
    ];
    
    notes.forEach(note => {
        doc.text(note, 14, yPos);
        yPos += 5;
    });
    
    doc.save('required_courses.pdf');
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

function logout() {
    // Clear user data
    loggedInUser = null;

    // Clear survey data if needed
    Object.keys(surveyData).forEach(key => delete surveyData[key]);

    // Reset username
    document.getElementById('user-name').textContent = 'Student';

    // Return to home screen
    showScreen('home');

    // Reattach login listener if needed
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.removeEventListener('submit', handleLogin);  // Remove old listener
        loginForm.addEventListener('submit', handleLogin);  // Add fresh listener
    }
}