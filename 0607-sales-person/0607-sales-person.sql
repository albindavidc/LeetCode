-- Write your PostgreSQL query statement below
SELECT salPer.name AS name
FROM SalesPerson salPer
WHERE NOT EXISTS(
    SELECT 1
    FROM Orders ord
    JOIN Company com ON ord.com_id = com.com_id
    WHERE ord.sales_id = salPer.sales_id
    AND com.name = 'RED'
);