const toggleSwitch = document.querySelector('#toggle');
const $html = document.querySelector('html')

// função para alternar entre os temas
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    $html.classList.add('light-mode');
    $html.classList.remove('dark-mode');
    icon.forEach(i => i.classList.remove('hidden'));
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    $html.classList.add('dark-mode');
    $html.classList.remove('light-mode');
    icon.forEach(i => i.classList.add('hidden'));
  }    
}

// adiciona o evento de clique ao botão switch
toggleSwitch.addEventListener('change', switchTheme, false);

// detecta se o tema é light por padrão
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'light') {
    toggleSwitch.checked = true;
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    icon.forEach(i => i.classList.remove('hidden'));
  }
}