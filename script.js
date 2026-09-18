(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const preview = document.querySelector('#preview');
  const toggle = document.querySelector('#preview-toggle');
  const dialog = document.querySelector('#gameplay-dialog');
  const video = document.querySelector('#full-video');
  let manuallyPaused = false;
  let previewInView = true;
  const loadVideo = element => {
    const source = element?.querySelector('source[data-src]');
    if (source) {
      source.src = source.dataset.src;
      delete source.dataset.src;
      element.load();
    }
  };
  const playPreview = () => {
    if (!preview || manuallyPaused || !previewInView || document.hidden || dialog?.open) return;
    loadVideo(preview);
    preview.play().catch(() => { if (toggle) toggle.textContent = 'Play preview'; });
  };
  if (preview && toggle) {
    toggle.hidden = false;
    const updateLabel = () => {
      document.body.classList.toggle('motion-paused', preview.paused);
      const text = preview.paused ? 'Play preview' : 'Pause preview';
      toggle.textContent = text;
      toggle.setAttribute('aria-label', text + ' of gameplay');
    };
    preview.addEventListener('play', updateLabel);
    preview.addEventListener('pause', updateLabel);
    toggle.addEventListener('click', () => {
      if (preview.paused) { manuallyPaused = false; playPreview(); }
      else { manuallyPaused = true; preview.pause(); }
    });
    manuallyPaused = reduceMotion.matches || Boolean(navigator.connection?.saveData);
    updateLabel();
    new IntersectionObserver(entries => {
      previewInView = entries[0].isIntersecting;
      if (previewInView) playPreview(); else preview.pause();
    }, { threshold: 0.15 }).observe(preview);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) preview.pause(); else playPreview();
    });
    reduceMotion.addEventListener('change', event => {
      if (event.matches) { manuallyPaused = true; preview.pause(); }
    });
  }
  if (dialog && video) {
    const openVideo = event => {
      event?.preventDefault();
      preview?.pause();
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      loadVideo(video);
      video.play().catch(() => {});
    };
    document.querySelectorAll('[data-watch]').forEach(link => link.addEventListener('click', openVideo));
    document.querySelector('#close-video').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
      video.pause();
      document.body.style.overflow = '';
      playPreview();
    });
    document.querySelectorAll('[data-clip]').forEach(button => button.addEventListener('click', () => {
      const clip = button.dataset.clip;
      const src = `assets/gameplay-${clip}.mp4`;
      video.pause();
      video.poster = `assets/gameplay-${clip}.jpg`;
      video.src = src;
      video.load();
      video.play().catch(() => {});
      document.querySelector('#video-download').href = src;
      document.querySelectorAll('[data-clip]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    }));
  }
  const rail = document.querySelector('#chapters');
  const next = document.querySelector('#next');
  const previous = document.querySelector('#previous');
  if (rail && next && previous) {
    next.hidden = previous.hidden = false;
    const update = () => {
      previous.disabled = rail.scrollLeft < 5;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 5;
    };
    const move = direction => {
      const first = rail.querySelector('.chapter');
      const gap = parseFloat(getComputedStyle(rail).gap) || 0;
      const width = first.getBoundingClientRect().width + gap;
      rail.scrollBy({ left: direction * width, behavior: reduceMotion.matches ? 'instant' : 'smooth' });
    };
    next.addEventListener('click', () => move(1));
    previous.addEventListener('click', () => move(-1));
    rail.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();move(event.key === 'ArrowRight' ? 1 : -1);
      }
    });
    rail.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(rail);update();
  }
})();
