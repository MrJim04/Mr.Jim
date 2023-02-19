var granimInstance = new Granim({
    element: '#mountain',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: '../static/image/mountain.jpg',
        blendingMode: 'screen'
    },
    states : {
        "default-state": {
            gradients: [
                ['#d6e2e8', '#afd8f2'],
                ['#91c1d8', '#75b7d0'],
                ['#0070ac', '#263f60'],
                ['#5289b5', '#3982b0']
            ],
            transitionSpeed: 7000
        }
    }
});