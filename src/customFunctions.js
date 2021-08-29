function getFormData(form) {
  const elements = form.elements;
  let honeypot;

  const fields = Object.keys(elements)
    .filter(function (k) {
      if (elements[k].name === "gotcha") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    })
    .map(function (k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
      return "error, investigate"
    })
    .filter(function (item, pos, self) {
      return self.indexOf(item) === pos && item;
    });

  const formData = {};
  fields.forEach(function (name) {
    const element = elements[name];

    // singular form elements just have one value
    formData[name] = element.value;

    // when our element has multiple items, get their values
    if (element.length) {
      const data = [];
      for (let i = 0; i < element.length; i++) {
        const item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(", ");
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  return { data: formData, honeypot: honeypot };
}

export function handleFormSubmit(event, setStatus) {
  event.preventDefault();
  setStatus("sending");
  const form = event.target;
  const formData = getFormData(form);
  const { data } = formData;

  // If a honeypot field is filled, assume it was done so by a spam bot.
  if (formData.honeypot) {
    setStatus("initial");
    return false;
  }

  // disableAllButtons(form);
  const url = form.action;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      form.reset();
      setStatus("sent");
    }
  };
  // url encode form data for sending as post data
  const encoded = Object.keys(data)
    .map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    })
    .join("&");
  xhr.send(encoded);
}
