import { useState, useCallback } from 'react'; 

import styles from './History.module.scss'
import { HistoryService } from '../../api/history/history.service';
import { IActivity } from '../../types/activity.type';
import Activity from './Activity/Activity';
import { UserService } from '../../api/user/user.service';

const History = () => {
    const [userId, setUserId] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [activities, setActivities] = useState<IActivity[]>([])
    const [email, setEmail] = useState<string>('')
    const [pageCounter, setPageCounter] = useState<number>(0)

    const updateUser = async () => {
      if (!email) return;

      setIsLoading(true)

      const payload = {
        user_id: Number(userId),
        email,
      }

      await UserService.updateUser(payload);

      onSubmit()

      setIsLoading(false);
    }

    const onSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        if (!userId) return;

        setIsLoading(true);

        const activities = await HistoryService.fetchHistory(Number(userId));

        setActivities(activities);

        setEmail('')

        setIsLoading(false);
    }

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    }, [email])

    return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Find User</h1>
        <form className={styles.form} onSubmit={onSubmit}>
            <input 
              className={styles.input} 
              value={userId} 
              onChange={e => setUserId(e.target.value)} 
              type="number" 
              placeholder='Enter an ID' 
            />
        
            <button 
              className={styles.button} 
              disabled={!userId || isLoading} 
              type='submit'
            >
              Get history
            </button>
        </form>

        {activities.length > 0 && (
            <div className={styles.activities}>
              <input 
                value={email} 
                onChange={onChangeInput} 
                type='email' 
                placeholder='Enter an email...' 
                className={styles.input} 
              />
              <button 
                className={styles.update_button} 
                disabled={!email || isLoading} 
                onClick={updateUser}
              >
                Update user info
              </button>
              <div className={styles.activities_container}>
                {activities
                // .reverse()
                .filter((_, index) => 
                (index >= pageCounter * 3) && (index < (pageCounter + 1) * 3))
                .map(activity => <Activity key={activity.id} activity={activity} />)}
              </div>

              <span>{pageCounter + 1} / {Math.ceil((activities.length) / 3)}</span>
              <div className={styles.page_nav_container}>
                <button 
                  className={styles.page_nav_button} 
                  disabled={pageCounter === 0} 
                  onClick={() => setPageCounter(prev => prev - 1)} 
                  type='button'
                >
                  Back
                </button>

                <button 
                  className={styles.page_nav_button} 
                  disabled={pageCounter === (Math.floor((activities.length - 1) / 3))} 
                  onClick={() => setPageCounter(prev => prev + 1)} 
                  type='button'
                >
                  Next
                </button>
              
              </div>
            </div>
        )}
    </div>
  )
}

export default History