export const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-pink px-36 py-14">
      <div className="flex justify-center items-center gap-8">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=vishalqubits&"
            alt="github_stats"
            className="h-48"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=vishalqubits&show_icons=true&locale=en&layout=compact"
            alt="github_stats"
            className="h-48"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=vishalqubits&show_icons=true&locale=en"
            alt="github_stats"
            className="h-48"
          />
        </div>
      </div>
    </div>
  );
};
