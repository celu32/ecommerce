
import CardCredit from '../../components/ui/CardCredit/CardCredit'
import { Table } from '../../components/ui/Table/Table'
import styles from './Checkout.module.css'
import { Toaster} from 'sonner'

const Checkout = () => {
  return (
    <div className={styles.container}>
        <Toaster richColors />
        <h2 className={styles.title}>Checkout</h2>
        <div className={styles.grid}>
            <div className={styles.tableContainer}> 
               <Table /> 
            </div>
            <div className={styles.tableContainer}>
                <CardCredit />
            </div>
        </div>   
        
    </div>
  )
}

export default Checkout