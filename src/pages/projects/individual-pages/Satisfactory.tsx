import mapgif from "assets/MapCapture.gif";
import projects from "data/projects";

const Satisfactory = () => {
  const data = projects.find(project => project.id === "satisfactory")!;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} alt="" />
      <h2>Lorem, ipsum dolor.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempore voluptatum,
        consectetur eum laudantium veritatis porro hic pariatur, quasi praesentium inventore
        blanditiis commodi delectus amet cum impedit recusandae aut id atque voluptate.
        Officiis, incidunt consequuntur. Illum corrupti accusamus voluptate, quisquam vel
        pariatur sed aliquid vero! Facere quibusdam eaque, ipsam illum quasi minus doloremque
        ducimus blanditiis, sed perspiciatis autem? Quo, sint sit placeat non dignissimos
        quidem?
      </p>
      <h2>Lorem, ipsum dolor.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, velit dolorem eum
        perspiciatis nemo dolor alias, magni nam molestias quos sapiente asperiores voluptate,
        aliquam ipsam veritatis facilis voluptatum voluptates ex iusto provident iste libero
        dicta esse. Aspernatur natus architecto hic dolores debitis culpa eaque dicta. Qui modi
        eum dolor aspernatur!
      </p>
      <img src={mapgif} alt="" />
    </div>
  );
};

export default Satisfactory;
