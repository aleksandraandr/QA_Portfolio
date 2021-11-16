--5. Обновить таблицу materials. Добавить поле suplier_id, которое связано с полем id в таблице suppliers
--Добавление столбца
alter table materials
add column suplier_id int;
--Добавление внешнего ключа
alter table materials
add foreign key (suplier_id)
	references suppliers (id);

select * from materials;

--6. Обновить таблицу employees. Добавить varchar поле surname на 50 символов
--Добавление столбца
alter table employees 
add column surname varchar (50);
--Обновление таблицы с заполнением поля
update employees
set surname = 'Ivanova'
where id = 1;

select * from employees;

--7. Обновить таблицу salary. Добавить varchar поле currency на 7 символов
--Добавление столбца
alter table salary
add column currency varchar (7);
--Обновление таблицы с заполнением поля
update salary 
set currency = 'euro'
where id = 1;

select * from salary;