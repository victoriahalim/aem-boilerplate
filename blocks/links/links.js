export default function decorate(block) {
    const headerDiv = block.querySelector(':scope>div>div');
    const header= document.createElement("h2");
    header.innerHTML = `$"{headerDiv.innerHTML}"`;
    headerDiv.replacewith(header);
    const linksDiv = block.querySelector(':scope>div>div>div>div>');
    const links = document.createElement("p")
    links.classList.add("linksstyling");
    linksDiv.replacewith(links);
}