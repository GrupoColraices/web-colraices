export const TitleLine = ({ width = 10, left = false, right = false, top = 20 }) => {
    const styles = {
        width: `${width}%`,
        height: '2px',
        background: '#b08c47',
        position: 'absolute',
        top: `${top}%`,
    }
    left ? (styles.left = '0') : (styles.right = '0')

    return <div style={styles}></div>
}
