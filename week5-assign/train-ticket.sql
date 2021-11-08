select users.id, name, seat_number from users inner join tickets on users.id=tickets.user  where train=11 order by seat_number;

select users.id,name,count(*) as trains_count, sum(distance)/10 as total_distance from users inner join tickets on tickets.user=users.id inner join trains on tickets.train=trains.id group by users.id order by total_distance desc limit 0,6; 

select trains.id, type, st1.name as src_stn,st2.name as dst_stn,Timediff(arrival,departure) as diff from trains inner join stations as st1 on trains.source=st1.id inner join stations as st2 on st2.id=trains.destination group by trains.id order by diff DESC limit 0,6;

select types.name, st1.name as src_stn, st2.name as dst_stn, departure, arrival, round(fare_rate/100 * distance/10,-2) as fare from trains inner join types on trains.type=types.id inner join stations as st1 on trains.source=st1.id inner join stations as st2 on st2.id=trains.destination group by trains.id order by departure;

select trains.id,types.name,st1.name as src_stn, st2.name as dst_stn, count(*) as occupied, max_seats from trains inner join tickets on tickets.train=trains.id inner join types on trains.type=types.id inner join stations as st1 on trains.source=st1.id inner join stations as st2 on st2.id=trains.destination group by trains.id order by trains.id;