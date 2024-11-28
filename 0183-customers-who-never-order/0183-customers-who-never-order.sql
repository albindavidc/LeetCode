-- Write your PostgreSQL query statement below
SELECT cus.name AS Customers
FROM Customers cus
JOIN orders ord ON cus.id = ord.customerId;