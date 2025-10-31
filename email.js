    <script>
        // 郵件數據
        const emails = {
            1: {
                title: "新產品發布會邀請",
                sender: "市場部 <marketing@company.com>",
                time: "今天 09:30",
                avatar: "https://picsum.photos/id/91/200",
                content: `
                    <p class="mb-4">親愛的同事們：</p>
                    <p class="mb-4">我們很高興地邀請您參加我公司即將舉行的新產品發布會。本次發布會將展示我們最新研發的產品線，並分享公司未來的發展戰略。</p>
                    <p class="mb-4">活動詳情如下：</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>時間：2023年7月15日（週六）上午10:00</li>
                        <li>地點：公司總部一樓會議中心</li>
                        <li>主題：創新科技，引領未來</li>
                    </ul>
                    <p class="mb-4">請於7月10日前確認是否參加，並告知參加人數，以便我們安排座位和餐飲。</p>
                    <p class="mb-4">如有任何問題，請隨時與市場部聯繫。</p>
                    <p>期待您的到來！</p>
                    <p class="mt-4 font-medium">市場部 敬上</p>
                `,
                attachments: `
                    <h3 class="text-lg font-semibold mb-4">附件</h3>
                    <div class="space-y-3">
                        <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <i class="fa fa-file-pdf-o text-danger text-2xl"></i>
                            <div class="flex-1">
                                <p class="font-medium">新產品發布會流程.pdf</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">2.4 MB</p>
                            </div>
                            <button class="btn-outline text-sm">
                                <i class="fa fa-download mr-1"></i> 下載
                            </button>
                        </div>
                        <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <i class="fa fa-file-image-o text-accent text-2xl"></i>
                            <div class="flex-1">
                                <p class="font-medium">產品宣傳海報.jpg</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">1.8 MB</p>
                            </div>
                            <button class="btn-outline text-sm">
                                <i class="fa fa-download mr-1"></i> 下載
                            </button>
                        </div>
                    </div>
                `
            },
            2: {
                title: "關於更新員工手冊的通知",
                sender: "人力資源部 <hr@company.com>",
                time: "昨天 14:20",
                avatar: "https://picsum.photos/id/64/200",
                content: `
                    <p class="mb-4">各位同事：</p>
                    <p class="mb-4">現將更新後的員工手冊發給大家，請各位及時查閱並遵照執行。本次更新主要涉及以下幾個方面：</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>考勤制度調整</li>
                        <li>員工福利升級</li>
                        <li>績效考核標準更新</li>
                        <li>遠程辦公管理辦法</li>
                    </ul>
                    <p class="mb-4">請大家在一周內閱讀完畢，如有任何疑問，請及時與人力資源部聯繫。</p>
                    <p>感謝大家的配合！</p>
                    <p class="mt-4 font-medium">人力資源部</p>
                `,
                attachments: `
                    <h3 class="text-lg font-semibold mb-4">附件</h3>
                    <div class="space-y-3">
                        <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <i class="fa fa-file-word-o text-primary text-2xl"></i>
                            <div class="flex-1">
                                <p class="font-medium">員工手冊（2023版）.docx</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">3.7 MB</p>
                            </div>
                            <button class="btn-outline text-sm">
                                <i class="fa fa-download mr-1"></i> 下載
                            </button>
                        </div>
                    </div>
                `
            },
            3: {
                title: "您的投訴已收到",
                sender: "客戶服務中心 <support@company.com>",
                time: "昨天 09:15",
                avatar: "https://picsum.photos/id/26/200",
                content: `
                    <p class="mb-4">尊敬的客戶：</p>
                    <p class="mb-4">感謝您的來信以及對我們服務的反饋。我們已收到您關於產品質量的投訴，投訴編號為：CS20230615001。</p>
                    <p class="mb-4">我們的專業團隊將在24小時內對您反映的問題進行調查，並給予您明確的答復和解决方案。</p>
                    <p class="mb-4">如果您有任何補充信息，請隨時聯繫我們的客戶服務熱線：400-123-4567。</p>
                    <p>感謝您的理解與支持！</p>
                    <p class="mt-4 font-medium">客戶服務中心</p>
                `,
                attachments: ""
            },
            4: {
                title: "系統升級維護通知",
                sender: "技術支持團隊 <tech@company.com>",
                time: "06-15 16:40",
                avatar: "https://picsum.photos/id/177/200",
                content: `
                    <p class="mb-4">各位用戶：</p>
                    <p class="mb-4">為了提供更好的服務體驗，我們計劃於本周末進行系統升級維護，具體安排如下：</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>維護時間：6月17日（周六）00:00 - 06:00</li>
                        <li>影響範圍：所有線上服務將暫停</li>
                        <li>升級內容：系統性能優化，安全加固，新功能上線</li>
                    </ul>
                    <p class="mb-4">請各位提前做好準備，由此帶來的不便，敬請諒解。</p>
                    <p class="mb-4">如有緊急問題，請聯繫技術支持熱線：021-8888-7777。</p>
                    <p class="mt-4 font-medium">技術支持團隊</p>
                `,
                attachments: ""
            },
            5: {
                title: "6月份工資發放通知",
                sender: "財務部 <finance@company.com>",
                time: "06-14 10:30",
                avatar: "https://picsum.photos/id/1066/200",
                content: `
                    <p class="mb-4">各位同事：</p>
                    <p class="mb-4">本月工資將於6月30日發放，請各位留意查收。本月工資單已上傳至內部係統，您可以登錄係統查詢詳細明細。</p>
                    <p class="mb-4">若對工資有任何疑問，請於6月25日前與財務部聯繫核實，聯繫方式：</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>郵箱：finance@company.com</li>
                        <li>電話：021-8888-6666</li>
                        <li>辦公室：3樓305室</li>
                    </ul>
                    <p class="mt-4 font-medium">財務部</p>
                `,
                attachments: ""
            }
        };

        // 側邊欄切換
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const backdrop = document.getElementById('sidebar-backdrop');
            
            sidebar.classList.toggle('-translate-x-full');
            backdrop.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        }
        
        document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
        
        // 加載郵件詳情
        function loadEmailDetail(emailId) {
            const email = emails[emailId];
            if (!email) return;
            
            // 更新桌面端詳情
            document.getElementById('detail-title').textContent = email.title;
            document.getElementById('sender-name').textContent = email.sender;
            document.getElementById('sender-time').textContent = email.sender;
            document.getElementById('sender-avatar').src = email.avatar;
            document.getElementById('detail-content').innerHTML = email.content;
            
            // 處理附件顯示
            const attachmentsContainer = document.getElementById('detail-attachments');
            if (email.attachments) {
                attachmentsContainer.innerHTML = email.attachments;
                attachmentsContainer.classList.remove('hidden');
            } else {
                attachmentsContainer.classList.add('hidden');
            }
            
            // 更新移動端詳情
            document.getElementById('mobile-detail-title').textContent = email.title;
            document.getElementById('mobile-sender-name').textContent = email.sender;
            document.getElementById('mobile-sender-time').textContent = email.time;
            document.getElementById('mobile-sender-avatar').src = email.avatar;
            document.getElementById('mobile-detail-content').innerHTML = email.content;
            document.getElementById('mobile-detail-attachments').innerHTML = email.attachments || '';
        }
        
        // 郵件點擊事件 - 加載並顯示詳情
        document.querySelectorAll('.mail-item').forEach(item => {
            item.addEventListener('click', function(e) {
                // 忽略複選框點擊
                if (e.target.type === 'checkbox' || e.target.closest('input[type="checkbox"]')) {
                    return;
                }
                
                const emailId = this.getAttribute('data-id');
                loadEmailDetail(emailId);
                
                // 在移動設備上顯示郵件詳情頁
                if (window.innerWidth < 768) {
                    document.getElementById('mobile-mail-detail').classList.remove('translate-x-full');
                    document.body.classList.add('overflow-hidden');
                } else {
                    // 在桌面設備上顯示郵件詳情
                    document.getElementById('mail-detail').classList.remove('hidden');
                }
                
                // 標記為已讀
                this.classList.remove('font-medium');
                this.classList.add('mail-hover');
                const subject = this.querySelector('h3');
                subject.classList.remove('font-semibold');
                subject.classList.add('text-gray-600', 'dark:text-gray-400');
            });
        });
        
        // 返回列表按鈕
        document.getElementById('back-to-list').addEventListener('click', function() {
            document.getElementById('mobile-mail-detail').classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
        
        // 寫郵件彈窗
        const composeModal = document.getElementById('compose-modal');
        const modalContent = document.getElementById('modal-content');
        
        document.querySelector('button.btn-primary').addEventListener('click', function() {
            composeModal.classList.remove('hidden');
            composeModal.classList.add('flex');
            document.body.classList.add('overflow-hidden');
            
            // 動畫效果
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        });
        
        function closeModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                composeModal.classList.add('hidden');
                composeModal.classList.remove('flex');
                document.body.classList.remove('overflow-hidden');
            }, 300);
        }
        
        document.getElementById('close-modal').addEventListener('click', closeModal);
        
        composeModal.addEventListener('click', function(e) {
            if (e.target === composeModal) {
                closeModal();
            }
        });
        
        // 點擊星星切換狀態
        document.querySelectorAll('.mail-item button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // 防止觸發郵件點擊事件
                
                const icon = this.querySelector('i');
                if (icon.classList.contains('fa-star-o')) {
                    icon.classList.remove('fa-star-o');
                    icon.classList.add('fa-star');
                    this.classList.remove('text-gray-400', 'hover:text-primary');
                    this.classList.add('text-warning', 'hover:text-warning/80');
                } else {
                    icon.classList.remove('fa-star');
                    icon.classList.add('fa-star-o');
                    this.classList.remove('text-warning', 'hover:text-warning/80');
                    this.classList.add('text-gray-400', 'hover:text-primary');
                }
            });
        });
        
        // 響應式調整
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                // 在大屏幕上顯示側邊欄和桌面端郵件詳情
                document.getElementById('sidebar').classList.remove('-translate-x-full');
                document.getElementById('sidebar-backdrop').classList.add('hidden');
                document.getElementById('mobile-mail-detail').classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
            }
        });
    </script>
