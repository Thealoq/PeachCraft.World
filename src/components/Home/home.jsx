import styles from './home.module.css';
let array = [
  {
    text: '1.19 Yeni Güncellemeler',
    link: 'https://i.pinimg.com/736x/e3/e3/c0/e3e3c0d75f41ab1c7ccbde5527778545.jpg',
  },
  {
    text: 'Farkı Puliginler Farkı Deneyim',
    link: 'https://64.media.tumblr.com/6871c3ebbd533825e8332ca3efcc8451/fbf9539b0cdf2179-35/s1280x1920/aedd8fae7968d8b78105b8755427d68ed8d998a0.png',
  }
]


export default function Home() {
  return (
    <div class={styles.home}>
      <div class={styles.const} >
        <div class={styles.boxy}>
          {
            array.map(item => {
              return (
                <div style={{ "background-image": `url(${item.link})` }} class={styles.box}>
                  <div class={styles.boxtext}>
                    <div class={styles.boxtexti}>
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div style={{ "background-image": `url("https://i.pinimg.com/originals/6f/84/f3/6f84f310d0196fbbda402f99a26d741b.jpg")` }} class={styles.boxiy}>
            <div class={styles.boxtextif}>
               <span>Hikayeni Sen Yarat</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
