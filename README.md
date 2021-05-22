# azure-resume
My own azure resume, following ACG project video.

## IaC

- Resourcegroup
- Cosmos DB Account (API: SQL, Capacity mode: Serverless)
- Data Explorer/New Database
- New Container  (Use existing DB, Container id: counter, Partition key: /id)
- New item

```
{
    "id": "1",
    "count": 0
}
```
- 