class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
    this.originalContent = new Map(); // 存储原始英文内容
    this.isAnimating = false; // 添加动画锁,防止快速点击
    this.init();
  }

  init() {
    this.cacheOriginalContent(); // 缓存原始内容
    this.applyLanguage(this.currentLang, false);
    this.attachEventListeners();
    this.updateNavButtonText(); // 初始化导航按钮文本
  }

  // 在初始化时缓存所有原始英文内容
  cacheOriginalContent() {
    // 缓存 data-i18n-inline 元素
    const inlineElements = document.querySelectorAll('[data-i18n-inline]');
    
    inlineElements.forEach((element, index) => {
      // 使用元素的唯一标识存储原始内容
      const uniqueId = `inline-${index}`;
      element.setAttribute('data-inline-id', uniqueId);
      this.originalContent.set(uniqueId, element.innerHTML);
    });

    // 缓存 data-i18n-config 元素的英文内容
    const configElements = document.querySelectorAll('[data-i18n-config]');
    
    configElements.forEach((element, index) => {
      const uniqueId = `config-${index}`;
      element.setAttribute('data-config-id', uniqueId);
      // 缓存 data-lang-en 的内容
      const enContent = element.getAttribute('data-lang-en');
      if (enContent) {
        this.originalContent.set(uniqueId, enContent);
      }
    });
  }

  attachEventListeners() {
    const button = document.getElementById('langToggleNav');
    if (button) {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // 防止默认行为
        this.toggleLanguage();
      });
    }
  }

  updateNavButtonText() {
    const langText = document.querySelector('.lang-text');
    if (langText) {
      langText.textContent = this.currentLang === 'en' ? '中文' : 'English';
    }
  }

  toggleLanguage() {
    // 防抖:如果正在动画中,忽略点击
    if (this.isAnimating) {
      return;
    }
    
    this.isAnimating = true;
    
    // 切换语言
    this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('preferredLanguage', this.currentLang);
    
    // 更新导航按钮文本
    const langText = document.querySelector('.lang-text');
    if (langText) {
      langText.classList.add('lang-fade-out');
      setTimeout(() => {
        langText.textContent = this.currentLang === 'en' ? '中文' : 'English';
        langText.classList.remove('lang-fade-out');
        langText.classList.add('lang-fade-in');
        setTimeout(() => {
          langText.classList.remove('lang-fade-in');
        }, 300);
      }, 200);
    }
    
    // 应用语言切换
    this.applyLanguage(this.currentLang, true);
    
    // 500ms 后解除动画锁(稍长于最长动画时间)
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  applyLanguage(lang, animate = true) {
    // 处理内联翻译元素(data-i18n-inline)
    const inlineElements = document.querySelectorAll('[data-i18n-inline]');
    
    inlineElements.forEach(element => {
      const uniqueId = element.getAttribute('data-inline-id');
      let content;
      
      if (lang === 'en') {
        // 切换到英文:使用缓存的原始内容
        content = this.originalContent.get(uniqueId);
      } else {
        // 切换到其他语言:使用 data-lang-* 属性
        content = element.getAttribute(`data-lang-${lang}`);
      }
      
      if (content) {
        if (animate) {
          element.classList.add('lang-fade-out');
          
          setTimeout(() => {
            element.innerHTML = content;
            element.classList.remove('lang-fade-out');
            element.classList.add('lang-fade-in');
            
            setTimeout(() => {
              element.classList.remove('lang-fade-in');
            }, 300);
          }, 200);
        } else {
          element.innerHTML = content;
        }
      }
    });

    // 处理使用 i18n.js 配置的纯文本元素
    const textElements = document.querySelectorAll('[data-i18n]');
    
    textElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = translations[lang]?.[key]; // 使用可选链,防止报错
      
      if (translation) {
        if (animate) {
          element.classList.add('lang-fade-out');
          
          setTimeout(() => {
            element.textContent = translation;
            element.classList.remove('lang-fade-out');
            element.classList.add('lang-fade-in');
            
            setTimeout(() => {
              element.classList.remove('lang-fade-in');
            }, 300);
          }, 200);
        } else {
          element.textContent = translation;
        }
      }
    });

    // 处理使用 i18n.js 配置的HTML元素(向后兼容)
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    
    htmlElements.forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = translations[lang]?.[key]; // 使用可选链,防止报错
      
      if (translation) {
        if (animate) {
          element.classList.add('lang-fade-out');
          
          setTimeout(() => {
            element.innerHTML = translation;
            element.classList.remove('lang-fade-out');
            element.classList.add('lang-fade-in');
            
            setTimeout(() => {
              element.classList.remove('lang-fade-in');
            }, 300);
          }, 200);
        } else {
          element.innerHTML = translation;
        }
      }
    });

    // 处理使用 _config.yml 变量的元素
    const configElements = document.querySelectorAll('[data-i18n-config]');
    
    configElements.forEach(element => {
      // 从 data-lang-* 属性获取翻译
      const translation = element.getAttribute(`data-lang-${lang}`);
      
      if (translation) {
        // 使用与其他元素相同的动画效果
        if (animate) {
          element.classList.add('lang-fade-out');
          
          setTimeout(() => {
            element.textContent = translation;
            element.classList.remove('lang-fade-out');
            element.classList.add('lang-fade-in');
            
            setTimeout(() => {
              element.classList.remove('lang-fade-in');
            }, 300);
          }, 200);
        } else {
          element.textContent = translation;
        }
      }
    });

    // 更新 HTML lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }
}

// 更健壮的初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
  });
} else {
  // DOM 已经加载完成
  new LanguageSwitcher();
}