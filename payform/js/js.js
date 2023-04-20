


const types = document.querySelectorAll('.type');
for (let i = 0; i < types.length; i++) {
    types[i].addEventListener('click', function () {
        // Удаляем класс selected у всех блоков
        for (let j = 0; j < types.length; j++) {
            types[j].classList.remove('selected');
        }
        // Добавляем класс selected только на выбранный блок
        this.classList.add('selected');
    });
}

const currencySelect = document.getElementById('currency-select');
const amountInput = document.getElementById('amount-input');

currencySelect.addEventListener('change', function () {
    const currency = currencySelect.value;
    let placeholder = '0.0';

    if (currency === 'USD') {
        placeholder += ' USD';
    } else if (currency === 'KGS') {
        placeholder += ' KGS';
    } else if (currency === 'RUB') {
        placeholder += ' RUB';
    }

    amountInput.placeholder = placeholder;
});


document.getElementById('quick-pay-btn').addEventListener('click', function () {
    document.getElementById('block1').style.display = 'none';
    document.getElementById('block2').style.display = 'flex';
});
document.getElementById('plactcore-btn').addEventListener('click', function () {
    document.getElementById('block2').style.display = 'none';
    document.getElementById('block1').style.display = 'flex';
});

document.querySelector('form').addEventListener('submit', (event) => {
event.preventDefault();

// Задайте значения скрытых полей
document.getElementById('callback').value = 'https://stack.biat.asia:8443/84d6df7d-83cd-4965-bd29-96382078b5ac';
document.getElementById('successRedirect').value = 'https://stack.biat.exchange:8443/actuator/health';
document.getElementById('cancelRedirect').value = 'https://stack.biat.exchange:8443/actuator/error';

// Отправьте форму
event.target.submit();
});



document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let paymentForm = {
        clientId: formData.get("clientId"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        currency: formData.get("currency"),
        amount: formData.get("amount")
    };

    fetch(form.action, {
        method: form.method,
        headers: {
            'Content-Type': 'application/json',
            'name': 'demo@merchant.com',
            'uuid': '8c910a6bf60f7a0128dd2366f23c8b8c69172b7b'
        },
        body: JSON.stringify(paymentForm)
    }).then(response => {
        if (response.ok) {
            // Ваша логика обработки успешного ответа
            console.log("Форма успешно отправлена");
        } else {
            // Ваша логика обработки неудачного ответа
            console.log("Ошибка при отправке формы");
        }
    }).catch(error => {
        console.error('Ошибка:', error);
    });
});