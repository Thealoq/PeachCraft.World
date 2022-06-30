import styles from './app.module.css';
import { SiMinetest } from 'solid-icons/si'
import { AiOutlineAlignCenter,AiOutlineClose } from 'solid-icons/ai'
import { createSignal } from 'solid-js'
const [count, setCount ] = createSignal(0)
setCount(true)
export default function App() {
    return (
        <div  class={styles.app}>
            <div class={styles.box}>
                <SiMinetest size={64} color="#fff" />
            </div>
            <div class={styles.menu}>
                <div class={styles.title}>
                    <span>PeachCraft</span>
                </div>
                <div class={styles.center}>
                    <div>
                        <span>Anasayfa</span>
                    </div>
                    <div>
                        <span>Sıralama</span>
                    </div>
                    <div>
                        <span>Galeri</span>
                    </div>
                    <div>
                        <span>Blog</span>
                    </div>
                </div>
                <div class={styles.responsive} >
                    <div>
                    <div id='active' class={styles.active}>
                        <div class={styles.close}>
                        <AiOutlineClose size={32} color="#fff" onClick={
                                () => {
                                    if(setCount(count)) {
                                    document.getElementById('active').style.display = 'flex';
                                        return setCount(false)
                                    } else {
                                        document.getElementById('active').style.display = 'none';
                                        return setCount(true)
                                    }
                                }
                            }/>
                        </div>
                               <div class={styles.resmenu}>
                                   <div class="restext">
                                    <div class={styles.restexti} >
                                        <span>Anasayfa</span>
                                    </div>
                                    <div  class={styles.restexti}>
                                        <span>Sıralama</span>
                                    </div>
                                    <div  class={styles.restexti}>
                                        <span>Galeri</span>
                                    </div>
                                    <div class={styles.restexti}>
                                        <span>Blog</span>
                                    </div>
                                   </div>
                               
                            </div>
                        </div>
                         <div class={styles.burger}>
                            <AiOutlineAlignCenter size={32} color="#fff" onClick={
                                () => {
                                    if(setCount(count)) {
                                    document.getElementById('active').style.display = 'flex';
                                        return setCount(false)
                                    } else {
                                        document.getElementById('active').style.display = 'none';
                                        return setCount(true)
                                    }
                                }
                            }/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
