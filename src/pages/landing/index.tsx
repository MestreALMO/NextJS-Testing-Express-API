export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3100/");
  const data = await res.json();

  return {
    props: { projects: data },
  };
};

interface interfaceProjects {
  project: string;
}

const Landing = (projects: interfaceProjects) => {
  return (
    <>
      <h1>Hello World</h1>
      {console.log(projects)}
      {/* {projects.map((project) => (
        <h3>project</h3>
      ))} */}
    </>
  );
};

export default Landing;
