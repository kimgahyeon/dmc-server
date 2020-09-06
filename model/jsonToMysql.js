/**
 * 20. 09. 04. 박찬형 - JSON to MySQL
 */

const fs = require('fs');
const path = require('path');
const connection = require('./connection');
connection.connect();

// Papers
const papers = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/files/paper.json'), 'utf8')).papers;

let isSCI = 1;
for(let i = 1; i < papers.length; i++) {
    if(papers[i] == "Non-SCI") {
        isSCI = 0;
        continue;
    }
    const sql = 'INSERT INTO papers(title, author, info, isSCI) VALUES (?, ?, ?, ?)';
    const values = [papers[i].title, papers[i].author, papers[i].info, isSCI];
    connection.query(sql, values, (err, rows) => {
        if(err) throw err;
        else console.log(rows);
    });
}

// Projects
// const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/files/project.json'), 'utf8')).projects;

// for(let i = 0; i < projects.length; i++) {
//     const year = projects[i].info.split('-')[1];
//     const sql = 'INSERT INTO projects(title, author, info, year) VALUES (?, ?, ?, ?)';
//     const values = [projects[i].title, projects[i].author, projects[i].info, year]
//     connection.query(sql, values, (err, rows) => {
//         if(err) throw err;
//         else console.log(rows);
//     });
// }