import Image from 'next/image'
import '@/sass/components/molecules/CircleDecorator.scss'
export const CircleDecorator = ({ right = false }) => {
    if (right)
        return (
            <Image
                className="Figure-right"
                src={'/circleRight.svg'}
                width={39}
                height={122}
                alt="image circle"
            />
        )
    return (
        <Image
            className="Figure-left"
            src={'/circleLeft.svg'}
            width={43}
            height={144}
            alt="image circle"
        />
    )
}
