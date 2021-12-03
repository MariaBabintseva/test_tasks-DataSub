const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "tabls_student",
	password: "",
});

connection.connect(function (err) {
	if (err) {
		return console.error("Ошибка: " + err.message);
	} else {
		console.log("Подключение к серверу MySQL успешно установлено");
	}
});

const students =
	"SELECT students.FirstName, students.LastName FROM students, exams WHERE students.StudentId = exams.StudentId AND exams.Result < 3 GROUP BY students.FirstName, students.LastName HAVING COUNT(*) > 2";

connection.query(students, function (err, results) {
	console.log(err);
	console.log(results);
});

const groups =
	"SELECT students.GroupNum FROM students INNER JOIN (SELECT students.StudentId FROM students INNER JOIN exams ON students.StudentId = exams.StudentId WHERE exams.Result < 3 GROUP BY students.StudentId HAVING COUNT(*) > 2) as t ON students.StudentId = t.StudentId GROUP BY students.GroupNum HAVING COUNT(*) > 10";
connection.query(groups, function (err, results) {
	console.log(err);
	console.log(results);
});

connection.end(function (err) {
	if (err) {
		return console.log("Ошибка: " + err.message);
	}
	console.log("Подключение закрыто");
});
