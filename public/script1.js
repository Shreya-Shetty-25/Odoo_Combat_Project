// Handle radio button selection
function goBack() {
    history.back();
}

document.querySelectorAll('.option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove selected class from all options
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Add selected class to the selected option
        if (this.checked) {
            this.closest('.option').classList.add('selected');
        }
    });
});
document.getElementById('navbarToggler').addEventListener('click', function() {
    document.getElementById('navbarCollapse').classList.toggle('active');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('navbarCollapse').classList.remove('active');
});

// script1.js

document.addEventListener('DOMContentLoaded', function () {
    // Handle radio button selection
    const options = document.querySelectorAll('.option input[type="radio"]');
    const progressBar = document.getElementById('progressBar');
    
    options.forEach(option => {
        option.addEventListener('change', function () {
            const selectedOption = document.querySelector('.option input[type="radio"]:checked');
            
            if (selectedOption) {
                const currentPage = parseInt(window.location.pathname.match(/ques_(\d+)\.html/)[1]);
                const nextPage = currentPage + 1;
                updateProgressBar(nextPage);
                
                
                if (nextPage <= 10) { // Adjust this based on the total number of questions
                    window.location.href = `ques_${nextPage}.html`;
                } else {
                    console.log("All questions answered.");
                    window.location.href = 'Service.html';
                    // Redirect to a thank you or summary page if all questions are answered
                    // window.location.href = 'thank_you.html';
                }
            }
        });
        
    });
    function updateProgressBar(pageNumber) {
        const totalQuestions = 10; // Adjust this based on the total number of questions
        const progressPercentage = (pageNumber / totalQuestions) * 100;
        progressBar.style.width = (progressPercentage -5)+ '%';
        console.log("hello1")
    }
})
        function goBack() {
            const currentPage = parseInt(window.location.pathname.match(/ques_(\d+)\.html/)[1]);
            const nextPage = currentPage - 1;
            if (currentPage == 1) {
                window.location.href = 'index.html'; // Redirect to index.html if on ques_1.html
            } else {
                window.location.href = `ques_${nextPage}.html`;
            }
        }
document.addEventListener('DOMContentLoaded', function() {
    // Your code that interacts with the DOM elements
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', goBack);
    }
});
function setupEventListeners() {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', goBack);
    }
}




// Handle radio button selection
// function goBack() {
//     const currentPage = parseInt(window.location.pathname.match(/ques_(\d+)\.html/)[1]);
//     if (currentPage === 1) {
//         window.location.href = 'index.html'; // Redirect to index.html if on ques_1.html
//     } else {
//         const previousPage = currentPage - 1;
//         window.location.href = `ques_${previousPage}.html`;
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    // Handle radio button selection
    const options = document.querySelectorAll('.option input[type="radio"]');
    const progressBar = document.getElementById('progressBar');

    if (progressBar) {
        options.forEach(option => {
            option.addEventListener('change', function () {
                const selectedOption = document.querySelector('.option input[type="radio"]:checked');

                if (selectedOption) {
                    const currentPage = parseInt(window.location.pathname.match(/ques_(\d+)\.html/)[1]);
                    const nextPage = currentPage + 1;
                    console.log("hello")
                    updateProgressBar(nextPage);

                    if (nextPage <= 10) { // Adjust this based on the total number of questions
                        window.location.href = `ques_${nextPage}.html`;
                    } else {
                        console.log("All questions answered.");
                        // Redirect to a thank you or summary page if all questions are answered
                        // window.location.href = 'thank_you.html';
                    }
                }
            });
        });

        function updateProgressBar(pageNumber) {
            const totalQuestions = 10; // Adjust this based on the total number of questions
            const progressPercentage = (pageNumber / totalQuestions) * 100;
            progressBar.style.width = progressPercentage + '%';
            console.log("hello1")
        }

        const currentPage = parseInt(window.location.pathname.match(/ques_(\d+)\.html/)[1]);
        updateProgressBar(currentPage);

        // Setup event listener for back button
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', function() {
                goBack();
                updateProgressBar(currentPage - 1);
            });
        }
    }
});

document.querySelectorAll('.option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove selected class from all options
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Add selected class to the selected option
        if (this.checked) {
            this.closest('.option').classList.add('selected');
        }
    });
});

document.getElementById('navbarToggler').addEventListener('click', function() {
    document.getElementById('navbarCollapse').classList.toggle('active');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('navbarCollapse').classList.remove('active');
});

