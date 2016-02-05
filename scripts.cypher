CREATE (you:Person {name:"You"}) RETURN you

MATCH  (you:Person {name:"You"})
CREATE (you)-[like:LIKE]->(neo:Database:NoSql:Graph {name:"Neo4j" })
RETURN you,like,neo

MATCH (you:Person {name:"You"})
FOREACH (name in ["Johan","Rajesh","Anna","Julia","Andrew"] |
    FOREACH (name in ["Johan","Rajesh","Anna","Julia","Andrew"] |
        CREATE (you)-[:FRIEND]->(:Person {name:name}))

MATCH (neo:Database {name:"Neo4j"})
MATCH (anna:Person {name:"Anna"})
CREATE (anna)-[:FRIEND]->(:Person:Expert {name:"Amanda"})-[:WORKED_WITH]->(neo)

MATCH (neo:Database {name:"Neo4j"})
MATCH (johan:Person {name:"Johan"})
CREATE (johan)-[:FRIEND]->(:Person:Expert {name:"Max"})-[:WORKED_WITH]->(neo)

CREATE (you)-[:FRIEND]->(:Person {name:name}))