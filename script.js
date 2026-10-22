const { createGitgraph, templateExtend, TemplateName } = GitgraphJS;

const styles = getComputedStyle(document.documentElement);

const TEXT = styles.getPropertyValue("--text").trim();
const ACCENT = styles.getPropertyValue("--accent").trim();
const BG = styles.getPropertyValue("--bg").trim();
const FONT = styles.getPropertyValue("--font").trim();

const graphContainer = document.getElementById("graph-container");

const template = templateExtend(TemplateName.Metro, {
  branch: { lineWidth: 3, spacing: 28, label: { display: false } },
  colors: [TEXT, ACCENT],
  commit: {
    spacing: 46,
    dot: { size: 10, strokeWidth: 2, strokeColor: BG },
    message: {
      displayAuthor: false,
      displayHash: false,
      font: "normal 14px " + FONT,
    },
  },
});

const gitgraph = createGitgraph(graphContainer, { template, responsive: true });

const main = gitgraph.branch("main");
main.commit(""); // initial commit

const drums = main.branch("drums");
drums.commit("Drummer @ Mastermind, 2019");
drums.commit("Drum Teacher @ Hayal Sahnesi, 2020");

main.commit("SWE Intern @ Doğuş Teknoloji, 2023");
main.commit("SWE Intern @ Intertech, 2024");
main.commit("Contributor @ Donetick, 2026");
