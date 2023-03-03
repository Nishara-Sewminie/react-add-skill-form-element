import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddSkillForm(props) {
  const [skill, setSkill] = useState('');

  function handleChange(e) {
    setSkill(e.target.value);
  }

  function handleSubmit(e) {
    if (skill !== '') {
      props.handleSubmit(skill);
      setSkill('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new skill"
        onChange={handleChange}
        value={skill}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function SkillList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addSkill(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddSkillForm handleSubmit={addSkill} />
      <SkillList data={contacts} />
    </div>
  );
}
const contacts = ['HTML', 'Python', 'JavaScript'];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);
