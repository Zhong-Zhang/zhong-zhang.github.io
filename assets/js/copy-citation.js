function copyCitation(id) {
  const block = document.querySelector('.citation-content[data-cite-id="' + id + '"]');
  if (!block) return;

  const text = block.innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    showTooltipCopied(id);
  });
}

function showTooltipCopied(id) {
  const btn = document.querySelector('.paper-icon[data-cite-id="' + id + '"]');
  if (!btn) return;

  const original = btn.getAttribute("data-tooltip");
  btn.setAttribute("data-tooltip", "Copied!");

  setTimeout(() => {
    btn.setAttribute("data-tooltip", original);
  }, 1000);
}
