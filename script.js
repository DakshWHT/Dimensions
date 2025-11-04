$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.nav-links').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.nav-links a').click(function () {
        $('.nav-links').removeClass('active');
        $('.menu-toggle').removeClass('active');
    });

    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });

    $('.logo').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.cta-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#dimensions').offset().top - 70
        }, 1000);
    });

    const dimensionInfo = {
        spatial: {
            title: 'Spatial Dimension',
            content: '<p style="line-height: 1.8; font-size: 1.1rem;"><strong>Welcome to the Spatial Dimension!</strong><br><br>In this realm, you can move through three axes: X (left-right), Y (up-down), and Z (forward-backward). Every object you see occupies space defined by these three coordinates.<br><br><strong>Key Properties:</strong><br>• Volume and surface area<br>• Geometric shapes and structures<br>• Physical movement and navigation<br>• Distance and measurement<br><br><strong>Fun Fact:</strong> A 4D being could see inside a 3D object without opening it, just as we can see inside a 2D square from above!</p>'
        },
        temporal: {
            title: 'Temporal Dimension',
            content: '<p style="line-height: 1.8; font-size: 1.1rem;"><strong>Welcome to the Temporal Dimension!</strong><br><br>Time is the dimension we cannot control, flowing inexorably forward. Unlike spatial dimensions, we can only move in one direction through time.<br><br><strong>Key Properties:</strong><br>• Causality and cause-effect relationships<br>• Entropy and the arrow of time<br>• Memory and prediction<br>• Duration and simultaneity<br><br><strong>Mind-Bending Concept:</strong> Einstein showed that time is relative - it flows differently depending on speed and gravity!</p>'
        },
        quantum: {
            title: 'Quantum Dimension',
            content: '<p style="line-height: 1.8; font-size: 1.1rem;"><strong>Welcome to the Quantum Dimension!</strong><br><br>Here, particles exist in superposition, being everywhere and nowhere until observed. Reality itself becomes probabilistic.<br><br><strong>Quantum Phenomena:</strong><br>• Superposition - multiple states at once<br>• Entanglement - spooky action at a distance<br>• Tunneling - passing through barriers<br>• Wave-particle duality<br><br><strong>Schrödinger\'s Cat:</strong> A thought experiment where a cat is simultaneously alive and dead until observed!</p>'
        },
        consciousness: {
            title: 'Consciousness Dimension',
            content: '<p style="line-height: 1.8; font-size: 1.1rem;"><strong>Welcome to the Consciousness Dimension!</strong><br><br>This is the realm of thought, awareness, and subjective experience. It exists beyond physical space and time.<br><br><strong>Aspects of Consciousness:</strong><br>• Self-awareness and identity<br>• Dreams and imagination<br>• Emotions and feelings<br>• Collective unconscious<br><br><strong>The Hard Problem:</strong> How does physical matter create subjective experience? This remains one of science\'s greatest mysteries!</p>'
        },
        higher: {
            title: 'Higher Dimensions',
            content: '<p style="line-height: 1.8; font-size: 1.1rem;"><strong>Welcome to Higher Dimensions!</strong><br><br>String theory proposes up to 11 dimensions! Most are "compactified" - curled up so small we cannot perceive them.<br><br><strong>Theoretical Dimensions:</strong><br>• 4D: Tesseract (hypercube)<br>• 5D: Probability space<br>• 6D-9D: Calabi-Yau manifolds<br>• 10D-11D: M-theory space<br><br><strong>Visualization:</strong> Imagine a garden hose - from far away it\'s 1D, but up close you see it\'s 2D with a curled-up dimension!</p>'
        },
        parallel: {
            title: 'Parallel Dimension',
            content: '<p style="line-height: 1.8; font-size: 1.1rem;"><strong>Welcome to Parallel Dimensions!</strong><br><br>The Many-Worlds interpretation suggests every quantum decision creates a new universe. Infinite yous exist across infinite realities.<br><br><strong>Types of Parallel Universes:</strong><br>• Level I: Same physics, different initial conditions<br>• Level II: Different physical constants<br>• Level III: Quantum many-worlds<br>• Level IV: Different mathematical structures<br><br><strong>Mind-Blowing:</strong> Right now, in another universe, you made a different choice!</p>'
        }
    };

    $('.explore-btn').click(function (e) {
        e.stopPropagation();
        const dimension = $(this).closest('.dimension-card').data('dimension');
        const info = dimensionInfo[dimension];
        $('#modal-title').text(info.title);
        $('#modal-body').html(info.content);
        $('#dimension-modal').fadeIn(300).css('display', 'flex');
    });

    const universeInfo = {
        alpha: {
            name: 'Universe Alpha - The Mirror World',
            description: 'In this universe, everything is reversed. Matter and antimatter exist in perfect balance. Your mirror self lives here, making opposite choices to yours. The laws of physics are inverted, creating a reality that mirrors our own in fascinating ways.'
        },
        beta: {
            name: 'Universe Beta - The Dream Realm',
            description: 'A universe where consciousness shapes reality directly. Thoughts manifest as physical objects. The boundary between imagination and existence dissolves. Here, dreams become tangible and reality flows like water through infinite possibilities.'
        },
        gamma: {
            name: 'Universe Gamma - The Crystal Cosmos',
            description: 'Everything in this universe is crystalline. Matter organizes itself into perfect geometric structures. Time flows in discrete quantum steps rather than continuously. The entire universe resonates with harmonic frequencies of pure energy.'
        },
        delta: {
            name: 'Universe Delta - The Void Between',
            description: 'The space between universes - a realm of pure potential. Here, the laws of physics are still forming. Quantum fluctuations create temporary bubbles of reality. This is where new universes are born from the foam of possibility.'
        }
    };

    $('.universe').click(function () {
        const universe = $(this).data('universe');
        const info = universeInfo[universe];

        $(this).animate({
            opacity: 0.3
        }, 200).animate({
            opacity: 1
        }, 200);

        $('#modal-title').text(info.name);
        $('#modal-body').html('<p style="line-height: 1.8; font-size: 1.1rem;">' + info.description + '</p>');
        $('#dimension-modal').fadeIn(300).css('display', 'flex');
    });

    $('.close-modal, .modal').click(function (e) {
        if (e.target === this) {
            $('#dimension-modal').fadeOut(300);
        }
    });

    $('#spatial-slider').on('input', function () {
        const value = $(this).val();
        $('#spatial-value').text(value);
        updateDimensionVisual();
    });

    $('#time-slider').on('input', function () {
        const value = $(this).val();
        $('#time-value').text(value);
        updateDimensionVisual();
    });

    $('#quantum-slider').on('input', function () {
        const value = $(this).val();
        $('#quantum-value').text(value);
        updateDimensionVisual();
    });

    let noiseCanvas, noiseCtx, noiseW, noiseH;
    let noiseTime = 0;
    let noiseReq;

    // shared noise params driven by sliders
    let noiseParams = {
        amplitude: 0.5,
        scale: 3.0,
        speed: 0.3,
        hueShift: 0
    };
    
    function ensureNoiseCanvas() {
        if (!noiseCanvas) {
            noiseCanvas = $('<canvas id="noise-canvas"></canvas>');
            $('#dimension-visual').append(noiseCanvas);
            noiseCtx = noiseCanvas[0].getContext('2d');
            resizeNoiseCanvas();
            $(window).on('resize', resizeNoiseCanvas);
            startNoiseAnimation();
        }
    }

    function resizeNoiseCanvas() {
        if (!noiseCanvas) return;
        const rect = $('#dimension-visual')[0].getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        noiseW = Math.max(1, Math.floor(rect.width));
        noiseH = Math.max(1, Math.floor(rect.height));
        noiseCanvas[0].width = noiseW * dpr;
        noiseCanvas[0].height = noiseH * dpr;
        noiseCanvas.css({ width: rect.width + 'px', height: rect.height + 'px' });
        noiseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // simple value-noise (Perlin-ish) implementation
    const noiseGridCache = {};
    function makeGrid(gw, gh) {
        const key = gw + 'x' + gh;
        if (noiseGridCache[key]) return noiseGridCache[key];
        const grid = new Float32Array((gw + 1) * (gh + 1));
        for (let i = 0; i < grid.length; i++) grid[i] = Math.random();
        noiseGridCache[key] = { gw, gh, grid };
        return noiseGridCache[key];
    }

    function smoothstep(t) { return t * t * (3 - 2 * t); }
    function noise2D(x, y, gw, gh) {
        // x,y in grid coordinates (continuous), grid size gw x gh
        const gx = Math.floor(x);
        const gy = Math.floor(y);
        const fx = x - gx;
        const fy = y - gy;
        const g = makeGrid(gw, gh).grid;
        const idx = (ix, iy) => (iy % (gh + 1)) * (gw + 1) + (ix % (gw + 1));
        const v00 = g[idx(gx, gy)];
        const v10 = g[idx(gx + 1, gy)];
        const v01 = g[idx(gx, gy + 1)];
        const v11 = g[idx(gx + 1, gy + 1)];
        const sx = smoothstep(fx);
        const sy = smoothstep(fy);
        const ix0 = v00 + (v10 - v00) * sx;
        const ix1 = v01 + (v11 - v01) * sx;
        return ix0 + (ix1 - ix0) * sy;
    }

    function drawNoise(amplitude = 0.5, scale = 3.0, speed = 0.3, hueShift = 0) {
        if (!noiseCtx || !noiseCanvas) return;
        const img = noiseCtx.createImageData(noiseW, noiseH);
        const gw = Math.max(2, Math.floor(noiseW / (50 / scale)));
        const gh = Math.max(2, Math.floor(noiseH / (50 / scale)));
        const t = noiseTime;
        const baseHue = hueShift % 360;

        // sample at a reduced step for perf
        const step = 2;
        for (let y = 0; y < noiseH; y += step) {
            for (let x = 0; x < noiseW; x += step) {
                const nx = (x / noiseW) * gw;
                const ny = (y / noiseH) * gh;
                // combine two octaves for richer look
                const v1 = noise2D(nx + t * speed, ny + t * speed, gw, gh);
                const v2 = 0.5 * noise2D(nx * 2 + t * speed * 1.7, ny * 2 + t * speed * 1.7, gw * 2, gh * 2);
                const v = Math.max(0, Math.min(1, (v1 + v2) * 0.75 * amplitude + 0.25 * amplitude));
                const alpha = Math.floor(180 * v); // semi-transparent
                // color via HSL -> RGBA (approx)
                const hue = (baseHue + v * 40) % 360;
                // convert HSL to RGB (fast approximation)
                const c = 1; // we use saturation=1 lightness ~ 0.5
                const h = hue / 60;
                const xcol = c * (1 - Math.abs((h % 2) - 1));
                let r1 = 0, g1 = 0, b1 = 0;
                if (h >= 0 && h < 1) { r1 = c; g1 = xcol; b1 = 0; }
                else if (h < 2) { r1 = xcol; g1 = c; b1 = 0; }
                else if (h < 3) { r1 = 0; g1 = c; b1 = xcol; }
                else if (h < 4) { r1 = 0; g1 = xcol; b1 = c; }
                else if (h < 5) { r1 = xcol; g1 = 0; b1 = c; }
                else { r1 = c; g1 = 0; b1 = xcol; }
                // lightness approx
                const light = 0.55;
                const r = Math.floor((r1 * light + (1 - light) * 0.15) * 255);
                const g = Math.floor((g1 * light + (1 - light) * 0.15) * 255);
                const b = Math.floor((b1 * light + (1 - light) * 0.15) * 255);

                // write a block of step x step pixels
                for (let yy = 0; yy < step; yy++) {
                    for (let xx = 0; xx < step; xx++) {
                        const px = x + xx;
                        const py = y + yy;
                        if (px >= noiseW || py >= noiseH) continue;
                        const idx = (py * noiseW + px) * 4;
                        img.data[idx] = r;
                        img.data[idx + 1] = g;
                        img.data[idx + 2] = b;
                        img.data[idx + 3] = alpha;
                    }
                }
            }
        }
        noiseCtx.clearRect(0, 0, noiseW, noiseH);
        noiseCtx.putImageData(img, 0, 0);
    }

    function startNoiseAnimation() {
        if (noiseReq) cancelAnimationFrame(noiseReq);
        function frame() {
            // advance time (frame-based)
            noiseTime += 0.016 * (0.8 + noiseParams.speed * 0.8); // speed influences time progression subtly
            // use the shared noiseParams object
            drawNoise(noiseParams.amplitude, noiseParams.scale, noiseParams.speed, noiseParams.hueShift);
            noiseReq = requestAnimationFrame(frame);
        }
        noiseReq = requestAnimationFrame(frame);
    }
    
    // ensure canvas is present when lab section is initialized and sync initial params
    ensureNoiseCanvas();
    updateDimensionVisual();
    // --- END: Perlin-like noise canvas for #dimension-visual ---

    function updateDimensionVisual() {
        const spatial = parseFloat($('#spatial-slider').val());
        const time = parseFloat($('#time-slider').val());
        const quantum = parseFloat($('#quantum-slider').val());

        const rotation = (spatial / 100) * 360;
        const scale = 0.5 + (time / 100) * 1;
        const hue = (quantum / 100) * 360;

        $('#dimension-visual').css({
            'transform': `rotate(${rotation}deg) scale(${scale})`,
            'filter': `hue-rotate(${hue}deg)`,
            'border-radius': `${50 - (quantum / 2)}%`
        });

        // map sliders to noise parameters:
        // - quantum -> amplitude (+small effect on scale)
        // - spatial -> speed and noise scale (finer/coarser detail)
        // - time -> hueShift for colored noise
        noiseParams.amplitude = (quantum / 100);
        noiseParams.speed = (spatial / 100) * 1.6;
        noiseParams.scale = 2.0 + (spatial / 100) * 4.0 + (quantum / 100) * 1.5; // make scale responsive
        noiseParams.hueShift = (time / 100) * 360;

        // update overlay text (live stats)
        $('#visual-spatial').text(`Spatial: ${Math.round(spatial)}%`);
        $('#visual-time').text(`Time: ${Math.round(time)}%`);
        $('#visual-quantum').text(`Quantum: ${Math.round(quantum)}%`);

        // small visual pulse for feedback
        $('.visual-overlay').stop(true,true).css('opacity', 0.7).animate({opacity: 0.98}, 250);

        // ensure canvas exists and draw once for immediate feedback
        ensureNoiseCanvas();
        noiseTime += 0.002;
        drawNoise(noiseParams.amplitude, noiseParams.scale, noiseParams.speed, noiseParams.hueShift);
    }

    $('#reset-lab').click(function () {
        $('#spatial-slider, #time-slider, #quantum-slider').val(50);
        $('#spatial-value, #time-value, #quantum-value').text(50);
        updateDimensionVisual();
        $(this).text('Reset Complete!');
        setTimeout(() => {
            $(this).text('Reset Dimensions');
        }, 1000);
    });

    let portalActive = false;
    $('#portal-activate, .portal').click(function () {
        if (portalActive) return;
        portalActive = true;

        $('.portal').css({
            'transform': 'scale(1.2) rotate(360deg)',
            'transition': 'all 1.5s ease',
            'box-shadow': '0 0 200px rgba(102, 126, 234, 1)'
        });

        $('#portal-activate').text('Portal Activating...');

        setTimeout(() => {
            $('.portal').css({
                'transform': 'scale(1) rotate(0deg)',
                'box-shadow': '0 0 100px rgba(102, 126, 234, 0.6)'
            });

            $('#modal-title').text('Portal Activated!');
            $('#modal-body').html('<p style="line-height: 1.8; font-size: 1.1rem;">You have successfully activated the dimensional portal! The gateway is now open, connecting our reality to infinite parallel dimensions.<br><br><strong>Portal Status:</strong> ONLINE<br><strong>Stability:</strong> 99.7%<br><strong>Energy Output:</strong> 1.21 Gigawatts<br><strong>Destination:</strong> Unknown Dimension<br><br>Step through at your own risk. The journey between dimensions is unpredictable, and you may emerge as a completely different version of yourself!</p>');
            $('#dimension-modal').fadeIn(300).css('display', 'flex');

            $('#portal-activate').text('Portal Ready');
            portalActive = false;
        }, 1500);
    });

    $('#calculate-btn').click(function () {
        const mass = parseFloat($('#mass-input').val()) || 70;
        const dimension = parseInt($('#dimension-select').val());
        const distance = parseFloat($('#distance-input').val()) || 1;

        const energyPerDimension = mass * dimension * 9 * Math.pow(10, 16); // E=mc²-ish
        const totalEnergy = energyPerDimension * distance;
        const timeRequired = distance * 365.25 * (4 - dimension) * 24;
        const risk = Math.min(95, (dimension - 3) * 15 + distance * 5);

        const result = `
                    <h3 style="color: #667eea; margin-bottom: 1rem;">Calculation Results</h3>
                    <p style="line-height: 1.8;"><strong>Energy Required:</strong> ${totalEnergy.toExponential(2)} Joules</p>
                    <p style="line-height: 1.8;"><strong>Equivalent Power:</strong> ${(totalEnergy / 1000000000).toFixed(2)} Gigawatts</p>
                    <p style="line-height: 1.8;"><strong>Travel Time:</strong> ${Math.abs(timeRequired).toFixed(2)} hours</p>
                    <p style="line-height: 1.8;"><strong>Dimension Shift:</strong> ${Math.abs(3 - dimension)} dimensions</p>
                    <p style="line-height: 1.8;"><strong>Risk Level:</strong> ${risk.toFixed(1)}%</p>
                    <p style="margin-top: 1rem; color: ${risk > 50 ? '#ff6b6b' : '#51cf66'};">
                        ${risk > 50 ? '⚠️ High Risk: Extreme caution advised!' : '✅ Acceptable Risk: Journey is feasible'}
                    </p>
                `;

        $('#calc-result').html(result).slideDown(400);
    });

    $('#find-coordinates').click(function () {
        const x = (Math.random() * 2000000 - 1000000).toFixed(6);
        const y = (Math.random() * 2000000 - 1000000).toFixed(6);
        const z = (Math.random() * 2000000 - 1000000).toFixed(6);
        const t = Date.now();
        const quantum = Math.random().toFixed(8);

        const result = `
                    <h3 style="color: #667eea; margin-bottom: 1rem;">Your Dimensional Coordinates</h3>
                    <p style="line-height: 1.8;"><strong>Spatial X:</strong> ${x} Mpc</p>
                    <p style="line-height: 1.8;"><strong>Spatial Y:</strong> ${y} Mpc</p>
                    <p style="line-height: 1.8;"><strong>Spatial Z:</strong> ${z} Mpc</p>
                    <p style="line-height: 1.8;"><strong>Temporal:</strong> ${t} ms (Unix Time)</p>
                    <p style="line-height: 1.8;"><strong>Quantum State:</strong> |ψ⟩ = ${quantum}</p>
                    <p style="line-height: 1.8;"><strong>Universe ID:</strong> ${Math.floor(Math.random() * 10000000)}</p>
                    <p style="margin-top: 1rem; color: #51cf66;">
                        ✅ Coordinates locked! You exist at this unique point in the multiverse.
                    </p>
                `;

        $('#calc-result').html(result).slideDown(400);
    });

    const timelineInfo = {
        beginning: 'The Big Bang created all dimensions simultaneously in a fraction of a second. In that moment, time itself was born, space expanded exponentially, and the fundamental forces separated from their unified state.',
        unfold: 'As the universe cooled, dimensions crystallized into their current forms. The three spatial dimensions we know emerged distinct and separate, while time became the fourth dimension guiding causality.',
        present: 'We live in a 3+1 dimensional spacetime. Modern physics suggests additional dimensions exist but are compactified at the Planck scale (10⁻³⁵ meters), far too small to observe directly.',
        future: 'Future technology might allow us to detect or even access higher dimensions. Imagine navigating through 4D space, seeing all moments of time simultaneously, or traveling to parallel universes!'
    };

    $('.timeline-dot').click(function () {
        const era = $(this).data('era');
        $(this).css({
            'transform': 'translateX(-50%) scale(2)',
            'box-shadow': '0 0 40px rgba(102, 126, 234, 1)'
        });

        setTimeout(() => {
            $(this).css({
                'transform': 'translateX(-50%) scale(1)',
                'box-shadow': '0 0 20px rgba(102, 126, 234, 0.8)'
            });
        }, 300);

        $('#modal-title').text('Timeline Event');
        $('#modal-body').html('<p style="line-height: 1.8; font-size: 1.1rem;">' + timelineInfo[era] + '</p>');
        $('#dimension-modal').fadeIn(300).css('display', 'flex');
    });

    $('#social-twitter').click(function (e) {
        e.preventDefault();
        alert('🐦 Follow us across dimensions! Tweet your interdimensional discoveries using #DimensionTravel');
    });

    $('#social-github').click(function (e) {
        e.preventDefault();
        alert('💻 Fork reality itself! Our dimensional travel code is open-source (in theory).');
    });

    $('#social-linkedin').click(function (e) {
        e.preventDefault();
        alert('💼 Connect professionally across the multiverse! Your parallel self just sent you a connection request.');
    });

    $(window).scroll(function () {
        $('.dimension-card').each(function () {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

    $('.dimension-card').css({
        'opacity': '0',
        'transform': 'translateY(50px)',
        'transition': 'all 0.6s ease'
    });

    $(window).scroll(function () {
        $('.timeline-event').each(function (index) {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 100) {
                setTimeout(() => {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
                }, index * 200);
            }
        });
    });

    $('.timeline-event').css({
        'opacity': '0',
        'transform': 'translateX(-50px)',
        'transition': 'all 0.6s ease'
    });

    $('.timeline-event:nth-child(odd)').css('transform', 'translateX(50px)');

    let lastParticleTime = 0;
    $(document).mousemove(function (e) {
        const now = Date.now();
        if (now - lastParticleTime > 50) {
            lastParticleTime = now;
            var particle = $('<div class="particle"></div>');
            $('body').append(particle);

            particle.css({
                'position': 'fixed',
                'width': '5px',
                'height': '5px',
                'background': 'rgba(102, 126, 234, 0.6)',
                'border-radius': '50%',
                'pointer-events': 'none',
                'left': e.pageX + 'px',
                'top': e.pageY + 'px',
                'animation': 'particleFade 1s ease-out forwards',
                'z-index': '9999'
            });

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    });

    $('<style>')
        .prop('type', 'text/css')
        .html(`
                    @keyframes particleFade {
                        to {
                            opacity: 0;
                            transform: translateY(-50px) scale(0);
                        }
                    }
                `)
        .appendTo('head');
});