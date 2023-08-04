function LanguageFilter({ setSelectedLanguage }) {
  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="header">
      <select className="language-dropdown" onChange={handleChange}>
        <option value="English">English</option>
        <option value="Turkish">Turkish</option>
        <option value="German">German</option>
      </select>
    </div>
  );
}

export default LanguageFilter;
