/* ========================WRITE YOUR JS FROM HERE======================== */
function submit() {
	var checkPassword = checkPassword();
	var confPass = confPass();
	var phone = checkPhone();
	if  (checkPassword && confPass && phone) {
		return true;
	}
	alert("Form has not been submitted!");
	return false;		
}

function checkPassword() {
	var password = document.getElementById('password').value;
	var elem = document.getElementById('passworderror');

	if (password.length < 8 || !password.match(/[A-Z]/g) || !password.match(/[a-z]/g) || !password.match(/[0-9]/g)) {
		elem.innerHTML = 'Password should contain at least 8 characters, a capital letter, a small letter and a number.';
		return false;
	}
	elem.innerHTML = '';
	return true;
}

function confPass() {
	var cnfPassword = document.getElementById('cnfpassword').value;
	var password = document.getElementById('password').value;
	var elem = document.getElementById('cnfpasserror');
	if (cnfPassword !== password) {
		elem.innerHTML = 'Password does not match.'
		return false;
	}
	elem.innerHTML = '';
	return true;
}

function checkPhone(phone) {
	var phoneerr = document.getElementById('phoneerror');

	if (phone.length < 10) {
		phoneerr.innerHTML = 'Phone number should be of 10 digits.';
		return false;
	}
	phoneerr.innerHTML = '';
	return true;
}