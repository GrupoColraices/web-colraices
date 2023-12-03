import '@/sass/components/Line.scss';

const Line = ({ width = '50' }) => {

    const styles = {
        width: `${width}%`,
    }

    return (
        <div className='line1'>
            <div style={styles} className='line2'></div>
        </div>
    )
}

export default Line