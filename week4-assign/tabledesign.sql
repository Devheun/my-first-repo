create table `students` (
    `student_name` varchar(30),
    `id` int primary key AUTO_INCREMENT,
    `phone_num` int,
    `addresses` varchar(50),
    `cul_grade` int DEFAULT 1,
    `avg_grade` numeric(3,2),
    `attending` tinyint DEFAULT 1,
    foreign key (`id`) references `student_id`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table `student_id`(
    `id` int primary key AUTO_INCREMENT,
    `major` varchar (30),
    `individual_num` int
)ENGINE=InnoDB DEFAULT CHARSET=utf8;