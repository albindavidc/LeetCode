-- Write your PostgreSQL query statement below
WITH FilteredActivity AS (
    SELECT DISTINCT activity_date, user_id
    FROM Activity
    WHERE activity_date BETWEEN DATE '2019-06-28' AND DATE '2019-07-27'
)
SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM FilteredActivity
GROUP BY activity_date
ORDER BY activity_date;