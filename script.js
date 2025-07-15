// ===========================================
// 和モダンサイト - 超ダイナミック版
// ===========================================

console.log('🎬 Ultimate animations loading...');

// GSAP基本設定
gsap.registerPlugin(ScrollTrigger);

// ===========================================
// 高級感のあるローディング画面
// ===========================================
window.addEventListener('load', () => {
    console.log('✅ Page Loaded');
    
    // カスタムローディング画面
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader__bg">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070" alt="雲海">
            <div class="loader__overlay"></div>
        </div>
        <div class="loader__content">
            <div class="loader__zen">禅</div>
            <div class="loader__line"></div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // ローディング完了後
    setTimeout(() => {
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => loader.remove()
        });
        
        // ヒーロー登場アニメーション
        startHeroAnimation();
    }, 2000);
});

// ===========================================
// ヒーローの壮大な登場
// ===========================================
function startHeroAnimation() {
    const tl = gsap.timeline();
    
    // 初期状態
    gsap.set(['.hero__title-sub', '.hero__title-main', '.hero__desc', '.hero__cta'], {
        opacity: 0,
        y: 100,
        rotateX: 90
    });
    
    // 劇的な登場
    tl.to('.hero__title-sub', {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.5,
        ease: 'power4.out'
    })
    .to('.hero__title-main', {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 2,
        ease: 'elastic.out(1, 0.5)'
    }, '-=1')
    .to('.hero__desc', {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.5,
        ease: 'power3.out'
    }, '-=1.5')
    .to('.hero__cta', {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.5,
        ease: 'back.out(2)'
    }, '-=1');
    
    // 背景動画のシネマチック効果
    gsap.to('.hero__video-bg', {
        scale: 1.1,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true
    });
    
    console.log('🎭 Epic hero animation started');
}

// ===========================================
// 魔法のようなセクションタイトル
// ===========================================
gsap.utils.toArray('.section__title').forEach(title => {
    const titleJa = title.querySelector('.section__title-ja');
    const titleEn = title.querySelector('.section__title-en');
    
    if (titleJa) {
        // 文字を3D空間に配置
        const text = titleJa.textContent;
        const chars = text.split('');
        titleJa.innerHTML = chars.map((char, i) => 
            `<span class="char" style="display:inline-block; transform-origin: 50% 50% -50px;">${char}</span>`
        ).join('');
        
        // 3D回転アニメーション
        gsap.from(titleJa.querySelectorAll('.char'), {
            opacity: 0,
            y: 100,
            rotateX: -90,
            rotateY: 180,
            scale: 0.5,
            stagger: {
                each: 0.03,
                from: 'center'
            },
            duration: 1.2,
            ease: 'back.out(1.7)',
            transformOrigin: '50% 50% -50px',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                onStart: () => {
                    console.log(`🌟 Magic title: ${text}`);
                    // パーティクル効果
                    createParticles(title);
                }
            }
        });
    }
    
    if (titleEn) {
        gsap.from(titleEn, {
            opacity: 0,
            letterSpacing: '2em',
            scaleX: 0.3,
            duration: 1.5,
            delay: 0.5,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            }
        });
    }
});

// ===========================================
// パーティクル効果
// ===========================================
function createParticles(element) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #A8C97F;
            border-radius: 50%;
            pointer-events: none;
            z-index: 100;
        `;
        
        const rect = element.getBoundingClientRect();
        particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(particle);
        
        gsap.to(particle, {
            y: -100,
            x: (Math.random() - 0.5) * 200,
            opacity: 0,
            scale: 0,
            duration: 2,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

// ===========================================
// サービスカードの壮大な登場
// ===========================================
gsap.utils.toArray('.service-card').forEach((card, index) => {
    // 初期状態
    gsap.set(card, {
        opacity: 0,
        y: 150,
        rotateY: 45,
        scale: 0.8
    });
    
    // 登場アニメーション
    gsap.to(card, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.5,
        delay: index * 0.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            onStart: () => {
                console.log(`🎯 Service card ${index + 1} epic entrance`);
                // 数字の劇的登場
                animateCardNumber(card);
            }
        }
    });
    
    // 高級感のあるホバー
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -20,
            scale: 1.05,
            rotateY: 5,
            rotateX: 5,
            duration: 0.6,
            ease: 'power3.out'
        });
        
        // 光る効果
        gsap.to(card, {
            boxShadow: '0 25px 50px rgba(168, 201, 127, 0.3)',
            duration: 0.6
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            boxShadow: '0 10px 30px rgba(45, 80, 22, 0.1)',
            duration: 0.6,
            ease: 'power3.out'
        });
    });
});

// ===========================================
// 数字のドラマチック登場
// ===========================================
function animateCardNumber(card) {
    const number = card.querySelector('.service-card__number');
    if (number) {
        gsap.from(number, {
            scale: 0,
            rotation: 720,
            duration: 2,
            ease: 'elastic.out(1, 0.3)',
            delay: 0.5
        });
        
        // 数字の周りに光る効果
        gsap.to(number, {
            textShadow: '0 0 20px rgba(168, 201, 127, 0.8)',
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
        });
    }
}

// ===========================================
// 実績カードの映画的登場
// ===========================================
gsap.utils.toArray('.work-item').forEach((item, index) => {
    const image = item.querySelector('.work-item__image img');
    const content = item.querySelector('.work-item__content');
    
    // 初期状態
    gsap.set(item, { opacity: 0, scale: 0.5, rotateY: 90 });
    gsap.set(image, { scale: 1.5, rotation: 10 });
    gsap.set(content, { opacity: 0, y: 50 });
    
    // 壮大なタイムライン
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            onStart: () => {
                console.log(`💎 Work item ${index + 1} cinematic entrance`);
                createWorkItemEffect(item);
            }
        }
    });
    
    tl.to(item, {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.5,
        ease: 'power4.out'
    })
    .to(image, {
        scale: 1,
        rotation: 0,
        duration: 2,
        ease: 'power3.out'
    }, '-=1.5')
    .to(content, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=1');
});

// ===========================================
// 実績カードの特殊効果
// ===========================================
function createWorkItemEffect(item) {
    // 光る枠線効果
    const glowBorder = document.createElement('div');
    glowBorder.style.cssText = `
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #4CAF50, #A8C97F, #4CAF50);
        border-radius: 22px;
        z-index: -1;
        opacity: 0;
    `;
    
    item.style.position = 'relative';
    item.appendChild(glowBorder);
    
    gsap.to(glowBorder, {
        opacity: 0.7,
        duration: 0.5,
        delay: 1
    });
    
    setTimeout(() => {
        gsap.to(glowBorder, {
            opacity: 0,
            duration: 1,
            onComplete: () => glowBorder.remove()
        });
    }, 3000);
}

// ===========================================
// 超滑らかパララックス
// ===========================================
// ヒーロー背景の立体的な動き
gsap.to('.hero__video-bg', {
    yPercent: 40,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
    }
});

// アバウト背景の逆パララックス
gsap.to('.about__bg img', {
    yPercent: -30,
    scale: 1.2,
    ease: 'none',
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
    }
});

// ===========================================
// 高級感のあるヘッダー
// ===========================================
let lastScrollY = 0;
ScrollTrigger.create({
    start: 'top -100',
    end: 99999,
    onUpdate: self => {
        const header = document.querySelector('.header');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
            // 下スクロール時
            gsap.to(header, {
                y: -100,
                duration: 0.3,
                ease: 'power2.out'
            });
        } else {
            // 上スクロール時
            gsap.to(header, {
                y: 0,
                background: 'rgba(250, 250, 250, 0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(26, 26, 26, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        
        lastScrollY = currentScrollY;
    }
});

// ===========================================
// コンタクトセクションの特別演出
// ===========================================
gsap.from('.contact__lead', {
    opacity: 0,
    y: 80,
    scale: 0.8,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger: '.contact__lead',
        start: 'top 75%',
        onStart: () => {
            console.log('📞 Contact section grand entrance');
            // 背景に優雅な波紋効果
            createRippleEffect(document.querySelector('.contact'));
        }
    }
});

gsap.from('.contact__method', {
    opacity: 0,
    x: -100,
    rotateY: 90,
    stagger: 0.2,
    duration: 1.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.contact__methods',
        start: 'top 75%'
    }
});

// ===========================================
// 波紋効果
// ===========================================
function createRippleEffect(element) {
    const ripples = [];
    
    for (let i = 0; i < 3; i++) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border: 2px solid rgba(168, 201, 127, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        gsap.to(ripple, {
            width: 800,
            height: 800,
            x: -400,
            y: -400,
            opacity: 0,
            duration: 3,
            delay: i * 0.5,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
        });
    }
}

// ===========================================
// ナビゲーション
// ===========================================
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('nav-open');
        console.log('📱 Mobile nav with style');
    });
}

// スムーズなアンカーリンク
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: {
                    y: target,
                    offsetY: 100
                },
                duration: 2,
                ease: 'power4.inOut'
            });
        }
    });
});

// ===========================================
// 完成通知
// ===========================================
setTimeout(() => {
    console.log('🎉 ULTIMATE ANIMATIONS LOADED!');
    console.log('✨ This website is now LEGENDARY!');
}, 1000);

// ===========================================
// ローディングスタイル
// ===========================================
const loaderStyle = document.createElement('style');
loaderStyle.textContent = `
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        overflow: hidden;
    }
    
    .loader__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .loader__bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: cloud-float 6s ease-in-out infinite;
    }
    
    .loader__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(45, 80, 22, 0.6);
        backdrop-filter: blur(3px);
    }
    
    .loader__content {
        position: relative;
        z-index: 2;
        text-align: center;
        color: #F7FFF7;
    }
    
    .loader__zen {
        font-family: 'Shippori Mincho', serif;
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 2rem;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        animation: zen-pulse 2s ease-in-out infinite;
    }
    
    .loader__line {
        width: 100px;
        height: 2px;
        background: rgba(255, 255, 255, 0.8);
        margin: 0 auto;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        animation: line-expand 2s ease-in-out infinite;
    }
    
    @keyframes cloud-float {
        0%, 100% { transform: scale(1) translateY(0px); }
        50% { transform: scale(1.05) translateY(-10px); }
    }
    
    @keyframes zen-pulse {
        0%, 100% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.1); opacity: 1; }
    }
    
    @keyframes line-expand {
        0%, 100% { width: 100px; }
        50% { width: 200px; }
    }
`;
document.head.appendChild(loaderStyle);