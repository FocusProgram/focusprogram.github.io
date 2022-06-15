!(function () {
    var oldLoadAp = window.onload;
    window.onload = function () {
        oldLoadAp && oldLoadAp();

        new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            autoplay: false,
            loop: 'all',
            order: 'random',
            theme: '#b7daff',
            preload: 'none',
            audio: [
                { name: '海阔天空', artist: 'Beyond', url: '/music/Beyond - 海阔天空.mp3', cover: '/music/Beyond.png' },
                { name: '谁伴我闯荡', artist: 'Beyond', url: '/music/Beyond - 谁伴我闯荡.mp3', cover: '/music/Beyond.png' }
            ]
        });
    }
})();