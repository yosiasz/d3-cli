# d3-cli 
Command Line Tool for creating d3 stub code 

## Examples
d3-cli -ct Bar -ds http://locahost:8000/api/cars

d3-cli -ct Bar -ds cars.json

d3-cli -ct Bar -ds cars.csv

## Dependencies
node.js commander inquirer

## Installation

## Quick Example

```javascript
const sql = require('mssql')

async () => {
    try {
        const pool = await sql.connect('mssql://username:password@localhost/database')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}
```

## Documentation