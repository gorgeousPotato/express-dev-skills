const skills = [
  {
    id: 232300,
    name: "JavaScript",
    description:
      "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 232301,
    name: "HTML",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 232302,
    name: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML ",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 232303,
    name: "Debugging",
    description:
      "Debugging is the process of finding and fixing errors or bugs in the source code of any software. ",
    link: "https://en.wikipedia.org/wiki/Debugging",
  },
  {
    id: 232304,
    name: "Problem-solving",
    description:
      "Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.",
    link: "https://en.wikipedia.org/wiki/Problem_solving",
  },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  return skill;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}
