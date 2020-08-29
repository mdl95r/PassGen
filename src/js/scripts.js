document.addEventListener('DOMContentLoaded', function () {
    const btnGenerate = document.getElementById('btn-generate');
    const range = document.getElementById('range');
    const val = document.getElementById('current-value');
    const passwordReady = document.getElementById('password-ready');
    const passwordCopy = document.querySelector('.js-copy-password-btn');
    const btnShow = document.querySelector('.switch-btn');
    const lightGreenPass = document.querySelector('.light-green-color');
    const GreenPass = document.querySelector('.green-color');
    const copyPass = document.querySelector('.js-copy-password');
    const DeletePass = document.querySelector('.js-delete-password');
    const iconDel = document.querySelector('.delete-password__icon');

    val.innerHTML = range.value;
    let passwordLength = 6;

    range.oninput = function () {
        val.innerHTML = this.value;
        if (range.value == 6) {
            GreenPass.classList.add('inactive');
            passwordLength = range.value
            lightGreenPass.classList.add('inactive');
        }

        if (range.value == 7) {
            GreenPass.classList.add('inactive');
            passwordLength = range.value
            lightGreenPass.classList.add('inactive');
        }

        if (range.value == 8) {
            passwordLength = range.value
            GreenPass.classList.add('inactive');
            lightGreenPass.classList.add('inactive');
        }

        if (range.value == 9) {
            passwordLength = range.value
            lightGreenPass.classList.remove('inactive');
            GreenPass.classList.add('inactive');
        }

        if (range.value == 10) {
            passwordLength = range.value
            GreenPass.classList.add('inactive');
            lightGreenPass.classList.remove('inactive');
        }

        if (range.value == 11) {
            passwordLength = range.value
            GreenPass.classList.add('inactive');
            lightGreenPass.classList.remove('inactive');
        }

        if (range.value == 12) {
            passwordLength = range.value
            GreenPass.classList.add('inactive');
            lightGreenPass.classList.remove('inactive');
        }

        if (range.value == 13) {
            passwordLength = range.value
            GreenPass.classList.remove('inactive');
            lightGreenPass.classList.remove('inactive');
        }

        if (range.value == 14) {
            passwordLength = range.value
            GreenPass.classList.remove('inactive');
            lightGreenPass.classList.remove('inactive');
        }

        if (range.value == 15) {
            passwordLength = range.value
            GreenPass.classList.remove('inactive');
            lightGreenPass.classList.remove('inactive');
        }

        if (range.value == 16) {
            passwordLength = range.value
            GreenPass.classList.remove('inactive');
            lightGreenPass.classList.remove('inactive');
        }
    }

    function generatePassword() {
        let retVal = '';
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let charset2 = "!@#$%^&*()_+~`|}{[]\:;?>'<,./-="

        if (btnShow.classList.contains('switch-on')) {
            charset = charset + charset2
        }

        for (let i = 0, n = charset.length; i < passwordLength; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n))
        }
        passwordReady.value = retVal;
        return retVal;
    }

    btnGenerate.addEventListener('click', function (e) {
        e.preventDefault();
        generatePassword();
        DeletePass.style.display = 'block';
        iconDel.style.display = 'block';
    });

    passwordCopy.addEventListener('click', function (e) {
        e.preventDefault();
        if (passwordReady.value == '' || passwordReady.value == null) {
            copyPass.innerText = 'Сгенирируйте пароль!'
            passwordReady.style.boxShadow = '0 0 2px 1px #c41313'
        } else {
            passwordReady.select();
            document.execCommand("copy");
            copyPass.innerText = `Пароль ${passwordReady.value} скопирован!`;
        }
    });

    passwordCopy.addEventListener('mouseover', function () {
        copyPass.classList.add('active')
    });

    passwordCopy.addEventListener('mouseout', function () {
        setTimeout(function () {
            copyPass.classList.remove('active');
            copyPass.innerText = 'Copy this!'
            passwordReady.style.boxShadow = '';
        }, 1500)
    });

    btnShow.addEventListener('click', function () {
        this.classList.toggle('switch-on');
    });

    DeletePass.addEventListener('click', function (e) {
        e.preventDefault();
        passwordReady.value = '';
        this.style.display = '';
        iconDel.style.display = '';
    });
});