--1. Создайте базу из представленной картинки:
-- У каждой таблицы должно быть поле id;
--id автоинкрементальный и является первичным ключом.

create table salary (
id serial primary key,
monthly_salary int not null
);

create table roles (
id serial primary key,
role_title varchar (50) not null
);

create table roles_salary (
id serial,
id_role int not null,
id_salary int not null,
primary key (id),
foreign key (id_role)
	references roles (id),
foreign key (id_salary)
	references salary (id)
);

create table employees (
id serial primary key,
employee_name varchar (50)
);

create table employees_roles (
id serial,
id_role int not null,
id_employee int not null,
primary key (id),
foreign key (id_role)
	references roles (id),
foreign key (id_employee)
	references employees (id)
);

create table service (
id serial primary key,
service_title varchar (50),
price int not null
);

create table materials (
id serial primary key,
material_title varchar (50),
amount int not null,
price int not null
);

create table claim (
id serial,
service_id int not null,
employee_id int not null,
material_id int not null,
claim_date date,
sales_manager int not null,
primary key (id),
foreign key (service_id)
	references service (id),
foreign key (employee_id)
	references employees (id),
foreign key (material_id)
	references materials (id),
foreign key (sales_manager)
	references employees (id)
);

--3. Добавить таблицу Suppliers с полями id, name

create table suppliers (
id serial primary key,
suppliers_name varchar (50) not null
);
