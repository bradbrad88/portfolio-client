import H2 from "components/elements/H2";
import Section from "components/elements/Section";
import useFetch, { Req } from "hooks/useFetch";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

interface Repo {
  name: string;
  html_url: string;
  updated_at: string;
  pushed_at: string;
}

const DAYS = 60;

const Repos = () => {
  const { getRequest, working } = useFetch();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const req: Req = {
        baseURL: "https://api.github.com/",
        url: "users/bradbrad88/repos",
        params: {
          type: "all",
          sort: "pushed",
        },
      };
      const duration = 1000 * 60 * 60 * 24 * DAYS;
      const threshold = new Date(Date.now() - duration);
      const data = (await getRequest<Repo[]>(req)) || [];
      const repos = data
        .filter(repo => {
          const date = new Date(repo.updated_at);
          return date > threshold;
        })
        .map(repo => ({
          name: repo.name,
          updated_at: repo.updated_at,
          html_url: repo.html_url,
          pushed_at: repo.pushed_at,
        }));
      setRepos(repos);
    };
    getData();
  }, []);

  const renderRepos = () => {
    return repos.map(repo => {
      const date = new Date(repo.pushed_at);
      const days = Math.floor((new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
      return (
        <article key={repo.name} className="text-lg">
          <a className="text-green underline" href={repo.html_url} target={"_blank"}>
            {repo.name}
          </a>
          :{"\t"}last pushed{" "}
          {days === 0 ? "today" : days === 1 ? days + " day ago" : days + " days ago"}
        </article>
      );
    });
  };

  return (
    <Section>
      <H2>Github Repos</H2>
      <p>Github repositories that I've pushed to in the last {DAYS} days:</p>
      {renderRepos()}
      {working && (
        <PropagateLoader
          size={18}
          color={"#fff5"}
          cssOverride={{ display: "block", height: "20px", textAlign: "center" }}
        />
      )}
    </Section>
  );
};

export default Repos;
