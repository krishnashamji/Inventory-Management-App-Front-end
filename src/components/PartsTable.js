import styles from '../styles/PartsTable.module.css'

function PartsTable() {
  return (
    <div className={styles.PartsTableContainer}>
      <div className={styles.tableTitleAndDownloadAllButton}>
        <h4>Inventory</h4>
        <button>Download all</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Owner</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tablePaginationFooterContainer}>
        <button>Previous</button>
        <p>Page 1 of 10</p>
        <button>Next</button>
      </div>
    </div>
  )
}

export default PartsTable;



