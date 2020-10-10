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
        switch (+range.value) {
            case 6:
            case 7:
            case 8:
                GreenPass.classList.add('inactive');
                passwordLength = range.value
                lightGreenPass.classList.add('inactive');
                break;
            case 9:
            case 10:
            case 11:
            case 12:
                GreenPass.classList.add('inactive');
                passwordLength = range.value
                lightGreenPass.classList.remove('inactive');
                break;
            case 13:
            case 14:
            case 15:
            case 16:
                GreenPass.classList.remove('inactive');
                passwordLength = range.value
                lightGreenPass.classList.remove('inactive');
                break;
            default:
                console.log("Нет таких значений");
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