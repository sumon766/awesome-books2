const navigation = () => {
  const header = document.getElementById('menu');
  const btns = header.getElementsByClassName('btn');

  for (let i = 0; i < btns.length; i += 1) {
    btns[i].addEventListener('click', () => {
      const current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      btns[i].className += ' active';
    });
  }
};

export default navigation;