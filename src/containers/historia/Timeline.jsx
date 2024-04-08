import { TimelineItem } from '@/components/historia/TimelineItem'
import { timelineItems } from '@/helpers'
import '@/sass/containers/historia/Timeline.scss'

export const Timeline = () => {
    return (
        <section className='timeline-container'>
            <div className='timeline-content'>
                {timelineItems?.map((item) =>
                    <TimelineItem item={item} key={item.id} />
                )}
            </div>
            <hr />
        </section>
    )
}
