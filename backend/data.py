
reservations = [
       {
      "mid": "m001",
      "member": "Allen",
      "notes": "allergic to shellfish",
      "guests": 4,
      "arrival": "2025-09-16T12:00",
      "room": "room-b",
      "guest_array": [
        "Slipp Head",
        "Bullet Douche",
        "Cream face"
      ],

    },
    {
      "mid": "m002",
      "member": "Becca",
      "notes": "birthday celebration",
      "guests": 2,
      "arrival": "2025-08-17T11:30",
      "room": "room-e",
      "guest_array": [
        "Soblious"
      ],

    },
    {
      "mid": "m003",
      "member": "Carlos",
      "notes": "vegetarian options",
      "guests": 2,
      "arrival": "2025-11-17T10:30",
      "room": "room-d",
      "guest_array": [
        "Cuddles"
      ],
    
    },
    {
      "mid": "m004",
      "member": "Dana",
      "notes": "wheelchair accessible table",
      "guests": 5,
      "arrival": "2025-07-24T10:45",
      "room": "room-d",
      "guest_array": [
        "Doon Vorgadoon",
        "Doon Boon",
        "Doon Beer",
        "Deloius"
      ],

    },
    {
      "mid": "m005",
      "member": "Eli",
      "notes": "prefers window seat",
      "guests": 3,
      "arrival": "2025-07-31T13:00",
      "room": "room-b",
      "guest_array": [
        "Cohler",
        "Vorgadoon"
      ],

    },
    {
      "mid": "m002",
      "member": "Becca",
      "guests": 1,
      "notes": "Dining alone",
      "arrival": "2025-07-19T10:00",
      "guest_array": [],
      "id": "1092",
      "room": "room-a"
    },
    {
      "mid": "m004",
      "member": "Dana",
      "guests": 5,
      "notes": "Big Yost",
      "arrival": "2025-08-08T14:30",
      "room": "room-e",
      "guest_array": [
        "Sessions",
        "Falvuly",
        "Croheer",
        "Vorgadoon"
      ],

    },
    {
      "mid": "m005",
      "member": "Eli",
      "guests": 6,
      "notes": "Grow east bortest",
      "arrival": "2025-07-12T09:45",
      "room": "room-c",
      "guest_array": [
        "Tense Tench",
        "Grouber",
        "Delous",
        "Doon Vorgadoon",
        "Doon Hardidoon"
      ],
   
    },
    {
      "mid": "m005",
      "member": "Eli",
      "guests": 3,
      "notes": "No looking at us",
      "arrival": "2025-06-29T10:45",
      "guest_array": [
        "Eagle Ass",
        "Bounty"
      ],

      "room": "room-a"
    },
    {
      "mid": "m002",
      "member": "Dana",
      "guests": 1,
      "notes": "Dining alone",
      "arrival": "2025-10-01T15:45",
      "room": "room-e",
      "guest_array": [],

    }

  ]
members = [
    {
      "id": "m001",
      "member": "Allen"
    },
    {
      "id": "m002",
      "member": "Becca"
    },
    {
      "id": "m003",
      "member": "Carlos"
    },
    {
      "id": "m004",
      "member": "Dana"
    },
    {
      "id": "m005",
      "member": "Eli"
    }
  ]

if __name__ == "__main__":
    print(f"✅ Loaded {len(reservations)} reservations and {len(members)} members")