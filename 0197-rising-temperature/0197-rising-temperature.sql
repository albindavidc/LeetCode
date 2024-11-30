-- Write your PostgreSQL query statement below
SELECT W1.id
FROM Weather W1
JOIN Weather W2 ON DATE(W1.recordDate) = DATE(W2.recordDate + INTERVAL '1 DAY')
WHERE W1.temperature > W2.temperature;