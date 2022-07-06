import useProject from "hooks/useProject";

const Quizzles = () => {
  const project = useProject();
  if (!project) return null;
  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt="" />
      <h2>Lorem, ipsum.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, corporis. Est
        voluptatibus repellendus necessitatibus suscipit ipsa deserunt voluptas ad eligendi.
        Adipisci doloribus ducimus laborum voluptates est expedita, cumque esse obcaecati?
      </p>
    </div>
  );
};

export default Quizzles;
