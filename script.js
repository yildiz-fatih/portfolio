const { createGitgraph, templateExtend, TemplateName } = GitgraphJS

const TEXT = "#D6CBB6"
const ACCENT = "#F35C51"
const BG = "#1E1F20"
const FONT = '"Schibsted Grotesk", sans-serif'

const graphContainer = document.getElementById("graph-container")

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
})

const gitgraph = createGitgraph(graphContainer, { template, responsive: true })

const main = gitgraph.branch("main")
main.commit("") // initial commit

const drums = main.branch("drums")
drums.commit("Drummer @ Mastermind, 2019")
drums.commit("Drum Teacher @ Hayal Sahnesi, 2020")

main.commit("SWE Intern @ Doğuş Teknoloji, 2023")
main.commit("SWE Intern @ Intertech, 2024")
main.commit("Contributor @ Donetick, 2026")
