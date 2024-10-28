function render(element) {
  // Load library styles from library.style.css
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'library.style.css';
  document.head.appendChild(style);

  // Render content
  const content = `
    <div class="library">
      <h3>My store</h3>
      <p>Welcome to the store.</p>
      <iframe src="./library-iframe.html"></iframe>
      <button onclick="alert('Hello!')">Click me!</button>
    </div>
  `;
  element.innerHTML = content;
};

globalThis.Library = {
  render,
}