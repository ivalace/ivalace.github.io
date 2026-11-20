(() => {
    const filters = document.querySelector('.pixel-art-filters');
    const gallery = document.querySelector('#pixel-art-gallery');
    const status = document.querySelector('.pixel-art-filter-status');
    if (!filters || !gallery || !status) return;

    const buttons = [...filters.querySelectorAll('button[data-filter]')];
    const pieces = [...gallery.querySelectorAll('.pixel-art-piece')];

    for (const button of buttons) {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            let visibleCount = 0;

            for (const piece of pieces) {
                const tags = (piece.dataset.tags || '').split(/\s+/);
                piece.hidden = filter !== 'all' && !tags.includes(filter);
                if (!piece.hidden) visibleCount += 1;
            }

            for (const option of buttons) {
                option.setAttribute('aria-pressed', String(option === button));
            }

            status.textContent = `${visibleCount} ${visibleCount === 1 ? 'artwork' : 'artworks'} shown: ${button.textContent.trim()}.`;
        });
    }

    // Without JavaScript, all artwork remains visible and controls stay hidden.
    filters.hidden = false;
})();
