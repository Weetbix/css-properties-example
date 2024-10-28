function render(element) {
  // Load library styles from library.style.css
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "library.style.css";
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

  sendCssVariablesToFrame();
}

function sendCssVariablesToFrame() {
  const iframe = document.querySelector("iframe");

  iframe.onload = () => {
    // Create map of css variables
    const cssVariables = [
      "--lib-primary",
      "--lib-text",
      "--lib-font-family",
    ].reduce((acc, key) => {
      const value = getComputedStyle(iframe).getPropertyValue(key);
      acc[key] = value;
      return acc;
    }, {});

    iframe.contentWindow.postMessage({ cssVariables }, "*");
  };
}

globalThis.Library = {
  render,
};
