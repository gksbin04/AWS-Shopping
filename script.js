// ===== 상품 데이터 =====
const products = [
    {
        id: 1,
        name: '강아지 (말티즈)',
        price: 500000,
        image: '🐕',
        description: '사랑스러운 말티즈 강아지입니다'
    },
    {
        id: 2,
        name: '고양이 (페르시안)',
        price: 400000,
        image: '🐱',
        description: '우아한 페르시안 고양이입니다'
    },
    {
        id: 3,
        name: '토끼',
        price: 150000,
        image: '🐰',
        description: '귀여운 토끼입니다'
    },
    {
        id: 4,
        name: '햄스터',
        price: 50000,
        image: '🐹',
        description: '작고 사랑스러운 햄스터입니다'
    },
    {
        id: 5,
        name: '앵무새',
        price: 300000,
        image: '🦜',
        description: '똑똑한 앵무새입니다'
    },
    {
        id: 6,
        name: '금붕어',
        price: 30000,
        image: '🐠',
        description: '아름다운 금붕어입니다'
    },
    {
        id: 7,
        name: '거북이',
        price: 200000,
        image: '🐢',
        description: '오래 함께할 수 있는 거북이입니다'
    },
    {
        id: 8,
        name: '뱀',
        price: 600000,
        image: '🐍',
        description: '신비로운 뱀입니다'
    },
    {
        id: 9,
        name: '물고기',
        price: 100000,
        image: '🐟',
        description: '다양한 종류의 물고기입니다'
    }
];

// ===== 상태 관리 =====
let cart = [];

// ===== DOM 요소 참조 =====
const productList = document.getElementById('productList');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCount = document.getElementById('cartCount');
const successMessage = document.getElementById('successMessage');
const successText = document.getElementById('successText');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');

// ===== 초기화 =====
function init() {
    renderProducts();
    attachEventListeners();
    loadCartFromStorage();
}

// ===== 상품 렌더링 =====
function renderProducts() {
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">${product.price.toLocaleString()}원</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    장바구니에 추가
                </button>
            </div>
        </div>
    `).join('');
}

// ===== 장바구니에 상품 추가 =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    showNotification(`${product.name}이(가) 장바구니에 추가되었습니다!`);
}

// ===== 장바구니에서 상품 제거 =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

// ===== 수량 변경 =====
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCartToStorage();
        updateCartUI();
    }
}

// ===== 장바구니 UI 업데이트 =====
function updateCartUI() {
    // 장바구니 개수 업데이트
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // 장바구니 항목 렌더링
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">장바구니가 비어있습니다</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-image">${item.image}</span>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.price.toLocaleString()}원</p>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" 
                           onchange="updateQuantity(${item.id}, parseInt(this.value))" min="1">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">삭제</button>
                </div>
                <div class="cart-item-price">
                    ${(item.price * item.quantity).toLocaleString()}원
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }

    // 총액 계산
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total.toLocaleString() + '원';
}

// ===== 구매 처리 =====
function checkout() {
    if (cart.length === 0) {
        alert('장바구니가 비어있습니다');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemNames = cart.map(item => `${item.name}(${item.quantity}개)`).join(', ');

    successText.textContent = `총액: ${total.toLocaleString()}원\n상품: ${itemNames}`;
    successMessage.classList.remove('hidden');
    cartModal.classList.add('hidden');

    // 장바구니 초기화
    cart = [];
    saveCartToStorage();
    updateCartUI();
}

// ===== 로컬스토리지 저장 =====
function saveCartToStorage() {
    localStorage.setItem('animalShopCart', JSON.stringify(cart));
}

// ===== 로컬스토리지에서 로드 =====
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('animalShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// ===== 알림 표시 =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// ===== 이벤트 리스너 등록 =====
function attachEventListeners() {
    // 장바구니 버튼
    cartBtn.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
    });

    // 모달 닫기
    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    // 구매하기
    checkoutBtn.addEventListener('click', checkout);

    // 계속 쇼핑하기
    continueShoppingBtn.addEventListener('click', () => {
        successMessage.classList.add('hidden');
    });

    // 모달 외부 클릭시 닫기
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.add('hidden');
        }
    });

    successMessage.addEventListener('click', (e) => {
        if (e.target === successMessage) {
            successMessage.classList.add('hidden');
        }
    });
}

// ===== 앱 시작 =====
document.addEventListener('DOMContentLoaded', init);
