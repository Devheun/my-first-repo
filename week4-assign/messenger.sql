create table users (
    id varchar(20) primary key,
    pw varchar(20),
    nickname varchar(20),
    photo_link varchar(50),
    profile_message varchar(30),
    withdraw tinyint DEFAULT 0,
    enroll_date DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table channels (
    channel_link varchar(50) primary key,
    channel_name varchar(20),
    create_user varchar(20),
    max_accept int,
    withdraw tinyint DEFAULT 0,
    create_date DATE,
    foreign key (create_user) references users(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table chats (
    contents varchar(100),
    writer varchar(20),
    channel varchar(50) PRIMARY KEY,
    create_date DATE,
    foreign key (channel) references channels(channel_link)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table follows (
    follower varchar(20) primary key,
    followee varchar(20),
    follow_date DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table blocks (
    blocker varchar(20) primary key,
    blockee varchar(20),
    block_date DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;