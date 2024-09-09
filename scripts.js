const newDiv = iframeDocument.createElement('div');
newDiv.textContent = 'Новый блок в iframe';
iframeDocument.body.appendChild(newDiv);

const blockToRemove = iframeDocument.getElementById('blockId');
if (blockToRemove) {
    blockToRemove.remove();
}
