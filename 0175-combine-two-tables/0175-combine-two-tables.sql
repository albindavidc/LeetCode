-- Write your PostgreSQL query statement below
SELECT prsn.firstName, prsn.lastName, adrs.city , adrs.state
FROM 
    person prsn
LEFT JOIN 
    address adrs ON prsn.personId = adrs.personId;
