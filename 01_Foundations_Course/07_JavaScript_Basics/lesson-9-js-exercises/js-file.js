const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Hey I\'m red!';
p.style.color = 'red';

container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

container.appendChild(h3);

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.borderStyle = 'solid';
div.style.borderRadius = '1px';
div.style.borderColor = 'black';

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'I\'m in the div!';

div.appendChild(h1);

const p2 = document.createElement('p');
p2.classList.add('p');
p2.textContent = 'ME TOO!';

div.appendChild(p2);

div.classList.add('div');
container.appendChild(div);

const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

