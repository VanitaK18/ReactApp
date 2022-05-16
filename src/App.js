import './App.css';

function App() {
  const validate = (formState) => {
    let errors = {};
    const { ais_email, telephone, house_number, room } = formState;
    if (
      !/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(
        ais_email
      ) &&
      ais_email
    ) {
      errors.ais_email = "Incorrect field format";
    } else errors.ais_email = null;
    if (!/^[0-9]{10}$/.test(telephone) && telephone) {
      errors.telephone = "Incorrect field format";
    } else errors.telephone = null;
    if (
      (/[^-/0-9a-zA-Z]/.test(house_number) ||
        /.*--.*/.test(house_number) ||
        /.*\/\/.*/.test(house_number)) &&
      house_number
    ) {
      errors.house_number = "Incorrect field format";
    } else errors.house_number = null;
    if ((/[^/0-9 ]/.test(room) || /.*\/\/.*/.test(room)) && room) {
      errors.room = "Incorrect field format";
    } else errors.room = null;
    [
      "moo",
      "village",
      "building",
      "soi",
      "street",
      "sub_district",
      "city",
      "street",
    ].forEach((item) => validateAlphaNum(item, errors, formState));
    [
      "floor_number",
      "postcode",
      "branch_code",
      "tax_number",
      "identification_number",
    ].forEach((item) => validateNumeric(item, errors, formState));
    ["lastname", "firstname", "juristicname"].forEach((item) =>
      validateAlpha(item, errors, formState)
    );
    return errors;
  };
  let test = "Test";
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {test} React 
        </a>
      </header>
    </div>
  );
}

export default App;
