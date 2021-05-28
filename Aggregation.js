//People Collection:

1.
db.people.aggregate([
  {$group:{
    _id:null,
    averageAge: {$avg: "$age"}
  }}
])

2.
db.people.aggregate([
  {$group:{
    _id:"$gender",
    gender: {$avg: "$age"}
  }}
])

3.
db.people.aggregate([
  {$group:{
    _id:"$gender",
    gender: {$sum: 1}
  }}
])

4.
db.people.aggregate([
  {$sort:{ age:-1}},
  {$limit: 3}
])

5.
db.people.aggregate([
  {$sort:{ age:1}},
  {$limit: 5},
  {$project: {
    first_name: "$first_name",
    last_name: "$last_name",
    age: '$age'
  }}

])

6.///NOT RIGHT
db.people.aggregate([
  {$unwind: "$children"},
  {$group:{
    _id:null,
    childrenTotal: {$sum: "$children.name"},
    totalTotal: {$sum: "$children"}
  }}
])

7.
db.people.aggregate([
  { $match: { state: "Michigan" } },
  { $unwind: "$children" },
  { $match: { "children.age": { $lt: 10} } },
  { $project: {
      _id: false,
      "children.name": true,
      "children.age": true
  }},
])


8.// Not right
db.people.aggregate([
  { $match: { state: null } },
  { $unwind: "$children" },
  { $group: { "children.age": { $avg: "$age"} } },
  { $project: {
      _id: false,
      "state": true,
      "age": true
  }},
])


9.
db.orders.aggregate([
  {$group:{
    _id: "$total",
    totalAmout: { $sum:true}
  }}
])





