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

const SVG_NS = "http://www.w3.org/2000/svg";
// Turns a commit message into a clickable link
function link(subject, url) {
  return {
    subject,
    renderMessage: (commit) => {
      const a = document.createElementNS(SVG_NS, "a");
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
      a.setAttribute("class", "text-link");
      a.setAttribute("fill", commit.style.message.color);

      const text = document.createElementNS(SVG_NS, "text");
      text.setAttribute("dominant-baseline", "central");
      text.setAttribute("y", commit.style.dot.size);
      text.setAttribute("style", "font: " + commit.style.message.font);
      text.textContent = subject;

      a.appendChild(text);
      return a;
    },
  };
}

const main = gitgraph.branch("main");
main.commit(""); // initial commit

const drums = main.branch("drums");
drums.commit(link("Drummer @ Mastermind, 2019", "https://www.youtube.com/watch?v=1cUo0UlqW-k"));
drums.commit("Drum Teacher @ Hayal Sahnesi, 2020");

main.commit(link("SWE Intern @ Doğuş Teknoloji, 2023", "https://www.d-teknoloji.com.tr"));
main.commit(link("SWE Intern @ Intertech, 2024", "https://www.intertech.com.tr"));
main.commit(link("Contributor @ Donetick, 2026", "https://donetick.com"));
