const arc = [
    {
        "Manual": "64",
        "System": "SF",
        "Type": "Pago"
    },
    {
        "Manual": "10",
        "System": "SJ",
        "Type": "Pago"
    },
    {
        "Manual": "34",
        "System": "S9",
        "Type": "Negación"
    }
]

fetch(arc)
    .then(res => res.json())
    .then(json => console.log(json))