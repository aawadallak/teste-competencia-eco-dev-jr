SELECT name FROM students
    WHERE marks > 75
    order by RIGHT(name, 3), id;
