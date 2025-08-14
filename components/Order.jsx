import classNames from 'classnames'
import styles from '@/styles/components/Order.module.scss'

function Order() {
  return (
    <section className={styles.order} id='order'>
      <h3 className='sub-heading'>Приезжайте</h3>
      <h1 className='heading'>Как до нас добраться</h1>
      <div className={styles['images-container']}>
        <div className={styles['special-dish__image']}>
                <img src="images/road_Dargavs.jpg" style={{width: '50rem'}} alt='Dargavs' />
              </div>
        <div className={styles['special-dish__image']}>
          <img src="images/map.png" style={{width: '75rem'}} alt='Dargavs' />
        </div>
      </div>
    </section>
  )
}

export default Order
