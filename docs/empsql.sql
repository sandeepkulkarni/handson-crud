
DROP DATABASE IF EXISTS employees;
CREATE DATABASE IF NOT EXISTS employees;
USE employees;


SELECT 'CREATING DATABASE STRUCTURE' as 'INFO';

DROP TABLE IF EXISTS dept_emp,
                     dept_manager,
                     titles,
                     salaries, 
                     employees, 
                     departments;

   set storage_engine = InnoDB;
-- set storage_engine = MyISAM;
-- set storage_engine = Falcon;
-- set storage_engine = PBXT;
-- set storage_engine = Maria;

select CONCAT('storage engine: ', @@storage_engine) as INFO;

CREATE TABLE employees (
    emp_id      INT             NOT NULL AUTO_INCREMENT,
    first_name  VARCHAR(20)     NOT NULL,
	email		VARCHAR(30)		NOT NULL,
    birth_date  DATE,
	last_name   VARCHAR(20),
    gender      VARCHAR(2),    
    hire_date   DATE,
    PRIMARY KEY (emp_id)
);

CREATE TABLE departments (
    dept_id     INT         	NOT NULL AUTO_INCREMENT,
    dept_name   VARCHAR(40)     NOT NULL,
    PRIMARY KEY (dept_id),
    UNIQUE  KEY (dept_name)
);


CREATE TABLE dept_emp (
    dept_emp_id INT 			NOT NULL AUTO_INCREMENT,
	emp_id      INT             NOT NULL,
    dept_id     INT		        NOT NULL,
    from_date   DATE            NOT NULL,
    to_date     DATE            NOT NULL,
    FOREIGN KEY (emp_id)  REFERENCES employees   (emp_id)  ON DELETE CASCADE,
    FOREIGN KEY (dept_id) REFERENCES departments (dept_id) ON DELETE CASCADE,
    PRIMARY KEY (dept_emp_id)
);

CREATE TABLE titles (
	title_id    INT             NOT NULL AUTO_INCREMENT,
    emp_id      INT             NOT NULL,
    title       VARCHAR(50)     NOT NULL,
    from_date   DATE            NOT NULL,
    to_date     DATE,
    FOREIGN KEY (emp_id) REFERENCES employees (emp_id) ON DELETE CASCADE,
    PRIMARY KEY (title_id)
); 

CREATE TABLE salaries (
    salary_id   INT 			NOT NULL AUTO_INCREMENT,
	emp_id      INT             NOT NULL,
    salary      INT             NOT NULL,
    from_date   DATE            NOT NULL,
    to_date     DATE            NOT NULL,
    FOREIGN KEY (emp_id) REFERENCES employees (emp_id) ON DELETE CASCADE,
    PRIMARY KEY (salary_id)
); 

commit;