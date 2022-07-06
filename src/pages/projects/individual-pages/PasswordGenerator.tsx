import useProject from "hooks/useProject";

const PasswordGenerator = () => {
  const project = useProject();
  if (!project) return null;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt="" />
      <h2>Lorem, ipsum.</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, hic qui consequuntur a
        voluptatibus est rerum placeat voluptas cum error distinctio nihil cumque officiis
        labore quisquam provident repellat fuga! Illo.
      </p>
    </div>
  );
};

export default PasswordGenerator;
