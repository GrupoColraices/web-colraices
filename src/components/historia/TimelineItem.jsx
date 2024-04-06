import '@/sass/components/historia/TimelineItem.scss'
export const TimelineItem = ({ item }) => {
    return (
        <div className={`timeline-item ${item.position}`}>
            <span className={`${item.position}`}>{item.year}</span>
            <p>{item.text}</p>
            <div className='vertical-line'></div>
        </div>
    )
}
