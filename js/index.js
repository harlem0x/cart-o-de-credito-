document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
};

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
};

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
};

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
};

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
};

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
};

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
};





document.querySelector('.card-number-input').oninput = () => {
    const cardNumber = document.querySelector('.card-number-input').value;
    document.querySelector('.card-number-box').innerText = cardNumber;

    
    const firstDigit = cardNumber.charAt(0);

   
    document.querySelectorAll('.card-img').forEach(img => img.style.display = 'none');

    
    switch (firstDigit) {
        case '4': // Visa
            document.querySelector('.card-container').style.backgroundColor = '#1a73e8';  
            document.querySelector('.visa').style.display = 'block'; 
            break;
        case '5': // MasterCard
            document.querySelector('.card-container').style.backgroundColor = '#eb001b';
            document.querySelector('.mastercard').style.display = 'block';
            break;
        case '3': // American Express
            document.querySelector('.card-container').style.backgroundColor = '#2b8f44'; 
            document.querySelector('.amex').style.display = 'block'; 
            break;
        default:
            // Se não for Visa, MasterCard ou American Express, 
            document.querySelector('.card-container').style.backgroundColor = '#c0c0c0'; 
            break;
            document.querySelector('.').style.display = 'block'; 
            break;
    }
};
