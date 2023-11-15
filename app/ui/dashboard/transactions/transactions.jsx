import styles from './transactions.module.css';

const Transactions = () => {
  return (
    <div className="bg-white p-2">
      <h2 className={styles.title}>最新交易</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>姓名</td>
            <td>状态</td>
            <td>时间</td>
            <td>数量</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>王知之</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>进行中</span>
            </td>
            <td>2024/2/14</td>
            <td>￥4,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>王知之</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>完成</span>
            </td>
            <td>2024/2/14</td>
            <td>￥3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>王知之</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>取消</span>
            </td>
            <td>2024/2/14</td>
            <td>￥4,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>王知之</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>进行中</span>
            </td>
            <td>2024/2/14</td>
            <td>￥4,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
