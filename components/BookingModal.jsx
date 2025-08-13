import { useEffect } from 'react'
import styles from '@/styles/components/BookingModal.module.scss'

function BookingModal({ isOpen, onClose }) {
  console.log('=== BookingModal рендерится ===')
  console.log('isOpen:', isOpen)
  console.log('onClose:', onClose)

  useEffect(() => {
    console.log('=== useEffect сработал ===')
    console.log('isOpen изменился на:', isOpen)
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      console.log('✅ Body overflow установлен в hidden')
    } else {
      document.body.style.overflow = 'unset'
      console.log('✅ Body overflow установлен в unset')
    }

    return () => {
      document.body.style.overflow = 'unset'
      console.log('🧹 Cleanup: Body overflow сброшен')
    }
  }, [isOpen])

  if (!isOpen) {
    console.log('❌ BookingModal не отображается, isOpen = false')
    return null
  }

  console.log('✅ BookingModal отображается!')

  const handleContactClick = (type, value) => {
    console.log('Клик по контакту:', type, value)
    let url = ''
    
    switch (type) {
      case 'whatsapp':
        url = `https://wa.me/${value}?text=Здравствуйте! Хочу забронировать столик в вашем кафе.`
        break
      case 'telegram':
        url = `https://t.me/${value}`
        break
      case 'phone':
        url = `tel:${value}`
        break
      default:
        return
    }
    
    console.log('Открываю URL:', url)
    window.open(url, '_blank')
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <span className="fas fa-times"></span>
        </button>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Забронировать столик</h2>
          <p className={styles.subtitle}>Выберите удобный способ связи:</p>
          
          <div className={styles.contacts}>
            <div 
              className={styles.contactItem}
              onClick={() => handleContactClick('whatsapp', '79001234567')}
            >
              <div className={styles.icon}>
                <span className="fab fa-whatsapp"></span>
              </div>
              <div className={styles.info}>
                <h3>WhatsApp</h3>
                <p>+7 (900) 123-45-67</p>
              </div>
              <span className={styles.arrow}>→</span>
            </div>

            <div 
              className={styles.contactItem}
              onClick={() => handleContactClick('telegram', 'dargavs_cafe')}
            >
              <div className={styles.icon}>
                <span className="fab fa-telegram-plane"></span>
              </div>
              <div className={styles.info}>
                <h3>Telegram</h3>
                <p>@dargavs_cafe</p>
              </div>
              <span className={styles.arrow}>→</span>
            </div>

            <div 
              className={styles.contactItem}
              onClick={() => handleContactClick('phone', '+79001234567')}
            >
              <div className={styles.icon}>
                <span className="fas fa-phone"></span>
              </div>
              <div className={styles.info}>
                <h3>Позвонить</h3>
                <p>+7 (900) 123-45-67</p>
              </div>
              <span className={styles.arrow}>→</span>
            </div>
          </div>

          <div className={styles.footer}>
            <p>Работаем ежедневно с 10:00 до 23:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
