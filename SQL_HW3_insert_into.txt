--2. Заполните таблицы данными. Не менее 10 строк в каждой таблице
insert into salary (id, monthly_salary) values (default, 500);
insert into salary (id, monthly_salary) values (default, 550);
insert into salary (id, monthly_salary) values (default, 600);
insert into salary (id, monthly_salary) values (default, 650);
insert into salary (id, monthly_salary) values (default, 700);
insert into salary (id, monthly_salary) values (default, 750);
insert into salary (id, monthly_salary) values (default, 800);
insert into salary (id, monthly_salary) values (default, 860);
insert into salary (id, monthly_salary) values (default, 1100);
insert into salary (id, monthly_salary) values (default, 2100);

select * from salary;

insert into roles (id, role_title) values (default, 'Sales manager');
insert into roles (id, role_title) values (default, 'Development manager');
insert into roles (id, role_title) values (default, 'Assistant manager');
insert into roles (id, role_title) values (default, 'Operator');
insert into roles (id, role_title) values (default, 'Product manager');
insert into roles (id, role_title) values (default, 'Lawyer');
insert into roles (id, role_title) values (default, 'Sales director');
insert into roles (id, role_title) values (default, 'Marketer');
insert into roles (id, role_title) values (default, 'Accountnant');
insert into roles (id, role_title) values (default, 'HR');

select * from roles;

insert into roles_salary (id, id_role, id_salary) values (default, 1, 1);
insert into roles_salary (id, id_role, id_salary) values (default, 3, 2);
insert into roles_salary (id, id_role, id_salary) values (default, 4, 5);
insert into roles_salary (id, id_role, id_salary) values (default, 5, 6);
insert into roles_salary (id, id_role, id_salary) values (default, 7, 7);
insert into roles_salary (id, id_role, id_salary) values (default, 8, 9);
insert into roles_salary (id, id_role, id_salary) values (default, 2, 10);
insert into roles_salary (id, id_role, id_salary) values (default, 6, 3);
insert into roles_salary (id, id_role, id_salary) values (default, 9, 4);
insert into roles_salary (id, id_role, id_salary) values (default, 10, 1);

select * from roles_salary;

insert into employees (id, employee_name) values (default, 'Alexandra');
insert into employees (id, employee_name) values (default, 'Olga');
insert into employees (id, employee_name) values (default, 'Kate');
insert into employees (id, employee_name) values (default, 'Sergey');
insert into employees (id, employee_name) values (default, 'Maria');
insert into employees (id, employee_name) values (default, 'Michail');
insert into employees (id, employee_name) values (default, 'Valera');
insert into employees (id, employee_name) values (default, 'Vera');
insert into employees (id, employee_name) values (default, 'Nadezda');
insert into employees (id, employee_name) values (default, 'Lubov');

select * from employees;

insert into employees_roles (id, id_role, id_employee) values (default, 1, 1);
insert into employees_roles (id, id_role, id_employee) values (default, 2, 2);
insert into employees_roles (id, id_role, id_employee) values (default, 3, 4);
insert into employees_roles (id, id_role, id_employee) values (default, 5, 5);
insert into employees_roles (id, id_role, id_employee) values (default, 4, 10);
insert into employees_roles (id, id_role, id_employee) values (default, 6, 10);
insert into employees_roles (id, id_role, id_employee) values (default, 7, 9);
insert into employees_roles (id, id_role, id_employee) values (default, 8, 8);
insert into employees_roles (id, id_role, id_employee) values (default, 9, 8);
insert into employees_roles (id, id_role, id_employee) values (default, 10, 1);

select * from employees_roles;

insert into service (id, service_title, price) values (default, 'Business to business', 200);
insert into service (id, service_title, price) values (default, 'Business-to-consumer', 1500);
insert into service (id, service_title, price) values (default, 'CRM', 1550);
insert into service (id, service_title, price) values (default, 'Cross-sell', 550);
insert into service (id, service_title, price) values (default, 'KPI', 950);
insert into service (id, service_title, price) values (default, 'Up-sell', 1370);
insert into service (id, service_title, price) values (default, 'Customer base', 2300);
insert into service (id, service_title, price) values (default, 'Active sales', 1300);
insert into service (id, service_title, price) values (default, 'Passive sales', 1500);
insert into service (id, service_title, price) values (default, 'Closing the deal', 3500);

select * from service;

insert into materials (id, material_title, amount, price) values (default, 'Sales book', 20, 100);
insert into materials (id, material_title, amount, price) values (default, 'Regulations on work with CRM', 10, 150);
insert into materials (id, material_title, amount, price) values (default, 'Remuneration statement', 11, 180);
insert into materials (id, material_title, amount, price) values (default, 'Statute', 15, 250);
insert into materials (id, material_title, amount, price) values (default, 'Job description', 35, 300);
insert into materials (id, material_title, amount, price) values (default, 'Set of KPIs', 35, 575);
insert into materials (id, material_title, amount, price) values (default, 'Customer forms', 100, 750);
insert into materials (id, material_title, amount, price) values (default, 'Customer database', 5, 1500);
insert into materials (id, material_title, amount, price) values (default, 'Business database', 2, 2000);
insert into materials (id, material_title, amount, price) values (default, 'Bill of sale', 45, 650);

select * from materials;

insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 1, 1, 1, '2021-10-13', 1);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 2, 2, 2, '2021-10-13', 3);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 3, 4, 3, '2021-10-13', 4);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 5, 4, 3, '2021-10-13', 4);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 7, 5, 4, '2021-10-13', 5);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 4, 6, 5, '2021-10-14', 6);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 8, 8, 8, '2021-10-14', 8);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 6, 7, 9, '2021-10-14', 9);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 10, 3, 6, '2021-10-14', 2);
insert into claim (id, service_id, employee_id, material_id, claim_date, sales_manager) values (default, 10, 3, 6, '2021-10-14', 2);

select * from claim;

--4. Добавить 10 строк поставщиков в таблицу suppliers

insert into suppliers (id, suppliers_name) values (default, 'Ekramma');
insert into suppliers (id, suppliers_name) values (default, 'Lestyle');
insert into suppliers (id, suppliers_name) values (default, 'MALI');
insert into suppliers (id, suppliers_name) values (default, 'FloVia');
insert into suppliers (id, suppliers_name) values (default, 'Kosta');
insert into suppliers (id, suppliers_name) values (default, 'MiLana');
insert into suppliers (id, suppliers_name) values (default, 'Monro24');
insert into suppliers (id, suppliers_name) values (default, 'Odebayka');
insert into suppliers (id, suppliers_name) values (default, 'Diori');
insert into suppliers (id, suppliers_name) values (default, 'FitPro');

select * from suppliers;

