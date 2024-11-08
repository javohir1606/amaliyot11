const data = [
  {
    email: "darko@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/darkodjalevski",
  },
  {
    email: "ana@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/acatarinalsantos",
  },
  {
    email: "christophe@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/christophehermann",
  },
  {
    email: "janette@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/janette-b-252686140",
  },
  {
    email: "giovanni@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/leporigiovanni",
  },
  {
    email: "rui@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/ruifcosta",
  },
  {
    email: "may@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/may-golden-09345815b",
  },
  {
    email: "matt@hunter.io",
    linkedInURL: "https://www.linkedin.com/in/matttharp",
  },
];
const elTBody = document.querySelector("tbody");

data.map((item) => {
  elTBody.innerHTML += `
      <tr>
        <td>${item.email}</td>
        <td>
        <a href="#"> ${item.linkedInURL}</a>
       </td>
      </tr>
    `;

  // outputDiv.appendChild(emailInfo);
});
