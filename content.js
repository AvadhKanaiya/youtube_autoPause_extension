document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        const video = document.querySelector('video');
        if (video) {
            video.pause();
        }
    }
});
