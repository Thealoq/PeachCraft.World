import styles from './home.module.css';
import { createSignal } from 'solid-js'
export default function App() {
    let CardArray = [
        {
            Title: "Dostluk",
            background: "https://cdn.discordapp.com/attachments/991501984907677787/991894171336056892/dostluk.png",
            description: "Sunucuda Takılarak Yeni Dostlar Yeni Arkadaş Edinebilirsin.",
            img: "https://cdn.discordapp.com/attachments/991501984907677787/991894379759423549/kindpng_1110647.png"
        },
        {
            Title: "Eğlence",
            background: "https://cdn.discordapp.com/attachments/991501984907677787/991894933982150767/unknown.png",
            description: "Yeni Özellikler ve Puliginler İle Eğlenceli Bir Dakkikalar Geçirebilirsin.",
            img: "https://cdn.discordapp.com/attachments/991501984907677787/991913688514703501/pngwing.com_2.png"
        },
        {
            Title: "OyunModlari",
            background: "https://cdn.discordapp.com/attachments/991501984907677787/991896073729749122/unknown.png",
            description: "Farkı Oyun Modlari İle Yeni Bir Deneyim Sunuyoruz.",
            img: "https://cdn.discordapp.com/attachments/991501984907677787/991896519622008852/kindpng_6047872.png"
        },
    ]
    return (
        <div class={styles.Cards}>
            {
                CardArray.map(item => {
                    return (
                        <div  >
                            <div style={{ "background-image": `url(${item.background})` }} class={styles.Card}></div>
                            <div class={styles.background}>
                                <div class={styles.littlelogo}>
                                    <img src={item.img} />
                                </div>
                                <div class={styles.middletitle}>
                                    <span>{item.Title}</span>
                                </div>
                                <div class={styles.middledesc} >
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    );
}
