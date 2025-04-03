// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 导航栏高亮
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// 暗色模式切换 (可选)
const darkModeToggle = document.createElement('div');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.backgroundColor = 'var(--primary-color)';
darkModeToggle.style.color = 'white';
darkModeToggle.style.width = '50px';
darkModeToggle.style.height = '50px';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.display = 'flex';
darkModeToggle.style.justifyContent = 'center';
darkModeToggle.style.alignItems = 'center';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
darkModeToggle.style.zIndex = '1000';
darkModeToggle.style.fontSize = '1.2rem';

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

document.body.appendChild(darkModeToggle);
