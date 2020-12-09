function onSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  const controls = event.target.elements;
  const result = {};
  for (const control of controls) {
    if (control.name) {
      result[control.name] = control.value;
    }
  }

  console.log(result);
}

(() => {
  for (const form of document.forms) {
    form?.addEventListener('submit', onSubmit);
  }
})();
