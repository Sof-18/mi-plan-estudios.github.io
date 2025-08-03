document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const subjects = document.querySelectorAll('.subject');
    const togglePrereqsBtn = document.getElementById('toggle-prereqs');
    const modal = document.getElementById('subject-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    let prereqsVisible = false;

    // Mapeo de IDs a nombres completos para requisitos
    const subjectNames = {
        'alg': 'Álgebra Lineal y Geometría Analítica',
        'analisis1': 'Análisis Matemático I',
        'sistemas-rep': 'Sistemas de Representación',
        'fisica1': 'Física I',
        'quimica': 'Química General',
        'informatica': 'Informática',
        'analisis2': 'Análisis Matemático II',
        'circuitos': 'Introducción a los Circuitos Eléctricos',
        'probabilidad': 'Probabilidad y Estadística',
        'resistencia': 'Estabilidad y Resistencia de Materiales',
        'fisica2': 'Física II',
        'mat-aplicada': 'Matemática Aplicada',
        'termodinamica': 'Termodinámica',
        'sistemas-rep-aplicada': 'Sistemas de Representación Aplicada',
        'mecanica': 'Mecánica',
        'fluidos': 'Mecánica de los Fluidos',
        'sistemas1': 'Sistemas y Señales I',
        'mediciones': 'Mediciones Eléctricas',
        'sistemas2': 'Sistemas y Señales II',
        'electromagnetismo': 'Electromagnetismo',
        'estadistica-exp': 'Estadística Experimental',
        'electronica-analog': 'Electrónica Analógica',
        'electronica-digital': 'Electrónica Digital',
        'elementos-maquinas': 'Elementos de Máquinas',
        'electronica-industrial': 'Electrónica Industrial',
        'maquinas-termicas': 'Máquinas Térmicas e Hidráulicas',
        'instalaciones': 'Instalaciones Eléctricas',
        'materiales': 'Materiales',
        'maquinas-electricas': 'Máquinas Eléctricas',
        'control-automatico': 'Instrumentación y Control Automático',
        'mecanismos': 'Mecanismos y Tecnología Mecánica',
        'derecho': 'Derecho para Ingenieros',
        'electiva1': 'Electiva I',
        'gestion-ambiental': 'Gestión Ambiental',
        'economia': 'Economía y Organización Industrial',
        'electiva2': 'Electiva II',
        'seguridad': 'Higiene y Seguridad Industrial',
        'electiva3': 'Electiva III',
        'ingles1': 'Inglés I',
        'ingles2': 'Inglés II o Portugués',
        'ing-soc': 'Ingeniería y Sociedad',
        'practica': 'Práctica Profesional Supervisada',
        'proyecto-final': 'Proyecto Final'
    };

    // Mapeo de áreas a descripciones
    const areaDescriptions = {
        'basic': 'Básica',
        'math': 'Matemática',
        'physics': 'Física',
        'engineering': 'Ingeniería',
        'elective': 'Electiva',
        'requirement': 'Requisito Curricular'
    };

    // Mostrar/ocultar requisitos
    togglePrereqsBtn.addEventListener('click', function() {
        prereqsVisible = !prereqsVisible;
        const prereqElements = document.querySelectorAll('.prerequisites');
        
        prereqElements.forEach(el => {
            el.style.display = prereqsVisible ? 'block' : 'none';
        });
        
        this.textContent = prereqsVisible ? 'Ocultar Requisitos' : 'Mostrar Requisitos';
    });

    // Configurar eventos para los botones de detalles
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const subject = this.closest('.subject');
            const subjectId = subject.dataset.id;
            const subjectTitle = subject.querySelector('h4').textContent;
            const subjectCredits = subject.querySelector('.credits').textContent;
            const subjectArea = areaDescriptions[subject.dataset.area];
            
            // Obtener requisitos
            let prereqsText = 'Ninguno';
            if (subject.dataset.requires) {
                const prereqIds = subject.dataset.requires.split(' ');
                
                // Manejar requisitos especiales
                if (prereqIds.includes('all-fourth-year')) {
                    prereqsText = 'Todas las asignaturas de Cuarto Año';
                } else if (prereqIds.includes('all-fifth-year')) {
                    prereqsText = 'Todas las asignaturas de Quinto Año';
                } else {
                    prereqsText = prereqIds.map(id => {
                        // Manejar el caso de inglés1 que está en los requisitos pero no en el data-id
                        if (id === 'ingles') return 'Inglés I';
                        return subjectNames[id] || id;
                    }).join(', ');
                }
            }
            
            // Actualizar modal
            document.getElementById('modal-title').textContent = subjectTitle;
            document.getElementById('modal-credits').textContent = subjectCredits;
            document.getElementById('modal-area').textContent = subjectArea;
            document.getElementById('modal-prereqs').textContent = prereqsText;
            
            // Aquí podrías agregar una descripción más detallada basada en el ID
            document.getElementById('modal-description').textContent = getSubjectDescription(subjectId);
            
            // Mostrar modal
            modal.style.display = 'block';
        });
    });

    // Cerrar modal
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Función para obtener descripciones detalladas (puedes expandir esto)
    function getSubjectDescription(subjectId) {
        const descriptions = {
            'alg': 'Estudio de espacios vectoriales, transformaciones lineales y geometría analítica.',
            'analisis1': 'Introducción al cálculo diferencial e integral en una variable.',
            'fisica1': 'Fundamentos de mecánica clásica: cinemática, dinámica y conservación de energía.',
            // Agrega más descripciones según sea necesario
        };
        
        return descriptions[subjectId] || 'Descripción detallada de la asignatura.';
    }

    // Función para verificar requisitos (puedes implementar lógica de progreso real aquí)
    function checkPrerequisites() {
        subjects.forEach(subject => {
            if (subject.dataset.requires) {
                const requiredSubjects = subject.dataset.requires.split(' ');
                let allMet = true;
                
                // Verificar cada requisito
                requiredSubjects.forEach(req => {
                    // Ignorar requisitos especiales para este ejemplo
                    if (req !== 'all-fourth-year' && req !== 'all-fifth-year' && req !== 'ingles') {
                        // En una implementación real, verificarías si el requisito está aprobado
                        // Aquí solo mostramos visualmente los requisitos
                    }
                });
                
                // En una implementación real, cambiarías el estilo según si los requisitos están cumplidos
                // subject.style.opacity = allMet ? '1' : '0.6';
            }
        });
    }

    // Inicializar
    checkPrerequisites();
});
