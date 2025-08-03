document.addEventListener('DOMContentLoaded', function(){

    // Datos de la malla curricular
    const curriculumData = [
        {
            year: 1,
            name: "Primer Año",
            semesters: [
                {
                    name: "Primer Cuatrimestre",
                    subjects: [
                        { id: "alg", name: "Álgebra Lineal y Geometría Analítica", credits: 4, requires: [] },
                        { id: "analisis1", name: "Análisis Matemático I", credits: 5, requires: [] },
                        { id: "sistemas-rep", name: "Sistemas de Representación", credits: 3, requires: [] }
                    ]
                },
                {
                    name: "Segundo Cuatrimestre",
                    subjects: [
                        { id: "fisica1", name: "Física I", credits: 5, requires: ["alg", "analisis1"] },
                        { id: "quimica", name: "Química General", credits: 4, requires: ["analisis1"] },
                        { id: "informatica", name: "Informática", credits: 3, requires: ["alg"] }
                    ]
                }
            ]
        },
        {
            year: 2,
            name: "Segundo Año",
            semesters: [
                {
                    name: "Primer Cuatrimestre",
                    subjects: [
                        { id: "analisis2", name: "Análisis Matemático II", credits: 5, requires: ["fisica1"] },
                        { id: "circuitos", name: "Introducción a los Circuitos Eléctricos", credits: 4, requires: ["quimica", "alg"] },
                        { id: "probabilidad", name: "Probabilidad y Estadística", credits: 4, requires: ["alg", "analisis1"] },
                        { id: "resistencia", name: "Estabilidad y Resistencia de Materiales", credits: 5, requires: ["sistemas-rep", "fisica1", "informatica", "ing-soc"] }
                    ]
                },
                {
                    name: "Segundo Cuatrimestre",
                    subjects: [
                        { id: "fisica2", name: "Física II", credits: 5, requires: ["fisica1", "analisis2"] },
                        { id: "mat-aplicada", name: "Matemática Aplicada", credits: 4, requires: ["informatica", "analisis2"] },
                        { id: "termodinamica", name: "Termodinámica", credits: 4, requires: ["analisis1", "quimica"] },
                        { id: "sistemas-rep-aplicada", name: "Sistemas de Representación Aplicada", credits: 3, requires: ["sistemas-rep", "informatica"] }
                    ]
                }
            ]
        },
        // ... (agregar los demás años de la misma forma)

    {
    year: 3,
    name: "Tercer Año",
    semesters: [
        {
            name: "Primer Cuatrimestre",
            subjects: [
                { 
                    id: "mecanica", 
                    name: "Mecánica", 
                    credits: 5, 
                    requires: ["fisica1", "informatica", "mat-aplicada", "ingles1"] 
                },
                { 
                    id: "fluidos", 
                    name: "Mecánica de los Fluidos", 
                    credits: 4, 
                    requires: ["resistencia", "fisica2", "ingles1"] 
                },
                { 
                    id: "sistemas1", 
                    name: "Sistemas y Señales I", 
                    credits: 4, 
                    requires: ["fisica2", "circuitos", "ingles1"] 
                },
                { 
                    id: "mediciones", 
                    name: "Mediciones Eléctricas", 
                    credits: 4, 
                    requires: ["fisica2", "circuitos", "ingles1"] 
                }
            ]
        },
        {
            name: "Segundo Cuatrimestre",
            subjects: [
                { 
                    id: "sistemas2", 
                    name: "Sistemas y Señales II", 
                    credits: 4, 
                    requires: ["sistemas1", "ingles1"] 
                },
                { 
                    id: "electromagnetismo", 
                    name: "Electromagnetismo", 
                    credits: 5, 
                    requires: ["sistemas1", "ingles1"] 
                },
                { 
                    id: "estadistica-exp", 
                    name: "Estadística Experimental", 
                    credits: 3, 
                    requires: ["probabilidad", "ingles1"] 
                },
                { 
                    id: "electronica-analog", 
                    name: "Electrónica Analógica", 
                    credits: 5, 
                    requires: ["sistemas1", "ingles1"] 
                }
            ]
        }
    ]
},
        {
    year: 4,
    name: "Cuarto Año",
    semesters: [
        {
            name: "Primer Cuatrimestre",
            subjects: [
                { 
                    id: "electronica-digital", 
                    name: "Electrónica Digital", 
                    credits: 4, 
                    requires: ["electronica-analog"] 
                },
                { 
                    id: "elementos-maquinas", 
                    name: "Elementos de Máquinas", 
                    credits: 4, 
                    requires: ["sistemas-rep-aplicada", "mecanica"] 
                },
                { 
                    id: "electronica-industrial", 
                    name: "Electrónica Industrial", 
                    credits: 5, 
                    requires: ["electronica-analog"] 
                },
                { 
                    id: "maquinas-termicas", 
                    name: "Máquinas Térmicas e Hidráulicas", 
                    credits: 5, 
                    requires: ["termodinamica", "fluidos"] 
                }
            ]
        },
        {
            name: "Segundo Cuatrimestre",
            subjects: [
                { 
                    id: "instalaciones", 
                    name: "Instalaciones Eléctricas", 
                    credits: 4, 
                    requires: ["electronica-industrial"] 
                },
                { 
                    id: "materiales", 
                    name: "Materiales", 
                    credits: 4, 
                    requires: ["estadistica-exp", "quimica"] 
                },
                { 
                    id: "maquinas-electricas", 
                    name: "Máquinas Eléctricas", 
                    credits: 5, 
                    requires: ["electronica-analog", "electronica-digital"] 
                },
                { 
                    id: "control-automatico", 
                    name: "Instrumentación y Control Automático", 
                    credits: 5, 
                    requires: ["mediciones", "sistemas2", "electronica-industrial"] 
                }
            ]
        }
    ]
},
    {
    year: 5,
    name: "Quinto Año",
    semesters: [
        {
            name: "Primer Cuatrimestre",
            subjects: [
                { 
                    id: "mecanismos", 
                    name: "Mecanismos y Tecnología Mecánica", 
                    credits: 4, 
                    requires: ["elementos-maquinas", "materiales", "ingles2"] 
                },
                { 
                    id: "derecho", 
                    name: "Derecho para Ingenieros", 
                    credits: 3, 
                    requires: ["ingles2", "maquinas-termicas", "maquinas-electricas", "control-automatico"] 
                },
                { 
                    id: "electiva1", 
                    name: "Electiva I", 
                    credits: 3, 
                    requires: ["ingles2", "all-fourth-year"] 
                },
                { 
                    id: "gestion-ambiental", 
                    name: "Gestión Ambiental", 
                    credits: 3, 
                    requires: ["ingles2", "maquinas-electricas", "control-automatico"] 
                }
            ]
        },
        {
            name: "Segundo Cuatrimestre",
            subjects: [
                { 
                    id: "economia", 
                    name: "Economía y Organización Industrial", 
                    credits: 3, 
                    requires: ["ingles2", "derecho"] 
                },
                { 
                    id: "electiva2", 
                    name: "Electiva II", 
                    credits: 3, 
                    requires: ["ingles2", "all-fourth-year"] 
                },
                { 
                    id: "seguridad", 
                    name: "Higiene y Seguridad Industrial", 
                    credits: 3, 
                    requires: ["ingles2", "gestion-ambiental"] 
                },
                { 
                    id: "electiva3", 
                    name: "Electiva III", 
                    credits: 3, 
                    requires: ["ingles2", "all-fourth-year"] 
                }
            ]
        }
    ]
},
      
    {
    year: 6,
    name: "Requisitos Curriculares",
    semesters: [
        {
            name: "Idiomas",
            subjects: [
                { 
                    id: "ingles1", 
                    name: "Inglés I", 
                    credits: 2, 
                    requires: [] 
                },
                { 
                    id: "ingles2", 
                    name: "Inglés II o Portugués", 
                    credits: 2, 
                    requires: ["ingles1"] 
                }
            ]
        },
        {
            name: "Formación Integral",
            subjects: [
                { 
                    id: "ing-soc", 
                    name: "Ingeniería y Sociedad", 
                    credits: 2, 
                    requires: ["alg", "analisis1"] 
                }
            ]
        },
        {
            name: "Actividades Finales",
            subjects: [
                { 
                    id: "practica", 
                    name: "Práctica Profesional Supervisada", 
                    credits: 10, 
                    requires: ["all-fourth-year"] // Requiere TODAS las materias de 4to año
                },
                { 
                    id: "proyecto-final", 
                    name: "Proyecto Final", 
                    credits: 12, 
                    requires: ["all-fifth-year"] // Requiere TODAS las materias de 5to año
                }
            ]
        }
    ]
}
     
    ];

    // Estado de las materias aprobadas
    let approvedSubjects = JSON.parse(localStorage.getItem('approvedSubjects')) || [];
    
    // Elementos del DOM
    const tableContainer = document.querySelector('.curriculum-table');
    const completedCountEl = document.getElementById('completed-count');
    const totalCountEl = document.getElementById('total-count');
    const resetBtn = document.getElementById('reset-btn');
    
    // Contador total de materias
    let totalSubjects = 0;
    curriculumData.forEach(year => {
        year.semesters.forEach(semester => {
            totalSubjects += semester.subjects.length;
        });
    });
    totalCountEl.textContent = totalSubjects;

    function checkFourthYearCompletion() {
    const fourthYearSubjects = curriculumData
        .find(year => year.year === 4).semesters
        .flatMap(semester => semester.subjects.map(subject => subject.id));
    
    const allApproved = fourthYearSubjects.every(subjectId => 
        approvedSubjects.includes(subjectId));
    
    if (allApproved && !approvedSubjects.includes('all-fourth-year')) {
        approvedSubjects.push('all-fourth-year');
    }
}

function checkFifthYearCompletion() {
    const fifthYearSubjects = curriculumData
        .find(year => year.year === 5).semesters
        .flatMap(semester => semester.subjects.map(subject => subject.id));
    
    const allApproved = fifthYearSubjects.every(subjectId => 
        approvedSubjects.includes(subjectId));
    
    if (allApproved && !approvedSubjects.includes('all-fifth-year')) {
        approvedSubjects.push('all-fifth-year');
    }
}
    
    // Renderizar la tabla
    function renderCurriculum() {
    const container = document.querySelector('.curriculum-vertical');
    container.innerHTML = '';

    curriculumData.forEach(yearData => {
        // Fila completa para cada año
        const yearRow = document.createElement('div');
        yearRow.className = `year-row year-${yearData.year}`;
        
        // Encabezado del año
        const yearHeader = document.createElement('div');
        yearHeader.className = 'year-header';
        yearHeader.textContent = yearData.name;
        yearRow.appendChild(yearHeader);
        
        // Contenedor de semestres (se mostrarán como columnas)
        const semestersContainer = document.createElement('div');
        semestersContainer.className = 'semesters-container';
        
        yearData.semesters.forEach(semester => {
            // Columna para cada semestre
            const semesterColumn = document.createElement('div');
            semesterColumn.className = 'semester-column';
            
            // Encabezado del semestre
            const semesterHeader = document.createElement('div');
            semesterHeader.className = 'semester-header';
            semesterHeader.textContent = semester.name;
            semesterColumn.appendChild(semesterHeader);
            
            // Materias
            semester.subjects.forEach(subject => {
                const subjectEl = document.createElement('div');
                subjectEl.className = `subject year-${yearData.year}`;
                subjectEl.dataset.id = subject.id;
                
                if (approvedSubjects.includes(subject.id)) {
                    subjectEl.classList.add('approved');
                }
                
                const requirementsMet = subject.requires.every(req => {
                    if (req === 'all-fourth-year') return checkFourthYearCompletion(true);
                    if (req === 'all-fifth-year') return checkFifthYearCompletion(true);
                    return approvedSubjects.includes(req);
                });
                
                if (!requirementsMet && subject.requires.length > 0 && !approvedSubjects.includes(subject.id)) {
                    subjectEl.classList.add('disabled');
                }
                
                subjectEl.innerHTML = `
                    <div class="subject-name">${subject.name}</div>
                    <div class="subject-credits">${subject.credits} créditos</div>
                `;
                
                subjectEl.addEventListener('click', () => toggleApproval(subject.id));
                semesterColumn.appendChild(subjectEl);
            });
            
            semestersContainer.appendChild(semesterColumn);
        });
        
        yearRow.appendChild(semestersContainer);
        container.appendChild(yearRow);
    });
    
    updateCompletedCount();
}
    
    
    // Alternar aprobación de materia
    function toggleApproval(subjectId) {
    const subjectEl = document.querySelector(`.subject[data-id="${subjectId}"]`);
    
    if (subjectEl.classList.contains('disabled')) return;
    
    // Verificar si estamos aprobando una materia que desbloquea "all-fourth-year" o "all-fifth-year"
    const year = subjectEl.closest('.year')?.dataset.year;
    if (year === "4" && !approvedSubjects.includes(subjectId)) {
        checkFourthYearCompletion();
    }
    if (year === "5" && !approvedSubjects.includes(subjectId)) {
        checkFifthYearCompletion();
    }
    
    if (approvedSubjects.includes(subjectId)) {
        approvedSubjects = approvedSubjects.filter(id => id !== subjectId);
        subjectEl.classList.remove('approved');
    } else {
        approvedSubjects.push(subjectId);
        subjectEl.classList.add('approved');
    }
    
    localStorage.setItem('approvedSubjects', JSON.stringify(approvedSubjects));
    renderCurriculum();
}
    
    // Actualizar contador
    function updateCompletedCount() {
        completedCountEl.textContent = approvedSubjects.length;
    }
    
    // Reiniciar progreso
    resetBtn.addEventListener('click', () => {
        approvedSubjects = [];
        localStorage.setItem('approvedSubjects', JSON.stringify(approvedSubjects));
        renderCurriculum();
    });
    
    // Renderizar inicialmente
    renderCurriculum();
});





