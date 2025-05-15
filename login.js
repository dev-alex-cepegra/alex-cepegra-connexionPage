const user = {
  username: 'Alex',
  password: 'admin'
}

const errorsMessages = {
  fieldsEmpty: 'Veuillez remplir tout les champs',
  noMatchName: 'Login introuvable',
  noMatchPassword: 'Le mot de passe est incorrect'
}

const $form = document.querySelector('.loginForm')
const $inputUsername = $form.querySelector('.login')
const $inputPassword = $form.querySelector('.password')
const $notif = $form.querySelector('.notification')
const $connexion = document.querySelector('.secure')

const displayError = (message) => {
  $notif.classList.remove('hidden')
  $notif.textContent = message
}

$form.addEventListener('submit', e => {
  e.preventDefault()
  if (!$inputUsername.value || !$inputPassword.value) {
    displayError(errorsMessages.fieldsEmpty)
  } else {
    if ($inputUsername.value.trim().toLocaleLowerCase() !== user.username.trim().toLocaleLowerCase()) {
      displayError(errorsMessages.noMatchName)
    } else if ($inputPassword.value.trim() !== user.password.trim()) {
      displayError(errorsMessages.noMatchPassword)
    } else {
      $form.classList.add('hidden')
      $connexion.classList.remove('hidden')
    }
  }
})