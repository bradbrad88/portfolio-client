interface List {
  label: string;
  details: string;
  link: boolean;
}

interface Proptypes {
  list: List[];
}

const ProjectDetails = ({ list }: Proptypes) => {
  const renderList = () => {
    return list.map(li => {
      const label = <p>{li.label}</p>;
      const details = li.link ? <a href={li.details}>{li.details}</a> : <p>{li.details}</p>;
      return (
        <>
          {label}
          {details}
        </>
      );
    });
  };
  return (
    <section>
      <h2>Project Details</h2>
      {renderList()}
    </section>
  );
};

export default ProjectDetails;
