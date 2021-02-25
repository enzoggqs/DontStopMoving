import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/enzoggqs.png" alt="Enzo Gabriel" />
            <div>
                <strong>Enzo Gabriel</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}