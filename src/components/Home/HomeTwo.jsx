import styles from './home.module.css';
export default function Home() {
    return (
        <div>
            <div class={styles.hellotwo}>
            <div class={styles.border}></div>
            <div class={styles.hellotilt}>
                <span>lorem ipsum</span>
            </div>
            <div class={styles.border}></div>
            </div>
            <div class={styles.name} >
                <div class={styles.pdesc} >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam quia praesentium a eum voluptatibus aut, at pariatur ipsam ex dolore maxime possimus eaque porro tempora ad necessitatibus, repellat earum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam quia praesentium a eum voluptatibus aut, at pariatur ipsam ex dolore maxime possimus eaque porro tempora ad necessitatibus, repellat earum!</p>
                </div>
            </div>
        </div>
    );
}
