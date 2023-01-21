CREATE TABLE public.usuarios (
	usuario_id varchar(15) NOT NULL,
	username varchar(50) NOT NULL,
	name varchar(200) NULL,
	password varchar(100) NULL
);

alter table usuarios add primary key(usuario_id);