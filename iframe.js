window.addEventListener("message", (event) => {
  if (event.data.cssVariables) {
    Object.entries(event.data.cssVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
});
