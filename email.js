
    // 侧边栏切换
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      sidebar.classList.toggle('absolute');
      sidebar.classList.toggle('inset-y-0');
      sidebar.classList.toggle('left-0');
      sidebar.classList.toggle('w-64');
    });
    
    // 邮件项点击事件
    const mailItems = document.querySelectorAll('[data-id]');
    const emailDetail = document.getElementById('email-detail');
    const closeDetail = document.getElementById('close-detail');
    
    mailItems.forEach(item => {
      item.addEventListener('click', (e) => {
        // 忽略复选框点击
        if (e.target.type === 'checkbox' || e.target.parentElement.type === 'checkbox') {
          return;
        }
        
        // 在移动设备上显示详情
        if (window.innerWidth < 1024) {
          emailDetail.classList.remove('hidden');
          emailDetail.classList.add('absolute', 'inset-0', 'w-full', 'z-40');
        }
      });
    });
    
    closeDetail.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        emailDetail.classList.add('hidden');
        emailDetail.classList.remove('absolute', 'inset-0', 'w-full', 'z-40');
      }
    });
    
    // 写邮件弹窗
    const composeButtons = document.querySelectorAll('button:first-of-type');
    const composeModal = document.getElementById('compose-modal');
    const closeCompose = document.getElementById('close-compose');
    
    composeButtons[0].addEventListener('click', () => {
      composeModal.classList.remove('hidden');
      composeModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
    
    closeCompose.addEventListener('click', () => {
      composeModal.classList.add('hidden');
      composeModal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    });
    
    // 点击弹窗外部关闭
    composeModal.addEventListener('click', (e) => {
      if (e.target === composeModal) {
        composeModal.classList.add('hidden');
        composeModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
      }
    });
    
    // 窗口大小变化时调整布局
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        sidebar.classList.remove('hidden', 'absolute', 'inset-y-0', 'left-0', 'w-64');
        sidebar.classList.add('block');
        
        emailDetail.classList.remove('hidden', 'absolute', 'inset-0', 'w-full', 'z-40');
        emailDetail.classList.add('block');
      } else {
        sidebar.classList.add('hidden');
        emailDetail.classList.add('hidden');
      }
    });
    
    // 星标切换功能
    const starIcons = document.querySelectorAll('.fa-star, .fa-star-o');
    starIcons.forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        if (icon.classList.contains('fa-star-o')) {
          icon.classList.remove('fa-star-o', 'text-neutral-400');
          icon.classList.add('fa-star', 'text-yellow-400');
        } else {
          icon.classList.remove('fa-star', 'text-yellow-400');
          icon.classList.add('fa-star-o', 'text-neutral-400');
        }
      });
    });
