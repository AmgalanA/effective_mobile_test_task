import Timeago from 'react-timeago';

import styles from './Activity.module.scss'

import { IActivity } from "../../../types/activity.type"

interface IProp {
    activity: IActivity
}

const Activity: React.FC<IProp> = ({ activity }) => {
    return (
    <div className={styles.activity}>
        <span className={styles.type}>{activity.type}</span>
        <span className={styles.timeago}>
            <Timeago date={(new Date(Number(activity.time))).toString()} />
        </span>
    </div>
  )
}

export default Activity