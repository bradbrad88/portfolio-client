import useProject from "hooks/useProject";

const Photography = () => {
  const project = useProject();
  if (!project) return null;
  return (
    <div>
      <h2>Lorem, ipsum.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque non dolor aperiam
        debitis est aliquid assumenda sapiente soluta corporis molestias nostrum commodi iusto
        voluptatem alias voluptatum, ea quis quia accusantium recusandae nobis, libero quaerat
        minima? Saepe quod suscipit dicta a.
      </p>
    </div>
  );
};

export default Photography;
