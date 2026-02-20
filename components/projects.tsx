async function getProjects() {
  const res = await fetch("https://api.github.com/users/Bisesh-n/repos", {
  cache: "force-cache",
});
  return res.json()
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.slice(0,6).map((repo:any) => (
          <div key={repo.id} className="p-6 bg-zinc-900 rounded-xl">
            <h3 className="font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-400">{repo.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}